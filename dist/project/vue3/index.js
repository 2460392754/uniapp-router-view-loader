import{provide,inject}from"vue";const provideKey="$urvl";var pageProvide=function(o){var n={};Object.keys(o).forEach(function(e){n[e]=function(){return o[e].value}}),provide(provideKey,n)},componentInject=function(){return inject(provideKey)};export{componentInject,pageProvide};