import { useEffect } from 'react'

const SITE_TITLE = 'Francisco Veloz'

export const useDocumentTitle = (title?: string): void => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  }, [title])
}
