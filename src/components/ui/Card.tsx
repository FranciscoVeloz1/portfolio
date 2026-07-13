import type { HTMLAttributes, ReactNode } from 'react'
import '@components/ui/Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
}

export const Card = ({ children, interactive = false, className = '', ...rest }: CardProps) => {
  const classes = `card ${interactive ? 'card-interactive' : ''} ${className}`.trim()

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
