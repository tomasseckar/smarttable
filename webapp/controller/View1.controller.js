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

            },
            onSelect: function () {
                var selected = this.getView().byId("radioButtonGroup1").getSelectedButton().getText();
                
                if (selected==="Fyzická osoba") {
                    this.getView().byId("smartFilterBar1").setVisible(false);
                }
                else if (selected==="Právnická osoba") {
                    this.getView().byId("smartFilterBar1").setVisible(true);
                }
            },
            onRowPress: function () {
                var table1 = this.getView().byId('table1');
                var idnsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Idnsbj');
                var vrzsbj1 = table1.getSelectedItem().getBindingContext().getProperty('Vrzsbj');
                this.getOwnerComponent().getRouter().navTo("RouteView2",{
                    Idnsbj : idnsbj1,
                    Vrzsbj : vrzsbj1
                });
            }
        });
    });
