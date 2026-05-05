function TeacherItem(teacher) {
    return `<div class="col-12 col-md-6 col-lg-4 item gallery-image active">
      <div class="item-wrapper" data-toggle="modal" data-bs-toggle="modal" data-target="#teacherModal" data-bs-target="#teacherModal" data-teacher-id="${teacher.id}">
        <img class="w-100" src="${teacher.imageSrc}" alt="${teacher.name}" data-slide-to="${teacher.id}" data-bs-slide-to="${teacher.id}" data-target="#lb-teacherCarousel" data-bs-target="#lb-teacherCarousel">
      
      </div>
      <div class="card_teacher">
       <h5 class="mbr-item-subtitle mbr-fonts-style align-center">
        ${teacher.name}
      </h3>
      <p class="mbr-item-subtitle_p">${teacher.description}</p></div>
     
    </div>`
}
export default TeacherItem;