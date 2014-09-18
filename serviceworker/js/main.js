if ( 'serviceWorker' in navigator ) {
	navigator.serviceWorker.register( 'js/sw.js', {
		scope: '/serviceworker/'
	}).then( function( sw ) {
		console.log( "registration worked!", sw );
	}).catch( function( err ) {
		console.log( "registration failed :(", err );
	});
}