const data = [
    {
        id: 1,
        title: "Camiseta",
        price: 20
    },
    {
        id: 2,
        title: "Calça",
        price: 35
    },
    {
        id: 3,
        title: "Boné",
        price: 10
    },
]

function getProducts(){
    return data
}

function getProduct(id){
    id = parseInt(id)
    return data.find(d => d.id === id);
}

module.exports = {getProducts, getProduct}