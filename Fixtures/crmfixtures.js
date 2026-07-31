import {test as base} from './login'
import { leadsClass } from '../pages/leads'
import { contactClass } from '../pages/contacts'
import login from '../testData/login.json'
import leads from '../testData/leads.json'
import { orgClass } from '../pages/orgClass'
import { opportunityClass } from '../pages/opportunityClass'
import { productClass } from '../pages/productClass'
import { invoiceClass } from '../pages/invoiceClass'
import { SalesOrderPage } from '../pages/SalesOrderPage'

export let test = base.extend({
    leads :async ({login},use) => {
        let lead = new leadsClass(login)
        await use(lead)
    },
    contact : async ({login},use) => {
        let contact = new contactClass(login)
        await use(contact)
    },
    org : async ({login},use) => {
        let org = new orgClass(login)
        await use(org)
    },
    Opp: async ({login},use) => {
        let Opp=new opportunityClass(login)
        await use(Opp)
        
    },
    product: async ({login},use) => {
        let product=new productClass(login)
        await use(product)
        
    },
     invoice: async ({login},use) => {
        let invoice=new invoiceClass(login)
        await use(invoice)
        
    },
     so: async ({login},use) => {
        let so=new SalesOrderPage(login)
        await use(so)
        
    }


}) 