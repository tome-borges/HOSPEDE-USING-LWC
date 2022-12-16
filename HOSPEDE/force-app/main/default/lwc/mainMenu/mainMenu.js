import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class MainMenu extends LightningElement{

   @track isModelUserOpen = false;

   openUserModal(){
         this.isModelUserOpen = true;
    }
    closeUserModal(){
        this.isModelUserOpen = false;
    }

}