import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PereFils',
  templateUrl: './PereFils.component.html',
  styleUrls: ['./PereFils.component.css']
})
export class PereFilsComponent implements OnInit {
  @Input() RPF!: number;

  constructor() { }

  ngOnInit() {
  }

}
