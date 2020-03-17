import {
    LightningElement,
    api
} from 'lwc';

export default class LwcOpportunitySummaryTab extends LightningElement {
    @api recordId;
}

import FORM_FACTOR from '@salesforce/client/formFactor';

@wire(getRecordCreateDefaults, {
    objectApiName: ACCOUNT_OBJECT,
    formFactor: FORM_FACTOR
})
accountDefaults;