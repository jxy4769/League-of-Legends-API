function championName(id){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var api_key = 'RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb'
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'+id+'?locale=en_US&champData=image&api_key='+ api_key;
  var requestURL = proxy + apiRequestURL;
  var request = new XMLHttpRequest();
  var id;
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
	var myH3 = document.createElement('h3');
	var myImg = document.createElement('img');
	myH3.textContent = "Champion Name:" + jsonObj['name'];
	myImg.src = http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
	header.appendChild(myH3);
  }
}