(function (PV) {
  

    function symbolVis() { }
    PV.deriveVisualizationFromBase(symbolVis);

    var def = {
        typeName: 'iframe',
        visObjectType: symbolVis ,
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        iconUrl: 'scripts/app/editor/symbols/ext/icons/iframe.png',
        getDefaultConfig: function () {
         
            return {
                Height: 600,
		        Width: 1000,
                frameHeight: 600,
                frameWidth: 1000,
                
            };
        },

        configOptions: function() {
            return [
                {
                title: 'Format iframe',
                mode: 'formatiframe'
                }
                ];
        }            
    }
    
 symbolVis.prototype.init=function(scope){
    scope.value='';
  
    this.onDataUpdate= dataUpdate;
    this.onConfigChange=configChanged;
    this.onResize=resize;

    function dataUpdate(data){
        if(!data){
            return;
        }
        scope.Value = data.Value;
              
    }

    function configChanged(newConfig,oldConfig){

    }
    function resize(height, width){

    }

 }
    PV.symbolCatalog.register(def);


   })(window.PIVisualization);
   