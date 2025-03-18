import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwowledgeComponent } from './kwowledge.component';

describe('KwowledgeComponent', () => {
  let component: KwowledgeComponent;
  let fixture: ComponentFixture<KwowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KwowledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
