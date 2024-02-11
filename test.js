var http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end(`hi bro this is text/plain

    so node js is runtime as well as a library which is used to create servers and server side applications 
    so this is single threaded, non blocking, asynchronous programming

    three important parts of the node are
    1. importing the modules
    2. creating a server
    3. reading request and sending responses

    the architechure of the nodejs runtime is
    1. event queue :- Event Queue in a Node.js server stores incoming client requests and passes those
    requests one-by-one into the Event Loop
    2. event loop :- Event Loop indefinitely receives requests and processes them, and then returns the
    responses to corresponding clients
    3. Request :- these are somthing raised by the clients or uses for some actions or to get some data from the server
    4. Nodejs server :- takes these request from the users, processes them and return back a response
    5. Threadloop :- Thread pool consists of all the threads available for carrying out some tasks that might be
    required to fulfill client requests
    `)
})
server.listen(3000);

console.log("the server is running on 3000 using http modules`")
