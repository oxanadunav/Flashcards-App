import { TestBed, inject } from '@angular/core/testing';

import { CloudTranslationService } from './cloudtranslationservice';

describe('CloudTranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudTranslationService]
    });
  });

  it('should be created', inject([CloudTranslationService], (service: CloudTranslationService) => {
    expect(service).toBeTruthy();
  }));
});
