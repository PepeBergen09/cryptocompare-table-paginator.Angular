import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pages;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
