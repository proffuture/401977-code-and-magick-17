'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 130;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var GAP_COLUMN = GAP * 6 + BAR_WIDTH;
var MAX_HEIGHT_BAR = CLOUD_HEIGHT - (GAP * 12) - FONT_GAP; //БЫЛО GAP * 2
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxElement(times);
  var multipler = MAX_HEIGHT_BAR / maxTime;
  ctx.fillStyle = 'black';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText(
    'Ура, вы победили!',
    CLOUD_X + GAP * 2,
    CLOUD_Y + GAP * 3
  );
  ctx.fillText(
    'Список результатов:',
    CLOUD_X + GAP * 2,
    CLOUD_Y + GAP * 5
  );
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(244, ' + Math.random() * 100 + '%, 50%)';
    };
    ctx.fillRect(
      CLOUD_X + GAP * 2 + GAP_COLUMN * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP * 4,
      BAR_WIDTH,
      multipler * -times[i]
    );
    ctx.fillStyle = '#000';
    ctx.fillText(
      Math.round(times[i]), //БЫЛО players[i] +
      // times[i]
      CLOUD_X + GAP * 2 + GAP_COLUMN * i,
      CLOUD_Y - GAP * 5 + CLOUD_HEIGHT - multipler * times[i]
    );
    ctx.fillText(
      players[i],
      CLOUD_X + GAP * 2 + GAP_COLUMN * i,
      CLOUD_Y + GAP + FONT_GAP + CLOUD_HEIGHT - GAP * 4
    );
  };
};
