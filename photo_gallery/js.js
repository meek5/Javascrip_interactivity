

function onImageOver(element) {

    var back1 = document.getElementById("back");
    document.getElementById("htxt").innerHTML = element.alt;
    let srcimage = element.src
    console.log(srcimage);
    let tabPath = srcimage.split("///")
    console.log(tabPath[1]);
    let oriTab = tabPath[1].split("/")
    element.to
    console.log(oriTab[1]);
    let url1 = `url('../${oriTab[5]}/${oriTab[6]}')`
    console.log(url1)
    back1.style.backgroundImage = url1
    
}

function onImageMouseleave() {
    document.getElementById("htxt").innerHTML = "Background image";
    var back = document.getElementById("back");
    back.style.backgroundImage = "url('../img/back.JPG')"
}
