import { LightningElement } from 'lwc';

const columns = [
    { label: 'Status', fieldName: 'Status' },
    { label: 'Client', fieldName: 'Client'},
    { label: 'Check-In', fieldName: 'CheckIn'},
    { label: 'Check-Out', fieldName: 'CheckOut'},
    { label: 'Phone', fieldName: 'Phone' }
];

export default class checkOut extends LightningElement {
    data = [
      {Status:'Accomodation', Client:'Borges, Fabricio', CheckIn:'Today', CheckOut:'Tomorrow', Phone:'55 21 8574-0485'},
      {Status:'Accomodation', Client:'Borges, Fabricio', CheckIn:'Today', CheckOut:'Tomorrow', Phone:'55 21 8574-0485'},
      {Status:'Accomodation', Client:'Borges, Fabricio', CheckIn:'Today', CheckOut:'Tomorrow', Phone:'55 21 8574-0485'}
    ];
    columns = columns;
}