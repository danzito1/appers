window.onload = function() {
    var top = document.getElementById('top');
    var center = document.getElementById('center');
    var divGo = document.getElementByClassName('bt');
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        top.style.width = "100vh";
        top.style.height = "90vh";
        center.setAttribute("src", "IMG_20230512_134202.png");
        center.style.marginTop = "40vh";
        divGo.style.width = "30vh";
    }
}
