#!/usr/bin/env node
const program = require('commander');
const { version } = require('../package.json');

const matterNow = require('..');

program
  .usage('[options] <file...>')
  .option('-a, --attr <attribute>', 'front matter attribute', 'date')
  .option('-f, --format <format>', 'Moment.js date format')
  .version(version, '-v, --version')
  .parse(process.argv);

const files = program.args;

if (files.length > 0) {
  matterNow(files, program.opts());
} else {
  program.help();
}
