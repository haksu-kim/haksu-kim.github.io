---
---

window.onload = function () {
    var $searchbar = document.getElementById('search-input');
    var $searchResults = document.getElementById('search-results');
    var posts = [];

    if (!$searchbar || !$searchResults)
        return;

    var escapeHtml = function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    var renderResults = function () {
        var query = $searchbar.value.trim().toLowerCase();

        if (!query) {
            $searchResults.style.display = 'none';
            $searchResults.innerHTML = '';
            return;
        }

        var results = posts.filter(function (post) {
            return [
                post.title,
                post.categories,
                post.tags,
                post.content
            ].join(' ').toLowerCase().indexOf(query) > -1;
        }).slice(0, 6);

        $searchResults.style.display = 'block';

        if (!results.length) {
            $searchResults.innerHTML = '<span class="search-empty">No results found</span>';
            return;
        }

        $searchResults.innerHTML = results.map(function (post) {
            return '<a href="' + post.url + '">' + escapeHtml(post.title) + '</a>';
        }).join('');
    };

    var request = new XMLHttpRequest();
    request.open('GET', '{{ "/search.json" | relative_url }}', true);
    request.onload = function () {
        if (request.status < 200 || request.status >= 300)
            return;

        try {
            posts = JSON.parse(request.responseText);
            renderResults();
        } catch (error) {
            posts = [];
            $searchResults.style.display = 'none';
            $searchResults.innerHTML = '';
        }
    };
    request.send();

    $searchbar.addEventListener('input', function () {
        renderResults();
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.search-container'))
            $searchResults.style.display = 'none';
    });
}
