const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//Unhandled promise rejections are not caught by default. They can lead to unexpected behavior or crashes. The best practice is to handle them explicitly.

//This function calls an external API that might reject.
const externalApi = () => {
    return new Promise((resolve, reject) => {
        //Simulate a network error
        setTimeout(() => {
            reject(new Error('Network error'));
        }, 1000);
    });
}

externalApi()
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));//Best practice, handle the rejection
//process.on('unhandledRejection', (reason, promise) => {
//  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
//});
//Another best practice is to use a centralized error handler to handle both uncaught exceptions and unhandled rejections
//In a real application, you would replace console.error with a more robust logging mechanism.
