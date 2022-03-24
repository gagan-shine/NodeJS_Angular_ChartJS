import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() page_title: string = "";
  // page_title:string="";
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit(): void {
  }
}
