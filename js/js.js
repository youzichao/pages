(function(g){
	var changecolr = function xx(){
		var r = getroamd();
		var g = getroamd();
		var b = getroamd();
		document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
		setTimeout(function(){
			xx();
		},500);
	}
	var getroamd = function(){
		return Math.floor(Math.random() * 200);
	}
	changecolr();
})(window);