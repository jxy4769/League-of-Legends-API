function summoner(name){

  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+name+'?api_key=RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb';
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
    populateHeader(userInfo);
  }
  function populateHeader(jsonObj) {
	id += jsonObj['id'];
	var myH1 = document.createElement('h1');
	var myH2 = document.createElement('h2');
	myH1.textContent = jsonObj['name'];
	myH2.textContent = jsonObj['id']
	header.appendChild(myH1);
	header.appendChild(myH2);
	masteryList(id);
  }
}