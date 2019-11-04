const express = require('express')
const app = express()
const port = 8005
const http = require('http').Server(app)
const io = require('socket.io')(http)
const db = require('./database');
const path = require('path');

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
http.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname + '/index.html'))
)

io.on('connection', function(socket){
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    console.log('a user connected');
});


// app.get('/db', async (req, res) => {
//     try {

//         await db.select().from('user_groups')
//         .then((results) => {
//             for(i=0;i<results.length;i++){
//                const users = db.select().from('users').where('id_user_group', result[i].id_user_group)
//                results[i].users = users
//                 // db.select().from('users').where('id_user_group', result[i].id_user_group)
//                 // .then((users) => {
//                 //     results[i].users = users
//                 // })   
//             }
//         })
//         .then((user_groups) => {
//             console.log()
//             res.status(200).json(user_groups)
//         })     


//     } 
//     catch (e) {
//         console.log(e);
//         next(e)
//     }  
// })




