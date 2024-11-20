const string = "HII LEELA HOW ARE YOU"

var result =  string.split(" ")
    .map(function (word)  {
        return word.split("").reverse().join("")
})
console.log(result.join(" "))