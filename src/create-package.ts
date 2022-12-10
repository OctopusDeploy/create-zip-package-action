import { Logger, ZipPackageBuilder } from '@octopusdeploy/api-client'
import path from 'path'
import { InputParameters } from './input-parameters'

export async function createPackageFromInputs(parameters: InputParameters, logger: Logger): Promise<string> {
  const builder = new ZipPackageBuilder()
  const packageFilename = await builder.pack({
    packageId: parameters.packageId,
    version: parameters.version,
    outputFolder: parameters.outputFolder,
    basePath: parameters.basePath,
    inputFilePatterns: parameters.files,
    overwrite: true,
    logger
  })

  return path.join(parameters.outputFolder, packageFilename)
}
