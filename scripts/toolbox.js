function addSection(className, numberOfSth) {
	var section = document.createElement('section');
	var layout = document.createElement('div');
	layout.classList.add('layout');
	layout.classList.add(className);

	for(var i = 0; i < numberOfSth; i++){
		var div = document.createElement('div');
		div.classList.add('sth');
		layout.appendChild(div, null);
	}
	
	section.appendChild(layout, null);
	document.body.appendChild(section, null);
}