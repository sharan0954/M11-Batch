import { expect } from "@playwright/test";

export class invoiceClass {
    constructor(page) {
        this.page = page;

        // Navigation
        this.moreMenu = page.locator('text=More');
        this.invoiceModule = page.locator('text=Invoice');
        this.createInvoiceBtn = page.locator('img[title="Create Invoice..."]');

        // Invoice Information
        this.subject = page.locator('input[name="subject"]');
        this.customerNo = page.locator('input[name="customerno"]');

        this.organizationLookup = page.locator('//img[@title="Select"]');

        this.invoiceDate = page.locator('input[name="invoicedate"]');
        this.dueDate = page.locator('input[name="duedate"]');

        this.purchaseOrder = page.locator('input[name="purchaseorder"]');

        this.salesCommission = page.locator('input[name="salescommission"]');

        this.status = page.locator('select[name="invoicestatus"]');

        // Billing Address
        this.billingAddress = page.locator('textarea[name="bill_street"]');
        this.billingCity = page.locator('input[name="bill_city"]');
        this.billingState = page.locator('input[name="bill_state"]');
        this.billingCode = page.locator('input[name="bill_code"]');
        this.billingCountry = page.locator('input[name="bill_country"]');

        // Shipping Address
        this.shippingAddress = page.locator('textarea[name="ship_street"]');
        this.shippingCity = page.locator('input[name="ship_city"]');
        this.shippingState = page.locator('input[name="ship_state"]');
        this.shippingCode = page.locator('input[name="ship_code"]');
        this.shippingCountry = page.locator('input[name="ship_country"]');

        // Description
        this.description = page.locator('textarea[name="description"]');

        // Product Section
        this.addProductBtn = page.locator('input[value="Add Product"]');

        // Save
        this.saveBtn = page.locator('//input[@title="Save [Alt+S]"]');
    }

    async openInvoiceModule() {
        await this.moreMenu.hover();
        await this.invoiceModule.click();
    }

    async clickCreateInvoice() {
        await this.createInvoiceBtn.click();
    }

    async enterSubject(subject) {
        await this.subject.fill(subject);
    }

    async enterCustomerNo(customerNo) {
        await this.customerNo.fill(customerNo);
    }

    async enterInvoiceDate(date) {
        await this.invoiceDate.fill(date);
    }

    async enterDueDate(date) {
        await this.dueDate.fill(date);
    }

    async enterPurchaseOrder(po) {
        await this.purchaseOrder.fill(po);
    }

    async enterSalesCommission(commission) {
        await this.salesCommission.fill(commission);
    }

    async selectStatus(status) {
        await this.status.selectOption({ label: status });
    }

    async enterBillingAddress(address, city, state, code, country) {
        await this.billingAddress.fill(address);
        await this.billingCity.fill(city);
        await this.billingState.fill(state);
        await this.billingCode.fill(code);
        await this.billingCountry.fill(country);
    }

    async enterShippingAddress(address, city, state, code, country) {
        await this.shippingAddress.fill(address);
        await this.shippingCity.fill(city);
        await this.shippingState.fill(state);
        await this.shippingCode.fill(code);
        await this.shippingCountry.fill(country);
    }

    async enterDescription(description) {
        await this.description.fill(description);
    }

    async clickAddProduct() {
        await this.addProductBtn.click();
    }

    async saveInvoice() {
        await this.saveBtn.click();
    }
}