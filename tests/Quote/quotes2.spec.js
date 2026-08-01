import { test } from '../../fixtures/crmfixtures';
import quotesData from '../../testData/quotesData.json';

test('Create Quote', async ({ quote }) => {
    test.slow();
    await quote.clickOnMoreMenu()
    await quote.clickOnQuotes()
    await quote.clickOnCreateQuotes()
    await quote.enterSubject(quotesData.subject);
    await quote.enterValidTill(quotesData.validTill);
    await quote.selectQuoteStage(quotesData.quoteStage);
    await quote.selectCarrier(quotesData.carrier);

    await quote.enterBillingAddress(
        quotesData.billingStreet,
        quotesData.billingCity,
        quotesData.billingState,
        quotesData.billingCode,
        quotesData.billingCountry
    );

    await quote.enterShippingAddress(
        quotesData.shippingStreet,
        quotesData.shippingCity,
        quotesData.shippingState,
        quotesData.shippingCode,
        quotesData.shippingCountry
    );

    await quote.enterTerms(quotesData.terms);
    await quote.enterDescription(quotesData.description);

    // If you're adding products/services, call those methods here.
    // await quotes.clickAddProduct();

    await quote.clickSave();
  

});