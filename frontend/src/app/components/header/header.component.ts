import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  classAdded: boolean = false;
  // page_title:string="";
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit(): void {
    this.classAdded = false
    this.document.body.classList.remove('sidenav-toggled');
    document.querySelector('#sidenav-main')?.classList.remove('bg-white')
  }
  addClassToBody() {
    if (this.classAdded == false) {
      this.document.body.classList.add('sidenav-toggled');
      this.classAdded = true;
    } else {
      this.document.body.classList.remove('sidenav-toggled');
      this.classAdded = false;
    }
  }

}
