/*
 * grunt-base64
 * https://github.com/dmlap/grunt-base64
 *
 * Copyright (c) 2013 Brightcove
 * Licensed under the Apache 2.0 licenses.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('base64', 'Base64 encode files.', function() {
    var options = this.options({});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // read the source files
      var buffers = f.src.map(function(filepath) {
        return grunt.file.read(filepath, {
          encoding: null
        });
      }),
      
      // concatenate the input files
      output = Buffer.concat(buffers);

      // Base 64 encode the destination file
      grunt.file.write(f.dest, output.toString('base64'));

      // Print a success message
      grunt.log.writeln('Base64 encoded "' + f.dest + '".');
    });
  });

};
