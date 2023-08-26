import smart from '@assets/img/smart.jpg'
import metatton from '@assets/img/metatton.jpg'
import mintel from '@assets/img/mintel.jpg'
import boxbook from '@assets/img/boxbook.jpg'
import lab from '@assets/img/lab.jpg'
import stack from '@assets/img/stack.jpg'
import rn from '@assets/img/rn.jpg'
import template from '@assets/img/template.jpg'

export const projects = [
  {
    id: 10,
    image: rn,
    title: 'React native Speed Art',
    date: 'Nov 1, 2022',
    description: 'React Native Speed Art is a design library with many types of customizable and reusable components. It also has an object with many utility classes that will help you to write less code. In this case I show you a demo with a react native project, where I coded a restaurant menu with modern design and with a few code lines.',
    git: 'https://github.com/FranciscoVeloz1/rn-speed-art',
    video: '9Gqwq0AfYt8',
    badges: [1, 2, 4, 6]
  },

  {
    id: 11,
    image: template,
    title: 'React-APIRest-Template',
    date: 'Oct 20, 2022',
    description: 'This project is a monorepo template coded with React, NodeJS and TypeScript. The backend was programed with express and has authentication using jwt, zod schema validations, user and company CRUDS and middlewares for validations and route protections. The frontend was programmed with React and Vite, and has Bootstrap 5 for design, CSS for custom styles and custom hooks. Im working to add more features to this template.',
    git: 'https://github.com/FranciscoVeloz1/react-node-template',
    video: 'GHAM2VTqn0U',
    badges: [1, 2, 4, 7]
  },

  {
    id: 1,
    image: boxbook,
    title: 'BoxBook',
    date: 'April 7, 2022',
    description: 'BoxBook is a virtual catalog of books. The user can sign up to the web, and add books to their catalog, see all the information and the cover of the book and mark if will read it, if is reading it or if has read it. When the user adds a book, is able to give a qualification between 1 and 5, where 5 is the biggest, and can write a review of the book. The user can also mark how much percentage has read the book. For contact with other users and see their catalogs, the user can search by name and send a request, for adding that person to the friends list. The system was programmed with a NextJS template made by me.',
    git: 'https://github.com/FranciscoVeloz1/React-Next-Dashboard',
    video: 'TNnKCNwQJE8',
    badges: [1, 2, 3, 8]
  },

  {
    id: 2,
    image: lab,
    title: 'Lab maintenance',
    date: 'March 23, 2022',
    description: 'A school needs to carry out maintenance and support reports for the laboratory computers, for which a web system was programmed to carry out the process described below. The system must have 2 types of profiles, Administrator with all permissions and user who can only register maintenance and support tickets. Register, cancel or modify a laboratory and register or modify a computer. The system was programmed with a NextJS template made by me.',
    git: 'https://github.com/FranciscoVeloz1/React-Next-Dashboard',
    video: 'AETMF4xCXJQ',
    badges: [1, 2, 3, 8]
  },

  {
    id: 3,
    image: stack,
    title: 'Stack Questions',
    date: 'March 10, 2022',
    description: 'A project was developed that functions as a Stack Overflow-style Q&A community. The main page can be consulted without the need to be registered. Only registered users will be able to post a question and answer.',
    git: 'https://github.com/FranciscoVeloz1/React-Next-Dashboard',
    video: '3KcSOKeZfYQ',
    badges: [1, 2, 3, 8]
  },

  {
    id: 4,
    image: metatton,
    title: 'Mettaton compiler',
    video: 'L29yk_CP0_I',
    date: 'Jun 8, 2021',
    git: 'https://github.com/FranciscoVeloz1/Mettaton-compiler',
    badges: [2, 3, 7],
    description:
      'Mettaton is a language program for Arduino focused on robotics programming made with JavaScript and NodeJS. I coded a complete code editor with a terminal that shows the categories of the code lines and how many errors do you have. Have some examples about how to program with mettaton, and you can select the target arduino and compile it to your robots.'
  },

  {
    id: 5,
    image: smart,
    title: 'Smart House',
    video: 'vM1FTTQyAUg',
    date: 'Jun 4, 2020',
    git: 'https://github.com/FranciscoVeloz1/Smart-house',
    badges: [2, 3, 5, 7],
    description:
      'Smart House is controlled by a web application made with JavaScript and NodeJS. This smart house has many different rooms that can be completely controlled by your smartphone. You can turn on and turn off the lights, fan, water, etc… And you can see the temperature, gas level and how much light has your house.'
  },

  {
    id: 6,
    image: mintel,
    title: 'Mintel',
    date: 'Feb 6, 2021',
    video: 'AUW6WLGywXE',
    git: 'https://github.com/FranciscoVeloz1/mintel',
    demo: 'https://franciscoveloz1.github.io/mintel/',
    badges: [1, 3],
    description:
      'Mintel landing page, made with Bootstrap and React. Mintel is how I called the smart house app, and this project is their landing page. Focused on showing the principal features of the smart house, with the most clear information about prices, advantages and features. Is completely responsive for smartphones and tables.'
  }

  // {
  //   id: 7,
  //   image: r3,
  //   title: 'Vex Robotics Starstruck',
  //   date: 'April 14, 2017',
  //   description:
  //     'Vex robotics starstruck consists of 2 teams fighting, throwing the stars and cubes to each field. I participated in the Vex robotics world championship 2016-2017 in Louisville, Kentucky. I designed, programmed and built the robot of the red alliance, with ID 53578A. In this project I learned how to program algorithms, solve problems and work in a team. I finished in 7th place among 100 teams.',
  //   video: 'HbNMGtv_XZA'
  // },

  // {
  //   id: 8,
  //   image: r2,
  //   title: 'VEX Robotics Nothing But Net',
  //   date: 'April 18, 2016',
  //   description:
  //     'Vex robotics nothing but net consists of 2 teams fighting, throwing the balls to the networks. I participated in the Vex robotics world championship 2015-2016 in Louisville, Kentucky. I designed, programmed and built the robot of the blue alliance, with ID 8739E. In this project I learned how to program algorithms, solve problems and work in a team. I finished in 37th place among 100 teams.',
  //   video: 'm-pC46W6TSU'
  // },

  // {
  //   id: 9,
  //   image: r1,
  //   title: 'VEX Robotics Highrise',
  //   date: 'April 16, 2015',
  //   description:
  //     'Vex robotics highrise consists of 2 teams in alliance, building block towers depending on the color to win as many points as possible.. I participated in the Vex robotics world championship 2014-2015 in Louisville, Kentucky. I designed, programmed and built the robot on the left, with ID 11020H. In this project I learned how to program algorithms, solve problems and work in a team. I finished in 56th place among 100 teams.',
  //   video: 'IqKnjml3DBU'
  // }
]
