(function ($) {
  $(function () {
    $("ul.c-tab-container__nav").on("click", "li:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.c-tab-container")
        .find("div.c-tab-container__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);