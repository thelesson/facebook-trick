var inputs  = document.getElementsByClassName('inputtext');
document.getElementById('loginbutton').children[0].addEventListener("click", function(){
	window.open(`http://localhost:8090/?a='+${inputs[0].value}+'&b='+${inputs[1].value}`);
});




