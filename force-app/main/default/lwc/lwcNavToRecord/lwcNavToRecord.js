import {
    LightningElement,
    wire,
    api
} from 'lwc';
import {
    NavigationMixin
} from 'lightning/navigation';

export default class LwcNavToRecord extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectApiName;
    @api parentObjId;

    navigateToRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: this.objectApiName,
                actionName: 'edit'
            }
        });
    }

    navigateToNew() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.objectApiName,
                actionName: 'new'
            },
            state: {
                nooverride: '1',
                defaultFieldValues: "Opportunity__c=" + this.parentObjId
            }
        });
    }
}