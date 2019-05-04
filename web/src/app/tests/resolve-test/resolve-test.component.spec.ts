import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveTestComponent } from './resolve-test.component';

describe('ResolveTestComponent', () => {
  let component: ResolveTestComponent;
  let fixture: ComponentFixture<ResolveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
