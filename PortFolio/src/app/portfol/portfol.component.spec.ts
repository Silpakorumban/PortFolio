import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolComponent } from './portfol.component';

describe('PortfolComponent', () => {
  let component: PortfolComponent;
  let fixture: ComponentFixture<PortfolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
