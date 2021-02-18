//fetches the questions from the json file and displays them
fetch("wiki.json")
 .then(response => response.json())
 .then(data => {
     console.log(data)
     document.querySelector("#wikislytherin").innerHTML = `<p style="font-size: 2rem;">${data[0].slytherin}</p>`
     document.querySelector("#wikiravenclaw").innerHTML = `<p style="font-size: 2rem;">${data[1].ravenclaw}</p>`
     document.querySelector("#wikihufflepuff").innerHTML = `<p style="font-size: 2rem;">${data[2].hufflepuff}</p>`
     document.querySelector("#wikigryfinddor").innerHTML = `<p style="font-size: 2rem;">${data[3].gryffindor}</p>`
     document.querySelector("#wikiwand").innerHTML = `<p style="font-size: 2rem;">${data[4].wand}</p>`
     document.querySelector("#wandhistory").innerHTML = `<p style="font-size: 2rem;">${data[5].whistory}</p>`
 })