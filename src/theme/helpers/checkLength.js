module.exports = {
  checkLength: function(v1, v2, options) {
    if (v1 != null && v1.length > v2) {
      return options.fn(this);
    }
    return "";
  }
};
