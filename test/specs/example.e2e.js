const ProductPage = require('../pageobjects/product.page')

describe('My Landing', () => {
    it('FitCoach should have deeplink', async () => {
        await ProductPage.open()
        await ProductPage.openFitCoachLanding()
        await expect(ProductPage.deepLink).toBeExisting()

    })

    it('YogaGo should have deeplink', async () => {
        await ProductPage.open()
        await ProductPage.openYogaLanding()
        await expect(ProductPage.deepLink).toBeExisting()

    })
})


