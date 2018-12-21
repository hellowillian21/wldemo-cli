// 下载模板
import ora from 'ora' // 命令行laoding
import downLoadGit from 'download-git-repo' // 下载github的模板
import inquirer from 'inquirer' //命令行交互
// 后期考虑使用inquirer命令行交互选择模板？还是足够简单就好？
let install = async () => {
  let loading = ora('fetching template')
  let answer = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'demo名称',
    default: "my-demo" // 默认名
  })
  let project = answer.projectName
  console.log(project)
  loading.start()
  // 拉取模板
  downLoadGit('hellowillian21/wldemo-cli-template', process.cwd() + '/' +project, (err) => {
    if(err) {
      console.log(err)
      return
    }
    // console.log(process.cwd() + '/' +project)
    loading.succeed()
  })
}
export default install