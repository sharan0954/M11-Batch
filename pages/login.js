
export class loginClass{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@name="user_name"]');
        this.password=page.locator('//input[@name="user_password"]');
        this.button=page.getByRole('button',{name:'Login'});
    }

    async launchUrl(url){
        await this.page.goto(url)
    }

    async details(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.button.click()
    }
}