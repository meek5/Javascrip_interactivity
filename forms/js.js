
function check() {
    var email1 = document.getElementById("email1_Check");
    var email2 = document.getElementById("email2_Checked");

    if (email1.value != email2.value) {
        alert("Mails must mutch")
    }
}

function myfunction() {
    if (document.getElementById("check").checked) {
        document.getElementById("newName").style.display = "inline";
        document.getElementById("newName").setAttribute("required", true);
        console.log("Tout va bien");
    }
    else {
        document.getElementById("newName").removeAttribute("required");
        document.getElementById("newName").style.display = "none";
        console.log("Tout va aussi bien")
    }
}

function ajouter(){

    var elemento=document.createElement("li");
    if(document.getElementById("inpu").value!=''){
    elemento.innerHTML=document.getElementById("inpu").value
    document.getElementById("liste").appendChild(elemento)
    }
    else{
        alert("veillez saissir le nom de l'item")
    }
}