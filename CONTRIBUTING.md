# Contributing

This document contains information on how to contribute to the app.


## Table of Contents

- [Environment Setup](#environment-setup)
- [Local Development](#local-development)
- [Developing a Feature](#developing-a-feature)
- [Production Build](#production-build)


## Environment Setup

We use [Yarn][yarn] for package management. Please make sure it is installed before continuing. The React app is managed with [Create React App](https://github.com/facebookincubator/create-react-app). You can install it with the following command:

```shell
$ yarn global add create-react-app
```

Now you're ready to clone the project and install its requirements:

```shell
$ git clone https://github.com/cdriehuys/comp426-web
$ cd comp426-web
$ yarn
```


## Local Development

Running the following command will launch a local version of the app:

```shell
$ yarn start
```


## Developing a Feature

Our preferred workflow is to make changes in a feature branch and then merge it back into the `develop` branch.

```shell
# Make sure the branch is created from the 'develop' branch
$ git checkout develop
$ git checkout -b my-new-feature

# Or you can specify the parent branch when creating it
$ git checkout -b my-new-feature develop

# Make your changes and commit them
$ git add .
$ git commit

# Push your changes upstream
$ git push --set-upstream-to origin my-new-feature
```

After you've pushed your new feature branch to GitHub, make a [pull request][pull-request].


## Production Build

A new production-ready build of the app is created and uploaded every time the `master` branch is pushed to GitHub. To create your own copy of the build, run the following command:

```shell
$ yarn build
```


[create-react-app]: https://github.com/facebookincubator/create-react-app
[pull-request]: https://github.com/cdriehuys/comp426-web/compare
[yarn]: https://yarnpkg.com/en/docs/install
