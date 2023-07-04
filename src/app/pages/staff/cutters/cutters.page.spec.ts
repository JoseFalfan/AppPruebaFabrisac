import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuttersPage } from './cutters.page';

describe('CuttersPage', () => {
  let component: CuttersPage;
  let fixture: ComponentFixture<CuttersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuttersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
