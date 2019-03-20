function getRandomColour() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

// Notice we now take THREE parameters
function addSquare(myID,myRow,mySize)
{
idToUse="square"+myID;
console.log(idToUse);

// This time we use the myRow parameter to identify which row to use
// Note that now the colour is generated at random
document.getElementById(myRow).innerHTML+=
      "<div id='" + idToUse + "' style='background:" + getRandomColour() + "; width:"+mySize+"px; height:"+mySize+"px; background='red'></div>"

}
