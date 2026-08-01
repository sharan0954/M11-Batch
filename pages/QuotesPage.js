import { test, expect } from '@playwright/test';

export class QuotesPage {
    constructor(page) {
        this.page = page;


        this.moreMenu = page.locator('text=More').first();
        this.quotesModule = page.locator('text=Quotes').first();
        this.createQuotesBtn = page.locator('img[title="Create Quote..."]');

        // Quote Information
        this.subject = page.locator('[name="subject"]');
        this.validTill = page.locator('[name="validtill"]');
        this.quoteStage = page.locator('[name="quotestage"]');
        this.carrier = page.locator('[name="carrier"]');
        this.inventoryManager = page.locator('[name="inventorymanager"]');

        // Lookup fields
        this.organizationLookup = page.locator('img[title="Select"] >> nth=0');
        this.contactLookup = page.locator('img[title="Select"] >> nth=1');

        // Billing Address
        this.billingStreet = page.locator('[name="bill_street"]');
        this.billingCity = page.locator('[name="bill_city"]');
        this.billingState = page.locator('[name="bill_state"]');
        this.billingCode = page.locator('[name="bill_code"]');
        this.billingCountry = page.locator('[name="bill_country"]');

        // Shipping Address
        this.shippingStreet = page.locator('[name="ship_street"]');
        this.shippingCity = page.locator('[name="ship_city"]');
        this.shippingState = page.locator('[name="ship_state"]');
        this.shippingCode = page.locator('[name="ship_code"]');
        this.shippingCountry = page.locator('[name="ship_country"]');

        // Terms & Conditions
        this.termsAndConditions = page.locator('[name="terms_conditions"]');

        // Description
        this.description = page.locator('[name="description"]');

        // Product section
        this.addProductButton = page.locator('input[value="Add Product"]');
        this.addServiceButton = page.locator('input[value="Add Service"]');

        // Save / Cancel
        this.saveButton = page.locator('input[title="Save [Alt+S]"]').first();
        this.cancelButton = page.locator('input[title="Cancel"]').first();
    }

    async clickOnMoreMenu(){
        await this.moreMenu.click()

    }

    async clickOnQuotes(){
        await this.quotesModule.click()
    }

    async clickOnCreateQuotes(){
        await this.createQuotesBtn.click()
    }

    async enterSubject(subject) {
        await this.subject.fill(subject);
    }

    async enterValidTill(date) {
        await this.validTill.fill(date);
    }

    async selectQuoteStage(stage) {
        await this.quoteStage.selectOption({ label: stage });
    }

    async selectCarrier(carrier) {
        await this.carrier.selectOption({ label: carrier });
    }

    async enterBillingAddress(street, city, state, code, country) {
        await this.billingStreet.fill(street);
        await this.billingCity.fill(city);
        await this.billingState.fill(state);
        await this.billingCode.fill(code);
        await this.billingCountry.fill(country);
    }

    async enterShippingAddress(street, city, state, code, country) {
        await this.shippingStreet.fill(street);
        await this.shippingCity.fill(city);
        await this.shippingState.fill(state);
        await this.shippingCode.fill(code);
        await this.shippingCountry.fill(country);
    }

    async enterTerms(text) {
        await this.termsAndConditions.fill(text);
    }

    async enterDescription(text) {
        await this.description.fill(text);
    }

    async clickAddProduct() {
        await this.addProductButton.click();
    }

    async clickAddService() {
        await this.addServiceButton.click();
    }

    async clickSave() {
        await this.saveButton.waitFor({ state: 'visible' });
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async createQuote(data) {
        await this.enterSubject(data.subject);
        await this.enterValidTill(data.validTill);
        await this.selectQuoteStage(data.quoteStage);
        await this.enterDescription(data.description);
        await this.clickSave();
    }
}

module.exports = QuotesPage;