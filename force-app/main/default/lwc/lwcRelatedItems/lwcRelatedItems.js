import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchRecords from '@salesforce/apex/LWCRelatedItemsController.fetchRecords';

export default class LwcRelatedItems extends LightningElement {
    @api parentObjId;
    @api parentObjApiName;
    @api objectName;
    @api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    get vals() {
        return this.recordId + ',' + this.objectName + ',' + this.parentFieldAPIName;
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

}