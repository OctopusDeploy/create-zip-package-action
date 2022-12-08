# create-zip-package-action

<img alt= "" src="https://github.com/OctopusDeploy/create-zip-package-action/raw/main/assets/github-actions-octopus.png" />

This is a GitHub Action to create a Zip package to push [Octopus Deploy](https://octopus.com/).

## Examples

Incorporate the following actions in your workflow to push a package to Octopus Deploy using an API key, a target instance (i.e. `server`), and a project:

```yml
steps:
  - uses: actions/checkout@v3
  - name: Install Octopus CLI 🐙
    uses: OctopusDeploy/install-octopus-cli-action@v1
    with:
      version: latest
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

| Name            | Description                                                                          |
| :-------------- | :----------------------------------------------------------------------------------- |
| `package_id`    | **Required.** Package id.                                                            |
| `version`       | **Required.** Package version.                                                       |
| `output_folder` | **Required.** The folder to put the resulting package in.                            |
| `files`         | **Required.** Multi-line list of files to include in the package. Supports globbing. |

## 🤝 Contributions

Contributions are welcome! :heart: Please read our [Contributing Guide](CONTRIBUTING.md) for information about how to get involved in this project.
