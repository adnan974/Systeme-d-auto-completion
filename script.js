var searchInputid = document.getElementById("search_bar");
var resultDivid = document.getElementById("result1");
var xhr = new XMLHttpRequest();

// Ajouter un élement HTML dans le dom
/*
var newDiv = document.createElement("div");
var newDivText = document.createTextNode('test');
newDiv.appendChild(newDivText);
newDiv.id = "result2";
resultDivid.appendChild(newDiv);
*/

searchInputid.addEventListener('keyup',function(e){
    
    xhr.open("GET","serveur.php?"+"inputSearch="+searchInputid.value);
    xhr.send(null);

})

xhr.addEventListener('readystatechange',function(){
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('recu');
        console.log(xhr.responseText);
    }
})