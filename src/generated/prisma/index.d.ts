
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ClassSchedule
 * 
 */
export type ClassSchedule = $Result.DefaultSelection<Prisma.$ClassSchedulePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model TrainerAssignment
 * 
 */
export type TrainerAssignment = $Result.DefaultSelection<Prisma.$TrainerAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  Trainer: 'Trainer',
  Trainee: 'Trainee'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSchedule`: Exposes CRUD operations for the **ClassSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSchedules
    * const classSchedules = await prisma.classSchedule.findMany()
    * ```
    */
  get classSchedule(): Prisma.ClassScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainerAssignment`: Exposes CRUD operations for the **TrainerAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainerAssignments
    * const trainerAssignments = await prisma.trainerAssignment.findMany()
    * ```
    */
  get trainerAssignment(): Prisma.TrainerAssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ClassSchedule: 'ClassSchedule',
    Booking: 'Booking',
    TrainerAssignment: 'TrainerAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classSchedule" | "booking" | "trainerAssignment"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ClassSchedule: {
        payload: Prisma.$ClassSchedulePayload<ExtArgs>
        fields: Prisma.ClassScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findFirst: {
            args: Prisma.ClassScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findMany: {
            args: Prisma.ClassScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          create: {
            args: Prisma.ClassScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          createMany: {
            args: Prisma.ClassScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          update: {
            args: Prisma.ClassScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ClassScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          aggregate: {
            args: Prisma.ClassScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSchedule>
          }
          groupBy: {
            args: Prisma.ClassScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ClassScheduleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ClassScheduleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ClassScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      TrainerAssignment: {
        payload: Prisma.$TrainerAssignmentPayload<ExtArgs>
        fields: Prisma.TrainerAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainerAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainerAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TrainerAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainerAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          findMany: {
            args: Prisma.TrainerAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>[]
          }
          create: {
            args: Prisma.TrainerAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          createMany: {
            args: Prisma.TrainerAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrainerAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          update: {
            args: Prisma.TrainerAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TrainerAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainerAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrainerAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TrainerAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainerAssignment>
          }
          groupBy: {
            args: Prisma.TrainerAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainerAssignmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TrainerAssignmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TrainerAssignmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TrainerAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TrainerAssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classSchedule?: ClassScheduleOmit
    booking?: BookingOmit
    trainerAssignment?: TrainerAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    conductingClasses: number
    bookings: number
    trainerAssignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductingClasses?: boolean | UserCountOutputTypeCountConductingClassesArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    trainerAssignments?: boolean | UserCountOutputTypeCountTrainerAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConductingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrainerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerAssignmentWhereInput
  }


  /**
   * Count Type ClassScheduleCountOutputType
   */

  export type ClassScheduleCountOutputType = {
    bookings: number
    trainerAssignments: number
  }

  export type ClassScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ClassScheduleCountOutputTypeCountBookingsArgs
    trainerAssignments?: boolean | ClassScheduleCountOutputTypeCountTrainerAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ClassScheduleCountOutputType without action
   */
  export type ClassScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleCountOutputType
     */
    select?: ClassScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassScheduleCountOutputType without action
   */
  export type ClassScheduleCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ClassScheduleCountOutputType without action
   */
  export type ClassScheduleCountOutputTypeCountTrainerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conductingClasses?: boolean | User$conductingClassesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    trainerAssignments?: boolean | User$trainerAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductingClasses?: boolean | User$conductingClassesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    trainerAssignments?: boolean | User$trainerAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      conductingClasses: Prisma.$ClassSchedulePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      trainerAssignments: Prisma.$TrainerAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conductingClasses<T extends User$conductingClassesArgs<ExtArgs> = {}>(args?: Subset<T, User$conductingClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trainerAssignments<T extends User$trainerAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$trainerAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.conductingClasses
   */
  export type User$conductingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    cursor?: ClassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.trainerAssignments
   */
  export type User$trainerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    where?: TrainerAssignmentWhereInput
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    cursor?: TrainerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainerAssignmentScalarFieldEnum | TrainerAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ClassSchedule
   */

  export type AggregateClassSchedule = {
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  export type ClassScheduleAvgAggregateOutputType = {
    maxTrainees: number | null
  }

  export type ClassScheduleSumAggregateOutputType = {
    maxTrainees: number | null
  }

  export type ClassScheduleMinAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    maxTrainees: number | null
    trainerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    maxTrainees: number | null
    trainerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    maxTrainees: number
    trainerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassScheduleAvgAggregateInputType = {
    maxTrainees?: true
  }

  export type ClassScheduleSumAggregateInputType = {
    maxTrainees?: true
  }

  export type ClassScheduleMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    maxTrainees?: true
    trainerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    maxTrainees?: true
    trainerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    maxTrainees?: true
    trainerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedule to aggregate.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSchedules
    **/
    _count?: true | ClassScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type GetClassScheduleAggregateType<T extends ClassScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSchedule[P]>
      : GetScalarType<T[P], AggregateClassSchedule[P]>
  }




  export type ClassScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithAggregationInput | ClassScheduleOrderByWithAggregationInput[]
    by: ClassScheduleScalarFieldEnum[] | ClassScheduleScalarFieldEnum
    having?: ClassScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassScheduleCountAggregateInputType | true
    _avg?: ClassScheduleAvgAggregateInputType
    _sum?: ClassScheduleSumAggregateInputType
    _min?: ClassScheduleMinAggregateInputType
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type ClassScheduleGroupByOutputType = {
    id: string
    date: Date
    startTime: Date
    endTime: Date
    maxTrainees: number
    trainerId: string
    createdAt: Date
    updatedAt: Date
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  type GetClassScheduleGroupByPayload<T extends ClassScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ClassScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    maxTrainees?: boolean
    trainerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainer?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | ClassSchedule$bookingsArgs<ExtArgs>
    trainerAssignments?: boolean | ClassSchedule$trainerAssignmentsArgs<ExtArgs>
    _count?: boolean | ClassScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>



  export type ClassScheduleSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    maxTrainees?: boolean
    trainerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "maxTrainees" | "trainerId" | "createdAt" | "updatedAt", ExtArgs["result"]["classSchedule"]>
  export type ClassScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | ClassSchedule$bookingsArgs<ExtArgs>
    trainerAssignments?: boolean | ClassSchedule$trainerAssignmentsArgs<ExtArgs>
    _count?: boolean | ClassScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSchedule"
    objects: {
      trainer: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      trainerAssignments: Prisma.$TrainerAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      startTime: Date
      endTime: Date
      maxTrainees: number
      trainerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classSchedule"]>
    composites: {}
  }

  type ClassScheduleGetPayload<S extends boolean | null | undefined | ClassScheduleDefaultArgs> = $Result.GetResult<Prisma.$ClassSchedulePayload, S>

  type ClassScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassScheduleCountAggregateInputType | true
    }

  export interface ClassScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSchedule'], meta: { name: 'ClassSchedule' } }
    /**
     * Find zero or one ClassSchedule that matches the filter.
     * @param {ClassScheduleFindUniqueArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassScheduleFindUniqueArgs>(args: SelectSubset<T, ClassScheduleFindUniqueArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassScheduleFindUniqueOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassScheduleFindFirstArgs>(args?: SelectSubset<T, ClassScheduleFindFirstArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany()
     * 
     * // Get first 10 ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassScheduleFindManyArgs>(args?: SelectSubset<T, ClassScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSchedule.
     * @param {ClassScheduleCreateArgs} args - Arguments to create a ClassSchedule.
     * @example
     * // Create one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.create({
     *   data: {
     *     // ... data to create a ClassSchedule
     *   }
     * })
     * 
     */
    create<T extends ClassScheduleCreateArgs>(args: SelectSubset<T, ClassScheduleCreateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSchedules.
     * @param {ClassScheduleCreateManyArgs} args - Arguments to create many ClassSchedules.
     * @example
     * // Create many ClassSchedules
     * const classSchedule = await prisma.classSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassScheduleCreateManyArgs>(args?: SelectSubset<T, ClassScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClassSchedule.
     * @param {ClassScheduleDeleteArgs} args - Arguments to delete one ClassSchedule.
     * @example
     * // Delete one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.delete({
     *   where: {
     *     // ... filter to delete one ClassSchedule
     *   }
     * })
     * 
     */
    delete<T extends ClassScheduleDeleteArgs>(args: SelectSubset<T, ClassScheduleDeleteArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSchedule.
     * @param {ClassScheduleUpdateArgs} args - Arguments to update one ClassSchedule.
     * @example
     * // Update one ClassSchedule
     * const classSchedule = await prisma.classSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassScheduleUpdateArgs>(args: SelectSubset<T, ClassScheduleUpdateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSchedules.
     * @param {ClassScheduleDeleteManyArgs} args - Arguments to filter ClassSchedules to delete.
     * @example
     * // Delete a few ClassSchedules
     * const { count } = await prisma.classSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassScheduleDeleteManyArgs>(args?: SelectSubset<T, ClassScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSchedules
     * const classSchedule = await prisma.classSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassScheduleUpdateManyArgs>(args: SelectSubset<T, ClassScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassSchedule.
     * @param {ClassScheduleUpsertArgs} args - Arguments to update or create a ClassSchedule.
     * @example
     * // Update or create a ClassSchedule
     * const classSchedule = await prisma.classSchedule.upsert({
     *   create: {
     *     // ... data to create a ClassSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ClassScheduleUpsertArgs>(args: SelectSubset<T, ClassScheduleUpsertArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSchedules that matches the filter.
     * @param {ClassScheduleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const classSchedule = await prisma.classSchedule.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ClassScheduleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ClassSchedule.
     * @param {ClassScheduleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const classSchedule = await prisma.classSchedule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ClassScheduleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleCountArgs} args - Arguments to filter ClassSchedules to count.
     * @example
     * // Count the number of ClassSchedules
     * const count = await prisma.classSchedule.count({
     *   where: {
     *     // ... the filter for the ClassSchedules we want to count
     *   }
     * })
    **/
    count<T extends ClassScheduleCountArgs>(
      args?: Subset<T, ClassScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassScheduleAggregateArgs>(args: Subset<T, ClassScheduleAggregateArgs>): Prisma.PrismaPromise<GetClassScheduleAggregateType<T>>

    /**
     * Group by ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ClassScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSchedule model
   */
  readonly fields: ClassScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ClassSchedule$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ClassSchedule$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trainerAssignments<T extends ClassSchedule$trainerAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, ClassSchedule$trainerAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassSchedule model
   */
  interface ClassScheduleFieldRefs {
    readonly id: FieldRef<"ClassSchedule", 'String'>
    readonly date: FieldRef<"ClassSchedule", 'DateTime'>
    readonly startTime: FieldRef<"ClassSchedule", 'DateTime'>
    readonly endTime: FieldRef<"ClassSchedule", 'DateTime'>
    readonly maxTrainees: FieldRef<"ClassSchedule", 'Int'>
    readonly trainerId: FieldRef<"ClassSchedule", 'String'>
    readonly createdAt: FieldRef<"ClassSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassSchedule findUnique
   */
  export type ClassScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findUniqueOrThrow
   */
  export type ClassScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findFirst
   */
  export type ClassScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findFirstOrThrow
   */
  export type ClassScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findMany
   */
  export type ClassScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedules to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule create
   */
  export type ClassScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSchedule.
     */
    data: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
  }

  /**
   * ClassSchedule createMany
   */
  export type ClassScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSchedules.
     */
    data: ClassScheduleCreateManyInput | ClassScheduleCreateManyInput[]
  }

  /**
   * ClassSchedule update
   */
  export type ClassScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSchedule.
     */
    data: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
    /**
     * Choose, which ClassSchedule to update.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule updateMany
   */
  export type ClassScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSchedules.
     */
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ClassSchedules to update
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to update.
     */
    limit?: number
  }

  /**
   * ClassSchedule upsert
   */
  export type ClassScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSchedule to update in case it exists.
     */
    where: ClassScheduleWhereUniqueInput
    /**
     * In case the ClassSchedule found by the `where` argument doesn't exist, create a new ClassSchedule with this data.
     */
    create: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
    /**
     * In case the ClassSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
  }

  /**
   * ClassSchedule delete
   */
  export type ClassScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter which ClassSchedule to delete.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule deleteMany
   */
  export type ClassScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedules to delete
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to delete.
     */
    limit?: number
  }

  /**
   * ClassSchedule findRaw
   */
  export type ClassScheduleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ClassSchedule aggregateRaw
   */
  export type ClassScheduleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ClassSchedule.bookings
   */
  export type ClassSchedule$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ClassSchedule.trainerAssignments
   */
  export type ClassSchedule$trainerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    where?: TrainerAssignmentWhereInput
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    cursor?: TrainerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainerAssignmentScalarFieldEnum | TrainerAssignmentScalarFieldEnum[]
  }

  /**
   * ClassSchedule without action
   */
  export type ClassScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    traineeId: string | null
    classScheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    traineeId: string | null
    classScheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    traineeId: number
    classScheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    traineeId?: true
    classScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    traineeId?: true
    classScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    traineeId?: true
    classScheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    traineeId: string
    classScheduleId: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    traineeId?: boolean
    classScheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainee?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    traineeId?: boolean
    classScheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "traineeId" | "classScheduleId" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainee?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      trainee: Prisma.$UserPayload<ExtArgs>
      classSchedule: Prisma.$ClassSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      traineeId: string
      classScheduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * @param {BookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const booking = await prisma.booking.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Booking.
     * @param {BookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const booking = await prisma.booking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classSchedule<T extends ClassScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassScheduleDefaultArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly traineeId: FieldRef<"Booking", 'String'>
    readonly classScheduleId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking findRaw
   */
  export type BookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking aggregateRaw
   */
  export type BookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model TrainerAssignment
   */

  export type AggregateTrainerAssignment = {
    _count: TrainerAssignmentCountAggregateOutputType | null
    _min: TrainerAssignmentMinAggregateOutputType | null
    _max: TrainerAssignmentMaxAggregateOutputType | null
  }

  export type TrainerAssignmentMinAggregateOutputType = {
    id: string | null
    trainerId: string | null
    classScheduleId: string | null
    assignedAt: Date | null
    updatedAt: Date | null
  }

  export type TrainerAssignmentMaxAggregateOutputType = {
    id: string | null
    trainerId: string | null
    classScheduleId: string | null
    assignedAt: Date | null
    updatedAt: Date | null
  }

  export type TrainerAssignmentCountAggregateOutputType = {
    id: number
    trainerId: number
    classScheduleId: number
    assignedAt: number
    updatedAt: number
    _all: number
  }


  export type TrainerAssignmentMinAggregateInputType = {
    id?: true
    trainerId?: true
    classScheduleId?: true
    assignedAt?: true
    updatedAt?: true
  }

  export type TrainerAssignmentMaxAggregateInputType = {
    id?: true
    trainerId?: true
    classScheduleId?: true
    assignedAt?: true
    updatedAt?: true
  }

  export type TrainerAssignmentCountAggregateInputType = {
    id?: true
    trainerId?: true
    classScheduleId?: true
    assignedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainerAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainerAssignment to aggregate.
     */
    where?: TrainerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAssignments to fetch.
     */
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainerAssignments
    **/
    _count?: true | TrainerAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerAssignmentMaxAggregateInputType
  }

  export type GetTrainerAssignmentAggregateType<T extends TrainerAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainerAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainerAssignment[P]>
      : GetScalarType<T[P], AggregateTrainerAssignment[P]>
  }




  export type TrainerAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerAssignmentWhereInput
    orderBy?: TrainerAssignmentOrderByWithAggregationInput | TrainerAssignmentOrderByWithAggregationInput[]
    by: TrainerAssignmentScalarFieldEnum[] | TrainerAssignmentScalarFieldEnum
    having?: TrainerAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerAssignmentCountAggregateInputType | true
    _min?: TrainerAssignmentMinAggregateInputType
    _max?: TrainerAssignmentMaxAggregateInputType
  }

  export type TrainerAssignmentGroupByOutputType = {
    id: string
    trainerId: string
    classScheduleId: string
    assignedAt: Date
    updatedAt: Date
    _count: TrainerAssignmentCountAggregateOutputType | null
    _min: TrainerAssignmentMinAggregateOutputType | null
    _max: TrainerAssignmentMaxAggregateOutputType | null
  }

  type GetTrainerAssignmentGroupByPayload<T extends TrainerAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainerAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TrainerAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainerId?: boolean
    classScheduleId?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
    trainer?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainerAssignment"]>



  export type TrainerAssignmentSelectScalar = {
    id?: boolean
    trainerId?: boolean
    classScheduleId?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
  }

  export type TrainerAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trainerId" | "classScheduleId" | "assignedAt" | "updatedAt", ExtArgs["result"]["trainerAssignment"]>
  export type TrainerAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }

  export type $TrainerAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainerAssignment"
    objects: {
      trainer: Prisma.$UserPayload<ExtArgs>
      classSchedule: Prisma.$ClassSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trainerId: string
      classScheduleId: string
      assignedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainerAssignment"]>
    composites: {}
  }

  type TrainerAssignmentGetPayload<S extends boolean | null | undefined | TrainerAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TrainerAssignmentPayload, S>

  type TrainerAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainerAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainerAssignmentCountAggregateInputType | true
    }

  export interface TrainerAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainerAssignment'], meta: { name: 'TrainerAssignment' } }
    /**
     * Find zero or one TrainerAssignment that matches the filter.
     * @param {TrainerAssignmentFindUniqueArgs} args - Arguments to find a TrainerAssignment
     * @example
     * // Get one TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainerAssignmentFindUniqueArgs>(args: SelectSubset<T, TrainerAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainerAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainerAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TrainerAssignment
     * @example
     * // Get one TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainerAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainerAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainerAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentFindFirstArgs} args - Arguments to find a TrainerAssignment
     * @example
     * // Get one TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainerAssignmentFindFirstArgs>(args?: SelectSubset<T, TrainerAssignmentFindFirstArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainerAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentFindFirstOrThrowArgs} args - Arguments to find a TrainerAssignment
     * @example
     * // Get one TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainerAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainerAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainerAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainerAssignments
     * const trainerAssignments = await prisma.trainerAssignment.findMany()
     * 
     * // Get first 10 TrainerAssignments
     * const trainerAssignments = await prisma.trainerAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerAssignmentWithIdOnly = await prisma.trainerAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainerAssignmentFindManyArgs>(args?: SelectSubset<T, TrainerAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainerAssignment.
     * @param {TrainerAssignmentCreateArgs} args - Arguments to create a TrainerAssignment.
     * @example
     * // Create one TrainerAssignment
     * const TrainerAssignment = await prisma.trainerAssignment.create({
     *   data: {
     *     // ... data to create a TrainerAssignment
     *   }
     * })
     * 
     */
    create<T extends TrainerAssignmentCreateArgs>(args: SelectSubset<T, TrainerAssignmentCreateArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainerAssignments.
     * @param {TrainerAssignmentCreateManyArgs} args - Arguments to create many TrainerAssignments.
     * @example
     * // Create many TrainerAssignments
     * const trainerAssignment = await prisma.trainerAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainerAssignmentCreateManyArgs>(args?: SelectSubset<T, TrainerAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainerAssignment.
     * @param {TrainerAssignmentDeleteArgs} args - Arguments to delete one TrainerAssignment.
     * @example
     * // Delete one TrainerAssignment
     * const TrainerAssignment = await prisma.trainerAssignment.delete({
     *   where: {
     *     // ... filter to delete one TrainerAssignment
     *   }
     * })
     * 
     */
    delete<T extends TrainerAssignmentDeleteArgs>(args: SelectSubset<T, TrainerAssignmentDeleteArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainerAssignment.
     * @param {TrainerAssignmentUpdateArgs} args - Arguments to update one TrainerAssignment.
     * @example
     * // Update one TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainerAssignmentUpdateArgs>(args: SelectSubset<T, TrainerAssignmentUpdateArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainerAssignments.
     * @param {TrainerAssignmentDeleteManyArgs} args - Arguments to filter TrainerAssignments to delete.
     * @example
     * // Delete a few TrainerAssignments
     * const { count } = await prisma.trainerAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainerAssignmentDeleteManyArgs>(args?: SelectSubset<T, TrainerAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainerAssignments
     * const trainerAssignment = await prisma.trainerAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainerAssignmentUpdateManyArgs>(args: SelectSubset<T, TrainerAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainerAssignment.
     * @param {TrainerAssignmentUpsertArgs} args - Arguments to update or create a TrainerAssignment.
     * @example
     * // Update or create a TrainerAssignment
     * const trainerAssignment = await prisma.trainerAssignment.upsert({
     *   create: {
     *     // ... data to create a TrainerAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainerAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TrainerAssignmentUpsertArgs>(args: SelectSubset<T, TrainerAssignmentUpsertArgs<ExtArgs>>): Prisma__TrainerAssignmentClient<$Result.GetResult<Prisma.$TrainerAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainerAssignments that matches the filter.
     * @param {TrainerAssignmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const trainerAssignment = await prisma.trainerAssignment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TrainerAssignmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TrainerAssignment.
     * @param {TrainerAssignmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const trainerAssignment = await prisma.trainerAssignment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TrainerAssignmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TrainerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentCountArgs} args - Arguments to filter TrainerAssignments to count.
     * @example
     * // Count the number of TrainerAssignments
     * const count = await prisma.trainerAssignment.count({
     *   where: {
     *     // ... the filter for the TrainerAssignments we want to count
     *   }
     * })
    **/
    count<T extends TrainerAssignmentCountArgs>(
      args?: Subset<T, TrainerAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainerAssignmentAggregateArgs>(args: Subset<T, TrainerAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTrainerAssignmentAggregateType<T>>

    /**
     * Group by TrainerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainerAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TrainerAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainerAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainerAssignment model
   */
  readonly fields: TrainerAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainerAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainerAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classSchedule<T extends ClassScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassScheduleDefaultArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainerAssignment model
   */
  interface TrainerAssignmentFieldRefs {
    readonly id: FieldRef<"TrainerAssignment", 'String'>
    readonly trainerId: FieldRef<"TrainerAssignment", 'String'>
    readonly classScheduleId: FieldRef<"TrainerAssignment", 'String'>
    readonly assignedAt: FieldRef<"TrainerAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainerAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainerAssignment findUnique
   */
  export type TrainerAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAssignment to fetch.
     */
    where: TrainerAssignmentWhereUniqueInput
  }

  /**
   * TrainerAssignment findUniqueOrThrow
   */
  export type TrainerAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAssignment to fetch.
     */
    where: TrainerAssignmentWhereUniqueInput
  }

  /**
   * TrainerAssignment findFirst
   */
  export type TrainerAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAssignment to fetch.
     */
    where?: TrainerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAssignments to fetch.
     */
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAssignments.
     */
    cursor?: TrainerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAssignments.
     */
    distinct?: TrainerAssignmentScalarFieldEnum | TrainerAssignmentScalarFieldEnum[]
  }

  /**
   * TrainerAssignment findFirstOrThrow
   */
  export type TrainerAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAssignment to fetch.
     */
    where?: TrainerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAssignments to fetch.
     */
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAssignments.
     */
    cursor?: TrainerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAssignments.
     */
    distinct?: TrainerAssignmentScalarFieldEnum | TrainerAssignmentScalarFieldEnum[]
  }

  /**
   * TrainerAssignment findMany
   */
  export type TrainerAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAssignments to fetch.
     */
    where?: TrainerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAssignments to fetch.
     */
    orderBy?: TrainerAssignmentOrderByWithRelationInput | TrainerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainerAssignments.
     */
    cursor?: TrainerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAssignments.
     */
    skip?: number
    distinct?: TrainerAssignmentScalarFieldEnum | TrainerAssignmentScalarFieldEnum[]
  }

  /**
   * TrainerAssignment create
   */
  export type TrainerAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainerAssignment.
     */
    data: XOR<TrainerAssignmentCreateInput, TrainerAssignmentUncheckedCreateInput>
  }

  /**
   * TrainerAssignment createMany
   */
  export type TrainerAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainerAssignments.
     */
    data: TrainerAssignmentCreateManyInput | TrainerAssignmentCreateManyInput[]
  }

  /**
   * TrainerAssignment update
   */
  export type TrainerAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainerAssignment.
     */
    data: XOR<TrainerAssignmentUpdateInput, TrainerAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TrainerAssignment to update.
     */
    where: TrainerAssignmentWhereUniqueInput
  }

  /**
   * TrainerAssignment updateMany
   */
  export type TrainerAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainerAssignments.
     */
    data: XOR<TrainerAssignmentUpdateManyMutationInput, TrainerAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TrainerAssignments to update
     */
    where?: TrainerAssignmentWhereInput
    /**
     * Limit how many TrainerAssignments to update.
     */
    limit?: number
  }

  /**
   * TrainerAssignment upsert
   */
  export type TrainerAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainerAssignment to update in case it exists.
     */
    where: TrainerAssignmentWhereUniqueInput
    /**
     * In case the TrainerAssignment found by the `where` argument doesn't exist, create a new TrainerAssignment with this data.
     */
    create: XOR<TrainerAssignmentCreateInput, TrainerAssignmentUncheckedCreateInput>
    /**
     * In case the TrainerAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerAssignmentUpdateInput, TrainerAssignmentUncheckedUpdateInput>
  }

  /**
   * TrainerAssignment delete
   */
  export type TrainerAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TrainerAssignment to delete.
     */
    where: TrainerAssignmentWhereUniqueInput
  }

  /**
   * TrainerAssignment deleteMany
   */
  export type TrainerAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainerAssignments to delete
     */
    where?: TrainerAssignmentWhereInput
    /**
     * Limit how many TrainerAssignments to delete.
     */
    limit?: number
  }

  /**
   * TrainerAssignment findRaw
   */
  export type TrainerAssignmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrainerAssignment aggregateRaw
   */
  export type TrainerAssignmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrainerAssignment without action
   */
  export type TrainerAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAssignment
     */
    select?: TrainerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAssignment
     */
    omit?: TrainerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassScheduleScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    maxTrainees: 'maxTrainees',
    trainerId: 'trainerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScheduleScalarFieldEnum = (typeof ClassScheduleScalarFieldEnum)[keyof typeof ClassScheduleScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    traineeId: 'traineeId',
    classScheduleId: 'classScheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const TrainerAssignmentScalarFieldEnum: {
    id: 'id',
    trainerId: 'trainerId',
    classScheduleId: 'classScheduleId',
    assignedAt: 'assignedAt',
    updatedAt: 'updatedAt'
  };

  export type TrainerAssignmentScalarFieldEnum = (typeof TrainerAssignmentScalarFieldEnum)[keyof typeof TrainerAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conductingClasses?: ClassScheduleListRelationFilter
    bookings?: BookingListRelationFilter
    trainerAssignments?: TrainerAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductingClasses?: ClassScheduleOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    trainerAssignments?: TrainerAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conductingClasses?: ClassScheduleListRelationFilter
    bookings?: BookingListRelationFilter
    trainerAssignments?: TrainerAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassScheduleWhereInput = {
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    id?: StringFilter<"ClassSchedule"> | string
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    maxTrainees?: IntFilter<"ClassSchedule"> | number
    trainerId?: StringFilter<"ClassSchedule"> | string
    createdAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    trainer?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    trainerAssignments?: TrainerAssignmentListRelationFilter
  }

  export type ClassScheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxTrainees?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainer?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    trainerAssignments?: TrainerAssignmentOrderByRelationAggregateInput
  }

  export type ClassScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    maxTrainees?: IntFilter<"ClassSchedule"> | number
    trainerId?: StringFilter<"ClassSchedule"> | string
    createdAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    trainer?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    trainerAssignments?: TrainerAssignmentListRelationFilter
  }, "id">

  export type ClassScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxTrainees?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassScheduleCountOrderByAggregateInput
    _avg?: ClassScheduleAvgOrderByAggregateInput
    _max?: ClassScheduleMaxOrderByAggregateInput
    _min?: ClassScheduleMinOrderByAggregateInput
    _sum?: ClassScheduleSumOrderByAggregateInput
  }

  export type ClassScheduleScalarWhereWithAggregatesInput = {
    AND?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    OR?: ClassScheduleScalarWhereWithAggregatesInput[]
    NOT?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassSchedule"> | string
    date?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    maxTrainees?: IntWithAggregatesFilter<"ClassSchedule"> | number
    trainerId?: StringWithAggregatesFilter<"ClassSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    traineeId?: StringFilter<"Booking"> | string
    classScheduleId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    trainee?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    traineeId?: SortOrder
    classScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainee?: UserOrderByWithRelationInput
    classSchedule?: ClassScheduleOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    traineeId_classScheduleId?: BookingTraineeIdClassScheduleIdCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    traineeId?: StringFilter<"Booking"> | string
    classScheduleId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    trainee?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }, "id" | "traineeId_classScheduleId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    traineeId?: SortOrder
    classScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    traineeId?: StringWithAggregatesFilter<"Booking"> | string
    classScheduleId?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type TrainerAssignmentWhereInput = {
    AND?: TrainerAssignmentWhereInput | TrainerAssignmentWhereInput[]
    OR?: TrainerAssignmentWhereInput[]
    NOT?: TrainerAssignmentWhereInput | TrainerAssignmentWhereInput[]
    id?: StringFilter<"TrainerAssignment"> | string
    trainerId?: StringFilter<"TrainerAssignment"> | string
    classScheduleId?: StringFilter<"TrainerAssignment"> | string
    assignedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
    trainer?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }

  export type TrainerAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    trainerId?: SortOrder
    classScheduleId?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    trainer?: UserOrderByWithRelationInput
    classSchedule?: ClassScheduleOrderByWithRelationInput
  }

  export type TrainerAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainerAssignmentWhereInput | TrainerAssignmentWhereInput[]
    OR?: TrainerAssignmentWhereInput[]
    NOT?: TrainerAssignmentWhereInput | TrainerAssignmentWhereInput[]
    trainerId?: StringFilter<"TrainerAssignment"> | string
    classScheduleId?: StringFilter<"TrainerAssignment"> | string
    assignedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
    trainer?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }, "id">

  export type TrainerAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    trainerId?: SortOrder
    classScheduleId?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainerAssignmentCountOrderByAggregateInput
    _max?: TrainerAssignmentMaxOrderByAggregateInput
    _min?: TrainerAssignmentMinOrderByAggregateInput
  }

  export type TrainerAssignmentScalarWhereWithAggregatesInput = {
    AND?: TrainerAssignmentScalarWhereWithAggregatesInput | TrainerAssignmentScalarWhereWithAggregatesInput[]
    OR?: TrainerAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TrainerAssignmentScalarWhereWithAggregatesInput | TrainerAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainerAssignment"> | string
    trainerId?: StringWithAggregatesFilter<"TrainerAssignment"> | string
    classScheduleId?: StringWithAggregatesFilter<"TrainerAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"TrainerAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainerAssignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleCreateNestedManyWithoutTrainerInput
    bookings?: BookingCreateNestedManyWithoutTraineeInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutTrainerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleUncheckedCreateNestedManyWithoutTrainerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTraineeInput
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUpdateManyWithoutTrainerNestedInput
    bookings?: BookingUpdateManyWithoutTraineeNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutTrainerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUncheckedUpdateManyWithoutTrainerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTraineeNestedInput
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleCreateInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer: UserCreateNestedOneWithoutConductingClassesInput
    bookings?: BookingCreateNestedManyWithoutClassScheduleInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    trainerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassScheduleInput
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneRequiredWithoutConductingClassesNestedInput
    bookings?: BookingUpdateManyWithoutClassScheduleNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    trainerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassScheduleNestedInput
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleCreateManyInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    trainerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    trainerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainee: UserCreateNestedOneWithoutBookingsInput
    classSchedule: ClassScheduleCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    traineeId: string
    classScheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainee?: UserUpdateOneRequiredWithoutBookingsNestedInput
    classSchedule?: ClassScheduleUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    traineeId?: StringFieldUpdateOperationsInput | string
    classScheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    traineeId: string
    classScheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    traineeId?: StringFieldUpdateOperationsInput | string
    classScheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    updatedAt?: Date | string
    trainer: UserCreateNestedOneWithoutTrainerAssignmentsInput
    classSchedule: ClassScheduleCreateNestedOneWithoutTrainerAssignmentsInput
  }

  export type TrainerAssignmentUncheckedCreateInput = {
    id?: string
    trainerId: string
    classScheduleId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneRequiredWithoutTrainerAssignmentsNestedInput
    classSchedule?: ClassScheduleUpdateOneRequiredWithoutTrainerAssignmentsNestedInput
  }

  export type TrainerAssignmentUncheckedUpdateInput = {
    trainerId?: StringFieldUpdateOperationsInput | string
    classScheduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentCreateManyInput = {
    id?: string
    trainerId: string
    classScheduleId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentUncheckedUpdateManyInput = {
    trainerId?: StringFieldUpdateOperationsInput | string
    classScheduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassScheduleListRelationFilter = {
    every?: ClassScheduleWhereInput
    some?: ClassScheduleWhereInput
    none?: ClassScheduleWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type TrainerAssignmentListRelationFilter = {
    every?: TrainerAssignmentWhereInput
    some?: TrainerAssignmentWhereInput
    none?: TrainerAssignmentWhereInput
  }

  export type ClassScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainerAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxTrainees?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleAvgOrderByAggregateInput = {
    maxTrainees?: SortOrder
  }

  export type ClassScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxTrainees?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxTrainees?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleSumOrderByAggregateInput = {
    maxTrainees?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClassScheduleScalarRelationFilter = {
    is?: ClassScheduleWhereInput
    isNot?: ClassScheduleWhereInput
  }

  export type BookingTraineeIdClassScheduleIdCompoundUniqueInput = {
    traineeId: string
    classScheduleId: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    traineeId?: SortOrder
    classScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    traineeId?: SortOrder
    classScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    traineeId?: SortOrder
    classScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    classScheduleId?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    classScheduleId?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    classScheduleId?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput> | ClassScheduleCreateWithoutTrainerInput[] | ClassScheduleUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerInput | ClassScheduleCreateOrConnectWithoutTrainerInput[]
    createMany?: ClassScheduleCreateManyTrainerInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTraineeInput = {
    create?: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput> | BookingCreateWithoutTraineeInput[] | BookingUncheckedCreateWithoutTraineeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTraineeInput | BookingCreateOrConnectWithoutTraineeInput[]
    createMany?: BookingCreateManyTraineeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainerAssignmentCreateNestedManyWithoutTrainerInput = {
    create?: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput> | TrainerAssignmentCreateWithoutTrainerInput[] | TrainerAssignmentUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutTrainerInput | TrainerAssignmentCreateOrConnectWithoutTrainerInput[]
    createMany?: TrainerAssignmentCreateManyTrainerInputEnvelope
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
  }

  export type ClassScheduleUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput> | ClassScheduleCreateWithoutTrainerInput[] | ClassScheduleUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerInput | ClassScheduleCreateOrConnectWithoutTrainerInput[]
    createMany?: ClassScheduleCreateManyTrainerInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTraineeInput = {
    create?: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput> | BookingCreateWithoutTraineeInput[] | BookingUncheckedCreateWithoutTraineeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTraineeInput | BookingCreateOrConnectWithoutTraineeInput[]
    createMany?: BookingCreateManyTraineeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainerAssignmentUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput> | TrainerAssignmentCreateWithoutTrainerInput[] | TrainerAssignmentUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutTrainerInput | TrainerAssignmentCreateOrConnectWithoutTrainerInput[]
    createMany?: TrainerAssignmentCreateManyTrainerInputEnvelope
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassScheduleUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput> | ClassScheduleCreateWithoutTrainerInput[] | ClassScheduleUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerInput | ClassScheduleCreateOrConnectWithoutTrainerInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutTrainerInput | ClassScheduleUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClassScheduleCreateManyTrainerInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutTrainerInput | ClassScheduleUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutTrainerInput | ClassScheduleUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTraineeNestedInput = {
    create?: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput> | BookingCreateWithoutTraineeInput[] | BookingUncheckedCreateWithoutTraineeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTraineeInput | BookingCreateOrConnectWithoutTraineeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTraineeInput | BookingUpsertWithWhereUniqueWithoutTraineeInput[]
    createMany?: BookingCreateManyTraineeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTraineeInput | BookingUpdateWithWhereUniqueWithoutTraineeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTraineeInput | BookingUpdateManyWithWhereWithoutTraineeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainerAssignmentUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput> | TrainerAssignmentCreateWithoutTrainerInput[] | TrainerAssignmentUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutTrainerInput | TrainerAssignmentCreateOrConnectWithoutTrainerInput[]
    upsert?: TrainerAssignmentUpsertWithWhereUniqueWithoutTrainerInput | TrainerAssignmentUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: TrainerAssignmentCreateManyTrainerInputEnvelope
    set?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    disconnect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    delete?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    update?: TrainerAssignmentUpdateWithWhereUniqueWithoutTrainerInput | TrainerAssignmentUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: TrainerAssignmentUpdateManyWithWhereWithoutTrainerInput | TrainerAssignmentUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
  }

  export type ClassScheduleUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput> | ClassScheduleCreateWithoutTrainerInput[] | ClassScheduleUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerInput | ClassScheduleCreateOrConnectWithoutTrainerInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutTrainerInput | ClassScheduleUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClassScheduleCreateManyTrainerInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutTrainerInput | ClassScheduleUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutTrainerInput | ClassScheduleUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTraineeNestedInput = {
    create?: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput> | BookingCreateWithoutTraineeInput[] | BookingUncheckedCreateWithoutTraineeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTraineeInput | BookingCreateOrConnectWithoutTraineeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTraineeInput | BookingUpsertWithWhereUniqueWithoutTraineeInput[]
    createMany?: BookingCreateManyTraineeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTraineeInput | BookingUpdateWithWhereUniqueWithoutTraineeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTraineeInput | BookingUpdateManyWithWhereWithoutTraineeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainerAssignmentUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput> | TrainerAssignmentCreateWithoutTrainerInput[] | TrainerAssignmentUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutTrainerInput | TrainerAssignmentCreateOrConnectWithoutTrainerInput[]
    upsert?: TrainerAssignmentUpsertWithWhereUniqueWithoutTrainerInput | TrainerAssignmentUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: TrainerAssignmentCreateManyTrainerInputEnvelope
    set?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    disconnect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    delete?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    update?: TrainerAssignmentUpdateWithWhereUniqueWithoutTrainerInput | TrainerAssignmentUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: TrainerAssignmentUpdateManyWithWhereWithoutTrainerInput | TrainerAssignmentUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConductingClassesInput = {
    create?: XOR<UserCreateWithoutConductingClassesInput, UserUncheckedCreateWithoutConductingClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductingClassesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput> | BookingCreateWithoutClassScheduleInput[] | BookingUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassScheduleInput | BookingCreateOrConnectWithoutClassScheduleInput[]
    createMany?: BookingCreateManyClassScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainerAssignmentCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput> | TrainerAssignmentCreateWithoutClassScheduleInput[] | TrainerAssignmentUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutClassScheduleInput | TrainerAssignmentCreateOrConnectWithoutClassScheduleInput[]
    createMany?: TrainerAssignmentCreateManyClassScheduleInputEnvelope
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput> | BookingCreateWithoutClassScheduleInput[] | BookingUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassScheduleInput | BookingCreateOrConnectWithoutClassScheduleInput[]
    createMany?: BookingCreateManyClassScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainerAssignmentUncheckedCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput> | TrainerAssignmentCreateWithoutClassScheduleInput[] | TrainerAssignmentUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutClassScheduleInput | TrainerAssignmentCreateOrConnectWithoutClassScheduleInput[]
    createMany?: TrainerAssignmentCreateManyClassScheduleInputEnvelope
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutConductingClassesNestedInput = {
    create?: XOR<UserCreateWithoutConductingClassesInput, UserUncheckedCreateWithoutConductingClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductingClassesInput
    upsert?: UserUpsertWithoutConductingClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConductingClassesInput, UserUpdateWithoutConductingClassesInput>, UserUncheckedUpdateWithoutConductingClassesInput>
  }

  export type BookingUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput> | BookingCreateWithoutClassScheduleInput[] | BookingUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassScheduleInput | BookingCreateOrConnectWithoutClassScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClassScheduleInput | BookingUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: BookingCreateManyClassScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClassScheduleInput | BookingUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClassScheduleInput | BookingUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainerAssignmentUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput> | TrainerAssignmentCreateWithoutClassScheduleInput[] | TrainerAssignmentUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutClassScheduleInput | TrainerAssignmentCreateOrConnectWithoutClassScheduleInput[]
    upsert?: TrainerAssignmentUpsertWithWhereUniqueWithoutClassScheduleInput | TrainerAssignmentUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: TrainerAssignmentCreateManyClassScheduleInputEnvelope
    set?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    disconnect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    delete?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    update?: TrainerAssignmentUpdateWithWhereUniqueWithoutClassScheduleInput | TrainerAssignmentUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: TrainerAssignmentUpdateManyWithWhereWithoutClassScheduleInput | TrainerAssignmentUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput> | BookingCreateWithoutClassScheduleInput[] | BookingUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClassScheduleInput | BookingCreateOrConnectWithoutClassScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClassScheduleInput | BookingUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: BookingCreateManyClassScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClassScheduleInput | BookingUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClassScheduleInput | BookingUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput> | TrainerAssignmentCreateWithoutClassScheduleInput[] | TrainerAssignmentUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: TrainerAssignmentCreateOrConnectWithoutClassScheduleInput | TrainerAssignmentCreateOrConnectWithoutClassScheduleInput[]
    upsert?: TrainerAssignmentUpsertWithWhereUniqueWithoutClassScheduleInput | TrainerAssignmentUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: TrainerAssignmentCreateManyClassScheduleInputEnvelope
    set?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    disconnect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    delete?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    connect?: TrainerAssignmentWhereUniqueInput | TrainerAssignmentWhereUniqueInput[]
    update?: TrainerAssignmentUpdateWithWhereUniqueWithoutClassScheduleInput | TrainerAssignmentUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: TrainerAssignmentUpdateManyWithWhereWithoutClassScheduleInput | TrainerAssignmentUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassScheduleCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ClassScheduleCreateWithoutBookingsInput, ClassScheduleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutBookingsInput
    connect?: ClassScheduleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ClassScheduleUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutBookingsInput, ClassScheduleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutBookingsInput
    upsert?: ClassScheduleUpsertWithoutBookingsInput
    connect?: ClassScheduleWhereUniqueInput
    update?: XOR<XOR<ClassScheduleUpdateToOneWithWhereWithoutBookingsInput, ClassScheduleUpdateWithoutBookingsInput>, ClassScheduleUncheckedUpdateWithoutBookingsInput>
  }

  export type UserCreateNestedOneWithoutTrainerAssignmentsInput = {
    create?: XOR<UserCreateWithoutTrainerAssignmentsInput, UserUncheckedCreateWithoutTrainerAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainerAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassScheduleCreateNestedOneWithoutTrainerAssignmentsInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedCreateWithoutTrainerAssignmentsInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerAssignmentsInput
    connect?: ClassScheduleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrainerAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutTrainerAssignmentsInput, UserUncheckedCreateWithoutTrainerAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainerAssignmentsInput
    upsert?: UserUpsertWithoutTrainerAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrainerAssignmentsInput, UserUpdateWithoutTrainerAssignmentsInput>, UserUncheckedUpdateWithoutTrainerAssignmentsInput>
  }

  export type ClassScheduleUpdateOneRequiredWithoutTrainerAssignmentsNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedCreateWithoutTrainerAssignmentsInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTrainerAssignmentsInput
    upsert?: ClassScheduleUpsertWithoutTrainerAssignmentsInput
    connect?: ClassScheduleWhereUniqueInput
    update?: XOR<XOR<ClassScheduleUpdateToOneWithWhereWithoutTrainerAssignmentsInput, ClassScheduleUpdateWithoutTrainerAssignmentsInput>, ClassScheduleUncheckedUpdateWithoutTrainerAssignmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClassScheduleCreateWithoutTrainerInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutClassScheduleInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateWithoutTrainerInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassScheduleInput
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleCreateOrConnectWithoutTrainerInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput>
  }

  export type ClassScheduleCreateManyTrainerInputEnvelope = {
    data: ClassScheduleCreateManyTrainerInput | ClassScheduleCreateManyTrainerInput[]
  }

  export type BookingCreateWithoutTraineeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule: ClassScheduleCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutTraineeInput = {
    id?: string
    classScheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutTraineeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput>
  }

  export type BookingCreateManyTraineeInputEnvelope = {
    data: BookingCreateManyTraineeInput | BookingCreateManyTraineeInput[]
  }

  export type TrainerAssignmentCreateWithoutTrainerInput = {
    id?: string
    assignedAt?: Date | string
    updatedAt?: Date | string
    classSchedule: ClassScheduleCreateNestedOneWithoutTrainerAssignmentsInput
  }

  export type TrainerAssignmentUncheckedCreateWithoutTrainerInput = {
    id?: string
    classScheduleId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentCreateOrConnectWithoutTrainerInput = {
    where: TrainerAssignmentWhereUniqueInput
    create: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput>
  }

  export type TrainerAssignmentCreateManyTrainerInputEnvelope = {
    data: TrainerAssignmentCreateManyTrainerInput | TrainerAssignmentCreateManyTrainerInput[]
  }

  export type ClassScheduleUpsertWithWhereUniqueWithoutTrainerInput = {
    where: ClassScheduleWhereUniqueInput
    update: XOR<ClassScheduleUpdateWithoutTrainerInput, ClassScheduleUncheckedUpdateWithoutTrainerInput>
    create: XOR<ClassScheduleCreateWithoutTrainerInput, ClassScheduleUncheckedCreateWithoutTrainerInput>
  }

  export type ClassScheduleUpdateWithWhereUniqueWithoutTrainerInput = {
    where: ClassScheduleWhereUniqueInput
    data: XOR<ClassScheduleUpdateWithoutTrainerInput, ClassScheduleUncheckedUpdateWithoutTrainerInput>
  }

  export type ClassScheduleUpdateManyWithWhereWithoutTrainerInput = {
    where: ClassScheduleScalarWhereInput
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyWithoutTrainerInput>
  }

  export type ClassScheduleScalarWhereInput = {
    AND?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
    OR?: ClassScheduleScalarWhereInput[]
    NOT?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
    id?: StringFilter<"ClassSchedule"> | string
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    maxTrainees?: IntFilter<"ClassSchedule"> | number
    trainerId?: StringFilter<"ClassSchedule"> | string
    createdAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSchedule"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutTraineeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTraineeInput, BookingUncheckedUpdateWithoutTraineeInput>
    create: XOR<BookingCreateWithoutTraineeInput, BookingUncheckedCreateWithoutTraineeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTraineeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTraineeInput, BookingUncheckedUpdateWithoutTraineeInput>
  }

  export type BookingUpdateManyWithWhereWithoutTraineeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTraineeInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    traineeId?: StringFilter<"Booking"> | string
    classScheduleId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type TrainerAssignmentUpsertWithWhereUniqueWithoutTrainerInput = {
    where: TrainerAssignmentWhereUniqueInput
    update: XOR<TrainerAssignmentUpdateWithoutTrainerInput, TrainerAssignmentUncheckedUpdateWithoutTrainerInput>
    create: XOR<TrainerAssignmentCreateWithoutTrainerInput, TrainerAssignmentUncheckedCreateWithoutTrainerInput>
  }

  export type TrainerAssignmentUpdateWithWhereUniqueWithoutTrainerInput = {
    where: TrainerAssignmentWhereUniqueInput
    data: XOR<TrainerAssignmentUpdateWithoutTrainerInput, TrainerAssignmentUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainerAssignmentUpdateManyWithWhereWithoutTrainerInput = {
    where: TrainerAssignmentScalarWhereInput
    data: XOR<TrainerAssignmentUpdateManyMutationInput, TrainerAssignmentUncheckedUpdateManyWithoutTrainerInput>
  }

  export type TrainerAssignmentScalarWhereInput = {
    AND?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
    OR?: TrainerAssignmentScalarWhereInput[]
    NOT?: TrainerAssignmentScalarWhereInput | TrainerAssignmentScalarWhereInput[]
    id?: StringFilter<"TrainerAssignment"> | string
    trainerId?: StringFilter<"TrainerAssignment"> | string
    classScheduleId?: StringFilter<"TrainerAssignment"> | string
    assignedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAssignment"> | Date | string
  }

  export type UserCreateWithoutConductingClassesInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutTraineeInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutTrainerInput
  }

  export type UserUncheckedCreateWithoutConductingClassesInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTraineeInput
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type UserCreateOrConnectWithoutConductingClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConductingClassesInput, UserUncheckedCreateWithoutConductingClassesInput>
  }

  export type BookingCreateWithoutClassScheduleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainee: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutClassScheduleInput = {
    id?: string
    traineeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutClassScheduleInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput>
  }

  export type BookingCreateManyClassScheduleInputEnvelope = {
    data: BookingCreateManyClassScheduleInput | BookingCreateManyClassScheduleInput[]
  }

  export type TrainerAssignmentCreateWithoutClassScheduleInput = {
    id?: string
    assignedAt?: Date | string
    updatedAt?: Date | string
    trainer: UserCreateNestedOneWithoutTrainerAssignmentsInput
  }

  export type TrainerAssignmentUncheckedCreateWithoutClassScheduleInput = {
    id?: string
    trainerId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentCreateOrConnectWithoutClassScheduleInput = {
    where: TrainerAssignmentWhereUniqueInput
    create: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput>
  }

  export type TrainerAssignmentCreateManyClassScheduleInputEnvelope = {
    data: TrainerAssignmentCreateManyClassScheduleInput | TrainerAssignmentCreateManyClassScheduleInput[]
  }

  export type UserUpsertWithoutConductingClassesInput = {
    update: XOR<UserUpdateWithoutConductingClassesInput, UserUncheckedUpdateWithoutConductingClassesInput>
    create: XOR<UserCreateWithoutConductingClassesInput, UserUncheckedCreateWithoutConductingClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConductingClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConductingClassesInput, UserUncheckedUpdateWithoutConductingClassesInput>
  }

  export type UserUpdateWithoutConductingClassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutTraineeNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutTrainerNestedInput
  }

  export type UserUncheckedUpdateWithoutConductingClassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTraineeNestedInput
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutClassScheduleInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutClassScheduleInput, BookingUncheckedUpdateWithoutClassScheduleInput>
    create: XOR<BookingCreateWithoutClassScheduleInput, BookingUncheckedCreateWithoutClassScheduleInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutClassScheduleInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutClassScheduleInput, BookingUncheckedUpdateWithoutClassScheduleInput>
  }

  export type BookingUpdateManyWithWhereWithoutClassScheduleInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutClassScheduleInput>
  }

  export type TrainerAssignmentUpsertWithWhereUniqueWithoutClassScheduleInput = {
    where: TrainerAssignmentWhereUniqueInput
    update: XOR<TrainerAssignmentUpdateWithoutClassScheduleInput, TrainerAssignmentUncheckedUpdateWithoutClassScheduleInput>
    create: XOR<TrainerAssignmentCreateWithoutClassScheduleInput, TrainerAssignmentUncheckedCreateWithoutClassScheduleInput>
  }

  export type TrainerAssignmentUpdateWithWhereUniqueWithoutClassScheduleInput = {
    where: TrainerAssignmentWhereUniqueInput
    data: XOR<TrainerAssignmentUpdateWithoutClassScheduleInput, TrainerAssignmentUncheckedUpdateWithoutClassScheduleInput>
  }

  export type TrainerAssignmentUpdateManyWithWhereWithoutClassScheduleInput = {
    where: TrainerAssignmentScalarWhereInput
    data: XOR<TrainerAssignmentUpdateManyMutationInput, TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleCreateNestedManyWithoutTrainerInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutTrainerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleUncheckedCreateNestedManyWithoutTrainerInput
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ClassScheduleCreateWithoutBookingsInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer: UserCreateNestedOneWithoutConductingClassesInput
    trainerAssignments?: TrainerAssignmentCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateWithoutBookingsInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    trainerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainerAssignments?: TrainerAssignmentUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleCreateOrConnectWithoutBookingsInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutBookingsInput, ClassScheduleUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUpdateManyWithoutTrainerNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutTrainerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUncheckedUpdateManyWithoutTrainerNestedInput
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type ClassScheduleUpsertWithoutBookingsInput = {
    update: XOR<ClassScheduleUpdateWithoutBookingsInput, ClassScheduleUncheckedUpdateWithoutBookingsInput>
    create: XOR<ClassScheduleCreateWithoutBookingsInput, ClassScheduleUncheckedCreateWithoutBookingsInput>
    where?: ClassScheduleWhereInput
  }

  export type ClassScheduleUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ClassScheduleWhereInput
    data: XOR<ClassScheduleUpdateWithoutBookingsInput, ClassScheduleUncheckedUpdateWithoutBookingsInput>
  }

  export type ClassScheduleUpdateWithoutBookingsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneRequiredWithoutConductingClassesNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutBookingsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    trainerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type UserCreateWithoutTrainerAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleCreateNestedManyWithoutTrainerInput
    bookings?: BookingCreateNestedManyWithoutTraineeInput
  }

  export type UserUncheckedCreateWithoutTrainerAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    conductingClasses?: ClassScheduleUncheckedCreateNestedManyWithoutTrainerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTraineeInput
  }

  export type UserCreateOrConnectWithoutTrainerAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrainerAssignmentsInput, UserUncheckedCreateWithoutTrainerAssignmentsInput>
  }

  export type ClassScheduleCreateWithoutTrainerAssignmentsInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer: UserCreateNestedOneWithoutConductingClassesInput
    bookings?: BookingCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateWithoutTrainerAssignmentsInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    trainerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleCreateOrConnectWithoutTrainerAssignmentsInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedCreateWithoutTrainerAssignmentsInput>
  }

  export type UserUpsertWithoutTrainerAssignmentsInput = {
    update: XOR<UserUpdateWithoutTrainerAssignmentsInput, UserUncheckedUpdateWithoutTrainerAssignmentsInput>
    create: XOR<UserCreateWithoutTrainerAssignmentsInput, UserUncheckedCreateWithoutTrainerAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrainerAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrainerAssignmentsInput, UserUncheckedUpdateWithoutTrainerAssignmentsInput>
  }

  export type UserUpdateWithoutTrainerAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUpdateManyWithoutTrainerNestedInput
    bookings?: BookingUpdateManyWithoutTraineeNestedInput
  }

  export type UserUncheckedUpdateWithoutTrainerAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductingClasses?: ClassScheduleUncheckedUpdateManyWithoutTrainerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTraineeNestedInput
  }

  export type ClassScheduleUpsertWithoutTrainerAssignmentsInput = {
    update: XOR<ClassScheduleUpdateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedUpdateWithoutTrainerAssignmentsInput>
    create: XOR<ClassScheduleCreateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedCreateWithoutTrainerAssignmentsInput>
    where?: ClassScheduleWhereInput
  }

  export type ClassScheduleUpdateToOneWithWhereWithoutTrainerAssignmentsInput = {
    where?: ClassScheduleWhereInput
    data: XOR<ClassScheduleUpdateWithoutTrainerAssignmentsInput, ClassScheduleUncheckedUpdateWithoutTrainerAssignmentsInput>
  }

  export type ClassScheduleUpdateWithoutTrainerAssignmentsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneRequiredWithoutConductingClassesNestedInput
    bookings?: BookingUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutTrainerAssignmentsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    trainerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleCreateManyTrainerInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    maxTrainees?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyTraineeInput = {
    id?: string
    classScheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentCreateManyTrainerInput = {
    id?: string
    classScheduleId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleUpdateWithoutTrainerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutClassScheduleNestedInput
    trainerAssignments?: TrainerAssignmentUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutTrainerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutClassScheduleNestedInput
    trainerAssignments?: TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateManyWithoutTrainerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTrainees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTraineeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutTraineeInput = {
    classScheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutTraineeInput = {
    classScheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentUpdateWithoutTrainerInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUpdateOneRequiredWithoutTrainerAssignmentsNestedInput
  }

  export type TrainerAssignmentUncheckedUpdateWithoutTrainerInput = {
    classScheduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentUncheckedUpdateManyWithoutTrainerInput = {
    classScheduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyClassScheduleInput = {
    id?: string
    traineeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAssignmentCreateManyClassScheduleInput = {
    id?: string
    trainerId: string
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutClassScheduleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainee?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutClassScheduleInput = {
    traineeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutClassScheduleInput = {
    traineeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentUpdateWithoutClassScheduleInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneRequiredWithoutTrainerAssignmentsNestedInput
  }

  export type TrainerAssignmentUncheckedUpdateWithoutClassScheduleInput = {
    trainerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAssignmentUncheckedUpdateManyWithoutClassScheduleInput = {
    trainerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}