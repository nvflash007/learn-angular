import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  data: string = '';
  flag: string = 'something';
  classis: string = 'forfalse';
  names: string[] = ['kumar', 'gaurav', 'mishra', 'is', 'going', 'to', 'the', 'future'];
  constructor(private router:Router){}
  ngOnInit(): void {
  }
  onButtonClick():void {
    this.flag = this.flag === 'true' ? 'false' : 'true';
    this.classis = this.flag === 'true' ? 'fortrue' : 'forfalse';
  }
  getMoreNames(): void{
    this.names = ['kumar', 'gaurav', 'mishra', 'is', 'going', 'to', 'the', 'future', 'and', 'learning', 'angular'];
  }
  trackByIndex(index: number, currentIndex: number): number{
    return currentIndex;
  }
  home() {
    this.router.navigate(['/'])
  }
}
