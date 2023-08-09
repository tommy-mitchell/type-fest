<div align="center">
	<br>
	<br>
	<img src="media/logo.svg" alt="type-fest" height="300">
	<br>
	<br>
	<b>A collection of essential TypeScript types</b>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<div align="center">
		<p>
			<p>
				<sup>
					<a href="https://github.com/sponsors/sindresorhus">Sindre Sorhus' open source work is supported by the community</a>
				</sup>
			</p>
			<sup>Special thanks to:</sup>
			<br>
			<br>
			<a href="https://standardresume.co/tech">
				<img src="https://sindresorhus.com/assets/thanks/standard-resume-logo.svg" width="180"/>
			</a>
			<br>
			<br>
			<br>
			<a href="https://workos.com/?utm_campaign=github_repo&utm_medium=referral&utm_content=type-fest&utm_source=github">
				<div>
					<img src="https://sindresorhus.com/assets/thanks/workos-logo-white-bg.svg" width="220" alt="WorkOS">
				</div>
				<b>Your app, enterprise-ready.</b>
				<div>
					<sub>Start selling to enterprise customers with just a few lines of code.</sub>
					<br>
					<sup>Add Single Sign-On (and more) in minutes instead of months.</sup>
				</div>
			</a>
			<br>
			<br>
			<br>
			<a href="https://transloadit.com?utm_source=sindresorhus&utm_medium=referral&utm_campaign=sponsorship&utm_content=type-fest">
				<picture>
					<source width="350" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/transloadit-logo-dark.svg">
					<source width="350" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/transloadit-logo.svg">
					<img width="350" src="https://sindresorhus.com/assets/thanks/transloadit-logo.svg" alt="Transloadit logo">
				</picture>
			</a>
			<br>
			<br>
		</p>
	</div>
	<br>
	<hr>
</div>
<br>
<br>

