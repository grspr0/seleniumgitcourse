
module.exports = class Page {

    open (path) {
        return browser.url(`https://health-fitness.io/products/${path}`)
    }
}
