import{n as e}from"./index-C0vAuV3T.js";var t,n=e((()=>{t=[{title:`Разработка игр`,description:`Разработка игр на Construct — это идеальный старт для тех, кто хочет быстро увидеть результат своей работы и в игровой форме освоить логику программирования`,imgSrc:`./construct1800-579x1029.jpg`,imgAlt:`Mobirise Website Builder`,active:!0},{title:`Machine learning (Python)`,description:`Курс по Python и машинному обучению познакомит школьников с настоящим искусственным интеллектом`,imgSrc:`./pythond0afd180d0bed181d0bbd0b0d0b2-579x1029.jpeg`,imgAlt:`Mobirise Website Builder`,active:!1},{title:`Робототехника`,description:`Курс по робототехнике на Arduino и ESP32 научит вас создавать умные устройства от мигающего светодиода до автономного робота`,imgSrc:`./video-2026-04-20-17-36-39-579x1029.jpeg`,imgAlt:`Mobirise Website Builder`,active:!1}]}));function r(e,t,n,r=`#ff7d19`){return`
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-5">
            <h2 style="color:${r}" class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>${t}&nbsp;</strong></h2>
            <h5 style="color:${r}" class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7">${n}</h5>
          </div>
        </div>
      </div>
      <div class="row">
        ${e.reduce((t,n)=>t+`
      <div class="item features-image col-12 col-md-6 col-lg-4${n.active?` active`:``}">
        <div class="item-wrapper">
          <div class="item-img">
            <img src="${n.imgSrc}" alt="${n.imgAlt}" data-slide-to="${e.indexOf(n)}" data-bs-slide-to="${e.indexOf(n)}">
          </div>
          <div class="item-content">
            <h5 style="color:${r}" class="item-title mbr-fonts-style display-5"><strong><br></strong><strong>${n.title}</strong></h5>
            <p style="color:${r}" class="mbr-text mbr-fonts-style display-7">${n.description}</p>
          </div>
        </div>
      </div>
    `,``)}
      </div>
    </div>
  `}var i=e((()=>{n(),document.getElementById(`features04-w`).innerHTML=r(t,`Направления`,`Наши курсы — это уникальные авторские программы, созданные с нуля действующими разработчиками. Мы совмещаем коммерческий опыт (от 2 лет) и преподавание (от 4 лет), чтобы давать только актуальные и проверенные на практике знания`)}));i();export{r as default,i as t};