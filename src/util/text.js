export const createExcerpt = (text = '', maxLength = 100) => {
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text
}

export const splitParagraphs = (text = '') => {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}
