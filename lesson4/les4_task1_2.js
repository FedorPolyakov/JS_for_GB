/* 
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
его в свойство text объекта.
*/
'use strict';
// a
//es5
/*
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const message = new Post('Fedor', '', "21082020");
message.edit("Lorem ipsum!");
console.log(message);
*/
//es6

class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const message = new Post('Fedor', '', "21082020");
message.edit("Lorem ipsum!");
console.log(message);

//-----------------------------------------------------
//Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока)
/*
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.
*/
//es5
/*
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attachedMessage = new AttachedPost('Alex', "Hello World!", '22082020');
console.log(attachedMessage);
attachedMessage.makeTextHighlighted();
console.log(attachedMessage);
*/

//es6
class AttachedPost extends Post{
    constructor(author, text, date, highlighted){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const attachedMessage = new AttachedPost('Alex', "Hello World!", '22082020');
console.log(attachedMessage);
attachedMessage.makeTextHighlighted();
console.log(attachedMessage);