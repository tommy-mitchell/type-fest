import type {IsStringLiteral, IsNumericLiteral, IsBooleanLiteral, IsSymbolLiteral, IsLiteral} from './is-literal';

export type IfStringLiteral<T, TypeIfStringLiteral = true, TypeIfNotStringLiteral = false> = (
	IsStringLiteral<T> extends true ? TypeIfStringLiteral : TypeIfNotStringLiteral
);

export type IfNumericLiteral<T, TypeIfNumericLiteral = true, TypeIfNotNumericLiteral = false> = (
	IsNumericLiteral<T> extends true ? TypeIfNumericLiteral : TypeIfNotNumericLiteral
);

export type IfBooleanLiteral<T, TypeIfBooleanLiteral = true, TypeIfNotBooleanLiteral = false> = (
	IsBooleanLiteral<T> extends true ? TypeIfBooleanLiteral : TypeIfNotBooleanLiteral
);

export type IfSymbolLiteral<T, TypeIfSymbolLiteral = true, TypeIfNotSymbolLiteral = false> = (
	IsSymbolLiteral<T> extends true ? TypeIfSymbolLiteral : TypeIfNotSymbolLiteral
);

export type IfLiteral<T, TypeIfLiteral = true, TypeIfNotLiteral = false> = (
	IsLiteral<T> extends true ? TypeIfLiteral : TypeIfNotLiteral
);
