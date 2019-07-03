window.onload = function() {
	var activeProperties = {
		'docHeader': ['color', 'size'],
		'docMain': ['color'],
		'docFooter': ['color', 'size'],
		isActive: function(property, elementId) {
			if(Array.isArray(activeProperties[elementId])) {
				for(var prop in activeProperties[elementId]) {
					if(activeProperties[elementId][prop] === property) {
						return true;
					}
				}
			}

			return false;
		}
	}

	var headerAndFooter = document.querySelectorAll('.propertable');
	for(var i = 0; i < headerAndFooter.length; i++) {
		headerAndFooter[i].addEventListener('mouseenter', (event) => {
			var target = event.target;

			var properties = document.getElementById('properties');
			for(var i = 0; i < properties.children.length; i++) {
				var child = properties.children[i];
				if(activeProperties.isActive(child.id, target.id)) {
					child.style.display = "block";
				} else {
					child.style.display = "none";
				}
			}
			target.appendChild(properties);
			properties.style.display = "block";

			var mock = document.getElementById('color');
			mock.style.backgroundColor = target.style.backgroundColor;

			if(target.style.backgroundColor === 'rgb(0, 0, 0)') {
				mock.style.border = '2px solid white';
			} else {
				mock.style.border = '2px solid black';
			}
		});

		headerAndFooter[i].addEventListener('mouseleave', (event) => {
			document.getElementById('properties').style.display = "none";
		});
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
};