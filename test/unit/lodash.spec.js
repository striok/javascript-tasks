'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();

describe('Lodash training', function ()
{
    describe('Lang functions', function () {
        describe('castArray', function () {

            var params;

            beforeEach(function () {
                params = datasets.castArray();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params instanceof Array).to.have.eql(true);
            });

            it('should returns the cast array', function () {
                expect(_.castArray.apply(_, datasets.castArray(params))).to.eql([ { name: 'Jack', age: 26 } ]);
            });
        });

        describe('clone', function () {
            var params, obj;

            beforeEach(function () {
                obj = [['Daniels', {'age': 25}], ['Mark', {'age': 35}]];
                params = datasets.clone(obj);
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Array).to.have.eql(true);
            });

            it('should returns the cloned values', function () {
                expect(_.clone.apply(_, datasets.clone(obj))).to.eql(obj);

            });
        });

        describe('cloneDeep', function () {

            var params, obj;

            beforeEach(function () {
                obj = [['Daniels', {'age': 25}], ['Mark', {'age': 35}]];
                params = datasets.cloneDeep(obj);
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Array).to.have.eql(true);
            });

            it('should return the deep cloned value', function () {
                expect(datasets.cloneDeep(obj) === obj).to.eql(false);
                expect(_.cloneDeep.apply(_, datasets.cloneDeep(obj))).to.not.equal(obj);
            });
        });

        // describe.skip('cloneDeepWith', function () {
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('cloneWith', function () {
        //     it('should', function () {
        //
        //     });
        // });

        describe('eq', function () {

            var params, fst, snd;

            beforeEach(function () {
                params = datasets.eq();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(fst instanceof Object).to.eql(true);
                expect(snd instanceof Object).to.eql(true);
            });

            it('should returns true if the values are equivalent, else false.', function () {
                expect(_.eq.apply(_,[fst, fst])).to.eql(true);
                expect(_.eq.apply(_,[fst, snd])).to.eql(false);
            });
        });

        describe('gt', function () {

            var params, fst, snd;

            beforeEach(function () {
                params = datasets.gt();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(typeof  fst && typeof snd).to.eql('number');
            });

            it('should returns true if value fst is greater than snd value', function () {
                expect(_.gt.apply(_, datasets.gt(params))).to.eql(true);
            });
        });

        describe('gte', function () {

            var params, fst, snd;

            beforeEach(function () {
                params = datasets.gte();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(typeof  fst && typeof snd).to.eql('number');
            });

            it('should returns true if value fst is greater than or equal to snd value', function () {
                expect(_.gte.apply(_, datasets.gte(params))).to.eql(true);
            });
        });

        // describe.skip('isArguments', function () {
        //     it('should', function () {
        //
        //     });
        // });

        describe('isArray', function () {

            var params;
            var arr;

            beforeEach(function () {
                params = datasets.isArray();
                arr = params[0];
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params instanceof Array).to.eql(true);
                expect(arr).to.have.length(3);
                expect(arr[0]).to.have.length(3);
                expect(arr[1]).to.have.length(2);
                expect(arr[2]).to.have.length(2);
                expect(typeof arr[2]).to.eql('string');
            });

            it('should return true when param is array', function () {
                expect(_.isArray.apply(_, datasets.isArray(params))).to.eql(true);
            });
        });

        // describe.skip('isArrayBuffer', function () {
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isArrayLike', function () {
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isArrayLikeObject', function () {
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });

        describe('isBoolean', function () {

            var params;

            beforeEach(function () {
                params = datasets.isBoolean();
            });

            it('should check return value ', function () {
                expect(_.isBoolean.apply(_, datasets.isBoolean(params))).to.eql(true);
                expect(typeof params[0]).to.equal('boolean');
            });
        });

        // describe.skip('isBuffer', function () {
        //     // do poprawy
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isDate();
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(1);
        //     });
        // });

        describe('isDate', function () {

            var params;

            beforeEach(function () {
                params = datasets.isDate();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Date).to.eql(true);
            });

            it('should return true if value is correctly classified', function () {
                expect(_.isDate.apply(_,datasets.isDate(params))).to.eql(true);
            });
        });

        // describe.skip('isElement', function () {
        //     // do poprawy
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isElement();
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(1);
        //     });
        //
        //     it('should return true if value is a DOM element', function () {
        //         expect(_.isElement.apply(_,datasets.isElement(params))).to.eql(true);
        //     });
        // });

        describe('isEmpty', function () {

            var params;

            beforeEach(function () {
                params = datasets.isEmpty();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Array).to.eql(true);
            });

            it('should return false if params is not empty', function () {
                expect(_.isEmpty.apply(_,datasets.isEmpty(params))).to.eql(false);
            });
        });

        // describe('isEqual', function () {
        //
        //     var params;
        //     var fst, snd;
        //
        //     beforeEach(function () {
        //         params = datasets.isEqual()
        //         fst = params[0];
        //         snd = params[1];
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(2);
        //         expect(fst instanceof Object && snd instanceof Object).to.have.eql(true);
        //         expect(fst).to.eql({ 'name': 'Thomas', 'user': 'qwerty', 'age': 25 });
        //         expect(snd).to.eql({ 'name': 'Thomas', 'user': 'qwerty', 'age': 25 });
        //     });
        //
        //     it('should returns true if the values are equivalent', function () {
        //         expect(_.isEqual.apply(_, datasets.isEqual(params))).to.eql(true);
        //         expect(fst === snd).to.eql(false);
        //     });
        // });

        // describe.skip('isEqualWith', function () {
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe('isError', function () {
        //
        //     // fix it
        //
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isError();
        //     });
        //
        //     it('should verify params', function () {
        //
        //     });
        //
        //     it('should return true if value is an error object', function () {
        //         console.log(params);
        //         expect(_.isError.apply(_,[fun])).to.eql(true);
        //     });
        //
        // });

        describe('isFinite', function () {

            var params;

            beforeEach(function () {
                params = datasets.isFinite();
            });

            it('should verify param', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('number');
            });

            it('should return false when value is not finite number', function () {
                expect(_.isFinite.apply(_, datasets.isFinite(params))).to.eql(false);
            });
        });

        describe('isFunction', function () {

            var params;

            beforeEach(function () {
                params = datasets.isFunction();
            });

            it('should verify param', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Function).to.eql(true);
            });

            it('should return true when param is function', function () {
                expect(_.isFunction.apply(_, datasets.isFunction(params))).to.eql(true);
            });
        });

        describe('isInteger', function () {

            var params;

            beforeEach(function () {
                params = datasets.isInteger();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('number');
            });

            it('should returns true if value is an integer, else false', function () {
                expect(_.isInteger.apply(_, datasets.isInteger(params))).to.eql(false);
            });
        });

        describe('isLength', function () {

            var arr;
            var params;

            beforeEach(function () {
                arr = [1,2,3];
                params = datasets.isLength(arr);
            });

            it('should verify param', function () {
                expect(params).to.have.length(1);
            });

            it('should return true when value is lenght', function () {
                expect(_.isLength.apply(_,datasets.isLength(params))).to.eql(true);
            });
        });

        describe('isMap', function () {

            var params;

            beforeEach(function () {
                params = datasets.isMap();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
            });

            it('should return true when value is map', function () {
                expect(_.isMap.apply(_,datasets.isMap(params))).to.eql(true);
            });
        });


        describe('isMatch', function () {

            var params;
            var obj;

            beforeEach(function () {
                params = datasets.isMatch();
                obj = { 'name': 'Mark', 'email': 'mark@realskill.com', 'password': 'qwerty123', 'age': 34 };
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(params[1] instanceof Object).to.eql(true);
                expect(params[1]).to.eql({ email: 'mark@realskill.com' });
            });

            it('should return true when object is a match', function () {
                expect(_.isMatch.apply(_, datasets.isMatch(obj))).to.eql(true);
            });
        });

        // describe.skip('isMatchWith', function () {
        //
        //     // fix it
        //
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isNaN', function () {
        //
        //     // fix it
        //
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isNative', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isNil', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isNull', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });

        describe('isNumber', function () {

            var params;

            beforeEach(function () {
                params = datasets.isNumber();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('object');
            });

            it('should return true if value is correctly classified', function () {
                expect(_.isNumber.apply(_,datasets.isNumber(params))).to.eql(true);
            });
        });

        describe('isObject', function () {

            var params;

            beforeEach(function () {
                params = datasets.isObject();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql("object");
            });

            it('should return true if value is an object', function () {
                expect(_.isObject.apply(_,datasets.isObject(params))).to.eql(true);
            });
        });

        // describe.skip('isObjectLike', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('isPlainObject', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });

        describe('isRegExp', function () {

            var params;

            beforeEach(function () {
                params = datasets.isRegExp();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
            });

            it('should return true if value is correctly classified ',function () {
                expect(_.isRegExp.apply(_,datasets.isRegExp(params))).to.eql(true);
            });
        });

        describe('isSafeInteger', function () {

            var params;

            beforeEach(function () {
                params = datasets.isSafeInteger();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('number');
            });

            it('should return false if number is not safe integer', function () {
                expect(_.isSafeInteger.apply(_,datasets.isSafeInteger(params))).to.eql(false);
            });
        });

        // describe.skip('isSet', function () {
        //
        //     // fix it
        //
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isSet();
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(3);
        //         expect(typeof params[0]).to.eql('object');
        //         //expect(params[0].name).to.eql();
        //
        //         console.log(params[0]);
        //     });

        });

        describe('isString', function () {
            var params;

            beforeEach(function () {
                params = datasets.isString();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
            });

            it('should return true if elements in array are string', function () {
                expect(_.isString.apply(_,datasets.isString(params))).to.eql(true);
            });
        });

        // describe.skip('isSymbol', function () {
        //
        //     // fix it
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isSymbol();
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(23);
        //     });
        // });
        //
        // describe.skip('isTypedArray', function () {
        //
        //     // fix it
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets.isTypedArray();
        //     });
        //
        //     it('should verify params', function () {
        //         expect(params).to.have.length(1);
        //     });
        // });
        //
        // describe.skip('isUndefined', function () {
        //
        //     // fix it
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets;
        //     });
        //
        //     it('should verify params', function () {
        //
        //     });
        // });
        //
        // describe.skip('isWeakMap', function () {
        //
        //     // fix it
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets
        //     });
        //
        //     it('should verify params', function () {
        //
        //     });
        // });
        //
        // describe.skip('isWeakSet', function () {
        //
        //     // fix it
        //     var params;
        //
        //     beforeEach(function () {
        //         params = datasets
        //     });
        //
        //     it('should verify params', function () {
        //
        //     });
        // });

        describe('lt', function () {
            var params, fst, snd;

            beforeEach(function () {
                params = datasets.lt();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(typeof fst && typeof snd).to.eql('number');
                expect(fst <= snd).to.eql(true);
            });

            it('should returns true if fst value is less than snd value', function () {
                expect(_.lt.apply(_,datasets.lt(params))).to.eql(true);
            });
        });

        describe('lte', function () {
            var params, fst, snd;

            beforeEach(function () {
                params = datasets.lte();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function () {
                expect(params).to.have.length(2);
                expect(typeof fst && typeof snd).to.eql('number');
                expect(fst <= snd).to.eql(true);
            });

            it('should return true if fst value is less or equal than snd value', function () {
                expect(_.lte.apply(_,datasets.lte(params))).to.eql(true);
            });
        });

        describe('toArray', function () {

            var params;

            beforeEach(function () {
                params = datasets.toArray();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('object');
                expect(params[0]).to.have.ownProperty('name');
                expect(params[0]).to.have.ownProperty('age');
            });

            it('should return the converted array ', function () {
                expect(_.toArray.apply(_,datasets.toArray(params))).to.eql([ 'Jack', 26 ]);
            });
        });

        describe('toInteger', function () {

            var params;

            beforeEach(function () {
                params = datasets.toInteger();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('string');
            });

            it('should return the converted integer', function () {
                expect(_.toInteger.apply(_,datasets.toInteger(params))).to.eql(2016);
            });
        });

        // describe.skip('toLength', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('toNumber', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });
        //
        // describe.skip('toPlainObject', function () {
        //
        //     // fix it
        //     it('should', function () {
        //
        //     });
        // });

        describe('toSafeInteger', function () {

            var params;

            beforeEach(function () {
                params = datasets.toSafeInteger();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('number');
            });

            it('should return SafeInteger from value', function () {
                expect(_.toSafeInteger.apply(_,datasets.toSafeInteger(params))).to.eql(9007199254740991);
            });
        });

        describe('toString', function () {

            var params;

            beforeEach(function () {
                params = datasets.toString();
            });

            it('should verify params', function () {
                expect(params).to.have.length(1);
                expect(params[0] instanceof Array).to.eql(true);
            });

            it('should return the string', function () {
                expect(_.toString.apply(_,datasets.toString(params))).to.eql('1,12,2015');
            });
        });

});


