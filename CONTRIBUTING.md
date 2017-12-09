# Contributing

This document contains information on how to contribute to the app.


## Table of Contents

- [Environment Setup](#environment-setup)
- [Local Development](#local-development)
- [Developing a Feature](#developing-a-feature)
- [Helpful Links](#helpful-links)
- [Production Build](#production-build)


## Environment Setup

We use [Yarn][yarn] for package management. Please make sure it is installed before continuing. Now you're ready to clone the project and install its requirements:

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


## Helpful Links

Here are links to information on the libraries and frameworks used to build the app.

### [React][react]

This is the official documentation for React, the framework at the core of the app. This is a good place to start if you have no idea what's going on.

### [React Bootstrap][react-bootstrap]

This is a version of [Bootstrap][bootstrap] ported over to React. It provides almost all the components from the standard Bootstrap framework but in a more React-friendly manner.

You should look for components here before resorting to using the `className` prop with one of Bootstrap's classes.

### [React Router][react-router]

We use React Router to render different components based on the URL the user has navigated to.

### [Redux][redux]

Redux is used to provide a single place to store the application's state.

#### A High Level Overview

At the core of Redux is a [store][redux-store]. The store is a plain Javascript object storing the state of the entire app. To modify the state, we dispatch [actions][redux-actions]. Actions are objects that tell Redux how the state should change. [Reducers][redux-reducers] are responsible for capturing relevant actions and modifying the state to reflect that action.

The Redux store integrates with React components by having the components [subscribe to the store][redux-react]. When the store's state updates, the components are re-rendered with the most recent data.


## Production Build

A new production-ready build of the app is created and uploaded every time the `master` branch is pushed to GitHub. To create your own copy of the build, run the following command:

```shell
$ yarn build
```


[bootstrap]: https://getbootstrap.com/docs/3.3/components/
[pull-request]: https://github.com/cdriehuys/comp426-web/compare
[react]: https://reactjs.org/
[react-bootstrap]: https://react-bootstrap.github.io/components.html
[react-router]: https://reacttraining.com/react-router/web/example/basic
[redux]: https://redux.js.org/
[redux-actions]: https://redux.js.org/docs/basics/Actions.html
[redux-react]: https://redux.js.org/docs/basics/UsageWithReact.html
[redux-reducers]: https://redux.js.org/docs/basics/Reducers.html
[redux-store]: https://redux.js.org/docs/basics/Store.html
[yarn]: https://yarnpkg.com/en/docs/install
