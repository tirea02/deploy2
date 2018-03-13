

var username;
var url  = "/api/discord/username"
var playlistByUidUrl = "http://api.melodybot.me/playlists?type=2&creator_id=";
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var uid;



/* 굉장히 좋지 않은 방식 페이지가 로딩되는 순간 항상 체크한다. promise를 제대로 쓰지 못해서 나타나는 참사.. ejs파일을 손보고 싶지 않아서 일어나는 비극이다*/

xhr.open('GET', url);
xhr.setRequestHeader('Content-type', "application/json");
xhr.onreadystatechange = function() {
    login_check =0;
    if (this.readyState == 4 && this.status == 200) {
        var userData = JSON.parse(this.responseText);

        console.log(userData.username);
        uid = userData.id;
        playlistByUidUrl += uid;

        if(userData.username == undefined){
            document.getElementById("login").innerHTML = "login";
            document.getElementById("login").href = "/api/discord/login";
            document.getElementById("playlist").innerHTML = "";
        }else {
            document.getElementById("login").innerHTML = "logout";
            document.getElementById("login").href = "/api/discord/logout";
            console.log(userData.username);
            document.getElementById("playlist").innerHTML = userData.username;
        }

    }
}
xhr.send(null);
//
// if(login_check==1){
//     document.getElementById("login").innerHTML = "login";
//     document.getElementsById("login").href = "/api/discord/login";
//     document.getElementById("playlist").innerHTML = "";
// }
//
// console.log(login_check);




// 데이터 수신이 완료되면 표시
// xhr.addEventListener('load', function(){
//     console.log(xhr.responseText);
// });