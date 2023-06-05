import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { UploadServiceService } from 'src/app/service/uploadImage/upload-service.service';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category/category-service.service';
@Component({
  selector: 'app-updated-product',
  templateUrl: './updated-product.component.html',
  styleUrls: ['./updated-product.component.css'],
})
export class UpdatedProductComponent implements OnInit {
  isMatchSize: boolean = false;
  isLoadding: boolean = false;
  listCategory: any;
  notificationPro: number = 0;
  id: string = '';
  product: any;

  // Schema validation
  updateForm: any = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(64),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl(''),
    imageOld: new FormControl(''),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    status: new FormControl('true', [Validators.required]),
    description: new FormControl(''),
    note: new FormControl(''),
    categoryId: new FormControl('6477f7e15142b55388df1394', [
      Validators.required,
    ]),
  });
  constructor(
    private titleService: Title,
    private uploadSV: UploadServiceService,
    private productSV: ProductServiceService,
    private router: Router,
    private categorySV: CategoryServiceService,
    private params: ActivatedRoute
  ) {
    this.titleService.setTitle('Cập nhật sản phẩm');
    this.categorySV.getCategory().subscribe(
      (response: any) => {
        this.listCategory = response.category;
      },
      (err: any) => {
        console.log(err);
      }
    );
    // getId
    const { _value }: any = this.params.url;
    this.id = _value[1].path;
    // getOneProduct
    this.productSV.getOneProduct(String(this.id)).subscribe(
      (response: any) => {
        this.product = response.product;
        this.updateForm = new FormGroup({
          name: new FormControl(this.product.name, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(64),
          ]),
          price: new FormControl(this.product.price, [
            Validators.required,
            Validators.min(0),
          ]),
          image: new FormControl(''),
          imageOld: new FormControl(this.product.image),
          quantity: new FormControl(this.product.quantity, [
            Validators.required,
            Validators.min(0),
          ]),
          status: new FormControl(this.product.status, [Validators.required]),
          description: new FormControl(this.product.description),
          note: new FormControl(''),
          categoryId: new FormControl(this.product.categoryId, [
            Validators.required,
          ]),
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  showSize() {
    this.isMatchSize = !this.isMatchSize;
  }
  // Config validate
  imageValidator(control: FormControl): { [key: string]: any } | null {
    const file = control.value;

    if (file && file.name) {
      console.log(file);
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const isValidExtension = allowedExtensions.includes(fileExtension);

      if (!isValidExtension) {
        return { invalidImage: true };
      }
    }
    return null;
  }
  // Khai báo hàm bắt sự kiện khi input thay đổi
  ngOnInit(): void {}
  // Hiển thị thông báo error
  noti_er_name = [
    'Tên sản phẩm là trường bắt buộc',
    'Tên sản phẩm không được bỏ trống',
    'Tên sản phẩm tối thiểu 3 ký tự',
    'Tên sản phẩm tối đa 64 ký tự',
  ];
  noti_er_price = [
    'Giá sản phẩm là trường bắt buộc',
    'Giá sản phẩm không được bỏ trống',
    'Giá sản phẩm phải là lơn hơn , bằng 0',
  ];
  noti_er_image = [
    'Sản phẩm phải có ảnh đại diện',
    'Ảnh phải thuộc định dạng jpg, jpeg, png, gif',
  ];
  noti_er_quantity = [
    'Số lượng sản phẩm là trường bắt buộc',
    'Số lượng sản phẩm không được bỏ trống',
    'Số lượng sản phẩm phải là số dương',
  ];
  // Hàm check value
  get name() {
    return this.updateForm.get('name');
  }
  get price() {
    return this.updateForm.get('price');
  }
  get image() {
    return this.updateForm.get('image');
  }
  get imageOld() {
    return this.updateForm.get('imageOld');
  }
  get quantity() {
    return this.updateForm.get('quantity');
  }
  get status() {
    return this.updateForm.get('status');
  }
  get description() {
    return this.updateForm.get('description');
  }
  get note() {
    return this.updateForm.get('note');
  }
  get categoryId() {
    return this.updateForm.get('categoryId');
  }

  // Set value default for form

  // Submited
  selectedImages: File[] = [];
  handleFileInput(event: any) {
    this.selectedImages = event.target.files;
  }
  onSubmit() {
    const dataSend = this.updateForm.value;
    dataSend.size = ['M', 'L', 'XL', 'XXL'];
    let checkImg = 0;
    if (dataSend.image == '') {
      dataSend.image = dataSend.imageOld;
      delete dataSend.imageOld;
    } else {
      checkImg = 1;
      dataSend.image = 'Waiting get url image';
      delete dataSend.imageOld;
    }
    if (this.updateForm.status !== 'VALID') {
      return console.log('Thất bại');
    }
    console.log('Thành công');
    this.isLoadding = true;
    // Lấy token
    const token = JSON.parse(String(localStorage.getItem('user'))).accessToken;
    if (checkImg == 1) {
      const formData2 = new FormData();
      for (let i = 0; i < this.selectedImages.length; i++) {
        formData2.append('images', this.selectedImages[i]);
      }
      this.uploadSV.uploadIMG(formData2).subscribe(
        (data: any) => {
          const { urls } = data;
          dataSend.image = urls;

          this.productSV.updateProduct(this.id, dataSend, token).subscribe(
            (response: any) => {
              this.notificationPro = 1;
              setTimeout(() => {
                this.notificationPro = 0;
                this.router.navigate(['/admin/products']);
              }, 1200);
              return (this.isLoadding = false);
            },
            (err: any) => {
              this.isLoadding = false;
              return console.log(err);
            }
          );
          return true;
        },
        (err: any) => {
          console.log(err);
          this.isLoadding = false;
          alert('Tải lên hình ảnh không thành công');
          return err;
        }
      );
    } else {
      this.productSV.updateProduct(this.id, dataSend, token).subscribe(
        (response: any) => {
          this.notificationPro = 1;
          setTimeout(() => {
            this.notificationPro = 0;
            this.router.navigate(['/admin/products']);
          }, 1200);
          return (this.isLoadding = false);
        },
        (err: any) => {
          this.isLoadding = false;
          return console.log(err);
        }
      );
      return true;
    }
    return true;
  }
}
