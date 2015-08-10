// console.log('test');

document.getElementById('tip').addEventListener('click', function() {
  // console.log('TIPS!!');

  var tips = document.getElementById('bill').value;
  // var tipDone = parseFloat(tips) * 0.2;

  var newArray = tips.split('');

  if (newArray[0] === "$") {
    newArray.splice(0, 1);
    var finalNum = parseFloat(newArray.join('') * 0.2);

    if (isNaN(finalNum)) {
      alert('Please enter a valid amount!');
    }
    else {
      console.log(finalNum.toFixed(2));

      document.getElementById('tipAmount').innerHTML = "";

      var textNode = document.createTextNode("You should tip $" + finalNum.toFixed(2));

      document.getElementById('tipAmount').appendChild(textNode);
    }
  }

});
