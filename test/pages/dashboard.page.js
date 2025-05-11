import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {
    get snippetSentryLogo () {return $(text='Snippet Sentry')}
    get dashboardLink () {return $(<span class="nav-item-title">Dashboard</span>)}
    get manageUsersLink () {return $(<span class="nav-item-title">Manage Users</span>)}
    get advFeaturesLink () {return $(<span class="nav-item-title">Advanced Features</span>)}
    get adminResourcesLink () {return $(<span class="nav-item-title">Admin Resources</span>)}
    get channelDashboardLink () {return $(<span class="nav-item-title">Channel Dashboard</span>)}

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