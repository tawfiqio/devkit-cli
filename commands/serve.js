const http = require('http');
const chalk = require('chalk');

module.exports = function(port = 8080) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DevKit CLI local server running\n');
  });

  server.listen(port, () => {
    console.log(chalk.green(`Server running at http://localhost:${port}/`));
  });
};
