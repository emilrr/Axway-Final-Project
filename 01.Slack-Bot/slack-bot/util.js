var webClient = require('slack-terminalize').getWebClient();

var getUser = (username, callBack) => {
	webClient.users.list(username, function (err, res) {
		if (!err && res.ok) {
            callBack(res.members)
		}
	});
}

var postMessage = (channel, response, format) => {

	format = format || true;
	response = (format && '```' + response + '```') || response;

    // more on this API here: https://api.slack.com/methods/chat.postMessage
	webClient.chat.postMessage(channel, response, {
		as_user: true
	});

};

module.exports = {
	postMessage: postMessage,
	getUserInfo: getUser
};