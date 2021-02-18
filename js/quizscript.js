//fetches the questions from the json file and displays them
fetch("trivans.json")
 .then(response => response.json())
 .then(data => {
     console.log(data)
     document.querySelector("#question1").innerHTML = `<p style="font-size: 2rem;">${data[0].question}</p>`
     document.querySelector("#question2").innerHTML = `<p style="font-size: 2rem;">${data[1].question}</p>`
     document.querySelector("#question3").innerHTML = `<p style="font-size: 2rem;">${data[2].question}</p>`
     document.querySelector("#question4").innerHTML = `<p style="font-size: 2rem;">${data[3].question}</p>`
     document.querySelector("#question5").innerHTML = `<p style="font-size: 2rem;">${data[4].question}</p>`
     document.querySelector("#question6").innerHTML = `<p style="font-size: 2rem;">${data[5].question}</p>`
     document.querySelector("#question7").innerHTML = `<p style="font-size: 2rem;">${data[6].question}</p>`
     document.querySelector("#question8").innerHTML = `<p style="font-size: 2rem;">${data[7].question}</p>`
     document.querySelector("#question9").innerHTML = `<p style="font-size: 2rem;">${data[8].question}</p>`
     document.querySelector("#question10").innerHTML = `<p style="font-size: 2rem;">${data[9].question}</p>`
 })

 var correctcount = 0;
 function correctAns() {
     correctcount++ 
     console.log(correctcount)
 }

 function displayScore() {
     // Get the modal
     var modal = document.getElementById("myModal");
      // Get the button that opens the modal
     var btn = document.getElementById("submitquiz");
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
     // When the user clicks the button, open the modal 
     btn.onclick = function() {
     modal.style.display = "block";
     }
     //closes the modal when (x) is clicked
     span.onclick = function() {
     modal.style.display = "none";
  }
 }

 //
 function copylink() {
    var copyText = "I scored" + correctcount + "on the Potterhouse quiz!"
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
 }

 function shareOntwitter(){
    var url = 'https://twitter.com/intent/tweet?text=Challenge me on Potterhouse';
    TwitterWindow = window.open(url, 'TwitterWindow',width=600,height=300);
    return false;
 }
 displayScore()





 