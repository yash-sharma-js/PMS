import http from 'http';
import app  from './app';
import env from'dotenv';
env.config();
const PORT = process.env.PORT || 8080

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
});
