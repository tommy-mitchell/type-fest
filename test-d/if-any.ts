import {expectError, expectType} from 'tsd';
import type {IfAny} from '../index';

declare const anything: any;

// `IfAny` should return `true`/`false` if only `T` is specified
expectType<IfAny<any>>(true);
expectType<IfAny<any, 'T', 'F'>>('T');
expectType<IfAny<string>>(false);
expectType<IfAny<string, 'T', 'F'>>('F');

// Missing generic parameter
expectError<IfAny>(anything);