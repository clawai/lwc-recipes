import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchRecords from '@salesforce/apex/LWCRelatedItemsController.fetchRecords';

export default class LwcOppProdGroupByType extends LightningElement {
    @api parentObjId;
    @api parentObjApiName;
    @api objectName;
    @api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    @api filterFieldName;
    @api filterFieldValue;
    @api filterOperatorType;
    get vals() {
        return this.recordId + ',' + this.objectName + ',' + this.parentFieldAPIName + this.filterFieldName + ',' + this.filterFieldValue + ',' + this.filterOperatorType;
    }
    set vals(value) {
        this.strTitle = value.strtitle;
        this.objectName = value.objectname;
        this.parentFieldAPIName = value.parentfieldapiname;
        this.filterFieldName = value.filterFieldName;
        this.filterFieldValue = value.filterFieldValue;
        this.filterOperatorType = value.filterOperatorType;
    }

    @wire(fetchRecords, {
        listValues: '$vals'
    })
    records;

}