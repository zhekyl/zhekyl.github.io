import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
    h3:{
      fontWeight:600,
    }
  },
  
}));

export default theme