# create-zip-package-action

<img alt= "" src="https://github.com/OctopusDeploy/create-zip-package-action/raw/main/assets/github-actions-octopus.png" />

This is a GitHub Action to create a Zip package to push to [Octopus Deploy](https://octopus.com/).

## Examples

```yml
steps:
  - uses: actions/checkout@v3

  - name: Create a Zip package 🐙
    uses: OctopusDeploy/create-zip-package-action@v3
    with:
      package_id: 'DemoPackage'
      version: '1.0.0'
      output_folder: 'packaging'
      files: |
        published/**/*.*
```

## 📥 Inputs

| Name            | Description                                                                                                     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------- |
| `package_id`    | **Required.** Package id.                                                                                       |
| `version`       | **Required.** Package version.                                                                                  |
| `output_folder` | **Required.** The folder to put the resulting package in.                                                       |
| `base_path`     | **Required.** The base path for the input files.                                                                |
| `files`         | **Required.** Multi-line list of files to include in the package, relative to the base path. Supports globbing. |

## 📤 Outputs

| Name                | Description                                                   |
| :------------------ | :------------------------------------------------------------ |
| `package_file_path` | The full path to the package file that was created.           |
| `package_filename`  | The filename, without the path, of the file that was created. |

## 🤝 Contributions

Contributions are welcome! :heart: Please read our [Contributing Guide](CONTRIBUTING.md) for information about how to get involved in this project.
