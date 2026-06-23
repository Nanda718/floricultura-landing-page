const cardsCatalogo = document.getElementById("cards-catalogo-romanticos");

fetch("data/romanticos.json")
    .then(response => response.json())
    .then(romanticos => {

        romanticos.forEach(romanticos => {

            cardsCatalogo.innerHTML += `
                <div class="swiper-slide">

                    <div class="shop-card">

                        <div class="card-img">
                            <img src="${romanticos.imagem}" alt="${romanticos.nome}">

                            <div class="card-information">

                                <div class="card-information-texts">
                                    <h2>${romanticos.nome}</h2>
                                    <span>R$ ${romanticos.preco.toFixed(2).replace(".", ",")}</span>
                                </div>

                                <button>
                                    <i class="fa-solid fa-plus"></i>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            `;

        });

       
        new Swiper(".catalogoSwiperRomanticos", {
            speed:1000,

            slidesPerView: 4,

            navigation: {
                nextEl: ".catalogo-button-next",
                prevEl: ".catalogo-button-prev"
            },

            breakpoints: {

                0: {
                    slidesPerView: 1
                },

                600: {
                    slidesPerView: 2
                },

                900: {
                    slidesPerView: 3
                },

                1200: {
                    slidesPerView: 4
                }

            }

        });

    });