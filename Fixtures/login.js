import {test as base} from '@playwright/test'
import { loginClass } from '../pages/login'
import login from '../testData/login.json'


export let test = base.extend({
    login : async ({page},use) => {
        let signin = new loginClass(page)
        await signin.launchUrl(login.url)
        await signin.details(login.username,login.password)
        await use(page)
    }
}) 