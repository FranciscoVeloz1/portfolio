import { URL } from '@util/constants'
import smart from '@assets/img/smart.jpg'
import metatton from '@assets/img/metatton.jpg'
import mintel from '@assets/img/mintel.jpg'

export const projects = [
  {
    id: 1,
    image: metatton,
    link: `${URL}/projects/1`,
    title: 'Mettaton compiler',
    date: 'Jun 8, 2021',
    git: 'https://github.com/FranciscoVeloz1/Mettaton-compiler',
    demo: 'https://drive.google.com/file/d/1-p-EHV9z4kfUnvcd4u7enXIzQo_F5qYR/view?usp=sharing',
    description:
      'Mettaton is a language program for Arduino made with JavaScript and NodeJS'
  },

  {
    id: 2,
    image: smart,
    link: `${URL}/projects/2`,
    title: 'Smart House',
    date: 'Jun 4, 2020',
    git: 'https://github.com/FranciscoVeloz1/IoT-House',
    demo: 'https://drive.google.com/file/d/1T4NSh64282lua3y2n_m2d4LHZQgsxyG8/view?usp=sharing',
    description:
      'Smart House controlled by a web application made with JavaScript and NodeJS'
  },

  {
    id: 3,
    image: mintel,
    link: `${URL}/projects/3`,
    title: 'Mintel',
    date: 'Feb 6, 2021',
    git: 'https://github.com/FranciscoVeloz1/mintel',
    demo: 'https://franciscoveloz1.github.io/mintel/',
    description: 'Mintel landing page, made with Bootstrap and React.'
  }
]
