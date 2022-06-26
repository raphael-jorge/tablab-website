/**
 * When using MUI's theme with MUI System or any other styling solution, it can be convenient
 * to add additional variables to the theme so you can use them everywhere.
 *
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    typography: {
      fontFamilies: {
        brand: string;
        default: string;
        monospace: string;
      };
    };
  }

  interface ThemeOptions {
    typography?: {
      fontFamilies?: {
        brand?: string;
        default?: string;
        monospace?: string;
      };
    };
  }
}
