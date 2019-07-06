function starsColor(stars) {
	var x = document.getElementById(stars);
	
    if (x.style.color === '') {
        x.style.color = 'red';
    } else {
        x.style.color = '';
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