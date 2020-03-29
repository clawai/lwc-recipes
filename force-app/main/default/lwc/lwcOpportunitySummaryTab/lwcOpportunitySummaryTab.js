import {
    LightningElement,
    api,
    track
} from 'lwc';

import FORM_FACTOR from '@salesforce/client/formFactor';

export default class LwcOpportunitySummaryTab extends LightningElement {
    @api recordId;
    formFactor = FORM_FACTOR;
    @track selectedSubMenuItem = 'all';
    @track activityTimelineOn = false;
    @track contactDetailsOn = false;
    @track preferencesOn = false;
    @track activeSubscriptionsOn = false;
    @track productsOn = false;
    @track allOn = false;

    handleMenuSelect(event) {
        const selectedItemValue = event.detail.value;
        /*        const menuItem = this.privateMenuItems.find(function (item) {
                    return item.value === selectedItemValue;
                });

                menuItem.checked = !menuItem.checked;
            */
        this.selectedSubMenuItem = selectedItemValue;
        switch (this.selectedSubMenuItem) {
            case 'all':
                this.allOn = true;
                this.contactDetailsOn = false;
                this.preferencesOn = false;
                this.productsOn = false;
                this.activeSubscriptionsOn = false;
                break;
            case 'contactDetails':
                this.contactDetailsOn = true;
                this.allOn = false;
                this.preferencesOn = false;
                this.productsOn = false;
                this.activeSubscriptionsOn = false;
                break;
            case 'preferences':
                this.preferencesOn = true;
                this.allOn = false;
                this.contactDetailsOn = false;
                this.productsOn = false;
                this.activeSubscriptionsOn = false;
                break;
            case 'activeSubscriptions':
                this.activeSubscriptionsOn = true;
                this.preferencesOn = false;
                this.allOn = false;
                this.contactDetailsOn = false;
                this.productsOn = false;
                break;

            case 'products':
                this.productsOn = true;
                console.log('Product on');
                this.allOn = false;
                this.contactDetailsOn = false;
                this.preferencesOn = false;
                this.activeSubscriptionsOn = false;
                break;
        }
        console.log('selectedItemValue: ' + selectedItemValue);
    }

}