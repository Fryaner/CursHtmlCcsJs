var btnOne = document.getElementById('btn');
var btnTwo = document.getElementById('btnTwo');
var closePopOne = document.getElementById('closeOne');
var closePopTwo = document.getElementById('closeTwo');
var popOne = document.getElementById('popup1');
var fon = document.getElementById('body');
var popTwo = document.getElementById('popup2');
closePopOne.addEventListener('click', closePopUpOne, false);
closePopTwo.addEventListener('click', closePopUpTwo, false);
btnOne.addEventListener('click', popUpOne, false);
btnTwo.addEventListener('click', popUpTwo, false);
function popUpOne(e){	
	e.preventDefault();
	popOne.setAttribute('class', 'cool'); 
	fon.setAttribute('class', 'wF');
}
function popUpTwo(e){	
	e.preventDefault();
	popTwo.setAttribute('class', 'cool'); 
	fon.setAttribute('class', 'wF');
}
function closePopUpOne(e) {
	e.preventDefault();
	popOne.setAttribute('class', 'pop'); 
	fon.setAttribute('class', '');
}
function closePopUpTwo(e) {
	e.preventDefault();
	popTwo.setAttribute('class', 'pop'); 
	fon.setAttribute('class', '');
}
