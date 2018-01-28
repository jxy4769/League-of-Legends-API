function RankedRating(id){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiKey = 'RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+id+'?api_key='+apiKey;
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
	if(jsonObj['rank']==undefined){
		myH1.innerHTML += "Current Rank: Unranked";
	}
	else{
	myH1.textContent = "Current Rank: " + jsonObj['rank'];
	}
	header.appendChild(myH1);
  }
}