const cardsPresentes = document.getElementById("cards-catalogo-presentes");

fetch("data/presentes.json")
    .then(response => response.json())
    .then(presentes => {

        presentes.forEach(presentes => {

            cardsPresentes.innerHTML += `
                <div class="swiper-slide">

                    <div class="shop-card">

                        <div class="card-img">
                            <img src="${presentes.imagem}" alt="${presentes.nome}">

                            <div class="card-information">

                                <div class="card-information-texts">
                                    <h2>${presentes.nome}</h2>
                                    <span>R$ ${presentes.preco.toFixed(2).replace(".", ",")}</span>
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

       
        new Swiper(".catalogoSwiperPresentes", {
            speed:1000,

            slidesPerView: 4,
            spaceBetween:"-50",

            navigation: {
                nextEl: ".presentes-next",
                prevEl: ".presentes-prev"
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