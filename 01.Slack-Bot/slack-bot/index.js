var slackTerminal = require('slack-terminalize');

slackTerminal.init('xoxb-...', {
	autoReconnect: true
}, {
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});