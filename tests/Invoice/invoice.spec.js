import{test} from '@playwright/test'
import login from '../../testData/login.json'

test('Quote Module', async ({page}) => {
    //!Login to the Application
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating Sales Order
    await page.locator('//a[text()="More"]').hover()
    await page.locator('//a[@name="Invoice"]').click()
    await page.getByRole('img',{name:'Create Invoice...'}).click()
    await page.locator('//input[@name="subject"]').fill('Invoice Details')
    let invoice=await page.locator('//input[@name="subject"]').inputValue()
    await page.locator('#customerno').fill('713123')

    await page.locator("#jscal_field_duedate").fill("2026-08-16");

 let [sales_Order_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await sales_Order_popup.getByRole('link',{name:'Sales Order Details'}).first().click()
    console.log(sales_Order_popup.url());
    await page.bringToFront()

    let [contact_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(1).click()
    ])
    await contact_popup.getByRole('link',{name:'Contact1_FirstName Contact1_LastName'}).first().click()
    console.log(contact_popup.url());
    await page.bringToFront()


    await page.locator('//select[@name="invoicestatus"]').selectOption({value:'Created'})

    await page.locator('//input[@value="T"]').check()

   let [org_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(2).click()
    ])
    await org_popup.getByRole('link',{name:'Infosys'}).click()
    console.log(org_popup.url());
    await page.bringToFront()


    await page.locator('//input[@value="T"]').check()
    await page.locator('//textarea[@name="bill_street"]').fill('Street 135, Dighi Road, Bhosari, Pune-411039, Maharashtra')
    await page.locator('//input[@onclick="return copyAddressRight(EditView)"]').check()

    let [product_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Products'}).click()
    ])
    await product_popup.getByRole('link',{name:'Laptop'}).click()
    console.log(product_popup.url());
    await page.bringToFront()


    await page.locator('#qty1').fill('796')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
   

  

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Subject"]').textContent()
   if(invoice===valid)
   {
    console.log('Invoice is created');
    
   }
   else{
    console.log('Invoice is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
}) 

test.only('DDT', async ({page}) => {
    //!Login to the Application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating Sales Order
    await page.locator('//a[text()="More"]').hover()
    await page.locator('//a[@name="Invoice"]').click()
    await page.getByRole('img',{name:'Create Invoice...'}).click()
    await page.locator('//input[@name="subject"]').fill('Invoice for Laptop')
    let invoice=await page.locator('//input[@name="subject"]').inputValue()
    await page.locator('#customerno').fill('713123')

    await page.locator("#jscal_field_duedate").fill("2026-08-16");

 let [sales_Order_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await sales_Order_popup.getByRole('link',{name:'Sales Order Details'}).first().click()
    console.log(sales_Order_popup.url());
    await page.bringToFront()

    let [contact_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(1).click()
    ])
    await contact_popup.getByRole('link',{name:'Contact1_FirstName Contact1_LastName'}).first().click()
    console.log(contact_popup.url());
    await page.bringToFront()


    await page.locator('//select[@name="invoicestatus"]').selectOption({value:'Created'})

    await page.locator('//input[@value="T"]').check()

   let [org_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).nth(2).click()
    ])
    await org_popup.getByRole('link',{name:'Infosys'}).click()
    console.log(org_popup.url());
    await page.bringToFront()


    await page.locator('//input[@value="T"]').check()
    await page.locator('//textarea[@name="bill_street"]').fill('Street 135, Dighi Road, Bhosari, Pune-411039, Maharashtra')
    await page.locator('//input[@onclick="return copyAddressRight(EditView)"]').check()

    let [product_popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Products'}).click()
    ])
    await product_popup.getByRole('link',{name:'Laptop'}).click()
    console.log(product_popup.url());
    await page.bringToFront()


    await page.locator('#qty1').fill('796')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
   

  

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Subject"]').textContent()
   if(invoice===valid)
   {
    console.log('Invoice is created');
    
   }
   else{
    console.log('Invoice is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()
    
})