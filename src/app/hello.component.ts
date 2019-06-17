import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

@Component({
  selector: 'shout',
  template: `<h1>Shout! {{flag}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ShoutComponent  {
  @Input() flag: string;
}
