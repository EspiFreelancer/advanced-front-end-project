import styles from './styles.js';

let map;

function initMap() {

	const coords = {
		lat: -29.412970,
		lng: -66.856068
	};

	let map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 16,
		styles: styles
	});

	let marker = new google.maps.Marker({
		position: coords,
		map,
		title: 'Zen Coworking'
	})
}

initMap();