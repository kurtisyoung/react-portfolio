import React from 'react'
import styled from 'styled-components'

import { languages } from './config/locales'
import routes from './config/routes'

// const Root = styled.div`
//   &.loading:empty {
//     position: absolute;
//     top: calc(50% - 4em);
//     left: calc(50% - 4em);
//     width: 6em;
//     height: 6em;
//     border: 1.1em solid rgba(0, 0, 0, 0.2);
//     border-left: 1.1em solid #000000;
//     border-radius: 50%;
//     animation: load8 1.1s infinite linear;
//   }
//   @keyframes load8 {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `

export default {
  getSiteProps: () => ({
    title: 'Kurits Young - Portfolio',
  }),
  getRoutes: async () => {
    let defaultRoutes = routes.map(route => ({ path: route.path }))
    let allRoutes = [...defaultRoutes]

    Object.keys(languages).forEach(language => {
      if (language === 'en') {
        return
      }

      defaultRoutes.forEach(route => {
        allRoutes.push({
          path: `${language}${route.path}`,
        })
      })
    })

    return allRoutes
  },
  Document: ({ Html, Head, Body, children, siteProps, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <title>Kurtis Young - Front End Developer</title>
        <meta name="description" content="Vancouver based Front End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/> */}
        <link rel="shortcut icon" href="./favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700,900|Poppins:400,400i,500" rel="stylesheet" />
      </Head>
      <Body>
        {/* <Root id="root" className="loading"></Root> */}
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-112812111-1', 'auto');
          ga('send', 'pageview');`,
          }}
        />
      </Body>
    </Html>
  ),
}
