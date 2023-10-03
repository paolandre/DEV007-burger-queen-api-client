import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalAdminProductComponent } from 'src/app/shared-components/modal-add-product/modal-admin-product.component';
import { ModalAdminUserComponent } from 'src/app/shared-components/modal-add-user/modal-add-user.component';
import { ModalComponent } from 'src/app/shared-components/modal-message/modal.component';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {
  @ViewChild('modal') modal!: ModalComponent;
  detailsOrderMessage: string = '';
  detailsOrderMessage2: string = '';
  detailsOrderMessage3: string = '';
  idDelete: any;
  idDeleteProduct: any;
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
      dataEntry: new Date(),
    };
    this.consumirApi.postProduct(data).subscribe(() => {
      console.log(dataOrder);
    });
    this.getProducts();
  }
  closeModal() {
    this.showModal = false;
  }
  // Confirmar Agregar o Editar Usuario
  addOrEditUser(data: any) {
    console.log(data, this.products);
    const newUser = {
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.password,
      dataEntry: new Date(),
    };
    if (data.userId) {
      this.consumirApi.editUser(newUser, data.userId).subscribe(() => {
        console.log('con id');
      });
    } else {
      this.consumirApi.postUser(newUser).subscribe(() => {
        console.log('sin id');
      });
    }

    this.getUsers();
  }

  constructor(private consumirApi: ConsumirApiService) {}
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

  addProduct() {
    this.modalClient.openModal();
    console.log('product works');
  }
  addUser() {
    this.modalInput1 = '';
    this.modalInput2 = '';
    this.modalInput3 = '';
    this.modalInput4 = '';
    this.modalUser.openModal('');

    console.log('users works');
  }
  //Eliminar producto
  removeProduct(idP: any) {
    this.idDeleteProduct = idP;
    this.consumirApi
      .getSpecificProduct(this.idDeleteProduct)
      .subscribe((data) => {
        const dataProduct = data;
        this.detailsOrderMessage =
          'Esta seguro que quiere elminar el producto: ' + dataProduct;
      });
    this.modal.openModal();
  }
  // Eliminar Usuario
  removeUser(idD: any) {
    this.idDelete = idD;
    this.consumirApi.getSpecificUser(this.idDelete).subscribe((data) => {
      const dataUser = data;
      this.detailsOrderMessage =
        'Esta seguro que quiere elminar al usuario: ' + dataUser.email;
    });
    this.modal.openModal();
  }
  // Editar Usuario
  editThisUser(id: any) {
    this.consumirApi.getSpecificUser(id).subscribe((data) => {
      const dataUser = data;
      console.log(dataUser);
      this.modalInput1 = dataUser.name;
      this.modalInput2 = dataUser.email;
      this.modalInput3 = dataUser.role;
      this.modalInput4 = '';
    });
    this.modalUser.openModal(id);
  }

  // editThisProduct(id: any) {
  //   this.consumirApi.getSpecificProduct(id).subscribe((data) => {
  //     const dataProduct = data;
  //     console.log(dataProduct);
  //     this.modalInput1 = dataProduct.;
  //     this.modalInput2 = dataProduct.type;
  //     this.modalInput3 = dataProduct.price;
  //   });
  //   this.modalClient.openModal(id);
  // }
}
