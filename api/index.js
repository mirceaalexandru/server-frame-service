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
			auth: false,
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

	next();
};


exports.register = function (server, options, next) {
	applyRoutes(server, next);
};

exports.register.attributes = {
	name: 'dummy-service'
};
