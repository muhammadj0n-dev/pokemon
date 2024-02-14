let cardwrapper = document.querySelector('.cards');

function renderdata(data){
    data.products.forEach((el) => {
       const {img , name , title , kg , age} =el;
        
       const card = document.createElement(`div`)

       card.innerHTML= `
       <div class="card">
                            <div class="card_img">
                            <img src="${img}" alt="pokemon">
                            </div>
                            <div class="card_title">
                                <div class="card_title-item">
                                    <h4>${name}</h4>
                                    <box-icon name='heart' color='#222222' ></box-icon>
                                </div>
                                <p>${title}</p>
                                <div class="card_title-numer">
                                    <h4>kg ${kg}</h4>
                                    <h4>age ${age}</h4>
                                </div>
                            </div>
                        </div>
       `
        cardwrapper.appendChild(card);
    });
}

renderdata(product)