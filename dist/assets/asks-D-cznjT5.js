import{n as e,t}from"./index-C0vAuV3T.js";function n(e,t){return`<div class="card">
        <div class="card-header" role="tab" id="heading${e+1}">
          <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" href="#${t.id}" aria-expanded="false" aria-controls="collapse${e+1}">
            <h3 class="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">${t.question}</h3>
            <span class="sign mbr-iconfont mobi-mbri-arrow-down"></span>
          </a>
        </div>
        <div id="${t.id}" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="heading${e+1}" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_6">
          <div class="panel-body">
            <p class="mbr-fonts-style panel-text display-7">${t.answer}</p>
          </div>
        </div>
      </div>`}var r=e((()=>{})),i,a=e((()=>{i=[{id:`collapse1_6`,question:`Какие знания необходимы для начала учёбы?`,answer:`Наши программы разработаны с учетом возрастной категории детей и составлены таким образом, что им не нужны предыдущие навыки или опыт программирования. Поскольку все начинаем сначала.`},{id:`collapse2_6`,question:`Кто ваши преподаватели?`,answer:`Преподаватели IT PATH - инженеры - программисты с высшим образованием. Все имеют свои наработки в виде проектов и научных исследований, искренне любят свое дело и ищут подход к каждому ребенку без исключений.`},{id:`collapse3_6`,question:`Как проходят отработки?`,answer:`Пропускать занятия не рекомендовано. Но в случае отсутствия ученика на уроке по уважительной причине, родители обязаны сообщить об этом менеджеру школы. Отработки проходят согласно расписанию центров.`},{id:`collapse4_6`,question:`Как выбрать направление, если ребенок не понимает, что ему больше понравится?`,answer:`Обучение начинается с пробного урока, там наша команда помогает определиться с направлением. Дети до 10 лет начинают обучение по направлению IT-старт, который закладывает базу по программированию и робототехнике и дальше помогает ребенку определиться, в какой профессии развиваться.`}]})),o=t((()=>{r(),a();function e(){return`<div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-10 m-auto">
          <div class="content">
            <div class="row justify-content-center mb-5">
              <div class="col-12 content-head">
                <div class="mbr-section-head">
                  <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Отвечаем на популярные вопросы</strong></h4>
                </div>
              </div>
            </div>
            <div id="bootstrap-accordion_6" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
            </div>
        </div>
      </div>
    </div>
  </div>`}document.getElementById(`list01-1r`).innerHTML=e(),document.getElementById(`bootstrap-accordion_6`).innerHTML=Array.from(i).reduce((e,t,r,i)=>e+=n(r,t),``)}));export default o();