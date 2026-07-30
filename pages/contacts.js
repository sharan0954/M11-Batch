export class contactClass{
    constructor(page){

        this.page=page
        this.contactMenu=page.getByRole('link',{name:'Contacts'})
        this.createContactbtn=page.getByRole('img',{name:'Create Contact...'})
        this.selectDropDown=page.locator('//select[@name="salutationtype"]')
        this.firstName=page.locator('//input[@name="firstname"]')
        this.lastName=page.locator('//input[@name="lastname"]')


        this.leadSourceDropdown=page.locator('//select[@name="leadsource"]')
        this.notifyOwnerCheckbox=page.locator('//input[@name="notify_owner"]')
        this.contactImageUpload=page.locator('//input[@name="imagename"]')
        this.saveBtn=page.locator('//input[@title="Save [Alt+S]"]').nth(0)

    }

       async openContacts(){
        await this.contactMenu.click()

       }

       async clickCreateContact(){
        await this.createContactbtn.click()

       }

       async enterContactDetails(firstName,lastName,){
        await this.selectDropDown.selectOption
       }

}