export const getResumeDataUrl = () => {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base

  if (normalizedBase && normalizedBase !== '/') {
    return `${normalizedBase}/resume-data/index.json`
  }

  return '/resume-data/index.json'
}
