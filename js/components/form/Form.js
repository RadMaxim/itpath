function Form(params) {
    return ` <div class="container">
        <div class="mbr-section-head mb-5">
            <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Оставьте заявку и мы с радостью ответим на все вопросы</strong></h2>
            
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="EmR/A8n6PTu5GkcQ5T0DJSuLLWZUZbYhvqIwg22DRZ7XA7qNswzPIDoE9AafClocAL/BVEwthB0S3CY5mS0W3T1ey7xX6P4KW6IXebD7R2RiT7Mgp72H/HAu21f4e3bn">
                    <div class="row">
                        <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Спасибо! Заявка на бесплатное пробное занятие принята</div>
                        <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div class="dragArea row">
                        <div class="col-md col-sm-12 form-group mb-3" data-for="name">
                            <input type="text" name="name" placeholder="Имя" data-form-field="name" class="form-control" value="" id="name-form02-6">
                        </div>
                        
                        <div class="col-12 form-group mb-3" data-for="phone">
                            <input type="tel" name="phone" placeholder="+375 (XX) XXX XX XX " data-form-field="phone" class="form-control" value="" id="phone-form02-6">
                        </div>
                        <div class="col-12 form-group mb-3" data-for="textarea">
                            <textarea name="textarea" placeholder="Сколько лет ребёнку?" data-form-field="textarea" class="form-control" id="textarea-form02-6"></textarea>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn"><button type="submit" class="btn btn-info display-7">Отправить заявку</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>`
}
document.getElementById("form02-6").innerHTML = Form()