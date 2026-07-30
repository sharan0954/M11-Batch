import {test} from '../../fixtures/crmfixtures'
import productData from '../../testData/products.json'


test('Poducts Fixture',async ({product}) => {
    test.slow()
    await product.openProducts()
    await product.clickCreateProduct()
    await product.enterProductName(productData.name)
    await product.selectCategory(productData.category)
    await product.selectManufacturer(productData.manufacturer)
    await product.enterSalesStartDate(productData.startdate)
    await product.enterSalesEndDate(productData.enddate)
    await product.saveProduct()

}) 