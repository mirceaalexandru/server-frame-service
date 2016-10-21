'use strict';

const Service = require('./../service/index');
const Joi = require('joi');

let applyRoutes = function (server, next) {
	server.route({
		method: 'POST',
		path: '/service/ok',
		config: {
			description: 'Just a dummy service that will complete successfully',
			tags: ['dummy', 'service'],
			response: {
				failAction: 'log',
				status: {
					200: Joi.object({})
				}
			}
		},
		handler: (request, reply) => {
			Service.executeServiceSuccess(request, reply);
		}
	});

	server.route({
		method: 'GET',
		path: '/ping',
		config: {
			description: 'Just a dummy service',
			tags: ['dummy', 'service'],
			auth: false
		},
		handler: (request, reply) => {
			console.log('MESSAGE');
			reply({pong: true});
		}
	});

	next();
};


exports.register = function (server, options, next) {
	applyRoutes(server, next);
};

exports.register.attributes = {
	name: 'dummy-service'
};
