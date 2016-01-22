function Video(id, imagine, lungime) {
    this.id = id;
    this.imagine = imagine;
    this.lungime = lungime;
}
Video.prototype.setLungime = function (nr) {
    this.lungime = nr;
}

Video.prototype.setImagine = function (id) {
    this.imagine = 'https://img.youtube.com/vi/' + id + '/0.jpg';
}

Video.prototype.setId = function (id) {
    this.id = id;
}

Video.prototype.getId = function () {
    return this.id;
}

Video.prototype.getImagine = function () {
    return this.imagine;
}

Video.prototype.getLungime = function () {
    return this.lungime;
}