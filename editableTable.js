sap.ui.define([], function() {
  return {
    init: function() {
      var div = document.createElement("div");
      div.innerHTML = "Hello, World!";
      this.getContainer().appendChild(div);
    }
  };
});
