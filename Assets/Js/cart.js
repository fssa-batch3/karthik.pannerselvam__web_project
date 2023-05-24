let cart = JSON.parse(localStorage.getItem("cart_details"));
let whole_user_list = JSON.parse(localStorage.getItem("userdetails"));

let user_data = JSON.parse(localStorage.getItem("user_data"));
console.log(user_data);
let user = whole_user_list.find((e) => e["e_mail"] == user_data[0]["mail"]);
console.log(user);

// const url = window.location.search;
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("userid");
// console.log(myParam);

//  let user_id_cart = JSON.parse(localStorage.getItem("user_data"));

for (let i = 0; i < cart.length; i++) {
  let whole_div = document.createElement("div");
  whole_div.setAttribute("class", "product");

  let product_img = document.createElement("div");
  product_img.setAttribute("class", "product-image");
  whole_div.append(product_img);

  let img_src = document.createElement("img");
  img_src.setAttribute("src", cart[i]["p_img"]);
  img_src.setAttribute("id", "src");
  product_img.append(img_src);

  let product_details = document.createElement("div");
  product_details.setAttribute("class", "product-details");
  whole_div.append(product_details);

  let product_heading = document.createElement("div");
  product_heading.setAttribute("class", "product-title");
  product_heading.setAttribute("id", "productTitle");
  product_heading.innerText = cart[i]["nft_name"];
  product_details.append(product_heading);

  let product_price = document.createElement("div");
  product_price.setAttribute("class", "product-price");
  product_price.innerText = cart[i]["p_price"];
  whole_div.append(product_price);

  let product_quantity = document.createElement("div");
  product_quantity.setAttribute("class", "product-quantity");
  whole_div.append(product_quantity);

  let input_type = document.createElement("input");
  input_type.setAttribute("type", "number");
  input_type.setAttribute("id", "num");
  input_type.setAttribute("value", "1");

  input_type.setAttribute("min", "1");
  product_quantity.append(input_type);

  let product_removal = document.createElement("div");
  whole_div.append(product_removal);

  let remove_button = document.createElement("button");
  remove_button.setAttribute("class", "btn");
  remove_button.setAttribute("id", "remove-cart");
  remove_button.innerText = "Remove";
  product_removal.append(remove_button);

  let total_amnt = document.createElement("div");
  total_amnt.setAttribute("class", "totals");
  whole_div.append(total_amnt);

  // <div class="totals-item">

  let totals_item = document.createElement("div");
  totals_item.setAttribute("class", "totals-item");
  total_amnt.append(totals_item);

  // <label>Subtotal</label>
  let label_subtot = document.createElement("label");
  label_subtot.innerText = "Subtotal";
  totals_item.append(label_subtot);

  // <div class="totals-value" id="cart-subtotal">71.97</div>
  let tot_value = document.createElement("div");
  tot_value.setAttribute("class", "totals-value");
  tot_value.setAttribute("id", "cart-subtotal");
  tot_value.innerText = "";
  totals_item.append(tot_value);

  // <div class="totals-item">

  let totals_item1 = document.createElement("div");
  totals_item1.setAttribute("class", "totals-item");
  total_amnt.append(totals_item1);

  // <label>Subtotal</label>
  let label_subtot1 = document.createElement("label");
  label_subtot1.innerText = "Tax (30%)";
  totals_item1.append(label_subtot1);

  // <div class="totals-value" id="cart-tax">3.60</div>
  let total_tax = document.createElement("div");
  total_tax.innerText = "";
  total_tax.setAttribute("class", "totals-value");
  total_tax.setAttribute("id", "cart-shipping");
  totals_item1.append(total_tax);

  // <div class="totals-item totals-item-total">

  let totals_item3 = document.createElement("div");
  totals_item3.setAttribute("class", "totals-item totals-item-total");
  total_amnt.append(totals_item3);

  // <label>Grand TOtal</label>
  let label_subtot2 = document.createElement("label");
  label_subtot2.innerText = "Grand Total";
  totals_item3.append(label_subtot2);

  // <div class="totals-value" id="cart-total">15.00</div>

  let grand_total = document.createElement("div");
  grand_total.setAttribute("class", "totals-value");
  grand_total.setAttribute("id", "cart-total");
  grand_total.innerText = "";
  totals_item3.append(grand_total);

  document.querySelector(".shopping-cart").append(whole_div);

  let input = document.getElementById("num");
  console.log(input);

  // price calculation code
  input.addEventListener("change", function (event) {
    let price = cart[i]["p_price"];
    console.log(price);

    let sub_total = price * event.target.value;
    console.log(sub_total);

    document.getElementById("cart-subtotal").innerText = sub_total;
    let calculate = calculateRemaining(sub_total);
    console.log(calculate);

    document.getElementById("cart-shipping").innerText = calculate;

    let total_amnt_to_pay = sub_total + calculate;
    document.getElementById("cart-total").innerText = total_amnt_to_pay;
  });

  // Function to calculate tax amount
  function calculateRemaining(num) {
    const percentage = 30;
    const remaining = (num * percentage) / 100;
    return remaining;
  }
}

let purchase = document.getElementById("purch");

purchase.addEventListener("click", function (e) {
  e.preventDefault();
  let event = new Date();
  let day = event.getDate();
  let month = event.getMonth() + 1;
  let year = event.getFullYear();
  let fullDate = `${day}.${month}.${year}`;
  // console.log(splitedDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  console.log(event.toLocaleDateString(undefined, options));

  let total_price = document.getElementById("cart-total");
  let tot_amnt = total_price.innerHTML;
  console.log(total_price);

  let nftname_history = document.querySelector(".product-title").innerText;
  let nft_img = document.getElementById("src").src;
  // saving purchase date
  let obj = {
    nft_img,
    nftname_history,
    tot_amnt,
    fullDate,
  };
  let arr = [];
  arr.push(obj);
  console.log(arr);
  window.localStorage.setItem("purchaseHistory", JSON.stringify(arr));
  window.alert("Thanks for the purchase");
  let remove_div = document.querySelector(".product");
  remove_div.remove();
});

let remove = document.getElementById("remove-cart");
console.log(remove);

// remove item in cart
remove.addEventListener("click", (e) => {
  e.preventDefault();
  let product_id = cart[0]["p_uuid"];
  console.log(product_id);
  let remove_item = cart.find((e) => e["p_uuid"] == product_id);
  let product_index = cart[remove_item];
  cart.splice(product_index, 1);

  localStorage.setItem("cart_details", JSON.stringify(cart));
  location.reload();
});
