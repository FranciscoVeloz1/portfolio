export function getSocialLink (platform, socialNetworks = []) {
  const match = socialNetworks.find(
    (network) => network.platform.toLowerCase() === platform.toLowerCase()
  )

  return match?.link ?? ''
}
