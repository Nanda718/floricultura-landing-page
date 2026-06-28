const cardsAniversarios = document.getElementById("cards-catalogo-aniversarios");

fetch("data/aniversarios.json")
    .then(response => response.json())
    .then(produtos => {

        produtos.forEach(aniversarios => {

            cardsAniversarios.innerHTML += `
                <div class="swiper-slide">

                    <div class="shop-card">

                        <div class="card-img">
                            <img src="${aniversarios.imagem}" alt="${aniversarios.nome}">

                            <div class="card-information">

                                <div class="card-information-texts">
                                    <h2>${aniversarios.nome}</h2>
                                    <span>R$ ${aniversarios.preco.toFixed(2).replace(".", ",")}</span>
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

       
        new Swiper(".catalogoSwiperAniversarios", {
            speed:1000,

            slidesPerView: 4,
            spaceBetween:"-50",

            navigation: {
                nextEl: ".aniversarios-next",
                prevEl: ".aniversarios-prev"
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