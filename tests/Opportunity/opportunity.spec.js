import{test} from '@playwright/test'
import login from '../../testData/login.json'
import leads from '../../testData/opportunity.json'

test('Opportunity Module', async ({page}) => {
    //!Login to the Application
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating an Opportunity
    await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
    await page.getByRole('img',{name:'Create Opportunity...'}).click()
    await page.locator('//input[@name="potentialname"]').fill('Opp_1')
    let opp=await page.locator('//input[@name="potentialname"]').inputValue()
    await page.locator('#related_to_type').selectOption({value:'Contacts'})
    
    let [popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await popup.getByRole('link',{name:'Rohit Sharma'}).click()
    console.log(popup.url());
    await page.bringToFront()


    await page.locator('//input[@value="T"]').check()

    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
   if(opp===valid)
   {
    console.log('Opportinity is created');
    
   }
   else{
    console.log('Opportunity is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})

test.only('DTT',async ({page}) => {

    //!Login to the Application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating an Opportunity
    await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
    await page.getByRole('img',{name:'Create Opportunity...'}).click()
    await page.locator('//input[@name="potentialname"]').fill('Opportunity')
    let opp=await page.locator('//input[@name="potentialname"]').inputValue()
    await page.locator('#related_to_type').selectOption({value:'Contacts'})
    
    let [popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await popup.getByRole('link',{name:'Rohit Sharma'}).click()
    console.log(popup.url());
    await page.bringToFront()


    await page.locator('//input[@value="T"]').check()

    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    

   //!Validation
//    let valid=await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
//    if(opp===valid)
//    {
//     console.log('Opportinity is created');
    
//    }
//    else{
//     console.log('Opportunity is not created');
    
//    }

   await expect(page.locator('//span[@id="dtlview_Opportunity Name')).toContainText(lastname)

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()

    
})