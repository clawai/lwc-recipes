import {
    LightningElement,
    api,
    wire,
    track
} from 'lwc';
import getRcd from '@salesforce/apex/testController.getRcd';

export default class LwcRelatedItems extends LightningElement {
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

    @wire(getRcd, {
        listValues: '$vals'
    })
    records;

    /*    @wire(getRcd)
        records;
    */
}