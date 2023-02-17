# Building for testing

To test a branch in GitHub Actions, an updated `dist/index.js` file is required.

```
npm run build
git add dist/.
git commit -m "updating index.js"
git log -q -n 1 dist/index.js | less -F
```

From the log output take note of the commit hash and push to GitHub

In a test GitHub action you can use the branched build of the action by referencing the commit hash

```
- name: Create Zip Package for Octopus Deploy
      # You may pin to the exact commit or the version.
        uses: OctopusDeploy/create-zip-package-action@6d73e1f62030dfa23534ff0d279774177d5ea1ea
        with:
          package_id: output
          version: 1.0.0
          output_folder: ./pack
          base_path: .
          files: |
            **/*
```