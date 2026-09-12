import useScroll from '@hooks/useScroll'
import Form from '@components/Home/Form'
import Projects from '@components/Home/Projects'
import Showcase from '@components/Home/Showcase'
import Experience from '@components/Home/Experience'
import Certificate from '@components/Home/Certificate'

const Home = () => {
  useScroll()

  return (
    <>
      <Showcase />
      <Experience />
      <Projects />
      <Certificate />
      <Form />
    </>
  )
}

export default Home
