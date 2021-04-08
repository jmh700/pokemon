import { TestBed } from '@angular/core/testing';

import { ListadopokemonService } from './listadopokemon.service';

describe('ListadopokemonService', () => {
  let service: ListadopokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadopokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
