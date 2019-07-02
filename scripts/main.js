var headerAndFooter = document.querySelectorAll('header,article,footer');
for(var i = 0; i < headerAndFooter.length; i++) {
	headerAndFooter[i].addEventListener('mouseenter', (event) => {
		var target = event.target;
		var props = document.getElementById('headerFooterProperties');
		target.appendChild(props);

		props.style.display = "block";
		var mock = document.getElementById('color-wheel-mock');
		mock.style.backgroundColor = target.style.backgroundColor;

		if(target.style.backgroundColor === 'rgb(0, 0, 0)') {
			mock.style.border = '2px solid white';
		} else {
			mock.style.border = '2px solid black';
		}

		var size = document.getElementById('size');
		size.value = 10;
	});

	headerAndFooter[i].addEventListener('mouseleave', (event) => {
		document.getElementById('headerFooterProperties').style.display = "none";
	});
}

document.getElementById('color-wheel').addEventListener('change', (event) => {
	var input = document.getElementById('color-wheel');
	var target = input.parentElement.parentElement;
	target.style.backgroundColor = input.value;

	var mock = document.getElementById('color-wheel-mock');
	mock.style.backgroundColor = input.value;
});

document.getElementById('color-wheel-mock').addEventListener('click', (event) => {
	var input = document.getElementById('color-wheel');
	input.click();
});

var size = 10;
document.getElementById('size').addEventListener('mouseup', (event) => {
	var size = document.getElementById('size');
	var target = size.parentElement.parentElement;
	var height = target.style.height;
	if(size.value > 10) {
		target.style.height = (parseInt(height.substring(0, height.length-1))+2)+'%';
	} else {
		target.style.height = (parseInt(height.substring(0, height.length-1))-2)+'%';
	}

	size.value = 10;
});