document.addEventListener('DOMContentLoaded', () => {
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.textContent.trim().toLowerCase();

                projectCards.forEach(card => {
                    const category = card.querySelector('.project-category').textContent.trim().toLowerCase();
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else if (filterValue === category || (filterValue === 'custom fabrication' && category === 'metal product services')) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Testimonial Carousel
    const tCards = document.querySelectorAll('.testimonial-card');
    if (tCards.length === 3) {
        let positions = ['left', 'center', 'right'];

        // Auto slide every 5 seconds
        let autoSlide = setInterval(rotateRight, 5000);

        function rotateRight() {
            positions.unshift(positions.pop());
            updateCards();
        }

        function rotateLeft() {
            positions.push(positions.shift());
            updateCards();
        }

        function updateCards() {
            tCards.forEach((card, index) => {
                card.className = 'testimonial-card ' + positions[index];
            });
        }

        tCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const currentPos = positions[index];
                if (currentPos === 'right') {
                    rotateLeft();
                } else if (currentPos === 'left') {
                    rotateRight();
                }

                // reset interval on interaction
                clearInterval(autoSlide);
                autoSlide = setInterval(rotateRight, 5000);
            });
        });

        // Arrow Navigation
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');

        if (prevArrow && nextArrow) {
            prevArrow.addEventListener('click', () => {
                rotateRight();
                clearInterval(autoSlide);
                autoSlide = setInterval(rotateRight, 5000);
            });

            nextArrow.addEventListener('click', () => {
                rotateLeft();
                clearInterval(autoSlide);
                autoSlide = setInterval(rotateRight, 5000);
            });
        }

        // Initialize positions
        updateCards();
    }
});
