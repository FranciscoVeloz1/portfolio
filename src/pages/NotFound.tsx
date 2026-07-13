import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { Button } from '@components/ui/Button'
import '@components/error/RouteError.css'

const NotFound = () => {
  useDocumentTitle('Page not found')

  return (
    <div className='route-error'>
      <p className='route-error-title'>404 - Page not found</p>
      <p className='route-error-message'>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button as='link' to='/'>
        Go home
      </Button>
    </div>
  )
}

export default NotFound
