import {Component, HostListener} from '@angular/core';
import {SessionStorageService} from './shared/services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sessionStorageService: SessionStorageService) {
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(evt: KeyboardEvent): void {
    if (this.sessionStorageService.isUser()) {
      if (evt.key === 'PrintScreen') {
        event.preventDefault();
      }
    }
  }

  @HostListener('contextmenu', ['$event'])
  onRightMouseClick(evt: MouseEvent): void {
    if (this.sessionStorageService.isUser()) {
      if (evt.which === 3) {
        event.preventDefault();
      }
    }
  }
}
