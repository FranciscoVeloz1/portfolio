export const placeholderColor = (id: number): string => {
  const hue = Math.abs(id * 47) % 360

  return `hsl(${hue} 55% 42%)`
}
