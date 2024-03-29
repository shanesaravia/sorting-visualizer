import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, lime, red, grey } from '@material-ui/core/colors';

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: cyan,
      secondary: lime,
      custom: {
        defaultBars: grey[800],
        movingBars: red[500]
      }
    }
  });

export default lightTheme;