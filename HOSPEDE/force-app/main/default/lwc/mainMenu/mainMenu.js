import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class MainMenu extends LightningElement{

   @track isModelOpen = false;
   @track isUserModal = false;
   @track isRoomModal = false;
   @track isClientModal = false;
   @track isReserveModal = false;
   @track isAccomoddationModal = false;
   @track isProductModal = false;
   @track isTourModal = false;

   openUserModal(){
         this.isModelOpen = true;
         this.isUserModal = true;
    }
    openRoomModal(){
        this.isModelOpen = true;
        this.isRoomModal = true;
   }
   openClientModal(){
        this.isModelOpen = true;
        this.isClientModal = true;
    }
    openReserveModal(){
        this.isModelOpen = true;
        this.isReserveModal = true;
    }
    openAccomoddationModal(){
        this.isModelOpen = true;
        this.isAccomoddationModal = true;
    }
    openProductModal(){
        this.isModelOpen = true;
        this.isProductModal = true;
    }
    openTourModal(){
        this.isModelOpen = true;
        this.isTourModal = true;
    }

    closeModal(){
        this.isModelOpen = false;
        this.isUserModal = false;
        this.isRoomModal = false;
        this.isReserveModal = false;
        this.isAccomoddationModal = false;
        this.isProductModal = false;
        this.isTourModal = false;
        this.isClientModal = false;
    }

}