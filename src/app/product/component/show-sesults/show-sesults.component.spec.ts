import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSesultsComponent } from './show-sesults.component';

describe('ShowSesultsComponent', () => {
  let component: ShowSesultsComponent;
  let fixture: ComponentFixture<ShowSesultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSesultsComponent]
    });
    fixture = TestBed.createComponent(ShowSesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
