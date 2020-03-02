import {
    LightningElement,
    track,
    api
} from 'lwc';


import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class LwcOpportunitySectionDetails extends LightningElement {

    @api recordId;
    @api strTitle;
    @api field1;
    @api field2;
    @api field3;
    @api field4;
    @api field5;
    @api field6;
    @api field7;
    @api field8;
    @api field9;
    @api field10;

    fields = [NAME_FIELD, CLOSEDATE_FIELD];
    /*
    get vals() {
        return this.recordId + ',' + this.objectName + ',' +
            this.parentFieldAPIName + ',' + this.fieldName + ',' +
            this.fieldValue + ',' + this.filterType + ',' + this.operator;
    }

    set vals(value) {
        this.field1 = value.field1;
        this.field1 = value.field1;
        this.field1 = value.field1;
        this.field1 = value.field1;
        this.field1 = value.field1;
        this.field1 = value.field1;
        this.field1 = value.field1;
    */
    @track content = 'The modal content';
    @track header = 'The modal header';

    handleHeaderChange(event) {
        this.header = event.target.value;
    }

    handleContentChange(event) {
        this.content = event.target.value;
    }

    handleShowModal() {
        const modal = this.template.querySelector('c-lwc-generic-modal-edit');
        modal.show();
    }

    handleCancelModal() {
        const modal = this.template.querySelector('c-lwc-generic-modal-edit');
        modal.hide();
    }

    handleCloseModal() {
        const modal = this.template.querySelector('c-lwc-generic-modal-edit');
        modal.hide();
    }



}