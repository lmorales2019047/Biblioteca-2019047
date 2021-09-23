import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-biblio-create',
  templateUrl: './admin-biblio-create.component.html',
  styleUrls: ['./admin-biblio-create.component.css']
})
export class AdminBiblioCreateComponent implements OnInit {
  public type = "book";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectType() {
    if (this.type === "book") {
      this.router.navigate(["/admin/biblio/create/book"]);
      return;
    }

    if (this.type === "magazine") {
      this.router.navigate(["/admin/biblio/create/magazine"]);
      return;
    } else {
      alert("Error: Opción inválida")
    }

  }

}
