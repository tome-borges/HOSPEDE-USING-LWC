import { LightningElement, track, wire,api } from 'lwc';
import getUsers from "@salesforce/apex/UserController.getUsers"

const columns = [
    { label: 'Last Name ', fieldName: 'LastName'},
    { label: 'Email', fieldName: 'Email'},
    { label: 'Profile', fieldName: 'Profile.Name'},
    { label: 'User Name', fieldName: 'UserName'},
    { label: 'Phone', fieldName: 'Phone' }
];

export default class UserConsole extends LightningElement {
    @track data;
    @track error;
    columns = columns;

    @wire(getUsers)
    wiredUsers({error, data}){

        if(data){
            this.data = data;
        } else if(error){
            this.error = error;
        }

    }

    @track openModalRegister = false;

    openModal(){
        this.openModalRegister = true;
    }

    closeModal(){
        this.openModalRegister = false;
    }
}