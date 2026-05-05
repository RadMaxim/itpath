import directionsData from "./data.js";

function Cards(directionsData,h2, desc, colorText="#ff7d19") {
  // Генерация карточек через reduce
  const cardsHtml = directionsData.reduce((acc, item) => {
    const activeClass = item.active ? " active" : "";
    return acc + `
      <div class="item features-image col-12 col-md-6 col-lg-4${activeClass}">
        <div class="item-wrapper">
          <div class="item-img">
            <img src="${item.imgSrc}" alt="${item.imgAlt}" data-slide-to="${directionsData.indexOf(item)}" data-bs-slide-to="${directionsData.indexOf(item)}">
          </div>
          <div class="item-content">
            <h5 style="color:${colorText}" class="item-title mbr-fonts-style display-5"><strong><br></strong><strong>${item.title}</strong></h5>
            <p style="color:${colorText}" class="mbr-text mbr-fonts-style display-7">${item.description}</p>
          </div>
        </div>
      </div>
    `;
  }, "");

  return `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-5">
            <h2 style="color:${colorText}" class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>${h2}&nbsp;</strong></h2>
            <h5 style="color:${colorText}" class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7">${desc}</h5>
          </div>
        </div>
      </div>
      <div class="row">
        ${cardsHtml}
      </div>
    </div>
  `;
}

document.getElementById("features04-w").innerHTML = Cards(directionsData,"Направления","Наши курсы — это уникальные авторские программы, созданные с нуля действующими разработчиками. Мы совмещаем коммерческий опыт (от 2 лет) и преподавание (от 4 лет), чтобы давать только актуальные и проверенные на практике знания");
export default Cards;