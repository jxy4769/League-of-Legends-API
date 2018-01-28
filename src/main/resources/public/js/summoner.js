function summoner(name){

  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiKEY =  'RGAPI-fb582f48-8f3b-444a-9e07-df7c94c0d340';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+name+'?api_key='+ apiKEY;
  var requestURL = proxy + apiRequestURL;
  var request = new XMLHttpRequest();
  var id = "";
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
    if (userInfo['status']==null){
    populateHeader(userInfo);
    }
    else{
      window.location='error.html';
    }
  }

  function populateHeader(jsonObj) {

	id += jsonObj['id'];
	var myH1 = document.createElement('h1');
	var myH2 = document.createElement('h1');
	var myH3 = document.createElement('h1');
	document.getElementById("summonerName").innerHTML += (jsonObj['name']);
	document.getElementById("summonerLevel").innerHTML += (jsonObj['summonerLevel']);
	masteryList(id,apiKEY);
	RankedRating(id,apiKEY);
  }
}