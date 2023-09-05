import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalAdminProductComponent } from 'src/app/shared-components/modal-admin-product/modal-admin-product.component';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {
    showModal: boolean = false;
    modalTitle: string = 'Nombre del ítem';
    modalMessage: string = 'Momento del día';
    modalMessage1: string = 'Precio';
    modalInput1: string = '';
    modalInput2: string = '';
    modalInput3: string = '';
    modalInput1Placeholder: string = 'Nombre';
    modalInput2Placeholder: string = 'Mesa';
    modalInput3Placeholder: string = 'Mesa';
    modaltext: string = 'Confirmar'; 
    singleProduct: boolean = true;
    singleCategory: boolean = true;
    singlePrice: boolean = true;
    singleTrash: boolean = true;
    menu: boolean = true;
    //Aquí hay que agregar tipados
    @ViewChild('modal') modal!: ModalAdminProductComponent;
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
    getOrderForId(id: string) {
        this.consumirApi.getEspecificOrder(id).subscribe((data) => {
            console.log(data);
        });
    }

    // onclick(id: string) {
    // this.consumirApi.changeStatusOrders(id).subscribe((data2) => {
    //     console.log(data2);
    //     this.getAllOrders();
    // });
    // }
addProduct(){
    this.detailsOrderMessage = "Pronto podrás añadir un producto";

    this.showModal = true;
}
addUser(){
    this.detailsOrderMessage = "Pronto podrás añadir un usuario";

    this.showModal = true;
}
    message(id: string) {
        this.products = [];
        this.consumirApi.getEspecificOrder(id).subscribe((data) => {
            data.products.forEach((element: any) => {
                this.products.push(`${element.product.name}`);
            });
            console.log(this.products);
            this.detailsOrderMessage = `Cliente: ${data.client}`;
            this.detailsOrderMessage2 = `Estado: ${data.status}`;
            this.detailsOrderMessage3 = `Pedido: ${this.products.join('-')}`;
        });

        this.showModal = true;

    }

    timerFunction() {
        setInterval(() => {
            this.segundo += 1;
        }, 1000);
    }
    finishOrder() { }

    removeProduct(index: number) {
        this.products.splice(index, 1);
    }
}
