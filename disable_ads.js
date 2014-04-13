(function (fn) {
  if (document.readyState == "loading") {
    addEventListener("DOMContentLoaded", fn, false);
  } else {
    fn();
  }
})(function () {
  console.log('Disabling Ads');
  var player = document.getElementById("movie_player"),
    clean_player = player.cloneNode(true),
    flash_vars = player.getAttribute("flashvars");
  flash_vars = flash_vars.replace(/&ad[^&]+/g, "");
  clean_player.setAttribute("flashvars", flash_vars);
  player.parentNode.replaceChild(clean_player, player);
});
