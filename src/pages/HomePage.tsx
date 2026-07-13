import { useScrollToTop } from '@hooks/useScrollToTop'
import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { Hero } from '@components/home/Hero'
import { Experience } from '@components/home/Experience'
import { ProjectsPreview } from '@components/home/ProjectsPreview'
import { CertificationsPreview } from '@components/home/CertificationsPreview'
import { ContactForm } from '@components/home/ContactForm'

const HomePage = () => {
  useScrollToTop()
  useDocumentTitle()

  return (
    <>
      <Hero />
      <Experience />
      <ProjectsPreview />
      <CertificationsPreview />
      <ContactForm />
    </>
  )
}

export default HomePage
