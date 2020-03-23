import {
    LightningElement,
    track,
    api,
    wire
} from 'lwc';

export default class LwcActivityTimeline extends LightningElement {
    @api recordId;
    @api strTitle;
}