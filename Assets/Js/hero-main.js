let art = JSON.parse(localStorage.getItem("art"));

for (let i = 0; i < art.length; i++) {
  list = document.createElement("li");

  const element = art[i];
  let user_details = JSON.parse(localStorage.getItem("userdetails"));
  let user_data = JSON.parse(localStorage.getItem("user_data"));
  let get_email = user_data[0]["mail"];
  // console.log(get_email,user_details[1].e_mail);

  let get_obj = user_details.find((F) => F.e_mail == get_email);
  console.log(get_obj);

  let redirect = document.createElement("a");
  redirect.setAttribute("href", "pro-details.html?name=" + element["uuid"]);
  list.append(redirect);

  //<div class="discover-card card">//

  discover_card_card = document.createElement("div");
  discover_card_card.setAttribute("class", "discover-card card");
  discover_card_card.setAttribute("id", art[i]["id"]);
  list.append(discover_card_card);

  // <div class="card-banner img-holder">
  card_banner_img_holder = document.createElement("div");
  card_banner_img_holder.setAttribute("class", "card-banner img-holder");
  card_banner_img_holder.setAttribute("style", "--width: 500; --height: 500");
  discover_card_card.append(card_banner_img_holder);

  // <img class = "img-cover">//

  img_cover = document.createElement("img");
  img_cover.setAttribute("src", art[i]["image"]);
  img_cover.setAttribute("class", "img-cover");
  img_cover.setAttribute("width", "500");
  img_cover.setAttribute("height", "500");
  card_banner_img_holder.append(img_cover);

  // <button class="btn btn-primary">//

  btn_btn_primary = document.createElement("button");
  btn_btn_primary.setAttribute("class", "btn btn-primary");
  img_cover.append(btn_btn_primary);

  //  ion-icon //

  ion_icon = document.createElement("ion-icon");
  btn_btn_primary.append(ion_icon);

  // span //

  span = document.createElement("span");
  span.setAttribute("class", "span");
  span.innerText = "Buy";
  btn_btn_primary.append(span);

  // card-profile //

  card_profile = document.createElement("div");
  card_profile.setAttribute("class", "card-profile");
  discover_card_card.append(card_profile);

  // <img class="img"> //
  img = document.createElement("img");
  img.setAttribute("src", "");
  img.setAttribute("class", "img");
  card_profile.append(img);

  //<a href="#" class="link:hover">@StreetBoy</a>//

  username = document.createElement("a");
  username.setAttribute("class", "link:hover");
  username.innerText = art[i]["username"];
  card_profile.append(username);

  // <h3 class="title-sm card-title">

  h3_title_sm = document.createElement("h3");
  h3_title_sm.setAttribute("class", "title-sm card-title");
  discover_card_card.append(h3_title_sm);

  // creating div to update & delete
  update_delete = document.createElement("div");
  update_delete.setAttribute("class", "upd-dele");
  discover_card_card.append(update_delete);

  //     <span class="material-symbols-outlined">

  //function

  // <a href="#" class="link:hover">Genuine Undead #3902</a>

  a_nftname = document.createElement("a");
  a_nftname.setAttribute("class", "link:hover");
  a_nftname.innerText = art[i]["nftname"];
  h3_title_sm.append(a_nftname);

  // <div class="card-meta">

  card_meta = document.createElement("div");
  card_meta.setAttribute("class", "card-meta");
  discover_card_card.append(card_meta);

  //<div>

  div = document.createElement("div");
  card_meta.append(div);

  // <price>
  price = document.createElement("p");
  price.innerText = "price";
  div.append(price);

  // <div class="card-price">
  card_price = document.createElement("div");
  card_price.setAttribute("class", "card-price");
  div.append(card_price);

  // <img src="../Assets/Images/ethereum.svg">
  etherum1 = document.createElement("img");
  etherum1.setAttribute("width", "16");
  etherum1.setAttribute("height", "24");
  etherum1.setAttribute("src", "../Assets/Images/ethereum.svg");
  card_price.append(etherum1);
  // <span class="span">3.5 ETH</span>

  span2 = document.createElement("span");
  span2.setAttribute("class", "span");
  span2.innerText = art[i]["p_price"];
  card_price.append(span2);
  console.log(span2);

  // empty div

  div2 = document.createElement("div");
  card_meta.append(div2);

  // Highest bid
  highest_bid = document.createElement("p");
  highest_bid.innerText = "Highest Bid";
  div2.append(highest_bid);

  // <div class="card-price">

  card_price1 = document.createElement("div");
  card_price1.setAttribute("class", "card-price");
  div2.append(card_price1);

  // etherum 2
  // <img src="../Assets/Images/ethereum.svg" width="16" height="24" loading="lazy" alt="ethereum icon"
  etherum2 = document.createElement("img");
  etherum2.setAttribute("width", "16");
  etherum2.setAttribute("height", "24");
  etherum2.setAttribute("src", "../Assets/Images/ethereum.svg");
  card_price1.append(etherum2);

  //<span class="span">3.55 ETH</span>

  rate = document.createElement("span");
  rate.setAttribute("class", "span");
  rate.innerText = "3.55 ETH";
  card_price1.append(rate);

  let card = document.getElementById("grid");
  card.append(list);
}

// Sliders & drop down functions

("use strict");

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

/**
 * HEADER & BACK TOP BTN
 * header and back top btn visible when window scroll down to 200px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slider-item")
  );
  const totalSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSliderItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSliderItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSliderItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.setAttribute("disabled", "");
    sliderPrevBtn.setAttribute("disabled", "");
  }

  /**
   * AUTO SLIDE
   */

  let autoSlideInterval;

  const startAutoSlide = () =>
    (autoSlideInterval = setInterval(slideNext, 3000));
  startAutoSlide();
  const stopAutoSlide = () => clearInterval(autoSlideInterval);

  currentSlider.addEventListener("mouseover", stopAutoSlide);

  currentSlider.addEventListener("mouseout", startAutoSlide);

  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", moveSliderItem);
};

for (let i = 0, len = sliders.length; i < len; i++) {
  sliderInit(sliders[i]);
}

/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion;

const accordionInit = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  accordionBtn.addEventListener("click", function () {
    if (currentAccordion.classList.contains("active")) {
      currentAccordion.classList.toggle("active");
    } else {
      if (lastActiveAccordion) lastActiveAccordion.classList.remove("active");
      currentAccordion.classList.add("active");
    }

    lastActiveAccordion = currentAccordion;
  });
};

for (let i = 0, len = accordions.length; i < len; i++) {
  accordionInit(accordions[i]);
}
