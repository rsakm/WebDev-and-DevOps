const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.method} ${req.url}`;

    // if (req.url === '/') {
    //     res.write('Hello World');
    //     res.end();
    // }
    
fs.appendFile('log.txt', log + '\n', (err) => {
    switch(req.url){
        case '/':
            res.write('Home page');
            res.end();
            break;
        case '/about':
            res.write('About Page');
            res.end();
            break;
        default:
            res.write('404');
            res.end();
            break; 
    }
})
    
});

server.listen(3000,()=>{
    console.log("Listening on port 3000");
});