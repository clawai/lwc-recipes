import {
    LightningElement,
    track,
    api,
    wire
} from 'lwc';

// Specify the field's names
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

import {
    getRecordUi
} from 'lightning/uiRecordApi';

export default class LwcOpportunitySectionDetails extends LightningElement {

    @api recordId;
    @api strTitle;
    @api recData;
    @api opportunityRecordUiStr;
    @api objectName;
    @api sectionName;
    @api pageLayoutName;

    //    fields = [NAME_FIELD, CLOSEDATE_FIELD];
    fields = ["OwnerId", "CloseDate", "IsPrivate", "NextStep", "Name", "StageName", "Type", "CampaignId", "LeadSource"];

    @wire(getRecordUi, {
        recordIds: '$recordId',
        layoutTypes: 'Full',
        modes: 'View'
    })
    opportunityRecordUi;

    get opportunityRecordUiStr() {
        console.log('this.sectionName: ' + this.sectionName);
        let key = 'sections';
        let fieldsObj;
        let sectionsObj = getValues(this.opportunityRecordUi.data, key);
        let sectionObj = getSection(sectionsObj[0], this.sectionName);
        for (let a in sectionObj) {
            fieldsObj = getFields(sectionObj[a]);

            //            for (let b in sectionObj[a]) {
            //               console.log(b);
            //         }

        }
        //        let fieldsObj = getFields(sectionObj[0]);
        let sectionStr = JSON.stringify(fieldsObj);

        //        var a = sectionStr.replace(/"/g, "");
        //        sectionStr = sectionStr.replace('a', 'A');
        //        a = a.replace(/\]/g, "");
        //        a = a.replace(/\[/g, "");

        /*       var found, rxp = /[^[\]]+(?=])/g,

            str = sectionStr,
            curMatch;

        if (curMatch = rxp.exec(str)) sectionStr = curMatch(1);
*/
        //        let sectionObjFinal = sectionStr.split(",");
        //console.log('sectionStr: ' + sectionStr);
        return sectionStr;
        /*
        return this.opportunityRecordUi ?
            JSON.stringify(this.opportunityRecordUi.data, null, 2) :
            '';
    */

        //return an array of values that match on a certain key
        function getValues(obj, key) {
            var objects = [];
            //	console.log(Object.keys(obj).length);
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) {
                    //                    console.log('***: ' + i);
                    continue;
                }

                if (typeof obj[i] == 'object' && (i != key)) {
                    //                    console.log('Second i : ' + i);
                    objects = objects.concat(getValues(obj[i], key));
                } else if (i == key) {
                    console.log(' Found ' + i);
                    objects.push(obj[i]);
                    break;
                }
            }
            return objects;
        }

        function getSection(obj, sectionName) {
            var sectionObj = [];
            for (let i in obj) {
                for (let prop in obj[i]) {
                    if (prop = 'heading') {
                        if (obj[i][prop] == sectionName) {
                            sectionObj.push(obj[i]);
                            break;

                        }
                    }
                }
            }

            //	const found = obj.find(element => element > 10);

            return sectionObj;

        }

        function getFields(obj) {
            var fieldsObj = [];
            let setObj = new Set();
            let layoutRowsObj = obj['layoutRows'];
            console.log('HEAD: ' + layoutRowsObj[0]);
            for (let newtemp in layoutRowsObj) {

                for (let prop in layoutRowsObj[newtemp]) {
                    //		console.log(layoutRowsObj[newtemp][prop][0]);
                    //		console.log(layoutRowsObj[newtemp][prop][1]);

                    for (let temp in layoutRowsObj[newtemp][prop]) {
                        //			console.log('TEMP: ' + temp);
                        for (let layoutItemsObj in layoutRowsObj[newtemp][prop][temp]) {
                            //				console.log(temp + '---' + layoutItemsObj);
                            if (layoutItemsObj == 'layoutComponents') {
                                //console.log(layoutItemsObj);
                                console.log(layoutRowsObj[newtemp][prop][temp][layoutItemsObj])
                                for (let temp3 in layoutRowsObj[newtemp][prop][temp][layoutItemsObj]) {
                                    console.log(layoutRowsObj[newtemp][prop][temp][layoutItemsObj][temp3])
                                    for (let temp4 in layoutRowsObj[newtemp][prop][temp][layoutItemsObj][temp3]) {
                                        console.log('TEMP4: ' + temp4);
                                        if (temp4 == 'apiName') {
                                            //fieldsObj.push(layoutRowsObj[newtemp][prop][temp][layoutItemsObj][temp3][temp4]);
                                            setObj.add(layoutRowsObj[newtemp][prop][temp][layoutItemsObj][temp3][temp4]);
                                            console.log('FOUNSD!!!');

                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
            setObj.delete(null);
            fieldsObj = Array.from(setObj);
            return fieldsObj;
        }




    }

}
