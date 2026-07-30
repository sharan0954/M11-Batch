import {test} from '../../fixtures/crmfixtures'
import invoiceData from '../../testData/invoice.json'

test('Invoice',async ({invoice}) => {
    test.slow()
    await invoice.openInvoiceModule()
    await invoice.clickCreateInvoice()
    await invoice.enterSubject(invoiceData.subject)
    await invoice.enterCustomerNo(invoiceData.customerNo)
    await invoice.enterInvoiceDate(invoiceData.date)
    await invoice.enterBillingAddress(invoiceData.address,invoiceData.city ,invoiceData.state ,invoiceData.code ,invoiceData.country )
    await invoice.enterShippingAddress(invoiceData.address,invoiceData.city ,invoiceData.state ,invoiceData.code ,invoiceData.country)
    await invoice.clickAddProduct()
    await invoice.saveInvoice()
}) 