'use strict';

module.exports = function ( ) {
	console.log( 'sdfsdf' )
	return {
		'method' : 'GET',
		'path'   : '/{param*}',

		'handler' :  {
			'directory' : {
				'path'  : 'public'
			}
		}
	};
};