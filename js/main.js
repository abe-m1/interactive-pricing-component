let pageViews = document.querySelector('.pageviews');
let progress = document.querySelector('.progress-overlay');
let checkbox = document.querySelector('.check');
// pageViews.innerHTML = 'hello';

var slider = document.getElementById('input');
var monthly = document.querySelector('.monthly-dollar');

console.log(checkbox.checked);
let discount = checkbox.checked ? true : false;
let level = 2;

let options = [
  {
    views: '10K pageviews',
    perMonth: 8,
    width: 0,
  },
  {
    views: '50K pageviews',
    perMonth: 12,
    width: 25,
  },
  {
    views: '100K pageviews',
    perMonth: 16,
    width: 50,
  },
  {
    views: '500k pageviews',
    perMonth: 24,
    width: 75,
  },
  {
    views: '1M pageviews',
    perMonth: 36,
    width: 100,
  },
];

function calc(level, discount) {
  console.log('FIRed', level, discount);
  pageViews.innerHTML = options[level].views;
  monthly.innerHTML = `$${
    discount ? options[level].perMonth * 0.75 : options[level].perMonth
  }.00`;
  progress.style = `width: ${options[level].width}%`;
}
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  level = this.value;
  calc(level, discount);
  // switch (this.value) {
  //   case '1':
  //     pageViews.innerHTML = '10K pageviews ';
  //     monthly.innerHTML = '$8 per month';
  //     progress.style = 'width: 0';
  //     break;
  //   case '2':
  //     pageViews.innerHTML = '50K pageviews';
  //     monthly.innerHTML = '$12 per month';
  //     progress.style = 'width: 25%';
  //     break;
  //   case '3':
  //     pageViews.innerHTML = '100K pageviews';
  //     monthly.innerHTML = '$16 per month';
  //     progress.style = 'width: 50%';
  //     break;
  //   case '4':
  //     pageViews.innerHTML = '500k pageviews';
  //     monthly.innerHTML = '$24 per month';
  //     progress.style = 'width: 75%';
  //     break;
  //   case '5':
  //     pageViews.innerHTML = '1M pageviews';
  //     monthly.innerHTML = '$36 per month';
  //     progress.style = 'width: 100%';
  //     break;
  //   default:
  //     console.log(typeof this.value);
  // }
};
console.log(level);
checkbox.oninput = function () {
  console.log(this.checked);
  discount = checkbox.checked;
  calc(level, discount);
};

pageViews.innerHTML = options[level].views;
monthly.innerHTML = `$${options[level].perMonth}.00`;
progress.style = `width: ${options[level].width}%`;

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
