// let
let manuBar = document.querySelector(".manuBar");
let manu = document.querySelector(".manu");
let logo = document.querySelector(".logo");
// Handell Click Menu
if (manuBar) {
  manuBar.onclick = function (e) {
    e.stopPropagation();
    manu.classList.toggle("manuBarActiv");
  };
}

document.addEventListener("click", (e) => {
  if (e.target !== manuBar) {
    if (manu.classList.contains("manuBarActiv")) {
      manu.classList.toggle("manuBarActiv");
    }
  }
});

// manu.onclick = function (e) {
//   e.stopPropagation();
// };

// Handel send Masege
let Send = document.querySelector(".Send");
let YourName = document.querySelector(".Your-Name");
let YourEmail = document.querySelector(".Your-Email");
let YourPhone = document.querySelector(".Your-Phone");
let message = document.querySelector(".message");

// let  send form
let form = document.querySelector("form");

if (Send) {
  Send.onclick = function () {
    if (message.value !== "" && YourEmail.value !== "") {
      form.addEventListener("click", (e) => {
        if (e.target == Send) {
          e.preventDefault();
          SendEmail();
          showPopup();

          // function Send Email
          function SendEmail() {
            let bodyMassege = `Name: ${YourName.value} <br> 
    Email: ${YourEmail.value} <br>
    Phone: ${YourPhone.value} <br>
    Message: ${message.value} <br>
    From Wep: "FASFOODY"`;

            Email.send({
              Host: "smtp.elasticemail.com",
              Username: "faresshessen61@gmail.com",
              Password: "DB87645B09CFA82F10DB8793B350DBDD0679",
              To: "faresshessen61@gmail.com",
              From: "faresshessen61@gmail.com",
              Subject: YourEmail.value,
              Body: bodyMassege,
            });
            YourName.value = "";
            YourEmail.value = "";
            YourPhone.value = "";
            message.value = "";
          }
        }
      });
    }
  };
}

// let btnEmail = document.getElementById("btnEmail");

let overLay = document.createElement("div");

function showPopup() {
  document.querySelector(".popup").style.display = "block";
  overLay.className = "overLay";
  document.body.appendChild(overLay);
}

let btnPopup = document.getElementById("btnPopup");
if (btnPopup) {
  document.getElementById("btnPopup").onclick = function () {
    document.querySelector(".popup").style.display = "none";
    overLay.remove();
  };
}

// handel close button
let shoppingManu = document.querySelector(".shopping-manu");
let openShopping = document.querySelector(".Shopping");
let closeShopping = document.querySelector(".closeShopping");
let body = document.querySelector("body");
let button = document.querySelector(".button");

document.addEventListener("click", (e) => {
  if (e.target == closeShopping || e.target == openShopping) {
    shoppingManu.classList.toggle("active");
  }
});

// document.addEventListener("click", (e) => {
//   if (e.target == button) {
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = `
//     <img src="image/manu/burger Chicken.png" />
//     <p>burger Chicken</p>
//     <span>
//     <i class="fa-solid fa-chevron-left chevron-left"></i>
//     1
//     <i class="fa-solid fa-chevron-right chevron-right"></i>
//     </span>
//     `;
//     shoppingBar.prepend(newDiv);
//   }
// });

