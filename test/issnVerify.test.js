import assert from 'node:assert';
import {describe, it} from 'node:test';
import {issn} from '../src/issnVerify.js';

describe('issn validation tests', function () {
    it('returns false for non-matching numbers', () => {
        assert.equal(issn('000000000'), false);
    });

    it('matches oclc examples', () => {
        assert.equal(issn('7369956'), true);
        assert.equal(issn('07369956'), true);
        assert.equal(issn('0736-9956'), true);
    });

    it('works with "X" check digit', () => {
        assert.equal(issn('1550-235X'), true);
    });

    it('rejects strings', () => {
        assert.equal(issn('a123-4567'), false);
    });
});



