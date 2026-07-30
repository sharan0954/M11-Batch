import {test} from '../../fixtures/crmfixtures'
import orgData from '../../testData/org.json'

test('Org',async ({org}) => {
    test.slow()
    await org.openOrg()
    await org.clickCreateOrg()
    console.log(orgData);
    console.log(orgData.orgname);
    await org.enterOrgDetails(orgData.orgname)
}) 