import Rx from 'rxjs/Rx';
import './styles.css';

const button = document.querySelector('button');
const heading = document.querySelector('h1');
const item = document.querySelectorAll('.item');

Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe((count) => console.log(`Clicked ${count} times!`));

Rx.Observable.fromEvent(heading, 'mouseover')
  .throttleTime(900)
  .subscribe(event => console.log(event));

Rx.Observable.fromEvent(item, 'mouseover')
  .subscribe(event => event.target.querySelector('.dropdown').classList.add('active'));
