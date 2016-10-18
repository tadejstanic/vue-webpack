const test = require('ava');
const {build} = require('../src');

test('build', async (t) => {
  let config = build({
    entryFilePath: './assets/entry.js',
    outputPath: '../dist'
  });
  t.is(config.target, 'web');
  t.is(config.devtool, '#source-map');
  t.is(config.module.rules.length, 5);
  t.is(config.entry.length, 2);
  t.is(config.output.filename, 'bundle');
  t.is(config.output.publicPath, '/');
  t.is(config.output.libraryTarget, 'var');
  t.is(config.plugins.length, 4);
});
