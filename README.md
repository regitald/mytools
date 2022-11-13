# mytools

The Command Line Tools (CLI) function is to retrieve log files on the Linux file system in the folder

## Packages
boxen -  ^4.2.0
chalk - ^4.1.1
commander - ^9.4.1
fs - ^0.0.1
fs-extra - ^10.1.0
minimist - ^1.2.7
path - ^0.12.7
yargs - ^16.1.1
yargs-parser - ^21.1.1

## Install

Requires Node >=16.

From npm install package globaly in the system,

```sh
npm install -g .
```

## Usage

Help

```sh
mytools -h
```

Convert to txt file

```sh
mytools /var/log/nginx/error.log -t text  
mytools /var/log/nginx/error.log
```

Convert to json file

```sh
mytools /var/log/nginx/error.log -t json
```

Convert and move file

```sh
mytools /var/log/nginx/error.log -o /test/backup.txt
mytools /var/log/nginx/error.log -t text  -o /test/backup.txt
mytools /var/log/nginx/error.log -t json  -o /test/backup.json
```




