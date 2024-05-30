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
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },
            onFilter1: function() {
            },
            onBeforeRebindTable: function(oSource) {

                var binding = oSource.getParameter("bindingParams");
            
                var oFilterIdn = new sap.ui.model.Filter("Idnprj", sap.ui.model.FilterOperator.EQ, this.Idnsbj);
                var oFilterVrz = new sap.ui.model.Filter("Vrzprj", sap.ui.model.FilterOperator.EQ, this.Vrzsbj);
                
                binding.filters.push(oFilterIdn, oFilterVrz);             
            } ,
            onBeforeRendering: function() {
            },
            onPress1: function() {
                this.getView().byId("button1").setType("Emphasized");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(true);
                this.getView().byId("smartFilterDetail1").setVisible(true);
                this.getView().byId("smartFilterDetail1").search();

            },
            onPress2: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Emphasized");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(true);
                this.getView().byId("smartFilterDetail1").setVisible(true);
                this.getView().byId("smartFilterDetail1").search();
            },
            onPress3: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Emphasized");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },
            onPress4: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Emphasized");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },
            onPress5: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Emphasized");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },
            onPress6: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Emphasized");
                this.getView().byId("button7").setType("Default");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },
            onPress7: function() {
                this.getView().byId("button1").setType("Default");
                this.getView().byId("button2").setType("Default");
                this.getView().byId("button3").setType("Default");
                this.getView().byId("button4").setType("Default");
                this.getView().byId("button5").setType("Default");
                this.getView().byId("button6").setType("Default");
                this.getView().byId("button7").setType("Emphasized");
                this.getView().byId("smartTableDetail1").setVisible(false);
                this.getView().byId("smartFilterDetail1").setVisible(false);
            },

        });
    });
