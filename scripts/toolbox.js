function addSection() {
	/*<section>
		<div class="layout" id="two">
			<div class="sth">Marti i Bebsi</div>
			<div class="sth">Bebsi i Martitu</div>
		</div>
</section>*/
	var section = document.createElement('section');
	var layout = document.createElement('div');
	layout.classList.add('layout');
	layout.id = "two";
	var div1 = document.createElement('div');
	div1.classList.add('sth');
	div1.innerText = "Obicham te,";
	var div2 = document.createElement('div');
	div2.classList.add('sth');
	div2.innerText = "Martii!!";
	layout.appendChild(div1, null);
	layout.appendChild(div2, null);
	section.appendChild(layout, null);
	document.body.appendChild(section, null);
}