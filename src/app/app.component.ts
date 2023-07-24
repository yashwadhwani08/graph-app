import { Component } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'graph-app';

  flowChart: any;
  stringFlowChart: any = '';
  constructor() {
    this.createFlowchart();
  }

  ngOnInit(): void {
    mermaid.initialize({});
  }

  createFlowchart() {
    this.flowChart = [
      "%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': 'rgba(229,96,115,.06)' , 'primaryTextColor' :  '#e56073', 'font-family': '-apple system, BlinkMacSystemFont, segoe ui, Oxygen, Ubuntu, Cantarell, fira sans, droid sans, helvetica neue, sans - serif'}}}%%",
      'graph LR',
      'id1(Start) --> id2(Ques 1)',
      'id2 --> id3[Ques 2] & id4[Ques 3]',
      'id3 & id4 --> id5[Ques 4]',
      'id5 --> id6',
      'id6[Ques 5] --> id7[End]',
      'id6 --> id2',
    ];
    this.stringFlowChart = this.flowChart.join('\n');
    console.log(this.stringFlowChart);
  }
}
