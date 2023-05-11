window.onload = function() {
    var top = document.getElementById('top');
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.teste(navigator.userAgent)) {
        top.style.width = "10vh";
        top.style.height = "20vh";
    }
}
