import {
    LightningElement,
    api,
    track
} from "lwc";

const CSS_CLASS = "modal-hidden";

export default class LwcGenericModalEdit extends LightningElement {
    @track showModal = false;
    @api set header(value) {
        this.hasHeaderString = value !== "";
        this._headerPrivate = value;
    }
    get header() {
        return this._headerPrivate;
    }

    @track hasHeaderString = false;
    _headerPrivate;

    @api show() {
        this.showModal = true;
    }

    @api hide() {
        this.showModal = false;
    }

    handleDialogClose() {
        console.log("handleDialogClose");

        //Let parent know that dialog is closed (mainly by that cross button) so it can set proper variables if needed
        const closedialog = new CustomEvent("closedialog");
        this.dispatchEvent(closedialog);
        this.hide();
    }

    handleSlotTaglineChange() {
        console.log("handleSlotTaglineChange");
        const taglineEl = this.template.querySelector("p");
        taglineEl.classList.remove(CSS_CLASS);
    }

    handleSlotFooterChange() {
        console.log("handleSlotFooterChange");
        const footerEl = this.template.querySelector("footer");

        if (footerEl != null)
            footerEl.classList.remove(CSS_CLASS);
    }
}