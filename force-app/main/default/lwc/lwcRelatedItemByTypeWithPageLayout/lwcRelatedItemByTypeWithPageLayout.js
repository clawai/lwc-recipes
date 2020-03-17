import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchRecords from '@salesforce/apex/lwcUIController.fetchRecords';
import fetchFields from '@salesforce/apex/lwcUIController.fetchFields';

export default class LwcRelatedItemByTypeWithPageLayout extends LightningElement {
    @api parentObjId;
    @api parentObjApiName;
    @api objectName;
    @api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    @api pageLayout;
    @api filterFieldName;
    @api filterFieldValue;
    @api filterOperatorType;
    get vals() {
        return this.recordId + ',' + this.objectName + ',' + this.parentFieldAPIName + ',' + this.filterFieldName + ',' + this.filterFieldValue + ',' + this.filterOperatorType;
    }
    set vals(value) {
        this.strTitle = value.strtitle;
        this.objectName = value.objectname;
        this.parentFieldAPIName = value.parentfieldapiname;
        this.filterFieldName = value.filterfieldname;
        this.filterFieldValue = value.filterfieldvalue;
        this.filterOperatorType = value.filteroperatortype;
    }

    @wire(fetchRecords, {
        listValues: '$vals'
    })
    records;

    @wire(fetchFields, {
        listValues: '$pageLayout'
    })
    fieldsSet;

}