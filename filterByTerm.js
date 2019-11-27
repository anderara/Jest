function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i")
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(searchTerm);
    })
}

module.exports = {filterByTerm}