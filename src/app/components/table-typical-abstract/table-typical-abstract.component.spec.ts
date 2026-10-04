import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTypicalAbstractComponent } from './table-typical-abstract.component';

describe('TableTypicalAbstractComponent', () => {
  let component: TableTypicalAbstractComponent;
  let fixture: ComponentFixture<TableTypicalAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTypicalAbstractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTypicalAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
