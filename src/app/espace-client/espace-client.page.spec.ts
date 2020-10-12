import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspaceClientPage } from './espace-client.page';

describe('EspaceClientPage', () => {
  let component: EspaceClientPage;
  let fixture: ComponentFixture<EspaceClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspaceClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
