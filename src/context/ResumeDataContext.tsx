import { createContext, useContext, useMemo, type ReactNode } from 'react'
import rawResumeData from '@data/index.json'
import { adaptResumeData } from '@lib/adapters/resumeAdapters'
import type { RawResumeData, ResumeData } from '@models/resume'

interface ResumeDataContextValue {
  data: ResumeData
}

const ResumeDataContext = createContext<ResumeDataContextValue | null>(null)
const resumeData = adaptResumeData(rawResumeData as RawResumeData)

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
