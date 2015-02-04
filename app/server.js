'use strict';

var Hapi   = require( 'Hapi' );
var server = new Hapi.Server();

var routes = require( 'routes' );
var config = require( 'config' );
var env    = process.NODE_ENV || 'development';

server.connection( {
	'port' : config[ env ].connection.port
} );


server.route( routes );

var start = function () {
	server.start( function () {
		console.log( 'Server started:' + server.info.uri );
	} );
};
module.exports.start = start;