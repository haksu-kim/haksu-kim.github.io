(function () {
  function getCommentCount(item) {
    var valueNode = item.querySelector(".post-comments-value");
    if (!valueNode) return 0;
    return Number(valueNode.textContent || 0);
  }

  function sortPosts(mode) {
    var list = document.querySelector(".posts");
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("li[data-post-date]"));
    items.sort(function (a, b) {
      if (mode === "comments") {
        var commentsA = getCommentCount(a);
        var commentsB = getCommentCount(b);
        if (commentsA !== commentsB) return commentsB - commentsA;
      }
      var dateA = Number(a.getAttribute("data-post-date") || 0);
      var dateB = Number(b.getAttribute("data-post-date") || 0);
      return dateB - dateA;
    });

    items.forEach(function (item) {
      list.appendChild(item);
    });
  }

  function applyCategoryFilter() {
    var list = document.querySelector(".posts");
    if (!list) return;

    var params = new URLSearchParams(window.location.search);
    var category = (params.get("category") || "").trim().toLowerCase();
    var series = (params.get("series") || "").trim().toLowerCase();

    if (!category && !series) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("li[data-post-date]"));
    items.forEach(function (item) {
      var categories = (item.getAttribute("data-categories") || "").toLowerCase();
      var itemSeries = (item.getAttribute("data-series") || "").toLowerCase();

      var categoryMatch = !category || categories.split(",").indexOf(category) !== -1;
      var seriesMatch = !series || itemSeries === series;

      item.style.display = categoryMatch && seriesMatch ? "" : "none";
    });
  }

  function setActiveSortButton(mode) {
    var buttons = document.querySelectorAll(".sort-btn[data-sort]");
    buttons.forEach(function (button) {
      var buttonMode = button.getAttribute("data-sort");
      button.classList.toggle("is-active", buttonMode === mode);
    });
  }

  function initScrollToggle() {
    var wrapper = document.querySelector(".scroll-toggle");
    if (!wrapper) return;

    wrapper.querySelectorAll(".scroll-toggle-btn[data-scroll-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        var target = button.getAttribute("data-scroll-target");
        if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sortButtons = document.querySelectorAll(".sort-btn[data-sort]");
    sortButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var mode = button.getAttribute("data-sort");
        setActiveSortButton(mode);
        sortPosts(mode);
        applyCategoryFilter();
      });
    });

    if (sortButtons.length) {
      setActiveSortButton("comments");
      sortPosts("comments");
      applyCategoryFilter();
    }
  });
  document.addEventListener("DOMContentLoaded", initScrollToggle);
})();
