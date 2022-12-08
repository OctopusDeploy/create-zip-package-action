import { setGracefulCleanup, dirSync } from 'tmp'

setGracefulCleanup()
const tmpdir = dirSync({ template: 'create-zip-package-XXXXXX' })
process.env = Object.assign(process.env, {
  INPUT_PACKAGE_ID: 'testPackage',
  INPUT_VERSION: '1.0.0',
  INPUT_OUTPUT_FOLDER: 'packaging',
  INPUT_FILES: 'published/**/*',
  RUNNER_TEMP: tmpdir.name,
  RUNNER_TOOL_CACHE: tmpdir.name,
  GITHUB_ACTION: '1'
})
