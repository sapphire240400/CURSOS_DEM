document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = -20;

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var tables = document.querySelectorAll('.table_curso');

        // Check scrolling direction
        var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling

        tables.forEach(function(table, index) {
            var tableOffset = table.offsetTop;

            // Show tables when scrolling down
            if (scrollDirection === 'down' && table.classList.contains('hidden-curso') && scrollPosition + windowHeight > tableOffset) {
                table.classList.remove('hidden-curso');
                table.classList.add('visible');
            }

            // Hide tables when scrolling up
            if (scrollDirection === 'up' && !table.classList.contains('hidden-curso') && scrollPosition + windowHeight < tableOffset) {
                table.classList.remove('visible');
                table.classList.add('hidden-curso');
            }
        });
    });
});










