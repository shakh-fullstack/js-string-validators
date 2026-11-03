//about .includes() methods:
function searchProducts(products, query) {
  const cleanQuery = query.toLowerCase().trim();
  return products.filter((product) => {
    const hasInTitle = product.title.toLowerCase().includes(cleanQuery);
    const hasInCategory = product.category.toLowerCase().includes(cleanQuery);
    return hasInTitle || hasInCategory;
  });
}

const items = [
  { id: 1, title: "iphone 15 Pro", category: "Smartphones" },
  { id: 2, title: "Macbook Air M2", category: "Laptops" },
];

console.log(searchProducts(items, "LaPtOP"));
