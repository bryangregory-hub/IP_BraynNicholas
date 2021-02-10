fetch("trivans.json")
 .then(response => response.json())
 .then(data => {
     console.log(data)
     document.querySelector("#question1").innerHTML = `<p style="font-size: 2rem;">${data[0].question}</p>`
     document.querySelector("#question2").innerHTML = `<p style="font-size: 2rem;">${data[1].question}</p>`
     document.querySelector("#question3").innerHTML = `<p style="font-size: 2rem;">${data[2].question}</p>`
     document.querySelector("#question4").innerHTML = `<p style="font-size: 2rem;">${data[3].question}</p>`
     document.querySelector("#question5").innerHTML = `<p style="font-size: 2rem;">${data[4].question}</p>`
 })