function groupCategories(categories) {
    const categoryCount = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    const sortedCategories = Object.entries(categoryCount)
        .sort((a, b) => b[1] - a[1]) 
        .map(entry => entry[0]); 
    return { categoryCount, sortedCategories };
}
let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let res = groupCategories(categories);
console.log(res.categoryCount);
console.log(res.sortedCategories);
