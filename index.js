window.onload = function() {
    var top = document.getElementById('top');
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        top.style.width = "40vh";
        top.style.height = "40vh";
    }
}
