const express = require('express')
var bodyParser = require('body-parser'),
    slackUsers = require('slack-users');

let app = express()
var port = process.env.PORT || 1337;

app.set('view engine', 'pug')
app.set('index', 'views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   //res.send('Message from GET!')
   res.render('index', { title: 'GET', message: 'Message from GET!' })
})

app.post('/', (req, res) => {
   //res.send('Message from POST!')
   res.render('index', { title: 'POST', message: 'Message from POST!' })
})

app.post('/getUsers', (req, res) => {
    var users = req.body

    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)){
            var username = req.body[key].name,
                email = req.body[key].profile.email

            console.log("Username: " + username + "\nEmail: " + email)
            console.log("--------------------------------------------")
        }
    }
  
  res.end()
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '!')
})
