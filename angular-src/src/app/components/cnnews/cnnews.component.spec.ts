import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnnewsComponent } from './cnnews.component';

describe('CnnewsComponent', () => {
  let component: CnnewsComponent;
  let fixture: ComponentFixture<CnnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
