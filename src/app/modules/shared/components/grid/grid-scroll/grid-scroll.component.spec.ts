import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridScrollComponent } from './grid-scroll.component';

describe('GridScrollComponent', () => {
  let component: GridScrollComponent;
  let fixture: ComponentFixture<GridScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
