import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReturnBiblioComponent } from './client-return-biblio.component';

describe('ClientReturnBiblioComponent', () => {
  let component: ClientReturnBiblioComponent;
  let fixture: ComponentFixture<ClientReturnBiblioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReturnBiblioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReturnBiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
