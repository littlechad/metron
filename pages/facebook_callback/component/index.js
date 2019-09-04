import React from 'react'

import withLayout from 'lib/layout'

import {
  ContainerItem,
  Heading,
  LoadingLinear,
} from 'components'

function Component() {
  return (
    <ContainerItem xs={12}>
      <LoadingLinear />
      <Heading textAlign="center" title="Redirecting...." subheading="Please wait" />
    </ContainerItem>)
}

export default withLayout(Component)
