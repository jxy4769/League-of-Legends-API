function championName(id,apiKEY){
  //id is champID
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'+id+'?locale=en_US&champData=image&api_key='+ apiKEY;
  var imgLoadingURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  var requestURL = proxy + apiRequestURL;


  function getBestChamp() {
	var obj = champList.data[id];
	document.getElementById("mostPlayed").innerHTML += ("Most Played Champion Name: " + obj['name']);
	document.getElementById("champPortrait").src = imgLoadingURL + obj['name'] + '_0.jpg';
  }
  getBestChamp();
}