[![](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://giphy.com/gifs/illustration-rainbow-unicorn-26AHG5KGFxSkUWw1i)
[![npm dependents](https://badgen.net/npm/dependents/type-fest)](https://www.npmjs.com/package/type-fest?activeTab=dependents)
[![npm downloads](https://badgen.net/npm/dt/type-fest)](https://www.npmjs.com/package/type-fest)
[![Docs](https://paka.dev/badges/v0/cute.svg)](https://paka.dev/npm/type-fest)

Many of the types here should have been built-in. You can help by suggesting some of them to the [TypeScript project](https://github.com/Microsoft/TypeScript/blob/main/CONTRIBUTING.md).

Either add this package as a dependency or copy-paste the needed types. No credit required. 👌

PR welcome for additional commonly needed types and docs improvements. Read the [contributing guidelines](.github/contributing.md) first.

**Help wanted with reviewing [proposals](https://github.com/sindresorhus/type-fest/issues) and [pull requests](https://github.com/sindresorhus/type-fest/pulls).**

## Install

```sh
npm install type-fest
```

*Requires TypeScript >=5.1*

## Usage

[TS Playground](https://tsplay.dev/type-fest_example)

```ts
import type {Except} from 'type-fest';

type Foo = {
	unicorn: string;
	rainbow: boolean;
};

type FooWithoutRainbow = Except<Foo, 'rainbow'>;
//=> {unicorn: string}
```

## API

Click the type source for complete docs.

### Type Categories

- [Array](#array)
- [Async](#async)
- [Change Case](#change-case)
- [Class](#class)
- [File](#file)
- [Function](#function)
- [Iterable](#iterable)
- [JSON](#json)
- [Map](#map)
- [Numeric](#numeric)
- [Object](#object)
- [Observable](#observable)
- [Set](#set)
- [String](#string)
- [Template Literal](#template-literal)
- [Type](#type)
- [Type Guard](#type-guard)
- [Utilities](#utilities)

### Array

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA">TS Playground</a> | <a href="source/entries.d.ts">Source</a>
	</summary>

	```ts
	import type {Entries} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntries = (examples: Entries<Example>) => examples.map(example => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed()
	]);
	
	const example: Example = {someKey: 1};
	const entries = Object.entries(example) as Entries<Example>;
	const output = manipulatesEntries(entries);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntries: Entries<typeof objectExample> = [['a', 1]];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntries: Entries<typeof arrayExample> = [[0, 'a'], [1, 1]];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntries: Entries<typeof map> = [['a', 1]];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntries: Entries<typeof setExample> = [['a', 'a'], [1, 1]];
	```
	</details>

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA">TS Playground</a> | <a href="source/entry.d.ts">Source</a>
	</summary>

	```ts
	import type {Entry} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntry = (example: Entry<Example>) => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed(),
	];
	
	const example: Example = {someKey: 1};
	const entry = Object.entries(example)[0] as Entry<Example>;
	const output = manipulatesEntry(entry);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntry: Entry<typeof objectExample> = ['a', 1];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntryString: Entry<typeof arrayExample> = [0, 'a'];
	const arrayEntryNumber: Entry<typeof arrayExample> = [1, 1];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntry: Entry<typeof mapExample> = ['a', 1];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntryString: Entry<typeof setExample> = ['a', 'a'];
	const setEntryNumber: Entry<typeof setExample> = [1, 1];
	```
	</details>

- `FixedLengthArray` - Create a type that represents an array of the given type and length. The array's length and the `Array` prototype methods that manipulate its length are excluded in the resulting type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMWADxQEwBkUA7AcxgAsBBKKAQ0QF84AzKCEOAciVQFpWKAM4xuAbgBQkvmkykAxsHIAVFPS4BeONjxFSFGnUYAeUVGVkANHADMAPimSFEEqLhkAriJjySS1XUQAC4dRUs1DThtAG1uACkIYUpuG24AWWAFSnoUABtUngAlCAAjFFhuAF0nFzd4Sk4UPwCySJCw-wig6Lg4gHEUaDIUQoSIShJqqQB6Gc17OAqOKDgVAGUAJltNzdCVZDRzSxiquGBhOBIIeHphYWAyEnpSvLQYCARDnhbujW5pF4fL9AhoAHRgTzJAAU3HW-wAlLN5otltA1ltbLYAJyhAAKHFQsEQPEhyW4cHwEBEVxuSxwF3gri+qB+4VBIG4QA">TS Playground</a> | <a href="source/fixed-length-array.d.ts">Source</a>
	</summary>

	```ts
	import type {FixedLengthArray} from 'type-fest';
	
	type FencingTeam = FixedLengthArray<string, 3>;
	
	const guestFencingTeam: FencingTeam = ['Josh', 'Michael', 'Robert'];
	
	const homeFencingTeam: FencingTeam = ['George', 'John'];
	//=> error TS2322: Type string[] is not assignable to type 'FencingTeam'
	
	guestFencingTeam.push('Sam');
	//=> error TS2339: Property 'push' does not exist on type 'FencingTeam'
	```
	</details>

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOCcG+XhQBH8KBEymNDiqfEEX1i3zAHGOfFC4Ui6mifHBMQgBAp2LoDM08BZbIA6kdxJ1zbcDHBJZshbsBdXpbtRabxSMufW+bY4Ak5Uc6GQbD3jv3yMrh2QNb9lmPdSgyEk+AI1LmDcbTXAy5brfDM-ako60S63doPSFvSJff7A0bDXBmRoqHF8nAQKJQSwmkY3okkrKAMzD9BH0KJ1wxQD1V26L93xwIwtjUKARE-SkAjsL8UllAgIAgACgKKRFvjA7pgzXL8gA">TS Playground</a> | <a href="source/get.d.ts">Source</a>
	</summary>

	```ts
	import type {Get} from 'type-fest';
	import * as lodash from 'lodash';
	
	const get = <BaseType, Path extends string | readonly string[]>(object: BaseType, path: Path): Get<BaseType, Path> =>
	lodash.get(object, path);
	
	interface ApiResponse {
	hits: {
	hits: Array<{
	_id: string
	_source: {
	name: Array<{
	given: string[]
	family: string
	}>
	birthDate: string
	}
	}>
	}
	}
	
	const getName = (apiResponse: ApiResponse) =>
	get(apiResponse, 'hits.hits[0]._source.name');
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Path also supports a readonly array of strings
	const getNameWithPathArray = (apiResponse: ApiResponse) =>
	get(apiResponse, ['hits','hits', '0', '_source', 'name'] as const);
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Non-strict mode:
	Get<string[], '3', {strict: false}> //=> string
	Get<Record<string, string>, 'foo', {strict: true}> // => string
	```
	</details>

- `Includes` - Returns a boolean for whether the given array includes the given item.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYGMA2ArgCYoDOAvnAGZQQhwDkSqAtNeTIwNwBQvLNAAsAhmQBKKYgB4RUKCMRwUADxgpsxMnBHZEAbQC6APjgBeODgIlys+YoA0TKFMbHuQA">TS Playground</a> | <a href="source/includes.d.ts">Source</a>
	</summary>

	```ts
	import type {Includes} from 'type-fest';
	
	type hasRed<array extends any[]> = Includes<array, 'red'>;
	```
	</details>

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQsAdgXzgDMoIQ4ByJVAWiJQGcYKBuAKDYHpO4BZYAB4oAJnAAUTKHgDmDOADI4uAK4gARiigMAlHGAwUIBizhRGygDbxgDAFyUiECADoADM7UBDAF4U2AYwhcJjgwTxgAC3tsPAAeAG0KRwgKABo4V3SKL18AXSznCgA+OABeOETktIysnIpc5wArHFwxCkLtdi4eAHlcC0Q4SRk9AyMTMwZLazsHJw9PKAXfAKCQsMjoloSkp2rsxf26-MpCkvLKvdrD67ymlraOru44PoGlVQ0oUcNjU3MrHpZhQAIzOABMzgAzH5AsF4BsonAYrgEiD0uD0lCTu1imUKui4Ji4Nj7nhHhROhwXm9BmpgNI8NYxn9JtMgZQwZCYat4aFwkiUWjcBiRSTcDizvj4iCxeCxVCJWTWriqd1Xv06U4LChPLgfuN-lNATZ7FQoMoUM4iJ4LAwrTALShYWsEQKtnF4o7LekbXaUOlvShJXiLkHfbb7YGnQ1muTVc8eABhIIwTx4OQqCwWGwRA2sgEzM3JZzLUsCRArOHrd3I7aXFLpZS4YQoIh4ES3apZixZCt5Aqhiq7RtwZut9u4TuUOrpHt9yv1ZUUtUvAAKixgwFtCGUYB1QwinlQcjEkzdUE85AsniYnSN7NNcAABmAzO2BM4ACToYa4aT4M+vI1psdaehQb5toI1Sls4f7SPEuQhucw6QR+S5xiqTzUjwG6wNuFi7vuaAMEeJ7iOe-KXuQ7ZaDA95siaszPj+8H4HByhEB+QHVm6oFCvEsHwYhWRTFx0HIdKFBiehsYPAmOFwAAKnuOpyPovxwAA7voeY9rmY64MAawTIWHK4nAAA+lARCg2YuBQVmnFp0AWMIjnWRQtn2c4LlQG5Lp8oiHqook3kWCkTnjlBU7CFkfkBU5PaSRcXl2RF+wJe5cnxk8QA">TS Playground</a> | <a href="source/join.d.ts">Source</a>
	</summary>

	```ts
	import type {Join} from 'type-fest';
	
	// Mixed (strings & numbers) items; result is: 'foo.0.baz'
	const path: Join<['foo', 0, 'baz'], '.'> = ['foo', 0, 'baz'].join('.');
	
	// Only string items; result is: 'foo.bar.baz'
	const path: Join<['foo', 'bar', 'baz'], '.'> = ['foo', 'bar', 'baz'].join('.');
	
	// Only number items; result is: '1.2.3'
	const path: Join<[1, 2, 3], '.'> = [1, 2, 3].join('.');
	
	// Only bigint items; result is '1.2.3'
	const path: Join<[1n, 2n, 3n], '.'> = [1n, 2n, 3n].join('.');
	
	// Only boolean items; result is: 'true.false.true'
	const path: Join<[true, false, true], '.'> = [true, false, true].join('.');
	
	// Contains nullish items; result is: 'foo..baz..xyz'
	const path: Join<['foo', undefined, 'baz', null, 'xyz'], '.'> = ['foo', undefined, 'baz', null, 'xyz'].join('.');
	
	// Partial tuple shapes (rest param last); result is: `prefix.${string}`
	const path: Join<['prefix', ...string[]], '.'> = ['prefix'].join('.');
	
	// Partial tuple shapes (rest param first); result is: `${string}.suffix`
	const path: Join<[...string[], 'suffix'], '.'> = ['suffix'].join('.');
	
	// Tuples items with nullish unions; result is '.' | 'hello.' | '.world' | 'hello.world'
	const path: Join<['hello' | undefined, 'world' | null], '.'> = ['hello', 'world'].join('.');
	```
	</details>

- `LastArrayElement` - Extracts the type of the last element of an array.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGQIYGcYCCUU2iAogDYogoB2MAvnAGZQQhwDkSqAtMynycA3AChRAExQBjCtihpmAV1rSYwCLThz8AeWYAeAGpwUADxh0JuOAuwTNFRHGy1EAbQC6APgAU8kkQALjgjAEoQnHwiQMpqOhhjbzFRaU18F2JSOABeOHdOZggITgAaOAAmTxSeFAhmbTwYfX8sxDCxAHpOnO84WiUQACMUKCA">TS Playground</a> | <a href="source/last-array-element.d.ts">Source</a>
	</summary>

	```ts
	import type {LastArrayElement} from 'type-fest';
	
	declare function lastOf<V extends readonly any[]>(array: V): LastArrayElement<V>;
	
	const array = ['foo', 2];
	
	typeof lastOf(array);
	//=> number
	```
	</details>

- `MergeDeep` - Merge two objects or two arrays/tuples recursively into a new type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igERRTAF84AzKCEOAciVQFoKUBnGOgbgCgfG0AMQgQ4AXgw8ANsFYAuOADsAriABGOXsBgoQbBRyjBFuANoBdXgEMF6NQZhGTXOAGMFakVJRXFLgCYKKuo4FqS84XzGOlAUVq5oAEJWUJKKViAoDk64Wjp6QaoaUBbWtvZKRZpwgXCeEN6+YRF8AnDCEMmpEth4hMRgADwdADRwXQB8vAD005KzcACQMvKVIVAzc4vpmdnGuTwLi9q6+mvFpYdbNhgVwcUu7nVePn41Hi9N5pELpK3IQhEXXEcF6+CIJGGIjGXTG6BSUCsiDBKEwEH8WXobDAUB8-jopCmV3mWxWmPummJ2wymMM+02SxOBTgAAo6SY4AAfc44ACUlyONzshXWjw+DVeAQULIpqW59Uain53wZpCAA">TS Playground</a> | <a href="source/merge-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {MergeDeep} from 'type-fest';
	
	type Foo = {
	life: number;
	items: string[];
	a: {b: string; c: boolean; d: number[]};
	};
	
	interface Bar {
	name: string;
	items: number[];
	a: {b: number; d: boolean[]};
	}
	
	type FooBar = MergeDeep<Foo, Bar>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: number[];
	// 	a: {b: number; c: boolean; d: boolean[]};
	// }
	
	type FooBar = MergeDeep<Foo, Bar, {arrayMergeMode: 'spread'}>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: (string | number)[];
	// 	a: {b: number; c: boolean; d: (number | boolean)[]};
	// }
	```
	</details>

- `MultidimensionalArray` - Creates a type that represents a multidimensional array of the given type and dimension.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWQK4BsbAAmoKAdgM7ASkCGuAglFDYgL5wBmUEIcA5ElQBaDinIw+AbgBQ0jtlIBjAtTgpwSTDRhRgADwA8AFTV6YZQuTilsIAEYooAPgAUxEGUrVyALjhGASj8cfCISCipaBiYWAwUAa1IIAHdSABp-JwxpRW94EG1dPT8EpNSAbQBdOABeOCqZaVwUeHJsOy0dfVq4Aq69GQ5oOBdm+HdPSJ6ARkk4CYjVA3nwrwo5gGoNhbWA7NyKCGaAOlwIAHMXAAMASVJgAjpgAC9gUnOVj0XSOABiABJ0DtIqwrgFGm0OoV9OUAAzVOoNaSQzpFHoo6F6OHVGhWUopUhI1iyKAtbBQH59NG4uAhAjA6h0RjMRBxUiJAkZIxOGTEnJ5XqYnrqMCaTEuADM4NkVJh8Ox2J6ABYAEySIA">TS Playground</a> | <a href="source/multidimensional-array.d.ts">Source</a>
	</summary>

	```ts
	import type {MultidimensionalArray} from 'type-fest';
	
	function emptyMatrix<T extends number>(dimensions: T): MultidimensionalArray<unknown, T> {
	const matrix: unknown[] = [];
	
	let subMatrix = matrix;
	for (let dimension = 1; dimension < dimensions; ++dimension) {
	console.log(`Initializing dimension #${dimension}`);
	
	subMatrix[0] = [];
	subMatrix = subMatrix[0] as unknown[];
	}
	
	return matrix as MultidimensionalArray<unknown, T>;
	}
	
	const matrix = emptyMatrix(3);
	
	matrix[0][0][0] = 42;
	```
	</details>

- `MultidimensionalReadonlyArray` - Creates a type that represents a multidimensional readonly array that of the given type and dimension.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWQK4BsbAAmoKAdgM7ASkCGuASijYdbogIJRQ2IC+cAMygQQcAORJUAWgEpyMMQG4AUMoHZSAYwLU4KcEkw0YUYAA8APABU9ZmGULk4pbCABGKKAD4AFMRBklNTkAFxwVgCUYTj4RCQUVLQMTCykbJzciBYaANakEADupAA04V4YyprB8CDGpmZhuflFANoAunAAvHDtKsq4KPDk2G5GJuZdcLXjZioC0HA+A-D+gYmTAIyKcKsJuhY78UEU2wDUp7vHERVVFBADAHS4EADmPgAGAJKkwAR0wAAvYCkF6HAJ7UhwADEABJ0JdErx3hE+sNRnVzC0AAwdbq9ZTAASLBH7MFrYJwKRwDbXdDKNFjeqTBkYszYjo0JxNQqkfH8FC4choOksmbsyYAFgATCpeMo5cooINsFBIdMmZy4DECCSkoxmKwOFweNlSHkeaUrF5ZapbvIpqzJvowIZWT4AMwo23VOA0CgFTyTdWYnHs9nbAD0Ebg0qAA">TS Playground</a> | <a href="source/multidimensional-readonly-array.d.ts">Source</a>
	</summary>

	```ts
	import type {MultidimensionalReadonlyArray} from 'type-fest';
	
	function emptyMatrix<T extends number>(dimensions: T): MultidimensionalReadonlyArray<unknown, T> {
	const matrix: unknown[] = [];
	
	let subMatrix = matrix;
	for (let dimension = 1; dimension < dimensions; ++dimension) {
	console.log(`Initializing dimension #${dimension}`);
	
	subMatrix[0] = [];
	if (dimension < dimensions - 1) {
	subMatrix = subMatrix[0] as unknown[];
	} else {
	subMatrix[0] = 42;
	}
	}
	
	return matrix as MultidimensionalReadonlyArray<unknown, T>;
	}
	
	const matrix = emptyMatrix(3);
	
	const answer = matrix[0][0][0]; // 42
	```
	</details>

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLseEA">TS Playground</a> | <a href="source/partial-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PartialDeep} from 'type-fest';
	
	const settings: Settings = {
	textEditor: {
	fontSize: 14;
	fontColor: '#000000';
	fontWeight: 400;
	}
	autocomplete: false;
	autosave: true;
	};
	
	const applySavedSettings = (savedSettings: PartialDeep<Settings>) => {
	return {...settings, ...savedSettings};
	}
	
	settings = applySavedSettings({textEditor: {fontWeight: 500}});
	```
	</details>

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA">TS Playground</a> | <a href="source/readonly-deep.d.ts">Source</a>
	</summary>

	```ts
	// data.json
	{
	"foo": ["bar"]
	}
	
	// main.ts
	import type {ReadonlyDeep} from 'type-fest';
	import dataJson = require('./data.json');
	
	const data: ReadonlyDeep<typeof dataJson> = dataJson;
	
	export default data;
	
	// test.ts
	import data from './main';
	
	data.foo.push('bar');
	//=> error TS2339: Property 'push' does not exist on type 'readonly string[]'
	```
	</details>

- `RequiredDeep` - Create a type from another type with all keys and nested keys set to required.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmAIiimAL5wBmUEIcA5EqgLS0oDOMzA3AChBbNAGUUMGMAB2Ac25wAvBhEoAHjACixYDGgB+AFyraEGTDHAAXimNwZeEACMUUOAB84eGcRS1ZEiEzCwBhCAAbQxNeKFk5T29ff0DiYPMYAHUUYDkACxh7Rxc3RJ8-AJkgwSpBAEM8fQBjRjAIyTsTZwhIlDqZMuTK6ob9bjqAN064bt7+wYrUoSohEWQ0bHxCEgkpeMUVTYIiMgowAB5d6XluAD4hAHoHhHW4I+3iK-3lVSe4AEgYBptLp9FATOhBH9-v8QpYbCgTMVXFBHs8YXDwlFwXBYvE0QDYRlsrkCkinCiCf9atDRhAWuB2kCuj12v0qXTxlMWXMZASqEA">TS Playground</a> | <a href="source/required-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredDeep} from 'type-fest';
	
	type Settings = {
	textEditor?: {
	fontSize?: number | undefined;
	fontColor?: string | undefined;
	fontWeight?: number | undefined;
	}
	autocomplete?: boolean | undefined;
	autosave?: boolean | undefined;
	};
	
	type RequiredSettings = RequiredDeep<Settings>;
	// type RequiredSettings = {
	// 	textEditor: {
	// 		fontSize: number;
	// 		fontColor: string;
	// 		fontWeight: number;
	// 	}
	// 	autocomplete: boolean;
	// 	autosave: boolean;
	// }
	```
	</details>

- `TupleToUnion` - Convert a tuple/array into a union type of its elements.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFQK5gDYqYQCqAdsBKQL5wBmUEIcA5EqgLS0oDOMzA3AChBAY0q84AEx4xgpAIazxcALxwA2s3nMANCwBGuliOYBdOPO5wxpXkMFs0AERlzFFUqrg58hEuUoAHkcIWilXBSVbAD4hAHo4lWiWbTgAHwNmdONmYVpsUhEouAA3FChgWkQXXjcogAppWsiPAC44AoBrUggAd1IASnam2RbKOGArGtH3cfRBKBQYbChPEbqPbgA6ORE8bCbGiNnPSwtSRAGhKmFHOAAlFABHbBkAIQhJRC956TxgMpQIjtaYbSjXez5QrFQGVRCPF7vT6Ier6ZHtLo9fpDOBor4TKwI168D74+Y2CR-AHlIheVHIixWeQXAZbKmAohCRbLVYIZAoUK4hkqEUsCD6ABWKCKWQAZLKhfiAISi0jYPB4ODy0rlOGgsakI7-DkQK6CKhAA">TS Playground</a> | <a href="source/tuple-to-union.d.ts">Source</a>
	</summary>

	```ts
	import type {TupleToUnion} from 'type-fest';
	
	const destinations = ['a', 'b', 'c'] as const;
	
	type Destination = TupleToUnion<typeof destinations>;
	//=> 'a' | 'b' | 'c'
	
	function verifyDestination(destination: unknown): destination is Destination {
	return destinations.includes(destination as any);
	}
	
	type RequestBody = {
	deliverTo: Destination;
	};
	
	function verifyRequestBody(body: unknown): body is RequestBody {
	const deliverTo = (body as any).deliverTo;
	return typeof body === 'object' && body !== null && verifyDestination(deliverTo);
	}
	```
	</details>

- `TypedArray` - Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/typed-array.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `WritableDeep` - Create a deeply mutable version of an `object`/`ReadonlyMap`/`ReadonlySet`/`ReadonlyArray` type. The inverse of `ReadonlyDeep<T>`. Use `Writable<T>` if you only need one level deep.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUARFFMAXzgDMoIQ4ByJVAWlpQGcZmBuAFCC2aAGIQIcALwZBUFHgAmEAHZFEcPAC44qgK4gCKKEIXK1GuAV3mV6zbxyqA5gG0AuvzgB6H3AAVKW4ACwgAdwQQvHgQfXwCYCJcTWBuOCUKMCs8Wi4AYxgUJQA6eUV7K3zdAkkSPFUhKiFBfLVeOHCcBJJySgkIXWxcQl6sgB4BgD4ZDB04AEYAGmtdN2YAJmYPFeqEKH0UZsEukeIyLIGSvFmAZiFTnov+yRKCNwAGD1nmVRRIgBueCIhwEJ26o2eYCuBFm624jBQMBCwFc234QA">TS Playground</a> | <a href="source/writable-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {WritableDeep} from 'type-fest';
	
	type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that mutability is deeply affected.
	readonly c: boolean;
	};
	
	const writableDeepFoo: WritableDeep<Foo> = {a: 1, b: ['2'], c: true};
	writableDeepFoo.a = 3;
	writableDeepFoo.b[0] = 'new value';
	writableDeepFoo.b = ['something'];
	```
	</details>

### Async

- `AsyncReturnType` - Unwrap the return type of a function that returns a `Promise`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gQQM6IHYDGASijAK5R4AqyKAvnAGZQQhwDkSqAtIytjHYBuAFChIsDAENchAGJlCMYBDwNmrDlLDBhIkQHoDcKgAtg2BLThR+EADYA3fgggJTaRQHco21ABMbUgo8K1Q4CEY4AAMZfAIFJRU8aIA6ES40ADUpezI0AF44HHiSckoaVAAeTMi4OPlFAmVVAD5REQaCJiaW0P8IAGVWUnM8AHMACkdc-IAuOBy8lABKDDp9LsTm5MmV1JgPPGnZwta4AeGQUeAJk+WVlaEgA">TS Playground</a> | <a href="source/async-return-type.d.ts">Source</a>
	</summary>

	```ts
	import type {AsyncReturnType} from 'type-fest';
	import {asyncFunction} from 'api';
	
	// This type resolves to the unwrapped return type of `asyncFunction`.
	type Value = AsyncReturnType<typeof asyncFunction>;
	
	async function doSomething(value: Value) {}
	
	asyncFunction().then(value => doSomething(value));
	```
	</details>

- `Asyncify` - Create an async version of the given function type, by boxing the return type in `Promise` while keeping the same parameter types.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gQQM6IHYDGwAZogL5zFQQhwDkSqAtMStjHQNwBQ3A9HzgBlfAQAW1PBACu2StMIxgEPADpuxBQSUq4AcxQwAYhAgjCACmw0UmKHoBcwmwBVkKAJROTEDP0GAZATcZLyMaDiiJMAoACY+AOKGMChQcAC8cBGEJIgAPGEQxPqGPuYEAHw8AmnlCO6ZuNnE0XGmiTDJqRlWNnaOziAobqge6bUACtQgwNgouT6VvALCAIaDcCtyAAYGxqZlW3AARtLwm6ISKjLY6gQq7MV7EFkETi9RsQlJKelwPYN9UY1PzLYYoIQEKDAMDwKQAdzgAGt4XIYGIVvAttYAfZDjM4FshK53IcVqcaBjgAQVgAbGmIdTLACSZxp1iRKIQ6PgaPxmkUyjwcBAsngUEM0igQq2kxoMzmCy2jMETKKiBkcHRADc0FsAAJhbCQ6EwJhsGnAPAwPhgKbylhaHR4JjnQiHC1Wn5QaQ0tAoPArI6+mIAGjgwHgcOAdLgKB1QvFkFgXIxcAAREZHYLUdy4OKYJKhba5bM5CKHkc0K6CKo0+p-HAgmQgA">TS Playground</a> | <a href="source/asyncify.d.ts">Source</a>
	</summary>

	```ts
	import type {Asyncify} from 'type-fest';
	
	// Synchronous function.
	function getFooSync(someArg: SomeType): Foo {
	// …
	}
	
	type AsyncifiedFooGetter = Asyncify<typeof getFooSync>;
	//=> type AsyncifiedFooGetter = (someArg: SomeType) => Promise<Foo>;
	
	// Same as `getFooSync` but asynchronous.
	const getFooAsync: AsyncifiedFooGetter = (someArg) => {
	// TypeScript now knows that `someArg` is `SomeType` automatically.
	// It also knows that this function must return `Promise<Foo>`.
	// If you have `@typescript-eslint/promise-function-async` linter rule enabled, it will even report that "Functions that return promises must be async.".
	
	// …
	}
	```
	</details>

- `Promisable` - Create a type that represents either the value or the value wrapped in `PromiseLike`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBShEwDOAhgEYA2KAvnAGY4hwDkSqAtNSvjAwNwBQvhfIgB2AYxoBXMTGARhcUhADmSlFAAUqmABllAUWEwoiAFxx1ASjgBeAHxxsuAiXIAeTlGDClti2cd4+CiuAG4QwAAm9ui8onKccCiGxjZwhADuhMDwWrpKBkaIlnxxwvgQ5AB0ikrqSYUWfBT8Naoaljb2DNQQEAyNvK1q6h12DnQEKJVQHBUhKOoMxIRQ-Y1AA">TS Playground</a> | <a href="source/promisable.d.ts">Source</a>
	</summary>

	```ts
	import type {Promisable} from 'type-fest';
	
	async function logger(getLogEntry: () => Promisable<string>): Promise<void> {
	const entry = await getLogEntry();
	console.log(entry);
	}
	
	logger(() => 'foo');
	logger(() => Promise.resolve('bar'));
	```
	</details>

### Change case

- `CamelCase` - Convert a string literal to camel-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUBfOAMyghDgHIlUBaClImOgbgChuB6PnADKoMPhS8AxhAB27OERooAatijBsAI3EAuODjyFsJADx0KECE01q6APjgBeehYgAhWz36CAggBMAN2wZSRQ-XkY0AwJiMIAFalRYYDYTABUHZ3RuAG0AaThgGTgAaxRECAo4NLhjfVwY4xQTPLsAXT00-LbuUi8imBQoCmxQuAAlbAB3AHkwGGBZIgxuOj8oRCYoAFcZOj1NS3FgnnNt-HwAfRGQYHxES5kG-YUYdRkAcx5XPRltkE0Qx4bh84z07HeX24AEUAKoALUucIAGr9-oCoKcZmkABIAUXGTAAYgBJPEAGQAIi9DhBjjIeKQpEt4H5NOM2OcYHpokYSH4EhAkgtUpNZvNFnJMit1ohxrs9G9tigADTcCjnfBE3B3RAAOQaejoNigADoAFZEOhqn5wACMACYAMxqk1G1zW7gAR22AC9odsAB56ABsaogMAAFkMiSl8H49CN8CRepwgA">TS Playground</a> | <a href="source/camel-case.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCase} from 'type-fest';
	
	// Simple
	
	const someVariable: CamelCase<'foo-bar'> = 'fooBar';
	
	// Advanced
	
	type CamelCasedProperties<T> = {
	[K in keyof T as CamelCase<K>]: T[K]
	};
	
	interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	BAR: string;
	QUZ_QUX: number;
	'OTHER-FIELD': boolean;
	}
	
	const dbResult: CamelCasedProperties<RawOptions> = {
	dryRun: true,
	fullFamilyName: 'bar.js',
	foo: 123,
	bar: 'foo',
	quzQux: 6,
	otherField: false
	};
	```
	</details>

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA">TS Playground</a> | <a href="source/camel-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	interface UserWithFriends {
	UserInfo: User;
	UserFriends: User[];
	}
	
	const result: CamelCasedPropertiesDeep<UserWithFriends> = {
	userInfo: {
	userId: 1,
	userName: 'Tom',
	},
	userFriends: [
	{
	userId: 2,
	userName: 'Jerry',
	},
	{
	userId: 3,
	userName: 'Spike',
	},
	],
	};
	```
	</details>

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA">TS Playground</a> | <a href="source/camel-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedProperties} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
	};
	```
	</details>

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAXzgDMoIQ4ByJVAWlpXJmYG4AUAID0wuAGVQYHCiEBjCADseccoxQA1UlGCkARjIBccbHhAEiZSgB5mtCBABC25gBoWAYmYA+OAF4WewgPPRdBETEAQQATADdSRTkUaKE2NAB5aOicRCtkgAUGVFhgbmsAFV8A9AEAbQBpOGBFOABrFEQIWjhyuAoTXHxCEgoUa3r3Zi9vAF1jcoaZgSpw5uHaUiSJdXSwGGAlcgwBaKhEACUAV0VjPQcZBMFmuRxL6JQAMWAjVRgdRQA5oIgsZFJcQHoiIIqPJDvAoKQAO7EPC7faHYyZbK5UbRQoQYr7MriHZ7A7KKrHZinRAeKDXZjGP6XFCuATMZ6vd4eWjfFCMlihKAAOgAVuQ3AIQXAAIwAJgAzMs+EA">TS Playground</a> | <a href="source/delimiter-case.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCase} from 'type-fest';
	
	// Simple
	
	const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';
	
	// Advanced
	
	type OddlyCasedProperties<T> = {
	[K in keyof T as DelimiterCase<K, '#'>]: T[K]
	};
	
	interface SomeOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
	}
	
	const rawCliOptions: OddlyCasedProperties<SomeOptions> = {
	'dry#run': true,
	'include#file': 'bar.js',
	foo: 123
	};
	```
	</details>

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA">TS Playground</a> | <a href="source/delimiter-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: DelimiterCasedPropertiesDeep<UserWithFriends, '-'> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA">TS Playground</a> | <a href="source/delimiter-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: DelimiterCasedProperties<User, '-'> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `KebabCase` - Convert a string literal to kebab-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigL5wBmUEIcA5EqgLRUokwMDcAULwHoBcAMqgwAGxT8AxhAB2nOCTooAanijACUgFxxs+IqRQAeBlQgQAQpoYA+OAF5GliC3xQe-IXACCACYAbnjyMigB-MxohgTEZAEACrSosMAcpgAqji7ovADamHDA8nAA1iiIEFRwmXCkBrhxJqaY9gC6+pmF7bzkfLwlMChQVHjhcIQSwADyYDDACiQYvAFQiABKAK7y+jhWUqF8JTISWwEoAGLAesowWvIA5nxu+vJbIDgjfOSyS-BQPAAdyms3mi0U+lixgSyQgqQWGVBcwWSxyKwYa0QLCgOwY+nuWxQABpeAwTmcLmwbih8YxPAA6ABWJAYpNecAAjAAmADMfW4QA">TS Playground</a> | <a href="source/kebab-case.d.ts">Source</a>
	</summary>

	```ts
	import type {KebabCase} from 'type-fest';
	
	// Simple
	
	const someVariable: KebabCase<'fooBar'> = 'foo-bar';
	
	// Advanced
	
	type KebabCasedProperties<T> = {
	[K in keyof T as KebabCase<K>]: T[K]
	};
	
	interface CliOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
	}
	
	const rawCliOptions: KebabCasedProperties<CliOptions> = {
	'dry-run': true,
	'include-file': 'bar.js',
	foo: 123
	};
	```
	</details>

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA">TS Playground</a> | <a href="source/kebab-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type [KebabCasedPropertiesDeep] from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: KebabCasedPropertiesDeep<UserWithFriends> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA">TS Playground</a> | <a href="source/kebab-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {KebabCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: KebabCasedProperties<User> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `PascalCase` - Converts a string literal to pascal-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oC+cAZlBCHAORKoC01KuMjA3AFB8A9ILgBlUGCIoB+CADsucXPRQA1bFGDYARlIBccHAWJlcKADyNqECK20bGAPjgBeJgDEbAIQf8hIgEEAEwA3bDl8FCCBFjQjQlJyTDowXHMAFWc3dD4AbQBpOGA5OABrFEQIajh0uDxDPATTC3zHAF0DdIK2vgo-YpgUKGpsSLgAJWwAdwB5MBhgeVwMPkYgqERWKABXOUYDbRspcP4rbaIiAH0RkGAiREu5bBAUfaUYTTkAc35rCAM5NsQNohvwKDIlvAgtpxpxzjADGQXokzEFkhBULBgJxzABZCBBFBEdGpLIrAAiG3GuwMH22KAANHx3OciO5nndEAA5Z4oAyMexQAB0ACtcIwmZ5-nAAIwAJgAzL0eEA">TS Playground</a> | <a href="source/pascal-case.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCase} from 'type-fest';
	
	// Simple
	
	const someVariable: PascalCase<'foo-bar'> = 'FooBar';
	
	// Advanced
	
	type PascalCaseProps<T> = {
	[K in keyof T as PascalCase<K>]: T[K]
	};
	
	interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	}
	
	const dbResult: CamelCasedProperties<ModelProps> = {
	DryRun: true,
	FullFamilyName: 'bar.js',
	Foo: 123
	};
	```
	</details>

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA">TS Playground</a> | <a href="source/pascal-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: PascalCasedPropertiesDeep<UserWithFriends> = {
	UserInfo: {
	UserId: 1,
	UserName: 'Tom',
	},
	UserFriends: [
	{
	UserId: 2,
	UserName: 'Jerry',
	},
	{
	UserId: 3,
	UserName: 'Spike',
	},
	],
	};
	```
	</details>

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA">TS Playground</a> | <a href="source/pascal-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: PascalCasedProperties<User> = {
	UserId: 1,
	UserName: 'Tom',
	};
	```
	</details>

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMZRQQxGADsBzTY-AaxQGF8BnFAXzgDMoIQ4ByJVALRsUDGDwDcAKEnYIxUXAZcUANXxRg+AEYAbFAC44OPIRLlKNekwA8PNhAgAhdTwB8cALy8AYgHlfAPqOAIIAShJAA">TS Playground</a> | <a href="source/screaming-snake-case.d.ts">Source</a>
	</summary>

	```ts
	import type {ScreamingSnakeCase} from 'type-fest';
	
	const someVariable: ScreamingSnakeCase<'fooBar'> = 'FOO_BAR';
	```
	</details>

- `SnakeCase` - Convert a string literal to snake-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oC+cAZlBCHAORKoC01KpMjA3AFB8A9ILiZQYADYoBAYwjYucUvRQA1XFGC4ARlIBcovIRLkAPI2oQIAIQ2MAfHAC8TSxAD62u-yEiAggAmAG642DIoAQIsaDgExGQRAAp0qLDAnKYAKo4u6HwA2gDScMDYcISIENRwmXBkhnEmKKaF9gC6BplFbXwUPqUwKFDUuOFwALIQASgSyRBgpBh8wKQAErhgYIgG2lZSofzUAK4SEgBiuCDAEogAcpcoBlya2ADmh1YG2Ecg2kP8FFk8kUAW0ACVOCcYAZYsYEgE5qkYOlSKZJtNZilSDklowVu4ABYbLaMAwwKBHFAAGj4FhOEncIyuN3ceBAKFJTBIUAkuFEVxgBMYNLcBgAjAAmADMvR4QA">TS Playground</a> | <a href="source/snake-case.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCase} from 'type-fest';
	
	// Simple
	
	const someVariable: SnakeCase<'fooBar'> = 'foo_bar';
	
	// Advanced
	
	type SnakeCasedProperties<T> = {
	[K in keyof T as SnakeCase<K>]: T[K]
	};
	
	interface ModelProps {
	isHappy: boolean;
	fullFamilyName: string;
	foo: number;
	}
	
	const dbResult: SnakeCasedProperties<ModelProps> = {
	'is_happy': true,
	'full_family_name': 'Carla Smith',
	foo: 123
	};
	```
	</details>

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA">TS Playground</a> | <a href="source/snake-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: SnakeCasedPropertiesDeep<UserWithFriends> = {
	user_info: {
	user_id: 1,
	user_name: 'Tom',
	},
	user_friends: [
	{
	user_id: 2,
	user_name: 'Jerry',
	},
	{
	user_id: 3,
	user_name: 'Spike',
	},
	],
	};
	```
	</details>

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA">TS Playground</a> | <a href="source/snake-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: SnakeCasedProperties<User> = {
	user_id: 1,
	user_name: 'Tom',
	};
	```
	</details>

### Class

- `Class` - Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/class.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `Constructor` - Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/constructor.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `AbstractClass` - Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/abstract-class.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `AbstractConstructor` - Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures) constructor.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/abstract-constructor.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

### File

- `PackageJson` - Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/package-json.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `TsConfigJson` - Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/ts-config-json.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

### Function

- `SetReturnType` - Create a function type with a return type of your choice and the same parameters as the given function type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTASjgVygDsAVZFAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaALKIAYgWIBjGMAhkAFgEMYAYRXL6AdzgBeOAAoaECAC44mBinKoANHABGKqJekBrYhB3EAlAYAfFY2APIwSihQdiiCwhRw4gDqUCpgqAAmUrLyigZWOPgwRGQUADzi2XIKymqa2j6O1iAo4ZHRCQA+cNIZKDTAxCgZgYIA9GP6wSKJiClpmVW5xPkmZpbNthSOLm49xF4+-kEhLW1RMXDdvf2Dw3xAA">TS Playground</a> | <a href="source/set-return-type.d.ts">Source</a>
	</summary>

	```ts
	import type {SetReturnType} from 'type-fest';
	
	type MyFunctionThatCanThrow = (foo: SomeType, bar: unknown) => SomeOtherType;
	
	type MyWrappedFunction = SetReturnType<MyFunctionThatCanThrow, SomeOtherType | undefined>;
	//=> type MyWrappedFunction = (foo: SomeType, bar: unknown) => SomeOtherType | undefined;
	```
	</details>

### Iterable

- `IterableElement` - Get the element type of an `Iterable`/`AsyncIterable`. For example, an array or a generator.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSRiqBDAIwBsUBREkFAOxgF84AzKCEOAciVQFoGUBnGGwDcAKBEMArlQDGMYBCpwAVHGABBEAHFquPDGgAKAJQYRiYCiIATOAEZR5yzYBMo2mM5oAsigByEkAJcOABeOGxdYjIKahgAHgAlFBgJKCoAFWQUOM8IBlUNbSpdfSgAPjKgA">TS Playground</a> | <a href="source/iterable-element.d.ts">Source</a>
	</summary>

	```ts
	import type {IterableElement} from 'type-fest';
	
	function * iAmGenerator() {
	yield 1;
	yield 2;
	}
	
	type MeNumber = IterableElement<ReturnType<typeof iAmGenerator>>
	```
	</details>

### JSON

- `JsonObject` - Matches a JSON object.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/json-object.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `JsonArray` - Matches a JSON array.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/json-array.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `JsonPrimitive` - Matches any valid JSON primitive value.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/json-primitive.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `JsonValue` - Matches any valid JSON value.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/json-value.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `Jsonifiable` - Matches a value that can be losslessly converted to JSON.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQM4QHbABmwAhgEYA2KAvnIVBCHAORKoC0hK2MzA3ACgBAemFA">TS Playground</a> | <a href="source/jsonifiable.d.ts">Source</a>
	</summary>

	```ts
	import type {Jsonifiable} from 'type-fest';
	
	//
	```
	</details>

- `Jsonify` - Transform a type to one that is assignable to the `JsonValue` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQM4QHbABmiANHDvgGoCGANgK4oC+chUEIcA5EqgLSEU2GFwDcAKHHA8MFFELUAxmgDiKDihhREGcbxQAubgAUI0kXAA+JiLUQBzfGPGKI0ACbTqs7EYDaePQgAEZyZIEhcgC6EkySrnjCcJDmRmoaWjoAvLr6Rlym5lwkLm5QnnjeQv4AjGQ1UeJMEqWJ8GDswbQoIABieHA5ABTu3tRGFHg0DCgAlIMAfLoA9MtwACIQQnC4IJoAFtL2cADuwDD7cKMw1E0tHRBdPf1DKTKzonCrcACiUOxQIz6ODpPaZODAbBwPAQeDUbDYYD2SpPBAQZLUKDUMFyOAQQgIZBoSbTRhwUKKaj0bBoc4QqHUAbmOQKZTxfBJQjAAAeKHc-UGcAAPAAVBYjMYTXAEYiihbzLJLdDib6bba7A5HU7nS7XW7NSRc3n8vCvMzvT7fFRudxGN7wSFweGI5HUJ4AOnI0qIiDlCCxiUI0BAUNBmm0EJk6IAbnQyc6kSjumivVQ4yhxEa+S88CgThsqkNZh8vms-gCjABBKEobmoRSydxkdZVenQ2FOhGJt3dT2TH1+yl4GHwLSM7BBqAhguySMwGPpzsupNoeepqbpoA">TS Playground</a> | <a href="source/jsonify.d.ts">Source</a>
	</summary>

	```ts
	import type {Jsonify, JsonValue} from 'type-fest';
	
	interface Geometry {
	type: 'Point' | 'Polygon';
	coordinates: [number, number];
	}
	
	const point: Geometry = {
	type: 'Point',
	coordinates: [1, 1]
	};
	
	const problemFn = (data: JsonValue) => {
	// Does something with data
	};
	
	problemFn(point); // Error: type Geometry is not assignable to parameter of type JsonValue because it is an interface
	
	const fixedFn = <T>(data: Jsonify<T>) => {
	// Does something with data
	};
	
	fixedFn(point); // Good: point is assignable. Jsonify<T> transforms Geometry into value assignable to JsonValue
	fixedFn(new Date()); // Error: As expected, Date is not assignable. Jsonify<T> cannot transforms Date into value assignable to JsonValue
	```
	</details>

### Map

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA">TS Playground</a> | <a href="source/entries.d.ts">Source</a>
	</summary>

	```ts
	import type {Entries} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntries = (examples: Entries<Example>) => examples.map(example => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed()
	]);
	
	const example: Example = {someKey: 1};
	const entries = Object.entries(example) as Entries<Example>;
	const output = manipulatesEntries(entries);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntries: Entries<typeof objectExample> = [['a', 1]];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntries: Entries<typeof arrayExample> = [[0, 'a'], [1, 1]];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntries: Entries<typeof map> = [['a', 1]];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntries: Entries<typeof setExample> = [['a', 'a'], [1, 1]];
	```
	</details>

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA">TS Playground</a> | <a href="source/entry.d.ts">Source</a>
	</summary>

	```ts
	import type {Entry} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntry = (example: Entry<Example>) => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed(),
	];
	
	const example: Example = {someKey: 1};
	const entry = Object.entries(example)[0] as Entry<Example>;
	const output = manipulatesEntry(entry);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntry: Entry<typeof objectExample> = ['a', 1];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntryString: Entry<typeof arrayExample> = [0, 'a'];
	const arrayEntryNumber: Entry<typeof arrayExample> = [1, 1];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntry: Entry<typeof mapExample> = ['a', 1];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntryString: Entry<typeof setExample> = ['a', 'a'];
	const setEntryNumber: Entry<typeof setExample> = [1, 1];
	```
	</details>

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLseEA">TS Playground</a> | <a href="source/partial-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PartialDeep} from 'type-fest';
	
	const settings: Settings = {
	textEditor: {
	fontSize: 14;
	fontColor: '#000000';
	fontWeight: 400;
	}
	autocomplete: false;
	autosave: true;
	};
	
	const applySavedSettings = (savedSettings: PartialDeep<Settings>) => {
	return {...settings, ...savedSettings};
	}
	
	settings = applySavedSettings({textEditor: {fontWeight: 500}});
	```
	</details>

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA">TS Playground</a> | <a href="source/readonly-deep.d.ts">Source</a>
	</summary>

	```ts
	// data.json
	{
	"foo": ["bar"]
	}
	
	// main.ts
	import type {ReadonlyDeep} from 'type-fest';
	import dataJson = require('./data.json');
	
	const data: ReadonlyDeep<typeof dataJson> = dataJson;
	
	export default data;
	
	// test.ts
	import data from './main';
	
	data.foo.push('bar');
	//=> error TS2339: Property 'push' does not exist on type 'readonly string[]'
	```
	</details>

- `RequiredDeep` - Create a type from another type with all keys and nested keys set to required.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmAIiimAL5wBmUEIcA5EqgLS0oDOMzA3AChBbNAGUUMGMAB2Ac25wAvBhEoAHjACixYDGgB+AFyraEGTDHAAXimNwZeEACMUUOAB84eGcRS1ZEiEzCwBhCAAbQxNeKFk5T29ff0DiYPMYAHUUYDkACxh7Rxc3RJ8-AJkgwSpBAEM8fQBjRjAIyTsTZwhIlDqZMuTK6ob9bjqAN064bt7+wYrUoSohEWQ0bHxCEgkpeMUVTYIiMgowAB5d6XluAD4hAHoHhHW4I+3iK-3lVSe4AEgYBptLp9FATOhBH9-v8QpYbCgTMVXFBHs8YXDwlFwXBYvE0QDYRlsrkCkinCiCf9atDRhAWuB2kCuj12v0qXTxlMWXMZASqEA">TS Playground</a> | <a href="source/required-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredDeep} from 'type-fest';
	
	type Settings = {
	textEditor?: {
	fontSize?: number | undefined;
	fontColor?: string | undefined;
	fontWeight?: number | undefined;
	}
	autocomplete?: boolean | undefined;
	autosave?: boolean | undefined;
	};
	
	type RequiredSettings = RequiredDeep<Settings>;
	// type RequiredSettings = {
	// 	textEditor: {
	// 		fontSize: number;
	// 		fontColor: string;
	// 		fontWeight: number;
	// 	}
	// 	autocomplete: boolean;
	// 	autosave: boolean;
	// }
	```
	</details>

- `WritableDeep` - Create a deeply mutable version of an `object`/`ReadonlyMap`/`ReadonlySet`/`ReadonlyArray` type. The inverse of `ReadonlyDeep<T>`. Use `Writable<T>` if you only need one level deep.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUARFFMAXzgDMoIQ4ByJVAWlpQGcZmBuAFCC2aAGIQIcALwZBUFHgAmEAHZFEcPAC44qgK4gCKKEIXK1GuAV3mV6zbxyqA5gG0AuvzgB6H3AAVKW4ACwgAdwQQvHgQfXwCYCJcTWBuOCUKMCs8Wi4AYxgUJQA6eUV7K3zdAkkSPFUhKiFBfLVeOHCcBJJySgkIXWxcQl6sgB4BgD4ZDB04AEYAGmtdN2YAJmYPFeqEKH0UZsEukeIyLIGSvFmAZiFTnov+yRKCNwAGD1nmVRRIgBueCIhwEJ26o2eYCuBFm624jBQMBCwFc234QA">TS Playground</a> | <a href="source/writable-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {WritableDeep} from 'type-fest';
	
	type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that mutability is deeply affected.
	readonly c: boolean;
	};
	
	const writableDeepFoo: WritableDeep<Foo> = {a: 1, b: ['2'], c: true};
	writableDeepFoo.a = 3;
	writableDeepFoo.b[0] = 'new value';
	writableDeepFoo.b = ['something'];
	```
	</details>

### Numeric

- `PositiveInfinity` - Matches the hidden `Infinity` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/positive-infinity.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `NegativeInfinity` - Matches the hidden `-Infinity` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/negative-infinity.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `Finite` - A finite `number`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMWAO2DFAXzgDMoIQ4ByJVAWhJQGcYqBuAKA4BMUBjADYBDKGhIBXHHxjAIOOExQwAyn2goAPABU4KAB4Ec3JnBziQAIxRQAfAAoBKHAHMYACwBccbHgLabAJReAG4QwNxsQA">TS Playground</a> | <a href="source/finite.d.ts">Source</a>
	</summary>

	```ts
	import type {Finite} from 'type-fest';
	
	declare function setScore<T extends number>(length: Finite<T>): void;
	```
	</details>

- `Integer` - A `number` that is an integer.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYxQcxSgF84AzKCEOAciVQFoyUBnGGgbgCguATFAMYAbAIZQ0ZAK7YBMYBGxwWKGAE0UYgDwAVOCgAeebLxZxskkACMiAPgAUQlNnwwAFgC44OPISg6bAJSeAG4QwLwcQA">TS Playground</a> | <a href="source/integer.d.ts">Source</a>
	</summary>

	```ts
	import type {Integer} from 'type-fest';
	
	declare function setYear<T extends number>(length: Integer<T>): void;
	```
	</details>

- `Float` - A `number` that is not an integer.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMQDYQIYwC+cAZlBCHAORKoC0JKAzjFQNwBQHAJigMbY8UNCQCuAOz4xgEcXCYoYABRRQ+KcTDwBzFAB4AKnBQAPGBu5M440SABGqgHwAKbBu0wAFgC44OfDCGjgCUvgBuEMDcbEA">TS Playground</a> | <a href="source/float.d.ts">Source</a>
	</summary>

	```ts
	import type {Float} from 'type-fest';
	
	declare function setPercentage<T extends number>(length: Float<T>): void;
	```
	</details>

- `NegativeFloat` - A negative (`-∞ < x < 0`) `number` that is not an integer.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/negative-float.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `Negative` - A negative `number`/`bigint` (`-∞ < x < 0`)
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/negative.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `NegativeInteger` - A negative (`-∞ < x < 0`) `number` that is an integer.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/negative-integer.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `NonNegative` - A non-negative `number`/`bigint` (`0 <= x < ∞`).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gOQgO0ygcwEMZgA3FAXzgDMoIQ4ByJVAWhpQGcYmBuAFACAJigDGAGyJQ0NAK44xpXHC4oYAGRQ4CMABYAeACpwUADxjbhXODjkgARiigA+ABQTtuvQC442PEISchRjFwBKPzIIYGE+IA">TS Playground</a> | <a href="source/non-negative.d.ts">Source</a>
	</summary>

	```ts
	import type {NonNegative} from 'type-fest';
	
	declare function setLength<T extends number>(length: NonNegative<T>): void;
	```
	</details>

- `NonNegativeInteger` - A non-negative (`0 <= x < ∞`) `number` that is an integer.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gOQgO0ygcwEMZgA3FASRxkJSgF84AzKCEOAciVQFpmUAZxicA3AChxAExQBjADZEoaZgFccs0rjiCUMADIocBGAAsAPABU4KAB60cUwXByqQAI3oA+ABTyjJqYAXHDYeIQk5FQ0dFBWXgCUIWQQwFKiQA">TS Playground</a> | <a href="source/non-negative-integer.d.ts">Source</a>
	</summary>

	```ts
	import type {NonNegativeInteger} from 'type-fest';
	
	declare function setLength<T extends number>(length: NonNegativeInteger<T>): void;
	```
	</details>

### Object

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA">TS Playground</a> | <a href="source/camel-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	interface UserWithFriends {
	UserInfo: User;
	UserFriends: User[];
	}
	
	const result: CamelCasedPropertiesDeep<UserWithFriends> = {
	userInfo: {
	userId: 1,
	userName: 'Tom',
	},
	userFriends: [
	{
	userId: 2,
	userName: 'Jerry',
	},
	{
	userId: 3,
	userName: 'Spike',
	},
	],
	};
	```
	</details>

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA">TS Playground</a> | <a href="source/camel-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedProperties} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
	};
	```
	</details>

- `ConditionalExcept` - Exclude keys from a shape that matches the given `Condition`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBSqYNgBuKANHAMIQB2AJnsFQIYA2AogB4DGKYMAvnADMoEEHADkSVAFoBKAM4wxAbgBQKjkwZy5cAIIB3eSLToVlBiBQAuOApyUA5qrkBXDl23yblFyABGKFCqAgzATC5QXnB+wA7AlDCqKlAulAAUAJQYvCo5KpJo7Fw82Lj4RHIAYsIgBkaWcAC85FS0+IysnNwwADx1csakpSB0RAB8qgD0k41jGCmUNplNcwQQwNS8QA">TS Playground</a> | <a href="source/conditional-except.d.ts">Source</a>
	</summary>

	```ts
	import type {Primitive, ConditionalExcept} from 'type-fest';
	
	class Awesome {
	name: string;
	successes: number;
	failures: bigint;
	
	run() {}
	}
	
	type ExceptPrimitivesFromAwesome = ConditionalExcept<Awesome, Primitive>;
	//=> {run: () => void}
	```
	</details>

- `ConditionalKeys` - Extract the keys from a type where the value type of the key extends the given `Condition`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgNIqIDOAvnAGZQQhwDkSqAtIyjTHYBuAFAjgOGCiiMSAYzQBRAB4lwZNOhEkAXHAFQJAc1EAjPQeNwAPnBwBXEKemi5AfgsxDOEyLx70OlE6MS40AGUvYypaAHkcMkQ4AF44bHxCYhxyGJoAHhU1MA0AGn0onwA+UQB6GuTKjhJ2IA">TS Playground</a> | <a href="source/conditional-keys.d.ts">Source</a>
	</summary>

	```ts
	import type {ConditionalKeys} from 'type-fest';
	
	interface Example {
	a: string;
	b: string | number;
	c?: string;
	d: {};
	}
	
	type StringKeysOnly = ConditionalKeys<Example, string>;
	//=> 'a'
	```
	</details>

- `ConditionalPickDeep` - Pick keys recursively from the shape that matches the given condition.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgArADGA1gCIopgC+cAZlBCHAORKoAtOxQBnGLwDcAKGnAcMFFHYlqaAKIAPEuDJp00kgC444qPIDmMgEYmzluAB841iBD0kcM6iYN47MOY4VtIovtLsAPwBQSEW0S5uHl7SABYxDs6u7iieMsAm2clOLsAW8jAyLDIAVoVJuSnV0iyyAmgAyoGWVHRwALxw2PiExDjkvQxMYAA8WjpgegA0pt3BAHwyAPRb-esYxquxknA+GP5Hliyt0u1wXbGTAPJgRKRkA0O4BG-jlDRTZhzbS6FArezBEoAV3wKHY8hQeE20h2ewOGWCJzO6AuEKscDCGCiGIs1xudwePQBL1+5CeODIiE+wx+YwmAMYQPmoPBaws0Nh8JwiJW6Go31GuBMvBQAEcoeRCIheCxkaj9mLfIT0MTLsEyW1kGgAEINTyTZkS2n-Oic2bcxZgxI5TwCvBwhFI7a7DXY7XxeounDVOB1Z3Ja6G1BwAByUJA1iUFsGLMlf0mduBC2WcBw8cTUDVPow5KN9z5TygpqDya+I2tGemWZ5ev5WTNOCLaIMOzgAEhDnjvf3bK2SkVGsO+9iUVt+33cXyp33tbP5330mP20G132+81e3uwxO8ruD3PS9HKcFK9Xks8GUyU1a2TbAfaQY7ebFxx3ReL6zGaU5QVMglRVLsNVHPFfyDLEtV8TcYO3CNriAA">TS Playground</a> | <a href="source/conditional-pick-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {ConditionalPickDeep} from 'type-fest';
	
	interface Example {
	a: string;
	b: string | boolean;
	c: {
	d: string;
	e: {
	f?: string;
	g?: boolean;
	h: string | boolean;
	i: boolean | bigint;
	};
	j: boolean;
	};
	}
	
	type StringPick = ConditionalPickDeep<Example, string>;
	//=> {a: string; c: {d: string}}
	
	type StringPickOptional = ConditionalPickDeep<Example, string | undefined>;
	//=> {a: string; c: {d: string; e: {f?: string}}}
	
	type StringPickOptionalOnly = ConditionalPickDeep<Example, string | undefined, {condition: 'equality'}>;
	//=> {c: {e: {f?: string}}}
	
	type BooleanPick = ConditionalPickDeep<Example, boolean | undefined>;
	//=> {c: {e: {g?: boolean}; j: boolean}}
	
	type NumberPick = ConditionalPickDeep<Example, number>;
	//=> {}
	
	type StringOrBooleanPick = ConditionalPickDeep<Example, string | boolean>;
	//=> {
	// 	a: string;
	// 	b: string | boolean;
	// 	c: {
	// 		d: string;
	// 		e: {
	// 			h: string | boolean
	// 		};
	// 		j: boolean;
	// 	};
	// }
	
	type StringOrBooleanPickOnly = ConditionalPickDeep<Example, string | boolean, {condition: 'equality'}>;
	//=> {b: string | boolean; c: {e: {h: string | boolean}}}
	```
	</details>

- `ConditionalPick` - Pick keys from the shape that matches the given `Condition`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBSqYNgBuKANHAMIQB2AJnsFQIYA2mwAxgNYC+cAZlBBBwA5ElQBaXigDOMYQG4AUIrZMG06XACCAdxmC06RZQYgUALjiyclAOZLpAVzZsZ0mZcqOQAIxRQlXgZgJkcoDzgfYFtgShglRShHSgAKAEoMLkUsxTE0Vk5sXHwiaQAxARBdfTM4AF5yKlp8RhZ2DgAeaukDUiKQOiIAPiUAelG6oYwTM0trWPsrZ1cNCK9ff3k+YNDw6UsomLiuIA">TS Playground</a> | <a href="source/conditional-pick.d.ts">Source</a>
	</summary>

	```ts
	import type {Primitive, ConditionalPick} from 'type-fest';
	
	class Awesome {
	name: string;
	successes: number;
	failures: bigint;
	
	run() {}
	}
	
	type PickPrimitivesFromAwesome = ConditionalPick<Awesome, Primitive>;
	//=> {name: string; successes: number; failures: bigint}
	```
	</details>

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA">TS Playground</a> | <a href="source/delimiter-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: DelimiterCasedPropertiesDeep<UserWithFriends, '-'> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA">TS Playground</a> | <a href="source/delimiter-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: DelimiterCasedProperties<User, '-'> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `EmptyObject` - Represents a strictly empty plain object, the `{}` value.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUXEg8gIwCsUBjGAXzgDMoIQ4ByJVAWipQGcYGBuAKD4B6QXAAqACzRUIAGxkQA7sAB2AczjA5AVy5QAhjE4JJcMLXwyU9JTHFwABunL2AdHxIRlXahAgBGAC4MSgBeYJ44YTgABT0ODndPb2kIACYgpzgwgG0AXQio2PjEr3gUgGYM0LgAFlSCkSKEj1KfCBqqrIw9IL9yBpi4hKERAHVgWwdsMDwiUhh7OE8ZRGMpYChvEji0YA44ADc9GWAAEzcW73w9KEC4adniMi6nAaaSq5v0+5xEAif4GE6gMAGJ6TQfeDXKCVH4zP5zZ45fKRERgiGXKE3Dpwx7zF49OB9UHgmRAA">TS Playground</a> | <a href="source/empty-object.d.ts">Source</a>
	</summary>

	```ts
	import type {EmptyObject} from 'type-fest';
	
	// The following illustrates the problem with `{}`.
	const foo1: {} = {}; // Pass
	const foo2: {} = []; // Pass
	const foo3: {} = 42; // Pass
	const foo4: {} = {a: 1}; // Pass
	
	// With `EmptyObject` only the first case is valid.
	const bar1: EmptyObject = {}; // Pass
	const bar2: EmptyObject = 42; // Fail
	const bar3: EmptyObject = []; // Fail
	const bar4: EmptyObject = {a: 1}; // Fail
	```
	</details>

- `IsEmptyObject` - Returns a `boolean` for whether the type is strictly equal to an empty plain object, the `{}` value.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4FFxIDyARgFYoDGMAvnAGZQQhwDkSqAtHStjCwNwAoQezQAFAIbZscALxwc+METKUYAHnTUAfPzgB6fbO0IoAVxQjkaAGITgAGzkK8BRCXJV1AbQC6ugyMTOgkHbEtRODtHZ0U3DzV1ADszBwcAw2N6UPCgA">TS Playground</a> | <a href="source/is-empty-object.d.ts">Source</a>
	</summary>

	```ts
	import type {IsEmptyObject} from 'type-fest';
	
	type Pass = IsEmptyObject<{}>; //=> true
	type Fail = IsEmptyObject<[]>; //=> false
	type Fail = IsEmptyObject<null>; //=> false
	```
	</details>

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA">TS Playground</a> | <a href="source/entries.d.ts">Source</a>
	</summary>

	```ts
	import type {Entries} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntries = (examples: Entries<Example>) => examples.map(example => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed()
	]);
	
	const example: Example = {someKey: 1};
	const entries = Object.entries(example) as Entries<Example>;
	const output = manipulatesEntries(entries);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntries: Entries<typeof objectExample> = [['a', 1]];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntries: Entries<typeof arrayExample> = [[0, 'a'], [1, 1]];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntries: Entries<typeof map> = [['a', 1]];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntries: Entries<typeof setExample> = [['a', 'a'], [1, 1]];
	```
	</details>

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA">TS Playground</a> | <a href="source/entry.d.ts">Source</a>
	</summary>

	```ts
	import type {Entry} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntry = (example: Entry<Example>) => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed(),
	];
	
	const example: Example = {someKey: 1};
	const entry = Object.entries(example)[0] as Entry<Example>;
	const output = manipulatesEntry(entry);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntry: Entry<typeof objectExample> = ['a', 1];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntryString: Entry<typeof arrayExample> = [0, 'a'];
	const arrayEntryNumber: Entry<typeof arrayExample> = [1, 1];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntry: Entry<typeof mapExample> = ['a', 1];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntryString: Entry<typeof setExample> = ['a', 'a'];
	const setEntryNumber: Entry<typeof setExample> = [1, 1];
	```
	</details>

- `Except` - Create a type from an object type without certain keys.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQB4GMVgwC+cAZlBCHAORKoC0pKAzjNQNwBQndaAYhAhwAvBk4BDAFxwAdgFcQAIxRQui6ayjAZAcy5EuPZP0EB1YDAAWEOTACCIuDnyEAPAIgAaGuOoA+LgB6QOE-DHU4TW0dIm5cCBlWMjMLa1s7aQ9zKxt7R3QpOABGbwjqACZqA05g0LgVCihmaWpfOAATCBZZCHgUbGAk7QRjGnQ4CKjddjgiam5eOCzU3IAhR2cCGHdBb2pFam90KBQARzlgE5xxXBgABQowZoQoORQiAJqQsILpeSUVCQAGRwO7iWDAcQAG1cACUUPEoO1XAAiRQo7wyFAANxUfj8cQSSVIKRytlWmVJaRg61Ev2KpRalWqtTCDWgzDg4ng+2o0gAKqNqFMdNQ4IMevBxMxmMAdDJxIooWgYEJFtQ5DJ2ihSNoUO1qAA6IA">TS Playground</a> | <a href="source/except.d.ts">Source</a>
	</summary>

	```ts
	import type {Except} from 'type-fest';
	
	type Foo = {
	a: number;
	b: string;
	};
	
	type FooWithoutA = Except<Foo, 'a'>;
	//=> {b: string}
	
	const fooWithoutA: FooWithoutA = {a: 1, b: '2'};
	//=> errors: 'a' does not exist in type '{ b: string; }'
	
	type FooWithoutB = Except<Foo, 'b', {requireExactProps: true}>;
	//=> {a: number} & Partial<Record<"b", never>>
	
	const fooWithoutB: FooWithoutB = {a: 1, b: '2'};
	//=> errors at 'b': Type 'string' is not assignable to type 'undefined'.
	```
	</details>

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOCcG+XhQBH8KBEymNDiqfEEX1i3zAHGOfFC4Ui6mifHBMQgBAp2LoDM08BZbIA6kdxJ1zbcDHBJZshbsBdXpbtRabxSMufW+bY4Ak5Uc6GQbD3jv3yMrh2QNb9lmPdSgyEk+AI1LmDcbTXAy5brfDM-ako60S63doPSFvSJff7A0bDXBmRoqHF8nAQKJQSwmkY3okkrKAMzD9BH0KJ1wxQD1V26L93xwIwtjUKARE-SkAjsL8UllAgIAgACgKKRFvjA7pgzXL8gA">TS Playground</a> | <a href="source/get.d.ts">Source</a>
	</summary>

	```ts
	import type {Get} from 'type-fest';
	import * as lodash from 'lodash';
	
	const get = <BaseType, Path extends string | readonly string[]>(object: BaseType, path: Path): Get<BaseType, Path> =>
	lodash.get(object, path);
	
	interface ApiResponse {
	hits: {
	hits: Array<{
	_id: string
	_source: {
	name: Array<{
	given: string[]
	family: string
	}>
	birthDate: string
	}
	}>
	}
	}
	
	const getName = (apiResponse: ApiResponse) =>
	get(apiResponse, 'hits.hits[0]._source.name');
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Path also supports a readonly array of strings
	const getNameWithPathArray = (apiResponse: ApiResponse) =>
	get(apiResponse, ['hits','hits', '0', '_source', 'name'] as const);
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Non-strict mode:
	Get<string[], '3', {strict: false}> //=> string
	Get<Record<string, string>, 'foo', {strict: true}> // => string
	```
	</details>

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA">TS Playground</a> | <a href="source/kebab-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type [KebabCasedPropertiesDeep] from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: KebabCasedPropertiesDeep<UserWithFriends> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA">TS Playground</a> | <a href="source/kebab-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {KebabCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: KebabCasedProperties<User> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `LiteralToPrimitiveDeep` - Like `LiteralToPrimitive` except it converts literal types inside an object or array deeply.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgCoQAKUoOwAbigCIopgA0cxAzgMIQB2AZsADmAKQ58AvnH5QIIOAHIkqALT8UHGAoDcAKFCRYCDgGM+godNnyFYfDAAWAehgQXp88IB0AK3G8dXV1+AFdeExhgPjgAEwgAZTkUR2BeIQB1HAdieJ4BYQAKM3yhAC44bFwCEnJKEGo6RmYAHk48izE+AD4ASgw4L0G4CSCnJzgAOQg4E3xNVMtgDjheJhiUGIRpuw5lxzRlNBMHFBMAa104xJBkhwXMxxz2wpgPEp69XTG4AEl+CpweCIpAoVEijSYYDgSxWEHgIQ4GzYiAgIRWay2Mzm8H20PA0Fwmxi9nwcEIwDOBzuHFKlwSSRSaQe2VyniEBVexQscDm7G4bM6vA+QA">TS Playground</a> | <a href="source/literal-to-primitive-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {LiteralToPrimitiveDeep, TsConfigJson} from 'type-fest';
	import tsconfig from 'path/to/tsconfig.json';
	
	function doSomethingWithTSConfig(config: LiteralToPrimitiveDeep<TsConfigJson>) { ... }
	
	// No casting is needed to pass the type check
	doSomethingWithTSConfig(tsconfig);
	
	// If LiteralToPrimitiveDeep is not used, you need to cast the imported data like this:
	doSomethingWithTSConfig(tsconfig as TsConfigJson);
	```
	</details>

- `MergeDeep` - Merge two objects or two arrays/tuples recursively into a new type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igERRTAF84AzKCEOAciVQFoKUBnGOgbgCgfG0AMQgQ4AXgw8ANsFYAuOADsAriABGOXsBgoQbBRyjBFuANoBdXgEMF6NQZhGTXOAGMFakVJRXFLgCYKKuo4FqS84XzGOlAUVq5oAEJWUJKKViAoDk64Wjp6QaoaUBbWtvZKRZpwgXCeEN6+YRF8AnDCEMmpEth4hMRgADwdADRwXQB8vAD005KzcACQMvKVIVAzc4vpmdnGuTwLi9q6+mvFpYdbNhgVwcUu7nVePn41Hi9N5pELpK3IQhEXXEcF6+CIJGGIjGXTG6BSUCsiDBKEwEH8WXobDAUB8-jopCmV3mWxWmPummJ2wymMM+02SxOBTgAAo6SY4AAfc44ACUlyONzshXWjw+DVeAQULIpqW59Uain53wZpCAA">TS Playground</a> | <a href="source/merge-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {MergeDeep} from 'type-fest';
	
	type Foo = {
	life: number;
	items: string[];
	a: {b: string; c: boolean; d: number[]};
	};
	
	interface Bar {
	name: string;
	items: number[];
	a: {b: number; d: boolean[]};
	}
	
	type FooBar = MergeDeep<Foo, Bar>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: number[];
	// 	a: {b: number; c: boolean; d: boolean[]};
	// }
	
	type FooBar = MergeDeep<Foo, Bar, {arrayMergeMode: 'spread'}>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: (string | number)[];
	// 	a: {b: number; c: boolean; d: (number | boolean)[]};
	// }
	```
	</details>

- `MergeExclusive` - Create a type that has mutually exclusive keys.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igUQA8BjAGwFcBnYANxQF84AzKCEOAciVQFpmUVGJwDcAKDHAAdjBzMAhiTTFy1OigBq8qMHkxgEKQEYMYlKUo16RgFxwARhAhkU8qeIYTpsqAqVwVS3UtHT0DKQAmU3NVKxQIuyEdKVwPCR5lCzV6AHkwfUMqOABeOGw8Qiy4gB5A7M1tXQLjABoAquDGsMMIgD5xMRd4GKDc-PCqOzq4vOaqAZH62YmSjEW42wQoCkZxAHo94t64AHVoAGsqMw6xudX0dfUErgALYE4GfcPjs6hL69i6mWhXuj2sdhg2xQbTB8TsnDeHy+RwCUDYUCAA">TS Playground</a> | <a href="source/merge-exclusive.d.ts">Source</a>
	</summary>

	```ts
	import type {MergeExclusive} from 'type-fest';
	
	interface ExclusiveVariation1 {
	exclusive1: boolean;
	}
	
	interface ExclusiveVariation2 {
	exclusive2: string;
	}
	
	type ExclusiveOptions = MergeExclusive<ExclusiveVariation1, ExclusiveVariation2>;
	
	let exclusiveOptions: ExclusiveOptions;
	
	exclusiveOptions = {exclusive1: true};
	//=> Works
	exclusiveOptions = {exclusive2: 'hi'};
	//=> Works
	exclusiveOptions = {exclusive1: true, exclusive2: 'hi'};
	//=> Error
	```
	</details>

- `Merge` - Merge two types into a new type. Keys of the second type overrides keys of the first type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igXzgDMoIQ4ByJVAWmJQGcZKBuAKHeADsYdiAhgGM0AMQgQM7ANoAPAFxxmUHrgC6igK7cA1twgB3bhzmLumkACMcGuNr2Hj7YhMXLVHSwKhvEViAA2HAScNGgAQt5wALxSpnDmVjZmFtZQJgpKfpaBtvb6Rp7eigAiAnxFAF6KOYEoAk4EHOwospCwCMhiEpFQMXDYeCgAPOIQADRwvQB8HAD0czHTUgtwAJDx7tzqWroFTqsbmYlptic484tHvv4BeXuOl+suEG4wKttPa14+cGUV7EOXmqcFqAXqB0WBCAA">TS Playground</a> | <a href="source/merge.d.ts">Source</a>
	</summary>

	```ts
	import type {Merge} from 'type-fest';
	
	interface Foo {
	[x: string]: unknown;
	[x: number]: unknown;
	foo: string;
	bar: symbol;
	}
	
	type Bar = {
	[x: number]: number;
	[x: symbol]: unknown;
	bar: Date;
	baz: boolean;
	};
	
	export type FooBar = Merge<Foo, Bar>;
	// => {
	// 	[x: string]: unknown;
	// 	[x: number]: number;
	// 	[x: symbol]: unknown;
	// 	foo: string;
	// 	bar: Date;
	// 	baz: boolean;
	// }
	```
	</details>

- `OmitIndexSignature` - Omit any index signatures from the given object type, leaving only explicitly defined properties.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geRMGBJAOwBMUAPAZWAHMCBDGAVyhQF84AzKCEOAciVQBadigDOMXgG4AUNOAEYKKO1oBjNAFFStcABs06aQHojcACoALMWnklScUdTqNmouAHdgu3XABGaZhAIADcUIgA6aQBtUgAuBxgoeSoAXXjaAkRouLgCBhB-KDS4DKyY+NFEAohdYtLs+IADK1oiQQASdHEkgioWRuLu5Ia4Rs6h3pZBGFovAYrE4fLRlrbxxcnp2d15hJ6qEbH0X2p5GH7BjYPlxpQCsJI19Dz7qAuF-dkTcytRNDIwLpgKpcLpEHASOx5GE4ABrFCINyebxwQKzAiRdgQCDxXi+WhQKTSACODFIAH5cfiAF5EliyASabR6FAAdVwFggDHwxDIlBo9CYYjgAF44NhcIQ7PznEKADxaHSAlAAPhk3xFKowHGxVIJUjgpIpetpcAAPnAGLyoQQwpI4CwgA">TS Playground</a> | <a href="source/omit-index-signature.d.ts">Source</a>
	</summary>

	```ts
	import type {OmitIndexSignature} from 'type-fest';
	
	interface Example {
	// These index signatures will be removed.
	[x: string]: any
	[x: number]: any
	[x: symbol]: any
	[x: `head-${string}`]: string
	[x: `${string}-tail`]: string
	[x: `head-${string}-tail`]: string
	[x: `${bigint}`]: string
	[x: `embedded-${number}`]: string
	
	// These explicitly defined keys will remain.
	foo: 'bar';
	qux?: 'baz';
	}
	
	type ExampleWithoutIndexSignatures = OmitIndexSignature<Example>;
	// => { foo: 'bar'; qux?: 'baz' | undefined; }
	```
	</details>

- `OverrideProperties` - Override existing properties of the given type. Similar to `Merge`, but enforces that the original type has the properties you want to override.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/C4TwDgpgBAYg9nKBeKBvAUAQwFxQM7ABOAlgHYDm6ARrgSRegL7qiRQBCmhyUA8gG4RCJACYQACoTiRCwYhDwAeeHAA0aGlFIBXALZUhjAHzoA9KaRG0OfETLl1mnfsPoW4aJwBePAUNESUjJyCsoI6qgAxrjOBoTGZqZQAKLCcITqrNAA5KhQ0Vp6cQDcUIzZUCJwClpwwPiYcngAZiBQwAAW0JFwpHSYZPW5+TEQgoSl5W5ZsMRePih+wsRiktJCIUoqEU5FQqUFsYYm5ilpGe0eUMO7LhMjhXeTFVU1pHUNTa3tXfm9-YNrnlbiUHqQxvsytkgA">TS Playground</a> | <a href="source/override-properties.d.ts">Source</a>
	</summary>

	```ts
	type Foo = {
	a: string
	b: string
	}
	type Bar = OverrideProperties<Foo, {b: number}>
	//=> {a: string, b: number}
	
	type Baz = OverrideProperties<Foo, {c: number}>
	// Error, type '{ c: number; }' does not satisfy the constraint '{ c: never; }'
	
	type Fizz = OverrideProperties<Foo, {b: number; c: number}>
	// Error, type '{ b: number; c: number; }' does not satisfy the constraint '{ b: number; c: never; }'
	```
	</details>

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLseEA">TS Playground</a> | <a href="source/partial-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PartialDeep} from 'type-fest';
	
	const settings: Settings = {
	textEditor: {
	fontSize: 14;
	fontColor: '#000000';
	fontWeight: 400;
	}
	autocomplete: false;
	autosave: true;
	};
	
	const applySavedSettings = (savedSettings: PartialDeep<Settings>) => {
	return {...settings, ...savedSettings};
	}
	
	settings = applySavedSettings({textEditor: {fontWeight: 500}});
	```
	</details>

- `PartialOnUndefinedDeep` - Create a deep version of another type where all keys accepting `undefined` type are set to optional.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwHkA7AVRIBMUAzYElSgERRTAF84aoIQ4ByJKgC0NFAGcY-ANwAoWfRgooNbAGM0AZRQwY9AObiMsiGD0QSAQQBccSVANzT5kgCFbJAK4gARsrgAPnCeVLT0jHLinj5EZsAWtuiyUTFxFjZwPhAQBCjYJJHRsS7umdm5+YHBoXQMlHLssuxysmoWkggSMNq6BuK2OHiEpBTUtYwsbAA8PXokhgB8cAC8xs7xVrb8NNn8ADSyAPSHcIC8G4CSO3DrFq5wwEYkEADuV2kkhHD5lHBqlX5XIGAukYySKb0SoNSLgyMCgnhQB2OZ0uKWKG1u9zgjxe13eBE+RieKAI+K+Pz+aF4QKUlCaB2aQA">TS Playground</a> | <a href="source/partial-on-undefined-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PartialOnUndefinedDeep} from 'type-fest';
	
	interface Settings {
	optionA: string;
	optionB: number | undefined;
	subOption: {
	subOptionA: boolean;
	subOptionB: boolean | undefined;
	}
	};
	
	const testSettings: PartialOnUndefinedDeep<Settings> = {
	optionA: 'foo',
	// 👉 optionB is now optional and can be omitted
	subOption: {
	subOptionA: true,
	// 👉 subOptionB is now optional as well and can be omitted
	},
	};
	```
	</details>

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA">TS Playground</a> | <a href="source/pascal-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: PascalCasedPropertiesDeep<UserWithFriends> = {
	UserInfo: {
	UserId: 1,
	UserName: 'Tom',
	},
	UserFriends: [
	{
	UserId: 2,
	UserName: 'Jerry',
	},
	{
	UserId: 3,
	UserName: 'Spike',
	},
	],
	};
	```
	</details>

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA">TS Playground</a> | <a href="source/pascal-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: PascalCasedProperties<User> = {
	UserId: 1,
	UserName: 'Tom',
	};
	```
	</details>

- `PickIndexSignature` - Pick only index signatures from the given object type, leaving out all explicitly defined properties.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBWAYwNYCSAdgCYoAeAysAOZECGMArlCgL5wBmUEIcA5ElQBaTigDOMfgG4AULLI4ANvVZwcEIpLjjEIAEYQlAaRSIAXHCZFgARyZpdBo3NlC0AUXL1wStAF4MWQB6YLgAFQALCTRgUgodWgZmVnE4AHdgJSU4VhB6OIA6WQBtcktJKDiaAF1LazwiCHSiOTLLIiYDFCg6qyJG5tbS8p09QyU+hqaWttGAA2j6EmEAEnRK6rZ5vs2iGjnLefW9mjZhGAKlHYqYKv3DuEWUZbWNu62Lq5udD4eRo7rfS0OIwba7P4HAFPFDdEhkFbrTrdKDg273KEhMJRGJwChgJS4YAwJSIOBkThxFAkOB4MxpTLZOD6NB5CAAN2pxRK-HEDDpwhw9HEKGEdMQ-AhGLaTgmpkQUuqck4EAgln4+lUMlk9nIAH51ZqAF7atiudxwLw+AkoYhkKhJRgsAJwbD4O0Uah0J2sAA8Vt8KAAfHJQkEwwBIdq-DFTAYzYaR6PIlm9erxoahsJR0ayoxxwazLFwHNHJaI94YtExpXF0tPE6Q86XLI-U5ZkvR56vRtVr6txX-JMLIEgohgtuQjv1+awlnw6lvFM9avt4tsIA">TS Playground</a> | <a href="source/pick-index-signature.d.ts">Source</a>
	</summary>

	```ts
	import type {PickIndexSignature} from 'type-fest';
	
	declare const symbolKey: unique symbol;
	
	type Example = {
	// These index signatures will remain.
	[x: string]: unknown;
	[x: number]: unknown;
	[x: symbol]: unknown;
	[x: `head-${string}`]: string;
	[x: `${string}-tail`]: string;
	[x: `head-${string}-tail`]: string;
	[x: `${bigint}`]: string;
	[x: `embedded-${number}`]: string;
	
	// These explicitly defined keys will be removed.
	['snake-case-key']: string;
	[symbolKey]: string;
	foo: 'bar';
	qux?: 'baz';
	};
	
	type ExampleIndexSignature = PickIndexSignature<Example>;
	// {
	// 	[x: string]: unknown;
	// 	[x: number]: unknown;
	// 	[x: symbol]: unknown;
	// 	[x: `head-${string}`]: string;
	// 	[x: `${string}-tail`]: string;
	// 	[x: `head-${string}-tail`]: string;
	// 	[x: `${bigint}`]: string;
	// 	[x: `embedded-${number}`]: string;
	// }
	```
	</details>

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA">TS Playground</a> | <a href="source/readonly-deep.d.ts">Source</a>
	</summary>

	```ts
	// data.json
	{
	"foo": ["bar"]
	}
	
	// main.ts
	import type {ReadonlyDeep} from 'type-fest';
	import dataJson = require('./data.json');
	
	const data: ReadonlyDeep<typeof dataJson> = dataJson;
	
	export default data;
	
	// test.ts
	import data from './main';
	
	data.foo.push('bar');
	//=> error TS2339: Property 'push' does not exist on type 'readonly string[]'
	```
	</details>

- `RequireAllOrNone` - Create a type that requires all of the given keys or none of the given keys. The remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCCANqQPJQByEAdigL5wBmUEIcA5EqgLQsUAZxhcA3ACgJvNNiGQ6AExRQ4AXgzSUADxgB+AFxwAFAEp1APjgiowOgHNJAKyH1DJ82qs27jiUJQAYzwiIwAjCAhSFABDOklGSQlA+hE4Inl6ZSgARiNsfEIScipaBgAeOQVsgBpuGB1ROAAfbhd6LisNdH8gkJQjGCg8FAlEqRS6NIzqlQAmfNwCIjJKGnoUSuFZqDqeRq4Wttc6TvVNBt0jM0tudAAiEGEhGPsUe6N7gAtge8YuGoSdp0a6eKxcB5PIQvN4fOD3CAAaz+AN6wVCCGGo0SQA">TS Playground</a> | <a href="source/require-all-or-none.d.ts">Source</a>
	</summary>

	```ts
	import type {RequireAllOrNone} from 'type-fest';
	
	type Responder = {
	text?: () => string;
	json?: () => string;
	secure: boolean;
	};
	
	const responder1: RequireAllOrNone<Responder, 'text' | 'json'> = {
	secure: true
	};
	
	const responder2: RequireAllOrNone<Responder, 'text' | 'json'> = {
	text: () => '{"message": "hi"}',
	json: () => '{"message": "ok"}',
	secure: true
	};
	```
	</details>

- `RequireAtLeastOne` - Create a type that requires at least one of the given keys. The remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCCMAMigIYDOMA8gHYoC+cAZlBCHAORKoBaNilo8A3ACgJ-NNmqQGAExRQ4AXgzSUADxgB+AFxwAFAEp1APji0owBgHNJAK2oQGhk+bVWbdxxOoUAGM8Ig8AIwgIABsqBklmSQkgt1o4Ink3ZSgjbHxCEnIqWkYUAB45BWyAGl4YHRgeOAAfXhc3HisNdAl2hiMzS150ACIQEWpKexQRoxGIAGsR5h5qgODQlCMYKDwUCUSgA">TS Playground</a> | <a href="source/require-at-least-one.d.ts">Source</a>
	</summary>

	```ts
	import type {RequireAtLeastOne} from 'type-fest';
	
	type Responder = {
	text?: () => string;
	json?: () => string;
	secure?: boolean;
	};
	
	const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
	json: () => '{"message": "ok"}',
	secure: true
	};
	```
	</details>

- `RequireExactlyOne` - Create a type that requires exactly one of the given keys and disallows more. The remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCiAHgIYDGMANogPIB2KAvnAGZQQhwDkSqALTsUAZxi8A3AChpAtNlGRGAExRQ4AXgxyUpGAC44ACgCUWgHxxxUYIwDmMgFaiIjI2cvWYthzNEolHhERgBGEBA0KOSMMiwy0pRu4nBESm5qUEbY+IQkFNR0TCgAPIrKmQA0fDB6EnAAPnwubrxW2ujSAPRdcACCKip29nDkcAAGtfrjcADWKIhwABbqaADuEHg0KnCU5HgBo7vcYMBRcOpcUAB0si3uJuaaVrzoAEQgYqLk9ihvRm8ILM3ixeJVpAEgiEEFA8ChpPEgA">TS Playground</a> | <a href="source/require-exactly-one.d.ts">Source</a>
	</summary>

	```ts
	import type {RequireExactlyOne} from 'type-fest';
	
	type Responder = {
	text: () => string;
	json: () => string;
	secure: boolean;
	};
	
	const responder: RequireExactlyOne<Responder, 'text' | 'json'> = {
	// Adding a `text` key here would cause a compile error.
	
	json: () => '{"message": "ok"}',
	secure: true
	};
	```
	</details>

- `RequireOneOrNone` - Create a type that requires exactly one of the given keys and disallows more, or none of the given keys. The remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoDyAdiVAHITkC+cAZlBCHAORKoC0DKAzjDYBuAFAjOabH0ikAJiihwAvHGz5CJcsSo0UAHnTiUADxgAuOAAoAlMoB8cAVGCkA5qIBWfGhZv3HMM5uonwoAMZ4RBYARhAQADYoAIakorQANOwwJoJwAD7sXjRsdqIiYTQCcETSNPJQAIwWUjL1yhgioRFRCFB4KCK0ZRWkVTWtCgBMzfwTiiqG2aa+tkoObOgARCD8fEmuKJsWmwAWwJu0bOmd4ZEoFoH9g8OV8ON1CgDMM7VyCu2GIqkFb+DbbXb7Q7HCAAawuVxu3XuvSeQyAA">TS Playground</a> | <a href="source/require-one-or-none.d.ts">Source</a>
	</summary>

	```ts
	import type {RequireOneOrNone} from 'type-fest';
	
	type Responder = RequireOneOrNone<{
	text: () => string;
	json: () => string;
	secure: boolean;
	}, 'text' | 'json'>;
	
	const responder1: Responder = {
	secure: true
	};
	
	const responder2: Responder = {
	text: () => '{"message": "hi"}',
	secure: true
	};
	
	const responder3: Responder = {
	json: () => '{"message": "ok"}',
	secure: true
	};
	```
	</details>

- `RequiredDeep` - Create a type from another type with all keys and nested keys set to required.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmAIiimAL5wBmUEIcA5EqgLS0oDOMzA3AChBbNAGUUMGMAB2Ac25wAvBhEoAHjACixYDGgB+AFyraEGTDHAAXimNwZeEACMUUOAB84eGcRS1ZEiEzCwBhCAAbQxNeKFk5T29ff0DiYPMYAHUUYDkACxh7Rxc3RJ8-AJkgwSpBAEM8fQBjRjAIyTsTZwhIlDqZMuTK6ob9bjqAN064bt7+wYrUoSohEWQ0bHxCEgkpeMUVTYIiMgowAB5d6XluAD4hAHoHhHW4I+3iK-3lVSe4AEgYBptLp9FATOhBH9-v8QpYbCgTMVXFBHs8YXDwlFwXBYvE0QDYRlsrkCkinCiCf9atDRhAWuB2kCuj12v0qXTxlMWXMZASqEA">TS Playground</a> | <a href="source/required-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredDeep} from 'type-fest';
	
	type Settings = {
	textEditor?: {
	fontSize?: number | undefined;
	fontColor?: string | undefined;
	fontWeight?: number | undefined;
	}
	autocomplete?: boolean | undefined;
	autosave?: boolean | undefined;
	};
	
	type RequiredSettings = RequiredDeep<Settings>;
	// type RequiredSettings = {
	// 	textEditor: {
	// 		fontSize: number;
	// 		fontColor: string;
	// 		fontWeight: number;
	// 	}
	// 	autocomplete: boolean;
	// 	autosave: boolean;
	// }
	```
	</details>

- `Schema` - Create a deep version of another object type where property values are recursively replaced into a given value type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMYAsUgCGAvnAGZQQhwDkSqAtGSgM4w0DcAUF8AHYwUUMoWxoAqiyEZeAEwBccNlH4Bzbn0IgUi9FzLAobTdsXK13ADaFjWnUpgq+6rsW7YoKQoIVwAIt4o3KIwwABu9gBGEBCWXnzcYDYsAO7QsgASNrhmjhauPPQSUlAAsjYA1nAAvHA4+EQAPJJCADS0RCwVNHAAPrS4wLIoPf00LLgQKTQAfNxc2BB8bHAAriXlXZgoMKHOLIotZZU1MkOK45PTrVwm9noGRjB3FxNTNDfWtqYdlR+uNw8Xh8ryu-xC4Xsl3eNySLFS6SyEwug2G-2IQA">TS Playground</a> | <a href="source/schema.d.ts">Source</a>
	</summary>

	```ts
	import type {Schema} from 'type-fest';
	
	interface User {
	id: string;
	name: {
	firstname: string;
	lastname: string;
	};
	created: Date;
	active: boolean;
	passwordHash: string;
	}
	
	type UserMask = Schema<User, 'mask' | 'hide' | 'show'>;
	
	const userMaskSettings: UserMask = {
	id: 'show',
	name: {
	firstname: 'show',
	lastname: 'mask',
	},
	created: 'show',
	active: 'show',
	passwordHash: 'hide',
	}
	```
	</details>

- `SetNonNullable` - Create a type that makes the given keys non-nullable, where the remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTAchAO1wFcAbUgQwCNSUBfOAMyghDgHIlUBaRlAZxjsA3AChRXNADEIEOAF4MoigC44BYiCooocAD7qypMVTWCowAgHN9cYgQAmKRpZQOxAYwD8aqrNoUBLYa5GJ04pJwmKwo+ERG1LQKUThxJOSJKAA8MhAANBxU7LbsHuwAfGIA9FUIyGjRILGE6ZQ0aIroojVwAJCqhlo6wUbVtb2mcOaWVsJwPQDCgepypIRWw9p2js6uDgB03ePevv4ogXOLywSr65toIaQFVMTwwPxTMMDkcBBgX4QKKRDj1whJ6nAAILkNIJdrJbB4Fpw2g5WSVI51VBQmHIjLwzqY-pqDRDKCXWpLII3OBraz3QzkEHjSbTawUuBUla0u66Lb2JwuAhuZl9E5wPwQAIEDlcml0jZ8h5GZ6vODvT7fUi-f7AQHAzF0IA">TS Playground</a> | <a href="source/set-non-nullable.d.ts">Source</a>
	</summary>

	```ts
	import type {SetNonNullable} from 'type-fest';
	
	type Foo = {
	a: number | null;
	b: string | undefined;
	c?: boolean | null;
	}
	
	type SomeNonNullable = SetNonNullable<Foo, 'b' | 'c'>;
	// type SomeNonNullable = {
	// 	a: number | null;
	// 	b: string; // Can no longer be undefined.
	// 	c?: boolean; // Can no longer be null, but is still optional.
	// }
	
	type AllNonNullable = SetNonNullable<Foo>;
	// type AllNonNullable = {
	// 	a: number; // Can no longer be null.
	// 	b: string; // Can no longer be undefined.
	// 	c?: boolean; // Can no longer be null, but is still optional.
	// }
	```
	</details>

- `SetOptional` - Create a type that makes the given keys optional. The remaining keys are kept as is. The sister of the `SetRequired` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTA8mGYCAOwEMAbAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaAGIQIcALwYBpAFxxiAVxAAjFFEFqA-Ip5RgxAOaCAxorUTyKUsUGUhIuJgYp8hEhWkucHomTkADziEAA0zGpMcAA+zGZMAHyCAPQpCMhoriDuBAHeMugCaXAAkApKqhpaxemluvowhiZ8cCUA6qRccBRQtgAmiHAQeV7kPcT9cDzA5OPAXAB0tWVmenBWEDZ2rSUAkt3EEADuw6OByyWUQA">TS Playground</a> | <a href="source/set-optional.d.ts">Source</a>
	</summary>

	```ts
	import type {SetOptional} from 'type-fest';
	
	type Foo = {
	a: number;
	b?: string;
	c: boolean;
	}
	
	type SomeOptional = SetOptional<Foo, 'b' | 'c'>;
	// type SomeOptional = {
	// 	a: number;
	// 	b?: string; // Was already optional and still is.
	// 	c?: boolean; // Is now optional.
	// }
	```
	</details>

- `SetReadonly` - Create a type that makes the given keys readonly. The remaining keys are kept as is.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTASigQwBMIA7AG0QF84AzKCEOAciVQFpaUBnGZgbgBQgtmgBiECHAC8GQQQBccUgFcQAIxRQhUQiQqI46pbyjBSAcyEBjJesnlCpIVWGi4mRinzEylGR44PvqUADwSEAA0LOrMcAA+LNbMAHxCAPTpCMhoniDeen6GsuiCmXAAkIrKapraZVkVur4GRiYwZpb8cOUA6gTccATkzUSGo0VDpERwvMDk5HDA3AB0DZUTrbZGDk7d5QCSg6QQAO5wm5Rr5VRAA">TS Playground</a> | <a href="source/set-readonly.d.ts">Source</a>
	</summary>

	```ts
	import type {SetReadonly} from 'type-fest';
	
	type Foo = {
	a: number;
	readonly b: string;
	c: boolean;
	}
	
	type SomeReadonly = SetReadonly<Foo, 'b' | 'c'>;
	// type SomeReadonly = {
	// 	a: number;
	// 	readonly b: string; // Was already readonly and still is.
	// 	readonly c: boolean; // Is now readonly.
	// }
	```
	</details>

- `SetRequired` - Create a type that makes the given keys required. The remaining keys are kept as is. The sister of the `SetOptional` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTASigRwFdgoUATAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaAGIQIcALwYBAQwD8ALjgA7IiABGKKIM0qeUYKoDmggMbK4miQBsUc1YMpCRcTAxT5ipCtPc43iRk5AA84hAANMyaTHAAPszmTAB8ggD06QjIaB4gXoTBfjLoAplwAJCKKupaOhlZFfpwhsZmcOUA6nJccHK2ZHLkiHBkPiF9quQtMMC2tnDAXAB0ZY3mKjYQ9o58HVkAkr2qEADuo4W+5KvllEA">TS Playground</a> | <a href="source/set-required.d.ts">Source</a>
	</summary>

	```ts
	import type {SetRequired} from 'type-fest';
	
	type Foo = {
	a?: number;
	b: string;
	c?: boolean;
	}
	
	type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
	// type SomeRequired = {
	// 	a?: number;
	// 	b: string; // Was already required and still is.
	// 	c: boolean; // Is now required.
	// }
	```
	</details>

- `Simplify` - Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZVGANsAM0QF84CoIQ4ByJVAWgJQGcZqBuAKE7rQAUIzYDGAQAdnwphmcALwYeEMAC44YgK4gARiihdcKAjFUbtursS49kabAC8UkpTPnpOAd2AATGAAsTmjp6nL4owADmvsZqgeacltwA9IlwAJJicIgQ6lBwKF7C0AA0cL4QAG66wGLhcBW6cAAGTtKNcJ64uHDMZe5wAIZkuP0wMChi+XVaAFYoAMbwnn4DnQihcGBSuiIsAHTWqHAtLnDY4PhEADwCQiLix3AAZKfADscAfOxAA">TS Playground</a> | <a href="source/simplify.d.ts">Source</a>
	</summary>

	```ts
	import type {Simplify} from 'type-fest';
	
	type PositionProps = {
	top: number;
	left: number;
	};
	
	type SizeProps = {
	width: number;
	height: number;
	};
	
	// In your editor, hovering over `Props` will show a flattened object with all the properties.
	type Props = Simplify<PositionProps & SizeProps>;
	```
	</details>

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA">TS Playground</a> | <a href="source/snake-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: SnakeCasedPropertiesDeep<UserWithFriends> = {
	user_info: {
	user_id: 1,
	user_name: 'Tom',
	},
	user_friends: [
	{
	user_id: 2,
	user_name: 'Jerry',
	},
	{
	user_id: 3,
	user_name: 'Spike',
	},
	],
	};
	```
	</details>

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA">TS Playground</a> | <a href="source/snake-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: SnakeCasedProperties<User> = {
	user_id: 1,
	user_name: 'Tom',
	};
	```
	</details>

- `Spread` - Mimic the type inferred by TypeScript when merging two objects or two arrays/tuples using the spread syntax.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTFFBDAEwF84AzKCEOAciVQFpSUBnGagbgChO60AxCBDgBeDJzwAuOADsAriABGKKFwUB+KayjBpAcy5EuPZGgBCeKCLHqpcxcq4BjKQsEAbfNINHHEaazJBK3RJOABGABo4BSlqACZqQ05ff3gFC2DnMjw3ZhQklIDSQXNLUXQAOiriiCiqivSoJONUOAEIUqtsXEIAHnao0oA+LgB6UYQTNpKM8s5xuABIULslFXmJxZs4LR1dOAAfGXk1w7hZaQIUUh0UAjHNrNcIDzwvDbgibkK0vAAvKwACgsunkKGkMCk7VKAEoREMxAsACJCZiUFAwAAWe04X046T+gJqsPYQA">TS Playground</a> | <a href="source/spread.d.ts">Source</a>
	</summary>

	```ts
	import type {Spread} from 'type-fest';
	
	type Foo = {
	a: number;
	b?: string;
	};
	
	type Bar = {
	b?: number;
	c: boolean;
	};
	
	const foo = {a: 1, b: '2'};
	const bar = {c: false};
	const fooBar = {...foo, ...bar};
	
	type FooBar = Spread<Foo, Bar>;
	// type FooBar = {
	// 	a: number;
	// 	b?: string | number | undefined;
	// 	c: boolean;
	// }
	
	const baz = (argument: FooBar) => {
	// Do something
	}
	
	baz(fooBar);
	```
	</details>

- `StringKeyOf` - Get keys of the given type as strings.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRlYA7AcwGkVEB5AMwF84KoIQ4ByJVAWgpQGcYmBuAFADWaAGIQIcALwYBARgBccPAFcQAIxRQANAJ65CJREv34CuqoOHI02A8VJdK4yTLtmjlADwuAfIIB6AKlfZjkmOAAfZlNDUiYgA">TS Playground</a> | <a href="source/string-key-of.d.ts">Source</a>
	</summary>

	```ts
	import type {StringKeyOf} from 'type-fest';
	
	type Foo = {
	1: number,
	stringKey: string,
	};
	
	type StringKeysOfFoo = StringKeyOf<Foo>;
	//=> '1' | 'stringKey'
	```
	</details>

- `Stringified` - Create a type with the keys of the given type changed to `string` type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRlYA7Ac2ADNgUATAXzmKghDgHIlUBaYlAZxkYG4AofizQBhAIZQ4AXgz8QEcigA2ALjjdchAZ1QU1eAK4gARiigDKggMYQ83OFYkAxaCDXZNRUhQA84qAB80rLyiqpMLhCMADT8Oih6TACMAAxJjPyUvEA">TS Playground</a> | <a href="source/stringified.d.ts">Source</a>
	</summary>

	```ts
	import type {Stringified} from 'type-fest';
	
	type Car = {
	model: string;
	speed: number;
	}
	
	const carForm: Stringified<Car> = {
	model: 'Foo',
	speed: '101'
	};
	```
	</details>

- `UnknownRecord` - Represents an object with `unknown` value. You probably want this instead of `{}`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gVQHYGtsQDu2ASigMbQAmAvnAGZQQhwDkSqAtPSgM4ysA3AChh9AK7ZyMYBGwIIAKV5yAFBABGAKwowAXHBz4ipCtQCUGYVBQxxUeYoDKAeQByAOn5Rg2AObA9Ijq2rrmIjSiMEoq2KroABYoADbJEAashNDJVKw04cIA9IUAvAB8bOgAREmpEFV6VVlQOVU0rKISUjJycMC8LqHSqgBuAIbJ4igGksbE5gbjk2j9hngExGSUUFRWNnYOCMgoEPRwS1NwJddsmjrSrHAAZE-nE5cAhDfY4qkRov1BvcYPFamkMs0cnkCsVyggoFMAQMhiDWGCIKwYaUKvQJrwUEA">TS Playground</a> | <a href="source/unknown-record.d.ts">Source</a>
	</summary>

	```ts
	import type {UnknownRecord} from 'type-fest';
	
	function toJson(object: UnknownRecord) {
	return JSON.stringify(object);
	}
	
	toJson({hello: 'world'});
	//=> '{"hello":"world"}'
	
	function isObject(value: unknown): value is UnknownRecord {
	return typeof value === 'object' && value !== null;
	}
	
	isObject({hello: 'world'});
	//=> true
	
	isObject('hello');
	//=> false
	```
	</details>

- `ValueOf` - Create a union of the given object's values, and optionally specify which keys to get the values from.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwcgGYoq4BcoAjADR4BGkATqaAEzW40CWAXkwMwYBfDBhCgAtpA5o40JBg5iADinrRQ0AJ6KApqCwA1SABsArtoDy+AaHz0UY0Lk06AtPm1JouANzylKtShYUABeUHptAEcTDgiAClw4YCD4ZHRcAEpfDG0AD2VVGxM0AGNoDnRQAHNtaAARGEg4tEgxbTJPeikqjLJDUwt8AB5nbRR8CEaAPj0MCOgTejRJ2ABtFraAXV8hHPyAotLyyvQjDQAhBmbW9tBO7t7QfrNLEa0xiZTKRzpGGZx5otlil1jdtoJhKJ8BwjNoZHIFAU1FgavVGt9ThcGNZbPZHEkJFIfMJUQ1YAlCMQsiJgCEZuRhJjLvQKURMr4QHTQAAVd4AUXodnooDgosZaDOzISv3ZNK5zCAA">TS Playground</a> | <a href="source/value-of.d.ts">Source</a>
	</summary>

	```ts
	// data.json
	{
	'foo': 1,
	'bar': 2,
	'biz': 3
	}
	
	// main.ts
	import type {ValueOf} from 'type-fest';
	import data = require('./data.json');
	
	export function getData(name: string): ValueOf<typeof data> {
	return data[name];
	}
	
	export function onlyBar(name: string): ValueOf<typeof data, 'bar'> {
	return data[name];
	}
	
	// file.ts
	import {getData, onlyBar} from './main';
	
	getData('foo');
	//=> 1
	
	onlyBar('foo');
	//=> TypeError ...
	
	onlyBar('bar');
	//=> 2
	```
	</details>

- `WritableDeep` - Create a deeply mutable version of an `object`/`ReadonlyMap`/`ReadonlySet`/`ReadonlyArray` type. The inverse of `ReadonlyDeep<T>`. Use `Writable<T>` if you only need one level deep.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUARFFMAXzgDMoIQ4ByJVAWlpQGcZmBuAFCC2aAGIQIcALwZBUFHgAmEAHZFEcPAC44qgK4gCKKEIXK1GuAV3mV6zbxyqA5gG0AuvzgB6H3AAVKW4ACwgAdwQQvHgQfXwCYCJcTWBuOCUKMCs8Wi4AYxgUJQA6eUV7K3zdAkkSPFUhKiFBfLVeOHCcBJJySgkIXWxcQl6sgB4BgD4ZDB04AEYAGmtdN2YAJmYPFeqEKH0UZsEukeIyLIGSvFmAZiFTnov+yRKCNwAGD1nmVRRIgBueCIhwEJ26o2eYCuBFm624jBQMBCwFc234QA">TS Playground</a> | <a href="source/writable-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {WritableDeep} from 'type-fest';
	
	type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that mutability is deeply affected.
	readonly c: boolean;
	};
	
	const writableDeepFoo: WritableDeep<Foo> = {a: 1, b: ['2'], c: true};
	writableDeepFoo.a = 3;
	writableDeepFoo.b[0] = 'new value';
	writableDeepFoo.b = ['something'];
	```
	</details>

- `Writable` - Create a type that strips `readonly` from all or some of an object's keys. Inverse of `Readonly<T>`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUBfOAMyghDgHIlUBaClAZxjoG4AoHxtADEIEOAF4MPKCjwATCADsiiOHgBccBQFcQBFFF7S5i5XAIaj8pSo44FAcwDaAXS5wA9O7gAVUWwAWEADuCP548CYqMP5oIFr4BMBEuDb4MFpscBAUoWhg1KiwwOwANJoQ8NEowFBwAG54RFqlqtKqFKwAxjAosgB0UjJWpp0aBCIkeAq8pLw8nYoccEE4CSTCEBrYuIQkADwbAHziGOpwAIxl5nCOdABMdM5lowhQzbM8KzvEKBt9eCcAMy8L5rX4iPoERwABmcJzoChQIQaTRQ3A8XkwSSIcA42MoeCSqkyVXqjWaWRy+QghSQcAARAR6XBgJk8UQcQDLJEEMgUANQbtwRBISdbmwaChosAHI83J44FiOctoABrYm5BlMuDU2kqXBsFBEHKs8pwIiKez6ODc6wDfh8uAAZUl2zBJzdQoOIjKdAIdDgAB96J06IdeAqBM7XashSd0DwFQBIW2mM7aXT6CNeJPXVOpOxOVwYuAASU4mQUwWWsZ+fR8MV5qEpmt1+jp0hAhIUmS0CjwHRQ3V6A2TL3GEEm0xL5bolergrria8pCAA">TS Playground</a> | <a href="source/writable.d.ts">Source</a>
	</summary>

	```ts
	import type {Writable} from 'type-fest';
	
	type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that only the mutability status of the properties, not their values, are affected.
	readonly c: boolean;
	};
	
	const writableFoo: Writable<Foo> = {a: 1, b: ['2'], c: true};
	writableFoo.a = 3;
	writableFoo.b[0] = 'new value'; // Will still fail as the value of property "b" is still a readonly type.
	writableFoo.b = ['something']; // Will work as the "b" property itself is no longer readonly.
	
	type SomeWritable = Writable<Foo, 'b' | 'c'>;
	// type SomeWritable = {
	// 	readonly a: number;
	// 	b: readonly string[]; // It's now writable. The type of the property remains unaffected.
	// 	c: boolean; // It's now writable.
	// }
	```
	</details>

### Observable

- `Unsubscribable` - 
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/unsubscribable.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `OnNext` - 
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/on-next.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `OnError` - 
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/on-error.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `OnComplete` - 
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/on-complete.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `Observer` - 
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/observer.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `ObservableLike` - Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/observable-like.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

### Set

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA">TS Playground</a> | <a href="source/entries.d.ts">Source</a>
	</summary>

	```ts
	import type {Entries} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntries = (examples: Entries<Example>) => examples.map(example => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed()
	]);
	
	const example: Example = {someKey: 1};
	const entries = Object.entries(example) as Entries<Example>;
	const output = manipulatesEntries(entries);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntries: Entries<typeof objectExample> = [['a', 1]];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntries: Entries<typeof arrayExample> = [[0, 'a'], [1, 1]];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntries: Entries<typeof map> = [['a', 1]];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntries: Entries<typeof setExample> = [['a', 'a'], [1, 1]];
	```
	</details>

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA">TS Playground</a> | <a href="source/entry.d.ts">Source</a>
	</summary>

	```ts
	import type {Entry} from 'type-fest';
	
	interface Example {
	someKey: number;
	}
	
	const manipulatesEntry = (example: Entry<Example>) => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),
	
	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed(),
	];
	
	const example: Example = {someKey: 1};
	const entry = Object.entries(example)[0] as Entry<Example>;
	const output = manipulatesEntry(entry);
	
	// Objects
	const objectExample = {a: 1};
	const objectEntry: Entry<typeof objectExample> = ['a', 1];
	
	// Arrays
	const arrayExample = ['a', 1];
	const arrayEntryString: Entry<typeof arrayExample> = [0, 'a'];
	const arrayEntryNumber: Entry<typeof arrayExample> = [1, 1];
	
	// Maps
	const mapExample = new Map([['a', 1]]);
	const mapEntry: Entry<typeof mapExample> = ['a', 1];
	
	// Sets
	const setExample = new Set(['a', 1]);
	const setEntryString: Entry<typeof setExample> = ['a', 'a'];
	const setEntryNumber: Entry<typeof setExample> = [1, 1];
	```
	</details>

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLseEA">TS Playground</a> | <a href="source/partial-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PartialDeep} from 'type-fest';
	
	const settings: Settings = {
	textEditor: {
	fontSize: 14;
	fontColor: '#000000';
	fontWeight: 400;
	}
	autocomplete: false;
	autosave: true;
	};
	
	const applySavedSettings = (savedSettings: PartialDeep<Settings>) => {
	return {...settings, ...savedSettings};
	}
	
	settings = applySavedSettings({textEditor: {fontWeight: 500}});
	```
	</details>

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA">TS Playground</a> | <a href="source/readonly-deep.d.ts">Source</a>
	</summary>

	```ts
	// data.json
	{
	"foo": ["bar"]
	}
	
	// main.ts
	import type {ReadonlyDeep} from 'type-fest';
	import dataJson = require('./data.json');
	
	const data: ReadonlyDeep<typeof dataJson> = dataJson;
	
	export default data;
	
	// test.ts
	import data from './main';
	
	data.foo.push('bar');
	//=> error TS2339: Property 'push' does not exist on type 'readonly string[]'
	```
	</details>

- `RequiredDeep` - Create a type from another type with all keys and nested keys set to required.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmAIiimAL5wBmUEIcA5EqgLS0oDOMzA3AChBbNAGUUMGMAB2Ac25wAvBhEoAHjACixYDGgB+AFyraEGTDHAAXimNwZeEACMUUOAB84eGcRS1ZEiEzCwBhCAAbQxNeKFk5T29ff0DiYPMYAHUUYDkACxh7Rxc3RJ8-AJkgwSpBAEM8fQBjRjAIyTsTZwhIlDqZMuTK6ob9bjqAN064bt7+wYrUoSohEWQ0bHxCEgkpeMUVTYIiMgowAB5d6XluAD4hAHoHhHW4I+3iK-3lVSe4AEgYBptLp9FATOhBH9-v8QpYbCgTMVXFBHs8YXDwlFwXBYvE0QDYRlsrkCkinCiCf9atDRhAWuB2kCuj12v0qXTxlMWXMZASqEA">TS Playground</a> | <a href="source/required-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredDeep} from 'type-fest';
	
	type Settings = {
	textEditor?: {
	fontSize?: number | undefined;
	fontColor?: string | undefined;
	fontWeight?: number | undefined;
	}
	autocomplete?: boolean | undefined;
	autosave?: boolean | undefined;
	};
	
	type RequiredSettings = RequiredDeep<Settings>;
	// type RequiredSettings = {
	// 	textEditor: {
	// 		fontSize: number;
	// 		fontColor: string;
	// 		fontWeight: number;
	// 	}
	// 	autocomplete: boolean;
	// 	autosave: boolean;
	// }
	```
	</details>

- `WritableDeep` - Create a deeply mutable version of an `object`/`ReadonlyMap`/`ReadonlySet`/`ReadonlyArray` type. The inverse of `ReadonlyDeep<T>`. Use `Writable<T>` if you only need one level deep.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUARFFMAXzgDMoIQ4ByJVAWlpQGcZmBuAFCC2aAGIQIcALwZBUFHgAmEAHZFEcPAC44qgK4gCKKEIXK1GuAV3mV6zbxyqA5gG0AuvzgB6H3AAVKW4ACwgAdwQQvHgQfXwCYCJcTWBuOCUKMCs8Wi4AYxgUJQA6eUV7K3zdAkkSPFUhKiFBfLVeOHCcBJJySgkIXWxcQl6sgB4BgD4ZDB04AEYAGmtdN2YAJmYPFeqEKH0UZsEukeIyLIGSvFmAZiFTnov+yRKCNwAGD1nmVRRIgBueCIhwEJ26o2eYCuBFm624jBQMBCwFc234QA">TS Playground</a> | <a href="source/writable-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {WritableDeep} from 'type-fest';
	
	type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that mutability is deeply affected.
	readonly c: boolean;
	};
	
	const writableDeepFoo: WritableDeep<Foo> = {a: 1, b: ['2'], c: true};
	writableDeepFoo.a = 3;
	writableDeepFoo.b[0] = 'new value';
	writableDeepFoo.b = ['something'];
	```
	</details>

### String

- `Replace` - Represents a string with some or all matches replaced by a replacement.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMwBsCGBjFBfOAMyghDgHIYBPMFAWkJQGcZyBuAKA4BMVssoKIgFcAdthjAIouIIw4UAHg4BJUWGHwUADxgpR3JnBZRgogOYAaDgGUUmKNgAWcHXoNGTZqx1TzcIPpauvqGxjCmFhwAfAAUHGYaMABccGpJ1kz2jk6pdg7O1nJYAUGpfiUogaIwHACU5WiViumalnD5Oe0VCtUw0Zw8fAJChGISUjLFCgCC6OjKrcHuYV4W1p3OriEe4ZE+PaU12yueEd4x8YmaqUuZ2c55D05FTb1lcIdVQfWN-kp3DrPbpvI4wdoITDzVIRYT4AZcAD0iLgABUnEJBDBhFAZNRaHBgEYYBjtjh4GtzHB0MA9FAoe1RBB4AArYQsOAAA0pnIAdFxprhYuQMfMIHAAPzkdrkKUywB8G4AQ3fIdU4yIAvNEKKL0OKleQBaCUMKdeKJXKKBbyIBlchVasRmu1KDFcGtUsN-zm6GFAEYAAzJAAsACZkn6-dKKMlI+Q6HaOBqteR-XQQ3RwwaOIKUF7hQB9PPslBQABymECBZjlZl8cTFCLpfLKEz2dz5AAslQ4ABhCAQdBo2noZsyig11UJh1Jzu9-uoofNoA">TS Playground</a> | <a href="source/replace.d.ts">Source</a>
	</summary>

	```ts
	import {Replace} from 'type-fest';
	
	declare function replace<
	Input extends string,
	Search extends string,
	Replacement extends string
	>(
	input: Input,
	search: Search,
	replacement: Replacement
	): Replace<Input, Search, Replacement>;
	
	declare function replaceAll<
	Input extends string,
	Search extends string,
	Replacement extends string
	>(
	input: Input,
	search: Search,
	replacement: Replacement
	): Replace<Input, Search, Replacement, {all: true}>;
	
	// The return type is the exact string literal, not just `string`.
	
	replace('hello ?', '?', '🦄');
	//=> 'hello 🦄'
	
	replace('hello ??', '?', '❓');
	//=> 'hello ❓?'
	
	replaceAll('10:42:00', ':', '-');
	//=> '10-42-00'
	
	replaceAll('__userName__', '__', '');
	//=> 'userName'
	
	replaceAll('My Cool Title', ' ', '');
	//=> 'MyCoolTitle'
	```
	</details>

- `Split` - Represents an array of strings split using a given character or character set.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTAG2DAXzgDMoIQ4ByJVAWmJQGcZKBuAKHYBMUBjHAIZQ0xAK4A7XjGARxcRrnwAeTHBQAPGCnFdG8mFGDiA5gBo4AETWbtu-YZMA+ABTMHxgFxxM5xijBCAjDQXhYAlF7YeDAq5haOHOw0aACSWhQAvFTEEBCUcAA+VABGQvlFlKUAXuVUAO4COFx5HLyyzHD4KCB6WZQ5EKalUEMCVaYNTS3sOCjwQlACiF5p3QDaALqJC0twWQrRzl095pSmlGGsQA">TS Playground</a> | <a href="source/split.d.ts">Source</a>
	</summary>

	```ts
	import type {Split} from 'type-fest';
	
	declare function split<S extends string, D extends string>(string: S, separator: D): Split<S, D>;
	
	type Item = 'foo' | 'bar' | 'baz' | 'waldo';
	const items = 'foo,bar,baz,waldo';
	let array: Item[];
	
	array = split(items, ',');
	```
	</details>

- `Trim` - Remove leading and trailing spaces from a string.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFSqAvnAMyghDgHIlUBaAlAZxjIG4AoF7UAHjMIgnIB8LAPTCAvAPIE+ZIA">TS Playground</a> | <a href="source/trim.d.ts">Source</a>
	</summary>

	```ts
	import type {Trim} from 'type-fest';
	
	Trim<' foo '>
	//=> 'foo'
	```
	</details>

### Template literal

- `CamelCase` - Convert a string literal to camel-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUBfOAMyghDgHIlUBaClImOgbgChuB6PnADKoMPhS8AxhAB27OERooAatijBsAI3EAuODjyFsJADx0KECE01q6APjgBeehYgAhWz36CAggBMAN2wZSRQ-XkY0AwJiMIAFalRYYDYTABUHZ3RuAG0AaThgGTgAaxRECAo4NLhjfVwY4xQTPLsAXT00-LbuUi8imBQoCmxQuAAlbAB3AHkwGGBZIgxuOj8oRCYoAFcZOj1NS3FgnnNt-HwAfRGQYHxES5kG-YUYdRkAcx5XPRltkE0Qx4bh84z07HeX24AEUAKoALUucIAGr9-oCoKcZmkABIAUXGTAAYgBJPEAGQAIi9DhBjjIeKQpEt4H5NOM2OcYHpokYSH4EhAkgtUpNZvNFnJMit1ohxrs9G9tigADTcCjnfBE3B3RAAOQaejoNigADoAFZEOhqn5wACMACYAMxqk1G1zW7gAR22AC9odsAB56ABsaogMAAFkMiSl8H49CN8CRepwgA">TS Playground</a> | <a href="source/camel-case.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCase} from 'type-fest';
	
	// Simple
	
	const someVariable: CamelCase<'foo-bar'> = 'fooBar';
	
	// Advanced
	
	type CamelCasedProperties<T> = {
	[K in keyof T as CamelCase<K>]: T[K]
	};
	
	interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	BAR: string;
	QUZ_QUX: number;
	'OTHER-FIELD': boolean;
	}
	
	const dbResult: CamelCasedProperties<RawOptions> = {
	dryRun: true,
	fullFamilyName: 'bar.js',
	foo: 123,
	bar: 'foo',
	quzQux: 6,
	otherField: false
	};
	```
	</details>

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA">TS Playground</a> | <a href="source/camel-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	interface UserWithFriends {
	UserInfo: User;
	UserFriends: User[];
	}
	
	const result: CamelCasedPropertiesDeep<UserWithFriends> = {
	userInfo: {
	userId: 1,
	userName: 'Tom',
	},
	userFriends: [
	{
	userId: 2,
	userName: 'Jerry',
	},
	{
	userId: 3,
	userName: 'Spike',
	},
	],
	};
	```
	</details>

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA">TS Playground</a> | <a href="source/camel-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {CamelCasedProperties} from 'type-fest';
	
	interface User {
	UserId: number;
	UserName: string;
	}
	
	const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
	};
	```
	</details>

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAXzgDMoIQ4ByJVAWlpXJmYG4AUAID0wuAGVQYHCiEBjCADseccoxQA1UlGCkARjIBccbHhAEiZSgB5mtCBABC25gBoWAYmYA+OAF4WewgPPRdBETEAQQATADdSRTkUaKE2NAB5aOicRCtkgAUGVFhgbmsAFV8A9AEAbQBpOGBFOABrFEQIWjhyuAoTXHxCEgoUa3r3Zi9vAF1jcoaZgSpw5uHaUiSJdXSwGGAlcgwBaKhEACUAV0VjPQcZBMFmuRxL6JQAMWAjVRgdRQA5oIgsZFJcQHoiIIqPJDvAoKQAO7EPC7faHYyZbK5UbRQoQYr7MriHZ7A7KKrHZinRAeKDXZjGP6XFCuATMZ6vd4eWjfFCMlihKAAOgAVuQ3AIQXAAIwAJgAzMs+EA">TS Playground</a> | <a href="source/delimiter-case.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCase} from 'type-fest';
	
	// Simple
	
	const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';
	
	// Advanced
	
	type OddlyCasedProperties<T> = {
	[K in keyof T as DelimiterCase<K, '#'>]: T[K]
	};
	
	interface SomeOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
	}
	
	const rawCliOptions: OddlyCasedProperties<SomeOptions> = {
	'dry#run': true,
	'include#file': 'bar.js',
	foo: 123
	};
	```
	</details>

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA">TS Playground</a> | <a href="source/delimiter-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: DelimiterCasedPropertiesDeep<UserWithFriends, '-'> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA">TS Playground</a> | <a href="source/delimiter-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {DelimiterCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: DelimiterCasedProperties<User, '-'> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOCcG+XhQBH8KBEymNDiqfEEX1i3zAHGOfFC4Ui6mifHBMQgBAp2LoDM08BZbIA6kdxJ1zbcDHBJZshbsBdXpbtRabxSMufW+bY4Ak5Uc6GQbD3jv3yMrh2QNb9lmPdSgyEk+AI1LmDcbTXAy5brfDM-ako60S63doPSFvSJff7A0bDXBmRoqHF8nAQKJQSwmkY3okkrKAMzD9BH0KJ1wxQD1V26L93xwIwtjUKARE-SkAjsL8UllAgIAgACgKKRFvjA7pgzXL8gA">TS Playground</a> | <a href="source/get.d.ts">Source</a>
	</summary>

	```ts
	import type {Get} from 'type-fest';
	import * as lodash from 'lodash';
	
	const get = <BaseType, Path extends string | readonly string[]>(object: BaseType, path: Path): Get<BaseType, Path> =>
	lodash.get(object, path);
	
	interface ApiResponse {
	hits: {
	hits: Array<{
	_id: string
	_source: {
	name: Array<{
	given: string[]
	family: string
	}>
	birthDate: string
	}
	}>
	}
	}
	
	const getName = (apiResponse: ApiResponse) =>
	get(apiResponse, 'hits.hits[0]._source.name');
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Path also supports a readonly array of strings
	const getNameWithPathArray = (apiResponse: ApiResponse) =>
	get(apiResponse, ['hits','hits', '0', '_source', 'name'] as const);
	//=> Array<{given: string[]; family: string}> | undefined
	
	// Non-strict mode:
	Get<string[], '3', {strict: false}> //=> string
	Get<Record<string, string>, 'foo', {strict: true}> // => string
	```
	</details>

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQsAdgXzgDMoIQ4ByJVAWiJQGcYKBuAKDYHpO4BZYAB4oAJnAAUTKHgDmDOADI4uAK4gARiigMAlHGAwUIBizhRGygDbxgDAFyUiECADoADM7UBDAF4U2AYwhcJjgwTxgAC3tsPAAeAG0KRwgKABo4V3SKL18AXSznCgA+OABeOETktIysnIpc5wArHFwxCkLtdi4eAHlcC0Q4SRk9AyMTMwZLazsHJw9PKAXfAKCQsMjoloSkp2rsxf26-MpCkvLKvdrD67ymlraOru44PoGlVQ0oUcNjU3MrHpZhQAIzOABMzgAzH5AsF4BsonAYrgEiD0uD0lCTu1imUKui4Ji4Nj7nhHhROhwXm9BmpgNI8NYxn9JtMgZQwZCYat4aFwkiUWjcBiRSTcDizvj4iCxeCxVCJWTWriqd1Xv06U4LChPLgfuN-lNATZ7FQoMoUM4iJ4LAwrTALShYWsEQKtnF4o7LekbXaUOlvShJXiLkHfbb7YGnQ1muTVc8eABhIIwTx4OQqCwWGwRA2sgEzM3JZzLUsCRArOHrd3I7aXFLpZS4YQoIh4ES3apZixZCt5Aqhiq7RtwZut9u4TuUOrpHt9yv1ZUUtUvAAKixgwFtCGUYB1QwinlQcjEkzdUE85AsniYnSN7NNcAABmAzO2BM4ACToYa4aT4M+vI1psdaehQb5toI1Sls4f7SPEuQhucw6QR+S5xiqTzUjwG6wNuFi7vuaAMEeJ7iOe-KXuQ7ZaDA95siaszPj+8H4HByhEB+QHVm6oFCvEsHwYhWRTFx0HIdKFBiehsYPAmOFwAAKnuOpyPovxwAA7voeY9rmY64MAawTIWHK4nAAA+lARCg2YuBQVmnFp0AWMIjnWRQtn2c4LlQG5Lp8oiHqook3kWCkTnjlBU7CFkfkBU5PaSRcXl2RF+wJe5cnxk8QA">TS Playground</a> | <a href="source/join.d.ts">Source</a>
	</summary>

	```ts
	import type {Join} from 'type-fest';
	
	// Mixed (strings & numbers) items; result is: 'foo.0.baz'
	const path: Join<['foo', 0, 'baz'], '.'> = ['foo', 0, 'baz'].join('.');
	
	// Only string items; result is: 'foo.bar.baz'
	const path: Join<['foo', 'bar', 'baz'], '.'> = ['foo', 'bar', 'baz'].join('.');
	
	// Only number items; result is: '1.2.3'
	const path: Join<[1, 2, 3], '.'> = [1, 2, 3].join('.');
	
	// Only bigint items; result is '1.2.3'
	const path: Join<[1n, 2n, 3n], '.'> = [1n, 2n, 3n].join('.');
	
	// Only boolean items; result is: 'true.false.true'
	const path: Join<[true, false, true], '.'> = [true, false, true].join('.');
	
	// Contains nullish items; result is: 'foo..baz..xyz'
	const path: Join<['foo', undefined, 'baz', null, 'xyz'], '.'> = ['foo', undefined, 'baz', null, 'xyz'].join('.');
	
	// Partial tuple shapes (rest param last); result is: `prefix.${string}`
	const path: Join<['prefix', ...string[]], '.'> = ['prefix'].join('.');
	
	// Partial tuple shapes (rest param first); result is: `${string}.suffix`
	const path: Join<[...string[], 'suffix'], '.'> = ['suffix'].join('.');
	
	// Tuples items with nullish unions; result is '.' | 'hello.' | '.world' | 'hello.world'
	const path: Join<['hello' | undefined, 'world' | null], '.'> = ['hello', 'world'].join('.');
	```
	</details>

- `KebabCase` - Convert a string literal to kebab-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigL5wBmUEIcA5EqgLRUokwMDcAULwHoBcAMqgwAGxT8AxhAB2nOCTooAanijACUgFxxs+IqRQAeBlQgQAQpoYA+OAF5GliC3xQe-IXACCACYAbnjyMigB-MxohgTEZAEACrSosMAcpgAqji7ovADamHDA8nAA1iiIEFRwmXCkBrhxJqaY9gC6+pmF7bzkfLwlMChQVHjhcIQSwADyYDDACiQYvAFQiABKAK7y+jhWUqF8JTISWwEoAGLAesowWvIA5nxu+vJbIDgjfOSyS-BQPAAdyms3mi0U+lixgSyQgqQWGVBcwWSxyKwYa0QLCgOwY+nuWxQABpeAwTmcLmwbih8YxPAA6ABWJAYpNecAAjAAmADMfW4QA">TS Playground</a> | <a href="source/kebab-case.d.ts">Source</a>
	</summary>

	```ts
	import type {KebabCase} from 'type-fest';
	
	// Simple
	
	const someVariable: KebabCase<'fooBar'> = 'foo-bar';
	
	// Advanced
	
	type KebabCasedProperties<T> = {
	[K in keyof T as KebabCase<K>]: T[K]
	};
	
	interface CliOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
	}
	
	const rawCliOptions: KebabCasedProperties<CliOptions> = {
	'dry-run': true,
	'include-file': 'bar.js',
	foo: 123
	};
	```
	</details>

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA">TS Playground</a> | <a href="source/kebab-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type [KebabCasedPropertiesDeep] from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: KebabCasedPropertiesDeep<UserWithFriends> = {
	'user-info': {
	'user-id': 1,
	'user-name': 'Tom',
	},
	'user-friends': [
	{
	'user-id': 2,
	'user-name': 'Jerry',
	},
	{
	'user-id': 3,
	'user-name': 'Spike',
	},
	],
	};
	```
	</details>

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA">TS Playground</a> | <a href="source/kebab-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {KebabCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: KebabCasedProperties<User> = {
	'user-id': 1,
	'user-name': 'Tom',
	};
	```
	</details>

- `LastArrayElement` - Extracts the type of the last element of an array.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGQIYGcYCCUU2iAogDYogoB2MAvnAGZQQhwDkSqAtMynycA3AChRAExQBjCtihpmAV1rSYwCLThz8AeWYAeAGpwUADxh0JuOAuwTNFRHGy1EAbQC6APgAU8kkQALjgjAEoQnHwiQMpqOhhjbzFRaU18F2JSOABeOHdOZggITgAaOAAmTxSeFAhmbTwYfX8sxDCxAHpOnO84WiUQACMUKCA">TS Playground</a> | <a href="source/last-array-element.d.ts">Source</a>
	</summary>

	```ts
	import type {LastArrayElement} from 'type-fest';
	
	declare function lastOf<V extends readonly any[]>(array: V): LastArrayElement<V>;
	
	const array = ['foo', 2];
	
	typeof lastOf(array);
	//=> number
	```
	</details>

- `PascalCase` - Converts a string literal to pascal-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oC+cAZlBCHAORKoC01KuMjA3AFB8A9ILgBlUGCIoB+CADsucXPRQA1bFGDYARlIBccHAWJlcKADyNqECK20bGAPjgBeJgDEbAIQf8hIgEEAEwA3bDl8FCCBFjQjQlJyTDowXHMAFWc3dD4AbQBpOGA5OABrFEQIajh0uDxDPATTC3zHAF0DdIK2vgo-YpgUKGpsSLgAJWwAdwB5MBhgeVwMPkYgqERWKABXOUYDbRspcP4rbaIiAH0RkGAiREu5bBAUfaUYTTkAc35rCAM5NsQNohvwKDIlvAgtpxpxzjADGQXokzEFkhBULBgJxzABZCBBFBEdGpLIrAAiG3GuwMH22KAANHx3OciO5nndEAA5Z4oAyMexQAB0ACtcIwmZ5-nAAIwAJgAzL0eEA">TS Playground</a> | <a href="source/pascal-case.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCase} from 'type-fest';
	
	// Simple
	
	const someVariable: PascalCase<'foo-bar'> = 'FooBar';
	
	// Advanced
	
	type PascalCaseProps<T> = {
	[K in keyof T as PascalCase<K>]: T[K]
	};
	
	interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	}
	
	const dbResult: CamelCasedProperties<ModelProps> = {
	DryRun: true,
	FullFamilyName: 'bar.js',
	Foo: 123
	};
	```
	</details>

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA">TS Playground</a> | <a href="source/pascal-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: PascalCasedPropertiesDeep<UserWithFriends> = {
	UserInfo: {
	UserId: 1,
	UserName: 'Tom',
	},
	UserFriends: [
	{
	UserId: 2,
	UserName: 'Jerry',
	},
	{
	UserId: 3,
	UserName: 'Spike',
	},
	],
	};
	```
	</details>

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA">TS Playground</a> | <a href="source/pascal-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {PascalCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: PascalCasedProperties<User> = {
	UserId: 1,
	UserName: 'Tom',
	};
	```
	</details>

- `Replace` - Represents a string with some or all matches replaced by a replacement.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMwBsCGBjFBfOAMyghDgHIYBPMFAWkJQGcZyBuAKA4BMVssoKIgFcAdthjAIouIIw4UAHg4BJUWGHwUADxgpR3JnBZRgogOYAaDgGUUmKNgAWcHXoNGTZqx1TzcIPpauvqGxjCmFhwAfAAUHGYaMABccGpJ1kz2jk6pdg7O1nJYAUGpfiUogaIwHACU5WiViumalnD5Oe0VCtUw0Zw8fAJChGISUjLFCgCC6OjKrcHuYV4W1p3OriEe4ZE+PaU12yueEd4x8YmaqUuZ2c55D05FTb1lcIdVQfWN-kp3DrPbpvI4wdoITDzVIRYT4AZcAD0iLgABUnEJBDBhFAZNRaHBgEYYBjtjh4GtzHB0MA9FAoe1RBB4AArYQsOAAA0pnIAdFxprhYuQMfMIHAAPzkdrkKUywB8G4AQ3fIdU4yIAvNEKKL0OKleQBaCUMKdeKJXKKBbyIBlchVasRmu1KDFcGtUsN-zm6GFAEYAAzJAAsACZkn6-dKKMlI+Q6HaOBqteR-XQQ3RwwaOIKUF7hQB9PPslBQABymECBZjlZl8cTFCLpfLKEz2dz5AAslQ4ABhCAQdBo2noZsyig11UJh1Jzu9-uoofNoA">TS Playground</a> | <a href="source/replace.d.ts">Source</a>
	</summary>

	```ts
	import {Replace} from 'type-fest';
	
	declare function replace<
	Input extends string,
	Search extends string,
	Replacement extends string
	>(
	input: Input,
	search: Search,
	replacement: Replacement
	): Replace<Input, Search, Replacement>;
	
	declare function replaceAll<
	Input extends string,
	Search extends string,
	Replacement extends string
	>(
	input: Input,
	search: Search,
	replacement: Replacement
	): Replace<Input, Search, Replacement, {all: true}>;
	
	// The return type is the exact string literal, not just `string`.
	
	replace('hello ?', '?', '🦄');
	//=> 'hello 🦄'
	
	replace('hello ??', '?', '❓');
	//=> 'hello ❓?'
	
	replaceAll('10:42:00', ':', '-');
	//=> '10-42-00'
	
	replaceAll('__userName__', '__', '');
	//=> 'userName'
	
	replaceAll('My Cool Title', ' ', '');
	//=> 'MyCoolTitle'
	```
	</details>

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMZRQQxGADsBzTY-AaxQGF8BnFAXzgDMoIQ4ByJVALRsUDGDwDcAKEnYIxUXAZcUANXxRg+AEYAbFAC44OPIRLlKNekwA8PNhAgAhdTwB8cALy8AYgHlfAPqOAIIAShJAA">TS Playground</a> | <a href="source/screaming-snake-case.d.ts">Source</a>
	</summary>

	```ts
	import type {ScreamingSnakeCase} from 'type-fest';
	
	const someVariable: ScreamingSnakeCase<'fooBar'> = 'FOO_BAR';
	```
	</details>

- `SnakeCase` - Convert a string literal to snake-case.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oC+cAZlBCHAORKoC01KpMjA3AFB8A9ILiZQYADYoBAYwjYucUvRQA1XFGC4ARlIBcovIRLkAPI2oQIAIQ2MAfHAC8TSxAD62u-yEiAggAmAG642DIoAQIsaDgExGQRAAp0qLDAnKYAKo4u6HwA2gDScMDYcISIENRwmXBkhnEmKKaF9gC6BplFbXwUPqUwKFDUuOFwALIQASgSyRBgpBh8wKQAErhgYIgG2lZSofzUAK4SEgBiuCDAEogAcpcoBlya2ADmh1YG2Ecg2kP8FFk8kUAW0ACVOCcYAZYsYEgE5qkYOlSKZJtNZilSDklowVu4ABYbLaMAwwKBHFAAGj4FhOEncIyuN3ceBAKFJTBIUAkuFEVxgBMYNLcBgAjAAmADMvR4QA">TS Playground</a> | <a href="source/snake-case.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCase} from 'type-fest';
	
	// Simple
	
	const someVariable: SnakeCase<'fooBar'> = 'foo_bar';
	
	// Advanced
	
	type SnakeCasedProperties<T> = {
	[K in keyof T as SnakeCase<K>]: T[K]
	};
	
	interface ModelProps {
	isHappy: boolean;
	fullFamilyName: string;
	foo: number;
	}
	
	const dbResult: SnakeCasedProperties<ModelProps> = {
	'is_happy': true,
	'full_family_name': 'Carla Smith',
	foo: 123
	};
	```
	</details>

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA">TS Playground</a> | <a href="source/snake-cased-properties-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedPropertiesDeep} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
	}
	
	const result: SnakeCasedPropertiesDeep<UserWithFriends> = {
	user_info: {
	user_id: 1,
	user_name: 'Tom',
	},
	user_friends: [
	{
	user_id: 2,
	user_name: 'Jerry',
	},
	{
	user_id: 3,
	user_name: 'Spike',
	},
	],
	};
	```
	</details>

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA">TS Playground</a> | <a href="source/snake-cased-properties.d.ts">Source</a>
	</summary>

	```ts
	import type {SnakeCasedProperties} from 'type-fest';
	
	interface User {
	userId: number;
	userName: string;
	}
	
	const result: SnakeCasedProperties<User> = {
	user_id: 1,
	user_name: 'Tom',
	};
	```
	</details>

- `Split` - Represents an array of strings split using a given character or character set.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTAG2DAXzgDMoIQ4ByJVAWmJQGcZKBuAKHYBMUBjHAIZQ0xAK4A7XjGARxcRrnwAeTHBQAPGCnFdG8mFGDiA5gBo4AETWbtu-YZMA+ABTMHxgFxxM5xijBCAjDQXhYAlF7YeDAq5haOHOw0aACSWhQAvFTEEBCUcAA+VABGQvlFlKUAXuVUAO4COFx5HLyyzHD4KCB6WZQ5EKalUEMCVaYNTS3sOCjwQlACiF5p3QDaALqJC0twWQrRzl095pSmlGGsQA">TS Playground</a> | <a href="source/split.d.ts">Source</a>
	</summary>

	```ts
	import type {Split} from 'type-fest';
	
	declare function split<S extends string, D extends string>(string: S, separator: D): Split<S, D>;
	
	type Item = 'foo' | 'bar' | 'baz' | 'waldo';
	const items = 'foo,bar,baz,waldo';
	let array: Item[];
	
	array = split(items, ',');
	```
	</details>

- `Trim` - Remove leading and trailing spaces from a string.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFSqAvnAMyghDgHIlUBaAlAZxjIG4AoF7UAHjMIgnIB8LAPTCAvAPIE+ZIA">TS Playground</a> | <a href="source/trim.d.ts">Source</a>
	</summary>

	```ts
	import type {Trim} from 'type-fest';
	
	Trim<' foo '>
	//=> 'foo'
	```
	</details>

### Type

- `GlobalThis` - Declare locally scoped properties on `globalThis`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcQDYQEYCG2AKgBbADOAvnAGZQQhwDkSqAtLShTMwNwAoAWzQBRAB4woBHPiIU4AXjizCJcgoBkGAVBQEAJhAB22RCoAyAeQBCAQQsB9YlYDSogHIAuODyjBjAHNBKkEBAApA3DUySjgCBQkpGWj5AEoAOkxreycXdw8+IA">TS Playground</a> | <a href="source/global-this.d.ts">Source</a>
	</summary>

	```ts
	import type {GlobalThis} from 'type-fest';
	
	type ExtraGlobals = GlobalThis & {
	readonly GLOBAL_TOKEN: string;
	};
	
	(globalThis as ExtraGlobals).GLOBAL_TOKEN;
	```
	</details>

- `InvariantOf` - Create an [invariant type](https://basarat.gitbook.io/typescript/type-system/type-compatibility#footnote-invariance), which is a type that does not accept supertypes and subtypes.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYDcCGUw+2MA8gGYC+cFUEIcA5EqgLQUoDOMTA3ACgBAYwA2+LlzgBBbKHyiMIiNh5QArsJjQAFGHUAjUcGFxs+ECgBccNcGwBzAJToqAtyPGS4AYXzwUAA8YFGwAEylZeUV0AUsIAHcdJww3D1EUeBJo6SgofEQbKJAFAG0AXTgAXjhS7JLRcsEM+GF-XPzC338K6tq2mCaheoUOgr6BscQ+OAB6WbgyAGtx4Ao4YQgCIhIYARHRKYA6fS4ACx1sFASZOQadJhIIGDOUKDgDpicnGfm4AAV1OcUGEPtgwdE4PZtBt2nkCiI4Z0jhRoABRfDCC6mKoAPg2R3iSW+vwW0lEokSILgBnUMAANHA3vR3v44BpSKAUEIWlC8IRiKRiqN4V0cNtBeQKAAeYWiXG9Gp1O4KSoSODigW7SiylXyirNTJ8iW7PwwKY2TU7Ug6s0KypKgZqqRWyW2-z2wQCewmoV6qZ9H1a0hmqakuBovLQGwAFWQaCYru1MrtFSYUKk2GeH0kwAc5iMaBhrATSZtMrl9qYRyAA">TS Playground</a> | <a href="source/invariant-of.d.ts">Source</a>
	</summary>

	```ts
	import type {InvariantOf} from 'type-fest';
	
	class Animal {
	constructor(public name: string){}
	}
	
	class Cat extends Animal {
	meow() {}
	}
	
	let animalArray: Animal[] = [animal];
	let catArray: Cat[] = [cat];
	
	animalArray = catArray; // Okay if covariant
	animalArray.push(new Animal('another animal')); // Pushed an animal into catArray
	catArray.forEach(c => c.meow()); // Allowed but, error at runtime
	
	let invariantAnimalArray: InvariantOf<Animal>[] = [animal] as InvariantOf<Animal>[];
	let invariantCatArray: InvariantOf<Cat>[] = [cat] as InvariantOf<Cat>[];
	
	invariantAnimalArray = invariantCatArray; // Error: Type 'InvariantOf<Cat>[]' is not assignable to type 'InvariantOf<Animal>[]'.
	```
	</details>

- `LiteralToPrimitiveDeep` - Like `LiteralToPrimitive` except it converts literal types inside an object or array deeply.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgCoQAKUoOwAbigCIopgA0cxAzgMIQB2AZsADmAKQ58AvnH5QIIOAHIkqALT8UHGAoDcAKFCRYCDgGM+godNnyFYfDAAWAehgQXp88IB0AK3G8dXV1+AFdeExhgPjgAEwgAZTkUR2BeIQB1HAdieJ4BYQAKM3yhAC44bFwCEnJKEGo6RmYAHk48izE+AD4ASgw4L0G4CSCnJzgAOQg4E3xNVMtgDjheJhiUGIRpuw5lxzRlNBMHFBMAa104xJBkhwXMxxz2wpgPEp69XTG4AEl+CpweCIpAoVEijSYYDgSxWEHgIQ4GzYiAgIRWay2Mzm8H20PA0Fwmxi9nwcEIwDOBzuHFKlwSSRSaQe2VyniEBVexQscDm7G4bM6vA+QA">TS Playground</a> | <a href="source/literal-to-primitive-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {LiteralToPrimitiveDeep, TsConfigJson} from 'type-fest';
	import tsconfig from 'path/to/tsconfig.json';
	
	function doSomethingWithTSConfig(config: LiteralToPrimitiveDeep<TsConfigJson>) { ... }
	
	// No casting is needed to pass the type check
	doSomethingWithTSConfig(tsconfig);
	
	// If LiteralToPrimitiveDeep is not used, you need to cast the imported data like this:
	doSomethingWithTSConfig(tsconfig as TsConfigJson);
	```
	</details>

- `LiteralToPrimitive` - Given a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) return the {@link Primitive primitive type} it belongs to, or `never` if it's not a primitive.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgCoQAKUoOwAbigL5wBmUEIcA5EqgLRMoBnGBwDcAKDEB6SXAByEOBDpRCEfABMBcAHYoU6-QgUBzFPBgALNAGNoUFNfj2YAVyjaEyFGKYvtj4AgPMEIXAQAeYjgUAA9cbU0dFxAAIzw4AB84FOBjYG14LKFKbWMAPgAKGIAuOGIAGjhEWuIASlrsXAISckoQajpIsowxZzcPGLgAajgKxDh8LXxtRFbxegkQsIqOfA5GjhSONbhpOGL84zEtgQqARkaAJhOz7WS0qGvQ27vtJ+0XjIcnkCkA">TS Playground</a> | <a href="source/literal-to-primitive.d.ts">Source</a>
	</summary>

	```ts
	import type {LiteralToPrimitive} from 'type-fest';
	
	// No overloads needed to get the correct return type
	function plus<T extends number | bigint | string>(x: T, y: T): LiteralToPrimitive<T> {
	return x + (y as any);
	}
	
	plus('a', 'b'); // string
	plus(1, 2); // number
	plus(1n, 2n); // bigint
	```
	</details>

- `LiteralUnion` - Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgKoB2wEpAvnAGZQQhwDkSqAtLSgM4zMDcAKEEB6EXABCKWtBTC2aAAop4AXhYATCAHNmcAD4sAxvj4G4vKMFLahgo5V5xUMAFxxlalgNHiAyjD4sAjI1tpw1nCIEACuUHAAKsgofkZWYDDsKKT4AEaEKBpwAJIAIgCiAHS+cACasXAAVI0A7sCEhHCkEDDNcNoqcPgxMBDsDuAFMBSkdNBwAAZa2gtDpEULJjCrhDh4RNzVNQCCtLhQ8skeKgBMcOrY50RkMwA8zMt6hsxbzAA0FhgVhsAD47A5SE4XO5PHd1MwfGI6g1mm0On0BvBhqNxowwFMZnN4ksdKt8OtFlsdnsCIRDkA">TS Playground</a> | <a href="source/literal-union.d.ts">Source</a>
	</summary>

	```ts
	import type {LiteralUnion} from 'type-fest';
	
	// Before
	
	type Pet = 'dog' | 'cat' | string;
	
	const pet: Pet = '';
	// Start typing in your TypeScript-enabled IDE.
	// You **will not** get auto-completion for `dog` and `cat` literals.
	
	// After
	
	type Pet2 = LiteralUnion<'dog' | 'cat', string>;
	
	const pet: Pet2 = '';
	// You **will** get auto-completion for `dog` and `cat` literals.
	```
	</details>

- `Opaque` - Create an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTAQwI4CuKAvnAGZQQhwDkSqAtGSgM4w0DcAUF-WgIIBjQRAIA7GADkCIAEYoocALxxs+IgB4xM+VAA0tISPFSdCmgD5ufOEdESAQjgA2OMYLQq1hFFrP7DYXsYJ1d3FEtuLgB6aLgAFQALNAADeIgAaxQxFLhcKBwQFBgFOBdnCAB3FgRkuBFwYGdSmAg4ABNgMmYobJhgHBK4eRhKlGyEZFYDSuTenBqAInEMsSqxRbhKpuc4NZgAOjgAMWg4FAAPQrBmgxExFmB2lrqyCGcK7bEAczg2KAIghgBF6LAAXLwpglEsAfpgxJ5VLgfBp-rDvlZIahoej4pU2l5kZo0T9MTE4ulamgGmAmgoDDBkiw0HwajhemUPlUUO0EG15PUFvBWuccIJEnAIIzSgsqYg4IkcAA3Fl1FiFNDiZ5QZyIdGTVBHJIoeXstCyKUSlIk34AMgwcAA+o6IESUM6wXAVmtKmI4MQUgdyQk2sqIE9asAavJFUrgKIAohRFtRM5ebC2CgcLzcCwatK4It0lkNnl2RqSgFnMAsn8IEGbJIUJUkuj4YjvMSYFB0QYaK24QjIli0E2WzCfniCUj1L4bX2B98p8Pg5IqnKaByac0Srq-ih8oMWVMWAYWG0C28uV9ftsPuQcE0+fUqLTmkGyOIgfG-YJ5iUx0Xds4AACgASk9QCJ2+YD0GDfgaiTAhBT9ZkUDuIV9QoKgyj+bt9SjPCdk5T4eSOAAJbkVUTZMQBweV9kFNg4CgtsEWfVjJ3xAw3F5OMPDgaj1SDXpgSgP0aARSpIx+SUhzKGpOJghFuGIHhYhxGo712MhH12EUaTpHj82SU0OU-MR2g1CRynlTpugUPoDVYIN7mYxlcXxZR6n-FAlPbcCFJY5tFynKINPIxyaDZfY5nOK5wGaSUyElN0DXRD8v36CBf18uwTGkOQFHAz18okQrdAwLhRJBP0ACYgrK0wiqgVSeAs78crgb5igAWRyk1TigJqQLFYxyv8UqggK-wINsabHBcNwBLgmrxLgAAWRqFpCJbwja4NWy04jDKSlhAQ8PNPw+RAgx6mB+oRRAhpGv8sxKJqKuKsCwPCuIHAIYUYS0nK6AMeRBBwAhmTgYB4EVfN+TQS4bmAQQ4b3XNmV5WU3DgFJPv8XI+DuvqBue6ARrq371LiABNZNIb9aG0FdWdBJcIgamrWtpTM7I6FS9nWnrLg3PgMbgi+xQVDeo9CZa8C-s0rZiMY060HO4RWBYa7dVcnLmKkhXKpUSWZpauAAGo4Dq5WENwx5nj2KV0LgJCUNA3i-kSVN2jAr0Yd6QQQUeFVnJqN5FCQxQ2Z8CPnzo3nkmof4cp6xRvd91A9flLNHhaC8pgbKEAAUFHPP0VDgp5PU7XxtBagxy6gSvMTEDVPRtVSOCAA">TS Playground</a> | <a href="source/opaque.d.ts">Source</a>
	</summary>

	```ts
	import type {Opaque} from 'type-fest';
	
	type AccountNumber = Opaque<number, 'AccountNumber'>;
	type AccountBalance = Opaque<number, 'AccountBalance'>;
	
	// The `Token` parameter allows the compiler to differentiate between types, whereas "unknown" will not. For example, consider the following structures:
	type ThingOne = Opaque<string>;
	type ThingTwo = Opaque<string>;
	
	// To the compiler, these types are allowed to be cast to each other as they have the same underlying type. They are both `string & { __opaque__: unknown }`.
	// To avoid this behaviour, you would instead pass the "Token" parameter, like so.
	type NewThingOne = Opaque<string, 'ThingOne'>;
	type NewThingTwo = Opaque<string, 'ThingTwo'>;
	
	// Now they're completely separate types, so the following will fail to compile.
	function createNewThingOne (): NewThingOne {
	// As you can see, casting from a string is still allowed. However, you may not cast NewThingOne to NewThingTwo, and vice versa.
	return 'new thing one' as NewThingOne;
	}
	
	// This will fail to compile, as they are fundamentally different types.
	const thingTwo = createNewThingOne() as NewThingTwo;
	
	// Here's another example of opaque typing.
	function createAccountNumber(): AccountNumber {
	return 2 as AccountNumber;
	}
	
	function getMoneyForAccount(accountNumber: AccountNumber): AccountBalance {
	return 4 as AccountBalance;
	}
	
	// This will compile successfully.
	getMoneyForAccount(createAccountNumber());
	
	// But this won't, because it has to be explicitly passed as an `AccountNumber` type.
	getMoneyForAccount(2);
	
	// You can use opaque values like they aren't opaque too.
	const accountNumber = createAccountNumber();
	
	// This will not compile successfully.
	const newAccountNumber = accountNumber + 2;
	
	// As a side note, you can (and should) use recursive types for your opaque types to make them stronger and hopefully easier to type.
	type Person = {
	id: Opaque<number, Person>;
	name: string;
	};
	```
	</details>

- `UnwrapOpaque` - Revert an opaque type back to its original type by removing the readonly `[tag]`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTAQwI4CuKANHAKoB2A7lDmNvkQL5wBmUEIcA5EqgLSsUAZxjcA3AChJfNAEEAxgogEKMACrI0AXjgNCKADzcAynIBqASQByAcRPc4AHx4BhABIBRVwGkbt7lJuRWVVDS1uAD4pSWUKUTgQCAoURAAhRBCVNU1UAC44ACUUZSgAE0NKGjp9IkMssNyUSNIKAhAAIxQoSLhddEkzKzsTAoBOMeJJD28-OwKABgA6AEZJJhiAek24AHVgGAALFXgq2npcA1IjtFYIABt7iCpgCgBzOBQADzAoEWFgMk4FQVPcyghDhwqHAcAgtJ8oBwoEtYskEkkUog+olkqkMg0clolkN-CZxHBtnB1CYEUiCgAFDioWBY0wWUmOMoQERwCgQeDfYCiaSUuQwGAocAwV4fGAQOC4YTCGEUXnJfi1NCyBDys41S5EYHAR5wWhCtCw7XdJEo7W7ZIwe1QADW2L1F0YRlEUBl0SAA">TS Playground</a> | <a href="source/unwrap-opaque.d.ts">Source</a>
	</summary>

	```ts
	import type {Opaque, UnwrapOpaque} from 'type-fest';
	
	type AccountType = Opaque<'SAVINGS' | 'CHECKING', 'AccountType'>;
	
	const moneyByAccountType: Record<UnwrapOpaque<AccountType>, number> = {
	SAVINGS: 99,
	CHECKING: 0.1
	};
	
	// Without UnwrapOpaque, the following expression would throw a type error.
	const money = moneyByAccountType.SAVINGS; // TS error: Property 'SAVINGS' does not exist
	
	// Attempting to pass an non-Opaque type to UnwrapOpaque will raise a type error.
	type WontWork = UnwrapOpaque<string>;
	```
	</details>

- `Primitive` - Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/Q">TS Playground</a> | <a href="source/primitive.d.ts">Source</a>
	</summary>

	```ts
	```
	</details>

- `UnionToIntersection` - Convert a union type to an intersection type using [distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gVQHbAtgFQgElsYUoBnFAYxj2wF84AzKCEOAciVQFoWKSjC4BuAFDjeaHAzgBeDDAAWKABQBKAFxwAbhGAATZgB8MAcygoAhjDXWo5ncKjBs57XoPG4Z9EJprVB0AIwgIABsbJgkpZDRScipaenwFOFl8IkSKajoGAB5M7AA+CQB6cvkSpVVNHX0jUThLGzsHJzgXNw8G72aAoJRQ8KjrGKA">TS Playground</a> | <a href="source/union-to-intersection.d.ts">Source</a>
	</summary>

	```ts
	import type {UnionToIntersection} from 'type-fest';
	
	type Union = {the(): void} | {great(arg: string): void} | {escape: boolean};
	
	type Intersection = UnionToIntersection<Union>;
	//=> {the(): void; great(arg: string): void; escape: boolean};
	```
	</details>

- `UnknownRecord` - Represents an object with `unknown` value. You probably want this instead of `{}`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gVQHYGtsQDu2ASigMbQAmAvnAGZQQhwDkSqAtPSgM4ysA3AChh9AK7ZyMYBGwIIAKV5yAFBABGAKwowAXHBz4ipCtQCUGYVBQxxUeYoDKAeQByAOn5Rg2AObA9Ijq2rrmIjSiMEoq2KroABYoADbJEAashNDJVKw04cIA9IUAvAB8bOgAREmpEFV6VVlQOVU0rKISUjJycMC8LqHSqgBuAIbJ4igGksbE5gbjk2j9hngExGSUUFRWNnYOCMgoEPRwS1NwJddsmjrSrHAAZE-nE5cAhDfY4qkRov1BvcYPFamkMs0cnkCsVyggoFMAQMhiDWGCIKwYaUKvQJrwUEA">TS Playground</a> | <a href="source/unknown-record.d.ts">Source</a>
	</summary>

	```ts
	import type {UnknownRecord} from 'type-fest';
	
	function toJson(object: UnknownRecord) {
	return JSON.stringify(object);
	}
	
	toJson({hello: 'world'});
	//=> '{"hello":"world"}'
	
	function isObject(value: unknown): value is UnknownRecord {
	return typeof value === 'object' && value !== null;
	}
	
	isObject({hello: 'world'});
	//=> true
	
	isObject('hello');
	//=> false
	```
	</details>

### Type Guard

- `IfAny` - An if-else-like type that resolves depending on whether the given type is `any`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYEEB2iAvnNlBCHAORKoC02KAzjFQNwBQHtaAygBYQArgBsAJgCEUAFShC0AXjg4CiADwBDQgD5OAej0LtCOSi484A4eKkSNUOEpWE1VfBHhbEVADTVsEBC+1ABG9lS6HAZGoeFAA">TS Playground</a> | <a href="source/if-any.d.ts">Source</a>
	</summary>

	```ts
	import type {IfAny} from 'type-fest';
	
	type ShouldBeTrue = IfAny<any>;
	//=> true
	
	type ShouldBeBar = IfAny<'not any', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IfNever` - An if-else-like type that resolves depending on whether the given type is `never`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYDkUBuKUAvnNlBCHAORKoC02KAzjDQNwBQX9aAygAsIAVwA2AEwBCKACpQRaALxwc+IlAA8AO0LEAfNwD0RpfoQKUPPnCGjJMqQEMocFWr1aa2iPF0aaABpabAgIINoAIxcaQy4TMyiYoA">TS Playground</a> | <a href="source/if-never.d.ts">Source</a>
	</summary>

	```ts
	import type {IfNever} from 'type-fest';
	
	type ShouldBeTrue = IfNever<never>;
	//=> true
	
	type ShouldBeBar = IfNever<'not never', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IfUnknown` - An if-else-like type that resolves depending on whether the given type is `unknown`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYFUB2A1vhAO74C+c2UEIcA5EqgLTYoDOMDA3AFB9maAMoALCAFcANgBMAQigAqUCWgC8cHAWJl8AHglES5AHz8A9ObUmEKlAKFwxk2QrkBDKHA1ajuvQwk8IY65AwANIzYEBARjABGngxmfJbWCUlAA">TS Playground</a> | <a href="source/if-unknown.d.ts">Source</a>
	</summary>

	```ts
	import type {IfUnknown} from 'type-fest';
	
	type ShouldBeTrue = IfUnknown<unknown>;
	//=> true
	
	type ShouldBeBar = IfUnknown<'not unknown', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IsAny` - Returns a boolean for whether the given type is `any`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4EEB2iAvnAGZQQhwDkSqAtKStjNQNwBQHAxhPiwmQoAJgHkARgCsU3eAF4MAQwBccAIwAaOONUAmEouxxe-GJxMDFhCdNmqriOAvQr1WnXH2cOpAK75ZYD44AHMUGAAeUTgUAA8YFHxhIwAKHAJEKIA+GPjE5IQoXzQAfgwSVQAlGWhhCJYoYHwQrXxfEHEUKCyASi0AaVyEpKMAaxRECFI4aIVxyenRLJSIKVVRLXnVfp6MDihw3yh8OFXJAG15gF1OIi4LeDoRXCdQ8JSnsSkZGC1qRWoPU4AHpgXIcmp7nxLIQXgowjAUg4bD8-gCgRxQeC4A4gA">TS Playground</a> | <a href="source/is-any.d.ts">Source</a>
	</summary>

	```ts
	import type {IsAny} from 'type-fest';
	
	const typedObject = {a: 1, b: 2} as const;
	const anyObject: any = {a: 1, b: 2};
	
	function get<O extends (IsAny<O> extends true ? {} : Record<string, number>), K extends keyof O = keyof O>(obj: O, key: K) {
	return obj[key];
	}
	
	const typedA = get(typedObject, 'a');
	//=> 1
	
	const anyA = get(anyObject, 'a');
	//=> any
	```
	</details>

- `IsEqual` - Returns a boolean for whether the two given types are equal.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4FECOArgIYA2AvnAGZQQhwDkSqAtFStjAwNwBQvAegFwAKgAtg2BMjRQUMQlAB2U4nABGECKRTEl1aHADuY+aagJTcAObAAbin3EoUYojjAlAY1KEAJhyWaLYO+sAwKCAAdILCAAY4BCSkcR5ShNgofggQcF50YM5oMFYhjnDOru7E8JDY4cAQ+gAMFUrZJcH25eGRbR2m+nIKyghQhGjAVEHVcnAoRGQxzGiY3r4B2AA8AGpkE-MAHhHtUnLEfk2k1UqIANoAugA0cJgRIAB8cAC8vHu+aBQx0cfjOukuSmucDu-wmd2azzgUWRnnYFjknAevAA-K88ItSLt9ih4Yi3pEvkCTqCxhMcbSULwAFyvdb+DhbDEwF7kz7M6hkTLcIA">TS Playground</a> | <a href="source/is-equal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsEqual} from 'type-fest';
	
	// This type returns a boolean for whether the given array includes the given item.
	// `IsEqual` is used to compare the given array at position 0 and the given item and then return true if they are equal.
	type Includes<Value extends readonly any[], Item> =
	Value extends readonly [Value[0], ...infer rest]
	? IsEqual<Value[0], Item> extends true
	? true
	: Includes<rest, Item>
	: false;
	```
	</details>

- `IsStringLiteral` - Returns a boolean for whether the given type is a `string` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4GUZTAB2A5gDLAwpQCGANgL5wBmUEIcA5EqgLTMpsMTgG4AUGJ5oAwjTCV6wAF4oAJvkKkAPABU4KAB5Uiq7HCGaSAPjgBeODg3FylavV03Dx0wigBXNAB+OFl5GEUVDzgALnMCZ3ExAHokuAALGBgwbGiUkko0vwAjADoAY3YkxBoiAGsUFGI6CBMWpKIaGGAANxReVRpsNKSi5qKkkEGqKCTsKDKksrkFOmUUEphsMWY-IjKulrglsIiUXX0jFBMzACUUGlUWukQtC2crKwAKYjA-GFidABKWKhFZrdTxbQ6GzoMRQFAwPxQIhwb5EX4wErYVZlFCfAAMABo4ABGQEbCAAVTAqCgsmweMBcAA1HAfn8sTi8WSmYMQstwqsVBDLB5xAwJBUiEI4BA-hi7EcBadPpw0ig6M1iQB3aB0VQAQk4gPEKVsNk4AAkNVq4LqoPqjUA">TS Playground</a> | <a href="source/is-string-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsStringLiteral} from 'type-fest';
	
	type CapitalizedString<T extends string> = IsStringLiteral<T> extends true ? Capitalize<T> : string;
	
	// https://github.com/yankeeinlondon/native-dash/blob/master/src/capitalize.ts
	function capitalize<T extends Readonly<string>>(input: T): CapitalizedString<T> {
	return (input.slice(0, 1).toUpperCase() + input.slice(1)) as CapitalizedString<T>;
	}
	
	const output = capitalize('hello, world!');
	//=> 'Hello, world!'
	```
	</details>

- `IsNumericLiteral` - Returns a boolean for whether the given type is a `number` or `bigint` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4DkCuIKUwAxgDLAzECGANgL5wBmUEIcA5EqgLTMpsMTgG4AUGID0kuAAsYMMNgBc0gOZVZ+AEYA6Uu0nAAdhFI1jvNW3xgjxgVCgoAJrx6DJ2uhG2SQNELEkthQpJIe2F4QEHQoFrw+GuEAosYu2ADqmrow2GIecGkZ2TCyADwAKgBq9PgoADRwlcVZmnAoAB7U6dhwQiTGagB8cAC8YjV1aF09Gf0wg2piAPxwOADKiyZqlNRQ9FWtpbKjsyi9CFD1q+vYW0t7tHRVtXT1Z90X84s3a1PvGZfS4AAwAJOgBjsGBCWr0TgwQbdfigxMoWPRsKj0doYnELGi4LjYvFjISAfUOsD5sZCNpiLccAQiCQKFRnq9pp85n0UbdjppyuD0BSUIimnCSpphoTmJjsRi6FjxGJmPhjKQYMAIMYOvDBZhjGB8PBzpcoUM4AAfOC0kD0qBNYpUnkLJbDAAUJmNMHRhp9TW+6OKAEoMGJnDB8FBdcLvSbEbpvm0yh7vmHAkV9WVyv6TU70sNxAwJMmTh7ODRtKROE1ODWQ+JpGNRnyxGXNB6AIwAJgAzAAWACsADY68OR5xG1JJC2rjcxAZjEI9S5xlxe33OHBMxa1CqO6nK9XN7XV9Pm6NifjjEA">TS Playground</a> | <a href="source/is-numeric-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsNumericLiteral} from 'type-fest';
	
	// https://github.com/inocan-group/inferred-types/blob/master/src/types/boolean-logic/EndsWith.ts
	type EndsWith<TValue, TEndsWith extends string> =
	TValue extends string
	? IsStringLiteral<TEndsWith> extends true
	? IsStringLiteral<TValue> extends true
	? TValue extends `${string}${TEndsWith}`
	? true
	: false
	: boolean
	: boolean
	: TValue extends number
	? IsNumericLiteral<TValue> extends true
	? EndsWith<`${TValue}`, TEndsWith>
	: false
	: false;
	
	function endsWith<Input extends string | number, End extends string>(input: Input, end: End) {
	return `${input}`.endsWith(end) as EndsWith<Input, End>;
	}
	
	endsWith('abc', 'c');
	//=> true
	
	endsWith(123456, '456');
	//=> true
	
	const end = '123' as string;
	
	endsWith('abc123', end);
	//=> boolean
	```
	</details>

- `IsBooleanLiteral` - Returns a boolean for whether the given type is a `true` or `false` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4CEIQA2KAhgHYAywMKUJhAvnAGZQQhwDkSqAtMymwxOAbgBQYgMYQyQuMAAmcALxwAjACYAzOLE80AcRQxMCgDwBBbAGUYUYGQDmcFAA8aZBdjgAjAsXIAPhUxHHwiUkpqWnpLGzsHR2C3Dy8EKABXFDEAfjgrW3snF3cUT287LNy4AAMAEnR9CGZ5BQYasQAuBGQUZtauuDIMkB9aOAAfOCEix11mDLJJGGAZOEdjUzjCxJLU7z8I8hUWemwUQIAKCDAVmWwc7vQSeNnugoSnBgBKDDEoYwZKBkODXW6rWQ5AB0Lx2xTy9XQinacG6il+LzgRhM5g+s0C4gYEmksngw1GtFMJw2OMu33EAHoGcpgpotMT7vAZokqaoaaZLs9XolupUUD9Gczgpw2ZwJAoUJJCCQAXASXJMmQViAUOEAmRuod9eJ1fAUNQABaUpR8zYKQWwz6Obqa7W6-yRCViJksoYjMZQSbTJ1AA">TS Playground</a> | <a href="source/is-boolean-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsBooleanLiteral} from 'type-fest';
	
	const id = 123;
	
	type GetId<AsString extends boolean> =
	IsBooleanLiteral<AsString> extends true
	? AsString extends true
	? `${typeof id}`
	: typeof id
	: number | string;
	
	function getId<AsString extends boolean = false>(options?: {asString: AsString}) {
	return (options?.asString ? `${id}` : id) as GetId<AsString>;
	}
	
	const numberId = getId();
	//=> 123
	
	const stringId = getId({asString: true});
	//=> '123'
	
	declare const runtimeBoolean: boolean;
	const eitherId = getId({asString: runtimeBoolean});
	//=> number | string
	```
	</details>

- `IsSymbolLiteral` - Returns a boolean for whether the given type is a `symbol` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4GVEgBGEANgDLAwpQCGJAvnAGZQQhwDkSqAtEythgcA3AChR3NAHEUMADwB5QgCs4KAB5UAdgBNscAEooAxtB1zsBYiQA0cLQFci1AHx2A0ikRrNKXfoBrLwgmOCVlFzgAXlEcfCJSCipaEjlPREiNbT0EKAcUUQB+MJUAbXSAXVEALnsnQmoxUSYHLWMYYAgtOABzWUUVH2z9I1Moc0sE2zrnKDc4dKG-HKDEEJKIgAoIWvC7Vdr0gEoMUShZByhuiFLVirgafRl5PYWvFzF6cVMtQThJ6xJah0aJweLWTYcEiUYEkDhHMQ-P4A0gANTo+VqKJIoPBpEhADcMSh4U0+jBNuhStigSkKrUAIyMR5wJEwOw0mEpBGiAD0vKikQZ4nJlOpVjRxPpcCZD30bI5EpI6JI+R5-MFMwaUCAA">TS Playground</a> | <a href="source/is-symbol-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsSymbolLiteral} from 'type-fest';
	
	type Get<Obj extends Record<symbol, number>, Key extends keyof Obj> =
	IsSymbolLiteral<Key> extends true
	? Obj[Key]
	: number;
	
	function get<Obj extends Record<symbol, number>, Key extends keyof Obj>(o: Obj, key: Key) {
	return o[key] as Get<Obj, Key>;
	}
	
	const symbolLiteral = Symbol('literal');
	const symbolValue: symbol = Symbol('value');
	
	get({[symbolLiteral]: 1} as const, symbolLiteral);
	//=> 1
	
	get({[symbolValue]: 1} as const, symbolValue);
	//=> number
	```
	</details>

- `IsLiteral` - Returns a boolean for whether the given type is a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4BlgwpQCGANgL5wBmUEIcA5EqgLRUrYwMDcAULwHoBcABYwYYbAC4hAcwIiArgCMAdAGM6A4ADsI64jpazaisNp3soUFABMWzDgOWkIygSGKciA7FHUCjti+MFC6siykBERkwQDKocBguCjEtuGqMNi8KAAekLAIyGgJYcmp6TqyADwAggA0cABCAHxwALy8tXB5hDq22HCcYVW8APzNPbl9A0OJoxM4+IQkpHVtvSj9g6GKKONzI7JTM4NNcBM6KABuRHBScN2b23AABgAk6OcAZIfh5J9dFZHlQVuRXhcQSt7o9eA9huE4bCHrU+LwqIodOoYMAIDo-uU0uFqpgdGBFPBnrMEVVGqUkicttT5rIWgAKXTkmAPUlcxoIsAPelgACUGF4Nhgiig+M5FNUNjApGI6hQbNeAD1PgLwY0GAwxV44MKUkSqiSyRS6YkwC0+OR+ALTZVZGyGMRlOoAIwAJgAzAw9R71Aa+EJ2m0GL6A-xNDpOIcOoxg9GGHAjTTZGinRVwmzhkHPaHBAII38qkA">TS Playground</a> | <a href="source/is-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsLiteral} from 'type-fest';
	
	// https://github.com/inocan-group/inferred-types/blob/master/src/types/string-literals/StripLeading.ts
	export type StripLeading<A, B> =
	A extends string
	? B extends string
	? IsLiteral<A> extends true
	? string extends B ? never : A extends `${B & string}${infer After}` ? After : A
	: string
	: A
	: A;
	
	function stripLeading<Input extends string, Strip extends string>(input: Input, strip: Strip) {
	return input.replace(`^${strip}`, '') as StripLeading<Input, Strip>;
	}
	
	stripLeading('abc123', 'abc');
	//=> '123'
	
	const str = 'abc123' as string;
	
	stripLeading(str, 'abc');
	//=> string
	```
	</details>

- `IsNever` - Returns a boolean for whether the given type is `never`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4DkUBuKUAvnAGZQQhwDkSqAtOStjLQNwBQXDaAggDsAJgB5+AGjgAhAHxwAvF35wUADxgoR2BFACuKLgH4ZqjVuE6Y+wyesGuALgoBDADbZDz8u8-cuAPQBcAAWMDBg2I5BAObAMCF6AEYAdADG1AEuIoJgAQDKoGBuiAAqyCjCAUluEEkBIC5sxAHYUGkBfNit1sCCMdgpMNi8FXD8UCj5vf3YAKIAjnru4maa2nBsUH0xUtJrFjpbO-JKQmJcOPhEUKJzamluesIo4nuy8urrlroGcHY2ODeXwoCSXPCEYh3B5PF6iaRSfgfA4bexoAF-YEeQyyfx8OBzESYciLZZuUSYFE-Y79KQAeSpRxmMVOykm022s1JK0w9M+5lRNmMcEEkKgTjgBAgwGE-nIekEaRgwAgglURJJSx5jM2zPpOppLIAFH0wHoYM5eXAIOazRa4HSAJTOQnCYnc8lWunydBcYDkOAm3LmxQKBTW23mx0YLhgKhpViDdTxI0ABkd3BIXCzXAs7q1biNtBcSTStCkxdLtAzgQCCnkopuPDzmrJRZLZYrAEYAEwAZmr3CC9cl0uEQA">TS Playground</a> | <a href="source/is-never.d.ts">Source</a>
	</summary>

	```ts
	import type {IsNever} from 'type-fest';
	
	type And<A, B> =
	A extends true
	? B extends true
	? true
	: false
	: false;
	
	// https://github.com/andnp/SimplyTyped/blob/master/src/types/strings.ts
	type AreStringsEqual<A extends string, B extends string> =
	And<
	IsNever<Exclude<A, B>> extends true ? true : false,
	IsNever<Exclude<B, A>> extends true ? true : false
	>;
	
	type EndIfEqual<I extends string, O extends string> =
	AreStringsEqual<I, O> extends true
	? never
	: void;
	
	function endIfEqual<I extends string, O extends string>(input: I, output: O): EndIfEqual<I, O> {
	if (input === output) {
	process.exit(0);
	}
	}
	
	endIfEqual('abc', 'abc');
	//=> never
	
	endIfEqual('abc', '123');
	//=> void
	```
	</details>

### Utilities

- `Exact` - Create a type that does not allow extra properties, meaning it only allows properties that are explicitly declared.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gdgGxAQQMaomYA5AhgW2gF4oBvOAiALigGdgAnASzgHMBfAbgChuAzAK5xUwJgHs4UCUjQYseQgApcDVgMJxgtAPo14M9JhyUAlGXa8A9JagAVcBADKqZliiox+MAlwtaUXAAjMQFgKAgADwxafzAGMUgGUQh-AHcACwhJXEkxQIArCBEoBCZgCAZcBCgmWPiANyYAEwgmgDpuaRRDeUpFckoaAHIKQiGAGhqmmgBGdhMeayIAPigAA2a1mv9I6NorG3tIZ1cwprEUqDgxMI8vHxYA4NDwqJS6hIrktMzJYEyoHExI0Wk0oPUqgJoLUAuCVEwgghoIprmEclICkUwqVypUECYOh44PQanAIaUmgBJOBgF4kAaEYajCATKazLidRDdOTGJQscnNam04ALKDWKDYMThBjxBi0IA">TS Playground</a> | <a href="source/exact.d.ts">Source</a>
	</summary>

	```ts
	type OnlyAcceptName = {name: string};
	
	function onlyAcceptName(arguments_: OnlyAcceptName) {}
	
	// TypeScript complains about excess properties when an object literal is provided.
	onlyAcceptName({name: 'name', id: 1});
	//=> `id` is excess
	
	// TypeScript does not complain about excess properties when the provided value is a variable (not an object literal).
	const invalidInput = {name: 'name', id: 1};
	onlyAcceptName(invalidInput); // No errors
	```
	</details>

- `HasOptionalKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any optional fields.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcDyYMwEAdtgDYDSKiuANHIcWZTXfgGYC+cnUEEHADkSVAFpOKXDGEBuAFAKxaAKpgAJthgoAyiigA3YAGMUAHgCipYkjgoAHjtIbccCACMAVihMwAfHAAvBgKUCggEIYoAGLAKBQaAFxwOAREJOTUtLhWNsBIgY7OrghQAK4oCgD8cAAUnPGJKcyZbDlcebaI-gCUwYEACgIgwLgWhhDAGv4KKaQo0VAK3EA">TS Playground</a> | <a href="source/has-optional-keys.d.ts">Source</a>
	</summary>

	```ts
	import type {HasOptionalKeys, OptionalKeysOf} from 'type-fest';
	
	type UpdateService<Entity extends object> = {
	removeField: HasOptionalKeys<Entity> extends true
	? (field: OptionalKeysOf<Entity>) => Promise<void>
	: never
	}
	```
	</details>

- `HasReadonlyKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any readonly fields.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcBKK2AJhAHYA2iA0iorgDRyEnlW30DyAZgL5zcoEEHADkSVAFpuKXDFEBuAFBKJaAKphi2GCgDKKKADdgAYxQAeAKJkYwJHBQAPXWWK44EAEYArFKZgAPjgAXgwlKBQQCCMUADFgFApiAC44HAIiUkoaOlxrW3tEYOdXdwQoAFcUJQB+OAAKbkTktJZs9jyeArskQIBKUOCABSEQYFxLIwhgYkClNLIUWKglXiA">TS Playground</a> | <a href="source/has-readonly-keys.d.ts">Source</a>
	</summary>

	```ts
	import type {HasReadonlyKeys, ReadonlyKeysOf} from 'type-fest';
	
	type UpdateService<Entity extends object> = {
	removeField: HasReadonlyKeys<Entity> extends true
	? (field: ReadonlyKeysOf<Entity>) => Promise<void>
	: never
	}
	```
	</details>

- `HasRequiredKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any required fields.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcBKKAjgK7BQoAmA0iorgL5wBmUEIcA5EqgLTMpcMTgG4AUGJ5oA4igB2KKNhjQA8mBjAIc3AB4AKinAAbZWhQAPGPMq44EAEYArFAGMYAPjgBeDGLBsYACMAFxwciQgDoriARBgAExhQlDAcgDm4kwAZHAAFDgExGQUNHR6hiZmXpbWcrYIUCQoYgD8GNZV1mGVYKbWDGJh6J19Zq09RmMDAJTiYmnWUMzYrmi9-ShBfvGa2tjGAMokDgAK2EogE3ApaZligwtySytrcBtmCX4UpORUx2cLtgQMkYKkMlkJFI4Oo9jptr5ZAolCooLCtDoDFNNkEPOJoejtLgvoj5IplGoNBiKtjPniJK4ifBdgBBMKE+E+PxxYJhAAMABp-IEklwABbATgPcSMnTMjQAIXZVKJCO5gVCcEFwvios4Es4QtGm2GgwYMqZ9g0AGFlXDcGr0DreVqhTy9QajbTujsVXIDgDzpcwpxdhiDnAAG4HZpSs3zWVCK0wAAidupJPV8U12vdIc9km9KGGYh+JX+JyDwJDZb+lCjMZQcelQA">TS Playground</a> | <a href="source/has-required-keys.d.ts">Source</a>
	</summary>

	```ts
	import type {HasRequiredKeys} from 'type-fest';
	
	type GeneratorOptions<Template extends object> = {
	prop1: number;
	prop2: string;
	} & (HasRequiredKeys<Template> extends true
	? {template: Template}
	: {template?: Template});
	
	interface Template1 {
	optionalSubParam?: string;
	}
	
	interface Template2 {
	requiredSubParam: string;
	}
	
	type Options1 = GeneratorOptions<Template1>;
	type Options2 = GeneratorOptions<Template2>;
	
	const optA: Options1 = {
	prop1: 0,
	prop2: 'hi'
	};
	const optB: Options1 = {
	prop1: 0,
	prop2: 'hi',
	template: {}
	};
	const optC: Options1 = {
	prop1: 0,
	prop2: 'hi',
	template: {
	optionalSubParam: 'optional value'
	}
	};
	
	const optD: Options2 = {
	prop1: 0,
	prop2: 'hi',
	template: {
	requiredSubParam: 'required value'
	}
	};
	```
	</details>

- `HasWritableKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any writable fields.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcDqUwM2ARgDYoDSKiuANHIcWZTXQPIBmAvnF1Agg4AciSoAtFxS4YIgNwAoReLQBVMABNsMFAGUUUAG7AAxigA8AUQB2MYojgoAHrpubccCKQBWKUzAAfHAAvBiKUCggEEYoAGLAKOSaAFxwOAREJBTUtLjWdg7BLm4eCFAAriiKAPxwABRciclpzNlsedwF9kiBAJShwQAKgiDAuJZGEMCagYppNiixUIo8QA">TS Playground</a> | <a href="source/has-writable-keys.d.ts">Source</a>
	</summary>

	```ts
	import type {HasWritableKeys, WritableKeysOf} from 'type-fest';
	
	type UpdateService<Entity extends object> = {
	removeField: HasWritableKeys<Entity> extends true
	? (field: WritableKeysOf<Entity>) => Promise<void>
	: never
	}
	```
	</details>

- `IfAny` - An if-else-like type that resolves depending on whether the given type is `any`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYEEB2iAvnNlBCHAORKoC02KAzjFQNwBQHtaAygBYQArgBsAJgCEUAFShC0AXjg4CiADwBDQgD5OAej0LtCOSi484A4eKkSNUOEpWE1VfBHhbEVADTVsEBC+1ABG9lS6HAZGoeFAA">TS Playground</a> | <a href="source/if-any.d.ts">Source</a>
	</summary>

	```ts
	import type {IfAny} from 'type-fest';
	
	type ShouldBeTrue = IfAny<any>;
	//=> true
	
	type ShouldBeBar = IfAny<'not any', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IfNever` - An if-else-like type that resolves depending on whether the given type is `never`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYDkUBuKUAvnNlBCHAORKoC02KAzjDQNwBQX9aAygAsIAVwA2AEwBCKACpQRaALxwc+IlAA8AO0LEAfNwD0RpfoQKUPPnCGjJMqQEMocFWr1aa2iPF0aaABpabAgIINoAIxcaQy4TMyiYoA">TS Playground</a> | <a href="source/if-never.d.ts">Source</a>
	</summary>

	```ts
	import type {IfNever} from 'type-fest';
	
	type ShouldBeTrue = IfNever<never>;
	//=> true
	
	type ShouldBeBar = IfNever<'not never', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IfUnknown` - An if-else-like type that resolves depending on whether the given type is `unknown`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQGYFUB2A1vhAO74C+c2UEIcA5EqgLTYoDOMDA3AFB9maAMoALCAFcANgBMAQigAqUCWgC8cHAWJl8AHglES5AHz8A9ObUmEKlAKFwxk2QrkBDKHA1ajuvQwk8IY65AwANIzYEBARjABGngxmfJbWCUlAA">TS Playground</a> | <a href="source/if-unknown.d.ts">Source</a>
	</summary>

	```ts
	import type {IfUnknown} from 'type-fest';
	
	type ShouldBeTrue = IfUnknown<unknown>;
	//=> true
	
	type ShouldBeBar = IfUnknown<'not unknown', 'foo', 'bar'>;
	//=> 'bar'
	```
	</details>

- `IsAny` - Returns a boolean for whether the given type is `any`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4EEB2iAvnAGZQQhwDkSqAtKStjNQNwBQHAxhPiwmQoAJgHkARgCsU3eAF4MAQwBccAIwAaOONUAmEouxxe-GJxMDFhCdNmqriOAvQr1WnXH2cOpAK75ZYD44AHMUGAAeUTgUAA8YFHxhIwAKHAJEKIA+GPjE5IQoXzQAfgwSVQAlGWhhCJYoYHwQrXxfEHEUKCyASi0AaVyEpKMAaxRECFI4aIVxyenRLJSIKVVRLXnVfp6MDihw3yh8OFXJAG15gF1OIi4LeDoRXCdQ8JSnsSkZGC1qRWoPU4AHpgXIcmp7nxLIQXgowjAUg4bD8-gCgRxQeC4A4gA">TS Playground</a> | <a href="source/is-any.d.ts">Source</a>
	</summary>

	```ts
	import type {IsAny} from 'type-fest';
	
	const typedObject = {a: 1, b: 2} as const;
	const anyObject: any = {a: 1, b: 2};
	
	function get<O extends (IsAny<O> extends true ? {} : Record<string, number>), K extends keyof O = keyof O>(obj: O, key: K) {
	return obj[key];
	}
	
	const typedA = get(typedObject, 'a');
	//=> 1
	
	const anyA = get(anyObject, 'a');
	//=> any
	```
	</details>

- `IsEqual` - Returns a boolean for whether the two given types are equal.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4FECOArgIYA2AvnAGZQQhwDkSqAtFStjAwNwBQvAegFwAKgAtg2BMjRQUMQlAB2U4nABGECKRTEl1aHADuY+aagJTcAObAAbin3EoUYojjAlAY1KEAJhyWaLYO+sAwKCAAdILCAAY4BCSkcR5ShNgofggQcF50YM5oMFYhjnDOru7E8JDY4cAQ+gAMFUrZJcH25eGRbR2m+nIKyghQhGjAVEHVcnAoRGQxzGiY3r4B2AA8AGpkE-MAHhHtUnLEfk2k1UqIANoAugA0cJgRIAB8cAC8vHu+aBQx0cfjOukuSmucDu-wmd2azzgUWRnnYFjknAevAA-K88ItSLt9ih4Yi3pEvkCTqCxhMcbSULwAFyvdb+DhbDEwF7kz7M6hkTLcIA">TS Playground</a> | <a href="source/is-equal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsEqual} from 'type-fest';
	
	// This type returns a boolean for whether the given array includes the given item.
	// `IsEqual` is used to compare the given array at position 0 and the given item and then return true if they are equal.
	type Includes<Value extends readonly any[], Item> =
	Value extends readonly [Value[0], ...infer rest]
	? IsEqual<Value[0], Item> extends true
	? true
	: Includes<rest, Item>
	: false;
	```
	</details>

- `IsStringLiteral` - Returns a boolean for whether the given type is a `string` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4GUZTAB2A5gDLAwpQCGANgL5wBmUEIcA5EqgLTMpsMTgG4AUGJ5oAwjTCV6wAF4oAJvkKkAPABU4KAB5Uiq7HCGaSAPjgBeODg3FylavV03Dx0wigBXNAB+OFl5GEUVDzgALnMCZ3ExAHokuAALGBgwbGiUkko0vwAjADoAY3YkxBoiAGsUFGI6CBMWpKIaGGAANxReVRpsNKSi5qKkkEGqKCTsKDKksrkFOmUUEphsMWY-IjKulrglsIiUXX0jFBMzACUUGlUWukQtC2crKwAKYjA-GFidABKWKhFZrdTxbQ6GzoMRQFAwPxQIhwb5EX4wErYVZlFCfAAMABo4ABGQEbCAAVTAqCgsmweMBcAA1HAfn8sTi8WSmYMQstwqsVBDLB5xAwJBUiEI4BA-hi7EcBadPpw0ig6M1iQB3aB0VQAQk4gPEKVsNk4AAkNVq4LqoPqjUA">TS Playground</a> | <a href="source/is-string-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsStringLiteral} from 'type-fest';
	
	type CapitalizedString<T extends string> = IsStringLiteral<T> extends true ? Capitalize<T> : string;
	
	// https://github.com/yankeeinlondon/native-dash/blob/master/src/capitalize.ts
	function capitalize<T extends Readonly<string>>(input: T): CapitalizedString<T> {
	return (input.slice(0, 1).toUpperCase() + input.slice(1)) as CapitalizedString<T>;
	}
	
	const output = capitalize('hello, world!');
	//=> 'Hello, world!'
	```
	</details>

- `IsNumericLiteral` - Returns a boolean for whether the given type is a `number` or `bigint` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4DkCuIKUwAxgDLAzECGANgL5wBmUEIcA5EqgLTMpsMTgG4AUGID0kuAAsYMMNgBc0gOZVZ+AEYA6Uu0nAAdhFI1jvNW3xgjxgVCgoAJrx6DJ2uhG2SQNELEkthQpJIe2F4QEHQoFrw+GuEAosYu2ADqmrow2GIecGkZ2TCyADwAKgBq9PgoADRwlcVZmnAoAB7U6dhwQiTGagB8cAC8YjV1aF09Gf0wg2piAPxwOADKiyZqlNRQ9FWtpbKjsyi9CFD1q+vYW0t7tHRVtXT1Z90X84s3a1PvGZfS4AAwAJOgBjsGBCWr0TgwQbdfigxMoWPRsKj0doYnELGi4LjYvFjISAfUOsD5sZCNpiLccAQiCQKFRnq9pp85n0UbdjppyuD0BSUIimnCSpphoTmJjsRi6FjxGJmPhjKQYMAIMYOvDBZhjGB8PBzpcoUM4AAfOC0kD0qBNYpUnkLJbDAAUJmNMHRhp9TW+6OKAEoMGJnDB8FBdcLvSbEbpvm0yh7vmHAkV9WVyv6TU70sNxAwJMmTh7ODRtKROE1ODWQ+JpGNRnyxGXNB6AIwAJgAzAAWACsADY68OR5xG1JJC2rjcxAZjEI9S5xlxe33OHBMxa1CqO6nK9XN7XV9Pm6NifjjEA">TS Playground</a> | <a href="source/is-numeric-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsNumericLiteral} from 'type-fest';
	
	// https://github.com/inocan-group/inferred-types/blob/master/src/types/boolean-logic/EndsWith.ts
	type EndsWith<TValue, TEndsWith extends string> =
	TValue extends string
	? IsStringLiteral<TEndsWith> extends true
	? IsStringLiteral<TValue> extends true
	? TValue extends `${string}${TEndsWith}`
	? true
	: false
	: boolean
	: boolean
	: TValue extends number
	? IsNumericLiteral<TValue> extends true
	? EndsWith<`${TValue}`, TEndsWith>
	: false
	: false;
	
	function endsWith<Input extends string | number, End extends string>(input: Input, end: End) {
	return `${input}`.endsWith(end) as EndsWith<Input, End>;
	}
	
	endsWith('abc', 'c');
	//=> true
	
	endsWith(123456, '456');
	//=> true
	
	const end = '123' as string;
	
	endsWith('abc123', end);
	//=> boolean
	```
	</details>

- `IsBooleanLiteral` - Returns a boolean for whether the given type is a `true` or `false` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4CEIQA2KAhgHYAywMKUJhAvnAGZQQhwDkSqAtMymwxOAbgBQYgMYQyQuMAAmcALxwAjACYAzOLE80AcRQxMCgDwBBbAGUYUYGQDmcFAA8aZBdjgAjAsXIAPhUxHHwiUkpqWnpLGzsHR2C3Dy8EKABXFDEAfjgrW3snF3cUT287LNy4AAMAEnR9CGZ5BQYasQAuBGQUZtauuDIMkB9aOAAfOCEix11mDLJJGGAZOEdjUzjCxJLU7z8I8hUWemwUQIAKCDAVmWwc7vQSeNnugoSnBgBKDDEoYwZKBkODXW6rWQ5AB0Lx2xTy9XQinacG6il+LzgRhM5g+s0C4gYEmksngw1GtFMJw2OMu33EAHoGcpgpotMT7vAZokqaoaaZLs9XolupUUD9Gczgpw2ZwJAoUJJCCQAXASXJMmQViAUOEAmRuod9eJ1fAUNQABaUpR8zYKQWwz6Obqa7W6-yRCViJksoYjMZQSbTJ1AA">TS Playground</a> | <a href="source/is-boolean-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsBooleanLiteral} from 'type-fest';
	
	const id = 123;
	
	type GetId<AsString extends boolean> =
	IsBooleanLiteral<AsString> extends true
	? AsString extends true
	? `${typeof id}`
	: typeof id
	: number | string;
	
	function getId<AsString extends boolean = false>(options?: {asString: AsString}) {
	return (options?.asString ? `${id}` : id) as GetId<AsString>;
	}
	
	const numberId = getId();
	//=> 123
	
	const stringId = getId({asString: true});
	//=> '123'
	
	declare const runtimeBoolean: boolean;
	const eitherId = getId({asString: runtimeBoolean});
	//=> number | string
	```
	</details>

- `IsSymbolLiteral` - Returns a boolean for whether the given type is a `symbol` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4GVEgBGEANgDLAwpQCGJAvnAGZQQhwDkSqAtEythgcA3AChR3NAHEUMADwB5QgCs4KAB5UAdgBNscAEooAxtB1zsBYiQA0cLQFci1AHx2A0ikRrNKXfoBrLwgmOCVlFzgAXlEcfCJSCipaEjlPREiNbT0EKAcUUQB+MJUAbXSAXVEALnsnQmoxUSYHLWMYYAgtOABzWUUVH2z9I1Moc0sE2zrnKDc4dKG-HKDEEJKIgAoIWvC7Vdr0gEoMUShZByhuiFLVirgafRl5PYWvFzF6cVMtQThJ6xJah0aJweLWTYcEiUYEkDhHMQ-P4A0gANTo+VqKJIoPBpEhADcMSh4U0+jBNuhStigSkKrUAIyMR5wJEwOw0mEpBGiAD0vKikQZ4nJlOpVjRxPpcCZD30bI5EpI6JI+R5-MFMwaUCAA">TS Playground</a> | <a href="source/is-symbol-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsSymbolLiteral} from 'type-fest';
	
	type Get<Obj extends Record<symbol, number>, Key extends keyof Obj> =
	IsSymbolLiteral<Key> extends true
	? Obj[Key]
	: number;
	
	function get<Obj extends Record<symbol, number>, Key extends keyof Obj>(o: Obj, key: Key) {
	return o[key] as Get<Obj, Key>;
	}
	
	const symbolLiteral = Symbol('literal');
	const symbolValue: symbol = Symbol('value');
	
	get({[symbolLiteral]: 1} as const, symbolLiteral);
	//=> 1
	
	get({[symbolValue]: 1} as const, symbolValue);
	//=> number
	```
	</details>

- `IsLiteral` - Returns a boolean for whether the given type is a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4BlgwpQCGANgL5wBmUEIcA5EqgLRUrYwMDcAULwHoBcABYwYYbAC4hAcwIiArgCMAdAGM6A4ADsI64jpazaisNp3soUFABMWzDgOWkIygSGKciA7FHUCjti+MFC6siykBERkwQDKocBguCjEtuGqMNi8KAAekLAIyGgJYcmp6TqyADwAggA0cABCAHxwALy8tXB5hDq22HCcYVW8APzNPbl9A0OJoxM4+IQkpHVtvSj9g6GKKONzI7JTM4NNcBM6KABuRHBScN2b23AABgAk6OcAZIfh5J9dFZHlQVuRXhcQSt7o9eA9huE4bCHrU+LwqIodOoYMAIDo-uU0uFqpgdGBFPBnrMEVVGqUkicttT5rIWgAKXTkmAPUlcxoIsAPelgACUGF4Nhgiig+M5FNUNjApGI6hQbNeAD1PgLwY0GAwxV44MKUkSqiSyRS6YkwC0+OR+ALTZVZGyGMRlOoAIwAJgAzAw9R71Aa+EJ2m0GL6A-xNDpOIcOoxg9GGHAjTTZGinRVwmzhkHPaHBAII38qkA">TS Playground</a> | <a href="source/is-literal.d.ts">Source</a>
	</summary>

	```ts
	import type {IsLiteral} from 'type-fest';
	
	// https://github.com/inocan-group/inferred-types/blob/master/src/types/string-literals/StripLeading.ts
	export type StripLeading<A, B> =
	A extends string
	? B extends string
	? IsLiteral<A> extends true
	? string extends B ? never : A extends `${B & string}${infer After}` ? After : A
	: string
	: A
	: A;
	
	function stripLeading<Input extends string, Strip extends string>(input: Input, strip: Strip) {
	return input.replace(`^${strip}`, '') as StripLeading<Input, Strip>;
	}
	
	stripLeading('abc123', 'abc');
	//=> '123'
	
	const str = 'abc123' as string;
	
	stripLeading(str, 'abc');
	//=> string
	```
	</details>

- `IsNever` - Returns a boolean for whether the given type is `never`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4DkUBuKUAvnAGZQQhwDkSqAtOStjLQNwBQXDaAggDsAJgB5+AGjgAhAHxwAvF35wUADxgoR2BFACuKLgH4ZqjVuE6Y+wyesGuALgoBDADbZDz8u8-cuAPQBcAAWMDBg2I5BAObAMCF6AEYAdADG1AEuIoJgAQDKoGBuiAAqyCjCAUluEEkBIC5sxAHYUGkBfNit1sCCMdgpMNi8FXD8UCj5vf3YAKIAjnru4maa2nBsUH0xUtJrFjpbO-JKQmJcOPhEUKJzamluesIo4nuy8urrlroGcHY2ODeXwoCSXPCEYh3B5PF6iaRSfgfA4bexoAF-YEeQyyfx8OBzESYciLZZuUSYFE-Y79KQAeSpRxmMVOykm022s1JK0w9M+5lRNmMcEEkKgTjgBAgwGE-nIekEaRgwAgglURJJSx5jM2zPpOppLIAFH0wHoYM5eXAIOazRa4HSAJTOQnCYnc8lWunydBcYDkOAm3LmxQKBTW23mx0YLhgKhpViDdTxI0ABkd3BIXCzXAs7q1biNtBcSTStCkxdLtAzgQCCnkopuPDzmrJRZLZYrAEYAEwAZmr3CC9cl0uEQA">TS Playground</a> | <a href="source/is-never.d.ts">Source</a>
	</summary>

	```ts
	import type {IsNever} from 'type-fest';
	
	type And<A, B> =
	A extends true
	? B extends true
	? true
	: false
	: false;
	
	// https://github.com/andnp/SimplyTyped/blob/master/src/types/strings.ts
	type AreStringsEqual<A extends string, B extends string> =
	And<
	IsNever<Exclude<A, B>> extends true ? true : false,
	IsNever<Exclude<B, A>> extends true ? true : false
	>;
	
	type EndIfEqual<I extends string, O extends string> =
	AreStringsEqual<I, O> extends true
	? never
	: void;
	
	function endIfEqual<I extends string, O extends string>(input: I, output: O): EndIfEqual<I, O> {
	if (input === output) {
	process.exit(0);
	}
	}
	
	endIfEqual('abc', 'abc');
	//=> never
	
	endIfEqual('abc', '123');
	//=> void
	```
	</details>

- `IsUnknown` - Returns a boolean for whether the given type is `unknown`.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQM4FUB2A1vhAO74C+cAZlBCHAORKoC01K2MjA3AFB8A9ILgALGDDDYAXMIDmwGKICuAIwB0AY3qCwAQwBWKTXtJ6AboJjB8iVnIA2EVXoesu0FINVPVgkHpcKFCC2FCagjYAJigAHuow2HwsaACCmtYQ+AA8ACoAyjB6MCgANHC5AAp6iE56UXAAvHDmEMBRAHxNfDgExGQ5VTV1nXBxJfhR2AhQyih8APxwABRcxSjSFYXrAJRNXQVFJaV8m6tHG1sX5fq1EPWbQ3f1e40H2yX8fJoOgdOFnjyHxQXXQ3yyXFmGWgyzAUGA5nWcDWJUewL26AoAjixmUJTy1WeDWarXaHWWegywCym3SmUGwPKTxGHRuw3uUQWj0JIx2aIuGGSomA2HUKLQzUp9OWShFYuucFuvP4UBQMGUUHwCGFovF-CxQhE6mNcAgSmCcBAatEECmfAN2nwXGRME8TTg+BQpDgANVy3QiIcc02AEYKDt+DEfnpVXBHc7sPQUABRWIlTWuAAixT0m2URBI5C+HlV6hxmjxKHOSLeKwDrmDLvW6kDczgAGo4GGdhHDbWAAbMjn9uAiuD90lRfsCEsoMuxXElZbV46K9kvfZ11uXcUthtoTtKjnh8oAVl7wgHQ-qI7H-dP074s-ni6rK7Ka6Jry6-u3m1324dp+IwnsiSapum+BZjmF6CLWyZQHQUAyOOUrUvgt7TP2778rsm6HOs-ZAA">TS Playground</a> | <a href="source/is-unknown.d.ts">Source</a>
	</summary>

	```ts
	import type {IsUnknown} from 'type-fest';
	
	// https://github.com/pajecawav/tiny-global-store/blob/master/src/index.ts
	type Action<TState, TPayload = void> =
	IsUnknown<TPayload> extends true
	? (state: TState) => TState,
	: (state: TState, payload: TPayload) => TState;
	
	class Store<TState> {
	constructor(private state: TState) {}
	
	execute<TPayload = void>(action: Action<TState, TPayload>, payload?: TPayload): TState {
	this.state = action(this.state, payload);
	return this.state;
	}
	
	// ... other methods
	}
	
	const store = new Store({value: 1});
	declare const someExternalData: unknown;
	
	store.execute(state => ({value: state.value + 1}));
	//=> `TPayload` is `void`
	
	store.execute((state, payload) => ({value: state.value + payload}), 5);
	//=> `TPayload` is `5`
	
	store.execute((state, payload) => ({value: state.value + payload}), someExternalData);
	//=> Errors: `action` is `(state: TState) => TState`
	```
	</details>

- `MergeDeep` - Merge two objects or two arrays/tuples recursively into a new type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igERRTAF84AzKCEOAciVQFoKUBnGOgbgCgfG0AMQgQ4AXgw8ANsFYAuOADsAriABGOXsBgoQbBRyjBFuANoBdXgEMF6NQZhGTXOAGMFakVJRXFLgCYKKuo4FqS84XzGOlAUVq5oAEJWUJKKViAoDk64Wjp6QaoaUBbWtvZKRZpwgXCeEN6+YRF8AnDCEMmpEth4hMRgADwdADRwXQB8vAD005KzcACQMvKVIVAzc4vpmdnGuTwLi9q6+mvFpYdbNhgVwcUu7nVePn41Hi9N5pELpK3IQhEXXEcF6+CIJGGIjGXTG6BSUCsiDBKEwEH8WXobDAUB8-jopCmV3mWxWmPummJ2wymMM+02SxOBTgAAo6SY4AAfc44ACUlyONzshXWjw+DVeAQULIpqW59Uain53wZpCAA">TS Playground</a> | <a href="source/merge-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {MergeDeep} from 'type-fest';
	
	type Foo = {
	life: number;
	items: string[];
	a: {b: string; c: boolean; d: number[]};
	};
	
	interface Bar {
	name: string;
	items: number[];
	a: {b: number; d: boolean[]};
	}
	
	type FooBar = MergeDeep<Foo, Bar>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: number[];
	// 	a: {b: number; c: boolean; d: boolean[]};
	// }
	
	type FooBar = MergeDeep<Foo, Bar, {arrayMergeMode: 'spread'}>;
	// {
	// 	life: number;
	// 	name: string;
	// 	items: (string | number)[];
	// 	a: {b: number; c: boolean; d: (number | boolean)[]};
	// }
	```
	</details>

- `OptionalKeysOf` - Extract all optional keys from the given type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTDYEB2AhgDYDSKiAzpgGYA0cAogB4DGKOAvnDVBCHADkSVAFoaKSjEEBuAFBzg+GCig1C7OAFVKqjHKIgUALjhSoSgObzKAVyiGTZmBfzWFxW6wDWiAHK2IABGqgD8pviBIVDynAqsBFJwAEqMALKYAGqMAPoAYgCSjAAyACJwALxwAMqIwRDEABSCUCggEABuaDTAKMQAJmZ1QQ2CAJTyImhaYP2EKtiq83j4ADyMysBIcCjMKvj9lHAQQQBWKKwwAHyVTGwcMKsACoSwwCTrm0hXDNi4BCRyFRaJ9cN8bgAyfQAbSBcCUcD+K0BFGoNFBW0QVwAuuEmF9ELCKNi4AAfBDIFAQGgpdJZXKFEqlWLyOQJfBJWyzeYoACMphmcwWqCgywIqx0qhuVXQBkIRlMggAgsRgOxBHJOKz2ZzuSoAEwCvUoRai-5rSVQaX6RyKgBCJ0EdDknh8-iiqlMqQy2XyRTKmpkQA">TS Playground</a> | <a href="source/optional-keys-of.d.ts">Source</a>
	</summary>

	```ts
	import type {OptionalKeysOf, Except} from 'type-fest';
	
	interface User {
	name: string;
	surname: string;
	
	luckyNumber?: number;
	}
	
	const REMOVE_FIELD = Symbol('remove field symbol');
	type UpdateOperation<Entity extends object> = Except<Partial<Entity>, OptionalKeysOf<Entity>> & {
	[Key in OptionalKeysOf<Entity>]?: Entity[Key] | typeof REMOVE_FIELD;
	};
	
	const update1: UpdateOperation<User> = {
	name: 'Alice'
	};
	
	const update2: UpdateOperation<User> = {
	name: 'Bob',
	luckyNumber: REMOVE_FIELD
	};
	```
	</details>

- `ReadonlyKeysOf` - Extract all readonly keys from the given type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQQwCYQB2ANogNIqIDOA8gGYC+cdUEIcA5EqgLR0pUYHANwAoUcEIwUUOjgDGaAKpUZGUYRwgUALjiCokgOZiqAVyibteg8bFRcBEojjA8ewmZAAjGWIbi3MpgeDjS2FSQhKoAPACiUsBIcCgAHtKEeFRwEN4AVijyMAB8cAC8cAAKwPIA1vGJSAA0cNj4RKQU1PQNMEmIxcViovJEgnBmIWEoAIx6SlPhAlGxKjKlFegS7nAzAEwAzE2iDMJAA">TS Playground</a> | <a href="source/readonly-keys-of.d.ts">Source</a>
	</summary>

	```ts
	import type {ReadonlyKeysOf} from 'type-fest';
	
	interface User {
	name: string;
	surname: string;
	readonly id: number;
	}
	
	type UpdateResponse<Entity extends object> = Pick<Entity, ReadonlyKeysOf<Entity>>;
	
	const update1: UpdateResponse<User> = {
	id: 123,
	};
	```
	</details>

- `ReadonlyTuple` - Create a type that represents a read-only tuple of the given type and length.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMCGATCA7ANgTwBUBXMXFAXzgDMoIQ4ByGfMFAWmpQGcZGBuAFCCWbOADEU2AMbBsAc0LoGAXjipMOAiTIoAPLyhz5AGjgBmAHxDB0nLzjziPGJJnGlaEAC4JU2QqeqnAA2owAUhDcABaMZowAssDS0WgouHFMSBAARiiwjAC6NnbYDtH0KG4Bisq+1R7KcGphAOIo0PIomREQ0dhFQgD0QyqWcPl0UHCEAMoATObz876ErChwhsYhhXDA3HDYEPBo3NzA8thoOeRwMBB360wNgcqMwk4uL7VeAHRgxBiAApGLMvIwAJTDUbjSbQGYLczmACcvgACnQ2LB8EwATFGHAsDxDscJgAPfbwHCPMSMb5BRhAA">TS Playground</a> | <a href="source/readonly-tuple.d.ts">Source</a>
	</summary>

	```ts
	import {ReadonlyTuple} from 'type-fest';
	
	type FencingTeam = ReadonlyTuple<string, 3>;
	
	const guestFencingTeam: FencingTeam = ['Josh', 'Michael', 'Robert'];
	
	const homeFencingTeam: FencingTeam = ['George', 'John'];
	//=> error TS2322: Type string[] is not assignable to type 'FencingTeam'
	
	guestFencingTeam.push('Sam');
	//=> error TS2339: Property 'push' does not exist on type 'FencingTeam'
	```
	</details>

- `RequiredDeep` - Create a type from another type with all keys and nested keys set to required.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmAIiimAL5wBmUEIcA5EqgLS0oDOMzA3AChBbNAGUUMGMAB2Ac25wAvBhEoAHjACixYDGgB+AFyraEGTDHAAXimNwZeEACMUUOAB84eGcRS1ZEiEzCwBhCAAbQxNeKFk5T29ff0DiYPMYAHUUYDkACxh7Rxc3RJ8-AJkgwSpBAEM8fQBjRjAIyTsTZwhIlDqZMuTK6ob9bjqAN064bt7+wYrUoSohEWQ0bHxCEgkpeMUVTYIiMgowAB5d6XluAD4hAHoHhHW4I+3iK-3lVSe4AEgYBptLp9FATOhBH9-v8QpYbCgTMVXFBHs8YXDwlFwXBYvE0QDYRlsrkCkinCiCf9atDRhAWuB2kCuj12v0qXTxlMWXMZASqEA">TS Playground</a> | <a href="source/required-deep.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredDeep} from 'type-fest';
	
	type Settings = {
	textEditor?: {
	fontSize?: number | undefined;
	fontColor?: string | undefined;
	fontWeight?: number | undefined;
	}
	autocomplete?: boolean | undefined;
	autosave?: boolean | undefined;
	};
	
	type RequiredSettings = RequiredDeep<Settings>;
	// type RequiredSettings = {
	// 	textEditor: {
	// 		fontSize: number;
	// 		fontColor: string;
	// 		fontWeight: number;
	// 	}
	// 	autocomplete: boolean;
	// 	autosave: boolean;
	// }
	```
	</details>

- `RequiredKeysOf` - Extract all required keys from the given type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmA0iogM4DyAZgL5y1QQhwDkSqAtLSpTHYBuAFAjiKAMYAbAIZEmeAHaSYwCEriSismCgBqs6cGK71SgDwBRJWqRwUADz1LilOBABGAKykwANHDkiA7OKK7u2PiEJME0tNa2wEgAfHAAvHBRBERkFPGJdogpKQAUtMAo0sQAXEEUgQBuRia60HWlzdJ4KHU2RQDawQC6AJQZaZ4QENIoskqjdYbGpjDQAGJKoiLAtihQtLKSaACqlPsYIkqyIL1wAlC7AOailHhQ17d1D8-b3ZIAa0QADk8CBPPsAPx1JRgiFQUT0MSSDQCOBdVprKAARgyWh0emWmPMFjO+zK7E+KHYTSMPQm6LpKAAdLMlE8YAALOAWOAAJgArKNRCilGiMatoHy8do5oSWqsSWSoBS3h8btTad00Ok0l0eqzwhzubzBcKgA">TS Playground</a> | <a href="source/required-keys-of.d.ts">Source</a>
	</summary>

	```ts
	import type {RequiredKeysOf} from 'type-fest';
	
	declare function createValidation<Entity extends object, Key extends RequiredKeysOf<Entity> = RequiredKeysOf<Entity>>(field: Key, validator: (value: Entity[Key]) => boolean): ValidatorFn;
	
	interface User {
	name: string;
	surname: string;
	
	luckyNumber?: number;
	}
	
	const validator1 = createValidation<User>('name', value => value.length < 25);
	const validator2 = createValidation<User>('surname', value => value.length < 25);
	```
	</details>

- `TaggedUnion` - Create a union of types that share a common discriminant property.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFQIYHNcoAmAqgHbASkC+cAZlBCHAORKoC0tKAzjMwNwAoQWzQ58RADwAxYCgA2hbnBQAPGClJK4AJRQBjaIUm8owUrgA0cAK6kA1qQgB3UgD44AXjjiCJcpSSrMgozNayCkpuwgD0MT4AFmJ4fmQUpLYwwPLASHBQRDb6PAhJcNggEHbwELRwAEYQ2ShQYPLYGnCkKERECBBw+gUdaNgIKX126XDOuQlwIDbyWW1oICgg9S3c1iDY9ua4pWiGhGvQJ5T6wNwoAHQiIXAAogBumjAAsjzceGjevik6EEAHlUKRnuoWqRsPJiFB5AAuDCCGwI5GmQ5CYCEZGkGybFpCdoWGx-DEwMwWIRUISYCD4eQoABC2H09mZNhgMEoADUbsB6tlcohkcDXgL6kzkY0IEzsKQaUIAApo-QJbC3TncyjKgrcW64lFgMzFPEErZQIRZdbIgAiIyVggActgJbgOukAMowEYAYQ1FiIYsEMPdnsoAH4KVTcE6qG4hII4nAABItNA3Y5wX7rBBPIYoEaEGZzKrwGAJLNc4VIB6iF7vUhfH5-LyCAA+KNEyOYYM0kI0UBhcIRAlR6JzlKxghx5sJVsEJNwZIIMZnVE7GB7LHpjJZbI5XJ5pH53EFtcQAjgEvPUpQMogcqL1C36B3zFVUHVmpZx91+qGteJrAGaXQWkSCCgA+cAOhom5du+IS9q64ZZJQPr+oGfjXmGwAeuhpDRlOsa0kAA">TS Playground</a> | <a href="source/tagged-union.d.ts">Source</a>
	</summary>

	```ts
	import type {TaggedUnion} from 'type-fest';
	
	type Tagged<Fields extends Record<string, unknown> = TaggedUnion<'type', Fields>
	
	// The TaggedUnion utility reduces the amount of boilerplate needed to create a tagged union with multiple members, making the code more concise.
	type EventMessage = Tagged<{
	OpenExternalUrl: {
	url: string;
	id: number;
	language: string;
	};
	ToggleBackButtonVisibility: {
	visible: boolean;
	};
	PurchaseButtonPressed: {
	price: number;
	time: Date;
	};
	NavigationStateChanged: {
	navigation?: string;
	};
	}>;
	
	// Here is the same type created without this utility.
	type EventMessage =
	| {
	type: 'OpenExternalUrl';
	url: string;
	id: number;
	language: string;
	}
	| {type: 'ToggleBackButtonVisibility'; visible: boolean}
	| {type: 'PurchaseButtonPressed'; price: number; time: Date}
	| {type: 'NavigationStateChanged'; navigation?: string};
	```
	</details>

- `WritableKeysOf` - Extract all writable keys from the given type.
	<details>
	<summary>
		Example | <a href="https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUBpFRAZwHkAzAXzlqghDgHIlUBaWlSmOwDcAKBHAAdjBRRaeAMZoAqpRkYREvCBQAuOAJwSA5qMoBXKJu16DkkyKgo8AEwgSiiOMGd6JZkAQyovRiXMpgznjSAEooAI5m-DAAPACiUrieKAAe0hLOlHAQBABWKPIwAHxwALxwAArA8gDWaRlIADRw2LiEJORUdG0wmZWVoiLybgJwZhFRKACMekrzMfGJAskqMtV16BpauhwAgkRNKOwdIuaWR3rsJ-LaVyL0QkA">TS Playground</a> | <a href="source/writable-keys-of.d.ts">Source</a>
	</summary>

	```ts
	import type {WritableKeysOf} from 'type-fest';
	
	interface User {
	name: string;
	surname: string;
	readonly id: number;
	}
	
	type UpdateRequest<Entity extends object> = Pick<Entity, WritableKeysOf<Entity>>;
	
	const update1: UpdateRequest<User> = {
	name: 'Alice',
	surname: 'Acme',
	};
	```
	</details>

## Declined types

*If we decline a type addition, we will make sure to document the better solution here.*

- [`Diff` and `Spread`](https://github.com/sindresorhus/type-fest/pull/7) - The pull request author didn't provide any real-world use-cases and the PR went stale. If you think this type is useful, provide some real-world use-cases and we might reconsider.
- [`Dictionary`](https://github.com/sindresorhus/type-fest/issues/33) - You only save a few characters (`Dictionary<number>` vs `Record<string, number>`) from [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type), which is more flexible and well-known. Also, you shouldn't use an object as a dictionary. We have `Map` in JavaScript now.
- [`ExtractProperties` and `ExtractMethods`](https://github.com/sindresorhus/type-fest/pull/4) - The types violate the single responsibility principle. Instead, refine your types into more granular type hierarchies.
- [`Url2Json`](https://github.com/sindresorhus/type-fest/pull/262) - Inferring search parameters from a URL string is a cute idea, but not very useful in practice, since search parameters are usually dynamic and defined separately.
- [`Nullish`](https://github.com/sindresorhus/type-fest/pull/318) - The type only saves a couple of characters, not everyone knows what "nullish" means, and I'm also trying to [get away from `null`](https://github.com/sindresorhus/meta/discussions/7).
- [`TitleCase`](https://github.com/sindresorhus/type-fest/pull/303) - It's not solving a common need and is a better fit for a separate package.
- [`ExtendOr` and `ExtendAnd`](https://github.com/sindresorhus/type-fest/pull/247) - The benefits don't outweigh having to learn what they mean.
- [`PackageJsonExtras`](https://github.com/sindresorhus/type-fest/issues/371) - There are too many possible configurations that can be put into `package.json`. If you would like to extend `PackageJson` to support an additional configuration in your project, please see the *Extending existing types* section below.

## Alternative type names

*If you know one of our types by a different name, add it here for discovery.*

- `PartialBy` - See [`SetOptional`](https://github.com/sindresorhus/type-fest/blob/main/source/set-optional.d.ts)
- `RecordDeep`- See [`Schema`](https://github.com/sindresorhus/type-fest/blob/main/source/schema.d.ts)
- `Mutable`- See [`Writable`](https://github.com/sindresorhus/type-fest/blob/main/source/writable.d.ts)
- `Prettify`- See [`Simplify`](https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts)

## Tips

### Extending existing types

- [`PackageJson`](source/package-json.d.ts) - There are a lot of tools that place extra configurations inside the `package.json` file. You can extend `PackageJson` to support these additional configurations.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGMDW2A5igFIDOEAdnNuXAEJ0o4HFmVUC+cAZlBBBwA5ElQBaXinIxhAbgCwAKFCRYCZGnQAZYFRgooPfoJHSANntmKlysWlaESFanAC8jZo-YuaAMgwLKwBhal5gIgB+AC44XX1DADpQqnCiLhsgA)

	```ts
	import type {PackageJson as BasePackageJson} from 'type-fest';
	import type {Linter} from 'eslint';

	type PackageJson = BasePackageJson & {eslintConfig?: Linter.Config};
	```
	</details>

### Related

- [typed-query-selector](https://github.com/g-plane/typed-query-selector) - Enhances `document.querySelector` and `document.querySelectorAll` with a template literal type that matches element types returned from an HTML element query selector.
- [`Linter.Config`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/eslint/index.d.ts) - Definitions for the [ESLint configuration schema](https://eslint.org/docs/user-guide/configuring/language-options).

### Built-in types

There are many advanced types most users don't know about.

- [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) - Make all properties in `T` optional.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgHIHsAmEDC6QzADmyA3gLABQyycADnanALYQBcyAzmFKEQNxUaddFDAcQAV2YAjaIMoBfKlQQAbOJ05osEAIIMAQpOBrsUMkOR1eANziRkCfISKSoD4Pg4ZseAsTIALyW1DS0DEysHADkvvoMMQA0VsKi4sgAzAAMuVaKClY2wPaOknSYDrguADwA0sgQAB6QIJjaANYQAJ7oMDp+LsQAfAAUXd0cdUnI9mo+uv6uANp1ALoAlKHhyGAAFsCcAHTOAW4eYF4gyxNrwbNwago0ypRWp66jH8QcAApwYmAjxq8SWIy2FDCNDA3ToKFBQyIdR69wmfQG1TOhShyBgomQX3w3GQE2Q6IA8jIAFYQBBgI4TTiEs5bTQYsFInrLTbbHZOIlgZDlSqQABqj0kKBC3yINx6a2xfOQwH6o2FVXFaklwSCIUkbQghBAEEwENSfNOlykEGefNe5uhB2O6sgS3GPRmLogmslG1tLxUOKgEDA7hAuydtteryAA)

	```ts
	interface NodeConfig {
			appName: string;
			port: number;
	}

	class NodeAppBuilder {
			private configuration: NodeConfig = {
					appName: 'NodeApp',
					port: 3000
			};

			private updateConfig<Key extends keyof NodeConfig>(key: Key, value: NodeConfig[Key]) {
					this.configuration[key] = value;
			}

			config(config: Partial<NodeConfig>) {
					type NodeConfigKey = keyof NodeConfig;

					for (const key of Object.keys(config) as NodeConfigKey[]) {
							const updateValue = config[key];

							if (updateValue === undefined) {
									continue;
							}

							this.updateConfig(key, updateValue);
					}

					return this;
			}
	}

	// `Partial<NodeConfig>`` allows us to provide only a part of the
	// NodeConfig interface.
	new NodeAppBuilder().config({appName: 'ToDoApp'});
	```
	</details>

- [`Required<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) - Make all properties in `T` required.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgGED21VQGJZwC2wA3gFCjXAzFJgA2A-AFzADOUckA5gNxUaIYjA4ckvGG07c+g6gF8KQkAgCuEFFDA5O6gEbEwUbLm2ESwABQIixACJIoSdgCUYAR3Vg4MACYAPGYuFvYAfACU5Ko0APRxwADKMBD+wFAAFuh2Vv7OSBlYGdmc8ABu8LHKsRyGxqY4oQT21pTCIHQMjOwA5DAAHgACxAAOjDAAdChYxL0ANLHUouKSMH0AEmAAhJhY6ozpAJ77GTCMjMCiV0ToSAb7UJPPC9WRgrEJwAAqR6MwSRQPFGUFocDgRHYxnEfGAowh-zgUCOwF6KwkUl6tXqJhCeEsxDaS1AXSYfUGI3GUxmc0WSneQA)

	```ts
	interface ContactForm {
			email?: string;
			message?: string;
	}

	function submitContactForm(formData: Required<ContactForm>) {
			// Send the form data to the server.
	}

	submitContactForm({
			email: 'ex@mple.com',
			message: 'Hi! Could you tell me more about…',
	});

	// TypeScript error: missing property 'message'
	submitContactForm({
			email: 'ex@mple.com',
	});
	```
	</details>

- [`Readonly<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) - Make all properties in `T` readonly.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4UwOwVwW2AZA9gc3mAbmANsA3gKFCOAHkAzMgGkOJABEwAjKZa2kAUQCcvEu32AMQCGAF2FYBIAL4BufDRABLCKLBcywgMZgEKZOoDCiCGSXI8i4hGEwwALmABnUVxXJ57YFgzZHSVF8sT1BpBSItLGEnJz1kAy5LLy0TM2RHACUwYQATEywATwAeAITjU3MAPnkrCJMXLigtUT4AClxgGztKbyDgaX99I1TzAEokr1BRAAslJwA6FIqLAF48TtswHp9MHDla9hJGACswZvmyLjAwAC8wVpm5xZHkUZDaMKIwqyWXYCW0oN4sNlsA1h0ug5gAByACyBQAggAHJHQ7ZBIFoXbzBjMCz7OoQP5YIaJNYQMAAdziCVaALGNSIAHomcAACoFJFgADKWjcSNEwG4vC4ji0wggEEQguiTnMEGALWAV1yAFp8gVgEjeFyuKICvMrCTgVxnst5jtsGC4ljsPNhXxGaAWcAAOq6YRXYDCRg+RWIcA5JSC+kWdCepQ+v3RYCU3RInzRMCGwlpC19NYBW1Ye08R1AA)

	```ts
	enum LogLevel {
			Off,
			Debug,
			Error,
			Fatal
	};

	interface LoggerConfig {
			name: string;
			level: LogLevel;
	}

	class Logger {
			config: Readonly<LoggerConfig>;

			constructor({name, level}: LoggerConfig) {
					this.config = {name, level};
					Object.freeze(this.config);
			}
	}

	const config: LoggerConfig = {
		name: 'MyApp',
		level: LogLevel.Debug
	};

	const logger = new Logger(config);

	// TypeScript Error: cannot assign to read-only property.
	logger.config.level = LogLevel.Error;

	// We are able to edit config variable as we please.
	config.level = LogLevel.Error;
	```
	</details>

- [`Pick<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys) - From `T`, pick a set of properties whose keys are in the union `K`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgEE5TCgNugN4BQoZwOUBAXMAM5RyQDmA3KeSFABYCuAtgCMISMHloMmENh04oA9tBjQJjFuzIBfYrOAB6PcADCcGElh1gEGAHcKATwAO6ebyjB5CTNlwFwSxFR0BX5HeToYABNgBDh5fm8cfBg6AHIKG3ldA2BHOOcfFNpUygJ0pAhokr4hETFUgDpswywkggAFUwA3MFtgAF5gQgowKhhVKTYKGuFRcXo1aVZgbTIoJ3RW3xhOmB6+wfbcAGsAHi3kgBpgEtGy4AAfG54BWfqAPnZm4AAlZUj4MAkMA8GAGB4vEgfMlLLw6CwPBA8PYRmMgZVgAC6CgmI4cIommQELwICh8RBgKZKvALh1ur0bHQABR5PYMui0Wk7em2ADaAF0AJS0AASABUALIAGQAogR+Mp3CROCAFBBwVC2ikBpj5CgBIqGjizLA5TAFdAmalImAuqlBRoVQh5HBgEy1eDWfs7J5cjzGYKhroVfpDEhHM4MV6GRR5NN0JrtnRg6BVirTFBeHAKYmYY6QNpdB73LmCJZBlSAXAubtvczeSmQMNSuMbmKNgBlHFgPEUNwusBIPAAQlS1xetTmxT0SDoESgdD0C4aACtHMwxytLrohawgA)

	```ts
	interface Article {
			title: string;
			thumbnail: string;
			content: string;
	}

	// Creates new type out of the `Article` interface composed
	// from the Articles' two properties: `title` and `thumbnail`.
	// `ArticlePreview = {title: string; thumbnail: string}`
	type ArticlePreview = Pick<Article, 'title' | 'thumbnail'>;

	// Render a list of articles using only title and description.
	function renderArticlePreviews(previews: ArticlePreview[]): HTMLElement {
			const articles = document.createElement('div');

			for (const preview of previews) {
					// Append preview to the articles.
			}

			return articles;
	}

	const articles = renderArticlePreviews([
			{
				title: 'TypeScript tutorial!',
				thumbnail: '/assets/ts.jpg'
			}
	]);
	```
	</details>

- [`Record<K, T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) - Construct a type with a set of properties `K` of type `T`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4ejYAUHsGcCWAXBMB2dgwGbAKYC2ADgDYwCeeemCaWArgE7ADGMxAhmuQHQBQoYEnJE8wALKEARnkaxEKdMAC8wAOS0kstGuAAfdQBM8ANzxlRjXQbVaWACwC0JPB0NqA3HwGgIwAJJoWozYHCxixnAsjAhStADmwESMMJYo1Fi4HMCIaPEu+MRklHj8gpqyoeHAAKJFFFTAAN4+giDYCIxwSAByHAR4AFw5SDF5Xm2gJBzdfQPD3WPxE5PAlBxdAPLYNQAelgh4aOHDaPQEMowrIAC+3oJ+AMKMrlrAXFhSAFZ4LEhC9g4-0BmA4JBISXgiCkBQABpILrJ5MhUGhYcATGD6Bk4Hh-jNgABrPDkOBlXyQAAq9ngYmJpOAAHcEOCRjAXqwYODfoo6DhakUSph+Uh7GI4P0xER4Cj0OSQGwMP8tP1hgAlX7swwAHgRl2RvIANALSA08ABtAC6AD4VM1Wm0Kow0MMrYaHYJjGYLLJXZb3at1HYnC43Go-QHQDcvA6-JsmEJXARgCDgMYWAhjIYhDAU+YiMAAFIwex0ZmilMITCGF79TLAGRsAgJYAAZRwSEZGzEABFTOZUrJ5Yn+jwnWgeER6HB7AAKJrADpdXqS4ZqYultTG6azVfqHswPBbtauLY7fayQ7HIbAAAMwBuAEoYw9IBq2Ixs9h2eFMOQYPQObALQKJgggABeYhghCIpikkKRpOQRIknAsZUiIeCttECBEP8NSMCkjDDAARMGziuIYxHwYOjDCMBmDNnAuTxA6irdCOBB1Lh5Dqpqn66tISIykawBnOCtqqC0gbjqc9DgpGkxegOliyfJDrRkAA)

	```ts
	// Positions of employees in our company.
	type MemberPosition = 'intern' | 'developer' | 'tech-lead';

	// Interface describing properties of a single employee.
	interface Employee {
			firstName: string;
			lastName: string;
			yearsOfExperience: number;
	}

	// Create an object that has all possible `MemberPosition` values set as keys.
	// Those keys will store a collection of Employees of the same position.
	const team: Record<MemberPosition, Employee[]> = {
			intern: [],
			developer: [],
			'tech-lead': [],
	};

	// Our team has decided to help John with his dream of becoming Software Developer.
	team.intern.push({
		firstName: 'John',
		lastName: 'Doe',
		yearsOfExperience: 0
	});

	// `Record` forces you to initialize all of the property keys.
	// TypeScript Error: "tech-lead" property is missing
	const teamEmpty: Record<MemberPosition, null> = {
			intern: null,
			developer: null,
	};
	```
	</details>

- [`Exclude<T, U>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) - Exclude from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgMrQG7QMIHsQzADmyA3gFDLIAOuUYAXMiAK4A2byAPsgM5hRQJHqwC2AI2gBucgF9y5MAE9qKAEoQAjiwj8AEnBAATNtGQBeZAAooWphu26wAGmS3e93bRC8IASgsAPmRDJRlyAHoI5ABRAA8ENhYjFFYOZGVVZBgoXFFkAAM0zh5+QRBhZhYJaAKAOkjogEkQZAQ4X2QAdwALCFbaemRgXmQtFjhOMFwq9K6ULuB0lk6U+HYwZAxJnQaYFhAEMGB8ZCIIMAAFOjAANR2IK0HGWISklIAedCgsKDwCYgAbQA5M9gQBdVzFQJ+JhiSRQMiUYYwayZCC4VHPCzmSzAspCYEBWxgFhQAZwKC+FpgJ43VwARgADH4ZFQSWSBjcZPJyPtDsdTvxKWBvr8rD1DCZoJ5HPopaYoK4EPhCEQmGKcKriLCtrhgEYkVQVT5Nr4fmZLLZtMBbFZgT0wGBqES6ghbHBIJqoBKFdBWQpjfh+DQbhY2tqiHVsbjLMVkAB+ZAAZiZaeQTHOVxu9ySjxNaujNwDVHNvzqbBGkBAdPoAfkQA)

	```ts
	interface ServerConfig {
		port: null | string | number;
	}

	type RequestHandler = (request: Request, response: Response) => void;

	// Exclude `null` type from `null | string | number`.
	// In case the port is equal to `null`, we will use default value.
	function getPortValue(port: Exclude<ServerConfig['port'], null>): number {
		if (typeof port === 'string') {
			return parseInt(port, 10);
		}

		return port;
	}

	function startServer(handler: RequestHandler, config: ServerConfig): void {
		const server = require('http').createServer(handler);

		const port = config.port === null ? 3000 : getPortValue(config.port);
		server.listen(port);
	}
	```
	</details>

- [`Extract<T, U>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) - Extract from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzSwEdkQBJYACgEoAueVZAWwCMQYBuAKDDwGcM8MgBF4AXngBlAJ6scESgHIRi6ty5ZUGdoihgEABXZ888AN5d48ANoiAuvUat23K6ihMQ9ATE0BzV3goPy8GZjZOLgBfLi4Aejj4AEEICBwAdz54MAALKFQQ+BxEeAAHY1NgKAwoIKy0grr4DByEUpgccpgMaXgAaxBerCzi+B9-ZulygDouFHRsU1z8kKMYE1RhaqgAHkt4AHkWACt4EAAPbVRgLLWNgBp9gGlBs8uQa6yAUUuYPQwdgNpKM7nh7mMML4CgA+R5WABqUAgpDeVxuhxO1he0jsXGh8EoOBO9COx3BQPo2PBADckaR6IjkSA6PBqTgsMBzPsicdrEC7OJWXSQNwYvFEgAVTS9JLXODpeDpKBZFg4GCoWa8VACIJykAKiQWKy2YQOAioYikCg0OEMDyhRSy4DyxS24KhAAMjyi6gS8AAwjh5OD0iBFHAkJoEOksC1mnkMJq8gUQKDNttKPlnfrwYp3J5XfBHXqoKpfYkAOI4ansTxaeDADmoRSCCBYAbxhC6TDx6rwYHIRX5bScjA4bLJwoDmDwDkfbA9JMrVMVdM1TN69LgkTgwgkchUahqIA)

	```ts
	declare function uniqueId(): number;

	const ID = Symbol('ID');

	interface Person {
		[ID]: number;
		name: string;
		age: number;
	}

	// Allows changing the person data as long as the property key is of string type.
	function changePersonData<
		Obj extends Person,
		Key extends Extract<keyof Person, string>,
		Value extends Obj[Key]
	> (obj: Obj, key: Key, value: Value): void {
		obj[key] = value;
	}

	// Tiny Andrew was born.
	const andrew = {
		[ID]: uniqueId(),
		name: 'Andrew',
		age: 0,
	};

	// Cool, we're fine with that.
	changePersonData(andrew, 'name', 'Pony');

	// Goverment didn't like the fact that you wanted to change your identity.
	changePersonData(andrew, ID, uniqueId());
	```
	</details>

- [`NonNullable<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype) - Exclude `null` and `undefined` from `T`.
	<details>
	<summary>
			Example
	</summary>
	Works with <a href="https://www.typescriptlang.org/tsconfig#strictNullChecks"><code>strictNullChecks</code></a> set to <code>true</code>.

	[Playground](https://typescript-play.js.org/?target=6#code/C4TwDgpgBACg9gJ2AOQK4FsBGEFQLxQDOwCAlgHYDmUAPlORtrnQwDasDcAUFwPQBU-WAEMkUOADMowqAGNWwwoSgATCBIqlgpOOSjAAFsOBRSy1IQgr9cKJlSlW1mZYQA3HFH68u8xcoBlHA8EACEHJ08Aby4oKDBUTFZSWXjEFEYcAEIALihkXTR2YSSIAB54JDQsHAA+blj4xOTUsHSACkMzPKD3HHDHNQQAGjSkPMqMmoQASh7g-oihqBi4uNIpdraxPAI2VhmVxrX9AzMAOm2ppnwoAA4ABifuE4BfKAhWSyOTuK7CS7pao3AhXF5rV48E4ICDAVAIPT-cGQyG+XTEIgLMJLTx7CAAdygvRCA0iCHaMwarhJOIQjUBSHaACJHk8mYdeLwxtdcVAAOSsh58+lXdr7Dlcq7A3n3J4PEUdADMcspUE53OluAIUGVTx46oAKuAIAFZGQwCYAKIIBCILjUxaDHAMnla+iodjcIA)

	```ts
	type PortNumber = string | number | null;

	/** Part of a class definition that is used to build a server */
	class ServerBuilder {
			portNumber!: NonNullable<PortNumber>;

			port(this: ServerBuilder, port: PortNumber): ServerBuilder {
					if (port == null) {
							this.portNumber = 8000;
					} else {
							this.portNumber = port;
					}

					return this;
			}
	}

	const serverBuilder = new ServerBuilder();

	serverBuilder
			.port('8000')   // portNumber = '8000'
			.port(null)     // portNumber =  8000
			.port(3000);    // portNumber =  3000

	// TypeScript error
	serverBuilder.portNumber = null;
	```
	</details>

- [`Parameters<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) - Obtain the parameters of a function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/GYVwdgxgLglg9mABAZwBYmMANgUwBQxgAOIUAXIgIZgCeA2gLoCUFAbnDACaIDeAUIkQB6IYgCypSlBxUATrMo1ECsJzgBbLEoipqAc0J7EMKMgDkiHLnU4wp46pwAPHMgB0fAL58+oSLARECEosLAA5ABUYG2QAHgAxJGdpVWREPDdMylk9ZApqemZEAF4APipacrw-CApEgBogkKwAYThwckQwEHUAIxxZJl4BYVEImiIZKF0oZRwiWVdbeygJmThgOYgcGFYcbhqApCJsyhtpWXcR1cnEePBoeDAABVPzgbTixFeFd8uEsClADcIxGiygIFkSEOT3SmTc2VydQeRx+ZxwF2QQ34gkEwDgsnSuFmMBKiAADEDjIhYk1Qm0OlSYABqZnYka4xA1DJZHJYkGc7yCbyeRA+CAIZCzNAYbA4CIAdxg2zJwVCkWirjwMswuEaACYmCCgA)

	```ts
	function shuffle(input: any[]): void {
		// Mutate array randomly changing its' elements indexes.
	}

	function callNTimes<Fn extends (...arguments_: any[]) => any> (func: Fn, callCount: number) {
		// Type that represents the type of the received function parameters.
		type FunctionParameters = Parameters<Fn>;

		return function (...arguments_: FunctionParameters) {
			for (let i = 0; i < callCount; i++) {
				func(...arguments_);
			}
		}
	}

	const shuffleTwice = callNTimes(shuffle, 2);
	```
	</details>

- [`ConstructorParameters<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype) - Obtain the parameters of a constructor function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECCBOAXAlqApgWQPYBM0mgG8AoaaFRENALmgkXmQDsBzAblOmCycTV4D8teo1YdO3JiICuwRFngAKClWENmLAJRFOZRAAtkEAHQq00ALzlklNBzIBfYk+KhIMAJJTEYJsDQAwmDA+mgAPAAq0GgAHnxMODCKTGgA7tCKxllg8CwQtL4AngDaALraFgB80EWa1SRkAA6MAG5gfNAB4FABPDJyCrQR9tDNyG0dwMGhtBhgjWEiGgA00F70vv4RhY3hEZXVVinpc42KmuJkkv3y8Bly8EPaDWTkhiZd7r3e8LK3llwGCMXGQWGhEOsfH5zJlsrl8p0+gw-goAAo5MAAW3BaHgEEilU0tEhmzQ212BJ0ry4SOg+kg+gBBiMximIGA0nAfAQLGk2N4EAAEgzYcYcnkLsRdDTvNEYkYUKwSdCme9WdM0MYwYhFPSIPpJdTkAAzDKxBUaZX+aAAQgsVmkCTQxuYaBw2ng4Ok8CYcotSu8pMur09iG9vuObxZnx6SN+AyUWTF8MN0CcZE4Ywm5jZHK5aB5fP4iCFIqT4oRRTKRLo6lYVNeAHpG50wOzOe1zHr9NLQ+HoABybsD4HOKXXRA1JCoKhBELmI5pNaB6Fz0KKBAodDYPAgSUTmqYsAALx4m5nC6nW9nGq14KtaEUA9gR9PvuNCjQ9BgACNvcwNBtAcLiAA)

	```ts
	class ArticleModel {
		title: string;
		content?: string;

		constructor(title: string) {
			this.title = title;
		}
	}

	class InstanceCache<T extends (new (...arguments_: any[]) => any)> {
		private ClassConstructor: T;
		private cache: Map<string, InstanceType<T>> = new Map();

		constructor (ctr: T) {
			this.ClassConstructor = ctr;
		}

		getInstance (...arguments_: ConstructorParameters<T>): InstanceType<T> {
			const hash = this.calculateArgumentsHash(...arguments_);

			const existingInstance = this.cache.get(hash);
			if (existingInstance !== undefined) {
				return existingInstance;
			}

			return new this.ClassConstructor(...arguments_);
		}

		private calculateArgumentsHash(...arguments_: any[]): string {
			// Calculate hash.
			return 'hash';
		}
	}

	const articleCache = new InstanceCache(ArticleModel);
	const amazonArticle = articleCache.getInstance('Amazon forests burining!');
	```
	</details>

- [`ReturnType<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype) - Obtain the return type of a function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	/** Provides every element of the iterable `iter` into the `callback` function and stores the results in an array. */
	function mapIter<
			Elem,
			Func extends (elem: Elem) => any,
			Ret extends ReturnType<Func>
	>(iter: Iterable<Elem>, callback: Func): Ret[] {
			const mapped: Ret[] = [];

			for (const elem of iter) {
					mapped.push(callback(elem));
			}

			return mapped;
	}

	const setObject: Set<string> = new Set();
	const mapObject: Map<number, string> = new Map();

	mapIter(setObject, (value: string) => value.indexOf('Foo')); // number[]

	mapIter(mapObject, ([key, value]: [number, string]) => {
			return key % 2 === 0 ? value : 'Odd';
	}); // string[]
	```
	</details>

- [`InstanceType<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype) - Obtain the instance type of a constructor function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	class IdleService {
			doNothing (): void {}
	}

	class News {
			title: string;
			content: string;

			constructor(title: string, content: string) {
					this.title = title;
					this.content = content;
			}
	}

	const instanceCounter: Map<Function, number> = new Map();

	interface Constructor {
			new(...arguments_: any[]): any;
	}

	// Keep track how many instances of `Constr` constructor have been created.
	function getInstance<
			Constr extends Constructor,
			Arguments extends ConstructorParameters<Constr>
	>(constructor: Constr, ...arguments_: Arguments): InstanceType<Constr> {
			let count = instanceCounter.get(constructor) || 0;

			const instance = new constructor(...arguments_);

			instanceCounter.set(constructor, count + 1);

			console.log(`Created ${count + 1} instances of ${Constr.name} class`);

			return instance;
	}


	const idleService = getInstance(IdleService);
	// Will log: `Created 1 instances of IdleService class`
	const newsEntry = getInstance(News, 'New ECMAScript proposals!', 'Last month...');
	// Will log: `Created 1 instances of News class`
	```
	</details>

- [`Omit<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) - Constructs a type by picking all properties from T and then removing K.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlks4BzCAVShwC5kBnMKUcgbmKYAcIFgIjBs1YgOXMpSFMWbANoBdTiW5woFddwAW0kfKWEAvoUIB6U8gDCUCHEiNkICAHdkYAJ69kz4GC3JcPG4oAHteKDABBxCYNAxsPFBIWEQUCAAPJG4wZABySUFcgJAAEzMLXNV1ck0dIuCw6EjBADpy5AB1FAQ4EGQAV0YUP2AHDy8wEOQbUugmBLwtEIA3OcmQnEjuZBgQqE7gAGtgZAhwKHdkHFGwNvGUdDIcAGUliIBJEF3kAF5kAHlML4ADyPBIAGjyBUYRQAPnkqho4NoYQA+TiEGD9EAISIhPozErQMG4AASK2gn2+AApek9pCSXm8wFSQooAJQMUkAFQAsgAZACiOAgmDOOSIJAQ+OYyGl4DgoDmf2QJRCCH6YvALQQNjsEGFovF1NyJWAy1y7OUyHMyE+yRAuFImG4Iq1YDswHxbRINjA-SgfXlHqVUE4xiAA)

	```ts
	interface Animal {
			imageUrl: string;
			species: string;
			images: string[];
			paragraphs: string[];
	}

	// Creates new type with all properties of the `Animal` interface
	// except 'images' and 'paragraphs' properties. We can use this
	// type to render small hover tooltip for a wiki entry list.
	type AnimalShortInfo = Omit<Animal, 'images' | 'paragraphs'>;

	function renderAnimalHoverInfo (animals: AnimalShortInfo[]): HTMLElement {
			const container = document.createElement('div');
			// Internal implementation.
			return container;
	}
	```
	</details>

- [`Uppercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype) - Transforms every character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uppercase<'hello'>;  // 'HELLO'

	type T2 = Uppercase<'foo' | 'bar'>;  // 'FOO' | 'BAR'

	type T3<S extends string> = Uppercase<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'ABXYZ'

	type T5 = Uppercase<string>;  // string
	type T6 = Uppercase<any>;  // any
	type T7 = Uppercase<never>;  // never
	type T8 = Uppercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Lowercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype) - Transforms every character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Lowercase<'HELLO'>;  // 'hello'

	type T2 = Lowercase<'FOO' | 'BAR'>;  // 'foo' | 'bar'

	type T3<S extends string> = Lowercase<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'abxyz'

	type T5 = Lowercase<string>;  // string
	type T6 = Lowercase<any>;  // any
	type T7 = Lowercase<never>;  // never
	type T8 = Lowercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Capitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype) - Transforms the first character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Capitalize<'hello'>;  // 'Hello'

	type T2 = Capitalize<'foo' | 'bar'>;  // 'Foo' | 'Bar'

	type T3<S extends string> = Capitalize<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'ABxYz'

	type T5 = Capitalize<string>;  // string
	type T6 = Capitalize<any>;  // any
	type T7 = Capitalize<never>;  // never
	type T8 = Capitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Uncapitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uncapitalizestringtype) - Transforms the first character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uncapitalize<'Hello'>;  // 'hello'

	type T2 = Uncapitalize<'Foo' | 'Bar'>;  // 'foo' | 'bar'

	type T3<S extends string> = Uncapitalize<`AB${S}`>;
	type T4 = T3<'xYz'>;  // 'aBxYz'

	type T5 = Uncapitalize<string>;  // string
	type T6 = Uncapitalize<any>;  // any
	type T7 = Uncapitalize<never>;  // never
	type T8 = Uncapitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

You can find some examples in the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/utility-types.html).

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Jarek Radosz](https://github.com/CvX)
- [Dimitri Benin](https://github.com/BendingBender)
- [Pelle Wessman](https://github.com/voxpelli)
- [Sébastien Mischler](https://github.com/skarab42)

## License

SPDX-License-Identifier: (MIT OR CC0-1.0)
