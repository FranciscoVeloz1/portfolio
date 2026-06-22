import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const portfolioRoot = resolve(__dirname, '..')
const source = resolve(portfolioRoot, '../resume-data-source/index.json')
const destination = resolve(portfolioRoot, 'public/resume-data/index.json')

mkdirSync(dirname(destination), { recursive: true })
copyFileSync(source, destination)

console.log(`Synced resume data to ${destination}`)
