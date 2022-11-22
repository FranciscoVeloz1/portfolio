import channel from '../../assets/img/channel.jpg'
import norte from '../../assets/img/norte.jpg'
import setenal from '../../assets/img/setenal.jpg'

export const experiences = [
  {
    id: 3,
    image: norte,
    title: 'Full Stack Developer',
    date: 'jul. 2022 - oct. 2022',
    company: 'Del Norte Distribution - Oxnard, California, United States',
    badges: [1, 2, 4, 5],
    description: `I made an inventory app where the user can manage the receiving and orders of products, update the 
    inventory in real time, and upload the product's receiving from excel. I coded the frontend of this app with React, 
    TypeScript and Bootstrap, and for the backend I used Node.js, Express and MySQL. I deployed the app in Digital Ocean 
    with pm2 and nginx for mange the app and the server.`
  },

  {
    id: 2,
    image: setenal,
    title: 'Mobile development leader',
    date: 'may. 2022 - oct. 2022',
    company: 'Setenal - Zapopan, Jalisco, México',
    badges: [1, 4, 6],
    description: `I managed a team to develop the new version of the tire management application called SIAN EX. 
    With this application, the user can carry out tire inspections by connecting a bluetooth scanner with the phone, and read 
    and save the information obtained from the scanner. We made this app with React Native and Native Modules. With this new 
    version we improve the user experience and performance of the app.`
  },

  {
    id: 3,
    image: channel,
    title: 'Full Stack Developer',
    date: 'jun. 2021 - abr. 2022',
    company: 'Channel Islands Warehouse - Oxnard, California, United States',
    badges: [1, 2, 3, 7],
    description: `I made an inventory app where the user can manage the receiving and orders of products, and update the inventory
    in real time. For this, I developed a web application with React.js, JavaScript and Bootstrap for the frontend, Node.js and Express 
    for the backend and React Native for the mobile application. Before the app, inventory management took 2 hours per day, now after 
    the app, this process takes 15 minutes.`
  }
]
