function TeacherItem(teacher) {
    return `<div class="col-12 col-md-6 col-lg-4 item gallery-image active">
      <div class="item-wrapper" data-toggle="modal" data-bs-toggle="modal" data-target="#teacherModal" data-bs-target="#teacherModal" data-teacher-id="${teacher.id}">
        <img class="w-100" src="${teacher.imageSrc}" alt="${teacher.name}" data-slide-to="${teacher.id}" data-bs-slide-to="${teacher.id}" data-target="#lb-teacherCarousel" data-bs-target="#lb-teacherCarousel">
        <div class="icon-wrapper">
          <span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span>
        </div>
      </div>
      <h3 class="mbr-item-subtitle mbr-fonts-style align-center mb-0 mt-3 display-7">
        <strong>${teacher.name}</strong><br><br>${teacher.description}
      </h3>
    </div>`
}
export default TeacherItem;