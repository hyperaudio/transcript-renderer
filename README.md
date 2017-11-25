# transcript-renderer

![Node](https://img.shields.io/node/v/transcript-renderer.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/transcript-renderer.svg?style=flat-square)](https://www.npmjs.com/package/transcript-renderer)
[![Travis](https://img.shields.io/travis/hyperaudio/transcript-renderer/master.svg?style=flat-square)](https://travis-ci.org/hyperaudio/transcript-renderer)
[![David](https://img.shields.io/david/hyperaudio/transcript-renderer.svg?style=flat-square)](https://david-dm.org/hyperaudio/transcript-renderer)
[![Coverage Status](https://img.shields.io/coveralls/hyperaudio/transcript-renderer.svg?style=flat-square)](https://coveralls.io/github/hyperaudio/transcript-renderer)
[![NPM](https://img.shields.io/npm/dt/transcript-renderer.svg?style=flat-square)](https://www.npmjs.com/package/transcript-renderer)

> Renders Hyperaudio JSON transcripts to HTML

### Usage

```js
import transcriptRenderer from 'transcript-renderer';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add transcript-renderer (--dev)

or npm

	npm install transcript-renderer (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import transcriptRenderer from 'transcript-renderer';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
transcriptRenderer

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hyperaudio/transcript-renderer) example.

### Builds

If you don't use a package manager, you can [access `transcript-renderer` via unpkg (CDN)](https://unpkg.com/transcript-renderer/), download the source, or point your package manager to the url.

`transcript-renderer` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `transcript-renderer` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/transcript-renderer/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/transcript-renderer) on your page. The UMD builds make `transcript-renderer` available as a `window.transcriptRenderer` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
