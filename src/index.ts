import { setFailed } from '@actions/core'
import { getInputParameters } from './input-parameters'
import { createPackageFromInputs } from './create-package'

// GitHub actions entrypoint
import { writeFileSync } from 'fs'
;(async (): Promise<void> => {
  try {
    const parameters = getInputParameters()

    const packageFile = await createPackageFromInputs(parameters)

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
