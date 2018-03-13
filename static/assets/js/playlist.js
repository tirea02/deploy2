
var username;
var url  = "/api/discord/playlist"
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var tempurl;





xhr.open('GET', url);
xhr.setRequestHeader('Content-type', "application/json");

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var playlist = JSON.parse(this.responseText);

        console.log(playlist.result[0].list_name);

        document.getElementById("playlist_name").innerHTML = playlist.result[0].list_name;
        console.log(playlist.result[0].items.length);
        document.getElementById("playlist_thumbnail_img").src = playlist.result[0].items[0].item_thumbnail_url;;
        document.getElementById("play_title").innerHTML = playlist.result[0].items[0].item_title;

    }
}
xhr.send(null);
