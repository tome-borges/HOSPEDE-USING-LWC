import { LightningElement } from 'lwc';

export default class TotalOfService extends LightningElement {
    totalOfCheckIn = 0;
    totalOfCheckOut = 0;
    totalOfMaintenance = 0;
    totalOfCleanUp = 0;
    totalOfFreeRooms = 0;
}