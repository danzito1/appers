
    const topo = document.getElementById('top');
    const center = document.getElementsByClassName('topo');
    const centerImg = document.getElementById('center');
    const divGo = document.getElementsByClassName('bt');
    var lang = navigator.language;
    lang = lang.split('-')[0];
    
    var user = navigator.userAgent.toLowerCase();
    var isMobile = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile|mobile|tablet/i.test(user);
    
    if (!isMobile) {
        topo.style.width = "100vh";
        topo.style.height = "90vh";
        centerImg.setAttribute("src", "IMG_20230512_134202.png");
        centerImg.style.marginTop = "40vh";
        divGo.style.width = "30vh";
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
    
