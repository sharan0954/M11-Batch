import{test} from '@playwright/test'
import login from '../../testData/login.json'

test('Product Module', async ({page}) => {
    //!Login to the Application
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating a Product
    await page.getByRole('link',{name:'PRODUCTS'}).click()
    await page.getByRole('img',{name:'Create Product...'}).click()
    await page.locator('//input[@name="productname"]').fill('Chairs')
    let product=await page.locator('//input[@name="productname"]').inputValue()
    await page.locator('#jscal_trigger_sales_start_date').click()
    await page.locator('//input[@name="discontinued"]').check()
    
    
     await page.locator('//select[@name="productcategory"]').selectOption({value:'Hardware'})
     await page.locator('#vendor_part_no').fill('403')
     await page.locator('//input[@name="productsheet"]').fill('Product Sheet')
     await page.locator('//select[@name="glacct"]').selectOption({value:'307-Service-Hardware Labor'})
     await page.locator('#unit_price').fill('30000')
     await page.locator('#my_file_element').setInputFiles('C:/Users/ACER/Pictures/Overriding_Example.png')


    await page.locator('//input[@value="T"]').check()

    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    

   //!Validation
   let valid=await page.locator('//span[@id="dtlview_Product Name"]').textContent()
   if(product===valid)
   {
    console.log('Product is created');
    
   }
   else{
    console.log('Product is not created');
    
   }

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})

test('DDT', async ({page}) => {
    //!Login to the Application
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()

    //! Creating a Product
    await page.getByRole('link',{name:'PRODUCTS'}).click()
    await page.getByRole('img',{name:'Create Product...'}).click()
    await page.locator('//input[@name="productname"]').fill('Mobiles')
    let product=await page.locator('//input[@name="productname"]').inputValue()
    await page.locator('#jscal_trigger_sales_start_date').click()
    await page.locator('//input[@name="discontinued"]').check()
    
    
     await page.locator('//select[@name="productcategory"]').selectOption({value:'Hardware'})
     await page.locator('#vendor_part_no').fill('403')
     await page.locator('//input[@name="productsheet"]').fill('Product Sheet')
     await page.locator('//select[@name="glacct"]').selectOption({value:'307-Service-Hardware Labor'})
     await page.locator('#unit_price').fill('30000')
     await page.locator('#my_file_element').setInputFiles('C:/Users/ACER/Pictures/Overriding_Example.png')


    await page.locator('//input[@value="T"]').check()

    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    

   //!Validation
//    let valid=await page.locator('//span[@id="dtlview_Product Name"]').textContent()
//    if(product===valid)
//    {
//     console.log('Product is created');
    
//    }
//    else{
//     console.log('Product is not created');
    
//    }

   await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(lastname)

   await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
   await page.locator('//a[text()="Sign Out"]').click()


    
})