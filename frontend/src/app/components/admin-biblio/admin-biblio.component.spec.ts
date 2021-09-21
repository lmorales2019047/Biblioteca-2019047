import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBiblioComponent } from './admin-biblio.component';

describe('AdminBiblioComponent', () => {
  let component: AdminBiblioComponent;
  let fixture: ComponentFixture<AdminBiblioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBiblioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
