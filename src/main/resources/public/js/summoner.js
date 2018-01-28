function summoner(name){

  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiKEY =  'RGAPI-099247db-98fb-4345-a4aa-cd091eaa75bb';
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
      alert("Invalid")
      window.location='index.html';
    }
  }

  function populateHeader(jsonObj) {

	id += jsonObj['id'];
	var myH1 = document.createElement('h1');
	var myH2 = document.createElement('h2');
	myH1.textContent = "Summoner Name: " + jsonObj['name'];
	myH2.textContent = "Summoner Id: " + jsonObj['id']
	header.appendChild(myH1);
	header.appendChild(myH2);
	masteryList(id);
  }
}