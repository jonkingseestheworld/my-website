function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


var htmlElem = document.getElementsByTagName("html")[0];
var mode = getCookie("currentMode");

if (mode == "dark-mode") {
	mode = htmlElem.className = "dark-mode";
} else {
	mode = htmlElem.className = "light-mode";
}
setCookie("currentMode",mode,365);


function toggleMode() {

	var toggleVal;
	
	if (htmlElem.className == "light-mode") {
		toggleVal = htmlElem.className = "dark-mode";
	} else {
		toggleVal = htmlElem.className = "light-mode";
	}

	setCookie("currentMode",toggleVal,365);

}



var toggleElem = document.getElementById("toggle-mode");
toggleElem.onclick = function(){toggleMode()};