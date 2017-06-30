import Chart from './charts';
import { Map } from './map';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const chart = new Chart();
    const map = new Map();

    console.log(chart);
    console.log(map);
});
