let corpin = document.querySelector('body');

let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

let img = document.createElement('img')
img.setAttribute('src', 'gabigol2.jpeg')

let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
	console.log(corpin, img);
	corpin.appendChild(before);
	corpin.appendChild(img);
	corpin.appendChild(next);
}

init();