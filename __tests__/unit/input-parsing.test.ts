import { getInputParameters } from '../../src/input-parameters'

test('get input parameters', () => {
  const inputParameters = getInputParameters()
  expect(inputParameters).toBeDefined()
  expect(inputParameters.packageId).toEqual('testPackage')
  expect(inputParameters.version).toEqual('1.0.0')
  expect(inputParameters.outputFolder).toEqual('packaging')
  expect(inputParameters.basePath).toEqual('published')
  expect(inputParameters.files).toBeDefined()
  expect(inputParameters.files).toHaveLength(1)
  expect(inputParameters.files).toContain('**/*')
})
