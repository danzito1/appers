window.onload = function() {
    var top = document.getElementById('top');
    var center = document.querySelector('.top');
    var centerImg = center.querySelector('#center');
    var divGo = document.getElementByClassName('bt');
    var lang = navigator.language;
    lang = lang.split('-')[0];
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        top.style.width = "100vh";
        top.style.height = "90vh";
        centerImg.setAttribute("src", "IMG_20230512_134202.png");
        centerImg.style.marginTop = "40vh";
        divGo.style.width = "30vh";
    }
    
    if (lang === "en") {
        location.href = "en.html";
    }
}
