module.exports = function(req, res) {
    const results = {
        author: {
            name: 'Hugo',
            lastname: 'Flotts'
        },
        categories: ["Electrónica, Audio y Video", "Audio Portátil  y Radios", "Deportes y Fitness", "Accesorios para Vehículos"],
        items: [{
                id: "MLA721960793",
                title: "Adaptador Cargador Usb A 12v Auto Android Iphone 3 Puertos",
                price: {
                    currency: "ARS",
                    amount: 70,
                    decimals: 0
                },
                picture: "http://mla-s2-p.mlstatic.com/925800-MLA27268865134_042018-I.jpg",
                condition: "new",
                free_shipping: false
            },
            {
                id: "MLA661715984",
                title: "Luz Bicicleta Delantera Y Trasera En Kit Con Pilas",
                price: {
                    currency: "ARS",
                    amount: 90.25,
                    decimals: 2
                },
                picture: "http://mla-s1-p.mlstatic.com/819011-MLA27384794616_052018-I.jpg",
                condition: "new",
                free_shipping: false
            }
        ]
    }
    res.send(results);
}