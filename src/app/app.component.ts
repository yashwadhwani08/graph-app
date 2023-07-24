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
       "graph LR",
        "id1[Start] --> id2[Ques 1]",
        "id2 --> id3[Ques 2] & id4[Ques 3]",
        "id3 & id4 --> id5[Ques 4]",
        "id5 --> id6",
        "id6[Ques 5] --> id7[End]",
        "id6 --> id2"
    ];
    this.stringFlowChart = this.flowChart.join("\n");
  } 
}
