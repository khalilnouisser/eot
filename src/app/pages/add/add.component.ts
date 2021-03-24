import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  width: number;

  startupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  structureForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  image: {file: File, content: string | ArrayBuffer};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.width = 6;
  }

  resizeInput(inputText: string): number {
    const minWidth = 6;

    if (inputText.length + 4 > minWidth) {
      return inputText.length + 4;
    } else {
      return minWidth;
    }
  }

  onImageSelection(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      let file: File;
      [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image = {
          file,
          content: reader.result
        };
      };
    }
  }

}
