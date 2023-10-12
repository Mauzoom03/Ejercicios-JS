const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];
let totalSales = 0;

for (const product of products) {
    totalSales += product.sellCount;
}

const averageSales = totalSales / products.length;

console.log("Media de ventas: " + averageSales);

