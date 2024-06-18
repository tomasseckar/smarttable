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
                this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.objectMatched, this);
            },

            objectMatched: function(oEvent)  {
                this.Idnsbj = oEvent.getParameter('arguments').Idnsbj;
                this.Vrzsbj = oEvent.getParameter('arguments').Vrzsbj;
                this.getView().bindElement("/ZTS_SUBJEKT_MAIN(Idnsbj="+ this.Idnsbj +",Vrzsbj="+ this.Vrzsbj +")");
                
                this.getView().byId("smartFilterDetail1").search();
                this.getView().byId("smartFilterDetail2").search();
            },

            onFilter1: function() {
            },

            onBeforeRebindTable1: function(oSource) {

                var binding = oSource.getParameter("bindingParams");
            
                var oFilterIdnprj = new sap.ui.model.Filter("Idnprj", sap.ui.model.FilterOperator.EQ, this.Idnsbj);
                //var oFilterVrz = new sap.ui.model.Filter("Vrzprj", sap.ui.model.FilterOperator.EQ, this.Vrzsbj);
                
                binding.filters.push(oFilterIdnprj); // , oFilterVrz            
            } ,

            onBeforeRebindTable2: function(oSource) {

                var binding = oSource.getParameter("bindingParams");
            
                var oFilterIdnadr = new sap.ui.model.Filter("Idnadr", sap.ui.model.FilterOperator.EQ, this.Idnsbj);
                //var oFilterVrz = new sap.ui.model.Filter("Vrzprj", sap.ui.model.FilterOperator.EQ, this.Vrzsbj);
                
                binding.filters.push(oFilterIdnadr); // , oFilterVrz            
            } ,

            onBeforeRendering: function() {
            },

            onAfterRendering: function() {
            },

            tabSelected: function() {
                this.getView().byId("smartFilterDetail1").search();
                this.getView().byId("smartFilterDetail2").search();
            }
        });
    });
