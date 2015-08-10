// console.log('test');

document.getElementById('tip').addEventListener('click', function() {
  // console.log('TIPS!!');
  var tipDone = parseFloat(document.getElementById('bill').value) * 0.2;

  if (isNaN(tipDone)) {
    alert('Please enter a valid amount!');
  }
  else {
    console.log(tipDone.toFixed(2));

    document.getElementById('tipAmount').innerHTML = "";

    var textNode = document.createTextNode("You should tip $" + tipDone.toFixed(2));

    document.getElementById('tipAmount').appendChild(textNode);
  }


});
