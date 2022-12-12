import { debug, error, info, isDebug, setFailed, setOutput, warning } from '@actions/core'
import { Logger } from '@octopusdeploy/api-client'
import { writeFileSync } from 'fs'
import { createPackageFromInputs } from './create-package'
import { getInputParameters } from './input-parameters'

// GitHub actions entrypoint
;(async (): Promise<void> => {
  try {
    const logger: Logger = {
      debug: message => {
        if (isDebug()) {
          debug(message)
        }
      },
      info: message => info(message),
      warn: message => warning(message),
      error: (message, err) => {
        if (err !== undefined) {
          error(err.message)
        } else {
          error(message)
        }
      }
    }

    const parameters = getInputParameters()

    const result = await createPackageFromInputs(parameters, logger)

    setOutput('package_file_path', result.filePath)
    setOutput('package_filename', result.filename)

    const stepSummaryFile = process.env.GITHUB_STEP_SUMMARY
    if (stepSummaryFile) {
      writeFileSync(stepSummaryFile, `🐙 Created package, ${result.filename}`)
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      setFailed(e)
    } else {
      setFailed(`Unknown error: ${e}`)
    }
  }
})()
