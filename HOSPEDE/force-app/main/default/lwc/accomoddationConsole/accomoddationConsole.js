import { LightningElement } from 'lwc';

const columns = [
    { label: 'Status', fieldName: 'Status' },
    { label: 'Client', fieldName: 'Client'},
    { label: 'Check-In', fieldName: 'CheckIn'},
    { label: 'Check-Out', fieldName: 'CheckOut'},
    { label: 'Phone', fieldName: 'Phone' }
];

export default class AccomoddationConsole extends LightningElement {
    data =  [ ];
    columns = columns;
}