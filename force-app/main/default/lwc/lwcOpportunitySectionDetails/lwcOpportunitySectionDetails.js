import {
    LightningElement,
    track,
    api,
    wire
} from 'lwc';

// Specify the field's names
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

import {
    getRecordUi
} from 'lightning/uiRecordApi';

export default class LwcOpportunitySectionDetails extends LightningElement {

    @api recordId;
    @api strTitle;
    @api recData;

    fields = [NAME_FIELD, CLOSEDATE_FIELD];

    @wire(getRecordUi, {
        recordIds: '$recordId',
        layoutTypes: 'Full',
        modes: 'View'
    })
    opportunityRecordUi;


    get opportunityRecordUiStr() {
        return this.opportunityRecordUi ?
            JSON.stringify(this.opportunityRecordUi.data, null, 2) :
            '';
    }

    /*
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
*/

}