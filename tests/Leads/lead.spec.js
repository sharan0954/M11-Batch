import {test} from '../../fixtures/crmfixtures'
import lead from '../../testData/leads.json'

test('lead',async ({leads}) => {
    test.slow()
    await leads.openLeads()
    await leads.clickCreateLead()
    await leads.enterLeadDetails(lead.firstname,lead.lastname,lead.company_name)
}) 