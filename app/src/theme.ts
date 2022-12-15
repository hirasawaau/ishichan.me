import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#9A1663',
    },
    secondary: {
      main: '#FF5858',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
