import { Component, Inject } from '@angular/core';
import { TestserviceService } from './testservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(@Inject(TestserviceService) testserviceService) {
    console.log(testserviceService);
  }
}