// handel All DAta Prodact
let arrProdact = [
  {
    id: 1,
    img: "Burger Beef.png",
    name: "Burger Beef",
    price: 11,
  },
  {
    id: 2,
    img: "burger Chicken.png",
    name: "burger Chicken",
    price: 9,
  },
  {
    id: 3,
    img: "Burger cheese.png",
    name: "Burger cheese",
    price: 10,
  },
  {
    id: 4,
    img: "Burger egg.png",
    name: "Burger egg",
    price: 10,
  },
  {
    id: 5,
    img: "pizza Chicken.png",
    name: "pizza Chicken",
    price: 15,
  },
  {
    id: 6,
    img: "pizza Meat.png",
    name: "pizza Meat",
    price: 16,
  },
  {
    id: 7,
    img: "pizza Pepperoni.png",
    name: "pizza Pepperoni",
    price: 15,
  },
  {
    id: 8,
    img: "Pizza Cheese.png",
    name: "Pizza Cheese",
    price: 14,
  },
  {
    id: 9,
    img: "Pizza Vegetable.png",
    name: "Pizza Vegetable",
    price: 13,
  },
  {
    id: 10,
    img: "macaroni.png",
    name: "macaroni",
    price: 10,
  },
  {
    id: 11,
    img: "Pasta.png",
    name: "Pasta",
    price: 14,
  },
  {
    id: 12,
    img: "kinza Citrus 250 ML.png",
    name: "kinza Citrus",
    price: 2,
  },
  {
    id: 13,
    img: "kinza Cola 250 ML.png",
    name: "kinza Cola",
    price: 2,
  },
  {
    id: 14,
    img: "kinza Lemon 250 ML.png",
    name: "kinza Lemon",
    price: 2,
  },
  {
    id: 15,
    img: "kinza Orange 250 ML.png",
    name: "kinza Orange",
    price: 2,
  },
  {
    id: 16,
    img: "tea.png",
    name: "tea",
    price: 3,
  },
  {
    id: 17,
    img: "nescafe.png",
    name: "nescafe",
    price: 4,
  },
  {
    id: 18,
    img: "cold coffee.png",
    name: "cold coffee",
    price: 8,
  },
  {
    id: 19,
    img: "coffee.png",
    name: "coffee",
    price: 6,
  },
];

// function Add allData in html
let allData = document.getElementById("allData");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let shoppingBar = document.querySelector(".shopping-bar");
let checkOutList = [];

// check if thear is Tasks in Local Storge
// if (localStorage.getItem("tasks")) {
//   checkOutList = JSON.parse(localStorage.getItem("tasks"));
// }

function onInit() {
  arrProdact.forEach((item, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.innerHTML = `
      <img src="image/manu/${item.img}" loading="lazy"/>
  <div>
    <div class="infoeBox">
      <p>${item.name}</p>
      <span>${item.price} SAR</span>
    </div>
    <button onclick="addToCart(${key})"><i class="fa-solid fa-cart-plus cart-plus"></i> add</button>
  </div>
    `;
    allData.appendChild(newDiv);
  });
}

onInit();

// function add To Cart
function addToCart(Id) {
  if (checkOutList[Id] == null) {
    checkOutList[Id] = arrProdact[Id];
    checkOutList[Id].quantity = 1;
  } else {
    checkOutList[Id].quantity += 1;
  }
  relodCart();
  // Add Data To Local Storage from
  // addDataToLocalStorage(checkOutList);
}

// getDataFromLocalStorage();

// add Cart To Momery

// add To shopping bar
function relodCart() {
  let count = 0;
  let totaPrice = 0;

  shoppingBar.innerHTML = ``;
  checkOutList.forEach((item, key) => {
    totaPrice += parseInt(item.price * item.quantity);
    count += item.quantity;
    let newDivv = document.createElement("div");
    newDivv.innerHTML = `
      <img src="image/manu/${item.img}" />
      <p>${item.name}</p>
      <span>${item.price * item.quantity} SAR</span>
      <div>
      <i class="fa-solid fa-chevron-left chevron-left" onclick="cheangQuantity(${key},${
      item.quantity - 1
    })"></i>
      <span class="count">${item.quantity}</span>
      <i class="fa-solid fa-chevron-right chevron-right" onclick="cheangQuantity(${key},${
      item.quantity + 1
    })"></i>
      </div>
    `;
    shoppingBar.appendChild(newDivv);
  });
  total.innerHTML = totaPrice;
  quantity.innerHTML = count;
}

function cheangQuantity(key, quantity) {
  if (quantity == 0) {
    delete checkOutList[key];
  } else {
    checkOutList[key].quantity = quantity;
  }
  relodCart();
  // addDataToLocalStorage(checkOutList);
}

// // localStorage
// function addDataToLocalStorage(checkOutList) {
//   window.localStorage.setItem("tasks", JSON.stringify(checkOutList));
// }

// function getDataFromLocalStorage() {
//   let date = window.localStorage.getItem("tasks");
//   if (date) {
//     let tasks = JSON.parse(date);
//     relodCart(tasks);
//   }
// }
