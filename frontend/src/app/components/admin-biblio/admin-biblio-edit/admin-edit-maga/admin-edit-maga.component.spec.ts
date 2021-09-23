import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMagaComponent } from './admin-edit-maga.component';

describe('AdminEditMagaComponent', () => {
  let component: AdminEditMagaComponent;
  let fixture: ComponentFixture<AdminEditMagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditMagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditMagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
