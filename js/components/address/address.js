function Address() {
    return `<div class="container">
        <div class="mbr-section-head mb-5">
            
            <h2 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-2"><strong>Контакты</strong></h2>
        </div>
        <div class="row justify-content-center mt-4">
            <div class="card col-12 col-md-5">
                <div class="card-wrapper">
                    <div class="text-wrapper">
                        
                    <ul class="list mbr-fonts-style display-7">
                        <li class="mbr-text item-wrap"><span style="font-size: calc(1rem + 0 * ((100vw - 20rem) / 28));">Номер: +375 (29) 327-20-82 (Viber/Telegram)</span><br></li><li class="mbr-text item-wrap"><span style="font-size: calc(1rem + 0 * ((100vw - 20rem) / 28));">Email: itpathsenitca@gmail.com</span><br></li><li class="mbr-text item-wrap"><br></li>
                        <li class="mbr-text item-wrap">Адрес: </li><li class="mbr-text item-wrap">а. г. Сеница,&nbsp; ул. Я. Купалы 9</li><li class="mbr-text item-wrap"><span style="font-size: 1rem;">Время работы:</span><br></li><li class="mbr-text item-wrap">9:00 - 20:00</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="map-wrapper col-12 col-md-7">
                <div class="google-map"><iframe frameborder="0" style="border:0" src="https://yandex.by/map-widget/v1/?ll=27.523936%2C53.823368&amp;z=18&amp;pt=27.523936%2C53.823368&amp;what=this&amp;mode=search&amp;sll=27.523936%2C53.823368&amp;text=53.823368%2C27.523936" allowfullscreen=""></iframe></div>
            </div>
        </div>
    </div>`
}
export default Address;
document.getElementById("contacts02-9").innerHTML = Address()