if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/js/sw.js', {
		scope: '/serviceworker/'
	}).then(function(sw) {
		console.log("sw registration worked!");
	}).catch(function() {
		console.log("registration failed :(");
	});
}