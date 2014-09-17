this.addEventListener('install', function(event) {
	console.log(event);
});

this.addEventListener('activate', function(event) {
	console.log(event);
});

this.addEventListener('fetch', function(event) {
	console.log(event);
/*	event.respondWith(
		new Response('This came from the service worker!')
	);
*/
});