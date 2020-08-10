/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9ef4d81981f9d84116ba92caf3e2f392&autoload=false';
		document.head.appendChild(script);

		script.onload = () => {
			kakao.maps.load(() => {
				let container = document.getElementById('myMap');
				let options = {
					center: new kakao.maps.LatLng(37.506502, 127.053617),
					level: 7,
				};

				const map = new window.kakao.maps.Map(container, options);
				console.log('[map]', map);
			});
		};
	}, []);
	return <div id='myMap' style={{ width: '1050px', height: '300px' }} />;
};

export default MapContainer;
