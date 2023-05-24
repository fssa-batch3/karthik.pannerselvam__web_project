let user_details = JSON.parse(localStorage.getItem("userdetails"));
// console.log(user_details);
let get_email = JSON.parse(localStorage.getItem("user_data")).mail;

let get_obj = user_details.find((F) => F.e_mail == get_email);
// console.log(get_obj);

let viewImage = document.createElement("img");
viewImage.setAttribute("class", "img1-cover");
viewImage.setAttribute("width", "40");
viewImage.setAttribute("height", "40");
viewImage.setAttribute("alt", "img1-cover");
viewImage.setAttribute("id", "view_image");
viewImage.setAttribute("src", "");

document.querySelector(".img1-cover").remove();
document.querySelector(".profil-btn a").append(viewImage);

// console.log(viewImage);

let art = JSON.parse(localStorage.getItem("art"));
for (let i = 0; i < art.length; i++) {
  const element = art[i];
  // console.log(art[i]);

  let getting_mail = art.find((e) => e.e_mail == art.e_mail);
  console.log(getting_mail);
  list = document.createElement("li");

  // url params

  let redirect = document.createElement("a");
  redirect.setAttribute("href", "pro-details.html?name=" + element["uuid"]);
  list.append(redirect);

  //<div class="discover-card card">//

  discover_card_card = document.createElement("div");
  discover_card_card.setAttribute("class", "discover-card card");
  // discover_card_card.style.width = "270px";
  // discover_card_card.style.height = "415px";
  redirect.append(discover_card_card);

  // <div class="card-banner img-holder">
  card_banner_img_holder = document.createElement("div");
  card_banner_img_holder.setAttribute("class", "card-banner img-holder");
  card_banner_img_holder.setAttribute("style", "--width: 500; --height: 500");
  discover_card_card.append(card_banner_img_holder);

  // <img class = "img-cover">//

  img_cover = document.createElement("img");
  img_cover.setAttribute("src", element["image"]);
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
  console.log(getting_mail);
  username = document.createElement("a");
  username.setAttribute("class", "link:hover");
  username.innerText = art[i].username;
  card_profile.append(username);

  // <h3 class="title-sm card-title">
  h3_title_sm = document.createElement("h3");
  h3_title_sm.setAttribute("class", "title-sm card-title");
  discover_card_card.append(h3_title_sm);

  // <a href="#" class="link:hover">Genuine Undead #3902</a>

  a_nftname = document.createElement("a");
  a_nftname.setAttribute("class", "link:hover");
  a_nftname.innerText = element["nftname"];
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
  span2.innerText = element["p_price"] + " ETH";
  card_price.append(span2);

  // empty div

  div2 = document.createElement("div");
  card_meta.append(div2);

  // Highest bid
  highest_bid = document.createElement("p");
  highest_bid.innerText = "Highest Price";
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

  let card = document.getElementById("Grid");
  card.append(list);
  // Art_collection(".grid-list",element);
}
console.log(list);
console.log(art);
