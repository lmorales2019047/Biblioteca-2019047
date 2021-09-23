import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAskBiblioComponent } from './client-ask-biblio.component';

describe('ClientAskBiblioComponent', () => {
  let component: ClientAskBiblioComponent;
  let fixture: ComponentFixture<ClientAskBiblioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAskBiblioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAskBiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
