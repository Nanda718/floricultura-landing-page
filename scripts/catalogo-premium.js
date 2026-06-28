const cardsPremium = document.getElementById("cards-catalogo-premium");

fetch("data/premium.json")
    .then(response => response.json())
    .then(premium => {

        premium.forEach(premium => {

            cardsPremium.innerHTML += `
                <div class="swiper-slide">

                    <div class="shop-card">

                        <div class="card-img">
                            <img src="${premium.imagem}" alt="${premium.nome}">

                            <div class="card-information">

                                <div class="card-information-texts">
                                    <h2>${premium.nome}</h2>
                                    <span>R$ ${premium.preco.toFixed(2).replace(".", ",")}</span>
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

       
        new Swiper(".catalogoSwiperPremium", {
            speed:1000,

            slidesPerView: 4,
            spaceBetween:"-50",

            navigation: {
                nextEl: ".premium-next",
                prevEl: ".premium-prev"
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