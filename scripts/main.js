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

function starsColor(stars) {	

    if (stars.style.color === '') {
        stars.style.color = 'red';
    } else {
        stars.style.color = '';
	}
	
}

function sendFeedback() {
	var textarea = document.getElementById('feedbackContent');

	var formData = new FormData();
	formData.set('content', textarea.value);

	fetch('sendFeedback.php', {
		method: 'post',
		body: formData
	}).then(res => res.text())
	.then(res => console.log(res));

	var modal = document.getElementById('myModal');
	modal.style.visibility = "hidden";

}