import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, lime, red, yellow } from '@material-ui/core/colors';

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: cyan,
      secondary: lime,
      custom: {
        defaultBars: 'white',
        movingBars: red[500],
      }
    }
  });

export default darkTheme;