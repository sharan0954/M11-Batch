import{test} from '@playwright/test'
import login from '../../testdata/login.json'


test('Contacts Module', async ({page}) => {
    //!Login to the Application
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating a Contacts
    await page.getByRole('link',{name:'Contacts'}).click()
    await page.getByRole('img',{name:'Create Contact...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Umesh')
    await page.locator('//input[@name="lastname"]').fill('Kumar')
    let lastname=await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('#jscal_trigger_birthday').click()
    //await page.getByRole('cell',{name:'23'}).click()

    // let date = 16;
    // // let month = "august"
    // let today = new Date();
    // //let date1 = today.getDate()
    // let month1 = today.toLocaleString('en-US',{month:'long'});
    let year = '1991'//today.getFullYear();

    // await page.locator(`//td[text()="${month1}, ${year}"]/ancestor::table//td[text()=${date}]`).click()

     let [popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await popup.getByRole('link',{name:'Infosys'}).click()
    console.log(popup.url());
    await page.bringToFront()

    await page.locator('//select[@name="leadsource"]').selectOption({value:'Word of mouth'})
    await page.locator('//input[@name="notify_owner"]').check()
    await page.locator('//input[@name="imagename"]').setInputFiles('C:/Users/ACER/Pictures/Overriding_Example.png')
    await page.locator('//input[@title="Save [Alt+S]"]').nth(0).click()


   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Last Name"]').textContent()
   if(lastname===valid)
   {
    console.log('Contact is created');
    
   }
   else{
    console.log('Contact is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})

test('DTT',async ({page}) => {
    //!Login to the Application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating a Contacts
    await page.getByRole('link',{name:'Contacts'}).click()
    await page.getByRole('img',{name:'Create Contact...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Umesh')
    await page.locator('//input[@name="lastname"]').fill('Kumar')
    let lastname=await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('#jscal_trigger_birthday').click()
    //await page.getByRole('cell',{name:'23'}).click()

    // let date = 16;
    // // let month = "august"
    // let today = new Date();
    // //let date1 = today.getDate()
    // let month1 = today.toLocaleString('en-US',{month:'long'});
    let year = '1991'//today.getFullYear();

    // await page.locator(`//td[text()="${month1}, ${year}"]/ancestor::table//td[text()=${date}]`).click()

     let [popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await popup.getByRole('link',{name:'Infosys'}).click()
    console.log(popup.url());
    await page.bringToFront()

    await page.locator('//select[@name="leadsource"]').selectOption({value:'Word of mouth'})
    await page.locator('//input[@name="notify_owner"]').check()
    await page.locator('//input[@name="imagename"]').setInputFiles('C:/Users/ACER/Pictures/Overriding_Example.png')
    await page.locator('//input[@title="Save [Alt+S]"]').nth(0).click()


   //!Validation
//    let valid=await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//    if(lastname===valid)
//    {
//     console.log('Contact is created');
    
//    }
//    else{
//     console.log('Contact is not created');
    
//    }

   await expect(page.locator('//span[@id="dtlview_Last Name"]')).toContainText(lastname)

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()
    
})