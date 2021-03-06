"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Add interactivity if set from the options
// interactive and useEvents must be true to use map events
var changeCursorToGrab = function changeCursorToGrab() {};

var _default = function _default(map, interactive, useEvents, mapEvents) {
  var behavior = interactive
    ? new H.mapevents.Behavior(new H.mapevents.MapEvents(map))
    : null;

  if (useEvents && interactive) {
    for (var type in mapEvents) {
      if (mapEvents.hasOwnProperty(type)) {
        (function() {
          var callback = mapEvents[type];
          map.addEventListener(type, function(evt) {
            // switch (evt.type) {
            //   case "pointerenter":
            //     console.log("Entering");
            //   case "pointerleave":
            //     console.log("Leaving");
            //   case "pointermove":
            //     console.log("Moving");
            // }
            callback();
          });
        })();
      }
    }
  }

  return behavior;
};

exports.default = _default;
