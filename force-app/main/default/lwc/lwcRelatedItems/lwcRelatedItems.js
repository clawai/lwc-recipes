import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchRecords from '@salesforce/apex/LWCRelatedItemsController.fetchRecords';

export default class LwcRelatedItems extends LightningElement {

    @api objectName;
    @api fieldName;
    @api fieldValue;
    @api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    @api filterType;
    @api operator;
    get vals() {
        return this.recordId + ',' + this.objectName + ',' +
            this.parentFieldAPIName + ',' + this.fieldName + ',' +
            this.fieldValue + ',' + this.filterType + ',' + this.operator;
    }
    set vals(value) {
        this.strTitle = value.strtitle;
        this.objectName = value.objectname;
        this.parentFieldAPIName = value.parentfieldapiname;
        this.fieldName = value.fieldname;
        this.fieldValue = value.fieldvalue;
        this.filterType = value.filtertype;
        this.operator = value.operator;
    }

    @wire(fetchRecords, {
        listValues: '$vals'
    })
    records;

}