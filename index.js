window.onload = function() {
    var top = document.getElementById('top');
    var center = document.getElementById('center');
    
    if (!/Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        top.style.width = "100vh";
        top.style.height = "90vh";
        
    }
}
