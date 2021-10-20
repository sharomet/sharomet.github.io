/**
 * Age Slider
 */
const ageSlideId = document.getElementById('slide-age');
noUiSlider.create(ageSlideId, {
  start: [4, 13],
  connect: true,
  snap: true,
  range: {
    'min': [1],
    '11.11%': [4],
    '22.22%': [5],
    '33.33%': [6],
    '44.44%': [7],
    '55.55%': [8],
    '66.66%': [9],
    '77.77%': [10],
    '88.88%': [13],
    'max': [18]
  }
});
const ageValues = [
  ageSlideId.querySelector('.noUi-handle-lower'),
  ageSlideId.querySelector('.noUi-handle-upper')
];
ageSlideId.noUiSlider.on('update', function (values, handle) {
  ageValues[handle].innerHTML = parseInt(values[handle]);
});

/**
 * Price Slider
 */
const priceSlideId = document.getElementById('slide-price');
noUiSlider.create(priceSlideId, {
  start: [5000, 30000],
  connect: true,
  range: {
    'min': [0],
    'max': [30000]
  },
});
const priceValues = [
  priceSlideId.querySelector('.noUi-handle-lower'),
  priceSlideId.querySelector('.noUi-handle-upper')
];
priceSlideId.noUiSlider.on('update', function (values, handle) {
  priceValues[handle].innerHTML = parseInt(values[handle]) + 'грн';
});

/**
 * Button Search
 */
document.getElementById('search-btn').addEventListener('click', () => {
  const age = ageSlideId.noUiSlider.get();
  const price = priceSlideId.noUiSlider.get();
  let url = `/f/cina/${parseInt(price[0])}-${parseInt(price[1])}/vozrast_s/${parseInt(age[0])}/vozrast_po/${parseInt(age[1])}.html`;
  alert(url);
})