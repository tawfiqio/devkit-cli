const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const content = `import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`;

  const filePath = path.join(process.cwd(), `${componentName}.jsx`);

  if (fs.existsSync(filePath)) {
    console.log(chalk.red(`Component ${componentName}.jsx already exists!`));
    process.exit(1);
  }

  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`Created React component: ${componentName}.jsx`));
};
