var url_string =“https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby”;
var url = new URL(url_string);

var parameter="utm_campaign";
function getUrlParameterValue(url, parameter) 
{
    var x=url_string.split(parameter)[1];
    x=x.split('=')[1];
    x=x.split('&')[0];
    
    return x;
}

var ans=getUrlParameterValue(url,parameter);

console.log(ans);
