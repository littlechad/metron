import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  Close as CloseIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
} from '@material-ui/icons'

import {
  blue,
  green,
  amber,
} from '@material-ui/core/colors'

import {
  IconButton,
  SnackbarContent,
  Snackbar,
  makeStyles,
} from '@material-ui/core'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const styles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: blue[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}))

function CustomSnackbarContent(props) {
  const {
    className, message, onClose, variant, showCloseButton, ...other
  } = props
  const Icon = variantIcon[variant]
  const classes = styles()
  return (
    <SnackbarContent
      className={classnames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classnames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={showCloseButton ? [
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ] : null}
      {...other}
    />
  )
}

CustomSnackbarContent.propTypes = {
  showCloseButton: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

const CustomSnackbarContentWrapper = CustomSnackbarContent

export function Component(props) {
  const {
    open,
    onClose,
    variant,
    message,
    duration,
    showCloseButton,
    ...other
  } = props

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      {...other}
    >
      <CustomSnackbarContentWrapper
        onClose={onClose}
        variant={variant}
        message={message}
        showCloseButton={showCloseButton}
      />
    </Snackbar>
  )
}

Component.defaultProps = {
  duration: 5000,
  variant: 'info',
  showCloseButton: false,
  onClose: () => ({}),
}

Component.propTypes = {
  showCloseButton: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  duration: PropTypes.number,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
}

export const Alert = Component

export default Alert
