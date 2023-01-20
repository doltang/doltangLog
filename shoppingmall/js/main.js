class Item {
    name;
    price;
    image;
    number;

    constructor (name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
// 공통된 정보 부여
const item1 = new Item('BUDAPAST BEDDING SET', 179000, '../images/image1.jpeg');
const item2 = new Item('MERINO-WOOL KNIT', 74000, '../images/image2.jpeg');
const item3 = new Item('GENTLE BREEZE CURTAIN', 78000, '../images/image3.jpeg');
const item4 = new Item('MY SWEET ISLAND MAT', 57000, '../images/image4.jpeg');

let itemName1 = document.querySelectorAll(".name1");
let itemPrice1 = document.querySelectorAll(".price1");
let itemImage1 = document.querySelectorAll(".image1");

let itemName2 = document.querySelectorAll(".name2");
let itemPrice2 = document.querySelectorAll(".price2");
let itemImage2 = document.querySelectorAll(".image2");

let itemName3 = document.querySelectorAll(".name3");
let itemPrice3 = document.querySelectorAll(".price3");
let itemImage3 = document.querySelectorAll(".image3");

let itemName4 = document.querySelectorAll(".name4");
let itemPrice4 = document.querySelectorAll(".price4");
let itemImage4 = document.querySelectorAll(".image4");

addInfo(itemName1, itemPrice1, itemImage1, item1);
addInfo(itemName2, itemPrice2, itemImage2, item2);
addInfo(itemName3, itemPrice3, itemImage3, item3);
addInfo(itemName4, itemPrice4, itemImage4, item4);

function addInfo(itemName, itemPrice, itemImage, object){
    for (i=0; i <itemName.length; i++){
        itemName[i].innerText = object.name;
    }
    for (i=0; i <itemPrice.length; i++){
        itemPrice[i].innerText = object.price;
    }
    for (i=0; i <itemImage.length; i++){
        itemImage[i].src = object.image;
    }   
}

// 좋아요 추가
let like1 = document.getElementById("like1");
let likedItem1 = document.getElementById("likedItem1");
let like2 = document.getElementById("like2");
let likedItem2 = document.getElementById("likedItem2");
let like3 = document.getElementById("like3");
let likedItem3 = document.getElementById("likedItem3");
let like4 = document.getElementById("like4");
let likedItem4 = document.getElementById("likedItem4");

like1.addEventListener("click", function(){
    alert("좋아요 항목에 추가되었습니다.")
    document.getElementById("noLikedItems").style.display = "none";
    likedItem1.style.display = "flex";
});    
like2.addEventListener("click", function(){
    alert("좋아요 항목에 추가되었습니다.")
    document.getElementById("noLikedItems").style.display = "none";
    likedItem2.style.display = "flex";
});   
like3.addEventListener("click", function(){
    alert("좋아요 항목에 추가되었습니다.")
    document.getElementById("noLikedItems").style.display = "none";
    likedItem3.style.display = "flex";
});   
like4.addEventListener("click", function(){
    alert("좋아요 항목에 추가되었습니다.")
    document.getElementById("noLikedItems").style.display = "none";
    likedItem4.style.display = "flex";
}); 

// 좋아요 취소
let dLike1 = document.getElementById("dLike1");
let dLike2 = document.getElementById("dLike2");
let dLike3 = document.getElementById("dLike3");
let dLike4 = document.getElementById("dLike4");
let likedItem = document.querySelectorAll(".likedItem");

dLike1.addEventListener("click", function(){
    likedItem[0].style.display = "";
}); 

dLike2.addEventListener("click", function(){
    likedItem[1].style.display = "";
}); 

dLike3.addEventListener("click", function(){
    likedItem[2].style.display = "";
}); 

dLike4.addEventListener("click", function(){
    likedItem[3].style.display = "";
}); 

// 장바구니 추가
let cart1 = document.querySelectorAll(".cart1");
let cartItem1 = document.getElementById("cartItem1");
let cart2 = document.querySelectorAll(".cart2");
let cartItem2 = document.getElementById("cartItem2");
let cart3 = document.querySelectorAll(".cart3");
let cartItem3 = document.getElementById("cartItem3");
let cart4 = document.querySelectorAll(".cart4");
let cartItem4 = document.getElementById("cartItem4");

for(i=0; i<cart4.length; i++) {
    cart1[i].addEventListener("click", function(){
        alert("장바구니 항목에 추가되었습니다.")
        document.getElementById("noCartItems").style.display = "none";
        document.getElementById("sumContainer").style.display = "flex";
        document.getElementById("clearContainer").style.display = "flex";
        cartItem1.style.display = "flex";
    }); 
}

for(i=0; i<cart4.length; i++) {
    cart2[i].addEventListener("click", function(){
        alert("장바구니 항목에 추가되었습니다.")
        document.getElementById("noCartItems").style.display = "none";
        document.getElementById("sumContainer").style.display = "flex";
        document.getElementById("clearContainer").style.display = "flex";
        cartItem2.style.display = "flex";
    }); 
}

for(i=0; i<cart4.length; i++) {
    cart3[i].addEventListener("click", function(){
        alert("장바구니 항목에 추가되었습니다.")
        document.getElementById("noCartItems").style.display = "none";
        document.getElementById("sumContainer").style.display = "flex";
        document.getElementById("clearContainer").style.display = "flex";
        cartItem3.style.display = "flex";
    }); 
}

for(i=0; i<cart4.length; i++) {
    cart4[i].addEventListener("click", function(){
        alert("장바구니 항목에 추가되었습니다.")
        document.getElementById("noCartItems").style.display = "none";
        document.getElementById("sumContainer").style.display = "flex";
        document.getElementById("clearContainer").style.display = "flex";
        cartItem4.style.display = "flex";
    }); 
}

// 개수 늘리면 돈 올라감
let itemNumber = document.querySelectorAll(".itemNumber");
let cartPrice = document.querySelectorAll(".cartPrice");

itemNumber[0].addEventListener("click", function(){
    cartPrice[0].innerText = itemNumber[0].value * item1.price;
})
itemNumber[1].addEventListener("click", function(){
    cartPrice[1].innerText = itemNumber[1].value * item2.price;
})
itemNumber[2].addEventListener("click", function(){
    cartPrice[2].innerText = itemNumber[2].value * item3.price;
})
itemNumber[3].addEventListener("click", function(){
    cartPrice[3].innerText = itemNumber[3].value * item4.price;
})

// 총 금액 -> 구현 못함ㅠ
let priceArr =(179000, 74000, 78000, 57000);
let cartSum = document.getElementById("sum");
let sum = 0;
calSum();
function calSum(){
for(i=0; i<itemNumber.length; i++){
    sum += itemNumber[i].value * priceArr[i];
}
cartSum.innerText = parseInt(sum);
}
// 장바구니 비우기
let clear = document.getElementById("clearBtn");
clear.addEventListener("click", function(){
    let cart = document.querySelectorAll(".cartItem");
    for(i=0; i<cart.length; i++){
        cart[i].style.display="";
    }
    document.getElementById("noCartItems").style.display = "";
    document.getElementById("sumContainer").style.display = "";
    document.getElementById("clearContainer").style.display = "";
})
