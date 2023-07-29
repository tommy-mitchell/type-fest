type PathsOptions = {
	/**
	For deeply-nested paths, only include the leaves of each path in the type.

	@default false
	*/
	onlyLeaves?: boolean;
};

type ValidKey = string | number;
type SafeKey<T> = T extends ValidKey ? `${T}` : never;
type ObjectWithPaths = any[] | object;

type EmptyParent = '';

// A type Leaf<Parent extends SafeKey<Parent>, Key extends SafeKey<Key>, Options extends PathsOptions> = (
type Leaf<Parent extends ValidKey, Key, Options extends PathsOptions> = (
	Parent extends EmptyParent
		? SafeKey<Key>
		: Options['onlyLeaves'] extends true
			? SafeKey<Key>
			: `${SafeKey<Parent>}.${SafeKey<Key>}` // Default case
);

/** Union of all keys in a valid '`Path`able' object. */
type PathKey<TObject extends ObjectWithPaths> = (
	& (keyof TObject)
	& (TObject extends any[]
		? number
		: TObject extends object
			? (string | number)
			: never
	)
);

type NestedPaths<
	TObject,
	Parent extends ValidKey,
	Options extends PathsOptions,
	TObjectKey extends PathKey<TObject> = PathKey<TObject>,
> = {
	[Key in TObjectKey]: (
		| Leaf<Parent, Key, Options>
		| NestedPaths<TObject[Key], Leaf<Parent, Key, Options>, Options>
	)
}[TObjectKey];
// (
// 	TObject extends ObjectWithPaths
// 		? {
// 			[Key in TObjectKey]: (
// 			// 	| Leaf<Parent, Key, Options>
// 			// 	| NestedPaths<TObject[Key], Leaf<Parent, Key, Options>, Options>

// 				TObject[Key] extends ObjectWithPaths
// 					? Leaf<Parent, Key, Options> | NestedPaths<TObject[Key], Leaf<Parent, Key, Options>, Options>
// 					: Leaf<Parent, Key, Options>
// 			);
// 		}[TObjectKey]
// 		: never
// );

/**
Creates a type that represents the union of all possible paths to properties in
a given object. It fully supports nested arrays and objects.

@example
```
interface User {
	id: number;
	name: {
		first: string;
		last: string;
	};
	friends: Array<{
		id: number;
		name: string;
	}>;
}

type UserPaths = Paths<User>;
// | 'id'
// | 'name'
// | 'name.first'
// | 'name.last'
// | 'friends'
// | `friends.${number}`
// | `friends.${number}.id`
// | `friends.${number}.name`
```
*/
export type Paths<ObjectType extends ObjectWithPaths, Options extends PathsOptions = {onlyLeaves: false}> = NestedPaths<ObjectType, '', Options>;

// TODO: compare with https://github.com/sindresorhus/type-fest/issues/432#issuecomment-1318000414

type x = Paths<{a: string; b: number; c: {d: boolean; e: number; f: {g: string}}}>;
//   ^?
type x1 = Paths<{a: string; b: number; c: {d: boolean; e: number; f: {g: string}}}, {onlyLeaves: true}>;
//   ^?

type ar1 = Paths<[1, 2, 3]>;
//   ^?

type User = {
	id: number;
	name: {
		first: string;
		last: string;
	};
	friends: Array<{
		id: number;
		name: string;
	}>;
};

type UserPaths1 = Paths<User>;
//   ^?
type UserPaths2 = Paths<User, {onlyLeaves: true}>;
//   ^?

type Post = {
	id: string;
	title: string;
	comments: Array<{
		id: string;
		body: string;
	}>;
};

type fieldType1 = Paths<Post>;
//   ^?
type fieldType2 = Paths<Post, {onlyLeaves: true}>;
//   ^?
