const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

function generateFile(file, option) {
    try {
        const sources = path.resolve(file);
        const format = option.type ? option.type : 'txt';
        
        if (!fs.existsSync(sources)){
            return console.error(chalk.red('The path or file doesnt exist!'));
        }
    
        let data = [];
        data = fs.readFileSync(sources,'utf-8');
        if (format === 'json') {
            const splitArr = data.split(/(?:\n|^)\s*(\d+-\d+-\d+T\d+:\d+:\d+.\d+Z) \[(\w+)\]/)
            let newArr = [];
            for (const element of splitArr) {
                let obj = {};
                obj['error'] = element;
                newArr.push(obj);
            }
            data = JSON.stringify(newArr);
        }

        if (option.output) {
            const destination = option.output;
            fs.unlinkSync(sources);
            fs.writeFileSync(destination, data);
        }
        console.log(data)
    } catch (error) {
        return console.error(chalk.red(`${error}`));
    }
    
}

module.exports = {
    generateFile: generateFile,
};