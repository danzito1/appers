
    const top = document.getElementById('top');
    const center = document.getElementByClassName('topo');
    const centerImg = center.getElementById('center');
    const divGo = document.getElementByClassName('bt');
    const go = divGo.getElementById('go');
    const lang = navigator.language;
    lang = lang.split('-')[0];
    
    if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        top.style.width = "100vh";
        top.style.height = "90vh";
        centerImg.setAttribute("src", "IMG_20230512_134202.png");
        centerImg.style.marginTop = "40vh";
        divGo.style.width = "30vh";
    }
    
    if (lang === "en") {
        window.location.href = "en.html";
    } else if (lang === "es") {
        window.location.href = "es.html";
    }
    
    go.addEventListener('click', function() {
        window.location.assign("https://danzito1.github.io/appers/home");
    });

