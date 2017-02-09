/**
 * Created by Administrator on 2016/10/30 0030.
 */
var ul = document.getElementById("itemList");
//console.log(ul);
var imgs = ul.getElementsByTagName("img");
//console.log(imgs);
var bigImg = document.getElementById("bigImg");
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onmouseover = function () {
        bigImg.src = "img/product" + this.alt + ".jpg";
    }
}