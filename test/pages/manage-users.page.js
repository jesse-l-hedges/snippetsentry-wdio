import { $ } from '@wdio/globals'
import Page from './page.js';

class ManageUsersPage extends Page {
    // selectors
    get usersListHeader () {return $('div.v-card-title.d-flex.justify-space-between')}
    get searchUserTextbox () {return $('div.v-field__field')}
    get addUserButton () {return $('[@id=\"button-addNewUser\"]')}
    get bulkUploadButton () {return $('[@id=\"button-bulkUpload\"]')}
    get bulkImportButton () {return $('[@id=\"button-bulkImport\"]')}
    get exportButton () {return $('[@id=\"button-export\"]')}
    get clearFiltersButton () {return $('button="Clear Filters"')}
    get userStatusList () {return $()} //<div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="v-menu-v-27"><div class="v-field__overlay"></div><div class="v-field__loader"><div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px;"><!----><div class="v-progress-linear__background bg-primary"></div><div class="v-progress-linear__buffer bg-primary" style="width: 0%;"></div><div class="v-progress-linear__indeterminate"><div class="v-progress-linear__indeterminate long bg-primary"></div><div class="v-progress-linear__indeterminate short bg-primary"></div></div><!----></div></div><!----><div class="v-field__field" data-no-activator=""><!----><label class="v-label v-field-label" for="input-v-25"><!---->Select User Status</label><!----><div class="v-field__input" data-no-activator=""><!----><!----><div class="v-select__selection"><span class="v-select__selection-text">All<!----></span></div><input size="1" type="text" id="input-v-25" aria-describedby="input-v-25-messages" inputmode="none" aria-label="Open" title="Open" value=""></div><!----></div><!----><div class="v-field__append-inner"><!----><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"></path></svg><!----></div><div class="v-field__outline"><div class="v-field__outline__start"></div><div class="v-field__outline__notch"><label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-v-25"><!---->Select User Status</label></div><div class="v-field__outline__end"></div><!----></div></div>
    get channelConnectionStatusList () {return $()}
    get channelList () {return $()}
    get userTable () {return $()}
    get recordCount () {return $()}
    get userCreatedSucessfullyDialog () {return $('[@data-testid=\"toast-content\"]')}
    
    // methods
    
}

export default new ManageUsersPage();