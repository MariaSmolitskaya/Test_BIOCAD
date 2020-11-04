'use strict';

(function checkSlope() {
  let slopeCell = document.querySelectorAll('.report__slope-number');
  let slopeCellChecked = document.querySelectorAll('.report__slope-checked');
  let SLOPE_NORM = {
    MIN: 95,
    MAX: 105
  };
  for (let i = 0; i < slopeCell.length; i++) {
    let slopeCellContent = slopeCell[i].innerHTML;

    if (slopeCellContent > SLOPE_NORM.MIN && slopeCellContent < SLOPE_NORM.MAX) {
      slopeCellChecked[i].innerHTML = '<img src="img/success.png">';
    } else  {
      slopeCellChecked[i].innerHTML = '<img src="img/error.png">';
    }
  }
})();


(function checkOffset() {
  let offsetCell = document.querySelectorAll('.report__offset-number');
  let offsetCellChecked = document.querySelectorAll('.report__offset-checked');
  let OFFSET_NORM = {
    MIN: 0,
    MAX: 20
  };
  for (let i = 0; i < offsetCell.length; i++) {
    let offsetCellContent = Number(offsetCell[i].innerHTML);

    if (Math.abs(offsetCellContent)> OFFSET_NORM.MIN && Math.abs(offsetCellContent) < OFFSET_NORM.MAX) {
      offsetCellChecked[i].innerHTML = '<img src="img/success.png">';
    } else  {
      offsetCellChecked[i].innerHTML = '<img src="img/error.png">';
    }
  }
})();

