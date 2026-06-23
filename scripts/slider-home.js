const wrapper = document.getElementById("swiper-wrapper");

fetch("data/slider-home.json")
    .then(response => response.json())
    .then(produtos => {

        produtos
            .filter(produto => produto.slider)
            .forEach(produto => {

                wrapper.innerHTML += `
                    <div class="swiper-slide">

                        <div class="slide-content">

                            <div class="flower-side">

                                <div class="slide-circle"></div>

                                <img
                                    src="${produto.imagem}"
                                    alt="${produto.nome}"
                                    class="slide-image">

                            </div>

                            <div class="flower-card">

                                <span class="flower-tag">
                                    ${produto.colecao}
                                </span>

                                <h2>${produto.nome}</h2>

                                <p>${produto.descricao}</p>

                                <div class="flower-price">
                                    R$ ${produto.preco.toFixed(2).replace(".", ",")}
                                </div>

                            </div>

                        </div>

                    </div>
                `;

            });

        new Swiper(".mySwiper", {

            loop: true,
            speed: 1200,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }

        });

    });