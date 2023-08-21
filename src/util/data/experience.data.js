import channel from '../../assets/img/channel.jpg'
import norte from '../../assets/img/norte.jpg'
import setenal from '../../assets/img/setenal.jpg'
import pwc from '../../assets/img/pwc.jpeg'

export const experiences = [
  {
    id: 4,
    image: pwc,
    title: 'Blockchain Developer',
    date: 'feb. 2023 - present',
    company: 'PwC México - Guadalajara, Jalisco, México',
    badges: [1, 2, 4, 8],
    description: `As a dedicated blockchain developer, I specialize in creating innovative solutions by harnessing the power 
    of cutting-edge technologies. With a strong proficiency in React, Next.js, and TypeScript, I have successfully developed 
    and deployed blockchain applications.`
  },

  {
    id: 3,
    image: norte,
    title: 'Full Stack Developer',
    date: 'jul. 2022 - oct. 2022',
    company: 'Del Norte Distribution - Oxnard, California, United States',
    badges: [1, 2, 4, 5],
    description: `Developed an inventory application that allows users to handle product orders, real-time inventory updates, 
    and receiving loads based on Excel. Using React, TypeScript, and Bootstrap, I built the frontend. For the backend, I used 
    Node.js, Express, and MySQL. The application was successfully deployed on Digital Ocean using pm2 and nginx for seamless 
    application and server management.`
  },

  {
    id: 2,
    image: setenal,
    title: 'Mobile development leader',
    date: 'may. 2022 - oct. 2022',
    company: 'Setenal - Guadalajara, Jalisco, México',
    badges: [1, 4, 6],
    description: `Led a team in the creation of the new version of the SIAN EX tire management application. 
    It enables users to perform efficient tire inspections via Bluetooth-connected scanners, seamlessly capturing 
    and saving data. Leveraging React Native and Native Modules, we improve both the user experience and the application 
    performance.`
  },

  {
    id: 3,
    image: channel,
    title: 'Full Stack Developer',
    date: 'jun. 2021 - abr. 2022',
    company: 'Channel Islands Warehouse - Oxnard, California, United States',
    badges: [1, 2, 3, 7],
    description: `I created an inventory app enabling users to handle product orders, receipts, and real-time inventory updates. 
    Using React.js, JavaScript, and Bootstrap, I built an intuitive web interface, while Node.js, Express, and React Native powered
    the backend and mobile app. Previously, managing inventory consumed 2 hours daily; post-app, it's streamlined to just 15 
    minutes.`
  }
]
