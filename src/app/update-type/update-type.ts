import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tyype } from '../model/type.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-type',
  styles: ``,
  templateUrl: './update-type.html',
})
export class UpdateType implements OnInit  {
  @Input()
  type!: Tyype;
  @Input()
  ajout!: boolean;
  @Output()
  typeUpdated = new EventEmitter<Tyype>();

   ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ", this.type);
  }
  saveType() {
    this.typeUpdated.emit(this.type);
  }
}
