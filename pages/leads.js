export class leadsClass{
    constructor(page){
        this.page=page;
        this.leadMenu=page.getByRole('link',{name:'Leads'})
        this.createLeadBtn = page.getByRole('img',{name:'Create Lead...'})
        this.selectOption=page.locator('//select[@name="salutationtype"]')
        this.firstName=page.locator('//input[@name="firstname"]')
        this.lastName=page.locator('//input[@name="lastname"]')
        this.company=page.locator('//input[@name="company"]')
        this.saveButton=page.locator('(//input[@title="Save [Alt+S]"])[1]')
        
    }

          async openLeads() {
        await this.leadMenu.click();
       }

       async clickCreateLead() {
        await this.createLeadBtn.click();
    }

     async enterLeadDetails(firstName, lastName, company) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
    
    }

}
