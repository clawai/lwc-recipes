import {
    LightningElement,
    wire,
    api
} from 'lwc';
import {
    NavigationMixin
} from 'lightning/navigation';
//import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

export default class LwcNavToRecord extends NavigationMixin(LightningElement) {
    //    @wire(getSingleContact) contact;
    @api recordId;

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Opportunity',
                actionName: 'view'
            }
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Opportunity',
                actionName: 'edit'
            }
        });
    }
}