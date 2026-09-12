const SOCIAL_ICON_MAP: Record<string, string> = {
  YouTube: 'fa-brands fa-youtube',
  GitHub: 'fa-brands fa-github',
  LinkedIn: 'fa-brands fa-linkedin',
  Portfolio: 'fa-solid fa-globe'
}

export const getSocialIcon = (platform: string): string => {
  if (SOCIAL_ICON_MAP[platform]) {
    return SOCIAL_ICON_MAP[platform]
  }

  return 'fa-solid fa-link'
}
