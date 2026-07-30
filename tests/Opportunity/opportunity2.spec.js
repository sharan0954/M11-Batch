import {test} from '../../fixtures/crmfixtures'
import oppData from '../../testData/opportunity.json'

test('Opportunity',async ({Opp}) => {
    test.slow()
    await Opp.openOpportunity()
    await Opp.clickCreateOpportunity()
    await Opp.enterOpportunityName(oppData.opp_name)
    await Opp.selectRelatedToOrganization()
    await Opp.enterAmount(oppData.amount)
    await Opp.enterExpectedCloseDate(oppData.date)
    await Opp.selectSalesStage()
    await Opp.enterProbability(oppData.probability)
    await Opp.enterDescription(oppData.desc)
    await Opp.saveOpportunity()
}) 