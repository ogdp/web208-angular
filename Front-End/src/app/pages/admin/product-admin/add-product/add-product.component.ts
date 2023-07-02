import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { UploadServiceService } from 'src/app/service/uploadImage/upload-service.service';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category/category-service.service';
import { ICategory } from 'src/common/Category';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  isMatchSize: boolean = false;
  isLoadding: boolean = false;
  listCategory?: ICategory[] | any;
  constructor(
    private titleService: Title,
    private uploadSV: UploadServiceService,
    private productSV: ProductServiceService,
    private router: Router,
    private categorySV: CategoryServiceService
  ) {
    this.titleService.setTitle('Thêm sản phẩm');
    this.categorySV.getCategory().subscribe(
      (response: any) => {
        this.listCategory = response.category;
        this.addForm.get('categoryId')?.setValue(this.listCategory[0]._id);
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

  // Schema validation
  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(64),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    status: new FormControl('true', [Validators.required]),
    description: new FormControl(''),
    note: new FormControl(''),
    categoryId: new FormControl('', [Validators.required]),
  });
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
    return this.addForm.get('name');
  }
  get price() {
    return this.addForm.get('price');
  }
  get image() {
    return this.addForm.get('image');
  }
  get quantity() {
    return this.addForm.get('quantity');
  }
  get status() {
    return this.addForm.get('status');
  }
  get description() {
    return this.addForm.get('description');
  }
  get note() {
    return this.addForm.get('note');
  }
  get categoryId() {
    return this.addForm.get('categoryId');
  }
  // Submited
  selectedImages: File[] = [];
  handleFileInput(event: any) {
    this.selectedImages = event.target.files;
  }
  notificationPro: number = 0;
  onSubmit() {
    if (this.addForm.status !== 'VALID') {
      return console.log('Thất bại');
    }
    // Pass thành công
    this.isLoadding = true;
    const formData = new FormData();
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images', this.selectedImages[i]);
    }
    this.uploadSV.uploadIMG(formData).subscribe(
      (data: any) => {
        const { urls } = data;
        this.addForm.value.image = urls;
        const dataSend: any = this.addForm.value;
        dataSend.size = ['M', 'L', 'XL', 'XXL'];
        // console.log(this.addForm.value);
        const token = JSON.parse(
          String(localStorage.getItem('user'))
        ).accessToken;
        // console.log(token);
        this.productSV.addProduct(dataSend, token).subscribe(
          (response: any) => {
            // console.log(response);
            this.notificationPro = 1;
            setTimeout(() => {
              this.notificationPro = 0;
              this.router.navigate(['/admin/products']);
            }, 1200);
            // alert('Thêm sản phẩm thành công');
            return (this.isLoadding = false);
          },
          (err: any) => {
            this.isLoadding = false;
            return console.log(err);
          }
        );
        return console.log('Thành công');
      },
      (err: any) => {
        console.log(err);
        this.isLoadding = false;
        alert('Tải lên hình ảnh không thành công');
        return err;
      }
    );
  }
}
