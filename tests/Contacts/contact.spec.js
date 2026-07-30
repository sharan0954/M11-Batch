import {test} from '../../fixtures/crmfixtures'
import contacts from '../../testData/contacts.json'
import { random } from '../../utils/random'

test('contacts fixture',async ({contact}) => {
    await test.slow()
    let random_fun = random()
    // let name = contact.firstname+random_fun
    // let lastname = contact.lastname
    await contact.openContacts()
    await contact.clickCreateContact()
    await contact.enterContactDetails(contacts.firstname,contacts.lastname)
}) 