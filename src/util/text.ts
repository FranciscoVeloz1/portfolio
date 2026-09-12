export const createExcerpt = (text = '', maxLength = 100): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text
}

export const splitParagraphs = (text = ''): string[] => {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}
