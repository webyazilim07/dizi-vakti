const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   
    
    fs.readFile('index.html' ,function(error,file){
        if(error){
            res.end('hata');
        }
        else{
            res.end(file);
        }
    })
}
)

server.listen(3000);
console.log('port 3000 listening...')