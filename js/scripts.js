/*This file is for your custom js.  All yours*/
// front end controls
$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#raw-message").val());

    var output = cryptosquare(input);

    $('#output').text(output);

  });
});

//business rules

var cryptosquare = function(string){

  string = string.replace(/[^a-zA-Z0-9]/g, "");
  var characterArray = string.toLowerCase().split("");
  var numberColumns = Math.ceil((Math.sqrt(string.length)));
  var crypto = [];
  var outputArray = [];
  var count = 0;

  for (i=0; i < numberColumns - 1; i++) {
    crypto[i] = characterArray.splice(0, numberColumns);
  }


  for (j=0; j <= crypto.length; j ++) {
    for(k=0; k < crypto.length; k++) {
      if (crypto[k][j]) {
        outputArray[count] = (crypto[k][j]);
        count++;
      }
    }
  }
  var output = outputArray.join("");
  return output;
}
