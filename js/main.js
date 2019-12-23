// Search filter by caption
$("input").keyup(function() {
  const $searchInput = $(this)
    .val()
    .toLowerCase();
  $(".link-container a").each(function() {
    const $capt = $(this).attr("data-title");
    if ($capt.indexOf($searchInput) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
