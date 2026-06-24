import { createContext, useContext, useMemo } from 'react'
import rawResumeData from '@data/index.json'
import { adaptResumeData } from '@util/adapters/resumeAdapters'

const ResumeDataContext = createContext(null)
const resumeData = adaptResumeData(rawResumeData)

export const ResumeDataProvider = ({ children }) => {
  const value = useMemo(() => {
    return {
      data: resumeData
    }
  }, [])

  return <ResumeDataContext.Provider value={value}>{children}</ResumeDataContext.Provider>
}

export const useResumeData = () => {
  const context = useContext(ResumeDataContext)

  if (!context) {
    throw new Error('useResumeData must be used within ResumeDataProvider')
  }

  return context
}
