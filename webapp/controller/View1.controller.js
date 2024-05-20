sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("smarttable.controller.View1", {
            onInit: function () {
                this.getView().byId("smartFilterBar1").setVisible(false);
                this.getView().byId("smartFilterBar2").setVisible(false);
                this.getView().byId("smartTable1").setVisible(false);
                this.getView().byId("smartTable2").setVisible(false);
                this.getView().byId("smartFilterBar1").setSuppressSelection(true);
                this.getView().byId("smartFilterBar2").setSuppressSelection(true);
            },
            onBeforeRendering: function () {
            },
            onAfterRendering: function () {
            },
            onSelect1: function () {
                    this.getView().byId("smartFilterBar1").setVisible(true);
                    this.getView().byId("smartFilterBar2").setVisible(false);
                    this.getView().byId("smartTable1").setVisible(false);
                    this.getView().byId("smartTable2").setVisible(false);
                    this.getView().byId("smartFilterBar1").setSuppressSelection(false);
            },
            onSelect2: function () {
                    this.getView().byId("smartFilterBar1").setVisible(false);
                    this.getView().byId("smartFilterBar2").setVisible(true);
                    this.getView().byId("smartTable1").setVisible(false);
                    this.getView().byId("smartTable2").setVisible(false);
                    this.getView().byId("smartFilterBar2").setSuppressSelection(false);
            },
            onGo1: function () {
                this.getView().byId("smartTable1").setVisible(true);
                this.getView().byId("smartTable2").setVisible(false);           
            },
            onGo2: function () {
                this.getView().byId("smartTable1").setVisible(false);
                this.getView().byId("smartTable2").setVisible(true);
            },
            onRowPress1: function () {
                var table1 = this.getView().byId('table1');
                var idnsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Idnsbj');
                var vrzsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Vrzsbj');
                this.getOwnerComponent().getRouter().navTo("RouteView2",{
                    Idnsbj : idnsbj1,
                    Vrzsbj : vrzsbj1
                });
            },
            onRowPress2: function () {
                var table1 = this.getView().byId('table2');
                var idnsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Idnsbj');
                var vrzsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Vrzsbj');
                this.getOwnerComponent().getRouter().navTo("RouteView2",{
                    Idnsbj : idnsbj1,
                    Vrzsbj : vrzsbj1
                });
            }
        });
    });

