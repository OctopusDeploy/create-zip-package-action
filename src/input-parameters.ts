import { getMultilineInput, getInput } from '@actions/core'

export interface InputParameters {
  packageId: string
  version: string
  outputFolder: string
  files: string[]
}

export function getInputParameters(): InputParameters {
  const parameters: InputParameters = {
    packageId: getInput('package_id', { required: true }),
    version: getInput('version', { required: true }),
    outputFolder: getInput('output_folder', { required: true }),
    files: getMultilineInput('files', { required: true })
  }

  return parameters
}
