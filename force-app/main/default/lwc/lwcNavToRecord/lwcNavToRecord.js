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
    @api parentObjApiName;

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
        console.log('this.parentObjApiName: ' + this.parentObjApiName);
        console.log('this.parentObjId: ' + this.parentObjId);
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.objectApiName,
                actionName: 'new'
            },
            state: {
                nooverride: '1',
                defaultFieldValues: this.parentObjApiName + '=' + this.parentObjId
            }
        });
    }

}