import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  @Output() truyenCon = new EventEmitter<object>();
  schemaForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  ngOnInit(): void {}
  get name() {
    return this.schemaForm.get('name');
  }
  onSubmit() {
    if (this.schemaForm.status !== 'VALID') return;
    this.truyenCon.emit(this.schemaForm.value);
  }
}
