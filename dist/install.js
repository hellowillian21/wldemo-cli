'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//命令行交互
// 后期考虑使用inquirer命令行交互选择模板？还是足够简单就好？
// 命令行laoding
let install = async () => {
  let loading = (0, _ora2.default)('fetching template');
  let answer = await _inquirer2.default.prompt({
    type: 'input',
    name: 'projectName',
    message: 'demo名称',
    default: "my-demo" // 默认名
  });
  let project = answer.projectName;
  console.log(project);
  loading.start();
  // 拉取模板
  (0, _downloadGitRepo2.default)('hellowillian21/wldemo-cli-template', process.cwd() + '/' + project, err => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(process.cwd() + '/' +project)
    loading.succeed();
  });
}; // 下载github的模板
// 下载模板
exports.default = install;