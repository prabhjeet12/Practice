import { Page } from "@playwright/test";

export class LoginPage {

    private username;
    private password;
    private loginButton;
    private errorMessage;

    constructor(private page: Page) {
        this.username = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.errorMessage = this.page.locator('[data-test="error"]');
    }
    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
}

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async getErrorMessage() {
        return  this.errorMessage;
    }
    async logout() {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
        await this.page.locator('#logout_sidebar_link').click();

    
    }
    
   
}