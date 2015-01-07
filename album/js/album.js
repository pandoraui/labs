
// 电子相册js

window.onload = function(){
    var color = document.getElementById("colors").getElementsByTagName("a");
    var linkcss = document.getElementsByTagName("link")[1];
    
    for(var i=0; i<color.length; i++){
        color[i].onclick = (function(i){
            return function(){
                var img = color[i].getElementsByTagName("img");
                var src = img[0].getAttribute("src");
                var a = src.lastIndexOf("/");
                var b = src.lastIndexOf(".");
                
                src = src.subString(a+1,b);
                
                var newcss = linkcss.getAttribute("href").replace(/(\w+)\_(\w+)(\.css)/,"$1_"+src+"$3_");
                
                linkcss.setAttribute("href",newcss);
            }
        })(i);
    }
    
}


//初始化XML DOM控件，并加载指定的XML文件
//参数xmlpath表示外部XML文件的路径

function loadXML(xmlpath){
    var xmlDoc = null;
    
}

