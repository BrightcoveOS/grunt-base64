# grunt-base64

> A grunt task to base 64 encode files.

There are a number of good grunt plugins that do slightly more interesting things with base64 encoding like replace image URLs in your stylesheets with data URIs ([grunt-image-embed](https://github.com/ehynds/grunt-image-embed), for instance). This task just wraps node.js's native base64 encoding capabilities into a grunt task; it's up to you to find something interesting to do with the output.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-base64 --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-base64');
```

## The "base64" task

### Overview
In your project's Gruntfile, add a section named `base64` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  base64: {
    your_target: {
      // Target-specific file lists and/or options go here.
      files: {
        'output.b64': 'input.binary'
      }
    },
  },
})
```

### Options
The base64 task does not take any options beyond which specifying source and destination files.

### Usage Examples
The base64 task takes a standard files configuration and transforms input files into base64-encoded outputs. It can optionally concatenate multiple inputs together:

```js
grunt.initConfig({
  base64: {
    files: {
      'dest/testing123.b64': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0: Initial release
