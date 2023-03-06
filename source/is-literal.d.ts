import type {Numeric} from './numeric';
import type {Primitive} from './primitive';
import type {Includes} from './includes';

/** @link https://stackoverflow.com/a/52806744/10292952 */
type LiteralCheck<T, LiteralType extends Primitive> = (
	[T] extends [never] // Must be wider than `never`
		? false
		: T extends LiteralType // Must be narrower than `LiteralType`
			? LiteralType extends T // Cannot be wider than `LiteralType`
				? false
				: true
			: false
);

export type IsStringLiteral<T> = LiteralCheck<T, string>;

export type IsNumericLiteral<T> = Includes<[LiteralCheck<T, number>, LiteralCheck<T, bigint>], true>;

export type IsBooleanLiteral<T> = (
	[T] extends [never] // Must be wider than `never`
		? false
		: [T] extends [true]
			? boolean extends T // Must be narrower than `boolean`
				? false
				: true
			: [T] extends [false]
				? boolean extends T // Must be narrower than `boolean`
					? false
					: true
				: false
);

export type IsSymbolLiteral<T> = LiteralCheck<T, symbol>;

type IsLiteralTuple<T> = [
	IsStringLiteral<T>,
	IsNumericLiteral<T>,
	IsBooleanLiteral<T>,
	IsSymbolLiteral<T>,
];

export type IsLiteral<T extends Primitive> = Includes<IsLiteralTuple<T>, true>;
