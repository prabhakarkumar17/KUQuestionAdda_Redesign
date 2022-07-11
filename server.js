const express = require('express');
const path = require('path');
const app = express();
const nodemon = require('nodemon');
const mysql = require('mysql');
const body_parser = require('body-parser');
const multer = require('multer')
//const myScript = require('./myScript')
var name = ""
var faculty = ""
var dept = ""
var year = ""
var sem = ""
var course = "MCA"

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        name = req.body.name
        faculty = req.body.faculty
        dept = req.body.dept
        year = req.body.year
        sem = req.body.sem

        const filePath = "./questionPapers/"+faculty+"/"+dept+"/"+course+"/"+sem+"/"+year
        console.log(filePath)
        cb(null, filePath)
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + "---" + file.originalname)
    }
})

const upload = multer({storage : fileStorageEngine})

app.post('/uploadPaper',upload.array('qPaper[]', 5), (req, res) => {
    
    //console.log(name+" "+faculty+" "+dept+" "+year+" "+sem)
    console.log("File uploaded successfully")
    res.send(req.files)
    
})

var loginStatus = false;

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended : false
}))

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '123Ankit',
//     database : 'student'
// });

// connection.connect( (err)=> {
//     if(err) {
//         console.log(err);
//         return;
//     } else {
//         console.log("Database Connected");
//     }
// });


app.get('/', (request, response) => {
    response.sendFile(
        path.join(
            __dirname + '/index.html'
        )
    );
});

app.get('/:id', (request, response) => {
    const id = request.params.id;

    response.sendFile(
        path.join(
            __dirname + '/' + id
        )
    )
})

app.get('/:idd/:id', (request, response) => {
    const id = request.params.id;
    const idd = request.params.idd;

    response.sendFile(
        path.join(
            __dirname + '/' + idd + '/' + id 
        )
    );
});

app.get('/images/:id', (request, response) => {
    const id = request.params.id;

    response.sendFile(
        path.join(
            __dirname + '/images/' + id
        )
    );
});

app.post('/post/loginSuccess', (request, response) => {

    const roll = request.body.roll;
    const password = request.body.password;

    // connection.query('UPDATE register SET name = '+mysql.escape(updateName)+'WHERE roll = '+mysql.escape(update),
    //                             (error,results,field) => {
    //                                 if(error) throw error;
    //                                 console.log("Data Updated Successfully");
    //                             })

    connection.query('SELECT * FROM register WHERE roll = '+mysql.escape(roll), 
                       (error, results, field) => {
                           if(error) throw error;
                           const receivedPassword = results[0].password;
                           if(receivedPassword == password){
                               loginStatus = true;
                               response.send("Login Successfully "+results[0].name);
                           } else {
                               response.send("Try again");
                           }
                       });
});

app.post('/post/register', (request, response) => {

    const name = request.body.name;
    const email = request.body.email;
    const roll = request.body.roll;
    const dept = request.body.dept;
    const password = request.body.password;
    const confirmPassword = request.body.confirmPassword;

    if(password == confirmPassword){
        connection.query('INSERT INTO register VALUES('+mysql.escape(roll)+','
                                                   +mysql.escape(name)+','
                                                   +mysql.escape(email)+','
                                                   +mysql.escape(password)+','
                                                   +mysql.escape(dept)+');', (error, results, field) => {
                                                       if(error) throw error;
                                                       response.send("Data Inserted Successfully");
                                                   })
    } else {
        response.send("Password and confirm password should be same");
    }
   
    //console.log(name,email,roll,confirmPassword,password);
})

app.listen(8000, (request, response) => {
    console.log("Server has started");
})