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
                this.getView().byId("smartTable1").setVisible(false);
                this.getView().byId("smartTable2").setVisible(false);
            },
            tabSelected: function() {
                this.getView().byId("smartTable1").setVisible(false);
                this.getView().byId("smartTable2").setVisible(false);
            },
            onBeforeRendering: function () {
            },
            onAfterRendering: function () {
            },
            onGo1: function () {
            this.getView().byId("smartTable1").setVisible(true);         
            },
            onGo2: function () {
                this.getView().byId("smartTable2").setVisible(true);
            },
            onRowPress1: function (oEvent) {

                //var object1 = oEvent.getParameter("listItem").getBindingContextPath();
                //var object2 = oEvent.getSource().getBindingContext().getProperty("Idnsbj");
                //debugger;

                var table1 = this.getView().byId('table1');
                var idnsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Idnsbj');
                var vrzsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Vrzsbj');
//               var typsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Typsbj');
                this.getOwnerComponent().getRouter().navTo("RouteView2",{
                    Idnsbj : idnsbj1,
                    Vrzsbj : vrzsbj1
                });
            },
            onRowPress2: function () {
                var table1 = this.getView().byId('table2');
                var idnsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Idnsbj');
                var vrzsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Vrzsbj');
                this.getOwnerComponent().getRouter().navTo("RouteView3",{
                    Idnsbj : idnsbj1,
                    Vrzsbj : vrzsbj1
                });
            }
        });
    });

