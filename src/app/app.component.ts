import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypographyPreviewComponent } from "./typography-preview/typography-preview.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypographyPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'qluter';
}
