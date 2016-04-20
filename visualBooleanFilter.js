angular.module('visualBooleanFilter',[])
    .provider('visualBooleanFilterConfig',function(){
        var $ = this;
        $.defaultValues = {"true":true,"false":false};
        $.changeDefaultValue = function(prop,value){$.defaultValues[prop] = value;};
        $.getDefaultValues = function(){return $.defaultValues};

        $.defaultIcons = {};
        $.defaultIcons[this.defaultValues.true] = 'fa-check';
        $.defaultIcons[this.defaultValues.false] = 'fa-times';
        $.icon = function(value){return $.defaultIcons[value];};
        $.changeIcon = function(name,icon){$.defaultIcons[name] = icon};

        $.iconClasses = ['fa','fa-lg'];
        $.addIconClass = function(className){
            if(Array.isArray(className))
            {
                angular.forEach(className,function(v){
                    if($.iconClasses.indexOf(v) < 0)
                    {
                        $.iconClasses.push(v);
                    }
                });
            }
            else
            {
                if($.iconClasses.indexOf(className) < 0)
                {
                    $.iconClasses.push(className);
                }
            }
        };
        $.removeIconClass = function(className)
        {
            if(Array.isArray(className))
            {
                var indexOfClassName = $.iconClasses.indexOf(className);
                if(indexOfClassName >= 0)
                {
                    $.iconClasses.splice(indexOfClassName,1);
                }
            }
            else
            {
                angular.forEach(className,function(v){
                    var indexOfClassName = $.iconClasses.indexOf(v);
                    if(indexOfClassName >= 0)
                    {
                        $.iconClasses.splice(indexOfClassName,1);
                    }
                });
            }
        };
        $.changeIconSize = function(newSize){
            var iconSizes = ['fa-lg','fa-2x','fa-3x','fa-4x','fa-5x'];
            if(typeof newSize === "number")
            {
                angular.forEach(iconSizes,function(v){$.removeIconClass(v)});
                if(newSize === 1)
                {
                    $.addIconClass('fa-lg');
                }
                else
                {
                    $.addIconClass('fa-' + newSize + 'x');
                }
            }
        };
        $.getIconClasses = function(){return $.iconClasses};

        $.$get = function(){return this;};
    })
    .filter('visualBoolean',['$sce','visualBooleanFilterConfig',function($sce,visualBooleanFilterConfig){
        return function(input){
            var iconClasses = visualBooleanFilterConfig.getIconClasses();
            var icon = angular.element('<i>');
            angular.forEach(iconClasses,function(v){
                icon.addClass(v);
            });
            icon.addClass(visualBooleanFilterConfig.icon(
                input === visualBooleanFilterConfig.defaultValues.true ?
                    visualBooleanFilterConfig.defaultValues.true :
                    visualBooleanFilterConfig.defaultValues.false));
            return $sce.trustAsHtml(icon.wrap('<span></span>').parent().html());
        }
    }]);