angular.module('visualBooleanFilter',[])
    .provider('visualBooleanFilterConfig',function(){
        this.defaultIcons = {
            'true':'',
            'false':''
        };
        this.setIcon = function(value,icon){};
        this.$get = function(){return this;};
    })
    .filter('visualBoolean',function(){});