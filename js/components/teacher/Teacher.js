import teachers from "./data.js";
import TeacherItem from "./Items.js";

function generateTeacherGallery(teachersArray) {
  // Генерируем карточки преподавателей (галерея)
  const galleryItems = teachersArray.map(teacher => TeacherItem(teacher)).join('');

  // Генерируем слайды для карусели внутри модального окна
  const carouselItems = teachersArray.map((teacher, idx) => `
    <div class="carousel-item ${idx === 0 ? 'active' : ''}">
      <img class="d-block w-100" src="${teacher.imageSrc}" alt="${teacher.name}">
    </div>
  `).join('');

  // Индикаторы карусели
  const indicators = teachersArray.map((teacher, idx) => `
    <li data-slide-to="${idx}" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" data-target="#lb-teacherCarousel" data-bs-target="#lb-teacherCarousel"></li>
  `).join('');

  // Полный HTML
  return `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-5">
            <h2 class="mbr-section-title mbr-fonts-style align-center m-0 display-2"><strong>Преподаватели</strong><br></h2>
          </div>
        </div>
      </div>
      <div class="row mbr-gallery mbr-masonry" data-masonry="{&quot;percentPosition&quot;: true }">
        ${galleryItems}
      </div>

      <!-- Модальное окно с каруселью -->
      <div class="modal mbr-slider" tabindex="-1" role="dialog" aria-hidden="true" id="teacherModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="carousel slide carousel-fade" id="lb-teacherCarousel" data-interval="5000" data-bs-interval="5000">
                <div class="carousel-inner">
                  ${carouselItems}
                </div>
                <ol class="carousel-indicators">
                  ${indicators}
                </ol>
                <a role="button" href="" class="close" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"></a>
                <a class="carousel-control-prev carousel-control" role="button" data-slide="prev" data-bs-slide="prev" href="#lb-teacherCarousel">
                  <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                  <span class="sr-only visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next carousel-control" role="button" data-slide="next" data-bs-slide="next" href="#lb-teacherCarousel">
                  <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                  <span class="sr-only visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Использование:
document.getElementById("gallery02-v").innerHTML = generateTeacherGallery(teachers);