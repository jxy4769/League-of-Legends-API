function championName(id){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var api_key = 'RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb'
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'+id+'?locale=en_US&champData=image&api_key='+ api_key;
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
	var myH1 = document.createElement('h1');
	var myImg = document.createElement('img');
	myH1.textContent = "Champion Name: " + jsonObj['name'];
	myImg.src = imgLoadingURL + jsonObj['name']+ '_0.jpg';
	header.appendChild(myH1);
	header.appendChild(myImg);
  }
}