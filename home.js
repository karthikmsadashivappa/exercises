

var myImage = document.querySelector('img')

myImage.addEventListener("click", function() {

	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/18.jpg'){
		myImage.setAttribute('src', 'images/19.jpg');
	}else{
		myImage.setAttribute('src', 'images/18.jpg');
	}

});