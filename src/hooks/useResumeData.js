import { useQuery } from '@tanstack/react-query'
import { fetchResumeData } from '@client/resumeClient'
import { mapResumeData } from '@mappers/resumeMapper'

export default function useResumeData () {
  return useQuery({
    queryKey: ['resume'],
    queryFn: fetchResumeData,
    select: mapResumeData,
    staleTime: 5 * 60 * 1000
  })
}
