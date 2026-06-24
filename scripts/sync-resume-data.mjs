import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const portfolioRoot = resolve(__dirname, '..')
const source = resolve(portfolioRoot, '../resume-data-source/index.json')
const destination = resolve(portfolioRoot, 'public/resume-data/index.json')

if (existsSync(source)) {
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(source, destination)
  console.log(`Synced resume data to ${destination}`)
  process.exit(0)
}

if (existsSync(destination)) {
  console.warn(
    `Resume data source not found at ${source}; using committed ${destination}`
  )
  process.exit(0)
}

console.error(
  `Resume data source not found at ${source} and no committed copy at ${destination}`
)
process.exit(1)
