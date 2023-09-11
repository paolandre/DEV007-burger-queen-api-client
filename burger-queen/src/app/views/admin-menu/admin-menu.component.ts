import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalAdminProductComponent } from 'src/app/shared-components/modal-add-product/modal-admin-product.component';
import { ModalAdminUserComponent } from 'src/app/shared-components/modal-add-user/modal-add-user.component';

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
    modalInput4: string = '';
    modaltext: string = 'Confirmar';

    singleProduct: boolean = true;
    singleCategory: boolean = true;
    singlePrice: boolean = true;
    singleTrash: boolean = true;
    menu: boolean = true;
    //Aquí hay que agregar tipados
    @ViewChild('modalClient') modalClient!: ModalAdminProductComponent;
    @ViewChild('modalUser') modalUser!: ModalAdminUserComponent;

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

    getProducts() {
        this.consumirApi.getProducts().subscribe((data) => {
            console.log(data);
            this.products = data;
        });
    }
    addNewProduct(data: any) {
        console.log(data, this.products);
        const dataOrder = {
            name: data.name,
            price: data.price,
            type: data.type,
            dataEntry: new Date()
        };
        this.consumirApi.postProduct(data).subscribe(() => {
            console.log(dataOrder);
        });
        this.getProducts();
    }
    closeModal() {
        this.showModal = false;
    }

    addNewUser(data: any) {
        console.log(data, this.products);
        const newUser = {
            name: data.name,
            email: data.email,
            role: data.role,
            password: data.password,
            dataEntry: new Date()
        };
        this.consumirApi.postUser(data).subscribe(() => {
            console.log(newUser);
        });
        this.getUsers();

    }

    constructor(private consumirApi: ConsumirApiService) { }
    toMenu() {
        this.menu = true;
    }
    toPersonal() {
        this.menu = false;
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


    // onclick(id: string) {
    // this.consumirApi.changeStatusOrders(id).subscribe((data2) => {
    //     console.log(data2);
    //     this.getAllOrders();
    // });
    // }
    addProduct() {
        this.modalClient.openModal();
    console.log('product works')
    }
    addUser() {
        this.modalUser.openModal();

        console.log('users works')

    }
    removeProduct(index: number) {
        this.products.splice(index, 1);
    }
    removeUser(id: number) {
       // this.users.splice(index, 1);
        this.consumirApi.deleteUser(id).subscribe(() => {
            console.log(id, 'el aidii');
        });
        this.getUsers();
    }
}


