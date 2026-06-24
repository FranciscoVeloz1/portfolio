export const SOCIAL_ORDER = ['YouTube', 'GitHub', 'LinkedIn']

export const orderSocialNetworks = (socialNetworks, platforms = SOCIAL_ORDER) => {
  const orderedNetworks = platforms
    .map((platform) => {
      const network = socialNetworks.find((item) => {
        return item.platform === platform
      })

      return network
    })
    .filter(Boolean)

  return orderedNetworks
}
