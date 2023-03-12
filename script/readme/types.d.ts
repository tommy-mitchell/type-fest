import type {JSDocTagInfo} from 'typescript';

type Type = {
	name: string;
	summary: string;
	tags: JSDocTagInfo[];
	example: string;
};

type Category = [name: string, types: Set<Type>];

type MapHelper<T extends [string, any]> = Map<T[0], T[1]>;

type Categories = MapHelper<Category>;
