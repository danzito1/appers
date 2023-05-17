document.addEventListener("DOMContentLoaded", function() {
    var lang = navigator.language;
    lang = lang.split('-')[0];
    
    var user = navigator.userAgent.toLowerCase();
    var isMobile = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile|mobile|tablet/i.test(user);
    
    if (!isMobile) {
        var topo = document.querySelector('#top');
        var center = document.querySelector('.topo');
        var centerImg = document.querySelector('#center');
        var divGo = document.querySelector('.bt');
        if (topo != null && center != null && centerImg != null && divGo != null) {
            topo.style.width = "100vh";
            topo.style.height = "90vh";
            centerImg.setAttribute("src", "IMG_20230512_134202.png");
            centerImg.style.marginTop = "40vh";
            divGo.style.width = "60vh";
            divGo.style.marginLeft = "40vh";
            divGo.style.marginTop = "146vh";
        } else {
            alert('Desculpe-nos, houve um erro no servidor. Reinicie o site e tente novamente.');
        }
    }
    
    if (lang === "en") {
        window.location.href = "en.html";
    } else if (lang === "es") {
        window.location.href = "es.html";
    }
    
    var go = document.getElementById('go');
    
    if (go) {
        go.addEventListener("click", function() {
            window.location.assign("https://danzito1.github.io/appers/home");
        });
    }
});
