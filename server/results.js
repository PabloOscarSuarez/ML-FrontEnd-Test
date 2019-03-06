const request = require('request'),
    errorApi = require('./error')

module.exports = function(req, res) {
    const query = req.query.q || ''
    request(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body)
                // console.log(data)
                //Categorias
            if (data.results) {
                var categories = []

                if (data.filters[0] && data.filters[0].values[0]) {
                    categories = data.filters[0].values[0].path_from_root.map(category => category.name)

                    // categories.id = data.filters[0].values[0].path_from_root.map(category => category.id)
                }

                // console.log(categories);
                // console.log(data.filters[0])
                // console.log(data.filters[0]);
                // console.log(data.filters[0].values[0]);
                // //ID CATEGORIA
                // console.log(data.filters[0].values[0].path_from_root[0].id);

                //Items
                var items = data.results.slice(0, 4)
                items = items.map(item => {
                    const amount = Math.floor(item.price),
                        decimals = +(item.price % 1).toFixed(2).substring(2)

                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: amount,
                            decimals: decimals
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping ? item.shipping.free_shipping : false,
                        address: item.address ? item.address.state_name : ''
                    }
                })

                //Lista de resultados
                const results = {
                    author: {
                        name: 'Hugo',
                        lastname: 'Flotts'
                    },
                    categories: categories,
                    items: items
                }

                res.send(results)
            }
        } else {
            res.send(errorApi)
        }
    })
}