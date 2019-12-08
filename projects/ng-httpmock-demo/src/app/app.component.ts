import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-httpmock-demo';

    public constructor(http: HttpClient) {
        http.get('api/values')
            .subscribe(response => this.print(response));

        http.post('api/values', {})
            .subscribe(response => this.print(response));

        http.get('api/values/1')
            .subscribe(response => this.print(response));
    }

    private print(response: any): void {
        console.dir(response);
    }
}
