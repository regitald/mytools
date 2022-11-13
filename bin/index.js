#! /usr/bin/env node
const { Command, Option } = require('commander');
const chalk = require('chalk');
const boxen = require('boxen');
const execute = require('./execute');
const program = new Command();

const description = boxen(chalk.green("\n" + "Convert and move file to specific directory and format" + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n";

program
  .name('mytools')
  .description(description)
  .version('1.0.0')
  .arguments('<source>')
  .action((source,options) => { 
    execute.generateFile(source, options);
  })
  .addOption(new Option('-t, --type <type>', 'change format file').choices(['json', 'text']))
  .option('-o, --output <directory>', 'move file')
  .parse(process.argv); 
  







