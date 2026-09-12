import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const portfolioRoot = resolve(__dirname, '..')
const source = resolve(portfolioRoot, '../resume-data-source/index.json')
const destinations = [
  resolve(portfolioRoot, 'src/data/index.json'),
  resolve(portfolioRoot, 'public/resume-data/index.json')
]

if (existsSync(source)) {
  for (const destination of destinations) {
    mkdirSync(dirname(destination), { recursive: true })
    copyFileSync(source, destination)
    console.log(`Synced resume data to ${destination}`)
  }

  process.exit(0)
}

const missingDestinations = destinations.filter((destination) => {
  return !existsSync(destination)
})

if (missingDestinations.length === 0) {
  console.warn(
    `Resume data source not found at ${source}; using committed copies in src/data and public/resume-data`
  )
  process.exit(0)
}

console.error(
  `Resume data source not found at ${source} and missing committed copies at:\n${missingDestinations.join('\n')}`
)
process.exit(1)
