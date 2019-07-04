function addSection(className, numberOfSth) {
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

	var docMain = document.getElementById('docMain');
	docMain.appendChild(layout, null);
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
		content.style.display = "block";
		img.style.opacity = "0";
	})
	img.addEventListener("mouseleave", function() {
		img.style.opacity = "1";
	} )
}

function addTextInSth(target) {
	var parent = target.parentElement.parentElement;
	parent.querySelector("img.dropbtn").remove();
	
	var textarea = document.createElement("textarea");
	textarea.classList.add("input");
	parent.appendChild(textarea);

	var p = document.createElement('p');
	p.classList.add("input");
	p.style.display = "none";
	parent.appendChild(p);

	textarea.addEventListener("blur", function() {
		if(textarea.value.length == 0) {
			return;
		}
		p.innerText = textarea.value;
		p.style.width = textarea.style.width;
		p.style.height = textarea.style.height;
		textarea.style.display = "none";
		p.style.display = "block";
	});

	p.addEventListener("click", function() {
		textarea.style.display = "block";
		p.style.display = "none";
	});

	var content = document.getElementById("content");
	content.style.display = "none";
}

function addImageInSth(target) {
	var a = target.parentElement.parentElement;
	a.querySelector("img.dropbtn").remove();
	var input = document.createElement("input");
	input.type = "file";
	input.classList.add("input");
	a.appendChild(input);
	var content = document.getElementById("content");
	content.style.display = "none";
}

function addBtnInSth(target) {
	var a = target.parentElement.parentElement;
	a.querySelector("img.dropbtn").remove();
	var button = document.createElement("button");
	button.innerText = "Feedback";
	button.id = "feedbackButton";
	var modal = document.getElementById('myModal');
    
	button.onclick = function() { 
		modal.style.visibility = "visible";
		modal.children[0].style.top = '50px';
	}
	button.classList.add("input");
	a.appendChild(button);
	var content = document.getElementById("content");
	content.style.display = "none";

	var close = document.getElementById	("close");

	close.onclick = function() {
		modal.style.visibility = "hidden";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
		  modal.style.display = "none";
		}
	  
	}
}

  