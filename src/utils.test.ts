import {test, expect} from 'vitest';
import {add, divide, subtract} from './utils.js';

test('add', () => {
	expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
	expect(subtract(2, 1)).toBe(1);
})

test('divide', () => {
	expect(divide(2, 1)).toBe(2)
})