var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    itemList.appendChild(li);
}

var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}