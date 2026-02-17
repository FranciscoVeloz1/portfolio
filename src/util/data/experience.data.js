import channel from '../../assets/img/channel.webp'
import norte from '../../assets/img/norte.webp'
import setenal from '../../assets/img/setenal.webp'
import pwc from '../../assets/img/pwc.webp'
import nestle from '../../assets/img/nestle.webp'
import fnatic from '../../assets/img/fnatic.webp'
import kodomi from '../../assets/img/kodomi2.webp'
import control from '../../assets/img/control.webp'

export const experiences = [
  {
    id: 9,
    image: pwc,
    title: 'Senior Associate',
    date: 'feb. 2023 - present',
    company: 'PwC México - Guadalajara, Jalisco, México',
    badges: [1, 2, 4, 8],
    description: `Working as a Software Developer, Data Engineer, and AI Engineer, focused on building scalable web platforms integrated 
    with blockchain. This involves designing secure data pipelines, processing on-chain and off-chain data, developing intelligent 
    applications powered by AI agents (using tools such as Cursor, Claude Code, and similar), and creating interfaces that deliver 
    innovative, data-driven, and decentralized solutions.`
  },

  {
    id: 8,
    image: norte,
    title: 'Full Stack Developer',
    date: 'jul. 2022 - oct. 2022',
    company: 'Del Norte Distribution - Oxnard, California, United States',
    badges: [1, 2, 4, 5],
    description: `Developed a full-stack inventory management application enabling product order processing, real-time stock synchronization, 
    and bulk goods intake via Excel imports. Built the frontend with React, TypeScript, and Bootstrap, and implemented a RESTful backend 
    using Node.js, Express, and MySQL. Deployed on DigitalOcean with PM2 and Nginx to ensure high availability, efficient process management, 
    and reliable production performance.`
  },

  {
    id: 7,
    image: setenal,
    title: 'Dev Lead',
    date: 'may. 2022 - oct. 2022',
    company: 'Setenal - Guadalajara, Jalisco, México',
    badges: [1, 4, 6],
    description: `Led a team in the creation of the new version of the SIAN EX tire management application. 
    It enables users to perform efficient tire inspections via Bluetooth-connected scanners, seamlessly capturing 
    and saving data. Leveraging React Native and Native Modules, we improve both the user experience and the application 
    performance.`
  },

  {
    id: 6,
    image: channel,
    title: 'Full Stack Developer',
    date: 'jun. 2021 - apr. 2022',
    company: 'Channel Islands Warehouse - Oxnard, California, United States',
    badges: [1, 2, 3, 7],
    description: `Delivered a cross-platform inventory system (web + mobile) enabling real-time stock updates, order management, 
    and goods receiving. Implemented the frontend with React.js and Bootstrap, and developed scalable backend APIs using Node.js 
    and Express, with a companion React Native app. Automated manual workflows, cutting inventory processing time by ~88% 
    (2 hours → 15 minutes daily).`
  },

  {
    id: 5,
    image: control,
    title: 'Full Stack Developer',
    date: 'dec. 2020 - jan. 2022',
    company: 'Control System - Lagos de Moreno, Jalisco, México',
    badges: [2, 3, 7, 5],
    description: `Spearheaded the end-to-end architecture and development of a GPS vehicle tracking web platform, enabling 
    real-time fleet monitoring. Designed scalable backend services with Node.js, Express, and MySQL, and integrated Google Maps 
    for live geospatial data rendering. Implemented secure authentication with Passport.js and developed a responsive UI using 
    Handlebars and Bootstrap, delivering a reliable and user-friendly tracking solution.`
  },

  {
    id: 4,
    image: 'https://ui-avatars.com/api/?name=Optica',
    title: 'Full Stack Developer',
    date: 'feb. 2021 - jun. 2021',
    company: 'Centro óptico de Lagos - Lagos de Moreno, Jalisco, México',
    badges: [2, 3, 7, 5],
    description: `At Centro Óptico de Lagos S.A. de C.V., I enhanced information control by crafting a server-side rendering web app. 
    I architected the backend utilizing Node.js, Express, and MySQL, incorporating Passport.js for authentication. The frontend was 
    realized through Handlebars, CSS, and Bootstrap, ensuring seamless user experience. Result: Streamlined data management and robust 
    web solution.`
  },

  {
    id: 3,
    image: nestle,
    title: 'Industrial electromechanical',
    date: 'dec. 2016 - nov. 2018',
    company: 'Nestlé - Lagos de Moreno, Jalisco, México',
    badges: [10],
    description: `During my Nestlé electromechanical internship, I received comprehensive dual training in control systems, maintenance, 
    welding, and automation. Certified in Power Transmission, Equipment Alignment, and SKF Seals (EC0638, ECE112-13).`
  },

  {
    id: 2,
    image: kodomi,
    title: 'Web Development',
    date: 'agu. 2017 - dic. 2017',
    company: 'Kodomi - Lagos de Moreno, Jalisco, México',
    badges: [2, 3],
    description: `During my time at Kodomi, I created a user-friendly website that allows seamless access to store merchandise and 
    direct communication with the company. The website was built using technologies such as HAML, SASS, Bootstrap, jQuery, and 
    JavaScript. Before the app, interactions with the merchandise and the company were exclusively face-to-face.`
  },

  {
    id: 1,
    image: fnatic,
    title: 'Robotics Designer',
    date: 'apr. 2016 - may. 2017',
    company: 'Fnatic Robotics - Lagos de Moreno, Jalisco, México',
    badges: [11, 9, 10],
    description: `I was responsible for design using Autodesk Inventor at Fnatic Robotics in Lagos de Moreno, Jalisco. Achievements 
    include: State Excellence Champion, Design Pre-National Champion, National titles in Programming Skill and Driver Skill, Robotics 
    National Champion. We secured 7th place in the Vex Robotics World Championship 2016-2017.`
  }
]
