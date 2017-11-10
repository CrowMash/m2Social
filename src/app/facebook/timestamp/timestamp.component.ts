import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {

  @Input() time?: number;
  date: string;

  constructor() {
  }

  ngOnInit() {
    if (this.time) {
      this.date = new Date(this.time * 1000).toLocaleDateString();
    }
  }

}
