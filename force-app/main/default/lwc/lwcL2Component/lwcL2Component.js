import {
    LightningElement,
    track,
    api,
    wire
} from 'lwc';


export default class LwcL2Component extends LightningElement {

    @api recordId;
    @api strTitle;

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