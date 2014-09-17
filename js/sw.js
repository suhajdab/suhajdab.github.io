this.addEventListener('fetch', function(event) {
	event.respondWith(
		new Response('This came from the service worker!')
	);
});