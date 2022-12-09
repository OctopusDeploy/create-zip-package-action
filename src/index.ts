import { debug, error, info, isDebug, setFailed, setOutput, warning } from '@actions/core'
import { getInputParameters } from './input-parameters'
import { createPackageFromInputs } from './create-package'
import { Logger } from '@octopusdeploy/api-client'
import { writeFileSync } from 'fs'

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

    const packageFile = await createPackageFromInputs(parameters, logger)

    setOutput('package_file', packageFile)

    const stepSummaryFile = process.env.GITHUB_STEP_SUMMARY
    if (stepSummaryFile) {
      writeFileSync(stepSummaryFile, `🐙 Created package ${packageFile}`)
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      setFailed(e)
    } else {
      setFailed(`Unknown error: ${e}`)
    }
  }
})()
