import type { SocialNetwork } from '@models/resume'

export const SOCIAL_ORDER = ['YouTube', 'GitHub', 'LinkedIn'] as const

export const orderSocialNetworks = (
  socialNetworks: SocialNetwork[],
  platforms: readonly string[] = SOCIAL_ORDER
): SocialNetwork[] => {
  const orderedNetworks = platforms
    .map((platform) => {
      const network = socialNetworks.find((item) => {
        return item.platform === platform
      })

      return network
    })
    .filter((network): network is SocialNetwork => {
      return Boolean(network)
    })

  return orderedNetworks
}
