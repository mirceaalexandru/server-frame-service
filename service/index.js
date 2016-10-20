'use strict';

function executeServiceSuccess(request, reply){
	request.server.plugins['utils-job'].send({
		job: "dummy-ok",
		data: {}
	}, function () {
		reply({});
	})
}

module.exports.executeServiceSuccess = executeServiceSuccess;
