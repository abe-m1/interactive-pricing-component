let pageViews = document.querySelector('.pageviews');

// pageViews.innerHTML = 'hello';

var slider = document.getElementById('myRange');
var monthly = document.querySelector('.monthly');

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  switch (this.value) {
    case '1':
      pageViews.innerHTML = '10K pageviews ';
      monthly.innerHTML = '$8 per month';
      break;
    case '2':
      pageViews.innerHTML = '50K pageviews';
      monthly.innerHTML = '$12 per month';
      break;
    case '3':
      pageViews.innerHTML = '100K pageviews';
      monthly.innerHTML = '$16 per month';
      break;
    case '4':
      pageViews.innerHTML = '500k pageviews';
      monthly.innerHTML = '$24 per month';
      break;
    case '5':
      pageViews.innerHTML = '1M pageviews';
      monthly.innerHTML = '$36 per month';
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