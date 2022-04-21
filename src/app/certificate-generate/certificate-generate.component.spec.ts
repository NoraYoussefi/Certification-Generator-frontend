import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGenerateComponent } from './certificate-generate.component';

describe('CertificateGenerateComponent', () => {
  let component: CertificateGenerateComponent;
  let fixture: ComponentFixture<CertificateGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
