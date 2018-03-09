

var username;
var url  = "/api/discord/username"
var playlistByUidUrl = "http://api.melodybot.me/playlists?type=2&creator_id=";
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var uid;





xhr.open('GET', url);
xhr.setRequestHeader('Content-type', "application/json");
xhr.send(null);
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var userData = JSON.parse(this.responseText);
         //myFunction(myArr);
        uid = userData.id;
        playlistByUidUrl += uid;
        console.log(playlistByUidUrl);


    }
};

xhr2.open('GET', playlistByUidUrl);
xhr2.setRequestHeader('Content-type', "application/json");
xhr2.send(null);
xhr2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var playlist = JSON.parse(this.responseText);

        console.log(playlist);
        //console.log(myArr.username);
    }
};





// 데이터 수신이 완료되면 표시
// xhr.addEventListener('load', function(){
//     console.log(xhr.responseText);
// });