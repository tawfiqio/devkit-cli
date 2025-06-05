const fs = require('fs');
const chalk = require('chalk');

module.exports = function(file) {
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const parsed = JSON.parse(raw);
    const formatted = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(file, formatted);
    console.log(chalk.green(`Formatted JSON file: ${file}`));
  } catch (err) {
    console.log(chalk.red(`Error reading or parsing ${file}: ${err.message}`));
  }
};
