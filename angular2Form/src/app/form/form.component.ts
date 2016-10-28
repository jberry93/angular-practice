import {Component} from '@angular/core';
import {Gamer} from './gamer';

@Component({
  moduleId: JSON.stringify(module.id),
  selector: 'basic-form',
  templateUrl: 'form.component.html'
})

export class FormComponent{
  games = [
    'Overwatch',
    'Diablo 3',
    'Battfield 1',
    'Call of Duty: Infinite Warfare',
    'Uncharted 4',
    'Dragon Quest'
  ];
  model = new Gamer(1, '', this.games[0], null);
  submitted = false;
  onSubmit(){ this.submitted = true; }
}
