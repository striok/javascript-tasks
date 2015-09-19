'use strict';

module.exports = {
    castArray : function(){
        var obj = {
            'name' : 'Jack',
            'age' : 26,
        };

        return [obj];
    },
    clone : function(obj){
        return [obj];
    },
    cloneDeep : function(obj){
        return [obj];
    },
    cloneDeepWith :function(){
        // fix it
        return [];
    },
    cloneWith : function(){
        // fix it
        return [];
    },
    eq : function(){

        var object = { 'user': 'fred' };
        var other = { 'user': 'fred' };

        return [object, other];
    },
    gt : function(){
        return [5,2];
    },
    gte : function(){
        return [5,5];
    },
    isArguments : function(){
        // fix it
        return [];
    },
    isArray : function(){

        var arr = [[1,2,3],['name', 'age'], 'it'];
        return [arr];
    },
    isArrayBuffer : function(){
        // fix it
        return [];
    },
    isArrayLike : function(){
        // fix it
        return [];
    },
    isArrayLikeObject: function(){
        // fix it
        return [];
    },
    isBoolean: function(){

        var arr = [1,2,3];
        var isA = function(arr) {
            if(arr.indexOf(4)){
                return true;
            }else{
                return false;
            }
        };

        return [isA(arr)];
    },
    isBuffer: function(){
        // fix it
        return [];
    },
    isDate: function(){
        var today = new Date();
        return [today];
    },
    isElement: function(){
        // fix it
        return [];
    },
    isEmpty: function(){
        var arr = [4,3,'asdf'];
        return [arr];
    },
    isEqual: function(){

        var object = { 'name': 'Thomas', 'user': 'qwerty', 'age': 25 };
        var other = { 'name': 'Thomas', 'user': 'qwerty', 'age': 25 };

        return [object, other];
    },
    isEqualWith: function(){
        // fix it
        return [];
    },
    isError: function(){

        // nieskonczone
        var fun = function (x, y) {
            if(y !== 0){
                return x/y;

            }else{
                throw Error('This is simple error');
            }
        };
        return [fun];
    },
    isFinite: function(){
        return [Infinity];
    },
    isFunction: function(){
        var fun = function () {
            return 'Hello';
        };

        return [fun];
    },
    isInteger: function(){
        var float = 2.2;
        return [float];
    },
    isLength: function(arr){
        return [arr.length];
    },
    isMap: function(){
        return [new Map()];
    },
    isMatch: function(obj){
        return [obj, {'email' : 'mark@realskill.com'}];
    },
    isMatchWith: function(){
        // fix it
        return [];
    },
    isNaN: function(){
        // fix it
        return [];
    },
    isNative: function(){
        // fix it
        return [];
    },
    isNil: function(){
        // fix it
        return [];
    },
    isNull: function(){
        // fix it
        return [];
    },
    isNumber: function(){
        return [new Number(3)];
    },
    isObject: function(){
        return [new String('newstring')];
    },
    isObjectLike: function(){
        // fix it
        return [];
    },
    isPlainObject: function(){
        // fix it
        return [];
    },
    isRegExp: function(){
        var reg = /abc/;
        return [reg];
    },
    isSafeInteger: function(){
        return [Number.MAX_VALUE];
    },
    isSet: function(){
        // fix it
        return [];
    },
    isString: function(){

        var arr = 'primitive';
        return [arr];
    },
    isSymbol: function(){
        // fix it
        return [];
    },
    isTypedArray: function(){
        // fix it
        return [];
    },
    isUndefined: function(){
        // fix it
        return [];
    },
    isWeakMap: function(){
        // fix it
        return [];
    },
    isWeakSet: function(){
        // fix it
        return [];
    },
    lt: function(){
        return [2,3];
    },
    lte: function(){
        return [5,5];
    },
    toArray: function(){

        var obj = {
            name : 'Jack',
            age : 26,
        };

        return [obj];
    },
    toInteger: function(){
        return ['2016'];
    },
    toLength: function(){
        // fix it
        return [];
    },
    toNumber: function(){
        // fix it
        return [];
    },
    toPlainObject: function(){
        // fix it
        return [];
    },
    toSafeInteger: function(){
        return [Number.MAX_VALUE];
    },
    toString: function(){
        var arr = [1,12,2015];
        return [arr];
    },

};
