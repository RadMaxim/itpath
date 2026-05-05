import Card from "./card.js";
import faqItems from "./data.js";

function generateAccordion() {
  return `<div class="container">
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
  </div>`;
}

// Использование:
document.getElementById("list01-1r").innerHTML = generateAccordion();
document.getElementById("bootstrap-accordion_6").innerHTML = Array.from(faqItems).reduce((buf, item, index, arr)=>buf+=Card(index,item), "")