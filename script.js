$(document).ready()

var booksList = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago.Believing a recurring dream to be prophetic, he decides to travel to a Romani fortune-teller in a nearby town to discover its meaning. The woman interprets the dream as a prophecy telling the boy that there is a treasure in the pyramids in Egypt.",
    url: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg",
    pages: 163,
    minutes: 60,
    isbn: 9780061122415
  }
];


var newSearch = {
  searches: [ ]
};

//////////////////////////  INPUTS     ///////////////////////////////////

$("#title").val(); // BOOK TITLE
$("#author").val(); // BOOK AUTHOR
$("#description").val(); // BOOK DESCTRIPTION
$("#url").val(); // IMAGE URL
$("#pages").val(); // BOOK # PAGES
$("#mins").val(); // MINUTES READ
$("#isbn").val(); // INTERNATIONAL STANDARD BOOK NUMBER

/////////////////////////    BUTTONS    ///////////////////////////////////////////////

$("#searchBtn").on("click", function(){

})

$("#addBtn").on("click", function(){
  var addBook = {
      title:$("#title").val(),
      author:$("#author").val(),
      description:$("#description").val(),
      url:$("#url").val(),
      pages:$("#pages").val(),
      minutes:$("#mins").val(),
      isbn:$("#isbn").val();
  };
  booksList.push(addBook);

});

$("#Pointless").on("click", function(){
  alert("Pointless")
});
