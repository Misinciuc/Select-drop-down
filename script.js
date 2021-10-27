/* Languages script */

$(".language__list").on("click", ".language__item-init", function () {
  $(this)
    .closest(".language__list")
    .children("li:not(.language__item-init)")
    .toggle();
  $(".language__list")
    .children("li:not(.language__item-init)")
    .css("margin-top", "14px");
  $(".language").toggleClass("arrow_anim");
});

var allOptions = $(".language__list").children("li:not(.language__item-init)");
$(".language__list").on("click", "li:not(.language__item-init)", function () {
  $(".language").toggleClass("arrow_anim");
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".language__list").children(".language__item-init").html($(this).html());
  allOptions.toggle();
});

/* Currency script */

$(".money__list").on("click", ".money__item-init", function () {
  $(this)
    .closest(".money__list")
    .children("li:not(.money__item-init)")
    .toggle();
  $(".money__list")
    .children("li:not(.money__item-init)")
    .css("margin-top", "10px");
  $(".money").toggleClass("arrow_anim");
});

var otherOption = $(".money__list").children("li:not(.money__item-init)");
$(".money__list").on("click", "li:not(.money__item-init)", function () {
  $(".money").toggleClass("arrow_anim");
  otherOption.removeClass("selected");
  $(this).addClass("selected");
  $(".money__list")
    .children(".money__item-init")
    .css("background-image", "none")
    .html($(this).html());
  otherOption.toggle();
});
