import { LightningElement, track } from 'lwc';

export default class ModalPopupLWC extends LightningElement {
    @track isModelOpen = false;

    openModal(){
        this.isModelOpen = true;
    }

    closeModal(){
        this.isModelOpen = false;
    }

    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModelOpen = false;
    }
}