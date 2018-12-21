'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('new').description('install template').alias('i').action(() => {
  // console.log('user install')
  (0, _install2.default)();
});
// program.
// console.log('===welcome===')
// import program from 'commander'
_commander2.default.version(_constants.VERSION, '-v, --version').parse(process.argv);