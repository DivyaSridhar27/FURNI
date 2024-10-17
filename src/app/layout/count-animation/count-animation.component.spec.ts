import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAnimationComponent } from './count-animation.component';

describe('CountAnimationComponent', () => {
  let component: CountAnimationComponent;
  let fixture: ComponentFixture<CountAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
