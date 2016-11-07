var request = require('request'),
	util = require('../util')

module.exports = (param) => {
	var	channel	= param.channel,
	endpoint = param.commandConfig.endpoint

	request.post(endpoint, (err, res) => {
		var info = 'Send users data!'

		if (err) {
			info = 'No users data!'			
		}

		util.postMessage(channel, info)
	})	
}
