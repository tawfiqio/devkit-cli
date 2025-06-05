const execa = require('execa');
const chalk = require('chalk');

module.exports = async function(action) {
  try {
    if (action === 'new-branch') {
      const branchName = process.argv[4];
      if (!branchName) {
        console.log(chalk.red('Please provide a branch name.'));
        process.exit(1);
      }
      await execa('git', ['checkout', '-b', branchName]);
      console.log(chalk.green(`Created and switched to branch ${branchName}`));
    } else if (action === 'commit-template') {
      const message = process.argv.slice(4).join(' ');
      if (!message) {
        console.log(chalk.red('Please provide a commit message.'));
        process.exit(1);
      }
      await execa('git', ['commit', '-m', message]);
      console.log(chalk.green('Commit created.'));
    } else {
      console.log(chalk.yellow('Unknown git-helper action.'));
    }
  } catch (error) {
    console.error(chalk.red('Git command failed:', error.message));
  }
};
