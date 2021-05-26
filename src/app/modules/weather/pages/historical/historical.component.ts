import { Component, OnInit } from '@angular/core';
import { HistoricalInfoModel } from 'src/app/data/historical-info-model';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {

  historicals: Array<HistoricalInfoModel> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
