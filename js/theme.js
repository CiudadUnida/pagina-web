// Custom theme code
var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos> currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos
}
if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
