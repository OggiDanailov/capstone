var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var root = document.getElementById('root')
var words = ['tanzania', 'whatever', 'something', 'tokyo', 'siouxie', 'citadella']
var wordPlace = document.getElementsByClassName('word')[0]

var rand = words[Math.floor(Math.random() * words.length)];
wordPlace.innerHTML = rand.split('').fill('__')

for(let i=0;i<array.length;i++){
	var boxes = document.createElement("DIV")
	boxes.style.width = '20px'
	boxes.style.height = '20px'
	boxes.style.margin = '10px'
	boxes.style.backgroundColor = 'orange'
	boxes.style.border = '3px solid teal'
	boxes.style.float = 'left'
	boxes.id = 'b' + i;
	boxes.className = 'boxes'
	boxes.innerHTML = array[i]
	root.appendChild(boxes)
	var boxes2 = document.getElementsByClassName('boxes');

	boxes2[i].addEventListener('click', returnLetter)

	var returnLetter = function(i){
		returnValue = i.target.innerHTML	
		console.log(returnValue)
		return returnValue
	}


}















