import {expectError, expectType} from 'tsd';
import type {
	IfLiteral,
	IfStringLiteral,
	IfNumericLiteral,
	IfBooleanLiteral,
	IfSymbolLiteral,
} from '../index';

const stringLiteral = '';
const numberLiteral = 1;
// @ts-expect-error: suppress BigInt literal tsd warning
const bigintLiteral = 1n;
const booleanLiteral = true;
const symbolLiteral = Symbol('');

declare const _string: string;
declare const _number: number;
declare const _bigint: bigint;
declare const _boolean: boolean;
declare const _symbol: symbol;

// `IfLiteral` should return `true`/`false` if only `T` is specified
expectType<IfLiteral<typeof stringLiteral>>(true);
expectType<IfLiteral<typeof _string>>(false);
expectType<IfLiteral<typeof stringLiteral, 'T', 'F'>>('T');
expectType<IfLiteral<typeof _string, 'T', 'F'>>('F');

// `IfStringLiteral` should return `true`/`false` if only `T` is specified
expectType<IfStringLiteral<typeof stringLiteral>>(true);
expectType<IfStringLiteral<typeof _string>>(false);
expectType<IfStringLiteral<typeof stringLiteral, 'T', 'F'>>('T');
expectType<IfStringLiteral<typeof _string, 'T', 'F'>>('F');

// `IfNumericLiteral` should return `true`/`false` if only `T` is specified
expectType<IfNumericLiteral<typeof numberLiteral>>(true);
expectType<IfNumericLiteral<typeof bigintLiteral>>(true);
expectType<IfNumericLiteral<typeof _number>>(false);
expectType<IfNumericLiteral<typeof _bigint>>(false);
expectType<IfNumericLiteral<typeof numberLiteral, 'T', 'F'>>('T');
expectType<IfNumericLiteral<typeof bigintLiteral, 'T', 'F'>>('T');
expectType<IfNumericLiteral<typeof _number, 'T', 'F'>>('F');
expectType<IfNumericLiteral<typeof _bigint, 'T', 'F'>>('F');

// `IfBooleanLiteral` should return `true`/`false` if only `T` is specified
expectType<IfBooleanLiteral<typeof booleanLiteral>>(true);
expectType<IfBooleanLiteral<typeof booleanLiteral, 'T', 'F'>>('T');
expectType<IfBooleanLiteral<typeof _boolean>>(false);
expectType<IfBooleanLiteral<typeof _boolean, 'T', 'F'>>('F');

// `IfSymbolLiteral` should return `true`/`false` if only `T` is specified
expectType<IfSymbolLiteral<typeof symbolLiteral>>(true);
expectType<IfSymbolLiteral<typeof symbolLiteral, 'T', 'F'>>('T');
expectType<IfSymbolLiteral<typeof _symbol>>(false);
expectType<IfSymbolLiteral<typeof _symbol, 'T', 'F'>>('F');

declare const _any: any;

// MIfsing generic parameter
expectError<IfLiteral>(_any);
expectError<IfStringLiteral>(_any);
expectError<IfNumericLiteral>(_any);
expectError<IfBooleanLiteral>(_any);
expectError<IfSymbolLiteral>(_any);
