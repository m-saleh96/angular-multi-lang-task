import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {

  imageUrl?: string | ArrayBuffer | null = 'assets/images/mohamed.jpg';
  imageFile: File | null = null;

  handleImageClick() {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput.click();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.imageFile = file;

    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

}
