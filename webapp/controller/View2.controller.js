sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("smarttable.controller.View2", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.objectMatched, this)
            },
            objectMatched: function(oEvent) {
                this.Idnsbj = oEvent.getParameter('arguments').Idnsbj;
                this.Vrzsbj = oEvent.getParameter('arguments').Vrzsbj;
                this.getView().bindElement("/ZTS_SUBJEKT_MAIN(Idnsbj="+ this.Idnsbj +",Vrzsbj="+ this.Vrzsbj +")");
            }
        });
    });
