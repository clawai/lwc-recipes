import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchSubscriptionRecords from '@salesforce/apex/lwcUIController.fetchSubscriptionRecords';

export default class LwcActiveSubscriptions extends LightningElement {
    //   @api parentObjId;
    //   @api parentObjApiName;
    @api objectName;
    @api targetObjApiName;
    @api lookupFieldName;
    @api parentFieldApiName;
    @api recordId;
    @api strTitle;
    //   @api filterFieldName;
    //   @api filterFieldValue;
    //   @api filterOperatorType;
    get vals() {
        //        return this.recordId + ',' + this.objectName + ',' + this.parentFieldAPIName + ',' + this.filterFieldName + ',' + this.filterFieldValue + ',' + this.filterOperatorType;
        return this.recordId + ',' + this.objectName + ',' + this.targetObjApiName + ',' + this.lookupFieldName + ',' + this.parentFieldApiName;
    }
    set vals(value) {
        this.strTitle = value.strtitle;
        this.objectName = value.objectname;
        this.targetObjApiName = value.targetobjapiname;
        this.lookupFieldName = value.lookupfieldname;
        this.targetObjApiName = value.targetobjapiname;
        //        this.filterFieldName = value.filterfieldname;
        //        this.filterFieldValue = value.filterfieldvalue;
        //        this.filterOperatorType = value.filteroperatortype;
    }

    @wire(fetchSubscriptionRecords, {
        listValues: '$vals'
    })
    recordlist;
}