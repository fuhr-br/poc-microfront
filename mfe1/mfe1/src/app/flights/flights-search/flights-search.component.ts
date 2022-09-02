import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {
constructor(private router: Router, private route: ActivatedRoute){

}
  search(): void {
    alert('Not implemented for this demo!');
  }

  navegar(): void {
   this.router.navigate(['/mfe2'])
  }

}
