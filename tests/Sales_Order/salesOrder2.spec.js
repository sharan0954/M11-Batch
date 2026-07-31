import {test} from '../../fixtures/crmfixtures'
import sales from '../../testData/sales.json'


test('Sales Order',async ({so}) => {
    test.slow()
    await so.openSalesOrderModule()
    await so.clickCreateSalesOrder()
    await so.enterSubject(sales.subject)
    await so.enterCustomerNo(sales.customerNo)
    await so.enterDueDate(sales.dueDate)
    await so.enterPurchaseOrder(sales.po)
    await so.enterBillingAddress(sales.address, sales.city, sales.state, sales.code, sales.country)
    await so.enterShippingAddress(sales.address, sales.city, sales.state, sales.code, sales.country)
    await so.enterDescription(sales.description)
    await so.clickAddProduct()
    await so.clickAddService()
    await so.clickSave()


}) 