const categories = {
    "Tecnología": ["Computadores", "Televisores", "Audio", "Vídeo", "Impresión", "Cámaras"],
    "Electrodomésticos": ["Climatización", "Refrigeración", "Lavadoras-Secadoras"],
    "Celulares": ["Celulares", "Tabletas", "Smartwatchs"],
    "Hogar": ["Salas", "Comedor", "Cocina", "Baño"]
}

const products = Object.keys(categories)
    .flatMap(category => categories[category].flatMap(subcategory => require(`./data/${category}-${subcategory}.json`)))
    .sort((a, b) => a.id - b.id)

const featuredProducts = products.sort((a, b) => {
    if (b.reviews !== a.reviews) {
        return b.reviews - a.reviews
    }
    return b.starts - a.starts
}).slice(0, 12).sort((a, b) => a.id - b.id)

const filters = require('./data/filters.json')

const promotionalImages = [
    { id: 0, imageUrl: 'https://i.postimg.cc/0NZpjkw7/prom1.png', description: 'Imagen promocional 1' },
    { id: 1, imageUrl: 'https://i.postimg.cc/Dz7r7J82/prom2.png', description: 'Imagen promocional 2' }
]

module.exports = { products, filters, featuredProducts, promotionalImages }