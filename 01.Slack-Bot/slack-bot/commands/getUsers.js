var request = require('request'),
	util = require('../util')

module.exports = (param) => {

    var data = param.args,
        user = data[0],
        myRegexp = /\<@(.*?)\>/g,
        match = myRegexp.exec(user),
        username = match[1] 
	    
   util.getUserInfo(username, (users) => {
         var options = {
            url: 'http://localhost:1337/getUsers',
            method: 'POST',
            form: users
        }

       request.post(options, (err, res, body) => {
            if (!err && res.ok) {
                console.log(body)
            }
	    })
   })
}