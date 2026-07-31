import{test} from '@playwright/test'
import login from '../../testData/login.json'

test('Quote Module', async ({page}) => {
    //!Login to the Application
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating Quote
    await page.locator('//a[text()="More"]').hover()
    await page.locator('//a[@name="Quotes"]').click()
    await page.getByRole('img',{name:'Create Quote...'}).click()
    await page.locator('//input[@name="subject"]').fill('Quotation Details')
    let sub=await page.locator('//input[@name="subject"]').inputValue()
    await page.locator('#jscal_trigger_validtill').click()
    await page.locator('#jscal_field_validtill').fill('2026-12-25')
    await page.locator('//select[@name="carrier"]').selectOption({value:'BlueDart'})
    await page.locator('//input[@value="T"]').check()
    await page.locator('//textarea[@name="bill_street"]').fill('Street No 125, Pune-411039, Maharashtra')
    await page.locator('//select[@name="quotestage"]').selectOption({value:'Created'})

    
     let [popup1]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(2).click()
    ])
    await popup1.getByRole('link',{name:'Infosys'}).click()
    console.log(popup1.url());
    await page.bringToFront()


    await page.locator('//input[@onclick="return copyAddressRight(EditView)"]').check()

   let [popup2]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Products'}).click()
    ])
    await popup2.getByRole('link',{name:'Laptop'}).click()
    console.log(popup2.url());
    await page.bringToFront()

    await page.locator('#qty1').fill('300')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Subject"]').textContent()
   if(sub===valid)
   {
    console.log('Quote is created');
    
   }
   else{
    console.log('Quote is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})

test('DDT',async ({page}) => {
    //!Login to the Application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating Quote
    await page.locator('//a[text()="More"]').hover()
    await page.locator('//a[@name="Quotes"]').click()
    await page.getByRole('img',{name:'Create Quote...'}).click()
    await page.locator('//input[@name="subject"]').fill('Quotation Details for a Product')
    let sub=await page.locator('//input[@name="subject"]').inputValue()
    await page.locator('#jscal_trigger_validtill').click()
    await page.locator('#jscal_field_validtill').fill('2026-12-25')
    await page.locator('//select[@name="carrier"]').selectOption({value:'BlueDart'})
    await page.locator('//input[@value="T"]').check()
    await page.locator('//textarea[@name="bill_street"]').fill('Street No 125, Pune-411039, Maharashtra')
    await page.locator('//select[@name="quotestage"]').selectOption({value:'Created'})

    
     let [popup1]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(2).click()
    ])
    await popup1.getByRole('link',{name:'Infosys'}).click()
    console.log(popup1.url());
    await page.bringToFront()


    await page.locator('//input[@onclick="return copyAddressRight(EditView)"]').check()

   let [popup2]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Products'}).click()
    ])
    await popup2.getByRole('link',{name:'Laptop'}).click()
    console.log(popup2.url());
    await page.bringToFront()

    await page.locator('#qty1').fill('300')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

   //!Validation
//    let valid=await page.locator('//span[@id="dtlview_Subject"]').textContent()
//    if(sub===valid)
//    {
//     console.log('Quote is created');
    
//    }
//    else{
//     console.log('Quote is not created');
    
//    }

   //span[@id="dtlview_Organization Name"]

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})