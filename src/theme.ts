import { Paragraph } from 'theme-ui'
import buttonVariants from './theme/buttons'

export const timing = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 3]

const GlobalTheme = {
  space: ['12px','14px','16px','18px','20px','32px'],
  sizes: ['12px','14px','16px','18px','20px','32px'],
  fonts: {
    body: '"Montserrat", Helvetica',
    heading: '"Montserrat", Helvetica',
    monospace: '"Montserrat", Helvetica',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    background: '#121212',
    background0: '#242424',
    text: '#FFF',
    paragraph: '#898989',
    buttonSecondary: '#3e3e3e',
    primary: '#121212',
    secondary: '#242424',
    stroke: '#3e3e3e',
    // --bg--main-color: #121212;
    // --bg--secondary-color: #242424;
    // --button--secondary: #3e3e3e;
    // --stroke--color-1: #3e3e3e;
    // --text--main-color: #ffffff;
    // --text--paragraph-colot: #898989;  
  },
  forms: {
    select: {
      bg: 'transparent',
      border: '2px solid transparent',
      borderColor: 'text',
      cursor: 'pointer',
      borderRadius: '0.5rem',
    },
    input: {
      border: '2px solid transparent',
      borderColor: 'text',
    },
  },
  buttons: {
    ...buttonVariants
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
    h1: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      marginTop: '0',
      color: 'paragraph',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'secondary',
      textDecoration: 'none',
    },
    pre: {
      mt: 0,
      fontFamily: 'monospace',
      overflowX: 'auto',
      border: '2px solid transparent',
      borderColor: 'text',
      padding: '.75rem',
      borderRadius: '0.5rem',
      color: 'text',
      code: {
        color: 'text',
      },
    },
    code: {
      m: 0,
      fontFamily: 'monospace',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default GlobalTheme