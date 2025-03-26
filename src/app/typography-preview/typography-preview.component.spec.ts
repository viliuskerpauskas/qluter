import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyPreviewComponent } from './typography-preview.component';

describe('TypographyPreviewComponent', () => {
  let component: TypographyPreviewComponent;
  let fixture: ComponentFixture<TypographyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
