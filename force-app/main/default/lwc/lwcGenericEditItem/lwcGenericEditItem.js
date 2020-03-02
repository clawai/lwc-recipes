import {
    LightningElement,
    api,
    wire
} from 'lwc';

export default class LwcGenericEditItem extends LightningElement {

    @api objectName;
    //    @api fieldName;
    //    @api fieldValue;
    //@api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    @api fields;
    @api mode;
    //    @api filterType;
    //    @api operator;
    /*    get vals() {
            return this.recordId + ',' + this.objectName + ',' +
                this.parentFieldAPIName + ',' + this.fieldName + ',' +
                this.fieldValue + ',' + this.filterType + ',' + this.operator;
        }

        set vals(value) {
            this.strTitle = value.strtitle;
            this.objectName = value.objectname;
            this.parentFieldAPIName = value.parentfieldapiname;
        }

        @wire(fetchRecords, {
            listValues: '$vals'
        })
        records;
    */
    handleSubmit(event) {
        alert('HELLO');
        console.log('handleSubmit: ' + fields.Name);
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
        clearTimeout();
        //this.mode = 'view';
    }

}