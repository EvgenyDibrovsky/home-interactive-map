import initInteractive from './modules/interactive';
import '../main.css';

document.addEventListener('DOMContentLoaded', () => {
  initInteractive();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
