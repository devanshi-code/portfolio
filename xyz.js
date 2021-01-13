function fun(){
    var x = document.getElementById("rightnav");
    if(x.className === "navbar"){
        x.className += " responsive";
    }
    else{
        x.className = "navbar";
    }
}