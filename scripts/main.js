var activeProperties = {
	tags: {
		'docHeader': ['color', 'size'],
		'docMain': ['color'],
		'docFooter': ['color', 'size'],
	},
	styles: {
		'text': ['color'],
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
	var target = input.parentElement.parentElement;
	target.style.backgroundColor = input.value;

	var mock = document.getElementById('color');
	mock.style.backgroundColor = input.value;
});

document.getElementById('color').addEventListener('click', (event) => {
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
	var x = document.getElementById(stars);
	
    if (x.style.color === '') {
        x.style.color = 'red';
    } else {
        x.style.color = '';
    }
}
