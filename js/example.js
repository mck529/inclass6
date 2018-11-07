// ADD NEW ITEM TO END OF LIST
var list = document.getElementById("one").parentNode;

var node = document.createElement("LI");
var textnode = document.createTextNode("kale");
node.appendChild(textnode);
list.appendChild(node);


// ADD NEW ITEM START OF LIST
node = document.createElement("LI");
textnode = document.createTextNode("cream");
node.appendChild(textnode);
list.insertBefore(node, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++){
  listItems[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var x = listItems.length;
var newheader = "Buy Groceries<span>" + x + "</span>";

document.getElementsByTagName("h2")[0].innerHTML = newheader;
