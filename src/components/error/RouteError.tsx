import { Button } from '@components/ui/Button'
import '@components/error/RouteError.css'

interface RouteErrorProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export const RouteError = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred while loading this page.',
  onRetry
}: RouteErrorProps) => {
  return (
    <div className='route-error'>
      <p className='route-error-title'>{title}</p>
      <p className='route-error-message'>{message}</p>
      <Button as='link' to='/'>
        Go home
      </Button>
      {onRetry ? (
        <Button variant='ghost' onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  )
}
