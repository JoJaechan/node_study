const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server listening PORT : ${PORT}`);
});
// {
//   const a = 1;
//   var c = 1;
// }

// console.log(c);

// const someString = 'he';
// console.log(Math.log(someString));
