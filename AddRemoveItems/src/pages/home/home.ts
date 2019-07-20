import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [{
    name: "Eggs",
    quantity: 1
  },
  {
    name: "Banana",
    quantity: 12
  },
  {
    name: "Mandarins",
    quantity: 12
  },
];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  //Helper function to remove items from the list
  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: 'Removing Item ' + index,
      duration: 10000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  //Function to add items to the list
  addItem() {
    this.showAddItemPrompt();
  }

  //Function to show the add item prompt
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
