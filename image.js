 function openFullScreenCarousel(imageSrcs) {
            const carouselInner = document.querySelector('#fullScreenCarousel .carousel-inner');
            const carouselIndicators = document.querySelector('#fullScreenCarousel .carousel-indicators');

            carouselInner.innerHTML = ''; // Clear previous items
            carouselIndicators.innerHTML = ''; // Clear previous indicators

            for (let i = 0; i < imageSrcs.length; i++) {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                if (i === 0) {
                    carouselItem.classList.add('active');
                }

                const img = document.createElement('img');
                img.src = imageSrcs[i];
                img.alt = `Full Screen Image ${i + 1}`;
                img.className = 'img-fluid';

                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);

                // Create carousel indicator
                const indicator = document.createElement('li');
                indicator.setAttribute('data-bs-target', '#fullScreenCarousel');
                indicator.setAttribute('data-bs-slide-to', i);
                if (i === 0) {
                    indicator.classList.add('active');
                }
                carouselIndicators.appendChild(indicator);
            }

            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        }