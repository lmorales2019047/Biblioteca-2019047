import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBiblioCreateComponent } from './admin-biblio-create.component';

describe('AdminBiblioCreateComponent', () => {
  let component: AdminBiblioCreateComponent;
  let fixture: ComponentFixture<AdminBiblioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBiblioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBiblioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
