# Portfolio Website built with React Static Boilerplate

[**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate) (RSB) is a
boilerplate and tooling for creating modern stand-alone web applications (aka
[SPA](https://en.wikipedia.org/wiki/Single-page_application)s) for a serverless architecture. RSB
significantly reduces cost by eliminating the need for servers such as EC2 instances because the
entire site can be hosted directly from CDN ([Firebase](https://www.firebase.com/), [GitHub
Pages](https://pages.github.com/), [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html),
or other similar cloud storage). Sites built with RSB can be fully functional with REST API or
GraphQL calls to micro-services such as [Amazon Lambda](https://aws.amazon.com/lambda/),
[Azure Functions](https://azure.microsoft.com/services/functions/), or dynamic Docker endpoints
hosted on [DigitalOcean](https://www.digitalocean.com/?refcode=eef302dbae9f&utm_source=github&utm_medium=oss_sponsorships&utm_campaign=opencollective).
RSB demonstrates how to use component-based UI development approach with best of breed
technologies including [React](http://facebook.github.io/react/), [Relay Modern](http://facebook.github.io/relay),
[Babel](http://babeljs.io/), [Webpack](https://webpack.github.io/),
[React Hot Loader](http://gaearon.github.io/react-hot-loader/), and more.


<p align="center">
  <a href="https://rollbar.com/?utm_source=reactstartkit(github)&utm_medium=link&utm_campaign=reactstartkit(github)" target="_blank">
    <img src="https://koistya.github.io/files/rollbar-384x64.png" width="192" height="32">
  </a>
  <a href="https://www.digitalocean.com/?refcode=eef302dbae9f&utm_source=github&utm_medium=oss_sponsorships&utm_campaign=opencollective" target="_blank">
    <img src="https://koistya.github.io/files/digital-ocean-393x64.png" width="196.5" height="32">
  </a>
</p>

---

### Tech Stack

* [Create React App][cra] for development and test infrastructure (see [user guide][cradocs])
* [React][react] + [Relay Modern][relay] for UI and declarative data fetching
* [Styled Components][sc] for component friendly CSS styles ([docs][scdocs])
* [Universal Router][router] + [history][history] for declarative routing and client-side navigation


### Directory Layout

```bash
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.
│   ├── favicon.ico                # Application icon to be displayed in bookmarks
│   ├── index.html                 # HTML template
│   ├── robots.txt                 # Instructions for search engine crawlers
│   ├── manifest.json              # Application meta data
│   └── ...                        # etc.
├── src/                           # Application source code
│   ├── App/                       # Application shell (layout) component
│   │── Pages/
│   │   │── About/                 # About Page
│   │   ├── Home/                  # Home page
│   │   ├── ErrorPage/             # Error page       
│   │── Components/ 
│   │   ├── Button/                # Button component
│   │   ├── Link/                  # Link component to be used instead of <a>
│   ├── history.js                 # Client-side navigation manager
│   ├── index.js                   # <== Application entry point (main) <===
│   ├── registerServiceWokrer.json # This list of application routes
│   ├── relay.js                   # Relay Modern client
│   ├── router.js                  # Application routes
│   ├── graphql.schema             # GraphQL schema obtained from a GraphQL API
│   └── store.js                   # Application state manager (Redux)
├── test/                          # Unit and integration tests
├── package.json                   # The list of project dependencies + NPM scripts
└── setup.js                       # Customizations for create-react-app
```


### Prerequisites

* [Node.js][nodejs] v8.2.1 or higher + [Yarn][yarn] v0.27.5 or higher &nbsp; (*HINT: On Mac install
  them via [Brew][brew]*)
* [Watchman][wm] v4.7.0 or higher, required by the [Relay Compiler][relaycompiler]
* [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Flow][vcflow], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins


### Getting Started

Just clone the repo and start hacking:

```bash
$ yarn install                     # Install project dependencies listed in package.json
$ yarn relay                       # Pre-compile GraphQL queries with Relay Compiler
$ yarn start                       # Compiles the app and opens it in a browser with "live reload"
```

The app should become available at [http://localhost:3000/](http://localhost:3000/).


### How to Test

```bash
$ yarn lint                        # Check JavaScript and CSS code for potential issues
$ yarn fix                         # Attempt to automatically fix ESLint warnings
$ yarn test                        # Run unit tests. Or, `yarn test -- --watch`
```


### How to Deploy

```bash
$ yarn build -- --prerender       # Build the app for production and pre-render .html pages
$ npx gh-pages -d ./build         # Push the contents of the ./build folder to GitHub Pages
```

### Learn React.js and ES6

:mortar_board: &nbsp; [React for Beginners](https://reactforbeginners.com/friend/konstantin) and [ES6 Training Course](https://es6.io/friend/konstantin) by Wes Bos<br>
:green_book: &nbsp; [React: Up & Running: Building Web Applications](http://amzn.to/2bBgqhl) by Stoyan Stefanov (Aug, 2016)<br>
:green_book: &nbsp; [Getting Started with React](http://amzn.to/2bmwP5V) by Doel Sengupta and Manu Singhal (Apr, 2016)<br>
:green_book: &nbsp; [You Don't Know JS: ES6 & Beyond](http://amzn.to/2bBfVnp) by Kyle Simpson (Dec, 2015)<br>


### License

Copyright © 2015-present Kriasoft. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt) file.

---

[rsb]: https://github.com/kriasoft/react-static-boilerplate
[kriasoft]: https://www.kriasoft.com/
[gitter]: https://gitter.im/kriasoft/react-static-boilerplate
[cra]: https://github.com/facebookincubator/create-react-app
[cradocs]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[react]: https://facebook.github.io/react/
[relay]: https://facebook.github.io/relay/
[router]: https://github.com/kriasoft/universal-router
[history]: https://github.com/ReactTraining/history
[sc]: https://www.styled-components.com/
[scdocs]: https://www.styled-components.com/docs
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[brew]: https://brew.sh/
[wm]: https://facebook.github.io/watchman/
[relaycompiler]: http://facebook.github.io/relay/docs/relay-compiler.html
[vc]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcflow]: https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
