import Rx from 'rxjs/Rx';
import './styles.css';

const button = document.querySelector('button');
const heading = document.querySelector('h1');


Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe((count) => console.log(`Clicked ${count} times!`));

Rx.Observable.fromEvent(heading, 'mouseover')
  .throttleTime(800)
  .subscribe(event => console.log(event));

