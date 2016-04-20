# AngularJS VisualBoolean Filter

Display boolean values with the help of icons

## Usage

####Apply the filter to a value and see the magic happen!
```html
<span ng-bind-html="myValue | visualBoolean"></span>
Result:
<span><i class="fa fa-lg fa-check"></i></span>
```
####Change the icon size
```javascript
app.config(function(visualBooleanFilterConfigProvider){
    visualBooleanFilterConfigProvider.changeIconSize(2);
})
```
```html
<span ng-bind-html="myValue | visualBoolean"></span>
Result:
<span><i class="fa fa-2x fa-check"></i></span>
```
*Available Icon Sizes are 1 (fa-lg), 2 (fa-2x),3 (fa-3x), 4 (fa-4x) and 5 (fa-5x)*


####Add additional classes to the icon:
```javascript
app.config(function(visualBooleanFilterConfigProvider){
    visualBooleanFilterConfigProvider.addIconClass('yourClassName');
})
```
####Add multiple classes at once:
```javascript
app.config(function(visualBooleanFilterConfigProvider){
    visualBooleanFilterConfigProvider.addIconClass(['class1','class2']);
})
```

####Remove classes from the icon:
```javascript
app.config(function(visualBooleanFilterConfigProvider){
    visualBooleanFilterConfigProvider.removeIconClass('yourClassName');
})
```
####Remove multiple classes at once:
```javascript
app.config(function(visualBooleanFilterConfigProvider){
    visualBooleanFilterConfigProvider.removeIconClass(['class1','class2']);
})
```