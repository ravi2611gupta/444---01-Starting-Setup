import { Component } from '@angular/core';
import { signalsComponent } from './signals/signals.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [signalsComponent]
})
export class AppComponent {}
