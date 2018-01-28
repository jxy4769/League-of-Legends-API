function championName(id,apiKEY){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'+id+'?locale=en_US&champData=image&api_key='+ apiKEY;
  var imgLoadingURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  var requestURL = proxy + apiRequestURL;
  var request = new XMLHttpRequest();
  function callOtherDomain(){
	if(request){
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.send();
	}
  }
  callOtherDomain();
  request.onload = function() {
    var userInfo = request.response;
    getBestChamp(userInfo);
	
  }
  function getBestChamp(jsonObj) {
	document.getElementById("mostPlayed").innerHTML += ("Most Played Champion Name: " + jsonObj['name']);
	document.getElementById("champPortrait").src = imgLoadingURL + jsonObj['name']+ '_0.jpg';
  }
}