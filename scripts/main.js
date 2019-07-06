var activeProperties = {
	tags: {
		'docHeader': ['color', 'size'],
		'docMain': ['color'],
		'docFooter': ['color', 'size'],
	},
	styles: {
		'text': ['textColor'],
	},
	get: function(identifier, isTag) {
		if(isTag) {
			return activeProperties.tags[identifier];
		} else {
			return activeProperties.styles[identifier];
		}
	}
}

var propertableByTag = document.querySelectorAll('.propertableByTag');
for(var i = 0; i < propertableByTag.length; i++) {
	attachPropertiesEvents(propertableByTag[i], propertableByTag[i].id, true);
}

document.getElementById('color-wheel').addEventListener('change', (event) => {
	var input = document.getElementById('color-wheel');
	
	var colorMock = document.getElementById('color');
	var textColorMock = document.getElementById('textColor');
	
	// if color is active
	if(colorMock.style.display === 'block') {
		var target = input.parentElement.parentElement;
		target.style.backgroundColor = input.value;
		colorMock.style.backgroundColor = input.value;
	} else { // if textColor is active
		var target = input.parentElement.parentElement.querySelector('.text');
		target.style.color = input.value;
		textColorMock.style.backgroundColor = input.value;
	}
	
});

document.getElementById('color').addEventListener('click', (event) => {
	var input = document.getElementById('color-wheel');
	input.click();
});

document.getElementById('textColor').addEventListener('click', (event) => {
	var input = document.getElementById('color-wheel');
	input.click();
});

function uploadImage(target) {
	var photo = target.files[0];
	var image = target.parentElement.nextElementSibling;
	var formData = new FormData();
	
	formData.append("image", photo);
	fetch('upload.php', {
		method: "POST",
		body: formData
	}).then(res => res.text())
	.then(res => {
		image.style.zIndex = 0;
		image.style.backgroundImage = "url('"  + res + "')";
	});
}

document.getElementById('size').addEventListener('mouseup', (event) => {
	var size = document.getElementById('size');
	var target = size.parentElement.parentElement;
	var height = target.style.height;
	var height = parseInt(height.substring(0, height.length-1));

	if(size.value > 10) {
		target.style.height = (height + 2)+'%';
	} else {
		target.style.height = (height - 2)+'%';
	}

	if(target.tagName === 'HEADER') {
		var article = document.querySelector('article');
		article.style.top = target.style.height;
	}

	size.value = 10;
});

function starsColor(stars, numberOfStars) {	

    if (stars.style.color === '') {
        stars.style.color = 'red';
    } else {
        stars.style.color = '';
	}
	var node = document.getElementById("numberOfStars");
	if(node.value < numberOfStars){
		 node.value = numberOfStars;
	}
}

function sendFeedback() {
	var textarea = document.getElementById('feedbackContent');
	var numberOfStars = document.getElementById('numberOfStars');

	var formData = new FormData();
	formData.set('content', textarea.value);
	formData.set('numberOfStars', numberOfStars.value);

	fetch('sendFeedback.php', {
		method: 'post',
		body: formData
	}).then(res => res.text())
	.then(res => console.log(res));

	var modal = document.getElementById('myModal');
	modal.style.visibility = "hidden";
}

function publish() {
	var cloned = document.documentElement.cloneNode(true);
	var images = [];
	removeUnpublished(cloned, images);
	
	var formData = new FormData();
	formData.set('html', cloned.outerHTML);
	formData.set('images', images.join('|'));

	fetch('publish.php', {
		method: 'post',
		body: formData
	}).then(res => res.text())
		.then(res => console.log(res));
}

function removeUnpublished(node, images) {
	for(var i = 0; i < node.children.length; i++) {
		var child = node.children[i];

		if(child.getAttribute('data-publish') === 'false') {
			child.remove();
			i--;
			continue;
		}

		if(child.tagName === 'LINK' && child.href) {
			var name = child.href.substring(child.href.lastIndexOf('/') + 1);
			name = name.substring(0, name.length-4);
			child.href = 'styles/' + name + 'Publish.css';
		} else if(child.tagName === 'SCRIPT' && child.src) {
			var name = child.src.substring(child.src.lastIndexOf('/') + 1);
			name = name.substring(0, name.length-3);
			child.src = 'scripts/' + name + 'Publish.js';
		} else if(child.tagName === 'DIV' && child.style.backgroundImage) {
			var imageURL = child.style.backgroundImage;
			imageURL = imageURL.substring(5, imageURL.length - 2);
			images.push(imageURL);
		}

		removeUnpublished(child, images);
	}
}

function openModal() {
	var modal = document.getElementById('myModal');
	modal.style.visibility = 'visible';
	modal.children[0].style.top = '50px';
}

function closeModal() {
	var modal = document.getElementById('myModal');
	modal.style.visibility = "hidden";
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbStringToHex(rgbString) {
	var firstComma = rgbString.indexOf(',');
	var r = parseInt(rgbString.substring(rgbString.indexOf('(')+1, firstComma));
	var secondComma = rgbString.indexOf(',', firstComma + 1);
	var g = parseInt(rgbString.substring(firstComma+1, secondComma).trim());
	var b = parseInt(rgbString.substring(secondComma+1, rgbString.length-1).trim());

	return rgbToHex(r,g,b);
}