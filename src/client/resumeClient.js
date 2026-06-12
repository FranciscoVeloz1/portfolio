import { RESUME_DATA_URL } from '@client/config'

export async function fetchResumeData () {
  const response = await fetch(RESUME_DATA_URL)

  if (!response.ok) {
    throw new Error(`Failed to fetch resume data: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
