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

	fetch('../../sendFeedback.php', {
		method: 'post',
		body: formData
	}).then(res => res.text())
	.then(res => console.log(res));

	var modal = document.getElementById('myModal');
	modal.style.visibility = "hidden";
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