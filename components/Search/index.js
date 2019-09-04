import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'

import {
  Avatar,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  TextField,
  makeStyles,
} from '@material-ui/core'

import PoundIcon from 'mdi-material-ui/Pound'
import MagnifyIcon from 'mdi-material-ui/Magnify'

const styles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    marginBottom: '20px',
  },
  focused: {
    borderColor: `${theme.palette.primary.main} !important`,
  },
  input: {
  },
  inputRoot: {
    '&:hover:before': {
      backgroundColor: `${theme.palette.primary.main} !important`,
      height: '1px',
    },
  },
  suggestion: {
    display: 'block',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    left: 0,
    right: 0,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
}))

const getSuggestionValue = suggestion => suggestion.name

function renderInput(inputProps) {
  const {
    ref, label, selected, ...other
  } = inputProps
  const classes = styles()
  return (
    <TextField
      fullWidth
      inputRef={ref}
      className={classes.inputRoot}
      variant="outlined"
      label={label}
      margin="normal"
      InputProps={{
        classes: {
          input: classes.input,
          focused: classes.focused,
        },
        endAdornment: <InputAdornment position="end"><MagnifyIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} /></InputAdornment>,
        ...other,
      }}
      InputLabelProps={{ shrink: true }}
    />
  )
}

function Component({
  keyword,
  label,
  selected,
  suggestions,
  handleSuggestions,
  handleSuggestionsClean,
  handleKeyword,
  handleResultClick,
}) {
  const classes = styles()
  return (
    <Autosuggest
      alwaysRenderSuggestions={false}
      getSuggestionValue={getSuggestionValue}
      inputProps={{
        classes,
        value: keyword,
        onChange: handleKeyword,
        label,
        selected,
      }}
      onSuggestionSelected={(event, { suggestion }) => () => ({})}
      onSuggestionsFetchRequested={handleSuggestions}
      onSuggestionsClearRequested={() => ({})}
      renderInputComponent={renderInput}
      renderSuggestion={suggestion => (
        <MenuItem component="div">
          <ListItemText primary={suggestion.name} />
        </MenuItem>)}
      renderSuggestionsContainer={(options) => {
        const { containerProps, children } = options
        return (
          <MenuList {...containerProps}>
            <Paper square>{children}</Paper>
          </MenuList>)
      }}
      suggestions={suggestions}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion,
      }}
    />
  )
}

Component.propTypes = {
  keyword: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.shape({}).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  handleSuggestions: PropTypes.func.isRequired,
  handleSuggestionsClean: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  handleResultClick: PropTypes.func.isRequired,
}

export const Search = Component

export default Search
