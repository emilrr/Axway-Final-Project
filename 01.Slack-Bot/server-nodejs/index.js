const express = require('express')
var bodyParser = require('body-parser')
var slackUsers = require('slack-users');

let app = express()
var port = process.env.PORT || 1337;

var options = {
  team: 'teamname',
  token: 'xoxb-...'
};

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('index', 'views')

app.get('/', (req, res) => {
   //res.send('Message from GET!')
   res.render('index', { title: 'GET', message: 'Message from GET!' })
})

app.post('/', (req, res) => {
   //res.send('Message from POST!')
   res.render('index', { title: 'POST', message: 'Message from POST!' })
})

app.post('/getUsers', (req, res) => {
    slackUsers(options, (err, users) => {
    if (err) return console.error(err)

    users.forEach((user) => {
          console.log("Username: " + user.name + "\nEmail: " + user.profile.email)
          console.log("--------------------------------------------")
      })
  })
  
  res.end()
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '!')
})
