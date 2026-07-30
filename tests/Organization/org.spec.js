import {test} from '@playwright/test'
import login from '../../testData/login.json'

test('Org Module',async ({page}) => {
    await page.goto('http://localhost:8888')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Organizations'}).click()
    await page.locator('//img[@title="Create Organization..."]').click()
    await page.locator('//input[@name="accountname"]').fill('Infosys')
    let org_name=await page.locator('//input[@name="accountname"]').inputValue()
    await page.locator('//input[@name="employees"]').fill('430')
    await page.locator('//select[@name="industry"]').selectOption({value:'Banking'})
    await page.locator('//input[@name="emailoptout"]').check()
    await page.locator('//input[@value="T"]').check()
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

   let valid=await page.locator('//span[@id="dtlview_Organization Name"]').textContent()

   if(org_name===valid)
   {
    console.log('Org is created')
    
   }else{
    console.log('Org is not created');
    
   }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
    
})

test.only('DDT',async ({page}) => {
    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Organizations'}).click()
    await page.locator('//img[@title="Create Organization..."]').click()
    await page.locator('//input[@name="accountname"]').fill('TCS')
    let org_name=await page.locator('//input[@name="accountname"]').inputValue()

    let [popup]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('img',{name:'Select'}).first().click()
    ])
    await popup.getByRole('link',{name:'Infosys'}).click()
    console.log(popup.url());
    await page.bringToFront()
    
    await page.locator('//input[@name="employees"]').fill('430')
    await page.locator('//select[@name="industry"]').selectOption({value:'Banking'})
    await page.locator('//input[@name="emailoptout"]').check()
    await page.locator('//input[@value="T"]').check()
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    

//    let valid=await page.locator('//span[@id="dtlview_Organization Name"]').textContent()

//    if(org_name===valid)
//    {
//     console.log('Org is created')
    
//    }else{
//     console.log('Org is not created');
    
//    }


    await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(lastname)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
    
})
