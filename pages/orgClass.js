
export class orgClass{
    constructor(page){

     this.orgLink=page.getByRole('link',{name:'Organizations'})
     this.createOrg=page.locator('//img[@title="Create Organization..."]')
     this.orgName=page.locator('//input[@name="accountname"]')
     this.noOfEmp=page.locator('//input[@name="employees"]')
     this.industry =page.locator('//select[@name="industry"]')
     this.email=page.locator('//input[@name="emailoptout"]')

     this.assignTo=page.locator('//input[@value="T"]')
     this.saveBtn=page.locator('(//input[@title="Save [Alt+S]"])[1]')
       
    }

      async openOrg() {
        await this.orgLink.click()
       }

       async clickCreateOrg() {
        await this.createOrg.click();
    }

     async enterOrgDetails(orgName) {
        await this.orgName.fill(orgName)
    
    }

    
}