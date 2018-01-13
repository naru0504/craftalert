<p align="center">
  <a href="http://sweetalert.js.org">
    <img alt="SweetAlert" src="https://github.com/t4t5/sweetalert/blob/e3c2085473a0eb5a6b022e43eb22e746380bb955/assets/logotype.png" width="300">
  </a>
</p>

<p align="center">
  A beautiful replacement for JavaScript's "alert"
</p>

<p align="center">
  <a href="https://badge.fury.io/js/sweetalert"><img src="https://badge.fury.io/js/sweetalert.svg" alt="npm version" height="18"></a>
  <a href="https://travis-ci.org/t4t5/sweetalert"><img src="https://travis-ci.org/t4t5/sweetalert.svg" alt="Build status" /><a>
  <a href="https://www.npmjs.com/package/sweetalert">
    <img src="https://img.shields.io/npm/dm/sweetalert.svg" />
  </a>
  <a href="https://github.com/t4t5/sweetalert/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/t4t5/sweetalert.svg" />
  </a>
</p>

<p align="center">
  <img alt="A success modal" src="https://github.com/t4t5/sweetalert/blob/e3c2085473a0eb5a6b022e43eb22e746380bb955/assets/cral.gif">
</p>


## Installation

```bash
$ npm install --save sweetalert
```

## Usage

```javascript
import cral from 'sweetalert'

cral("Hello world!")
```

## Upgrading from 1.X

Many improvements and breaking changes have been introduced in the 2.0 release. Make sure you read the [upgrade guide](https://sweetalert.js.org/guides/#upgrading-from-1x) to avoid nasty suprises!

## Guides

- [Installation](https://sweetalert.js.org/guides/#installation)
- [Getting started](https://sweetalert.js.org/guides/#getting-started)
- [Advanced examples](https://sweetalert.js.org/guides/#advanced-examples)
- [Upgrading from 1.X](https://sweetalert.js.org/guides/#upgrading-from-1x)

## Documentation

- [Configuration](https://sweetalert.js.org/docs/#configuration)
- [Methods](https://sweetalert.js.org/docs/#methods)
- [Theming](https://sweetalert.js.org/docs/#theming)

## Examples

### An error message:
```javascript
cral("Oops!", "Something went wrong!", "error")
```

### A warning message, with a function attached to the confirm message:
  - Using promises:
  ```javascript
  cral({
    title: "Are you sure?",
    text: "Are you sure that you want to leave this page?",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {
    if (willDelete) {
      cral("Deleted!", "Your imaginary file has been deleted!", "success");
    }
  });
  ```
  - Using async/await:
  ```javascript
  const willDelete = await cral({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this file?",
    icon: "warning",
    dangerMode: true,
  })

  if (willDelete) {
    cral("Deleted!", "Your imaginary file has been deleted!", "success");
  }
  ```
  
### A prompt modal, where the user's input is logged:
  - Using promises:
  ```javascript
  cral("Type something:", {
    content: "input",
  })
  .then((value) => {
    cral(`You typed: ${value}`);
  })
  ```
  - Using async/await:
  ```javascript
  const value = await cral("Type something:", {
    content: "input",
  })

  cral(`You typed: ${value}`);
  ```

### In combination with Fetch:
  - Using promises:
  ```javascript
  cral({
    text: 'Wanna log some information about Bulbasaur?',
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  .then(willSearch => {
    if (willSearch) {
      return fetch(`http://pokeapi.co/api/v2/pokemon/1`)
    }
  })
  .then(result => result.json())
  .then(json => console.log(json))
  .catch(err => {
    cral("Oops!", "Seems like we couldn't fetch the info", "error")
  })
  ```
  - Using async/await:
  ```javascript
  const willSearch = await cral({
    text: 'Wanna log some information about Bulbasaur?',
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  
  if (willSearch) {
    try {
      const result = await fetch(`http://pokeapi.co/api/v2/pokemon/1`)
      const json = await result.json()
      console.log(json)
    } catch (err) {
      cral("Oops!", "Seems like we couldn't fetch the info", "error")
    }
  }
  ```

## Contributing

### If you're changing the core library:
1. Make changes in the `src` folder.
2. Preview changes by running `npm run docs`
3. Submit pull request

### If you're changing the documentation:
1. Make changes in the `docs-src` folder.
2. Preview changes by running `npm run docs`
3. Run `npm run builddocs` to compile the changes to the `docs` folder
4. Submit pull request
