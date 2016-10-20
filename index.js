'use strict';

exports.register = function (server, options, next) {
	server.register([
		{
			register: require('./api/index')
		}
	], next);
};

exports.register.attributes = {
	pkg: require('./package.json')
};
