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
	getMasteryNumber(userInfo);
    getBestChamp(userInfo);
	}
	else{
          window.location='error.html';
    }
  }


  function getBestChamp(jsonObj) {
	var champPoints = jsonObj[0]['championPoints'];
	var champId = jsonObj[0]['championId'];
	calculateOneTrick(jsonObj,champPoints);
	document.getElementById("masteryScore").innerHTML += (champPoints);
	championName(champId,apiKEY);
  }
  
   function getMasteryNumber(jsonObj) {
	var masteryPoints = jsonObj[0]['championLevel'];
	sessionStorage.setItem("masteryLevel", masteryPoints);
  }
  
  function calculateOneTrick(jsonObj,champPoints){
	  var total = 0;
	  for (i = 1; i < jsonObj.length; i++){
		  total += jsonObj[i]['championPoints'];
	  }
	  if (champPoints/total > .65 ){
		  window.alert("You are a one trick")
	  }
  }
}