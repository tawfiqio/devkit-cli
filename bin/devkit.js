#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');

program
  .name('devkit')
  .description('Developer toolkit CLI with handy utilities')
  .version('1.0.0');

// Register commands
program
  .command('new-component <name>')
  .description('Generate a React functional component boilerplate')
  .action(require('../commands/new-component'));

program
  .command('git-helper <action>')
  .description('Common git helpers like branch creation or commit templates')
  .action(require('../commands/git-helper'));

program
  .command('json-format <file>')
  .description('Format and validate a JSON file')
  .action(require('../commands/json-format'));

program
  .command('regex-test <pattern>')
  .description('Interactive regex tester')
  .action(require('../commands/regex-test'));

program
  .command('serve [port]')
  .description('Start a lightweight local HTTP server')
  .action(require('../commands/serve'));

program.parse(process.argv);
