// console.log('===welcome===')
// import program from 'commander'
import program from 'commander'
import {VERSION} from './utils/constants'
import install from './install'
program.command('new')
  .description('install template')
  .alias('i')
  .action(() => {
    // console.log('user install')
    install()
  })
// program.
program.version(VERSION, '-v, --version').parse(process.argv)