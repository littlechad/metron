#!/usr/bin/env groovy

pipeline {
  agent { label 'master' }
  environment {
    tag_ver = sh (
      script: "git tag -l --sort=v:refname | tail -1",
      returnStdout: true
      ).trim()
      cluster_name = "${params.cluster_name}"
      project_name = "${params.project_name}"
      file_id = "${params.file_id}"
      dash_name = sh (
       script: "if kubectl get virtualservices.networking.istio.io -n brotherhood-without-banners --cluster gke_${project_name}_asia-southeast1-a_${cluster_name} | grep -q p-metron && kubectl get -n brotherhood-without-banners --cluster gke_${project_name}_asia-southeast1-a_${cluster_name} virtualservices.networking.istio.io p-metron-vs -o yaml | grep -q blue ; then echo 'green'; else echo 'blue'; fi",
       returnStdout: true
      ).trim()
    }
    stages {
      stage('load env') {
        steps {
           configFileProvider([configFile(fileId: "${file_id}", variable: 'ENV_FILE')]) {
           echo " =========== ^^^^^^^^^^^^ Reading config from pipeline script "
           sh "rm -rf .env"
           sh "cp ${env.ENV_FILE} .env"
          }
        }
      }
      stage('build') {
        steps {
          sh "sed -i \'s:latest:${tag_ver}:\' docker-compose.yaml"
          sh "sed -i \'s:latest:${tag_ver}:\' .env"
          sh "docker-compose -f docker-compose.yaml build"
          sh "docker images"
        }
      }
      stage('cluster prepare') {
        steps {
          sh "kubectl create -n brotherhood-without-banners --cluster gke_${project_name}_asia-southeast1-a_${cluster_name} secret generic p-metron-secret --from-env-file=.env --dry-run -o yaml | kubectl apply -n brotherhood-without-banners --cluster gke_${project_name}_asia-southeast1-a_${cluster_name} -f -"
          sh "sed -i \':a;N;\$!ba;s/name: p-metron/name: p-metron-${dash_name}/2\' p-metron.yaml"
          sh "sed -i \'s,version: latest,version: ${dash_name},g\' p-metron.yaml"
          sh "sed -i \'s,p-metron:latest,p-metron:${tag_ver},g\' p-metron.yaml"
        }
      }
      stage('push') {
        steps {
          retry(10) {
            sh "gcloud docker -- push gcr.io/${project_name}/p-metron:${tag_ver}"
          }
          timeout(time: 20, unit: 'MINUTES') {
            sh 'echo checking health...'
          }
        }
      }
      stage('deploy') {
        steps {
          sh "kubectl apply -f p-metron.yaml -n brotherhood-without-banners --cluster gke_${project_name}_asia-southeast1-a_${cluster_name}"
        }
      }
    }
  }
