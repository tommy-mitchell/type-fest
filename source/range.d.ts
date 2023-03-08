import type {Numeric} from './numeric';
import type {Includes} from './includes';
import type {Primitive} from './primitive';
import type {TupleToUnion} from './tuple-to-union';
import type {LastArrayElement} from './internal';
import type {IsEqual} from './is-equal';

type LiteralCheck<T, LiteralType extends Primitive> = (
	[T] extends [never] // Must be wider than `never`
		? false
		: T extends LiteralType // Must be narrower than `LiteralType`
			? LiteralType extends T // Cannot be wider than `LiteralType`
				? false
				: true
			: false
);
export type IsNumericLiteral<T> = LiteralCheck<T, number>;

type If<Condition extends boolean, TypeIf = true, TypeIfNot = false> = Condition extends true ? TypeIf : TypeIfNot;
type Not<Condition extends boolean> = If<Condition, false, true>;

type MakeRange<N extends number, Result extends unknown[] = []> = (
	Result['length'] extends N
		? Result
		: MakeRange<N, [...Result, Result['length']]>
);

type Add<A extends number, B extends number> = [...MakeRange<A>, ...MakeRange<B>]['length'];

type RemoveLast<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : never;

/** Check whether `LastArrayElement<MakeRange<A>>` is a valid index of `MakeRange<B>` */
type LastOfAInB<A extends number, B extends number> = [...MakeRange<B>][LastArrayElement<[...MakeRange<A>]>];

type IsGreater<A extends number, B extends number> = Not<IsNumericLiteral<LastOfAInB<A, B>>>;

type RangeOptions = {
	/** @default 1 */
	step?: number;

	/** @default false */
	inclusive?: boolean;

	/** @default false */
	asUnion?: boolean;
};

type AddToEnd<Result extends unknown[], Options extends RangeOptions = {}> = [
	...Result,
	Add<LastArrayElement<Result>, Options['step'] extends number ? Options['step'] : 1>,
];

type FinishRange<Result extends unknown[], Options extends RangeOptions = {}> = (
	Options['inclusive'] extends true
		? RemoveLast<Result>
		: RemoveLast<RemoveLast<Result>>
);

/** @link https://catchts.com/range-numbers */
type IterateRange<
	Start extends number,
	End extends number,
	Options extends RangeOptions,
	Result extends unknown[] = [Start],
> = (
	IsGreater<LastArrayElement<Result>, End> extends true
		? FinishRange<Result, Options> // Can stop
		: IterateRange<Start, End, Options, AddToEnd<Result, Options>> // Recurse
);

type _Range<
	Start extends number,
	End extends number,
	Options extends RangeOptions,
	WeakTypedOutput extends boolean = Options['asUnion'] extends true ? number : number[],
> = (
	IsNumericLiteral<Start> extends true
		? IsNumericLiteral<End> extends true
			? Options['asUnion'] extends true
				? TupleToUnion<IterateRange<Start, End, Options>>
				: IterateRange<Start, End, Options>
			: WeakTypedOutput
		: WeakTypedOutput
);

type Range<Start extends number, End extends number = Start, Options extends RangeOptions = {}> = (
	If<IsEqual<Start, End>, _Range<0, Start, Options>, _Range<Start, End, Options>>
);

// Maybe constrain to NumericLiteral<T>?
type RangeOf<Start extends number, End extends number, Options extends RangeOptions = {}> = _Range<Start, End, Options & {asUnion: true; inclusive: true}>;

type x = Range<5, 10, {inclusive: true; step: 3}>;
//   ^?

type x2 = Range<5>;
//   ^?

type z = RangeOf<5, 9>;
//   ^?

declare function range<S extends number, E extends number>(start: S, end: E): Range<S, E>;

const y = range(5, 6);
//    ^?

const six = 6 as number;
const y2 = range(5, six);
//    ^?

type y3 = RangeOf<5, typeof six>;
//   ^?

// Type NumberRange<N extends number> = MakeRange<N>[number];

// type RangeOptions<S extends number = number> = {
// 	step: S;
// 	inclusive: boolean;
// };

// const DefaultRangeOptions: RangeOptions<1> = {
// 	step: 1,
// 	inclusive: true,
// };

// function range<S extends number, E extends number & S>(start: S, end: E, options: Partial<RangeOptions> = DefaultRangeOptions): number[] {
// 	const output: number[] = [];

// 	if (end === undefined) {
// 		end = start;
// 		start = 0;
// 	}

// 	if (options.inclusive) {
// 		end += 1; // Won't work if negative
// 	}

// 	for (let i = start; i < end; i += options.step ?? DefaultRangeOptions.step) {
// 		output.push(i);
// 	}

// 	return output;
// }

