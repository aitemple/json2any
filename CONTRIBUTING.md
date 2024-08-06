# Contributing to json2any

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this VSCode Plugin. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for this VSCode Plugin. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- **Before submitting a bug report**, please check the [issue tracker](https://github.com/aitemple/json2any/issues) as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible.
- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps** which reproduce the problem in as many details as possible.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for this VSCode Plugin, including completely new features and minor improvements to existing functionality.

- **Before suggesting an enhancement**, please check the [issue tracker](https://github.com/aitemple/json2any/issues) as you might find that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible.
- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.

### Your First Code Contribution

- **Find an issue** that you are interested in. 
- **Fork the repository** and clone it to your local machine.
- **Create a new branch**: `git checkout -b your-branch-name`
- **Make your changes**.
- **Push your branch**: `git push origin your-branch-name`
- **Open a Pull Request**.

### Running the Project

To get a local copy up and running follow these simple steps:

#### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

#### Start developing

1. Clone the repo
    ```sh
    git clone https://github.com/aitemple/json2any.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Open the project in Visual Studio Code
    ```sh
    code .
    ```

#### Debug the Extension

1. Press `F5` to open a new VSCode window with [src/extension.ts](src/extension.ts)loaded.
2. This will open a new VSCode window,and extension will automatically reload with the changes.
3
    ```sh
    >> npm install -g vsce
    >> vsce package
    ```

### Pull Requests

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
- Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
- You may merge the Pull Request in once you have the sign-off of one other developer, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

- `good first issue` - issues which should be suitable for people who are new to the project.
- `help wanted` - issues which should be suitable for any contributors.
- `bug` - a confirmed bug or reported error in the project.
- `enhancement` - a new feature or request for a feature.

Thanks for contributing!

The [My VSCode Plugin](https://github.com/aitemple) Team