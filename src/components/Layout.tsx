/** @jsxImportSource theme-ui **/
import { useEffect } from 'react'
import { timing } from '../theme'
import { Global } from '@emotion/react'
import { useStateValue } from '../state/state'
import useSWR from 'swr'

type LayoutProps = {
  children?: any
}

const Layout = ({ children }: LayoutProps) => {
  const [, dispatch] = useStateValue()
  const { data: dapps, error } = useSWR('/api/rest')
  // https://github.com/system-ui/theme-ui/issues/834#issuecomment-625865772
  // TODO: Check if this is still an issue?
  const pageLevelAnimationTiming = timing[6] + 's'

  useEffect(() => {
    // Dummy example dispatch
    // Add this case to reducer.ts
    dispatch({
      type: 'SET_AVAILABLE_DAPPS',
      payload: dapps,
    })
  }, [dapps])

  return (
    <div className="layout">
      {children}
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'border-box',
            position: 'relative',
            outline: 'none',
            '*::before, *::after': {
              boxSizing: 'border-box',
              position: 'relative',
            },
          },
          html: {
            scrollBehavior: 'smooth',
            fontSize: '100%',
            WebkitTextSizeAdjust: '100%',
            fontVariantLigatures: 'none',
            WebkitFontVariantLigatures: 'none',
            textRendering: 'optimizeLegibility',
            MozOsxFontSmoothing: 'grayscale',
            fontSmoothing: 'antialiased',
            WebkitFontSmoothing: 'antialiased',
            textShadow: 'rgba(0, 0, 0, 0.01) 0 0 0.0625rem',
            '&::before, &::after': {
              display: 'none',
            },
          },
          body: {
            minHeight: '100vh',
            scrollBehavior: 'smooth',
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'scroll',
          },
          'body::before': {
            display: 'none',
            zIndex: -1,
            position: 'absolute',
            content: "''",
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'scroll',
          },
          'body::after': {
            display: 'none',
            zIndex: -1,
            position: 'absolute',
            content: "''",
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'scroll',
          },
          fieldset: {
            padding: 0,
            border: 'none',
          },
          '.contents': {
            margin: 'auto',
            width: '100%',
            minHeight: '100vh',
            height: 'max-content',
            display: 'flex',
            flexDirection: 'column',
          },
          main: {
            flex: 1,
          },
          '.content': {
            width: '100%',
            maxWidth: '1224px',
            margin: 'auto',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '.row': {
            display: 'flex',
          },
          '.animate.fadeIn': {
            animation: `fadeIn 1.75s`,
          },
          '.animate.fadeOut': {
            animation: `fadeOut 1.75s`,
          },
          'ul, ol, li': {
            margin: 0,
            padding: 0,
            listStyle: 'none',
          },
          'a, Button, [type="Button"], [type="reset"], [type="submit"], [type="file"], [type="file"]::-webkit-file-upload-Button':
          {
            textTransform: 'none',
            appearance: 'none',
            cursor: 'pointer',
          },
          'a:visited, a:active': {
            textDecoration: 'none',
          },
          'img, svg, picture, span, a, b, u, i, small, sub, strong, label': {
            display: 'inline-block',
          },
          'table, thead, tbody, tfoot, tr, td, th': {
            borderSpacing: 0,
            textAlign: 'left',
          },
          'table tbody tr:nth-of-type(even)': {
            background: 'rgba(255, 255, 255, 0.04)',
          },
          'table tbody tr:hover': {
            background: 'rgba(255, 255, 255, 0.04)',
          },
          '.bn-onboard-custom': {
            zIndex: 100000,
          },
        })}
      />
    </div>
  )
}
export default Layout
