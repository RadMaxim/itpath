function Slider() {
  // Массив объектов: ID видео и текст описания
  const videos = [
    { id: "https://youtu.be/G8MQ9GyqK40?si=BrtBZEoLI_pUcoBC", description: "Игра в жанре Tower Defence на Construct" },
    { id: "5qap5aO4i9A", description: "Максим делится опытом участия в хакатоне и победой" },
    { id: "6n3pFFPSlW4", description: "Соня объясняет, зачем ей робототехника и Arduino" },
    { id: "y0V4T5uR5lI", description: "Артём о том, как Python помог в школьных проектах" },
    { id: "dQw4w9WgXcQ", description: "Варя и Степан про командную работу над ботом для Telegram" },
    { id: "jNQXAC9IVRw", description: "Дима: «Машинное обучение — это не страшно, а очень интересно»" },
    { id: "Z1B9fDzjB5s", description: "Алиса и её проект умного дома на ESP32" }
  ];

  // Генерируем слайды с видео+описанием
  const slides = videos.map(video => `
    <div class="embla__slide" style="height:100%">
      <div class="video-container" style="height:100%">
        <iframe 
            style="height:100%"
          src="${video.id}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-caption">
        ${video.description}
      </div>
    </div>
  `).join('');

  // Основная разметка слайдера (остаётся без изменений)
  return `
    <div class="container-fluid">
      <div  class="row mb-1 justify-content-center">
        <div class="col-12 content-head">
          <h3 class="mbr-section-title">
            <strong>Видеоинтервью</strong>
          </h3>
          <h5 class="mbr-section-subtitle">
            Преподаватели спрашивают — ученики отвечают.<br>
            В этой галерее собраны видеоинтервью, где наши наставники беседуют с ребятами: о первых проектах, сложных задачах, любимых языках и неожиданных открытиях.
          </h5>
        </div>
      </div>
      <div class="row" style="height:300px">
        <div class="col-12" style="height:100%">
          <div class="embla" style="height:100%">
            <div class="embla__viewport"style="height:100%">
              <div class="embla__container" id="carouselContainer" style="height:100%">
                ${slides}
              </div>
            </div>
            <button class="embla__button embla__button--prev" id="prevBtn">‹</button>
            <button class="embla__button embla__button--next" id="nextBtn">›</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
document.getElementById("slider04-1v").innerHTML = Slider();
 (function() {
      // Получаем элементы
      const container = document.getElementById('carouselContainer');
      const slides = document.querySelectorAll('.embla__slide');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      let currentIndex = 0;
      let visibleSlides = getVisibleSlidesCount();
      let totalSlides = slides.length;
      let maxIndex = totalSlides - visibleSlides;

      // Определяем, сколько слайдов должно быть видно в зависимости от ширины
      function getVisibleSlidesCount() {
        return window.innerWidth >= 768 ? 3 : 1;
      }

      // Обновляем ширину контейнера и сдвиг
      function updateCarousel() {
        visibleSlides = getVisibleSlidesCount();
        maxIndex = Math.max(0, totalSlides - visibleSlides);
        // Ограничиваем индекс, чтобы не выходить за границы
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;
        // Сдвигаем (используем transform)
        const slideWidth = slides[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(container).gap) || 0;
        const shift = -currentIndex * (slideWidth + gap);
        container.style.transform = `translateX(${shift}px)`;
      }

      // Следующий слайд
      function nextSlide() {
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel();
        } else if (currentIndex === maxIndex && visibleSlides === 1) {
          // Если это последний и режим 1 слайд – зацикливаем на первый
          currentIndex = 0;
          updateCarousel();
        } else if (visibleSlides > 1) {
          // Для 3 слайдов можно остановиться или зациклить, но для простоты не зацикливаем
          // (можно раскомментировать, если нужно зациклить)
          // if (currentIndex === maxIndex) {
          //   currentIndex = 0;
          //   updateCarousel();
          // }
        }
      }

      // Предыдущий слайд
      function prevSlide() {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        } else if (currentIndex === 0 && visibleSlides === 1) {
          currentIndex = maxIndex;
          updateCarousel();
        }
      }

      // При изменении размера окна пересчитываем всё
      let resizeTimer;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const newVisible = getVisibleSlidesCount();
          if (newVisible !== visibleSlides) {
            // При изменении количества видимых слайдов сбрасываем индекс на 0
            currentIndex = 0;
            updateCarousel();
          } else {
            // Просто обновляем позицию (ширина слайдов могла измениться)
            updateCarousel();
          }
        }, 150);
      });

      // Назначаем обработчики кнопок
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);

      // Инициализация
      updateCarousel();
    })();