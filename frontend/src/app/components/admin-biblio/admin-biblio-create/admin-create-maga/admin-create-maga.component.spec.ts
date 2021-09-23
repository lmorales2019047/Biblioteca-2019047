import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateMagaComponent } from './admin-create-maga.component';

describe('AdminCreateMagaComponent', () => {
  let component: AdminCreateMagaComponent;
  let fixture: ComponentFixture<AdminCreateMagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateMagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateMagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
