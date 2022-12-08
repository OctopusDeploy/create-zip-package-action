import { ZipPackageBuilder } from '@octopusdeploy/api-client'
import { InputParameters } from './input-parameters'

export async function createPackageFromInputs(parameters: InputParameters): Promise<string> {
  const builder = new ZipPackageBuilder()
  return builder.pack({
    packageId: parameters.packageId,
    version: parameters.version,
    outputFolder: parameters.outputFolder,
    inputFilePatterns: parameters.files
  })
}
