import { getResumeDataUrl } from './resumeDataUrl'

export const fetchResumeData = async () => {
  const url = getResumeDataUrl()
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to load resume data (${response.status})`)
  }

  return response.json()
}
