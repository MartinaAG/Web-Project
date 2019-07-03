function addSection(className, numberOfSth) {
	var section = document.createElement('section');
	var layout = document.createElement('div');
	layout.classList.add('layout');
	layout.classList.add(className);
	layout.classList.add('dropdown');


	for(var i = 0; i < numberOfSth; i++) {
		var div = document.createElement('div');
		div.classList.add('sth');
		addImage(div);
		layout.appendChild(div, null);
	}
	
	section.appendChild(layout, null);
	document.body.appendChild(section, null);
}

function addImage(where) { 
	var img = document.createElement("img");
	img.classList.add('plusSignImg');
	img.classList.add('dropbtn');
	img.src = "images/plusSign.png"; 
	where.appendChild(img);
	img.addEventListener("mouseover", function() {
		var content = document.getElementById("content");
		where.appendChild(content);
		img.style.opacity = "0";
	})
	img.addEventListener("mouseleave", function() {
		img.style.opacity = "1";
	} )
}


  