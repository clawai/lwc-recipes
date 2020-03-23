import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchLookupRecords from '@salesforce/apex/lwcUIController.fetchLookupRecords';

export default class LwcLookupObject extends LightningElement {
    //   @api parentObjId;
    //   @api parentObjApiName;
    @api objectName;
    @api lookupObjName;
    @api lookupFieldName;
    @api recordId;
    @api strTitle;
    //   @api filterFieldName;
    //   @api filterFieldValue;
    //   @api filterOperatorType;
    get vals() {
        console.log("HHHHHHH");
        //        return this.recordId + ',' + this.objectName + ',' + this.parentFieldAPIName + ',' + this.filterFieldName + ',' + this.filterFieldValue + ',' + this.filterOperatorType;
        return this.recordId + ',' + this.objectName + ',' + this.lookupObjName + ',' + this.lookupFieldName;
    }
    set vals(value) {
        this.strTitle = value.strtitle;
        this.objectName = value.objectname;
        this.lookupObjName = value.lookupobjname;
        this.lookupFieldName = value.lookupfieldname;
        //        this.filterFieldName = value.filterfieldname;
        //        this.filterFieldValue = value.filterfieldvalue;
        //        this.filterOperatorType = value.filteroperatortype;
    }

    @wire(fetchLookupRecords, {
        listValues: '$vals'
    })
    recordlist;
}