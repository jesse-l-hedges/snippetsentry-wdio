import { $ } from '@wdio/globals'
import Page from './page.js';

class AddUsersPage extends Page {
    // selectors
    get adminCheckbox () {return $('[@aria-label="Admin"]')}
    get sendEmailInviteCheckbox () {return $('[@aria-label="Send email invite"]')}
    get firstNameTextbox () {return $('input#textfield-adduser-firstname.v-field__input')} 
    get lastNameTextbox () {return $('input#textfield-adduser-lastname.v-field__input')} 
    get emailTextBox () {return $('input#textfield-adduser-email.v-field__input')} 
    get phoneNumberTextbox () {return $('#input.vti__input vti__phone')} 
    get notesTextbox () {return $('[@id=\"textfield-adduser-notes\"]')} 
    get cancelButton () {return $('[@data-testid=\"cancel-user-drawer\"]')} 
    get saveButton () {return $('[@data-testid=\"save-user\"]')} 
    
    // methods
    async enterFirstName(firstName) {
        await this.firstNameTextbox.setValue(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameTextbox.setValue(lastName);
    }
    
    async enterEmail(emailAddr) {
        await this.emailTextBox.setValue(emailAddr);
    }

    async enterPhone(phoneNumber) {
        await this.phoneNumberTextbox.setValue(phoneNumber);
    }

    async enterNotes(notesText) {
        await this.notesTextbox.setValue(notesText);
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async clickSave() {
        await this.saveButton.click();
    }
    

}
export default new AddUsersPage();