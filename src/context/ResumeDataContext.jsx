import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchResumeData } from '@util/fetchResumeData'
import { adaptResumeData } from '@util/adapters/resumeAdapters'

const ResumeDataContext = createContext(null)

export const ResumeDataProvider = ({ children }) => {
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadResumeData = async () => {
      try {
        const raw = await fetchResumeData()

        if (!isMounted) {
          return
        }

        setData(adaptResumeData(raw))
        setStatus('success')
      } catch (loadError) {
        if (!isMounted) {
          return
        }

        setError(loadError)
        setStatus('error')
      }
    }

    loadResumeData()

    return () => {
      isMounted = false
    }
  }, [])

  const value = useMemo(() => {
    return {
      status,
      error,
      data
    }
  }, [status, error, data])

  return (
    <ResumeDataContext.Provider value={value}>
      {children}
    </ResumeDataContext.Provider>
  )
}

export const useResumeData = () => {
  const context = useContext(ResumeDataContext)

  if (!context) {
    throw new Error('useResumeData must be used within ResumeDataProvider')
  }

  return context
}
