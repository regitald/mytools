#! /usr/bin/env node
const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)

// console.log(argv.r)
// const argv = require('minimist')(process.argv.slice(2));

const usage = boxen(chalk.green("\n" + "Convert and move file to specific directory and format" + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n";

yargs
    .usage(usage)
    .alias("v", "version")
    .alias("h", "help")
    .option("t", {alias:"",describe: "Convert file to specific format (json & txt)", type: "string"})
    .option("o", {alias:"",describe: "Move file to specific directory", type: "string"})
    .example("mytools <dir/file> -t <format>" + "\t\t" + "change format file")
    .example("mytools <dir/file> -o <dir/file>" + "\t\t" + "move file")
    .example("mytools <dir/file> -t <format> -o <dir/file>" + "\t" + "change format & move file");
    yargs
    .command(
      "r",
      "Remove a contact",
      {
        name: {
          describe: "Contact name",
          type: "string",
          demandOption: true,
        },
      },
      function (argv) {
        console.log("ini" + argv)
      }
    )
    .example("node $0 remove --name='John Doe'");

  // const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
  
  // if (argv.t) {
  //   console.log('The current time is: ', new Date().toLocaleTimeString());
  // }
  
//   if (argv._.includes('lyr')) {
//     const year = argv.year || new Date().getFullYear();
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       console.log(`${year} is a Leap Year`);
//     } else {
//       console.log(`${year} is NOT a Leap Year`);
//     }
//   }




