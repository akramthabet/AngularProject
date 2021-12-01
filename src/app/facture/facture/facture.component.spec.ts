import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractureComponent } from './facture.component';

describe('FactureComponent', () => {
  let component: FractureComponent;
  let fixture: ComponentFixture<FractureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
