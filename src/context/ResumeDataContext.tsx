import { createContext, useContext, useMemo, type ReactNode } from 'react'
import rawResumeData from '@data/index.json'
import type { RawResumeData, ResumeData, ResumeDataContextValue } from '@portfolio-types/resume'
import { adaptResumeData } from '@util/adapters/resumeAdapters'

const ResumeDataContext = createContext<ResumeDataContextValue | null>(null)
const sourceData: RawResumeData = rawResumeData
const resumeData: ResumeData = adaptResumeData(sourceData)

export const ResumeDataProvider = ({ children }: { children: ReactNode }) => {
  const value = useMemo<ResumeDataContextValue>(() => {
    return {
      data: resumeData
    }
  }, [])

  return <ResumeDataContext.Provider value={value}>{children}</ResumeDataContext.Provider>
}

export const useResumeData = (): ResumeDataContextValue => {
  const context = useContext(ResumeDataContext)

  if (!context) {
    throw new Error('useResumeData must be used within ResumeDataProvider')
  }

  return context
}
