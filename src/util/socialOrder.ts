import type { SocialNetwork } from '@portfolio-types/resume'

export const SOCIAL_ORDER: readonly string[] = ['YouTube', 'GitHub', 'LinkedIn']

export const orderSocialNetworks = (
  socialNetworks: SocialNetwork[],
  platforms: readonly string[] = SOCIAL_ORDER
): SocialNetwork[] => {
  return platforms.flatMap((platform) => {
    const network = socialNetworks.find((item) => item.platform === platform)

    return network ? [network] : []
  })
}
