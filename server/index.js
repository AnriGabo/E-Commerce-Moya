import http from 'http' 

const server = http.createServer((req,res) => {
    res.write("Hello world i am anri gabaidze")
    res.end();
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})