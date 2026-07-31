import{expect,test} from '@playwright/test'
import login from '../../testdata/login.json'
import leads from '../../testdata/leads.json'
import { loginClass } from '../../pages/login'
import { url } from 'node:inspector'
import { leadsClass } from '../../pages/leads'

test('Lead Module', async ({page}) => {
    //!Login to the Application
    await page.goto('url')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating a Lead
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Laxmi')
    await page.locator('//input[@name="lastname"]').fill('Kumar')
    let lastname=await page.locator('//input[@name="lastname"]').inputValue()

    await page.locator('//input[@name="company"]').fill('HCL')
    await page.locator('//input[@name="designation"]').fill('Admin')
    await page.locator('//select[@name="leadsource"]').selectOption({value:'Cold Call'})
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Last Name"]').textContent()
   if(lastname===valid)
   {
    console.log('Lead is created');
    
   }
   else{
    console.log('Lead is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})


test('ddt',async ({page}) => {
    test.slow()
    
    //! login to the application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! creating the lead
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
    await page.locator('//input[@name="firstname"]').fill(leads.firstname)
    await page.locator('//input[@name="lastname"]').fill(leads.lastname)
  await page.waitForTimeout(30000)
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill(leads.company_name)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //!validation
    // let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
    // if(lastname===valid){
    //     console.log('lead is created');
    // }else{
    //     console.log('lead is not created');
    // }

    await expect(page.locator('//span[@id="dtlview_Last Name"]')).toContainText(lastname)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

}) 

test('POM',async ({page}) => {
  let l=new loginClass(page)
  await page.goto(login.url)
  await l.username.fill(login.username)
  await l.password.fill(login.password)
  await l.button.click()
})

test('POM2',async ({page}) => {
let l=new loginClass(page)
await l.launchUrl(login.url)
await l.details(login.username,login.password)
  
})

test('Leads Page',async ({page}) => {
  let lead=new leadsClass(page)
  await lead.openLeads()
  await lead.clickCreateLead()
  await lead.enterLeadDetails()
  
  
});