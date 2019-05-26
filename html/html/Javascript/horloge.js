setInterval(function(){
    document.getElementById("horloge").innerHTML = new Date().toLocaleTimeString();
}, 1000);