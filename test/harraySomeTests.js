'use strict';

const assert = require('chai').assert;
const Harray = require('../lib/harray');

describe('Some Method', () => {
    it('Iterates through elements of a Harray until the callback returns true', () => {
        let h = new Harray(0, 2);
        let expected = [0, 2, 4, 6, 8, 10];
        let actual = [];

        h.some(function(el) {
            if (el > 10) {
                return true;
            } else {
                actual.push(el);
            }
        });

        assert.strictEqual(JSON.stringify(actual), JSON.stringify(expected));
    });

    it('Accepts an starting index', () => {
        let h = new Harray(0, 2);
        let expected = [4, 6, 8, 10];
        let actual = [];

        h.some(function(el) {
            if (el > 10) {
                return true;
            } else {
                actual.push(el);
                return false;
            }
        }, 2);

        assert.strictEqual(JSON.stringify(actual), JSON.stringify(expected));
    });

    it('Throws a TypeError if the argument is not an array', () => {
        let h = new Harray(0, 2);
        assert.throws(() => {
            h.some('hue');
        }, TypeError);
    });
});
