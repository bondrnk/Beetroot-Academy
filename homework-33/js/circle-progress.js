var bar = new ProgressBar.Circle('#circle-progress', {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#13e28d', width: 5 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (circle.value() * 10).toFixed(1);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '$f-lato';
bar.text.style.fontSize = '1.2rem';

bar.animate(0.78);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle('#circle-progress-big', {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#13e28d', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (circle.value() * 10).toFixed(1);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar2.text.style.fontFamily = '$f-lato';
bar2.text.style.fontSize = '3rem';

bar2.animate(0.78);  // Number from 0.0 to 1.0