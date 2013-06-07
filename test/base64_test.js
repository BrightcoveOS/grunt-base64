'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.base64 = {
  setUp: function(done) {
    done();
  },

  text: function(test) {
    test.expect(1);

    var
      raw = grunt.file.read('test/fixtures/text', {
        encoding: null
      }).toString('hex'),
      decoded = new Buffer(grunt.file.read('tmp/text.b64'), 'base64').toString('hex');

    
    test.equal(decoded, raw, 'the text file should be base64 encoded');
    test.done();
  },

  binary: function(test) {
    var
      raw = grunt.file.read('test/fixtures/tiny.mp4', {
        encoding: null
      }).toString('hex'),
      rawWords = raw.match(/.{1,4}/g),
      decoded = new Buffer(grunt.file.read('tmp/tiny.mp4.b64'), 'base64').toString('hex'),
      decodedWords = decoded.match(/.{1,4}/g),
      i = rawWords.length;
    

    test.expect(i + 1);
    while (i--) {
      test.equal(decodedWords[i],
                 rawWords[i],
                 'difference at word ' + i + ': expected ' + rawWords[i] + ' but found ' + decodedWords[i]);
    }
    test.equal(decodedWords.length, rawWords.length, 'the decoded output should be the same size as the original');
    test.done();
  },
};
