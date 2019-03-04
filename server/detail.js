module.exports = function(req, res) {
    const id = req.params.id
    console.log(`Detalle de: ${id}`)

    const detail = {
        author: {
            name: "Hugo",
            lastname: "Flotts"
        },
        item: {
            id: "MLA721960793",
            title: "Adaptador Cargador Usb A 12v Auto Android Iphone 3 Puertos",
            price: {
                currency: "ARS",
                amount: 70,
                decimals: 0
            },
            picture: "http://mla-s2-p.mlstatic.com/925800-MLA27268865134_042018-I.jpg",
            condition: "new",
            free_shipping: false,
            sold_quantity: 5,
            description: "ESPECIFICACIONES: - Adaptador/Cargador Usb A 12v Auto - Permite cargar tu Smartphone, Ipod, Iphone, Samsung desde tu Auto. - 3 puertos de conexión (2,1a; 2a y 1a) - Colores: Blanco c/ azul, dorado o verde. CONTAMOS CON DOS OPCIONES DE RETIRO: - NUESTRO LOCAL UBICADO EN MARTINEZ SOBRE LA CALLE EDISON (ENTRE FLEMING Y SANTA FE) - POR RAMOS MEJIA A 7 CUADRAS DE LA ESTACION, PREVIA COORDINACION. * CONTAMOS CON PRECIOS MAYORISTAS Y MINORISTAS * * QUERI ACCESORIOS *"
        }
    }
    res.send(detail)
}