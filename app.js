var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL= "https://api.funtranslations.com/translate/minion.json"; //api calling 

function getTranslation(text) {
    return serverURL + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server Try again after sometime")
}

btnTranslate.addEventListener("click", function clickEventHandler() {

    var inputText = txtInput.value; // taking input

    // calling server for procressing
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)

})