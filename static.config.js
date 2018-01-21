import React from 'react'

import { languages } from './config/locales'
import routes from './config/routes'

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
        <title>Kurtis Young - Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,900|Lato:400,400i" rel="stylesheet"/>
      </Head>
      <Body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');`,
          }}
        />
      </Body>
    </Html>
  ),
}
