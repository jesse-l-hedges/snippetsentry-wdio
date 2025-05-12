import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    // Selectors
    get inputUsername () {return $('#input-v-102')}
    get inputPassword () {return $('#input-v-104')}
    get btnLogin () {return $('aria/LOGIN')}
    get lnkForgotPassword () {return $([href]="/forgot-password")}
    get lnkCreateAccount () {return $([href]="/register")}
    get incorrectUserPass () {return $('label.v-label')} // <label data-v-8f9c4d9a="" class="v-label" data-testid="login-error" style="color: red;"><!---->Username or password is incorrect</label>

    // Methods
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async clickForgotPassword() {
        await this.lnkForgotPassword.click();
    }

    async clickCreateAccount() {
        await this.lnkCreateAccount.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();