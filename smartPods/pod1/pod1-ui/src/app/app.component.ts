import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pod1-ui';
  apiData: any = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.apiData = null;
    this.error = null;
    this.http.get(`${environment.pod1ApiUrl}/data`).subscribe(
      (response) => {
        this.apiData = response;
      },
      (err) => {
        console.error('Error fetching data from pod1-api', err);
        this.error = `Failed to fetch data: ${err.message || 'Unknown error'}`;
      }
    );
  }
}
