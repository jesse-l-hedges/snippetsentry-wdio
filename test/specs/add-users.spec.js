import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'
import DashboardPage from '../pages/dashboard.page.js'
import ManageUsersPage from '../pages/manage-users.page.js'
import AddUsersPage from '../pages/add-users.page.js'


describe('Add User Tests', () => {
    beforeEach(async function () {
        await LoginPage.login("jesse.l.hedges@gmail.com","2025Sentry@5!")
        await DashboardPage.snippetSentryLogo.toBeDisplayed();
        await DashboardPage.clickManageUsersLink();
        await ManageUsersPage.snippetSentryLogo.toBeDisplayed();
        await ManageUsersPage.addUserButton.click();
        await AddUsersPage.saveButton.toBeDisplayed();
    });
    
    it('Create basic user', async () => {
        AddUserPage.sendEmailInviteCheckbox.click();
        AddUserPage.enterFirstName("Basic");
        AddUserPage.enterFirstName("User");
        AddUserPage.enterEmail("basic.user@gmail.com");
        AddUserPage.enterPhone("801-555-1212")
        AddUserPage.clickSave();
        expect(ManageUsersPage.userCreatedSucessfullyDialog.toHaveText("User created successfully"));
    });

    it('Create admin user', async () => {
        AddUserPage.sendEmailInviteCheckbox.click();
        AddUsersPage.adminCheckbox.click();
        AddUserPage.enterFirstName("Admin");
        AddUserPage.enterFirstName("User");
        AddUserPage.enterEmail("admin.user@gmail.com");
        AddUserPage.enterPhone("801-555-1213")
        AddUserPage.clickSave();
        expect(ManageUsersPage.userCreatedSucessfullyDialog.toHaveText("User created successfully"));
    });

    it('Create user with double-byte characters', async () => {
        AddUserPage.sendEmailInviteCheckbox.click();
        AddUserPage.enterFirstName("Basic");
        AddUserPage.enterFirstName("User");
        AddUserPage.enterEmail("basic.user@gmail.com");
        AddUserPage.enterPhone("801-555-1212")
        AddUserPage.clickSave();
        expect(ManageUsersPage.userCreatedSucessfullyDialog.toHaveText("User created successfully"));})
});

describe('Edit User Tests', () => {
    it('Change first name', async () => {})
    it('Change last name', async () => {})
    it('Verify email CANNOT be changed', async () => {})
    it('Change mobile number', async () => {})
    it('Change mobile locale', async () => {})
});