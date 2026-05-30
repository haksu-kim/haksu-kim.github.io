(function () {
  var STORAGE_KEY = "postLikes_v1";

  function loadLikes() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveLikes(likes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
  }

  function getLikes(postId, likes) {
    return Number(likes[postId] || 0);
  }

  function setLikeCount(postId, count) {
    var counters = document.querySelectorAll('.like-count[data-post-id="' + postId + '"]');
    counters.forEach(function (el) {
      el.textContent = String(count);
    });
  }

  function refreshLikeCounts(likes) {
    var counters = document.querySelectorAll(".like-count[data-post-id]");
    counters.forEach(function (el) {
      var postId = el.getAttribute("data-post-id");
      el.textContent = String(getLikes(postId, likes));
    });
  }

  function sortPosts(mode, likes) {
    var list = document.querySelector(".posts");
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("li[data-post-id]"));
    items.sort(function (a, b) {
      var idA = a.getAttribute("data-post-id");
      var idB = b.getAttribute("data-post-id");
      var likesA = getLikes(idA, likes);
      var likesB = getLikes(idB, likes);
      var dateA = Number(a.getAttribute("data-post-date") || 0);
      var dateB = Number(b.getAttribute("data-post-date") || 0);

      if (mode === "recent") {
        return dateB - dateA;
      }

      if (likesA !== likesB) return likesB - likesA;
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

    var items = Array.prototype.slice.call(list.querySelectorAll("li[data-post-id]"));
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

  function initLikeButtons() {
    var likes = loadLikes();
    refreshLikeCounts(likes);

    document.querySelectorAll(".like-btn[data-post-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        var postId = button.getAttribute("data-post-id");
        var nextLikes = loadLikes();
        var updatedCount = getLikes(postId, nextLikes) + 1;
        nextLikes[postId] = updatedCount;
        saveLikes(nextLikes);
        setLikeCount(postId, updatedCount);

        var activeSort = document.querySelector(".sort-btn.is-active");
        if (activeSort && activeSort.getAttribute("data-sort") === "likes") {
          sortPosts("likes", nextLikes);
        }
      });
    });

    document.querySelectorAll(".sort-btn[data-sort]").forEach(function (button) {
      button.addEventListener("click", function () {
        var mode = button.getAttribute("data-sort");
        setActiveSortButton(mode);
        sortPosts(mode, loadLikes());
      });
    });

    if (document.querySelector(".posts")) {
      setActiveSortButton("likes");
      sortPosts("likes", likes);
      applyCategoryFilter();
    }
  }

  document.addEventListener("DOMContentLoaded", initLikeButtons);
})();
