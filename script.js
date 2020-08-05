
var searchInputid = document.getElementById("search_bar");
var resultDivid = document.getElementById("result1");
var xhr = new XMLHttpRequest();



function sendAJaxRequest() {

    xhr.open("GET", "serveur.php?" + "inputSearch=" + searchInputid.value);
    xhr.send(null);

}

function createDiv(className, textNodeValue) {
    var uneDiv = document.createElement("div");
    let textNodeForDiv = document.createTextNode(textNodeValue);
    uneDiv.className = className;
    uneDiv.appendChild(textNodeForDiv);
    return uneDiv;

}

function removeDivByClassName(classNameValue) {
    let classNameArray = document.querySelectorAll("." + classNameValue);
    classNameArray.forEach(element => {
        element.parentElement.removeChild(element);
    });
}

searchInputid.addEventListener('keyup', function (e) {
    if (xhr.readyState < 5) {
        xhr.abort();
    }

    removeDivByClassName("resultDiv");

    sendAJaxRequest();
})


xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        
        let responseArray = xhr.responseText.split('|');

        responseArray.forEach(element => {
            let newDiv = createDiv("resultDiv", element);
            resultDivid.appendChild(newDiv);
        });
    }
})