import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'Status', fieldName: 'Status' },
    { label: 'Client', fieldName: 'Client'},
    { label: 'Check-In', fieldName: 'CheckIn'},
    { label: 'Check-Out', fieldName: 'CheckOut'},
    { label: 'Phone', fieldName: 'Phone' }
];

export default class UserConsole extends LightningElement {
    data =  [ ];
    columns = columns;

    @track openModalRegister = false;

    openModal(){
        this.openModalRegister = true;
    }

    closeModal(){
        this.openModalRegister = false;
    }
}