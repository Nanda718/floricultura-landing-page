const cardsPopulares = document.getElementById("cards-catalogo-populares");

fetch("data/populares.json")
    .then(response => response.json())
    .then(produtos => {

        produtos.forEach(populares => {

            cardsPopulares.innerHTML += `
                <div class="swiper-slide">

                    <div class="shop-card">

                        <div class="card-img">
                            <img src="${populares.imagem}" alt="${populares.nome}">

                            <div class="card-information">

                                <div class="card-information-texts">
                                    <h2>${populares.nome}</h2>
                                    <span>R$ ${populares.preco.toFixed(2).replace(".", ",")}</span>
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

       
        new Swiper(".catalogoSwiperPopulares", {
            speed:1000,

            slidesPerView: 4,
            spaceBetween:"-50",

            navigation: {
                nextEl: ".populares-next",
                prevEl: ".populares-prev"
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