import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalAdminProductComponent } from 'src/app/shared-components/modal-add-product/modal-admin-product.component';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {
    showModal: boolean = false;
    modalInput1: string = '';
    modalInput2: string = '';
    modalInput3: string = '';
    modaltext: string = 'Confirmar';

    singleProduct: boolean = true;
    singleCategory: boolean = true;
    singlePrice: boolean = true;
    singleTrash: boolean = true;
    menu: boolean = true;
    //Aquí hay que agregar tipados
    @ViewChild('modalClient') modalClient!: ModalAdminProductComponent;
    detailsOrderMessage: string = '';
    detailsOrderMessage2: string = '';
    detailsOrderMessage3: string = '';
    detailsOrderMessage4: string = '';
    orders: Array<any> = [];
    products: Array<any> = [];
    users: Array<any> = [];
    id: number = 0;
    hora: number = 0;
    minuto: number = 0;
    segundo: number = 0;
    timer: string = `${this.hora}:${this.minuto}:${this.segundo}`;


    sendOrder(clientInfo: any) {
        console.log(clientInfo, this.products);
        const dataOrder = {
          name: clientInfo.name,
          price: clientInfo.price,
          products: this.products,
          type: clientInfo.type,
          dataEntry: new Date()
        };
        this.consumirApi.getProducts().subscribe(() => {
          console.log(dataOrder);
        });
      }
    closeModal() {
        this.showModal = false;
    }

    constructor(private consumirApi: ConsumirApiService) { }
    toMenu() {
        this.menu = true;
        console.log(this.menu)

    }
    toPersonal() {
        this.menu = false;
        console.log(this.menu)

    }
    ngOnInit(): void {
        this.getProducts();
        this.getUsers();
    }
    getUsers() {
        this.consumirApi.getUsers().subscribe((data) => {
            console.log(data);
            this.users = data;
        });
    }
    getProducts() {
        this.consumirApi.getProducts().subscribe((data) => {
            console.log(data);
            this.products = data;
        });
    }

    // onclick(id: string) {
    // this.consumirApi.changeStatusOrders(id).subscribe((data2) => {
    //     console.log(data2);
    //     this.getAllOrders();
    // });
    // }
addProduct(){
    this.modalClient.openModal();

    console.log('product works')
}
addUser(){
    this.modalClient.openModal();

    console.log('users works')

}
    removeProduct(index: number) {
        this.products.splice(index, 1);
    }
}
