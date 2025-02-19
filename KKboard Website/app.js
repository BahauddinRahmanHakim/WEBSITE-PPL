const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const darkModeToggle = document.getElementById('dark-mode-toggle');

const products = [
  {
    id: 1,
    title: "Huntsman",
    price: 219.99,
    colors: [
      {
        code: "black",
        img: "./img/Razer Huntsman v3 pro tenkeyless(black).png",
      },
      {
        code: "white",
        img: "./img/Razer Huntsman v3 pro tenkeyless(white).png",
      },
    ],
  },
  {
    id: 2,
    title: "BlackWidow",
    price: 229.99,
    colors: [
      {
        code: "black",
        img: "./img/Razer black widow v4 pro (black).png",
      },
      {
        code: "white",
        img: "./img/Razer black widow v4 pro (white).png",
      },
    ],
  },
  {
    id: 3,
    title: "Deathstalker",
    price: 159.99,
    colors: [
      {
        code: "black",
        img: "./img/Razer deathstalker v2 pro tenkeyless(black).png",
      },
      {
        code: "white",
        img: "./img/Razer deathstalker v2 pro tenkeyless(white).png",
      },
    ],
  },
  {
    id: 4,
    title: "Ornata",
    price: 69.99,
    colors: [
      {
        code: "black",
        img: "./img/Razer ornata v3 tenkeyless(black).png",
      },
      {
        code: "white",
        img: "./img/Razer ornata v3 tenkeyless(kuromi).png",
      },
    ],
  },
  {
    id: 5,
    title: "Protype",
    price: 159.99,
    colors: [
      {
        code: "white",
        img: "./img/Razer pro type ultra.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.textContent = '☀️'; // Change icon to sun
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.textContent = '🌙'; // Change icon to moon
    }
});