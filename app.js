const products = [
      {
        type: "celular",
        name: "Samsung A17",
        specs: "265GB / 8GB RAM",
        price: "$799.000",
        img: "assets/SamsungA17.png"
      },
      {
        type: "celular",
        name: "Redmi 15C",
        specs: "128GB / 6GB RAM",
        price: "$469.999",
        img: "assets/Redmi.png"
      },
      {
        type: "pc",
        name: "PORTATIL HP245 G10",
        specs: "RYZEN 3 7320U / 8+512GB / 15.6",
        price: "$1'250.000",
        img: "assets/HP.webp"
      },
      {
        type: "celular",
        name: "Honor 400 Smart",
        specs: "265GB / 12GB RAM",
        price: "$1'099.999",
        img: "assets/Honor.webp"
      },
      {
        type: "pc",
        name: "ASUS VIVOBOOK E1504F",
        specs: "R5-7520U / 16GB RAM / 512GB",
        price: "$1'250.000",
        img: "assets/Asus.png"
      },
      {
        type: "nevera",
        name: "Nevera kalley 187 litros",
        specs: "Precio especial de oferta",
        price: "$1'099.999",
        img: "assets/nevera1.png"
      },
      {
        type: "freidora",
        name: "Freidora de Aire Kalley",
        specs: "6.3 Litros / Multiples recetas",
        price: "$299.999",
        img: "assets/freidora.png"
      },
      {
        type: "scooter",
        name: "Xiaomi Scooter 4 lite 2Gen",
        specs: "¡Precio especial de super oferta!",
        price: "$1'479.999",
        img: "assets/scooter.png"
      },
      {
        type: "celular",
        name: "Samsung S25 Ultra",
        specs: "512GB / 12GB RAM",
        price: "$4'999.999",
        img: "assets/s25.webp"
      },
    ];

    const catalog = document.getElementById("catalog");

    let currentProduct = null;

    // Vendedores
    const SELLERS = {
      marcela: {
        name: "Marcela",
        phone: "573214629098"
      },
      erick: {
        name: "Erick",
        phone: "573138843823"
      }
    };

    // Funcion para cotizar
    function cotizarWhatsApp(product, sellerKey) {
      if (!product || !SELLERS[sellerKey]) return;

      const seller = SELLERS[sellerKey];

      const message =
        `Hola ${seller.name}, estoy interesado en el producto:

📱 ${product.name}
📝 ${product.specs}

Gracias.`;

      const url = `https://wa.me/${seller.phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }

    // Funcion para agregar productos
    function renderProducts(filter) {
      catalog.innerHTML = "";

      products
        .filter(p => filter === "all" || p.type === filter)
        .forEach(p => {

          const card = document.createElement("div");
          card.className = "card";

          // CLICK EN LA CARD → ABRE MODAL
          card.addEventListener("click", () => openModal(p));

          const img = document.createElement("img");
          img.src = p.img;

          const info = document.createElement("div");
          info.className = "card-info";

          const text = document.createElement("div");
          text.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.specs}</p>
      `;

          // BOTÓN MARCELA
          const btnMarcela = document.createElement("button");
          btnMarcela.textContent = "Cotiza con Marcela";
          btnMarcela.addEventListener("click", (e) => {
            e.stopPropagation();
            cotizarWhatsApp(p, "marcela");
          });

          // BOTÓN ERICK
          const btnErick = document.createElement("button");
          btnErick.textContent = "Cotiza con Erick";
          btnErick.style.marginTop = "6px";
          btnErick.addEventListener("click", (e) => {
            e.stopPropagation();
            cotizarWhatsApp(p, "erick");
          });

          info.appendChild(text);
          info.appendChild(btnMarcela);
          info.appendChild(btnErick);

          card.appendChild(img);
          card.appendChild(info);

          catalog.appendChild(card);
        });
    }


    function filterProducts(type) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      event.target.classList.add("active");
      renderProducts(type);
    }

    function openModal(p) {
      currentProduct = p;

      document.getElementById("modalImg").src = p.img;
      document.getElementById("modalTitle").innerText = p.name;
      document.getElementById("modalSpecs").innerText = p.specs;

      document.getElementById("modal").style.display = "flex";
    }


    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }

    const modal = document.getElementById("modal");

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    renderProducts("all");