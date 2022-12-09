import { getInputParameters } from '../../src/input-parameters'

test('get input parameters', () => {
  const inputParameters = getInputParameters()
  expect(inputParameters).toBeDefined()
  expect(inputParameters.files).toBeDefined()
  expect(inputParameters.files).toHaveLength(1)
  expect(inputParameters.files).toContain('published/**/*')
})
