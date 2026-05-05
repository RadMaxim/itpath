function Card(index, item) {
    return `<div class="card">
        <div class="card-header" role="tab" id="heading${index + 1}">
          <a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" href="#${item.id}" aria-expanded="false" aria-controls="collapse${index + 1}">
            <h3 class="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">${item.question}</h3>
            <span class="sign mbr-iconfont mobi-mbri-arrow-down"></span>
          </a>
        </div>
        <div id="${item.id}" class="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="heading${index + 1}" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_6">
          <div class="panel-body">
            <p class="mbr-fonts-style panel-text display-7">${item.answer}</p>
          </div>
        </div>
      </div>`
}
export default Card;