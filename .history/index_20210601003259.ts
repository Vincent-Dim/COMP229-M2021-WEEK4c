import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';   //: type = value, don't have to do this
const port: number = 3000;


const server: http.Server = http.createServer((req, res) =>  // user request and server response
{
  res.setHeader('Content-Type', 'text/plain'); //sets up page header
  displayHome(res);         // response is passed into the displayHome function (defined below), which writes out to the web page
});


server.listen(port, hostname, () =>     //similar to add event lister on java script
{
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

function displayHome(res: http.ServerResponse): void       //create a function that reads a file named index.html. res means response from server. 
{
  fs.readFile("index.html", (err,data) =>   //reading file index.html
  {
    if(err)
    {
      res.writeHead(404);
      res.end("ERROR: 404 - Page not found");
      console.log("Error"); //display error message if there is an error reading the file
      return; 
    }
    
    res.writeHead(200);     //if there is no error
    res.end(data);          //outputs data as a response
    
  });
}