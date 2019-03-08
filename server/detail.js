const request = require('request'),
  errorApi = require('./error')

module.exports = function(req, res) {
  const id = req.params.id;
  request(`https://api.mercadolibre.com/items/${id}`, function(error, response, body) {
    if (!error) {
      const data = JSON.parse(body)
      if (!data.error) {
        const amount = Math.floor(data.price),
          decimals = +(data.price % 1).toFixed(2).substring(2),
          picture = data.pictures.length ? data.pictures[0].secure_url : '',
          category = data.category_id
        let detail = {
          author: {
            name: 'Hugo',
            lastname: 'Flotts'
          },
          categories: [],
          item: {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount,
              decimals
            },
            picture: picture,
            condition: data.condition,
            free_shipping: data.shipping ? data.shipping.free_shipping : false,
            sold_quantity: data.sold_quantity,
            description: ''
          }
        }
        request(`https://api.mercadolibre.com/items/${id}/description`, function(error, response, body) {
          if (!error) {
            const data = JSON.parse(body)
            if (!data.error) {
              detail.item.description = data.plain_text
            }
            request(`https://api.mercadolibre.com/categories/${category}`, function(error, response, body) {
              if (!error) {
                const data = JSON.parse(body);
                if (!data.error) {
                  detail.categories = categories = data.path_from_root.map((category) => { return category.name });
                }
                res.send(detail)
              } else {
                res.send(errorApi)
              }
            })
          } else {
            res.send(errorApi)
          }
        })
      } else {
        res.send(errorApi)
      }
    } else {
      res.send(errorApi)
    }
  })
}