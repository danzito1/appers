window.onload = function() {
    var top = document.getElementById('top');
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        top.style.width = "75vh";
        top.style.height = "60vh";
    }
}
