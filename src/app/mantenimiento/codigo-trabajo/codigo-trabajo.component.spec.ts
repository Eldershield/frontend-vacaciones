import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoTrabajoComponent } from './codigo-trabajo.component';

describe('CodigoTrabajoComponent', () => {
  let component: CodigoTrabajoComponent;
  let fixture: ComponentFixture<CodigoTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
