import React from 'react';
import styled from 'styled-components';
import projects from './src/data/projects';
import quotes from './src/data/quotes';

export default {
  getSiteProps: () => ({
    title: 'Kurits Young - Portfolio',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getProps: () => ({ projects, quotes }),
        children: projects.map(project => ({
          path: `/${project.slug}`,
          component: 'src/pages/Project',
          getProps: () => ({ project })
        })),
      },
    ]
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
        {renderMeta.styleTags}
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),
}
