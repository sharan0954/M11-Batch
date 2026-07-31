import { expect } from "@playwright/test";

export class SalesOrderPage {
    constructor(page) {
        this.page = page;

        this.moreMenu = page.locator('text=More').first();
        this.soModule = page.locator('text=Sales Order').first();
        this.createSOBtn = page.locator('img[title="Create Sales Order..."]');

        // Customer Information
        this.subject = page.locator('[name="subject"]');
        this.customerNo = page.locator('[name="customerno"]');
        this.quoteName = page.locator('[name="quote_id"]');
        this.contactName = page.locator('[name="contact_id"]');
        this.accountName = page.locator('[name="account_id"]');

        // Dates
        this.dueDate = page.locator('[name="duedate"]');
        this.purchaseOrder = page.locator('#vtiger_purchaseorder');

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

        // Description
        this.description = page.locator('[name="description"]');

        // Buttons
        this.addProduct = page.locator('input[value="Add Product"]');
        this.addService = page.locator('input[value="Add Service"]');
        this.saveButton = page.locator('input[title="Save"]');
        this.cancelButton = page.locator('input[title="Cancel"]');
    }

     async openSalesOrderModule() {
        await this.moreMenu.hover();
        await this.soModule.click();
    }

    async clickCreateSalesOrder() { 
        await this.createSOBtn.click();
    }

    async enterSubject(subject) {
        await this.subject.fill(subject);
    }

    async enterCustomerNo(customerNo) {
        await this.customerNo.fill(customerNo);
    }

    async enterDueDate(date) {
        await this.dueDate.fill(date);
    }

    async enterPurchaseOrder(po) {
        await this.purchaseOrder.fill(po);
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

    async enterDescription(description) {
        await this.description.fill(description);
    }

    async clickAddProduct() {
        await this.addProduct.click();
    }

    async clickAddService() {
        await this.addService.click();
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async createSalesOrder(data) {
        await this.enterSubject(data.subject);
        await this.enterCustomerNo(data.customerNo);
        await this.enterDueDate(data.dueDate);
        await this.enterPurchaseOrder(data.purchaseOrder);
        await this.enterDescription(data.description);
        await this.clickSave();
    }
}