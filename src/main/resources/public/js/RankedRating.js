function RankedRating(id, apiKEY){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+id+'?api_key='+apiKEY;
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
    getRank(userInfo);
	
  }
  function getRank(jsonObj) {
	var myH1 = document.createElement('h1');
	if(jsonObj.length == 0){
		document.getElementById("summonerRank").innerHTML += ("Current Rank: Unranked");
	}
	else{
	document.getElementById("summonerRank").innerHTML += ("Current Rank: " + jsonObj[0]['tier'] + " "+ jsonObj[0]['rank']);
	}
  }
}