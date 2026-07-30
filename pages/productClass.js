import { expect } from "@playwright/test";

export class productClass {
    constructor(page) {
        this.page = page;

        // Navigation
        this.productsTab = page.locator('a:text("Products")');
        this.createProductBtn = page.locator('img[title="Create Product..."]');

        // Product Information
        this.productName = page.locator('input[name="productname"]');
        this.productActive = page.locator('input[name="discontinued"]');
        this.productCategory = page.locator('select[name="productcategory"]');
        this.manufacturer = page.locator('select[name="manufacturer"]');
        this.vendorLookup = page.locator('//img[@title="Select"]');

        this.salesStartDate = page.locator('input[name="sales_start_date"]');
        this.salesEndDate = page.locator('input[name="sales_end_date"]');
        this.supportStartDate = page.locator('input[name="start_date"]');
        this.supportEndDate = page.locator('input[name="expiry_date"]');

        this.website = page.locator('input[name="website"]');

        // Pricing
        this.unitPrice = page.locator('input[name="unit_price"]');

        // Stock
        this.qtyInStock = page.locator('input[name="qtyinstock"]');

        // Image
        this.productImage = page.locator('input[name="imagename"]');

        // Description
        this.description = page.locator('textarea[name="description"]');

        // Save
        this.saveBtn = page.locator('//input[@title="Save [Alt+S]"]').first();
    }

    async openProducts() {
        await this.productsTab.click();
    }

    async clickCreateProduct() {
        await this.createProductBtn.click();
    }

    async enterProductName(name) {
        await this.productName.fill(name);
    }

    async selectCategory(category) {
        await this.productCategory.selectOption({ label: category });
    }

    async selectManufacturer(manufacturer) {
        await this.manufacturer.selectOption({ label: manufacturer });
    }

    async enterSalesStartDate(date) {
        await this.salesStartDate.fill(date);
    }

    async enterSalesEndDate(date) {
        await this.salesEndDate.fill(date);
    }

    async enterSupportStartDate(date) {
        await this.supportStartDate.fill(date);
    }

    async enterSupportEndDate(date) {
        await this.supportEndDate.fill(date);
    }

    async enterWebsite(url) {
        await this.website.fill(url);
    }

    async enterUnitPrice(price) {
        await this.unitPrice.fill(price);
    }

    async enterQtyInStock(qty) {
        await this.qtyInStock.fill(qty);
    }

    async uploadProductImage(path) {
        await this.productImage.setInputFiles(path);
    }

    async enterDescription(desc) {
        await this.description.fill(desc);
    }

    async saveProduct() {
        await this.saveBtn.click();
    }
}