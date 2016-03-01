'use strict';

module.exports = function (obj, item, fromIndex) {
  // If the obj is not array then extract all the values of properties
  if (!Array.isArray(obj)) {
    var keys = Object.keys(obj);

    var values = keys.map(function (item) {
      return obj[item];
    });

    // Assign a new arrat to obj
    obj = values;
  }

  if (typeof fromIndex !== 'number') fromIndex = 0;

  return obj.indexOf(item, fromIndex) >= 0;
};
