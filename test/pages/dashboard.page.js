import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {
    get snippetSentryLogo () {return $(text='Snippet Sentry')}
    get dashboardLink () {return $('aria/Dashboard')}
    get manageUsersLink () {return $('aria/Manage Users')}
    get advFeaturesLink () {return $('aria/Advanced Features')}
    get adminResourcesLink () {return $('aria/Admin Resources')}
    get channelDashboardLink () {return $('aria/Channel Dashboard')}

    async clickDashboardLink() {
        await this.dashboardLink.click();
    };

    async clickManageUsersLink() {
        await this.manageUsersLink.click();
    };

    async clickAdvFeaturesLInk() {
        await this.advFeaturesLink.click();
    };

    async clickAdminResourcesLink() {
        await this.adminResourcesLink.click();
    };

    async clickChannelDashboardLink() {
        await this.channelDashboardLink.click();
    }
}

export default new DashboardPage();