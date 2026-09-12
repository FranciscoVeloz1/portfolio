import useScroll from '@hooks/useScroll'
import Hero from '@components/Home/Hero'
import About from '@components/Home/About'
import Skills from '@components/Home/Skills'
import Experience from '@components/Home/Experience'
import Projects from '@components/Home/Projects'
import Certificate from '@components/Home/Certificate'
import Form from '@components/Home/Form'

const Home = () => {
  useScroll()

  return (
    <main id='main-content'>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificate />
      <Form />
    </main>
  )
}

export default Home
