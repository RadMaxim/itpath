import{t as e}from"./index-C0vAuV3T.js";var t=e((()=>{function e(){return`
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
                ${[{id:`MLVWbn8U6h0`,description:`Аня рассказывает, как создала свою первую игру на Construct`},{id:`5qap5aO4i9A`,description:`Максим делится опытом участия в хакатоне и победой`},{id:`6n3pFFPSlW4`,description:`Соня объясняет, зачем ей робототехника и Arduino`},{id:`y0V4T5uR5lI`,description:`Артём о том, как Python помог в школьных проектах`},{id:`dQw4w9WgXcQ`,description:`Варя и Степан про командную работу над ботом для Telegram`},{id:`jNQXAC9IVRw`,description:`Дима: «Машинное обучение — это не страшно, а очень интересно»`},{id:`Z1B9fDzjB5s`,description:`Алиса и её проект умного дома на ESP32`}].map(e=>`
    <div class="embla__slide" style="height:100%">
      <div class="video-container" style="height:100%">
        <iframe 
            style="height:100%"
          src="https://www.youtube.com/embed/${e.id}?rel=0&modestbranding=1" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-caption">
        ${e.description}
      </div>
    </div>
  `).join(``)}
              </div>
            </div>
            <button class="embla__button embla__button--prev" id="prevBtn">‹</button>
            <button class="embla__button embla__button--next" id="nextBtn">›</button>
          </div>
        </div>
      </div>
    </div>
  `}document.getElementById(`slider04-1v`).innerHTML=e(),(function(){let e=document.getElementById(`carouselContainer`),t=document.querySelectorAll(`.embla__slide`),n=document.getElementById(`prevBtn`),r=document.getElementById(`nextBtn`),i=0,a=c(),o=t.length,s=o-a;function c(){return window.innerWidth>=768?3:1}function l(){a=c(),s=Math.max(0,o-a),i>s&&(i=s),i<0&&(i=0);let n=t[0].offsetWidth,r=parseFloat(getComputedStyle(e).gap)||0,l=-i*(n+r);e.style.transform=`translateX(${l}px)`}function u(){i<s?(i++,l()):i===s&&a===1&&(i=0,l())}function d(){i>0?(i--,l()):i===0&&a===1&&(i=s,l())}let f;window.addEventListener(`resize`,function(){clearTimeout(f),f=setTimeout(()=>{c()===a||(i=0),l()},150)}),n.addEventListener(`click`,d),r.addEventListener(`click`,u),l()})()}));export default t();