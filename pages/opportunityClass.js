import { expect } from "@playwright/test";

export class opportunityClass {
    constructor(page) {
        this.page = page;

        // Navigation
        this.opportunitiesTab = page.getByRole('link',{name:'OPPORTUNITIES'});
        this.createOpportunity = page.getByRole('img',{name:'Create Opportunity...'});

        // Form fields
        this.opportunityName = page.locator('//input[@name="potentialname"]')
        this.relatedToDropdown = page.locator('#related_to_type')
        this.selectOrganization = page.locator('//img[@title="Select"]');

        this.amount = page.locator('//input[@name="amount"]');
        this.expectedCloseDate = page.locator('//input[@name="closingdate"]');
        this.salesStage = page.locator('//select[@name="sales_stage"]');
        this.probability = page.locator('#probability');
        this.description = page.locator('//textarea[@name="description"]');

        this.saveButton = page.locator('//input[@title="Save [Alt+S]"]').first();
    }

    async openOpportunity() {
        await this.opportunitiesTab.click();
    }

    async clickCreateOpportunity() {
        await this.createOpportunity.click();
    }

    async enterOpportunityName(name) {
        await this.opportunityName.fill(name);
    }

    async selectRelatedToOrganization() {
        await this.relatedToDropdown.selectOption("Accounts");
    }

    async enterAmount(amount) {
        await this.amount.fill(amount);
    }

    async enterExpectedCloseDate(date) {
        await this.expectedCloseDate.fill(date);
    }

    async selectSalesStage(stage) {
        await this.salesStage.selectOption({ label: stage });
    }

    async enterProbability(probability) {
        await this.probability.fill(probability);
    }

    async enterDescription(desc) {
        await this.description.fill(desc);
    }

    async saveOpportunity() {
        await this.saveButton.click();
    }
}