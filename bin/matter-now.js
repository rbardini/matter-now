#!/usr/bin/env node
import fs from 'node:fs';
import { program } from 'commander';
import matterNow from '../index.js';

const { version } = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url)),
);

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
