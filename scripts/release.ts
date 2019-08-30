import last from 'lodash/last'
import child from 'child_process'
import path from 'path'

const TYPE_PATCH = 'patch'
const TYPE_MINOR = 'minor'
const TYPE_MAJOR = 'major'
const SEMANTIC_TEMPLATE = [TYPE_MAJOR, TYPE_MINOR, TYPE_PATCH]

const type = last(process.argv) || ''
const incrementIndex = SEMANTIC_TEMPLATE.indexOf(type)
if (incrementIndex < 0) {
  throw new Error('Please specify the version increment: patch, minor or major')
}

const currentVersion = getCurrentVersion()
const nextVersion = calculateNextVersion(currentVersion, incrementIndex)
const tagName = `v${nextVersion}`

exec('yarn build')
exec('git add dist/*')
exec(`sed -i '' 's/version": "${currentVersion}"/version": "${nextVersion}"/g' package.json`)
exec(`git commit -m "Release ${tagName}"`)
exec(`git tag ${tagName}`)
exec(`git push && git push --tags`)

function getCurrentVersion() {
  const packageData = require('../package.json')
  return packageData.version as string
}

function calculateNextVersion(version: string, semanticIndex: number) {
  const versionParts = version.split('.')
  const nextIncrement = parseInt(versionParts[semanticIndex], 10) + 1
  if (isNaN(nextIncrement)) {
    throw new Error('Could not calculate the next package version')
  }

  versionParts.splice(semanticIndex, 1, nextIncrement.toString())
  return versionParts.join('.')
}

function exec(cmd: string) {
  return child.execSync(cmd, { cwd: path.resolve(__dirname, '../'), stdio: 'inherit' })
}
