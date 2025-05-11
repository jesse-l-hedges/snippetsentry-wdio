import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'

describe('Login Page Tests', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })

    it('login with invalid credentials', async () => {})
    it('login with missing username', async () => {})
    it('login with missing password', async () => {})
})