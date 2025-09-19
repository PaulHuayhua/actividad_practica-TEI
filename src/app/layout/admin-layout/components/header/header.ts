import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class Header {
  userName = 'Usuario';
  currentDate = new Date().toLocaleDateString();
}
