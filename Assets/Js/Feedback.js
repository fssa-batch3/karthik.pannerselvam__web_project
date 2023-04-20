function feedbacks() {
  let arr = [];
  let feed_username = document.getElementById("f-username").value.trim();
  let feedback_email = document
    .getElementById("f-email")
    .value.toLowercase()
    .trim();
  let feedbacks = document.getElementById("suggestion").value.trim();

  let suggestion_details = {
    feed_username,
    feedback_email,
    feedbacks,
  };
  arr.push(suggestion_details);
  console.log(suggestion_details);
  localStorage.setItem("user-feedbacks", JSON.stringify(arr));
  console.log(arr);
}
