let clothes = [
    {
      "id": 1,
      "category": "jeans",
      "name": "Ripped jeans",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
      "size": "XL",
      "color": "blue",
      "price": 20.99
    },
    {
      "id": 2,
      "category": "jeans",
      "name": "Boyfriend jeans",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
      "size": "S",
      "color": "blue",
      "price": 24.99
    },
    {
      "id": 3,
      "category": "shirts",
      "name": "Ripped sweatshirt",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
      "size": "XL",
      "color": "white",
      "price": 29.99
    },
    {
      "id": 4,
      "category": "jackets",
      "name": "Denim Jacket",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      "size": "M",
      "color": "grey",
      "price": 40.99
    },
    {
      "id": 5,
      "category": "shirts",
      "name": "Longsleeve",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
      "size": "L",
      "color": "black",
      "price": 120.99
    },
    {
      "id": 6,
      "category": "jeans",
      "name": "Ripped jeans",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
      "size": "XL",
      "color": "blue",
      "price": 20.99
    },
    {
      "id": 7,
      "category": "jeans",
      "name": "Boyfriend jeans",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
      "size": "S",
      "color": "blue",
      "price": 24.99
    },
    {
      "id": 8,
      "category": "shirts",
      "name": "Ripped sweatshirt",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
      "size": "XL",
      "color": "white",
      "price": 29.99
    },
    {
      "id": 9,
      "category": "jackets",
      "name": "Denim Jacket",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      "size": "M",
      "color": "grey",
      "price": 40.99
    },
    {
      "id": 10,
      "category": "shirts",
      "name": "Longsleeve",
      "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
      "size": "L",
      "color": "black",
      "price": 120.99
    },

  

  ];
  function jeantArt() {
    var artc = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    artc.setAttribute("class", "artc");
    div1.setAttribute("class", "artc-img");
    div2.setAttribute("class", "artc-txt");
    
    artc.appendChild(div1);
    artc.appendChild(div2);
    var htmlArtc = document.getElementById("prod-div");
    htmlArtc.appendChild(artc)
    

  }
  function artcTxt(x) {
    var name = document.createElement("div");
    var colSiz = document.createElement("div");
    var price = document.createElement("div");
    var btn = document.createElement("div");
    name.setAttribute("class", "name");
    colSiz.setAttribute("class", "col-siz");
    price.setAttribute("class", "price");
    btn.setAttribute("class", "artc-btn");
    var htmlTxt = document.getElementsByClassName("artc-txt")[x];
    htmlTxt.appendChild(name);
    htmlTxt.appendChild(colSiz);
    htmlTxt.appendChild(price);
    htmlTxt.appendChild(btn);

    var editbtn = document.createElement('button');
    var deletebtn = document.createElement('button');
    var editbtnnode = document.createTextNode('edit');
    var deletebtnnode = document.createTextNode('delete');
    editbtn.appendChild(editbtnnode);
    deletebtn.appendChild(deletebtnnode);
    deletebtn.className = 'delete';
    editbtn.className = 'edit';
    htmlTxt.appendChild(editbtn);
    htmlTxt.appendChild(deletebtn);
  }
  function artcLast(v) {
    var siz = document.createElement("h3");
    var color = document.createElement("div");
    var btn = document.createElement("button");
    color.setAttribute("class", "color");
    siz.setAttribute("class", "siz");
    var btnNode = document.createTextNode("More details");
    var htmlColSiz = document.getElementsByClassName("col-siz")[v];
    var htmlBtn = document.getElementsByClassName("artc-btn")[v];
    htmlColSiz.appendChild(siz);
    btn.appendChild(btnNode);
    htmlColSiz.appendChild(color);
    htmlBtn.appendChild(btn);
  }
  function range(k,a,b,c,d,e) {
    var siz = document.getElementsByClassName("siz")[k];
    var color = document.getElementsByClassName("color")[k];
    var price = document.getElementsByClassName("price")[k];
    var artcImg = document.getElementsByClassName("artc-img")[k];
    var name1 = document.getElementsByClassName("name")[k];
    var nameH = document.createElement("h2");
    var artcImgI = document.createElement("img");
    var nameNode = document.createTextNode(a);
    var colorNode = document.createTextNode(b);
    color.appendChild(colorNode);
    nameH.appendChild(nameNode);
    name1.appendChild(nameH);
    var sizNode = document.createTextNode(c);
    siz.appendChild(sizNode);
    var priceNode = document.createTextNode(d);
    price.appendChild(priceNode);
    artcImgI.setAttribute("class", "img-part2");
    artcImgI.setAttribute("src", e);
    artcImg.appendChild(artcImgI);
  }
 
  for (k = 0; k<(clothes.length); k++) {
    jeantArt();
    artcTxt(k);
    artcLast(k);
    range(k);
    deleteItemBtn(k);
  }

  function deleteItemBtn(x) {
    var deleteItem = document.getElementsByClassName("delete")[x];
    deleteItem.addEventListener('click', function (event) {
        var item = event.target.parentNode.parentNode;
        item.remove();
    });
}

function addItem() {
  var itemName = document.forms["myForm"]["fname"].value;
  var itemSize = document.forms["myForm"]["Size"].value;
  var itemColor = document.forms["myForm"]["color"].value;
  var itemPrice = document.forms["myForm"]["fprice"].value;
  var itemImage = document.forms["myForm"]["fimage"].value;
  var nbr = clothes.length++;

  prodArt();
  artcTxt(nbr);
  artcLast(nbr);
  range(k, itemName, itemColor, itemSize, itemPrice, itemImage);
  editMenuDisplay(nbr);
  deleteItemBtn(nbr);
}