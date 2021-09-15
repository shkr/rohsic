
const el = require('@nick-thompson/elementary');
const core = global.elementary.core;
const reload = require('livereload')

function saw(frequency) {
  return el.sub(el.phasor(frequency), 0.5);
}


core.on('load', function() {
  core.render(
    saw(240)
  );
});

