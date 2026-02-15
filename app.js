const products = [
      {
        type: "celular",
        name: "Samsung A17 5G",
        specs: "265GB / 8GB RAM",
        img: "assets/SamsungA17.png"
      },
      {
        type: "celular",
        name: "Redmi 15C",
        specs: "128GB / 6GB RAM",
        img: "assets/Redmi.png"
      },
      {
        type: "pc",
        name: "PORTATIL HP245 G10",
        specs: "RYZEN 3 7320U / 8+512GB / 15.6",
        img: "assets/HP.webp"
      },
      {
        type: "celular",
        name: "Honor 400 Smart",
        specs: "265GB / 12GB RAM",
        img: "assets/Honor.webp"
      },
      {
        type: "pc",
        name: "ASUS VIVOBOOK E1504F",
        specs: "R5-7520U / 16GB RAM / 512GB",
        img: "assets/Asus.png"
      },
      {
        type: "nevera",
        name: "Nevera kalley 187 litros",
        specs: "Precio especial de oferta",
        img: "assets/nevera1.png"
      },
      {
        type: "freidora",
        name: "Freidora de Aire Kalley",
        specs: "6.3 Litros / Multiples recetas",
        img: "assets/freidora.png"
      },
      {
        type: "scooter",
        name: "Xiaomi Scooter 4 lite 2Gen",
        specs: "¡Precio especial de super oferta!",
        img: "assets/scooter.png"
      },
      {
        type: "celular",
        name: "Samsung S25 Ultra",
        specs: "512GB / 12GB RAM",
        img: "assets/s25.webp"
      },
      {
        type: "celular",
        name: "Motorola G32",
        specs: "128GB / 4GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_918746-MLU78214736673_082024-F.webp"
      },
      {
        type: "tv",
        name: "Televisor Samsung 43''",
        specs: "--",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_946225-MLA99524335066_122025-F.webp"
      },
      {
        type: "sandu",
        name: "Sanduchera Kalley",
        specs: "--",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_754400-MLA84835977167_052025-F.webp"
      },
      {
        type: "celular",
        name: "Vivo Y36",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_988699-MCO99539154939_112025-F.webp"
      },
      {
        type: "celular",
        name: "Tecno GO 1",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_708233-MLA96423431746_102025-F.webp"
      },
      {
        type: "celular",
        name: "Honor Magic 6 LITE 5G",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_859498-MLA99525178316_122025-O.webp"
      },
      {
        type: "celular",
        name: "Samsung Galaxy A06",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_816392-MLA79994386981_102024-F.webp"
      },
      {
        type: "celular",
        name: "Redmi Note 14",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_739738-MLA97353376647_112025-F.webp"
      },
      {
        type: "celular",
        name: "ZTE Nubia Music",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_752947-MCO91442582255_092025-F.webp"
      },
      {
        type: "celular",
        name: "Infinix Smart 9",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_605133-MLA99382228772_112025-F.webp"
      },
      {
        type: "celular",
        name: "Samsung Galaxy A16",
        specs: "256GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_680252-MLA99968761719_112025-F.webp"
      },
      {
        type: "celular",
        name: "iPhone 11",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_858618-MLA96122285201_102025-F.webp"
      },
      {
        type: "celular",
        name: "iPhone 12",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_906646-MLA46153566882_052021-F.webp"
      },
      {
        type: "celular",
        name: "iPhone 13",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_958104-MLA99489775048_112025-F.webp"
      },
      {
        type: "celular",
        name: "iPhone 14",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_788199-MLA95695531788_102025-F.webp"
      },
      {
        type: "celular",
        name: "Samsung Galaxy S24 FE",
        specs: "512GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_732602-MLA99987369233_112025-F.webp"
      },
      {
        type: "celular",
        name: "Nokia 105 4G",
        specs: "100MB / 4MB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_932772-MCO93989931131_102025-F.webp"
      },
      {
        type: "celular",
        name: "Infinix Note 50 pro",
        specs: "256GB / 12G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_790056-MLA99463684246_112025-F.webp"
      },
      {
        type: "celular",
        name: "Moto G04S",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_992992-MLA99516286066_112025-F.webp"
      },
      {
        type: "celular",
        name: "Infinix Hot 60 Pro+",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_965317-MCO104147038758_012026-F.webp"
      },
      {
        type: "celular",
        name: "Infinix GT 30 Pro",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_889133-MLA99421500914_112025-F.webp"
      },
      {
        type: "celular",
        name: "Honor X6c",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_662130-MLA99403088920_112025-F.webp"
      },
      {
        type: "celular",
        name: "Honor 400 Smart",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_987743-MLA97869336129_112025-F.webp"
      },
      {
        type: "celular",
        name: "Alcatel 1041",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_973321-MLU73882191453_012024-F.webp"
      },
      {
        type: "celular",
        name: "Apple iPhone 15 Pro Max",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_608675-MLA93872770404_102025-F.webp"
      },
      {
        type: "celular",
        name: "Samsung A56 5G",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_851228-MLA99523935220_122025-F.webp"
      },
      {
        type: "celular",
        name: "Xiaomi Redmi 14C",
        specs: "256GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_788792-MLA99936656899_112025-F.webp"
      },
      {
        type: "celular",
        name: "Zte Blade A56",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_700007-MCO96514222043_102025-F.webp"
      },
      {
        type: "celular",
        name: "Samsung Galaxy A16 5G",
        specs: "256GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_909065-MLA96870019085_102025-F.webp"
      },
      {
        type: "celular",
        name: "Tecno Go 1S",
        specs: "64GB / 2G RAM",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsySS2rKRCY4ayIcppCHa2fH7sEGH7J8DA-setZdEhxTygaP5wnekOUBj5NSzEt2vYTHqIARNHLFmIwK0kmeVqVx0J4iDX2R5sDx8PpHy5IOegAMQtgQGi"
      },
      {
        type: "celular",
        name: "Honor X9c",
        specs: "256GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_923349-MLA99452707398_112025-F.webp"
      },
      {
        type: "celular",
        name: "Samsung Galaxy A17 4G",
        specs: "128GB / 4G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_716271-MLA99853447409_112025-F.webp"
      },
      {
        type: "celular",
        name: "Honor X5c",
        specs: "64GB / 2G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_708726-MLA95728312284_102025-F.webp"
      },
      {
        type: "nevera",
        name: "Minibar Chanllenger",
        specs: "121 litros",
        img: "https://www.alkosto.com/medias/7705191043760-004-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNTIzNnxpbWFnZS93ZWJwfGFHWmtMMmhtTWk4eE5ETTJOVE01TWpBME5EQTJNaTgzTnpBMU1Ua3hNRFF6TnpZd1h6QXdORjgzTlRCWGVEYzFNRWd8NmZkNzRkZDU2NDMxZGE2ZGFiMTU2YjEwZTU3YmYxMmJhMDZlMGM5YmQ5MjYxNTFjYThlOTAwYzVjYjlmZTAyNA"
      },
      {
        type: "nevera",
        name: "Nevera Challenger CR249",
        specs: "249 Litros",
        img: "https://challengerco.vteximg.com.br/arquivos/ids/168998-1000-1000/7705191041803_001.jpg?v=638943461363770000"
      },
      {
        type: "lavadora",
        name: "Lavadora Whirlpool ",
        specs: "Carga Superior 20 Kilos",
        img: "https://www.alkosto.com/medias/7708228051554-003-750Wx750H?context=bWFzdGVyfGltYWdlc3w5MjA2fGltYWdlL3dlYnB8YUdFM0wyZ3lZUzh4TlRBME5Ua3pOakl4T0RFME1pODNOekE0TWpJNE1EVXhOVFUwWHpBd00xODNOVEJYZURjMU1FZ3w2NTI1MjQwYjU5OTZhODdlZTEwMTg2MWMyMzdlOGQzY2M0YmEyN2RlODgzMWI4ZTJiYTk5ZGUwMjBlN2FkMDI0"
      },
      {
        type: "lavadora",
        name: "Lavadora LG semiautomática",
        specs: "Superior 15 Kilos",
        img: "https://www.alkosto.com/medias/8806096035610-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjY2MHxpbWFnZS93ZWJwfGFHSmhMMmczTXk4eE5EUXpNRFkzT0RNNE5EWTNNQzg0T0RBMk1EazJNRE0xTmpFd1h6QXdNVjgzTlRCWGVEYzFNRWd8ZDExMTdlNTViNTg2ZDA5NTc4MWU3YjkyNGFhYmNlMTFjNTM2NTg2YzE4YTUyZmE5OTIxZjAwMmViMDhhNjZiYg"
      },
      {
        type: "freidora",
        name: "Freidora de Aire Kalley ",
        specs: "7.5 Litros",
        img: "https://www.alkosto.com/medias/7705946474665-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTc4OHxpbWFnZS93ZWJwfGFHTmxMMmhsWVM4eE5UVXdNamMxTURJMU16QTROaTgzTnpBMU9UUTJORGMwTmpZMVh6QXdNVjgzTlRCWGVEYzFNRWd8Yzg5YTNjODJmZGJhODU0MzZhZjI2ZjM0YjIyNzI3ZDYxODVlNjRkNzc0NjU3NjlhMmJkNTZkNWUwYjg1MDdkZA"
      },
      {
        type: "estufa",
        name: "Estufa de mesa ABBA",
        specs: "4 puestos Gas Propano",
        img: "https://www.alkosto.com/medias/7706060001263-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0NDUxNnxpbWFnZS93ZWJwfGFESmhMMmc0WVM4eE5USXlOREEzTlRneE1qZzVOQzgzTnpBMk1EWXdNREF4TWpZelh6QXdNVjgzTlRCWGVEYzFNRWd8OGQzYmJkODkxZjY1ODQyYTE4YzY4Njc4MTVhNzYwNDJhOTY3ZDcwZDkxYTM3OWIzMDk2M2YzMjljM2JjYmFlZQ"
      },
      {
        type: "estufa",
        name: "Estufa con gabinete Haceb",
        specs: "4 puestos Gas Propano",
        img: "https://hacebco.vtexassets.com/arquivos/ids/179504-1600-1600?v=638762073218600000&width=1600&height=1600&aspect=true"
      },
      {
        type: "parlante",
        name: "Barra de Sonido KALLEY K-ABS120W",
        specs: "Con bajo",
        img: "https://www.alkosto.com/medias/7705946780063-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3ODA2fGltYWdlL3dlYnB8YUdReUwyZ3dNUzh4TkRNd016QTVNRE0wTXprMk5pODNOekExT1RRMk56Z3dNRFl6WHpBd01WODNOVEJYZURjMU1FZ3xkOWUzNTRjNmY3NDk4MzIxZTA3YzkzYTY4YWVkNTY0N2UzYWEwMGQ1ZDJmNzlmOTIxMDIzNWVjZGMyMGUyMmUw"
      },
      {
        type: "nevera",
        name: "Nevera Frost Challenger ",
        specs: "256 Litros Titanium CR256",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_833009-MLA54433022991_032023-F.webp"
      },
      {
        type: "pc",
        name: "Impresora Epson L1250 Ecotank Color Negro",
        specs: "Impresión doble faz manual",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_799465-MLA100005049343_112025-F.webp"
      },
      {
        type: "nevera",
        name: "Congelador",
        specs: "142 Litros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_654562-MLU72628556722_112023-F.webp"
      },
      {
        type: "tv",
        name: "Televisor Smart Google Tv Challenger",
        specs: "Tamaños desde 32'' / 40'' / 43'' / 65''",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_946545-MLA97804172538_112025-F.webp"
      },
      {
        type: "lavadora",
        name: "Lavadora 7kg Semiautomática ",
        specs: "White Westinghouse",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_869082-MLA96140580265_102025-F.webp"
      },
      {
        type: "lavadora",
        name: "Lavadora Digital Kalley",
        specs: "Desde 14Kg / 16kg / 18kg",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_941066-MLA99918821317_112025-F.webp"
      },
      {
        type: "parlante",
        name: "Parlante Jbl Boombox 3",
        specs: "portátil con bluetooth waterproof",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_617217-MLA99955369773_112025-F.webp"
      },
      {
        type: "parlante",
        name: "Parlante JBL Xtreme 4",
        specs: "portátil con bluetooth waterproof",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_649013-MLU76126114395_052024-F.webp"
      },
      {
        type: "lavadora",
        name: "Lavadora Semiautomatica Doble Tina 7 Kg",
        specs: "Cw4707 Challenger Color Blanco",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_907768-MLA84847876731_052025-F.webp"
      },
      {
        type: "nevera",
        name: "Nevera CR No Frost Challenger",
        specs: "317 Litros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_914112-MLA94465339598_102025-F.webp"
      },
      {
        type: "parlante",
        name: "Barra De Sonido 120W",
        specs: "Configuración de canales 2.0 para sonido estéreo",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_652372-MLA84569528155_052025-F.webp"
      },
      {
        type: "nevera",
        name: "Minibar Kalley",
        specs: "93 Litros",
        img: "https://www.alkosto.com/medias/7705946916370-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MDg2fGltYWdlL3dlYnB8YUROaUwyZzVaQzh4TkRNeU1qWXlOelkzTkRFME1pODNOekExT1RRMk9URTJNemN3WHpBd01WODNOVEJYZURjMU1FZ3xlNTBlY2JkY2IxMzVkNjMxMmQ1NjAyNzAzNDY2MDE4ZWI2MzNmYzY1OTNiYjVmOTIzMTUzMDJmNTVmNjA0MTg2"
      },
      {
        type: "parlante",
        name: "Parlante Kalley",
        specs: "300W / 400W",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_982244-MLA99899810527_112025-F.webp"
      },
      {
        type: "pc",
        name: "Consola Sony Playstation 5 ",
        specs: "Consola + mando ",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_662821-MLA99471839620_112025-F.webp"
      },
      {
        type: "celular",
        name: "Zte Blade A35e",
        specs: "64GB / 2GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_895805-MCO103145506883_122025-F.webp"
      },
            {
        type: "celular",
        name: "ZTE Blade A55",
        specs: "128GB / 4GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_883059-MLA99522537322_122025-F.webp"
      },
            {
        type: "celular",
        name: "Zte Blade A56 Pro",
        specs: "128GB / 4GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_945803-MCO96075812820_102025-F.webp"
      },
            {
        type: "celular",
        name: "ZTE BLADE V70 MAX 4",
        specs: "256GB / 4GB RAM",
        img: "https://media.falabella.com/falabellaCO/148198532_01/w=1200,h=1200,fit=pad"
      },
            {
        type: "celular",
        name: "ZTE NUBIA V80 PRO 8",
        specs: "256GB / 8GB RAM",
        img: "https://media.falabella.com/falabellaCO/73505040_1/w=1200,h=1200,fit=pad"
      },
            {
        type: "celular",
        name: "INFINIX HOT 60i 5G",
        specs: "256GB / 8GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_896076-MLA97003586246_112025-F.webp"
      },
      {
        type: "estufa",
        name: "Estufa Romero Torre Haceb",
        specs: "Gas Natural Negra Color Negro",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_775303-MLA99388472810_112025-F.webp"
      },
      {
        type: "portatil",
        name: "Portatil ACER AL",
        specs: "512GB / 8G RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_862780-MLA99901169685_112025-F.webp"
      },
      {
        type: "tv",
        name: "TV Kalley Roku",
        specs: "32'' / 40''",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_675172-MLA99604974112_122025-F.webp"
      },
      {
        type: "lavadora",
        name: "Lavadora Whirlpool",
        specs: "Superior 16kg",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_838657-MLA99450313660_112025-F.webp"
      },
      {
        type: "lavadora",
        name: "Lavadora LG Carga Superior",
        specs: "8kg/17lbs",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_954473-MLA84547998656_052025-F.webp"
      },
      {
        type: "nevera",
        name: "Nevera Whirlpool",
        specs: "264 Litros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_695708-MLA99455268688_112025-F.webp"
      },
      {
        type: "scooter",
        name: "Motos Electricas",
        specs: "Huyser / Trimotor Beetlee",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_924237-MCO88637392876_072025-F.webp"
      },
      {
        type: "hogar",
        name: "Licuadora Oster Classic",
        specs: "3 velocidades 1.25L cromada",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_618459-MLA99961601043_112025-F.webp"
      },
      {
        type: "hogar",
        name: "Ventilador Samurai Air Maxx",
        specs: "Ventilador de 3 velocidades",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_893414-MLA99903478741_112025-F.webp"
      },
      {
        type: "hogar",
        name: "Plancha De Ropa Black+decker",
        specs: "Potencia de 1.2 kW para un calentamiento rápido y eficiente",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_620412-MLA99972202015_112025-F.webp"
      },
      {
        type: "hogar",
        name: "Cepillo De Aire Remington",
        specs: "Cabello Húmedo Y Seco",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_751848-MLA99993105261_112025-F.webp"
      },
      {
        type: "celular",
        name: "Apple Watch",
        specs: "Smartwatch",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_944969-MLA99967140381_112025-F.webp"
      },
      {
        type: "hogar",
        name: "Olla a presion Inox",
        specs: "Acero Inox Home Elements Color Plateado",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_801584-MLA99546737778_122025-F.webp"
      },
      {
        type: "hogar",
        name: "Plancha de cabello Remington",
        specs: "Bloqueo de placas, Turbo, Bloqueo de temperatura, Cuidado iónico",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_948692-MLA99463396266_112025-F.webp"
      },
      {
        type: "hogar",
        name: "Hidrolavadora Kalley",
        specs: "Potencia de 1.4 kW que asegura un rendimiento eficiente en la limpieza",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_891422-MLA99458991404_112025-F.webp"
      },
      {
        type: "freidora",
        name: "Horno Microondas Kalley",
        specs: "6 programas la función indicada para tus comidas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_909655-MLA51562098840_092022-F.webp"
      },
            {
        type: "scooter",
        name: "Scooter Xiaomi elite ",
        specs: "¡Precio especial de super oferta!",
        img: "https://i02.appmifile.com/699_item_co/25/03/2025/cc687cc5e593926a1db971e15a2ceda1.png?thumb=1&f=webp&q=85"
      },
            {
        type: "scooter",
        name: "Bicicleta Forza RIN 29",
        specs: "Color azul",
        img: "https://electrojaponesa.vtexassets.com/arquivos/ids/203321-1200-auto?v=638902898708300000&width=1200&height=auto&aspect=true"
      }
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

 ${product.name}
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