let pageViews = document.querySelector('.pageviews');
let progress = document.querySelector('.progress-overlay');

// pageViews.innerHTML = 'hello';

var slider = document.getElementById('myRange');
var monthly = document.querySelector('.monthly');

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  switch (this.value) {
    case '1':
      pageViews.innerHTML = '10K pageviews ';
      monthly.innerHTML = '$8 per month';
      progress.style = 'width: 0';
      break;
    case '2':
      pageViews.innerHTML = '50K pageviews';
      monthly.innerHTML = '$12 per month';
      progress.style = 'width: 25%';
      break;
    case '3':
      pageViews.innerHTML = '100K pageviews';
      monthly.innerHTML = '$16 per month';
      progress.style = 'width: 50%';
      break;
    case '4':
      pageViews.innerHTML = '500k pageviews';
      monthly.innerHTML = '$24 per month';
      progress.style = 'width: 75%';
      break;
    case '5':
      pageViews.innerHTML = '1M pageviews';
      monthly.innerHTML = '$36 per month';
      progress.style = 'width: 100%';
      break;
    default:
      console.log(typeof this.value);
  }
};

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
