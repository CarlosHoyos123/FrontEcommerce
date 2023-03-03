import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colorsAvailable } from 'src/app/interface/color';
import { Size } from 'src/app/interface/size';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {

  @Input() option?: Size;
  @Input() color?: colorsAvailable;
  @Output() sizeSelection: EventEmitter<Size> = new EventEmitter();
  @Output() colorSelection: EventEmitter<colorsAvailable> = new EventEmitter();

  selectedSize:number = 0;

  sizeOptionChange(){
    this.sizeSelection.emit(this.option);
  }

  colorOptionChange(){
    this.colorSelection.emit(this.color);
  }

}
