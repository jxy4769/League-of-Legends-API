function masteryList(id){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/'+id+'?api_key=RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb';
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
	var myH4 = document.createElement('h4');
	myH3.textContent = jsonObj[0]['championPoints'];
	myH4.textContent = jsonObj[0]['championId'];
	header.appendChild(myH3);
	header.appendChild(myH4);
	id = jsonObj['id'];
  }
}