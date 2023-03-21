window.onload = function(){
	var p_footer = document.querySelector('footer .footer-copyright .contain');
	var btn_historia = document.querySelector('#ver-mas-historia');
	
	var elems = document.querySelectorAll('.sidenav');
    	M.Sidenav.init(elems);

	var _date = new Date();

	//Boton ver mas historia
	btn_historia.addEventListener('click',()=>{
		window.open('./html/historia.html')
	});
	
	//Para el copyright en el pie de pagina
	p_footer.prepend(`© ${_date.getFullYear()} Copyright `);

	//Para cargar el mapa
	load_mapa();
}

function load_mapa(){
	//Para cargar el mapa
	var mapa = L.map('mapa').setView([7.94791,-80.77656],11);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mapa);

	let customIcon = {
	 iconUrl:"https://cdn-icons-png.flaticon.com/512/2101/2101302.png",
	 iconSize:[40,40]
	}
	let myIcon = L.icon(customIcon);

	let iconOptions = {
	 title: "name",
	 draggable:true,
	 icon:myIcon
	}

	L.marker([7.94791,-80.77656]).addTo(mapa)
		.bindPopup('Feria San sebasti&aacute;n de Oc&uacute;.')
		.openPopup();

	L.marker([8.1109,-80.7753],iconOptions).addTo(mapa)
		.bindPopup('V&iacute;a Interamericana, entrada de Oc&uacute;.')
		.openPopup();

	//Create a red polyline from an array of LatLng points
	var latlngs = [
    	[8.1109,-80.7753],[8.1069,-80.7745],[8.1034,-80.7738],[8.1014,-80.7731],[8.0848,-80.7741],[8.0759,-80.7778],
    	[8.07454,-80.77840],[8.07280,-80.77876],[8.07196,-80.77883],[8.07196,-80.77883],[8.06842,-80.77842],
    	[8.06780,-80.77828],[8.06686,-80.77783],[8.06639,-80.77747],[8.06524,-80.77673],[8.06018,-80.77287],[8.05863,-80.77199],
    	[8.05795,-80.77185],[8.04818,-80.77339],[8.03227,-80.77234],[8.01147,-80.78691],[7.98943,-80.79329],[7.97417,-80.78718],
    	[7.96643,-80.78068],[7.95260,-80.78041],[7.94693,-80.77815],[7.94791,-80.77656]
	];

	var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mapa);

	// zoom the map to the polyline
	mapa.fitBounds(polyline.getBounds());
}