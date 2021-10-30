export default [
  {
    name: `Arc'teryx Catalog Display Pages`,
    slug: 'arcteryx-cdps',
    banner: '/assets/img/arcteryx/arcteryx-banner-alt.jpg',
    paragraph: `At Arc'teryx my team's focus was migrating the Catalog Display Page (CDP) to a new merchandising platform called FredHopper. At a high level this required us to rebuild the CDP using React and connect it to the new FredHopper API. The CDP had a lot of different functionality that we as a team had to take into account. The revamp of the CDP affected all 4 of our markets (Arc'teryx, Outlet, Veilance and LEAF).
    <br/><br/>
    The most complicated piece to build was the Filter Bar component. Each CDP has different products and filters per collection or category. A user should be able to click a filter category and selected a filter facet to narrow down the products they are looking for. I worked closely with another developer to ensure that the Filter Bar component worked seamlessly in all scenarios. The key challenge was maintaining the different states and data of the Filter Bar when a new query was sent to FredHopper to get the correct product data back.
    <br/><br/>
    Another key piece was the Compare Bar component. When a user clicks compare on a product tile, it will add a product to the Compare Bar. A user can select up to 3 products to compare. I had a lot of fun working on the UI and animations of this component. The old version of this component was very bulky and definitely hampered user experience (UX).
    `,
    details: [
      {
        name: 'Company',
        content: `Arc'teryx`,
      },
      {
        name: 'Markets',
        content: `Arc'teryx, Outlet, Veilance, LEAF`,
      },
      {
        name: 'Year',
        content: '2021',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Catalog Display Pages (CDPs)',
        content: `
          <span class="market-title">Arc'teryx:</span>
          <br/>
          <a href="https://arcteryx.com/ca/en/c/mens/shell-jackets" target="_blank" rel="noopener noreferrer">arcteryx.com/ca/en/c/mens/shell-jackets</a>
          <br/>
          <span class="market-title">Outlet:</span>
          <br/>
          <a href="https://outlet.arcteryx.com/ca/en/c/mens/shell-jackets" target="_blank" rel="noopener noreferrer">outlet.arcteryx.com/ca/en/c/mens/shell-jackets</a>
          <br/>
          <span class="market-title">Veilance:</span>
          <br/>
          <a href="https://veilance.com/ca/en/c/fall-winter-collection" target="_blank" rel="noopener noreferrer">veilance.com/ca/en/c/fall-winter-collection</a>
          <br/>
          <span class="market-title">LEAF:</span>
          <br/>
          <a href="https://leaf.arcteryx.com/ca/en/c/combat-uniforms" target="_blank" rel="noopener noreferrer">leaf.arcteryx.com/ca/en/c/combat-uniforms</a>
          <br/>
        `,
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux, GraphQL, JavaScript, Styled Components, Storybook, Fastly, AWS',
      },
      {
        name: 'APIs',
        content: 'FredHopper, Magento',
      },
    ],
    buttonLink: 'https://arcteryx.com/',
    videoSrc: '/assets/video/arcteryx-video.mp4',
    iphone: [
      '/assets/img/arcteryx/arcteryx-mobile-1.jpg',
      '/assets/img/arcteryx/arcteryx-mobile-2.jpg',
      '/assets/img/arcteryx/arcteryx-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/arcteryx/arcteryx-project.jpg',
    year: '2021',
    company: `Arc'teryx`,
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-arcteryx)',
  },
  {
    name: 'Aurora Corporate',
    slug: 'aurora-corporate',
    banner: '/assets/img/auroracorp/auroracorp-banner.jpg',
    paragraph: `Aurora Corporate is a new website that replaces the old Aurora MJ site. We were initially given a week but it was thankfully pushed out to 2 weeks. With a tight timeline we were only able to create a single page web app that links out to other digital properties in the hopes of building out the site in future iterations.
    <br><br>
    We utilized the React Boilerplate that's connected to Contentful for CMS capabilities.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Medical/Recreational',
      },
      {
        name: 'Year',
        content: '2020',
      },
      {
        name: 'Role',
        content: 'Manager',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroramj.com/" target="_blank" rel="noopener noreferrer">auroramj.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful',
      },
    ],
    buttonLink: 'https://auroramj.com/',
    videoSrc: '/assets/video/auroracorp-video.mp4',
    iphone: [
      '/assets/img/auroracorp/auroracorp-mobile-1.jpg',
      '/assets/img/auroracorp/auroracorp-mobile-2.jpg',
      '/assets/img/auroracorp/auroracorp-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/auroracorp/auroracorp-project.jpg',
    year: '2020',
    company: 'Aurora',
    tech: 'React',
    role: 'Manager',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Medical',
    slug: 'aurora-medical',
    banner: '/assets/img/auroramed/auroramed-banner.jpg',
    paragraph: `Aurora Medical is an ambitious project that amalgamates all 3 major medical cannabis brands owned by Aurora (<a href="https://auroramj.com" target="_blank">Aurora</a>, <a href="https://cannimed.ca" target="_blank">CanniMed</a> and <a href="https://medreleaf.com" target="_blank">MedReleaf</a>) into one entitiy. It is a multi-million dollar project that will streamline the eCommerce experience for our patients, allowing one single prescription to purchase 3 different brands.
    <br><br>
    My role in this project is managing the development of the Shopify eCommerce website that will selling our products online. The Shopify theme we are developing has many unique business requirements that comes with selling medical cannabis online. We have metafields on products for gram limits, THC and CBD percentages and terpene profiles.
    <br><br>
    We are also integrating into our Dynamics 365 CRM to handle patient accounts, Sage ERP to handle our inventory and product tracking and LoginRadius SSO so users can login using one identity.
    <br><br>
    Along side the eCommerce website, we are developing a Care Portal that will manage patient accounts, settings and registration. This application is built using a modified version of our React boilerplate.`,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Medical',
      },
      {
        name: 'Year',
        content: '2020',
      },
      {
        name: 'Role',
        content: 'Manager',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroramedical.com/" target="_blank" rel="noopener noreferrer">auroramedical.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'Shopify Liquid, JavaScript, jQuery, CSS/Sass, Dynamics 365 CRM, LoginRadius SSO, Sage ERP',
      },
    ],
    buttonLink: 'https://auroramedical.com/',
    videoSrc: '/assets/video/auroramed-video.mp4',
    iphone: [
      '/assets/img/auroramed/auroramed-mobile-1.jpg',
      '/assets/img/auroramed/auroramed-mobile-2.jpg',
      '/assets/img/auroramed/auroramed-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/auroramed/auroramed-project.jpg',
    year: '2020',
    company: 'Aurora',
    tech: 'React',
    role: 'Manager',
    color: 'var(--color-aurora)',
  },
  {
    name: 'The Daily Special',
    slug: 'daily-special',
    banner: '/assets/img/dailyspecial/dailyspecial-banner.jpg',
    paragraph: `The Daily Special is a new recreational cannabis brand that is selling the lowest price per gram cannabis on the Canadian market today.
    <br><br>
    I had 2 developers working on this website built using the new React boilerplate with Next JS and Contentful. The developers working on this site made some useful discoveries that we later transferred back into our boilerplate, optimizing our use of content types in Contentful.`,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Recreation',
      },
      {
        name: 'Year',
        content: '2020',
      },
      {
        name: 'Role',
        content: 'Manager',
      },
      {
        name: 'Website',
        content:
          '<a href="https://thedailyspecial.ca/" target="_blank" rel="noopener noreferrer">thedailyspecial.ca</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful',
      },
    ],
    buttonLink: 'https://thedailyspecial.ca/',
    videoSrc: '/assets/video/dailyspecial-video.mp4',
    iphone: [
      '/assets/img/dailyspecial/dailyspecial-mobile-1.jpg',
      '/assets/img/dailyspecial/dailyspecial-mobile-2.jpg',
      '/assets/img/dailyspecial/dailyspecial-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/dailyspecial/dailyspecial-project.jpg',
    year: '2020',
    company: 'Aurora',
    tech: 'React',
    role: 'Manager',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Europe',
    slug: 'aurora-europe',
    banner: '/assets/img/auroraeurope/auroraeurope-banner.jpg',
    paragraph: `Aurora Europe is the main brand for our European operations based out of Berlin, Germany.
    <br><br>
    This website’s history is interesting as the first iteration of it was based on a long forgotten PHP framework that I can’t even remember the name of. I redesigned the old website and then built the website using that old PHP framework. Thankfully we rebuilt and redesigned the website using React and Contentful. I managed the development of the third iteration of the website which is what is currently standing.`,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Medical',
      },
      {
        name: 'Year',
        content: '2020',
      },
      {
        name: 'Role',
        content: 'Manager, Software Developer & UX/UI Designer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroramedicine.com/" target="_blank" rel="noopener noreferrer">auroramedicine.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful',
      },
    ],
    buttonLink: 'https://auroramedicine.com/',
    videoSrc: '/assets/video/auroraeurope-video.mp4',
    iphone: [
      '/assets/img/auroraeurope/auroraeurope-mobile-1.jpg',
      '/assets/img/auroraeurope/auroraeurope-mobile-2.jpg',
      '/assets/img/auroraeurope/auroraeurope-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/auroraeurope/auroraeurope-project.jpg',
    year: '2020',
    company: 'Aurora',
    tech: 'React',
    role: 'Manager',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Cannabis Store',
    slug: 'aurora-cannabis-store',
    banner: '/assets/img/acs/acs-banner.jpg',
    paragraph: `The Aurora Cannabis Store is the primary website for Aurora’s West Edmonton Mall retail space.
    <br><br>
    This was one of my first projects in my new role as the Manager of Web and eCommerce. I developed the initial teaser website which later became what the existing website is today. My transition into management wasn’t easy but having developers I could trust get the job done helped immensely.`,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Recreation',
      },
      {
        name: 'Year',
        content: '2019',
      },
      {
        name: 'Role',
        content: 'Manager',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroracannabisstore.com/" target="_blank" rel="noopener noreferrer">auroracannabisstore.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful',
      },
    ],
    buttonLink: 'https://auroracannabisstore.com/',
    videoSrc: '/assets/video/acs-video.mp4',
    iphone: [
      '/assets/img/acs/acs-mobile-1.jpg',
      '/assets/img/acs/acs-mobile-2.jpg',
      '/assets/img/acs/acs-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/acs/acs-project.jpg',
    year: '2019',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Investor',
    slug: 'aurora-investor',
    banner: '/assets/img/investor/investor-banner.jpg',
    paragraph: `The Aurora Investor website is one of Aurora’s largest websites with more than individual 150 pages. It is a high profile website as there is a a prominent investor base always looking for news and information.
    <br><br>
    There were 3 others developers working along side myself to complete this project. As this was our second Contentful project, we made some mistakes with how we were reusing content types in Contentful. This created headaches for us in the future when trying to maintain and add new features. We eventually had to create another Contentful repo to add in blog functionality.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Year',
        content: '2019',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://investor.auroramj.com/" target="_blank" rel="noopener noreferrer">investor.auroramj.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful, QuoteMedia',
      },
    ],
    buttonLink: 'https://investor.auroramj.com/',
    videoSrc: '/assets/video/investor-video.mp4',
    iphone: [
      '/assets/img/investor/investor-mobile-1.jpg',
      '/assets/img/investor/investor-mobile-2.jpg',
      '/assets/img/investor/investor-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/investor/investor-project.jpg',
    year: '2019',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Comox',
    slug: 'aurora-comox',
    banner: '/assets/img/comox/comox-banner.jpg',
    paragraph: `Aurora Comox is a new production facility being built in Comox, BC, Canada. 
    <br><br>
    This was the first website built using a new React boilerplate that utilized the Contentful API as we shifted away from Prismic as our primary CMS tool. We also added in Next JS to build for routing and building purposes as we wanted something more robust then React Router. 
    <br><br>
    I also designed this website using Sketch and a couple assets provided by the Comox team as our other designers were tied up with other responsibilities.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Year',
        content: '2019',
      },
      {
        name: 'Role',
        content: 'Software Developer & UX/UI Designer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://comox.auroramj.com/" target="_blank" rel="noopener noreferrer">comox.auroramj.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Next JS, Redux & Sagas, JavaScript, Styled Components, Contentful',
      },
    ],
    buttonLink: 'https://comox.auroramj.com/',
    videoSrc: '/assets/video/comox-video.mp4',
    iphone: [
      '/assets/img/comox/comox-mobile-1.jpg',
      '/assets/img/comox/comox-mobile-2.jpg',
      '/assets/img/comox/comox-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/comox/comox-project.jpg',
    year: '2019',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'San Rafael 71',
    slug: 'san-rafael',
    banner: '/assets/img/sanraf/sanraf-banner.jpg',
    paragraph: `San Rafael 71 is one of the most popular recreational cannabis brands that is sold across Canada. The products are produced by our MedReleaf brand, a major subsidiary of Aurora.
    <br><br>
    I assisted in the development of this website but was not the lead developer as I was leading the development of the sister website, AltaVie. However, after the launch, I added several pages and components as the website has continued to evolve over time.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Recreation',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://sanrafael71.com/" target="_blank" rel="noopener noreferrer">sanrafael71.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Redux, JavaScript, Sass, Prismic JS',
      },
    ],
    buttonLink: 'https://sanrafael71.com/',
    videoSrc: '/assets/video/sanraf-video.mp4',
    iphone: [
      '/assets/img/sanraf/sanraf-mobile-1.jpg',
      '/assets/img/sanraf/sanraf-mobile-2.jpg',
      '/assets/img/sanraf/sanraf-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/sanraf/sanraf-project.jpg',
    year: '2018',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'AltaVie',
    slug: 'altavie',
    banner: '/assets/img/altavie/altavie-banner.jpg',
    paragraph: `AltaVie is one of MedReleaf’s recreational cannabis brands that is sold across Canada. MedReleaf is a major subsidiary brand of Aurora.
    <br><br>
    We leveraged the React boilerplate that I created that housed foundational components such as international language handling and mobile flyout menus with accessibility built in. I was the lead developer on this specific website as there was a sister website being developed at the same time, San Rafael, which I assisted with.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Market',
        content: 'Recreation',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://altavie.ca/" target="_blank" rel="noopener noreferrer">altavie.ca</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Redux, JavaScript, Sass, Prismic JS',
      },
    ],
    buttonLink: 'https://altavie.ca/',
    videoSrc: '/assets/video/altavie-video.mp4',
    iphone: [
      '/assets/img/altavie/altavie-mobile-1.jpg',
      '/assets/img/altavie/altavie-mobile-2.jpg',
      '/assets/img/altavie/altavie-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/altavie/altavie-project.jpg',
    year: '2018',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'AuroraCann',
    slug: 'auroracann',
    banner: '/assets/img/auroracann/auroracann-banner.jpg',
    paragraph: `AuroraCann (Aurora Drift) is Aurora’s recreational cannabis brand that is sold across Canada.
    <br><br>
    This website was built using the React boilerplate that I created, using the Prismic JS API for our content. Some challenges I faced was a very tight deadline and designs that were changed 4 or 5 times before we finally launched. We have since updated this website multiple times as the AuroraCann brand is transitioning to Aurora Drift.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroracann.com/" target="_blank" rel="noopener noreferrer">auroracann.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Redux, JavaScript, Sass, Prismic JS',
      },
    ],
    buttonLink: 'https://auroracann.com/',
    videoSrc: '/assets/video/auroracann-video.mp4',
    iphone: [
      '/assets/img/auroracann/auroracann-mobile-1.jpg',
      '/assets/img/auroracann/auroracann-mobile-2.jpg',
      '/assets/img/auroracann/auroracann-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/auroracann/auroracann-project.jpg',
    year: '2018',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Aurora Nordic',
    slug: 'aurora-nordic',
    banner: '/assets/img/auroranordic/auroranordic-banner.jpg',
    paragraph: `Aurora Nordic is a subsidiary of Aurora based in Denmark that produces medical cannabis for patients in Europe.
    <br><br>
    This was my first project at Aurora. I developed this site using React and the Prismic JS API for content management. I based the React boilerplate that I created for future projects off of this project. A unique feature of this website is the search functionality that I built from scratch leveraging Prismic’s API to search through content.
    `,
    details: [
      {
        name: 'Company',
        content: 'Aurora Cannabis',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://auroranordic.dk/" target="_blank" rel="noopener noreferrer">auroranordic.dk</a>',
      },
      {
        name: 'Tech Stack',
        content: 'React JS, Redux, JavaScript, Sass, Prismic JS',
      },
    ],
    buttonLink: 'https://auroranordic.dk/',
    videoSrc: '/assets/video/auroranordic-video.mp4',
    iphone: [
      '/assets/img/auroranordic/auroranordic-mobile-1.jpg',
      '/assets/img/auroranordic/auroranordic-mobile-2.jpg',
      '/assets/img/auroranordic/auroranordic-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/auroranordic/auroranordic-project.jpg',
    year: '2018',
    company: 'Aurora',
    tech: 'React',
    role: 'Developer',
    color: 'var(--color-aurora)',
  },
  {
    name: 'Juneau By Amacon',
    slug: 'juneau',
    banner: '/assets/img/juneau/juneau-banner.jpg',
    paragraph: `Juneau is a residential development built in the heart of Burnaby. I worked on both the full website and touchscreen app. Vue made it easy to share components between the site and app, minimizing the amount of work we had to do.
    <br/>
    <br/> 
    This was one of my favourite projects that I've worked on. The layout, design and feel of the website is exactly what I look for in other websites. Every page interacts with the user in a different way. It makes the user curious and keeps them guessing. That's what I love about coding. There are endless ways you can be creative.`,
    details: [
      {
        name: 'Company',
        content: 'BAM Communications',
      },
      {
        name: 'Client',
        content: 'Amacon, MLA',
      },
      {
        name: 'Year',
        content: '2017',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="https://amacon.com/juneau/" target="_blank" rel="noopener noreferrer">amacon.com/juneau</a>',
      },
      {
        name: 'Tech Stack',
        content:
          'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
      },
    ],
    buttonLink: 'https://amacon.com/juneau/',
    videoSrc: '/assets/video/juneau-video.mp4',
    iphone: [
      '/assets/img/juneau/juneau-mobile-1.jpg',
      '/assets/img/juneau/juneau-mobile-2.jpg',
      '/assets/img/juneau/juneau-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/juneau/juneau-project.jpg',
    year: '2018',
    company: 'BAM',
    tech: 'Vue',
    role: 'Developer',
    color: 'var(--color-bam)',
  },
  {
    name: 'Landmark On Robson',
    slug: 'landmark',
    banner: '/assets/img/landmark/landmark-banner.jpg',
    paragraph: `Landmark On Robson is a residential development that will be replacing the iconic Empire Landmark Hotel in the West End of Vancouver. It was challenging to create an equally iconic web presence for Landmark.
    <br>
    <br>
    We focused on keeping the design simple and user friendly while adding complex animations. The parallaxing SVG letters, page loading animations and hover effects all create a unique experience for users.`,
    details: [
      {
        name: 'Company',
        content: 'BAM Communications',
      },
      {
        name: 'Client',
        content: 'Asia Standard Americas & Magnum Projects Ltd',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="http://landmarkonrobson.com/" target="_blank" rel="noopener noreferrer">landmarkonrobson.com</a>',
      },
      {
        name: 'Tech Stack',
        content:
          'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
      },
    ],
    buttonLink: 'http://landmarkonrobson.com/',
    videoSrc: '/assets/video/landmark-video.mp4',
    iphone: [
      '/assets/img/landmark/landmark-mobile-1.jpg',
      '/assets/img/landmark/landmark-mobile-2.jpg',
      '/assets/img/landmark/landmark-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/landmark/landmark-project.jpg',
    year: '2018',
    company: 'BAM',
    tech: 'Vue',
    role: 'Developer',
    color: 'var(--color-bam)',
  },
  {
    name: 'Gryphon Development',
    slug: 'gryphon',
    banner: '/assets/img/gryphon/gryphon-banner.jpg',
    paragraph: `Gryphon Development is a new real estate company that isn't afraid to push the boundries. BAM created the Gryphon brand from the ground up, allowing the interactive team to work side by side with the graphic designers.
    <br><br>
    Gryphon's brand is clean, creative and bold. We wanted to bring that to their digital presence by focusing on  their unique take on art and design.`,
    details: [
      {
        name: 'Company',
        content: 'BAM Communications',
      },
      {
        name: 'Client',
        content: 'Gryphon Development',
      },
      {
        name: 'Year',
        content: '2018',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="http://gryphonliving.com/" target="_blank" rel="noopener noreferrer">gryphonliving.com</a>',
      },
      {
        name: 'Tech Stack',
        content:
          'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
      },
    ],
    buttonLink: 'http://gryphonliving.com/',
    videoSrc: '/assets/video/gryphon-video.mp4',
    iphone: [
      '/assets/img/gryphon/gryphon-mobile-1.jpg',
      '/assets/img/gryphon/gryphon-mobile-2.jpg',
      '/assets/img/gryphon/gryphon-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/gryphon/gryphon-project.jpg',
    year: '2018',
    company: 'BAM',
    tech: 'Vue',
    role: 'Developer',
    color: 'var(--color-bam)',
  },
  {
    name: 'Elenore On Fifth',
    slug: 'elenore',
    banner: '/assets/img/elenore/elenore-banner.jpg',
    paragraph: `Elenore On Fifth is a residential development currently being built on Main and 5th Ave. I worked on the full website and touchscreen app.
    <br>
    <br>
    The biggest challenge for this project was the tight deadline we had to meet. We were able to finish the website on time and within the budget because we had a good system in place. We used Github branches to minimize merge conflicts and Vue allowed us to work quickly and efficiently, giving us time to create a dynamic experience for users.`,
    details: [
      {
        name: 'Company',
        content: 'BAM Communications',
      },
      {
        name: 'Client',
        content: 'Chard Developments & Rennie Marketing',
      },
      {
        name: 'Year',
        content: '2017',
      },
      {
        name: 'Role',
        content: 'Software Developer',
      },
      {
        name: 'Website',
        content:
          '<a href="http://elenoreonfifth.com/" target="_blank" rel="noopener noreferrer">elenoreonfifth.com</a>',
      },
      {
        name: 'Tech Stack',
        content: 'Vue JS, JavaScript, HTML5, Sass, WebPack, Google Maps API',
      },
    ],
    buttonLink: 'http://elenoreonfifth.com/',
    videoSrc: '/assets/video/elenore-video.mp4',
    iphone: [
      '/assets/img/elenore/elenore-mobile-1.jpg',
      '/assets/img/elenore/elenore-mobile-2.jpg',
      '/assets/img/elenore/elenore-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/elenore/elenore-project.jpg',
    year: '2017',
    company: 'BAM',
    tech: 'Vue',
    role: 'Developer',
    color: 'var(--color-bam)',
  },
  {
    name: 'Salt Digital',
    slug: 'salt-digital',
    banner: '/assets/img/salt/salt-banner.jpg',
    paragraph: `Salt Digital was a full service marketing agency created by myself and two other partners. Unfortunately, my partners and I decided to move on from the business but the website has been saved as a reference of my work.
    <br><br>
    Starting a business is tough. There was a lot more work than just getting clients and developing websites. We tried to be a full service agency when we should have just focused on one aspect of the industry. Even though it didn't work out, I learned a lot from the experience. Salt digital will be back.`,
    details: [
      {
        name: 'Job',
        content: 'Freelancer',
      },
      {
        name: 'Client',
        content: 'Salt Digital',
      },
      {
        name: 'Year',
        content: '2017',
      },
      {
        name: 'Role',
        content: 'Software Developer & UX/UI Designer',
      },
      {
        name: 'Website',
        content:
          '<a href="http://saltdigital.ca" target="_blank" rel="noopener noreferrer">saltdigital.ca</a>',
      },
      {
        name: 'Github',
        content:
          '<a href="https://github.com/saltdigital/salt-full" target="_blank" rel="noopener noreferrer">saltdigital/salt-full</a>',
      },
      {
        name: 'Tech Stack',
        content: 'HTML, Sass, JQuery, JavaScript, Gulp, npm, ScrollMagic',
      },
    ],
    buttonLink: 'http://saltdigital.ca',
    videoSrc: '/assets/video/salt-video.mp4',
    iphone: [
      '/assets/img/salt/salt-mobile-1.jpg',
      '/assets/img/salt/salt-mobile-2.jpg',
      '/assets/img/salt/salt-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/salt/salt-project.jpg',
    year: '2017',
    company: 'Freelance',
    tech: 'jQuery',
    role: 'Developer',
    color: 'var(--color-freelance)',
  },
  {
    name: 'McColl Therapy',
    slug: 'mccoll-therapy',
    banner: `/assets/img/mccoll/mccoll-banner.jpg`,
    paragraph: `McColl Therapy, a group of occupational therapists that offer therapy and counselling services, was my first client after graduating from RED Academy. I designed and developed a Custom WordPress Theme with custom post types and field suites, giving them the flexibility to change what they wanted. 
    <br><br>
    Since this was my first freelance job, I learned how to interact with clients, meet deadlines and create invoices on the job. I have kept an ongoing relationship with them and in 2018 a new version of their website will be launched.`,
    details: [
      {
        name: 'Job',
        content: 'Freelance',
      },
      {
        name: 'Client',
        content: 'McColl Therapy',
      },
      {
        name: 'Year',
        content: '2016',
      },
      {
        name: 'Role',
        content: 'Software Developer & UX/UI Designer',
      },
      {
        name: 'Website',
        content:
          '<a href="http://mccolltherapy.com/" target="_blank" rel="noopener noreferrer">mccolltherapy.com</a>',
      },
      {
        name: 'Github',
        content:
          '<a href="https://github.com/kurtisyoung/wordpress-mccoll-therapy" target="_blank" rel="noopener noreferrer">kurtisyoung/mccoll-therapy</a>',
      },
      {
        name: 'Tech Stack',
        content: 'WordPress, PHP, HTML5, Sass, JQuery, JavaScript, Gulp, npm',
      },
    ],
    buttonLink: 'http://mccolltherapy.com/',
    videoSrc: '/assets/video/mccoll-video.mp4',
    iphone: [
      '/assets/img/mccoll/mccoll-mobile-1.jpg',
      '/assets/img/mccoll/mccoll-mobile-2.jpg',
      '/assets/img/mccoll/mccoll-mobile-3.jpg',
    ],
    websiteImg: '/assets/img/mccoll/mccoll-project.jpg',
    year: '2016',
    company: 'Freelance',
    tech: 'WordPress',
    role: 'Developer',
    color: 'var(--color-freelance)',
  },
]