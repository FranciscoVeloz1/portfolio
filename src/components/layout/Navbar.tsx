import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useResumeData } from '@hooks/useResumeData'
import { orderSocialNetworks } from '@lib/socialOrder'
import { ThemeToggle } from '@components/layout/ThemeToggle'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '@components/icons/BrandIcons'
import '@components/layout/Navbar.css'

const SOCIAL_ICON_MAP: Record<string, typeof GithubIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon
}

const NAV_LINKS = [
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' }
]

export const Navbar = () => {
  const { data } = useResumeData()
  const profile = data.profile
  const orderedSocialNetworks = orderSocialNetworks(data.socialNetworks)

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-brand'>
        {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
      </Link>

      <div className='nav-desktop'>
        <ul className='nav-links'>
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.to}>
                <Link to={link.to} className='nav-link'>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='nav-social'>
          {orderedSocialNetworks.map((network) => {
            const Icon = SOCIAL_ICON_MAP[network.platform]

            return (
              <a href={network.link} key={network.platform} target='_blank' rel='noreferrer' aria-label={network.platform}>
                {Icon ? <Icon /> : network.platform}
              </a>
            )
          })}
        </div>

        <ThemeToggle />
      </div>

      <div className='nav-mobile-trigger'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type='button' className='theme-toggle' aria-label='Open navigation menu'>
              <Menu aria-hidden='true' />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className='dropdown-content' align='end' sideOffset={8}>
              <VisuallyHidden>
                <DropdownMenu.Label>Site navigation</DropdownMenu.Label>
              </VisuallyHidden>

              {NAV_LINKS.map((link) => {
                return (
                  <DropdownMenu.Item key={link.to} asChild className='dropdown-item'>
                    <Link to={link.to}>{link.label}</Link>
                  </DropdownMenu.Item>
                )
              })}

              <DropdownMenu.Separator className='dropdown-separator' />

              {orderedSocialNetworks.map((network) => {
                return (
                  <DropdownMenu.Item key={network.platform} asChild className='dropdown-item'>
                    <a href={network.link} target='_blank' rel='noreferrer'>
                      {network.platform}
                    </a>
                  </DropdownMenu.Item>
                )
              })}

              <DropdownMenu.Separator className='dropdown-separator' />

              <div className='dropdown-item'>
                <ThemeToggle />
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  )
}
