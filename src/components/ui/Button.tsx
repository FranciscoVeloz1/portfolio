import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import '@components/ui/Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type ButtonAsLink = BaseProps &
  LinkProps & {
    as: 'link'
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export const Button = (props: ButtonProps) => {
  const { variant = 'primary', className = '', children, as = 'button', ...rest } = props
  const classes = `btn btn-${variant} ${className}`.trim()

  if (as === 'link') {
    const linkProps = rest as LinkProps

    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button type='button' className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
