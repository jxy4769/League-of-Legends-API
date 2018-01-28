function masteryList(id,apiKEY){
  
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiRequestURL = 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/'+id+'?api_key='+apiKEY;
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
    if (userInfo['status']==null){
    getBestChamp(userInfo);
	}
	else{
          alert("Invalid");
          window.location='index.html';
        }
  }


  function getBestChamp(jsonObj) {
	var myH3 = document.createElement('h1');
	var myH4 = document.createElement('h1');
	var champId = jsonObj[0]['championId'];
	myH3.textContent = jsonObj[0]['championPoints'];
	myH4.textContent = champId;
	header.appendChild(myH3);
	header.appendChild(myH4);
	championName(champId,apiKEY);
  }
}