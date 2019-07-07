var templates = document.querySelectorAll('main img');
for (let i = 0; i < templates.length; i++) {
	template = templates[i];
	template.onclick = function (event) {
		var data = event.target.src.substring(event.target.src.lastIndexOf('/')+1, event.target.src.lastIndexOf('.'));
		
		var form = document.createElement('form');
		form.action = 'main.php';
		form.method = 'get';

		var input = document.createElement('input');
		input.name = "template";
		input.value = data;

		form.appendChild(input);
		document.documentElement.appendChild(form);
		form.submit();
	}
}