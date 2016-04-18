'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();

describe('Lodash training', function ()
{
    describe('Number functions', function () {
        describe('clamp', function () {

            var params, number, lower, upper;

            beforeEach(function () {
                params = datasets.clamp();
                number = params[0];
                lower = params[1];
                upper = params[2];
            });
            
            it('should verify params', function () {
                expect(params).to.have.length(3);
                expect(lower < upper).to.eql(true);
                expect(typeof number && typeof lower && typeof upper).to.eql('number');
            });
            
            it('should return the clamped number', function () {
                expect(_.clamp.apply(_,params)).to.eql(3);
            });
        });

        describe('inRange', function () {

            var params, number, start, end;

            beforeEach(function () {
                params = datasets.inRange();
                number = params[0];
                start = params[1];
                end = params[2];
            });
            
            it('should verify params', function () {
                expect(params).to.have.length(3);
                expect(start < end).to.eql(true);
                expect(typeof number && typeof start && typeof end).to.eql('number');
            });

            it('should return true if number is in the range', function () {
                expect(_.inRange.apply(_,params)).to.eql(true);
            });
        });

        describe('random', function () {
            var params, lower, upper, floating;

            beforeEach(function () {
                params = datasets.random();
                lower = params[0];
                upper = params[1];
                floating = params[2];
            });
            
            it('should verify params', function () {
                expect(params).to.have.length(3);
                expect(typeof lower && typeof upper).to.eql('number');
                expect(typeof floating).to.eql('boolean');
                expect(lower < upper).to.eql(true);
            });

            it('should return random floating value between lower and upper', function () {
                expect(_.random.apply(_,params)).to.be.within(lower, upper);
            });
        });
    });

});

