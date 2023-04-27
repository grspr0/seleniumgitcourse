

const Page = require('./page');

class ProductPage extends Page {

    get btnMuscleBooster () {
        return $('[href="/products/0"]');
    }

    get btnFitCoach () {
        return $(`[href="/products/1"]`);
    }

    get btnYogaGo () {
        return $('[href="/products/2"]');
    }

    get btnFastEasy () {
        return $('[href="/products/3"]');
    }

    get btnOmo () {
        return $('[href="/products/4"]');
    }

    get deepLink () {
        return $('[alt="appStore"]');
    }

    async openMuscleBoosterLanding () {
        await this.btnMuscleBooster.click();
    }

    async openFitCoachLanding () {
        await this.btnFitCoach.click();
    }

    async openYogaLanding () {
        await this.btnYogaGo.click();
    }

    async openFastEasyLanding () {
        await this.btnFastEasy.click();
    }

    async openOmoLanding () {
        await this.btnOmo.click();
    }

    open () {
        return super.open('0');
    }
}

module.exports = new ProductPage();
