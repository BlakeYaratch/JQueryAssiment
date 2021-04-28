$(document).ready(() => {
  $("#cart").on("click", () => {
    $("#cartMenu").toggle();
  });
  $("#account").on("click", () => {
    $("#accountMenu").toggle();
  });
  $("#help").on("click", () => {
    $("#helpMenu").toggle();
  });
});
