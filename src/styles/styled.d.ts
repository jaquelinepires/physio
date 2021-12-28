import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      title: string;
      colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      bgcard: string;
      bgbutton: string;
      coloradmission: string;
      colorwithdraw: string;
      overlay: string;
      bgmodal: string;
      bginput:string;
      bgborder: string;
      bgedit: string;
    }
  }
}