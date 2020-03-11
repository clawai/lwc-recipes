import {
    LightningElement,
    api,
    wire
} from 'lwc';
import fetchRecords from '@salesforce/apex/LWCRelatedItemsController.fetchRecords';

/*import NAME_FIELD from '@salesforce/schema/RelatedCustomObject__c.Name';
import PICKLIST_FIELD from '@salesforce/schema/RelatedCustomObject__c.PickList__c';
import TEXT1_FIELD from '@salesforce/schema/RelatedCustomObject__c.Text_1__c';
import CHECKBOX_FIELD from '@salesforce/schema/RelatedCustomObject__c.Check_Box__c';
*/
export default class LwcRelatedItemsWithChilds extends LightningElement {

    //  fields = [NAME_FIELD, PICKLIST_FIELD, TEXT1_FIELD, CHECKBOX_FIELD];

    @api parentObjId;
    @api grandParentObjApiName;
    @api parentObjApiName;
    @api objectName;
    @api parentFieldAPIName;
    @api recordId;
    @api strTitle;
    get vals() {
        return this.recordId + ',' + this.objectName + ',' +
            this.parentFieldAPIName;
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