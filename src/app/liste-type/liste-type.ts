import { Component, OnInit } from '@angular/core';
import { Tyype } from '../model/type.model';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { UpdateType } from '../update-type/update-type';

@Component({
  imports: [UpdateType],
  selector: 'app-liste-type',
  styles: ``,
  templateUrl: './liste-type.html',
})

export class ListeTypes implements OnInit {

  types!: Tyype[];
  ajout: boolean = true;

  updatedType: Tyype = { idType: 0, nomType: "" };

  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }
  chargerTypes() {
    this.types = this.vetementService.listeTypes();
  }

  typeUpdated(t: Tyype) {
    console.log("Type updated event", t);
    if (this.ajout) {
      this.vetementService.ajouterType({ ...t });
    } else {
      this.vetementService.updateType({ ...t });
    }
    this.chargerTypes();
    this.updatedType = { idType: 0, nomType: "" };
    this.ajout = true;
  }
  
    updateType(t: Tyype) {
    this.updatedType = { ...t };
    this.ajout = false;
  }
}

