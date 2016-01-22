function getVideoId(link) {
    var id = link.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
    return id;
}