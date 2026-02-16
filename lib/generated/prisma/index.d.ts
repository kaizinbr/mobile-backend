
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model playing_with_neon
 * 
 */
export type playing_with_neon = $Result.DefaultSelection<Prisma.$playing_with_neonPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model TokenOTP
 * 
 */
export type TokenOTP = $Result.DefaultSelection<Prisma.$TokenOTPPayload>
/**
 * Model temp_users_import
 * 
 */
export type temp_users_import = $Result.DefaultSelection<Prisma.$temp_users_importPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Playing_with_neons
 * const playing_with_neons = await prisma.playing_with_neon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Playing_with_neons
   * const playing_with_neons = await prisma.playing_with_neon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.playing_with_neon`: Exposes CRUD operations for the **playing_with_neon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playing_with_neons
    * const playing_with_neons = await prisma.playing_with_neon.findMany()
    * ```
    */
  get playing_with_neon(): Prisma.playing_with_neonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenOTP`: Exposes CRUD operations for the **TokenOTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenOTPS
    * const tokenOTPS = await prisma.tokenOTP.findMany()
    * ```
    */
  get tokenOTP(): Prisma.TokenOTPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temp_users_import`: Exposes CRUD operations for the **temp_users_import** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temp_users_imports
    * const temp_users_imports = await prisma.temp_users_import.findMany()
    * ```
    */
  get temp_users_import(): Prisma.temp_users_importDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    playing_with_neon: 'playing_with_neon',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Profile: 'Profile',
    Comment: 'Comment',
    Follow: 'Follow',
    Like: 'Like',
    Notification: 'Notification',
    Rating: 'Rating',
    VerificationToken: 'VerificationToken',
    TokenOTP: 'TokenOTP',
    temp_users_import: 'temp_users_import'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "playing_with_neon" | "account" | "session" | "user" | "profile" | "comment" | "follow" | "like" | "notification" | "rating" | "verificationToken" | "tokenOTP" | "temp_users_import"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      playing_with_neon: {
        payload: Prisma.$playing_with_neonPayload<ExtArgs>
        fields: Prisma.playing_with_neonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playing_with_neonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playing_with_neonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findFirst: {
            args: Prisma.playing_with_neonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playing_with_neonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findMany: {
            args: Prisma.playing_with_neonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          create: {
            args: Prisma.playing_with_neonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          createMany: {
            args: Prisma.playing_with_neonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playing_with_neonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          delete: {
            args: Prisma.playing_with_neonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          update: {
            args: Prisma.playing_with_neonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          deleteMany: {
            args: Prisma.playing_with_neonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playing_with_neonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playing_with_neonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          upsert: {
            args: Prisma.playing_with_neonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          aggregate: {
            args: Prisma.Playing_with_neonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaying_with_neon>
          }
          groupBy: {
            args: Prisma.playing_with_neonGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonGroupByOutputType>[]
          }
          count: {
            args: Prisma.playing_with_neonCountArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      TokenOTP: {
        payload: Prisma.$TokenOTPPayload<ExtArgs>
        fields: Prisma.TokenOTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenOTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenOTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          findFirst: {
            args: Prisma.TokenOTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenOTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          findMany: {
            args: Prisma.TokenOTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>[]
          }
          create: {
            args: Prisma.TokenOTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          createMany: {
            args: Prisma.TokenOTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenOTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>[]
          }
          delete: {
            args: Prisma.TokenOTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          update: {
            args: Prisma.TokenOTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          deleteMany: {
            args: Prisma.TokenOTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenOTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenOTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>[]
          }
          upsert: {
            args: Prisma.TokenOTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenOTPPayload>
          }
          aggregate: {
            args: Prisma.TokenOTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenOTP>
          }
          groupBy: {
            args: Prisma.TokenOTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenOTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenOTPCountArgs<ExtArgs>
            result: $Utils.Optional<TokenOTPCountAggregateOutputType> | number
          }
        }
      }
      temp_users_import: {
        payload: Prisma.$temp_users_importPayload<ExtArgs>
        fields: Prisma.temp_users_importFieldRefs
        operations: {
          findUnique: {
            args: Prisma.temp_users_importFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.temp_users_importFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          findFirst: {
            args: Prisma.temp_users_importFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.temp_users_importFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          findMany: {
            args: Prisma.temp_users_importFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>[]
          }
          create: {
            args: Prisma.temp_users_importCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          createMany: {
            args: Prisma.temp_users_importCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.temp_users_importCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>[]
          }
          delete: {
            args: Prisma.temp_users_importDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          update: {
            args: Prisma.temp_users_importUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          deleteMany: {
            args: Prisma.temp_users_importDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.temp_users_importUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.temp_users_importUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>[]
          }
          upsert: {
            args: Prisma.temp_users_importUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_users_importPayload>
          }
          aggregate: {
            args: Prisma.Temp_users_importAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemp_users_import>
          }
          groupBy: {
            args: Prisma.temp_users_importGroupByArgs<ExtArgs>
            result: $Utils.Optional<Temp_users_importGroupByOutputType>[]
          }
          count: {
            args: Prisma.temp_users_importCountArgs<ExtArgs>
            result: $Utils.Optional<Temp_users_importCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    playing_with_neon?: playing_with_neonOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    profile?: ProfileOmit
    comment?: CommentOmit
    follow?: FollowOmit
    like?: LikeOmit
    notification?: NotificationOmit
    rating?: RatingOmit
    verificationToken?: VerificationTokenOmit
    tokenOTP?: TokenOTPOmit
    temp_users_import?: temp_users_importOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    Followed: number
    Followers: number
    Like: number
    Notification_Notification_senderIdToProfile: number
    Notification_Notification_userIdToProfile: number
    Rating: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Followed?: boolean | ProfileCountOutputTypeCountFollowedArgs
    Followers?: boolean | ProfileCountOutputTypeCountFollowersArgs
    Like?: boolean | ProfileCountOutputTypeCountLikeArgs
    Notification_Notification_senderIdToProfile?: boolean | ProfileCountOutputTypeCountNotification_Notification_senderIdToProfileArgs
    Notification_Notification_userIdToProfile?: boolean | ProfileCountOutputTypeCountNotification_Notification_userIdToProfileArgs
    Rating?: boolean | ProfileCountOutputTypeCountRatingArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotification_Notification_senderIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotification_Notification_userIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type RatingCountOutputType
   */

  export type RatingCountOutputType = {
    Like: number
    Notification: number
  }

  export type RatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like?: boolean | RatingCountOutputTypeCountLikeArgs
    Notification?: boolean | RatingCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingCountOutputType
     */
    select?: RatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model playing_with_neon
   */

  export type AggregatePlaying_with_neon = {
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  export type Playing_with_neonAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    teste: string | null
  }

  export type Playing_with_neonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    teste: string | null
  }

  export type Playing_with_neonCountAggregateOutputType = {
    id: number
    name: number
    value: number
    teste: number
    _all: number
  }


  export type Playing_with_neonAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    teste?: true
  }

  export type Playing_with_neonMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    teste?: true
  }

  export type Playing_with_neonCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    teste?: true
    _all?: true
  }

  export type Playing_with_neonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neon to aggregate.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playing_with_neons
    **/
    _count?: true | Playing_with_neonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playing_with_neonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playing_with_neonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playing_with_neonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type GetPlaying_with_neonAggregateType<T extends Playing_with_neonAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaying_with_neon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
      : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
  }




  export type playing_with_neonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playing_with_neonWhereInput
    orderBy?: playing_with_neonOrderByWithAggregationInput | playing_with_neonOrderByWithAggregationInput[]
    by: Playing_with_neonScalarFieldEnum[] | Playing_with_neonScalarFieldEnum
    having?: playing_with_neonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playing_with_neonCountAggregateInputType | true
    _avg?: Playing_with_neonAvgAggregateInputType
    _sum?: Playing_with_neonSumAggregateInputType
    _min?: Playing_with_neonMinAggregateInputType
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type Playing_with_neonGroupByOutputType = {
    id: number
    name: string
    value: number | null
    teste: string | null
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  type GetPlaying_with_neonGroupByPayload<T extends playing_with_neonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playing_with_neonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playing_with_neonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
            : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
        }
      >
    >


  export type playing_with_neonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    teste?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    teste?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    teste?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    teste?: boolean
  }

  export type playing_with_neonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "teste", ExtArgs["result"]["playing_with_neon"]>

  export type $playing_with_neonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playing_with_neon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number | null
      teste: string | null
    }, ExtArgs["result"]["playing_with_neon"]>
    composites: {}
  }

  type playing_with_neonGetPayload<S extends boolean | null | undefined | playing_with_neonDefaultArgs> = $Result.GetResult<Prisma.$playing_with_neonPayload, S>

  type playing_with_neonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playing_with_neonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Playing_with_neonCountAggregateInputType | true
    }

  export interface playing_with_neonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playing_with_neon'], meta: { name: 'playing_with_neon' } }
    /**
     * Find zero or one Playing_with_neon that matches the filter.
     * @param {playing_with_neonFindUniqueArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playing_with_neonFindUniqueArgs>(args: SelectSubset<T, playing_with_neonFindUniqueArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playing_with_neon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playing_with_neonFindUniqueOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playing_with_neonFindUniqueOrThrowArgs>(args: SelectSubset<T, playing_with_neonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playing_with_neon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playing_with_neonFindFirstArgs>(args?: SelectSubset<T, playing_with_neonFindFirstArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playing_with_neon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playing_with_neonFindFirstOrThrowArgs>(args?: SelectSubset<T, playing_with_neonFindFirstOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playing_with_neons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany()
     * 
     * // Get first 10 Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playing_with_neonFindManyArgs>(args?: SelectSubset<T, playing_with_neonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playing_with_neon.
     * @param {playing_with_neonCreateArgs} args - Arguments to create a Playing_with_neon.
     * @example
     * // Create one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.create({
     *   data: {
     *     // ... data to create a Playing_with_neon
     *   }
     * })
     * 
     */
    create<T extends playing_with_neonCreateArgs>(args: SelectSubset<T, playing_with_neonCreateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playing_with_neons.
     * @param {playing_with_neonCreateManyArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playing_with_neonCreateManyArgs>(args?: SelectSubset<T, playing_with_neonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playing_with_neons and returns the data saved in the database.
     * @param {playing_with_neonCreateManyAndReturnArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playing_with_neons and only return the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playing_with_neonCreateManyAndReturnArgs>(args?: SelectSubset<T, playing_with_neonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playing_with_neon.
     * @param {playing_with_neonDeleteArgs} args - Arguments to delete one Playing_with_neon.
     * @example
     * // Delete one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.delete({
     *   where: {
     *     // ... filter to delete one Playing_with_neon
     *   }
     * })
     * 
     */
    delete<T extends playing_with_neonDeleteArgs>(args: SelectSubset<T, playing_with_neonDeleteArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playing_with_neon.
     * @param {playing_with_neonUpdateArgs} args - Arguments to update one Playing_with_neon.
     * @example
     * // Update one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playing_with_neonUpdateArgs>(args: SelectSubset<T, playing_with_neonUpdateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playing_with_neons.
     * @param {playing_with_neonDeleteManyArgs} args - Arguments to filter Playing_with_neons to delete.
     * @example
     * // Delete a few Playing_with_neons
     * const { count } = await prisma.playing_with_neon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playing_with_neonDeleteManyArgs>(args?: SelectSubset<T, playing_with_neonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playing_with_neonUpdateManyArgs>(args: SelectSubset<T, playing_with_neonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playing_with_neons and returns the data updated in the database.
     * @param {playing_with_neonUpdateManyAndReturnArgs} args - Arguments to update many Playing_with_neons.
     * @example
     * // Update many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playing_with_neons and only return the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playing_with_neonUpdateManyAndReturnArgs>(args: SelectSubset<T, playing_with_neonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playing_with_neon.
     * @param {playing_with_neonUpsertArgs} args - Arguments to update or create a Playing_with_neon.
     * @example
     * // Update or create a Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.upsert({
     *   create: {
     *     // ... data to create a Playing_with_neon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playing_with_neon we want to update
     *   }
     * })
     */
    upsert<T extends playing_with_neonUpsertArgs>(args: SelectSubset<T, playing_with_neonUpsertArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonCountArgs} args - Arguments to filter Playing_with_neons to count.
     * @example
     * // Count the number of Playing_with_neons
     * const count = await prisma.playing_with_neon.count({
     *   where: {
     *     // ... the filter for the Playing_with_neons we want to count
     *   }
     * })
    **/
    count<T extends playing_with_neonCountArgs>(
      args?: Subset<T, playing_with_neonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playing_with_neonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playing_with_neonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Playing_with_neonAggregateArgs>(args: Subset<T, Playing_with_neonAggregateArgs>): Prisma.PrismaPromise<GetPlaying_with_neonAggregateType<T>>

    /**
     * Group by Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonGroupByArgs} args - Group by arguments.
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
      T extends playing_with_neonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playing_with_neonGroupByArgs['orderBy'] }
        : { orderBy?: playing_with_neonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playing_with_neonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaying_with_neonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playing_with_neon model
   */
  readonly fields: playing_with_neonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playing_with_neon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playing_with_neonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the playing_with_neon model
   */
  interface playing_with_neonFieldRefs {
    readonly id: FieldRef<"playing_with_neon", 'Int'>
    readonly name: FieldRef<"playing_with_neon", 'String'>
    readonly value: FieldRef<"playing_with_neon", 'Float'>
    readonly teste: FieldRef<"playing_with_neon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * playing_with_neon findUnique
   */
  export type playing_with_neonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findUniqueOrThrow
   */
  export type playing_with_neonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findFirst
   */
  export type playing_with_neonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findFirstOrThrow
   */
  export type playing_with_neonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findMany
   */
  export type playing_with_neonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neons to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon create
   */
  export type playing_with_neonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data needed to create a playing_with_neon.
     */
    data: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
  }

  /**
   * playing_with_neon createMany
   */
  export type playing_with_neonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon createManyAndReturn
   */
  export type playing_with_neonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon update
   */
  export type playing_with_neonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data needed to update a playing_with_neon.
     */
    data: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
    /**
     * Choose, which playing_with_neon to update.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon updateMany
   */
  export type playing_with_neonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playing_with_neons.
     */
    data: XOR<playing_with_neonUpdateManyMutationInput, playing_with_neonUncheckedUpdateManyInput>
    /**
     * Filter which playing_with_neons to update
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to update.
     */
    limit?: number
  }

  /**
   * playing_with_neon updateManyAndReturn
   */
  export type playing_with_neonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data used to update playing_with_neons.
     */
    data: XOR<playing_with_neonUpdateManyMutationInput, playing_with_neonUncheckedUpdateManyInput>
    /**
     * Filter which playing_with_neons to update
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to update.
     */
    limit?: number
  }

  /**
   * playing_with_neon upsert
   */
  export type playing_with_neonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The filter to search for the playing_with_neon to update in case it exists.
     */
    where: playing_with_neonWhereUniqueInput
    /**
     * In case the playing_with_neon found by the `where` argument doesn't exist, create a new playing_with_neon with this data.
     */
    create: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
    /**
     * In case the playing_with_neon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
  }

  /**
   * playing_with_neon delete
   */
  export type playing_with_neonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter which playing_with_neon to delete.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon deleteMany
   */
  export type playing_with_neonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neons to delete
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to delete.
     */
    limit?: number
  }

  /**
   * playing_with_neon without action
   */
  export type playing_with_neonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    id: string | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    id: string | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    id: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    id?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    id?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    id?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    id: string
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    id?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "id", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      id: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly id: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


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
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    encryptedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    encryptedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    encryptedPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    encryptedPassword: string | null
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
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "encryptedPassword", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      profiles: Prisma.$ProfilePayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      encryptedPassword: string | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly encryptedPassword: FieldRef<"User", 'String'>
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    lowername: string | null
    bio: string | null
    pronouns: string | null
    site: string | null
    color: string | null
    createdAt: Date | null
    public: boolean | null
    verified: boolean | null
    avatarUrl: string | null
    location: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    lowername: string | null
    bio: string | null
    pronouns: string | null
    site: string | null
    color: string | null
    createdAt: Date | null
    public: boolean | null
    verified: boolean | null
    avatarUrl: string | null
    location: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    username: number
    name: number
    lowername: number
    bio: number
    pronouns: number
    site: number
    color: number
    createdAt: number
    public: number
    favorites: number
    verified: number
    avatarUrl: number
    albuns: number
    artists: number
    location: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    lowername?: true
    bio?: true
    pronouns?: true
    site?: true
    color?: true
    createdAt?: true
    public?: true
    verified?: true
    avatarUrl?: true
    location?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    lowername?: true
    bio?: true
    pronouns?: true
    site?: true
    color?: true
    createdAt?: true
    public?: true
    verified?: true
    avatarUrl?: true
    location?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    lowername?: true
    bio?: true
    pronouns?: true
    site?: true
    color?: true
    createdAt?: true
    public?: true
    favorites?: true
    verified?: true
    avatarUrl?: true
    albuns?: true
    artists?: true
    location?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    username: string | null
    name: string | null
    lowername: string | null
    bio: string | null
    pronouns: string | null
    site: string | null
    color: string | null
    createdAt: Date
    public: boolean
    favorites: JsonValue
    verified: boolean
    avatarUrl: string | null
    albuns: JsonValue
    artists: JsonValue
    location: string | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    lowername?: boolean
    bio?: boolean
    pronouns?: boolean
    site?: boolean
    color?: boolean
    createdAt?: boolean
    public?: boolean
    favorites?: boolean
    verified?: boolean
    avatarUrl?: boolean
    albuns?: boolean
    artists?: boolean
    location?: boolean
    Followed?: boolean | Profile$FollowedArgs<ExtArgs>
    Followers?: boolean | Profile$FollowersArgs<ExtArgs>
    Like?: boolean | Profile$LikeArgs<ExtArgs>
    Notification_Notification_senderIdToProfile?: boolean | Profile$Notification_Notification_senderIdToProfileArgs<ExtArgs>
    Notification_Notification_userIdToProfile?: boolean | Profile$Notification_Notification_userIdToProfileArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Rating?: boolean | Profile$RatingArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    lowername?: boolean
    bio?: boolean
    pronouns?: boolean
    site?: boolean
    color?: boolean
    createdAt?: boolean
    public?: boolean
    favorites?: boolean
    verified?: boolean
    avatarUrl?: boolean
    albuns?: boolean
    artists?: boolean
    location?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    lowername?: boolean
    bio?: boolean
    pronouns?: boolean
    site?: boolean
    color?: boolean
    createdAt?: boolean
    public?: boolean
    favorites?: boolean
    verified?: boolean
    avatarUrl?: boolean
    albuns?: boolean
    artists?: boolean
    location?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    lowername?: boolean
    bio?: boolean
    pronouns?: boolean
    site?: boolean
    color?: boolean
    createdAt?: boolean
    public?: boolean
    favorites?: boolean
    verified?: boolean
    avatarUrl?: boolean
    albuns?: boolean
    artists?: boolean
    location?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "lowername" | "bio" | "pronouns" | "site" | "color" | "createdAt" | "public" | "favorites" | "verified" | "avatarUrl" | "albuns" | "artists" | "location", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Followed?: boolean | Profile$FollowedArgs<ExtArgs>
    Followers?: boolean | Profile$FollowersArgs<ExtArgs>
    Like?: boolean | Profile$LikeArgs<ExtArgs>
    Notification_Notification_senderIdToProfile?: boolean | Profile$Notification_Notification_senderIdToProfileArgs<ExtArgs>
    Notification_Notification_userIdToProfile?: boolean | Profile$Notification_Notification_userIdToProfileArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Rating?: boolean | Profile$RatingArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      Followed: Prisma.$FollowPayload<ExtArgs>[]
      Followers: Prisma.$FollowPayload<ExtArgs>[]
      Like: Prisma.$LikePayload<ExtArgs>[]
      Notification_Notification_senderIdToProfile: Prisma.$NotificationPayload<ExtArgs>[]
      Notification_Notification_userIdToProfile: Prisma.$NotificationPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      Rating: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      name: string | null
      lowername: string | null
      bio: string | null
      pronouns: string | null
      site: string | null
      color: string | null
      createdAt: Date
      public: boolean
      favorites: Prisma.JsonValue
      verified: boolean
      avatarUrl: string | null
      albuns: Prisma.JsonValue
      artists: Prisma.JsonValue
      location: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Followed<T extends Profile$FollowedArgs<ExtArgs> = {}>(args?: Subset<T, Profile$FollowedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Followers<T extends Profile$FollowersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$FollowersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Like<T extends Profile$LikeArgs<ExtArgs> = {}>(args?: Subset<T, Profile$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification_Notification_senderIdToProfile<T extends Profile$Notification_Notification_senderIdToProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profile$Notification_Notification_senderIdToProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification_Notification_userIdToProfile<T extends Profile$Notification_Notification_userIdToProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profile$Notification_Notification_userIdToProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Rating<T extends Profile$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Profile$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly lowername: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly pronouns: FieldRef<"Profile", 'String'>
    readonly site: FieldRef<"Profile", 'String'>
    readonly color: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly public: FieldRef<"Profile", 'Boolean'>
    readonly favorites: FieldRef<"Profile", 'Json'>
    readonly verified: FieldRef<"Profile", 'Boolean'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly albuns: FieldRef<"Profile", 'Json'>
    readonly artists: FieldRef<"Profile", 'Json'>
    readonly location: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.Followed
   */
  export type Profile$FollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.Followers
   */
  export type Profile$FollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.Like
   */
  export type Profile$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Profile.Notification_Notification_senderIdToProfile
   */
  export type Profile$Notification_Notification_senderIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Profile.Notification_Notification_userIdToProfile
   */
  export type Profile$Notification_Notification_userIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Profile.Rating
   */
  export type Profile$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: bigint | null
    rating: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: bigint
    userId: string | null
    rating: number
    comment: string
    createdAt: Date | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["comment"]>

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: string | null
      rating: number
      comment: string
      createdAt: Date | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'BigInt'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly rating: FieldRef<"Comment", 'Int'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    createdAt: Date | null
    followedId: string | null
    followerId: string | null
    id: string | null
  }

  export type FollowMaxAggregateOutputType = {
    createdAt: Date | null
    followedId: string | null
    followerId: string | null
    id: string | null
  }

  export type FollowCountAggregateOutputType = {
    createdAt: number
    followedId: number
    followerId: number
    id: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    createdAt?: true
    followedId?: true
    followerId?: true
    id?: true
  }

  export type FollowMaxAggregateInputType = {
    createdAt?: true
    followedId?: true
    followerId?: true
    id?: true
  }

  export type FollowCountAggregateInputType = {
    createdAt?: true
    followedId?: true
    followerId?: true
    id?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    createdAt: Date | null
    followedId: string
    followerId: string
    id: string
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    followedId?: boolean
    followerId?: boolean
    id?: boolean
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    followedId?: boolean
    followerId?: boolean
    id?: boolean
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    followedId?: boolean
    followerId?: boolean
    id?: boolean
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    createdAt?: boolean
    followedId?: boolean
    followerId?: boolean
    id?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "followedId" | "followerId" | "id", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      followed: Prisma.$ProfilePayload<ExtArgs>
      follower: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date | null
      followedId: string
      followerId: string
      id: string
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const followWithCreatedAtOnly = await prisma.follow.findMany({ select: { createdAt: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `createdAt`
     * const followWithCreatedAtOnly = await prisma.follow.createManyAndReturn({
     *   select: { createdAt: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `createdAt`
     * const followWithCreatedAtOnly = await prisma.follow.updateManyAndReturn({
     *   select: { createdAt: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    followed<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    follower<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
    readonly followedId: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly id: FieldRef<"Follow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: bigint | null
  }

  export type LikeMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    ratingId: string | null
    inserted_at: Date | null
    updated_at: Date | null
    user_profile: string | null
  }

  export type LikeMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    ratingId: string | null
    inserted_at: Date | null
    updated_at: Date | null
    user_profile: string | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    ratingId: number
    inserted_at: number
    updated_at: number
    user_profile: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    ratingId?: true
    inserted_at?: true
    updated_at?: true
    user_profile?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    ratingId?: true
    inserted_at?: true
    updated_at?: true
    user_profile?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    ratingId?: true
    inserted_at?: true
    updated_at?: true
    user_profile?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: bigint
    userId: string | null
    ratingId: string | null
    inserted_at: Date
    updated_at: Date
    user_profile: string | null
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ratingId?: boolean
    inserted_at?: boolean
    updated_at?: boolean
    user_profile?: boolean
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ratingId?: boolean
    inserted_at?: boolean
    updated_at?: boolean
    user_profile?: boolean
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ratingId?: boolean
    inserted_at?: boolean
    updated_at?: boolean
    user_profile?: boolean
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    ratingId?: boolean
    inserted_at?: boolean
    updated_at?: boolean
    user_profile?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ratingId" | "inserted_at" | "updated_at" | "user_profile", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Like$RatingArgs<ExtArgs>
    Profile?: boolean | Like$ProfileArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      Rating: Prisma.$RatingPayload<ExtArgs> | null
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: string | null
      ratingId: string | null
      inserted_at: Date
      updated_at: Date
      user_profile: string | null
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rating<T extends Like$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Like$RatingArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Profile<T extends Like$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, Like$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'BigInt'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly ratingId: FieldRef<"Like", 'String'>
    readonly inserted_at: FieldRef<"Like", 'DateTime'>
    readonly updated_at: FieldRef<"Like", 'DateTime'>
    readonly user_profile: FieldRef<"Like", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data?: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like.Rating
   */
  export type Like$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
  }

  /**
   * Like.Profile
   */
  export type Like$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    ratingId: string | null
    type: string | null
    seen: boolean | null
    createdAt: Date | null
    senderId: string | null
    userId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    ratingId: string | null
    type: string | null
    seen: boolean | null
    createdAt: Date | null
    senderId: string | null
    userId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    ratingId: number
    type: number
    seen: number
    createdAt: number
    senderId: number
    userId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    ratingId?: true
    type?: true
    seen?: true
    createdAt?: true
    senderId?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    ratingId?: true
    type?: true
    seen?: true
    createdAt?: true
    senderId?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    ratingId?: true
    type?: true
    seen?: true
    createdAt?: true
    senderId?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    ratingId: string | null
    type: string | null
    seen: boolean | null
    createdAt: Date | null
    senderId: string | null
    userId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratingId?: boolean
    type?: boolean
    seen?: boolean
    createdAt?: boolean
    senderId?: boolean
    userId?: boolean
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratingId?: boolean
    type?: boolean
    seen?: boolean
    createdAt?: boolean
    senderId?: boolean
    userId?: boolean
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratingId?: boolean
    type?: boolean
    seen?: boolean
    createdAt?: boolean
    senderId?: boolean
    userId?: boolean
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    ratingId?: boolean
    type?: boolean
    seen?: boolean
    createdAt?: boolean
    senderId?: boolean
    userId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ratingId" | "type" | "seen" | "createdAt" | "senderId" | "userId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Notification$RatingArgs<ExtArgs>
    Profile_Notification_senderIdToProfile?: boolean | Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>
    Profile_Notification_userIdToProfile?: boolean | Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      Rating: Prisma.$RatingPayload<ExtArgs> | null
      Profile_Notification_senderIdToProfile: Prisma.$ProfilePayload<ExtArgs> | null
      Profile_Notification_userIdToProfile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ratingId: string | null
      type: string | null
      seen: boolean | null
      createdAt: Date | null
      senderId: string | null
      userId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rating<T extends Notification$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Notification$RatingArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Profile_Notification_senderIdToProfile<T extends Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs> = {}>(args?: Subset<T, Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Profile_Notification_userIdToProfile<T extends Notification$Profile_Notification_userIdToProfileArgs<ExtArgs> = {}>(args?: Subset<T, Notification$Profile_Notification_userIdToProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly ratingId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly seen: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly senderId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data?: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.Rating
   */
  export type Notification$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
  }

  /**
   * Notification.Profile_Notification_senderIdToProfile
   */
  export type Notification$Profile_Notification_senderIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Notification.Profile_Notification_userIdToProfile
   */
  export type Notification$Profile_Notification_userIdToProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type RatingSumAggregateOutputType = {
    total: Decimal | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    review: string | null
    total: Decimal | null
    shorten: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    albumId: string | null
    userId: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    review: string | null
    total: Decimal | null
    shorten: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    albumId: string | null
    userId: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    ratings: number
    review: number
    total: number
    shorten: number
    content: number
    published: number
    createdAt: number
    updatedAt: number
    albumId: number
    userId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    total?: true
  }

  export type RatingSumAggregateInputType = {
    total?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    review?: true
    total?: true
    shorten?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    albumId?: true
    userId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    review?: true
    total?: true
    shorten?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    albumId?: true
    userId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    ratings?: true
    review?: true
    total?: true
    shorten?: true
    content?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    albumId?: true
    userId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    ratings: JsonValue | null
    review: string | null
    total: Decimal
    shorten: string | null
    content: JsonValue
    published: boolean
    createdAt: Date
    updatedAt: Date
    albumId: string | null
    userId: string | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratings?: boolean
    review?: boolean
    total?: boolean
    shorten?: boolean
    content?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    albumId?: boolean
    userId?: boolean
    Like?: boolean | Rating$LikeArgs<ExtArgs>
    Notification?: boolean | Rating$NotificationArgs<ExtArgs>
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratings?: boolean
    review?: boolean
    total?: boolean
    shorten?: boolean
    content?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    albumId?: boolean
    userId?: boolean
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ratings?: boolean
    review?: boolean
    total?: boolean
    shorten?: boolean
    content?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    albumId?: boolean
    userId?: boolean
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    ratings?: boolean
    review?: boolean
    total?: boolean
    shorten?: boolean
    content?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    albumId?: boolean
    userId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ratings" | "review" | "total" | "shorten" | "content" | "published" | "createdAt" | "updatedAt" | "albumId" | "userId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like?: boolean | Rating$LikeArgs<ExtArgs>
    Notification?: boolean | Rating$NotificationArgs<ExtArgs>
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profile?: boolean | Rating$ProfileArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      Like: Prisma.$LikePayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ratings: Prisma.JsonValue | null
      review: string | null
      total: Prisma.Decimal
      shorten: string | null
      content: Prisma.JsonValue
      published: boolean
      createdAt: Date
      updatedAt: Date
      albumId: string | null
      userId: string | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Like<T extends Rating$LikeArgs<ExtArgs> = {}>(args?: Subset<T, Rating$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends Rating$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, Rating$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Profile<T extends Rating$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, Rating$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly ratings: FieldRef<"Rating", 'Json'>
    readonly review: FieldRef<"Rating", 'String'>
    readonly total: FieldRef<"Rating", 'Decimal'>
    readonly shorten: FieldRef<"Rating", 'String'>
    readonly content: FieldRef<"Rating", 'Json'>
    readonly published: FieldRef<"Rating", 'Boolean'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
    readonly albumId: FieldRef<"Rating", 'String'>
    readonly userId: FieldRef<"Rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data?: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating.Like
   */
  export type Rating$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Rating.Notification
   */
  export type Rating$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Rating.Profile
   */
  export type Rating$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    action: string | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    action: string | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    action: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    action?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    action?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    action?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    action: string | null
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    action?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    action?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    action?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    action?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires" | "action", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
      action: string | null
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
    readonly action: FieldRef<"VerificationToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model TokenOTP
   */

  export type AggregateTokenOTP = {
    _count: TokenOTPCountAggregateOutputType | null
    _min: TokenOTPMinAggregateOutputType | null
    _max: TokenOTPMaxAggregateOutputType | null
  }

  export type TokenOTPMinAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
    expires: Date | null
    identifier: string | null
  }

  export type TokenOTPMaxAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
    expires: Date | null
    identifier: string | null
  }

  export type TokenOTPCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    expires: number
    identifier: number
    _all: number
  }


  export type TokenOTPMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expires?: true
    identifier?: true
  }

  export type TokenOTPMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expires?: true
    identifier?: true
  }

  export type TokenOTPCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expires?: true
    identifier?: true
    _all?: true
  }

  export type TokenOTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenOTP to aggregate.
     */
    where?: TokenOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenOTPS to fetch.
     */
    orderBy?: TokenOTPOrderByWithRelationInput | TokenOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenOTPS
    **/
    _count?: true | TokenOTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenOTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenOTPMaxAggregateInputType
  }

  export type GetTokenOTPAggregateType<T extends TokenOTPAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenOTP[P]>
      : GetScalarType<T[P], AggregateTokenOTP[P]>
  }




  export type TokenOTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenOTPWhereInput
    orderBy?: TokenOTPOrderByWithAggregationInput | TokenOTPOrderByWithAggregationInput[]
    by: TokenOTPScalarFieldEnum[] | TokenOTPScalarFieldEnum
    having?: TokenOTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenOTPCountAggregateInputType | true
    _min?: TokenOTPMinAggregateInputType
    _max?: TokenOTPMaxAggregateInputType
  }

  export type TokenOTPGroupByOutputType = {
    id: string
    token: string
    createdAt: Date | null
    expires: Date
    identifier: string
    _count: TokenOTPCountAggregateOutputType | null
    _min: TokenOTPMinAggregateOutputType | null
    _max: TokenOTPMaxAggregateOutputType | null
  }

  type GetTokenOTPGroupByPayload<T extends TokenOTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenOTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenOTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenOTPGroupByOutputType[P]>
            : GetScalarType<T[P], TokenOTPGroupByOutputType[P]>
        }
      >
    >


  export type TokenOTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expires?: boolean
    identifier?: boolean
  }, ExtArgs["result"]["tokenOTP"]>

  export type TokenOTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expires?: boolean
    identifier?: boolean
  }, ExtArgs["result"]["tokenOTP"]>

  export type TokenOTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expires?: boolean
    identifier?: boolean
  }, ExtArgs["result"]["tokenOTP"]>

  export type TokenOTPSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expires?: boolean
    identifier?: boolean
  }

  export type TokenOTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt" | "expires" | "identifier", ExtArgs["result"]["tokenOTP"]>

  export type $TokenOTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenOTP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      createdAt: Date | null
      expires: Date
      identifier: string
    }, ExtArgs["result"]["tokenOTP"]>
    composites: {}
  }

  type TokenOTPGetPayload<S extends boolean | null | undefined | TokenOTPDefaultArgs> = $Result.GetResult<Prisma.$TokenOTPPayload, S>

  type TokenOTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenOTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenOTPCountAggregateInputType | true
    }

  export interface TokenOTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenOTP'], meta: { name: 'TokenOTP' } }
    /**
     * Find zero or one TokenOTP that matches the filter.
     * @param {TokenOTPFindUniqueArgs} args - Arguments to find a TokenOTP
     * @example
     * // Get one TokenOTP
     * const tokenOTP = await prisma.tokenOTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenOTPFindUniqueArgs>(args: SelectSubset<T, TokenOTPFindUniqueArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenOTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenOTPFindUniqueOrThrowArgs} args - Arguments to find a TokenOTP
     * @example
     * // Get one TokenOTP
     * const tokenOTP = await prisma.tokenOTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenOTPFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenOTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenOTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPFindFirstArgs} args - Arguments to find a TokenOTP
     * @example
     * // Get one TokenOTP
     * const tokenOTP = await prisma.tokenOTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenOTPFindFirstArgs>(args?: SelectSubset<T, TokenOTPFindFirstArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenOTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPFindFirstOrThrowArgs} args - Arguments to find a TokenOTP
     * @example
     * // Get one TokenOTP
     * const tokenOTP = await prisma.tokenOTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenOTPFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenOTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenOTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenOTPS
     * const tokenOTPS = await prisma.tokenOTP.findMany()
     * 
     * // Get first 10 TokenOTPS
     * const tokenOTPS = await prisma.tokenOTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenOTPWithIdOnly = await prisma.tokenOTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenOTPFindManyArgs>(args?: SelectSubset<T, TokenOTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenOTP.
     * @param {TokenOTPCreateArgs} args - Arguments to create a TokenOTP.
     * @example
     * // Create one TokenOTP
     * const TokenOTP = await prisma.tokenOTP.create({
     *   data: {
     *     // ... data to create a TokenOTP
     *   }
     * })
     * 
     */
    create<T extends TokenOTPCreateArgs>(args: SelectSubset<T, TokenOTPCreateArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenOTPS.
     * @param {TokenOTPCreateManyArgs} args - Arguments to create many TokenOTPS.
     * @example
     * // Create many TokenOTPS
     * const tokenOTP = await prisma.tokenOTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenOTPCreateManyArgs>(args?: SelectSubset<T, TokenOTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenOTPS and returns the data saved in the database.
     * @param {TokenOTPCreateManyAndReturnArgs} args - Arguments to create many TokenOTPS.
     * @example
     * // Create many TokenOTPS
     * const tokenOTP = await prisma.tokenOTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenOTPS and only return the `id`
     * const tokenOTPWithIdOnly = await prisma.tokenOTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenOTPCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenOTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenOTP.
     * @param {TokenOTPDeleteArgs} args - Arguments to delete one TokenOTP.
     * @example
     * // Delete one TokenOTP
     * const TokenOTP = await prisma.tokenOTP.delete({
     *   where: {
     *     // ... filter to delete one TokenOTP
     *   }
     * })
     * 
     */
    delete<T extends TokenOTPDeleteArgs>(args: SelectSubset<T, TokenOTPDeleteArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenOTP.
     * @param {TokenOTPUpdateArgs} args - Arguments to update one TokenOTP.
     * @example
     * // Update one TokenOTP
     * const tokenOTP = await prisma.tokenOTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenOTPUpdateArgs>(args: SelectSubset<T, TokenOTPUpdateArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenOTPS.
     * @param {TokenOTPDeleteManyArgs} args - Arguments to filter TokenOTPS to delete.
     * @example
     * // Delete a few TokenOTPS
     * const { count } = await prisma.tokenOTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenOTPDeleteManyArgs>(args?: SelectSubset<T, TokenOTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenOTPS
     * const tokenOTP = await prisma.tokenOTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenOTPUpdateManyArgs>(args: SelectSubset<T, TokenOTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenOTPS and returns the data updated in the database.
     * @param {TokenOTPUpdateManyAndReturnArgs} args - Arguments to update many TokenOTPS.
     * @example
     * // Update many TokenOTPS
     * const tokenOTP = await prisma.tokenOTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenOTPS and only return the `id`
     * const tokenOTPWithIdOnly = await prisma.tokenOTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenOTPUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenOTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenOTP.
     * @param {TokenOTPUpsertArgs} args - Arguments to update or create a TokenOTP.
     * @example
     * // Update or create a TokenOTP
     * const tokenOTP = await prisma.tokenOTP.upsert({
     *   create: {
     *     // ... data to create a TokenOTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenOTP we want to update
     *   }
     * })
     */
    upsert<T extends TokenOTPUpsertArgs>(args: SelectSubset<T, TokenOTPUpsertArgs<ExtArgs>>): Prisma__TokenOTPClient<$Result.GetResult<Prisma.$TokenOTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPCountArgs} args - Arguments to filter TokenOTPS to count.
     * @example
     * // Count the number of TokenOTPS
     * const count = await prisma.tokenOTP.count({
     *   where: {
     *     // ... the filter for the TokenOTPS we want to count
     *   }
     * })
    **/
    count<T extends TokenOTPCountArgs>(
      args?: Subset<T, TokenOTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenOTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenOTPAggregateArgs>(args: Subset<T, TokenOTPAggregateArgs>): Prisma.PrismaPromise<GetTokenOTPAggregateType<T>>

    /**
     * Group by TokenOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenOTPGroupByArgs} args - Group by arguments.
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
      T extends TokenOTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenOTPGroupByArgs['orderBy'] }
        : { orderBy?: TokenOTPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenOTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenOTP model
   */
  readonly fields: TokenOTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenOTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenOTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TokenOTP model
   */
  interface TokenOTPFieldRefs {
    readonly id: FieldRef<"TokenOTP", 'String'>
    readonly token: FieldRef<"TokenOTP", 'String'>
    readonly createdAt: FieldRef<"TokenOTP", 'DateTime'>
    readonly expires: FieldRef<"TokenOTP", 'DateTime'>
    readonly identifier: FieldRef<"TokenOTP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokenOTP findUnique
   */
  export type TokenOTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter, which TokenOTP to fetch.
     */
    where: TokenOTPWhereUniqueInput
  }

  /**
   * TokenOTP findUniqueOrThrow
   */
  export type TokenOTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter, which TokenOTP to fetch.
     */
    where: TokenOTPWhereUniqueInput
  }

  /**
   * TokenOTP findFirst
   */
  export type TokenOTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter, which TokenOTP to fetch.
     */
    where?: TokenOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenOTPS to fetch.
     */
    orderBy?: TokenOTPOrderByWithRelationInput | TokenOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenOTPS.
     */
    cursor?: TokenOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenOTPS.
     */
    distinct?: TokenOTPScalarFieldEnum | TokenOTPScalarFieldEnum[]
  }

  /**
   * TokenOTP findFirstOrThrow
   */
  export type TokenOTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter, which TokenOTP to fetch.
     */
    where?: TokenOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenOTPS to fetch.
     */
    orderBy?: TokenOTPOrderByWithRelationInput | TokenOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenOTPS.
     */
    cursor?: TokenOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenOTPS.
     */
    distinct?: TokenOTPScalarFieldEnum | TokenOTPScalarFieldEnum[]
  }

  /**
   * TokenOTP findMany
   */
  export type TokenOTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter, which TokenOTPS to fetch.
     */
    where?: TokenOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenOTPS to fetch.
     */
    orderBy?: TokenOTPOrderByWithRelationInput | TokenOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenOTPS.
     */
    cursor?: TokenOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenOTPS.
     */
    skip?: number
    distinct?: TokenOTPScalarFieldEnum | TokenOTPScalarFieldEnum[]
  }

  /**
   * TokenOTP create
   */
  export type TokenOTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * The data needed to create a TokenOTP.
     */
    data: XOR<TokenOTPCreateInput, TokenOTPUncheckedCreateInput>
  }

  /**
   * TokenOTP createMany
   */
  export type TokenOTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenOTPS.
     */
    data: TokenOTPCreateManyInput | TokenOTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenOTP createManyAndReturn
   */
  export type TokenOTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * The data used to create many TokenOTPS.
     */
    data: TokenOTPCreateManyInput | TokenOTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenOTP update
   */
  export type TokenOTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * The data needed to update a TokenOTP.
     */
    data: XOR<TokenOTPUpdateInput, TokenOTPUncheckedUpdateInput>
    /**
     * Choose, which TokenOTP to update.
     */
    where: TokenOTPWhereUniqueInput
  }

  /**
   * TokenOTP updateMany
   */
  export type TokenOTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenOTPS.
     */
    data: XOR<TokenOTPUpdateManyMutationInput, TokenOTPUncheckedUpdateManyInput>
    /**
     * Filter which TokenOTPS to update
     */
    where?: TokenOTPWhereInput
    /**
     * Limit how many TokenOTPS to update.
     */
    limit?: number
  }

  /**
   * TokenOTP updateManyAndReturn
   */
  export type TokenOTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * The data used to update TokenOTPS.
     */
    data: XOR<TokenOTPUpdateManyMutationInput, TokenOTPUncheckedUpdateManyInput>
    /**
     * Filter which TokenOTPS to update
     */
    where?: TokenOTPWhereInput
    /**
     * Limit how many TokenOTPS to update.
     */
    limit?: number
  }

  /**
   * TokenOTP upsert
   */
  export type TokenOTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * The filter to search for the TokenOTP to update in case it exists.
     */
    where: TokenOTPWhereUniqueInput
    /**
     * In case the TokenOTP found by the `where` argument doesn't exist, create a new TokenOTP with this data.
     */
    create: XOR<TokenOTPCreateInput, TokenOTPUncheckedCreateInput>
    /**
     * In case the TokenOTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenOTPUpdateInput, TokenOTPUncheckedUpdateInput>
  }

  /**
   * TokenOTP delete
   */
  export type TokenOTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
    /**
     * Filter which TokenOTP to delete.
     */
    where: TokenOTPWhereUniqueInput
  }

  /**
   * TokenOTP deleteMany
   */
  export type TokenOTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenOTPS to delete
     */
    where?: TokenOTPWhereInput
    /**
     * Limit how many TokenOTPS to delete.
     */
    limit?: number
  }

  /**
   * TokenOTP without action
   */
  export type TokenOTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenOTP
     */
    select?: TokenOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenOTP
     */
    omit?: TokenOTPOmit<ExtArgs> | null
  }


  /**
   * Model temp_users_import
   */

  export type AggregateTemp_users_import = {
    _count: Temp_users_importCountAggregateOutputType | null
    _min: Temp_users_importMinAggregateOutputType | null
    _max: Temp_users_importMaxAggregateOutputType | null
  }

  export type Temp_users_importMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    encryptedPassword: string | null
  }

  export type Temp_users_importMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    encryptedPassword: string | null
  }

  export type Temp_users_importCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    encryptedPassword: number
    _all: number
  }


  export type Temp_users_importMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
  }

  export type Temp_users_importMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
  }

  export type Temp_users_importCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    encryptedPassword?: true
    _all?: true
  }

  export type Temp_users_importAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_users_import to aggregate.
     */
    where?: temp_users_importWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_users_imports to fetch.
     */
    orderBy?: temp_users_importOrderByWithRelationInput | temp_users_importOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: temp_users_importWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_users_imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_users_imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned temp_users_imports
    **/
    _count?: true | Temp_users_importCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Temp_users_importMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Temp_users_importMaxAggregateInputType
  }

  export type GetTemp_users_importAggregateType<T extends Temp_users_importAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp_users_import]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp_users_import[P]>
      : GetScalarType<T[P], AggregateTemp_users_import[P]>
  }




  export type temp_users_importGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_users_importWhereInput
    orderBy?: temp_users_importOrderByWithAggregationInput | temp_users_importOrderByWithAggregationInput[]
    by: Temp_users_importScalarFieldEnum[] | Temp_users_importScalarFieldEnum
    having?: temp_users_importScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Temp_users_importCountAggregateInputType | true
    _min?: Temp_users_importMinAggregateInputType
    _max?: Temp_users_importMaxAggregateInputType
  }

  export type Temp_users_importGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    encryptedPassword: string | null
    _count: Temp_users_importCountAggregateOutputType | null
    _min: Temp_users_importMinAggregateOutputType | null
    _max: Temp_users_importMaxAggregateOutputType | null
  }

  type GetTemp_users_importGroupByPayload<T extends temp_users_importGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Temp_users_importGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Temp_users_importGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Temp_users_importGroupByOutputType[P]>
            : GetScalarType<T[P], Temp_users_importGroupByOutputType[P]>
        }
      >
    >


  export type temp_users_importSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }, ExtArgs["result"]["temp_users_import"]>

  export type temp_users_importSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }, ExtArgs["result"]["temp_users_import"]>

  export type temp_users_importSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }, ExtArgs["result"]["temp_users_import"]>

  export type temp_users_importSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    encryptedPassword?: boolean
  }

  export type temp_users_importOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "encryptedPassword", ExtArgs["result"]["temp_users_import"]>

  export type $temp_users_importPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "temp_users_import"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date | null
      encryptedPassword: string | null
    }, ExtArgs["result"]["temp_users_import"]>
    composites: {}
  }

  type temp_users_importGetPayload<S extends boolean | null | undefined | temp_users_importDefaultArgs> = $Result.GetResult<Prisma.$temp_users_importPayload, S>

  type temp_users_importCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<temp_users_importFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Temp_users_importCountAggregateInputType | true
    }

  export interface temp_users_importDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['temp_users_import'], meta: { name: 'temp_users_import' } }
    /**
     * Find zero or one Temp_users_import that matches the filter.
     * @param {temp_users_importFindUniqueArgs} args - Arguments to find a Temp_users_import
     * @example
     * // Get one Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends temp_users_importFindUniqueArgs>(args: SelectSubset<T, temp_users_importFindUniqueArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temp_users_import that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {temp_users_importFindUniqueOrThrowArgs} args - Arguments to find a Temp_users_import
     * @example
     * // Get one Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends temp_users_importFindUniqueOrThrowArgs>(args: SelectSubset<T, temp_users_importFindUniqueOrThrowArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_users_import that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importFindFirstArgs} args - Arguments to find a Temp_users_import
     * @example
     * // Get one Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends temp_users_importFindFirstArgs>(args?: SelectSubset<T, temp_users_importFindFirstArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_users_import that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importFindFirstOrThrowArgs} args - Arguments to find a Temp_users_import
     * @example
     * // Get one Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends temp_users_importFindFirstOrThrowArgs>(args?: SelectSubset<T, temp_users_importFindFirstOrThrowArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temp_users_imports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temp_users_imports
     * const temp_users_imports = await prisma.temp_users_import.findMany()
     * 
     * // Get first 10 Temp_users_imports
     * const temp_users_imports = await prisma.temp_users_import.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temp_users_importWithIdOnly = await prisma.temp_users_import.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends temp_users_importFindManyArgs>(args?: SelectSubset<T, temp_users_importFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temp_users_import.
     * @param {temp_users_importCreateArgs} args - Arguments to create a Temp_users_import.
     * @example
     * // Create one Temp_users_import
     * const Temp_users_import = await prisma.temp_users_import.create({
     *   data: {
     *     // ... data to create a Temp_users_import
     *   }
     * })
     * 
     */
    create<T extends temp_users_importCreateArgs>(args: SelectSubset<T, temp_users_importCreateArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temp_users_imports.
     * @param {temp_users_importCreateManyArgs} args - Arguments to create many Temp_users_imports.
     * @example
     * // Create many Temp_users_imports
     * const temp_users_import = await prisma.temp_users_import.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends temp_users_importCreateManyArgs>(args?: SelectSubset<T, temp_users_importCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Temp_users_imports and returns the data saved in the database.
     * @param {temp_users_importCreateManyAndReturnArgs} args - Arguments to create many Temp_users_imports.
     * @example
     * // Create many Temp_users_imports
     * const temp_users_import = await prisma.temp_users_import.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Temp_users_imports and only return the `id`
     * const temp_users_importWithIdOnly = await prisma.temp_users_import.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends temp_users_importCreateManyAndReturnArgs>(args?: SelectSubset<T, temp_users_importCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Temp_users_import.
     * @param {temp_users_importDeleteArgs} args - Arguments to delete one Temp_users_import.
     * @example
     * // Delete one Temp_users_import
     * const Temp_users_import = await prisma.temp_users_import.delete({
     *   where: {
     *     // ... filter to delete one Temp_users_import
     *   }
     * })
     * 
     */
    delete<T extends temp_users_importDeleteArgs>(args: SelectSubset<T, temp_users_importDeleteArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temp_users_import.
     * @param {temp_users_importUpdateArgs} args - Arguments to update one Temp_users_import.
     * @example
     * // Update one Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends temp_users_importUpdateArgs>(args: SelectSubset<T, temp_users_importUpdateArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temp_users_imports.
     * @param {temp_users_importDeleteManyArgs} args - Arguments to filter Temp_users_imports to delete.
     * @example
     * // Delete a few Temp_users_imports
     * const { count } = await prisma.temp_users_import.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends temp_users_importDeleteManyArgs>(args?: SelectSubset<T, temp_users_importDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_users_imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temp_users_imports
     * const temp_users_import = await prisma.temp_users_import.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends temp_users_importUpdateManyArgs>(args: SelectSubset<T, temp_users_importUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_users_imports and returns the data updated in the database.
     * @param {temp_users_importUpdateManyAndReturnArgs} args - Arguments to update many Temp_users_imports.
     * @example
     * // Update many Temp_users_imports
     * const temp_users_import = await prisma.temp_users_import.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Temp_users_imports and only return the `id`
     * const temp_users_importWithIdOnly = await prisma.temp_users_import.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends temp_users_importUpdateManyAndReturnArgs>(args: SelectSubset<T, temp_users_importUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Temp_users_import.
     * @param {temp_users_importUpsertArgs} args - Arguments to update or create a Temp_users_import.
     * @example
     * // Update or create a Temp_users_import
     * const temp_users_import = await prisma.temp_users_import.upsert({
     *   create: {
     *     // ... data to create a Temp_users_import
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp_users_import we want to update
     *   }
     * })
     */
    upsert<T extends temp_users_importUpsertArgs>(args: SelectSubset<T, temp_users_importUpsertArgs<ExtArgs>>): Prisma__temp_users_importClient<$Result.GetResult<Prisma.$temp_users_importPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temp_users_imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importCountArgs} args - Arguments to filter Temp_users_imports to count.
     * @example
     * // Count the number of Temp_users_imports
     * const count = await prisma.temp_users_import.count({
     *   where: {
     *     // ... the filter for the Temp_users_imports we want to count
     *   }
     * })
    **/
    count<T extends temp_users_importCountArgs>(
      args?: Subset<T, temp_users_importCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Temp_users_importCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp_users_import.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Temp_users_importAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Temp_users_importAggregateArgs>(args: Subset<T, Temp_users_importAggregateArgs>): Prisma.PrismaPromise<GetTemp_users_importAggregateType<T>>

    /**
     * Group by Temp_users_import.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_users_importGroupByArgs} args - Group by arguments.
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
      T extends temp_users_importGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: temp_users_importGroupByArgs['orderBy'] }
        : { orderBy?: temp_users_importGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, temp_users_importGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemp_users_importGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the temp_users_import model
   */
  readonly fields: temp_users_importFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for temp_users_import.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__temp_users_importClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the temp_users_import model
   */
  interface temp_users_importFieldRefs {
    readonly id: FieldRef<"temp_users_import", 'String'>
    readonly name: FieldRef<"temp_users_import", 'String'>
    readonly email: FieldRef<"temp_users_import", 'String'>
    readonly emailVerified: FieldRef<"temp_users_import", 'DateTime'>
    readonly image: FieldRef<"temp_users_import", 'String'>
    readonly createdAt: FieldRef<"temp_users_import", 'DateTime'>
    readonly encryptedPassword: FieldRef<"temp_users_import", 'String'>
  }
    

  // Custom InputTypes
  /**
   * temp_users_import findUnique
   */
  export type temp_users_importFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter, which temp_users_import to fetch.
     */
    where: temp_users_importWhereUniqueInput
  }

  /**
   * temp_users_import findUniqueOrThrow
   */
  export type temp_users_importFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter, which temp_users_import to fetch.
     */
    where: temp_users_importWhereUniqueInput
  }

  /**
   * temp_users_import findFirst
   */
  export type temp_users_importFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter, which temp_users_import to fetch.
     */
    where?: temp_users_importWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_users_imports to fetch.
     */
    orderBy?: temp_users_importOrderByWithRelationInput | temp_users_importOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_users_imports.
     */
    cursor?: temp_users_importWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_users_imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_users_imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_users_imports.
     */
    distinct?: Temp_users_importScalarFieldEnum | Temp_users_importScalarFieldEnum[]
  }

  /**
   * temp_users_import findFirstOrThrow
   */
  export type temp_users_importFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter, which temp_users_import to fetch.
     */
    where?: temp_users_importWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_users_imports to fetch.
     */
    orderBy?: temp_users_importOrderByWithRelationInput | temp_users_importOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_users_imports.
     */
    cursor?: temp_users_importWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_users_imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_users_imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_users_imports.
     */
    distinct?: Temp_users_importScalarFieldEnum | Temp_users_importScalarFieldEnum[]
  }

  /**
   * temp_users_import findMany
   */
  export type temp_users_importFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter, which temp_users_imports to fetch.
     */
    where?: temp_users_importWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_users_imports to fetch.
     */
    orderBy?: temp_users_importOrderByWithRelationInput | temp_users_importOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing temp_users_imports.
     */
    cursor?: temp_users_importWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_users_imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_users_imports.
     */
    skip?: number
    distinct?: Temp_users_importScalarFieldEnum | Temp_users_importScalarFieldEnum[]
  }

  /**
   * temp_users_import create
   */
  export type temp_users_importCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * The data needed to create a temp_users_import.
     */
    data?: XOR<temp_users_importCreateInput, temp_users_importUncheckedCreateInput>
  }

  /**
   * temp_users_import createMany
   */
  export type temp_users_importCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many temp_users_imports.
     */
    data: temp_users_importCreateManyInput | temp_users_importCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_users_import createManyAndReturn
   */
  export type temp_users_importCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * The data used to create many temp_users_imports.
     */
    data: temp_users_importCreateManyInput | temp_users_importCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_users_import update
   */
  export type temp_users_importUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * The data needed to update a temp_users_import.
     */
    data: XOR<temp_users_importUpdateInput, temp_users_importUncheckedUpdateInput>
    /**
     * Choose, which temp_users_import to update.
     */
    where: temp_users_importWhereUniqueInput
  }

  /**
   * temp_users_import updateMany
   */
  export type temp_users_importUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update temp_users_imports.
     */
    data: XOR<temp_users_importUpdateManyMutationInput, temp_users_importUncheckedUpdateManyInput>
    /**
     * Filter which temp_users_imports to update
     */
    where?: temp_users_importWhereInput
    /**
     * Limit how many temp_users_imports to update.
     */
    limit?: number
  }

  /**
   * temp_users_import updateManyAndReturn
   */
  export type temp_users_importUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * The data used to update temp_users_imports.
     */
    data: XOR<temp_users_importUpdateManyMutationInput, temp_users_importUncheckedUpdateManyInput>
    /**
     * Filter which temp_users_imports to update
     */
    where?: temp_users_importWhereInput
    /**
     * Limit how many temp_users_imports to update.
     */
    limit?: number
  }

  /**
   * temp_users_import upsert
   */
  export type temp_users_importUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * The filter to search for the temp_users_import to update in case it exists.
     */
    where: temp_users_importWhereUniqueInput
    /**
     * In case the temp_users_import found by the `where` argument doesn't exist, create a new temp_users_import with this data.
     */
    create: XOR<temp_users_importCreateInput, temp_users_importUncheckedCreateInput>
    /**
     * In case the temp_users_import was found with the provided `where` argument, update it with this data.
     */
    update: XOR<temp_users_importUpdateInput, temp_users_importUncheckedUpdateInput>
  }

  /**
   * temp_users_import delete
   */
  export type temp_users_importDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
    /**
     * Filter which temp_users_import to delete.
     */
    where: temp_users_importWhereUniqueInput
  }

  /**
   * temp_users_import deleteMany
   */
  export type temp_users_importDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_users_imports to delete
     */
    where?: temp_users_importWhereInput
    /**
     * Limit how many temp_users_imports to delete.
     */
    limit?: number
  }

  /**
   * temp_users_import without action
   */
  export type temp_users_importDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_users_import
     */
    select?: temp_users_importSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_users_import
     */
    omit?: temp_users_importOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Playing_with_neonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    teste: 'teste'
  };

  export type Playing_with_neonScalarFieldEnum = (typeof Playing_with_neonScalarFieldEnum)[keyof typeof Playing_with_neonScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    id: 'id'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    encryptedPassword: 'encryptedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    lowername: 'lowername',
    bio: 'bio',
    pronouns: 'pronouns',
    site: 'site',
    color: 'color',
    createdAt: 'createdAt',
    public: 'public',
    favorites: 'favorites',
    verified: 'verified',
    avatarUrl: 'avatarUrl',
    albuns: 'albuns',
    artists: 'artists',
    location: 'location'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    createdAt: 'createdAt',
    followedId: 'followedId',
    followerId: 'followerId',
    id: 'id'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ratingId: 'ratingId',
    inserted_at: 'inserted_at',
    updated_at: 'updated_at',
    user_profile: 'user_profile'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    ratingId: 'ratingId',
    type: 'type',
    seen: 'seen',
    createdAt: 'createdAt',
    senderId: 'senderId',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    ratings: 'ratings',
    review: 'review',
    total: 'total',
    shorten: 'shorten',
    content: 'content',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    albumId: 'albumId',
    userId: 'userId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    action: 'action'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TokenOTPScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt',
    expires: 'expires',
    identifier: 'identifier'
  };

  export type TokenOTPScalarFieldEnum = (typeof TokenOTPScalarFieldEnum)[keyof typeof TokenOTPScalarFieldEnum]


  export const Temp_users_importScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    encryptedPassword: 'encryptedPassword'
  };

  export type Temp_users_importScalarFieldEnum = (typeof Temp_users_importScalarFieldEnum)[keyof typeof Temp_users_importScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type playing_with_neonWhereInput = {
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    id?: IntFilter<"playing_with_neon"> | number
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatNullableFilter<"playing_with_neon"> | number | null
    teste?: StringNullableFilter<"playing_with_neon"> | string | null
  }

  export type playing_with_neonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    teste?: SortOrderInput | SortOrder
  }

  export type playing_with_neonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatNullableFilter<"playing_with_neon"> | number | null
    teste?: StringNullableFilter<"playing_with_neon"> | string | null
  }, "id">

  export type playing_with_neonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    teste?: SortOrderInput | SortOrder
    _count?: playing_with_neonCountOrderByAggregateInput
    _avg?: playing_with_neonAvgOrderByAggregateInput
    _max?: playing_with_neonMaxOrderByAggregateInput
    _min?: playing_with_neonMinOrderByAggregateInput
    _sum?: playing_with_neonSumOrderByAggregateInput
  }

  export type playing_with_neonScalarWhereWithAggregatesInput = {
    AND?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    OR?: playing_with_neonScalarWhereWithAggregatesInput[]
    NOT?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playing_with_neon"> | number
    name?: StringWithAggregatesFilter<"playing_with_neon"> | string
    value?: FloatNullableWithAggregatesFilter<"playing_with_neon"> | number | null
    teste?: StringNullableWithAggregatesFilter<"playing_with_neon"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    id?: UuidFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProvider_providerAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id?: UuidWithAggregatesFilter<"Account"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    encryptedPassword?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    profiles?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    profiles?: ProfileOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    encryptedPassword?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    profiles?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    encryptedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    username?: StringNullableFilter<"Profile"> | string | null
    name?: StringNullableFilter<"Profile"> | string | null
    lowername?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    pronouns?: StringNullableFilter<"Profile"> | string | null
    site?: StringNullableFilter<"Profile"> | string | null
    color?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    public?: BoolFilter<"Profile"> | boolean
    favorites?: JsonFilter<"Profile">
    verified?: BoolFilter<"Profile"> | boolean
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    albuns?: JsonFilter<"Profile">
    artists?: JsonFilter<"Profile">
    location?: StringNullableFilter<"Profile"> | string | null
    Followed?: FollowListRelationFilter
    Followers?: FollowListRelationFilter
    Like?: LikeListRelationFilter
    Notification_Notification_senderIdToProfile?: NotificationListRelationFilter
    Notification_Notification_userIdToProfile?: NotificationListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Rating?: RatingListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lowername?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    pronouns?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    favorites?: SortOrder
    verified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    albuns?: SortOrder
    artists?: SortOrder
    location?: SortOrderInput | SortOrder
    Followed?: FollowOrderByRelationAggregateInput
    Followers?: FollowOrderByRelationAggregateInput
    Like?: LikeOrderByRelationAggregateInput
    Notification_Notification_senderIdToProfile?: NotificationOrderByRelationAggregateInput
    Notification_Notification_userIdToProfile?: NotificationOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    Rating?: RatingOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    username?: StringNullableFilter<"Profile"> | string | null
    name?: StringNullableFilter<"Profile"> | string | null
    lowername?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    pronouns?: StringNullableFilter<"Profile"> | string | null
    site?: StringNullableFilter<"Profile"> | string | null
    color?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    public?: BoolFilter<"Profile"> | boolean
    favorites?: JsonFilter<"Profile">
    verified?: BoolFilter<"Profile"> | boolean
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    albuns?: JsonFilter<"Profile">
    artists?: JsonFilter<"Profile">
    location?: StringNullableFilter<"Profile"> | string | null
    Followed?: FollowListRelationFilter
    Followers?: FollowListRelationFilter
    Like?: LikeListRelationFilter
    Notification_Notification_senderIdToProfile?: NotificationListRelationFilter
    Notification_Notification_userIdToProfile?: NotificationListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Rating?: RatingListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lowername?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    pronouns?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    favorites?: SortOrder
    verified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    albuns?: SortOrder
    artists?: SortOrder
    location?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lowername?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    pronouns?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    site?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    color?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    public?: BoolWithAggregatesFilter<"Profile"> | boolean
    favorites?: JsonWithAggregatesFilter<"Profile">
    verified?: BoolWithAggregatesFilter<"Profile"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    albuns?: JsonWithAggregatesFilter<"Profile">
    artists?: JsonWithAggregatesFilter<"Profile">
    location?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: BigIntFilter<"Comment"> | bigint | number
    userId?: UuidNullableFilter<"Comment"> | string | null
    rating?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: UuidNullableFilter<"Comment"> | string | null
    rating?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    userId?: UuidNullableWithAggregatesFilter<"Comment"> | string | null
    rating?: IntWithAggregatesFilter<"Comment"> | number
    comment?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    createdAt?: DateTimeNullableFilter<"Follow"> | Date | string | null
    followedId?: UuidFilter<"Follow"> | string
    followerId?: UuidFilter<"Follow"> | string
    id?: UuidFilter<"Follow"> | string
    followed?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    createdAt?: SortOrderInput | SortOrder
    followedId?: SortOrder
    followerId?: SortOrder
    id?: SortOrder
    followed?: ProfileOrderByWithRelationInput
    follower?: ProfileOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    followerId_followedId?: FollowFollowerIdFollowedIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    createdAt?: DateTimeNullableFilter<"Follow"> | Date | string | null
    followedId?: UuidFilter<"Follow"> | string
    followerId?: UuidFilter<"Follow"> | string
    followed?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "followerId_followedId">

  export type FollowOrderByWithAggregationInput = {
    createdAt?: SortOrderInput | SortOrder
    followedId?: SortOrder
    followerId?: SortOrder
    id?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeNullableWithAggregatesFilter<"Follow"> | Date | string | null
    followedId?: UuidWithAggregatesFilter<"Follow"> | string
    followerId?: UuidWithAggregatesFilter<"Follow"> | string
    id?: UuidWithAggregatesFilter<"Follow"> | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: BigIntFilter<"Like"> | bigint | number
    userId?: UuidNullableFilter<"Like"> | string | null
    ratingId?: UuidNullableFilter<"Like"> | string | null
    inserted_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
    user_profile?: UuidNullableFilter<"Like"> | string | null
    Rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    ratingId?: SortOrderInput | SortOrder
    inserted_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: SortOrderInput | SortOrder
    Rating?: RatingOrderByWithRelationInput
    Profile?: ProfileOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: UuidNullableFilter<"Like"> | string | null
    ratingId?: UuidNullableFilter<"Like"> | string | null
    inserted_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
    user_profile?: UuidNullableFilter<"Like"> | string | null
    Rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    ratingId?: SortOrderInput | SortOrder
    inserted_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: SortOrderInput | SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Like"> | bigint | number
    userId?: UuidNullableWithAggregatesFilter<"Like"> | string | null
    ratingId?: UuidNullableWithAggregatesFilter<"Like"> | string | null
    inserted_at?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    user_profile?: UuidNullableWithAggregatesFilter<"Like"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    ratingId?: UuidNullableFilter<"Notification"> | string | null
    type?: StringNullableFilter<"Notification"> | string | null
    seen?: BoolNullableFilter<"Notification"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    senderId?: UuidNullableFilter<"Notification"> | string | null
    userId?: UuidNullableFilter<"Notification"> | string | null
    Rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Profile_Notification_senderIdToProfile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    Profile_Notification_userIdToProfile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    ratingId?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    senderId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    Rating?: RatingOrderByWithRelationInput
    Profile_Notification_senderIdToProfile?: ProfileOrderByWithRelationInput
    Profile_Notification_userIdToProfile?: ProfileOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    ratingId?: UuidNullableFilter<"Notification"> | string | null
    type?: StringNullableFilter<"Notification"> | string | null
    seen?: BoolNullableFilter<"Notification"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    senderId?: UuidNullableFilter<"Notification"> | string | null
    userId?: UuidNullableFilter<"Notification"> | string | null
    Rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Profile_Notification_senderIdToProfile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    Profile_Notification_userIdToProfile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    ratingId?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    senderId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    ratingId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    type?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    seen?: BoolNullableWithAggregatesFilter<"Notification"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    senderId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: UuidFilter<"Rating"> | string
    ratings?: JsonNullableFilter<"Rating">
    review?: StringNullableFilter<"Rating"> | string | null
    total?: DecimalFilter<"Rating"> | Decimal | DecimalJsLike | number | string
    shorten?: StringNullableFilter<"Rating"> | string | null
    content?: JsonFilter<"Rating">
    published?: BoolFilter<"Rating"> | boolean
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    albumId?: StringNullableFilter<"Rating"> | string | null
    userId?: UuidNullableFilter<"Rating"> | string | null
    Like?: LikeListRelationFilter
    Notification?: NotificationListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    ratings?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    total?: SortOrder
    shorten?: SortOrderInput | SortOrder
    content?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albumId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    Like?: LikeOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    Profile?: ProfileOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shorten?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    ratings?: JsonNullableFilter<"Rating">
    review?: StringNullableFilter<"Rating"> | string | null
    total?: DecimalFilter<"Rating"> | Decimal | DecimalJsLike | number | string
    content?: JsonFilter<"Rating">
    published?: BoolFilter<"Rating"> | boolean
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    albumId?: StringNullableFilter<"Rating"> | string | null
    userId?: UuidNullableFilter<"Rating"> | string | null
    Like?: LikeListRelationFilter
    Notification?: NotificationListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "shorten">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    ratings?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    total?: SortOrder
    shorten?: SortOrderInput | SortOrder
    content?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albumId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Rating"> | string
    ratings?: JsonNullableWithAggregatesFilter<"Rating">
    review?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    total?: DecimalWithAggregatesFilter<"Rating"> | Decimal | DecimalJsLike | number | string
    shorten?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    content?: JsonWithAggregatesFilter<"Rating">
    published?: BoolWithAggregatesFilter<"Rating"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    albumId?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"Rating"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: UuidFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
    action?: StringNullableFilter<"VerificationToken"> | string | null
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    action?: SortOrderInput | SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
    action?: StringNullableFilter<"VerificationToken"> | string | null
  }, "id">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    action?: SortOrderInput | SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    action?: StringNullableWithAggregatesFilter<"VerificationToken"> | string | null
  }

  export type TokenOTPWhereInput = {
    AND?: TokenOTPWhereInput | TokenOTPWhereInput[]
    OR?: TokenOTPWhereInput[]
    NOT?: TokenOTPWhereInput | TokenOTPWhereInput[]
    id?: UuidFilter<"TokenOTP"> | string
    token?: StringFilter<"TokenOTP"> | string
    createdAt?: DateTimeNullableFilter<"TokenOTP"> | Date | string | null
    expires?: DateTimeFilter<"TokenOTP"> | Date | string
    identifier?: StringFilter<"TokenOTP"> | string
  }

  export type TokenOTPOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    expires?: SortOrder
    identifier?: SortOrder
  }

  export type TokenOTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier?: string
    AND?: TokenOTPWhereInput | TokenOTPWhereInput[]
    OR?: TokenOTPWhereInput[]
    NOT?: TokenOTPWhereInput | TokenOTPWhereInput[]
    createdAt?: DateTimeNullableFilter<"TokenOTP"> | Date | string | null
    expires?: DateTimeFilter<"TokenOTP"> | Date | string
  }, "id" | "token" | "identifier">

  export type TokenOTPOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    expires?: SortOrder
    identifier?: SortOrder
    _count?: TokenOTPCountOrderByAggregateInput
    _max?: TokenOTPMaxOrderByAggregateInput
    _min?: TokenOTPMinOrderByAggregateInput
  }

  export type TokenOTPScalarWhereWithAggregatesInput = {
    AND?: TokenOTPScalarWhereWithAggregatesInput | TokenOTPScalarWhereWithAggregatesInput[]
    OR?: TokenOTPScalarWhereWithAggregatesInput[]
    NOT?: TokenOTPScalarWhereWithAggregatesInput | TokenOTPScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TokenOTP"> | string
    token?: StringWithAggregatesFilter<"TokenOTP"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"TokenOTP"> | Date | string | null
    expires?: DateTimeWithAggregatesFilter<"TokenOTP"> | Date | string
    identifier?: StringWithAggregatesFilter<"TokenOTP"> | string
  }

  export type temp_users_importWhereInput = {
    AND?: temp_users_importWhereInput | temp_users_importWhereInput[]
    OR?: temp_users_importWhereInput[]
    NOT?: temp_users_importWhereInput | temp_users_importWhereInput[]
    id?: UuidFilter<"temp_users_import"> | string
    name?: StringNullableFilter<"temp_users_import"> | string | null
    email?: StringNullableFilter<"temp_users_import"> | string | null
    emailVerified?: DateTimeNullableFilter<"temp_users_import"> | Date | string | null
    image?: StringNullableFilter<"temp_users_import"> | string | null
    createdAt?: DateTimeNullableFilter<"temp_users_import"> | Date | string | null
    encryptedPassword?: StringNullableFilter<"temp_users_import"> | string | null
  }

  export type temp_users_importOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
  }

  export type temp_users_importWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: temp_users_importWhereInput | temp_users_importWhereInput[]
    OR?: temp_users_importWhereInput[]
    NOT?: temp_users_importWhereInput | temp_users_importWhereInput[]
    name?: StringNullableFilter<"temp_users_import"> | string | null
    emailVerified?: DateTimeNullableFilter<"temp_users_import"> | Date | string | null
    image?: StringNullableFilter<"temp_users_import"> | string | null
    createdAt?: DateTimeNullableFilter<"temp_users_import"> | Date | string | null
    encryptedPassword?: StringNullableFilter<"temp_users_import"> | string | null
  }, "id" | "email">

  export type temp_users_importOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
    _count?: temp_users_importCountOrderByAggregateInput
    _max?: temp_users_importMaxOrderByAggregateInput
    _min?: temp_users_importMinOrderByAggregateInput
  }

  export type temp_users_importScalarWhereWithAggregatesInput = {
    AND?: temp_users_importScalarWhereWithAggregatesInput | temp_users_importScalarWhereWithAggregatesInput[]
    OR?: temp_users_importScalarWhereWithAggregatesInput[]
    NOT?: temp_users_importScalarWhereWithAggregatesInput | temp_users_importScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"temp_users_import"> | string
    name?: StringNullableWithAggregatesFilter<"temp_users_import"> | string | null
    email?: StringNullableWithAggregatesFilter<"temp_users_import"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"temp_users_import"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"temp_users_import"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"temp_users_import"> | Date | string | null
    encryptedPassword?: StringNullableWithAggregatesFilter<"temp_users_import"> | string | null
  }

  export type playing_with_neonCreateInput = {
    name: string
    value?: number | null
    teste?: string | null
  }

  export type playing_with_neonUncheckedCreateInput = {
    id?: number
    name: string
    value?: number | null
    teste?: string | null
  }

  export type playing_with_neonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    teste?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playing_with_neonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    teste?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playing_with_neonCreateManyInput = {
    id?: number
    name: string
    value?: number | null
    teste?: string | null
  }

  export type playing_with_neonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    teste?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playing_with_neonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    teste?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    profiles?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profiles?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profiles?: ProfileUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profiles?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    id?: bigint | number
    userId?: string | null
    rating: number
    comment: string
    createdAt?: Date | string | null
  }

  export type CommentUncheckedCreateInput = {
    id?: bigint | number
    userId?: string | null
    rating: number
    comment: string
    createdAt?: Date | string | null
  }

  export type CommentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateManyInput = {
    id?: bigint | number
    userId?: string | null
    rating: number
    comment: string
    createdAt?: Date | string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowCreateInput = {
    createdAt?: Date | string | null
    id?: string
    followed: ProfileCreateNestedOneWithoutFollowedInput
    follower: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateInput = {
    createdAt?: Date | string | null
    followedId: string
    followerId: string
    id?: string
  }

  export type FollowUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    followed?: ProfileUpdateOneRequiredWithoutFollowedNestedInput
    follower?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followedId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowCreateManyInput = {
    createdAt?: Date | string | null
    followedId: string
    followerId: string
    id?: string
  }

  export type FollowUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUncheckedUpdateManyInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followedId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateInput = {
    id?: bigint | number
    userId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    Rating?: RatingCreateNestedOneWithoutLikeInput
    Profile?: ProfileCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateInput = {
    id?: bigint | number
    userId?: string | null
    ratingId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    user_profile?: string | null
  }

  export type LikeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rating?: RatingUpdateOneWithoutLikeNestedInput
    Profile?: ProfileUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeCreateManyInput = {
    id?: bigint | number
    userId?: string | null
    ratingId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    user_profile?: string | null
  }

  export type LikeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    Rating?: RatingCreateNestedOneWithoutNotificationInput
    Profile_Notification_senderIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_senderIdToProfileInput
    Profile_Notification_userIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_userIdToProfileInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
    userId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateOneWithoutNotificationNestedInput
    Profile_Notification_senderIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_senderIdToProfileNestedInput
    Profile_Notification_userIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_userIdToProfileNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
    userId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    Like?: LikeCreateNestedManyWithoutRatingInput
    Notification?: NotificationCreateNestedManyWithoutRatingInput
    Profile?: ProfileCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    userId?: string | null
    Like?: LikeUncheckedCreateNestedManyWithoutRatingInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUpdateManyWithoutRatingNestedInput
    Notification?: NotificationUpdateManyWithoutRatingNestedInput
    Profile?: ProfileUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUncheckedUpdateManyWithoutRatingNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingCreateManyInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    userId?: string | null
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    action?: string | null
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    action?: string | null
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    action?: string | null
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenOTPCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string | null
    expires: Date | string
    identifier: string
  }

  export type TokenOTPUncheckedCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string | null
    expires: Date | string
    identifier: string
  }

  export type TokenOTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
  }

  export type TokenOTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
  }

  export type TokenOTPCreateManyInput = {
    id?: string
    token: string
    createdAt?: Date | string | null
    expires: Date | string
    identifier: string
  }

  export type TokenOTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
  }

  export type TokenOTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
  }

  export type temp_users_importCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string | null
    encryptedPassword?: string | null
  }

  export type temp_users_importUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string | null
    encryptedPassword?: string | null
  }

  export type temp_users_importUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type temp_users_importUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type temp_users_importCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string | null
    encryptedPassword?: string | null
  }

  export type temp_users_importUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type temp_users_importUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type playing_with_neonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    teste?: SortOrder
  }

  export type playing_with_neonAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    teste?: SortOrder
  }

  export type playing_with_neonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    teste?: SortOrder
  }

  export type playing_with_neonSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProvider_providerAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    id?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    id?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    id?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lowername?: SortOrder
    bio?: SortOrder
    pronouns?: SortOrder
    site?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    favorites?: SortOrder
    verified?: SortOrder
    avatarUrl?: SortOrder
    albuns?: SortOrder
    artists?: SortOrder
    location?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lowername?: SortOrder
    bio?: SortOrder
    pronouns?: SortOrder
    site?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    verified?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lowername?: SortOrder
    bio?: SortOrder
    pronouns?: SortOrder
    site?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    verified?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type FollowFollowerIdFollowedIdCompoundUniqueInput = {
    followerId: string
    followedId: string
  }

  export type FollowCountOrderByAggregateInput = {
    createdAt?: SortOrder
    followedId?: SortOrder
    followerId?: SortOrder
    id?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    followedId?: SortOrder
    followerId?: SortOrder
    id?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    createdAt?: SortOrder
    followedId?: SortOrder
    followerId?: SortOrder
    id?: SortOrder
  }

  export type RatingNullableScalarRelationFilter = {
    is?: RatingWhereInput | null
    isNot?: RatingWhereInput | null
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ratingId?: SortOrder
    inserted_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ratingId?: SortOrder
    inserted_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ratingId?: SortOrder
    inserted_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    ratingId?: SortOrder
    type?: SortOrder
    seen?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    ratingId?: SortOrder
    type?: SortOrder
    seen?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    ratingId?: SortOrder
    type?: SortOrder
    seen?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    ratings?: SortOrder
    review?: SortOrder
    total?: SortOrder
    shorten?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    total?: SortOrder
    shorten?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    total?: SortOrder
    shorten?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    total?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    action?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    action?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    action?: SortOrder
  }

  export type TokenOTPCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expires?: SortOrder
    identifier?: SortOrder
  }

  export type TokenOTPMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expires?: SortOrder
    identifier?: SortOrder
  }

  export type TokenOTPMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expires?: SortOrder
    identifier?: SortOrder
  }

  export type temp_users_importCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type temp_users_importMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type temp_users_importMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    encryptedPassword?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FollowCreateNestedManyWithoutFollowedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutProfileInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput> | NotificationCreateWithoutProfile_Notification_senderIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_senderIdToProfileInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput> | NotificationCreateWithoutProfile_Notification_userIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_userIdToProfileInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutProfileInput = {
    create?: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput> | RatingCreateWithoutProfileInput[] | RatingUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProfileInput | RatingCreateOrConnectWithoutProfileInput[]
    createMany?: RatingCreateManyProfileInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput> | NotificationCreateWithoutProfile_Notification_senderIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_senderIdToProfileInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput> | NotificationCreateWithoutProfile_Notification_userIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_userIdToProfileInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput> | RatingCreateWithoutProfileInput[] | RatingUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProfileInput | RatingCreateOrConnectWithoutProfileInput[]
    createMany?: RatingCreateManyProfileInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FollowUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowedInput | FollowUpsertWithWhereUniqueWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowedInput | FollowUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowedInput | FollowUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProfileInput | LikeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProfileInput | LikeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProfileInput | LikeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput> | NotificationCreateWithoutProfile_Notification_senderIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput | NotificationUpsertWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_senderIdToProfileInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput | NotificationUpdateWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProfile_Notification_senderIdToProfileInput | NotificationUpdateManyWithWhereWithoutProfile_Notification_senderIdToProfileInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput> | NotificationCreateWithoutProfile_Notification_userIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput | NotificationUpsertWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_userIdToProfileInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput | NotificationUpdateWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProfile_Notification_userIdToProfileInput | NotificationUpdateManyWithWhereWithoutProfile_Notification_userIdToProfileInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type RatingUpdateManyWithoutProfileNestedInput = {
    create?: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput> | RatingCreateWithoutProfileInput[] | RatingUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProfileInput | RatingCreateOrConnectWithoutProfileInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutProfileInput | RatingUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: RatingCreateManyProfileInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutProfileInput | RatingUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutProfileInput | RatingUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowedInput | FollowUpsertWithWhereUniqueWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowedInput | FollowUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowedInput | FollowUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProfileInput | LikeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProfileInput | LikeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProfileInput | LikeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput> | NotificationCreateWithoutProfile_Notification_senderIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput | NotificationUpsertWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_senderIdToProfileInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput | NotificationUpdateWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProfile_Notification_senderIdToProfileInput | NotificationUpdateManyWithWhereWithoutProfile_Notification_senderIdToProfileInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput = {
    create?: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput> | NotificationCreateWithoutProfile_Notification_userIdToProfileInput[] | NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput | NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput | NotificationUpsertWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput[]
    createMany?: NotificationCreateManyProfile_Notification_userIdToProfileInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput | NotificationUpdateWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProfile_Notification_userIdToProfileInput | NotificationUpdateManyWithWhereWithoutProfile_Notification_userIdToProfileInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput> | RatingCreateWithoutProfileInput[] | RatingUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProfileInput | RatingCreateOrConnectWithoutProfileInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutProfileInput | RatingUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: RatingCreateManyProfileInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutProfileInput | RatingUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutProfileInput | RatingUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProfileCreateNestedOneWithoutFollowedInput = {
    create?: XOR<ProfileCreateWithoutFollowedInput, ProfileUncheckedCreateWithoutFollowedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowedInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutFollowedNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowedInput, ProfileUncheckedCreateWithoutFollowedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowedInput
    upsert?: ProfileUpsertWithoutFollowedInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowedInput, ProfileUpdateWithoutFollowedInput>, ProfileUncheckedUpdateWithoutFollowedInput>
  }

  export type ProfileUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    upsert?: ProfileUpsertWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowersInput, ProfileUpdateWithoutFollowersInput>, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type RatingCreateNestedOneWithoutLikeInput = {
    create?: XOR<RatingCreateWithoutLikeInput, RatingUncheckedCreateWithoutLikeInput>
    connectOrCreate?: RatingCreateOrConnectWithoutLikeInput
    connect?: RatingWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutLikeInput = {
    create?: XOR<ProfileCreateWithoutLikeInput, ProfileUncheckedCreateWithoutLikeInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLikeInput
    connect?: ProfileWhereUniqueInput
  }

  export type RatingUpdateOneWithoutLikeNestedInput = {
    create?: XOR<RatingCreateWithoutLikeInput, RatingUncheckedCreateWithoutLikeInput>
    connectOrCreate?: RatingCreateOrConnectWithoutLikeInput
    upsert?: RatingUpsertWithoutLikeInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutLikeInput, RatingUpdateWithoutLikeInput>, RatingUncheckedUpdateWithoutLikeInput>
  }

  export type ProfileUpdateOneWithoutLikeNestedInput = {
    create?: XOR<ProfileCreateWithoutLikeInput, ProfileUncheckedCreateWithoutLikeInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLikeInput
    upsert?: ProfileUpsertWithoutLikeInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutLikeInput, ProfileUpdateWithoutLikeInput>, ProfileUncheckedUpdateWithoutLikeInput>
  }

  export type RatingCreateNestedOneWithoutNotificationInput = {
    create?: XOR<RatingCreateWithoutNotificationInput, RatingUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutNotificationInput
    connect?: RatingWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutNotification_Notification_senderIdToProfileInput = {
    create?: XOR<ProfileCreateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_senderIdToProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotification_Notification_senderIdToProfileInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutNotification_Notification_userIdToProfileInput = {
    create?: XOR<ProfileCreateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_userIdToProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotification_Notification_userIdToProfileInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RatingUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<RatingCreateWithoutNotificationInput, RatingUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutNotificationInput
    upsert?: RatingUpsertWithoutNotificationInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutNotificationInput, RatingUpdateWithoutNotificationInput>, RatingUncheckedUpdateWithoutNotificationInput>
  }

  export type ProfileUpdateOneWithoutNotification_Notification_senderIdToProfileNestedInput = {
    create?: XOR<ProfileCreateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_senderIdToProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotification_Notification_senderIdToProfileInput
    upsert?: ProfileUpsertWithoutNotification_Notification_senderIdToProfileInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotification_Notification_senderIdToProfileInput, ProfileUpdateWithoutNotification_Notification_senderIdToProfileInput>, ProfileUncheckedUpdateWithoutNotification_Notification_senderIdToProfileInput>
  }

  export type ProfileUpdateOneWithoutNotification_Notification_userIdToProfileNestedInput = {
    create?: XOR<ProfileCreateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_userIdToProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotification_Notification_userIdToProfileInput
    upsert?: ProfileUpsertWithoutNotification_Notification_userIdToProfileInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotification_Notification_userIdToProfileInput, ProfileUpdateWithoutNotification_Notification_userIdToProfileInput>, ProfileUncheckedUpdateWithoutNotification_Notification_userIdToProfileInput>
  }

  export type LikeCreateNestedManyWithoutRatingInput = {
    create?: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput> | LikeCreateWithoutRatingInput[] | LikeUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutRatingInput | LikeCreateOrConnectWithoutRatingInput[]
    createMany?: LikeCreateManyRatingInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutRatingInput = {
    create?: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput> | NotificationCreateWithoutRatingInput[] | NotificationUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRatingInput | NotificationCreateOrConnectWithoutRatingInput[]
    createMany?: NotificationCreateManyRatingInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutRatingInput = {
    create?: XOR<ProfileCreateWithoutRatingInput, ProfileUncheckedCreateWithoutRatingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutRatingInput
    connect?: ProfileWhereUniqueInput
  }

  export type LikeUncheckedCreateNestedManyWithoutRatingInput = {
    create?: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput> | LikeCreateWithoutRatingInput[] | LikeUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutRatingInput | LikeCreateOrConnectWithoutRatingInput[]
    createMany?: LikeCreateManyRatingInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutRatingInput = {
    create?: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput> | NotificationCreateWithoutRatingInput[] | NotificationUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRatingInput | NotificationCreateOrConnectWithoutRatingInput[]
    createMany?: NotificationCreateManyRatingInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LikeUpdateManyWithoutRatingNestedInput = {
    create?: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput> | LikeCreateWithoutRatingInput[] | LikeUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutRatingInput | LikeCreateOrConnectWithoutRatingInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutRatingInput | LikeUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: LikeCreateManyRatingInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutRatingInput | LikeUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutRatingInput | LikeUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutRatingNestedInput = {
    create?: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput> | NotificationCreateWithoutRatingInput[] | NotificationUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRatingInput | NotificationCreateOrConnectWithoutRatingInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRatingInput | NotificationUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: NotificationCreateManyRatingInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRatingInput | NotificationUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRatingInput | NotificationUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutRatingNestedInput = {
    create?: XOR<ProfileCreateWithoutRatingInput, ProfileUncheckedCreateWithoutRatingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutRatingInput
    upsert?: ProfileUpsertWithoutRatingInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutRatingInput, ProfileUpdateWithoutRatingInput>, ProfileUncheckedUpdateWithoutRatingInput>
  }

  export type LikeUncheckedUpdateManyWithoutRatingNestedInput = {
    create?: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput> | LikeCreateWithoutRatingInput[] | LikeUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutRatingInput | LikeCreateOrConnectWithoutRatingInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutRatingInput | LikeUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: LikeCreateManyRatingInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutRatingInput | LikeUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutRatingInput | LikeUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutRatingNestedInput = {
    create?: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput> | NotificationCreateWithoutRatingInput[] | NotificationUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRatingInput | NotificationCreateOrConnectWithoutRatingInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRatingInput | NotificationUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: NotificationCreateManyRatingInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRatingInput | NotificationUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRatingInput | NotificationUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    profiles?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    profiles?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    profiles?: ProfileUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    profiles?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    profiles?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profiles?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profiles?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profiles?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    id?: UuidFilter<"Account"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type FollowCreateWithoutFollowedInput = {
    createdAt?: Date | string | null
    id?: string
    follower: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowedInput = {
    createdAt?: Date | string | null
    followerId: string
    id?: string
  }

  export type FollowCreateOrConnectWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
  }

  export type FollowCreateManyFollowedInputEnvelope = {
    data: FollowCreateManyFollowedInput | FollowCreateManyFollowedInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowerInput = {
    createdAt?: Date | string | null
    id?: string
    followed: ProfileCreateNestedOneWithoutFollowedInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    createdAt?: Date | string | null
    followedId: string
    id?: string
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutProfileInput = {
    id?: bigint | number
    userId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    Rating?: RatingCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateWithoutProfileInput = {
    id?: bigint | number
    userId?: string | null
    ratingId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateOrConnectWithoutProfileInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput>
  }

  export type LikeCreateManyProfileInputEnvelope = {
    data: LikeCreateManyProfileInput | LikeCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutProfile_Notification_senderIdToProfileInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    Rating?: RatingCreateNestedOneWithoutNotificationInput
    Profile_Notification_userIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_userIdToProfileInput
  }

  export type NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    userId?: string | null
  }

  export type NotificationCreateOrConnectWithoutProfile_Notification_senderIdToProfileInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput>
  }

  export type NotificationCreateManyProfile_Notification_senderIdToProfileInputEnvelope = {
    data: NotificationCreateManyProfile_Notification_senderIdToProfileInput | NotificationCreateManyProfile_Notification_senderIdToProfileInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutProfile_Notification_userIdToProfileInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    Rating?: RatingCreateNestedOneWithoutNotificationInput
    Profile_Notification_senderIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_senderIdToProfileInput
  }

  export type NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
  }

  export type NotificationCreateOrConnectWithoutProfile_Notification_userIdToProfileInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput>
  }

  export type NotificationCreateManyProfile_Notification_userIdToProfileInputEnvelope = {
    data: NotificationCreateManyProfile_Notification_userIdToProfileInput | NotificationCreateManyProfile_Notification_userIdToProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    encryptedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type RatingCreateWithoutProfileInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    Like?: LikeCreateNestedManyWithoutRatingInput
    Notification?: NotificationCreateNestedManyWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutProfileInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    Like?: LikeUncheckedCreateNestedManyWithoutRatingInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingCreateOrConnectWithoutProfileInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput>
  }

  export type RatingCreateManyProfileInputEnvelope = {
    data: RatingCreateManyProfileInput | RatingCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowedInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowedInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    createdAt?: DateTimeNullableFilter<"Follow"> | Date | string | null
    followedId?: UuidFilter<"Follow"> | string
    followerId?: UuidFilter<"Follow"> | string
    id?: UuidFilter<"Follow"> | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutProfileInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutProfileInput, LikeUncheckedUpdateWithoutProfileInput>
    create: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutProfileInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutProfileInput, LikeUncheckedUpdateWithoutProfileInput>
  }

  export type LikeUpdateManyWithWhereWithoutProfileInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutProfileInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: BigIntFilter<"Like"> | bigint | number
    userId?: UuidNullableFilter<"Like"> | string | null
    ratingId?: UuidNullableFilter<"Like"> | string | null
    inserted_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
    user_profile?: UuidNullableFilter<"Like"> | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedUpdateWithoutProfile_Notification_senderIdToProfileInput>
    create: XOR<NotificationCreateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_senderIdToProfileInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutProfile_Notification_senderIdToProfileInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutProfile_Notification_senderIdToProfileInput, NotificationUncheckedUpdateWithoutProfile_Notification_senderIdToProfileInput>
  }

  export type NotificationUpdateManyWithWhereWithoutProfile_Notification_senderIdToProfileInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    ratingId?: UuidNullableFilter<"Notification"> | string | null
    type?: StringNullableFilter<"Notification"> | string | null
    seen?: BoolNullableFilter<"Notification"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    senderId?: UuidNullableFilter<"Notification"> | string | null
    userId?: UuidNullableFilter<"Notification"> | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedUpdateWithoutProfile_Notification_userIdToProfileInput>
    create: XOR<NotificationCreateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedCreateWithoutProfile_Notification_userIdToProfileInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutProfile_Notification_userIdToProfileInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutProfile_Notification_userIdToProfileInput, NotificationUncheckedUpdateWithoutProfile_Notification_userIdToProfileInput>
  }

  export type NotificationUpdateManyWithWhereWithoutProfile_Notification_userIdToProfileInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileInput>
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RatingUpsertWithWhereUniqueWithoutProfileInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutProfileInput, RatingUncheckedUpdateWithoutProfileInput>
    create: XOR<RatingCreateWithoutProfileInput, RatingUncheckedCreateWithoutProfileInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutProfileInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutProfileInput, RatingUncheckedUpdateWithoutProfileInput>
  }

  export type RatingUpdateManyWithWhereWithoutProfileInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutProfileInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: UuidFilter<"Rating"> | string
    ratings?: JsonNullableFilter<"Rating">
    review?: StringNullableFilter<"Rating"> | string | null
    total?: DecimalFilter<"Rating"> | Decimal | DecimalJsLike | number | string
    shorten?: StringNullableFilter<"Rating"> | string | null
    content?: JsonFilter<"Rating">
    published?: BoolFilter<"Rating"> | boolean
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    albumId?: StringNullableFilter<"Rating"> | string | null
    userId?: UuidNullableFilter<"Rating"> | string | null
  }

  export type ProfileCreateWithoutFollowedInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutFollowedInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutFollowedInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowedInput, ProfileUncheckedCreateWithoutFollowedInput>
  }

  export type ProfileCreateWithoutFollowersInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutFollowersInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutFollowersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
  }

  export type ProfileUpsertWithoutFollowedInput = {
    update: XOR<ProfileUpdateWithoutFollowedInput, ProfileUncheckedUpdateWithoutFollowedInput>
    create: XOR<ProfileCreateWithoutFollowedInput, ProfileUncheckedCreateWithoutFollowedInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowedInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowedInput, ProfileUncheckedUpdateWithoutFollowedInput>
  }

  export type ProfileUpdateWithoutFollowedInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUpsertWithoutFollowersInput = {
    update: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type ProfileUpdateWithoutFollowersInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type RatingCreateWithoutLikeInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    Notification?: NotificationCreateNestedManyWithoutRatingInput
    Profile?: ProfileCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutLikeInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    userId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingCreateOrConnectWithoutLikeInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutLikeInput, RatingUncheckedCreateWithoutLikeInput>
  }

  export type ProfileCreateWithoutLikeInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLikeInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutLikeInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLikeInput, ProfileUncheckedCreateWithoutLikeInput>
  }

  export type RatingUpsertWithoutLikeInput = {
    update: XOR<RatingUpdateWithoutLikeInput, RatingUncheckedUpdateWithoutLikeInput>
    create: XOR<RatingCreateWithoutLikeInput, RatingUncheckedCreateWithoutLikeInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutLikeInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutLikeInput, RatingUncheckedUpdateWithoutLikeInput>
  }

  export type RatingUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUpdateManyWithoutRatingNestedInput
    Profile?: ProfileUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type ProfileUpsertWithoutLikeInput = {
    update: XOR<ProfileUpdateWithoutLikeInput, ProfileUncheckedUpdateWithoutLikeInput>
    create: XOR<ProfileCreateWithoutLikeInput, ProfileUncheckedCreateWithoutLikeInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutLikeInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutLikeInput, ProfileUncheckedUpdateWithoutLikeInput>
  }

  export type ProfileUpdateWithoutLikeInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type RatingCreateWithoutNotificationInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    Like?: LikeCreateNestedManyWithoutRatingInput
    Profile?: ProfileCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutNotificationInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
    userId?: string | null
    Like?: LikeUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingCreateOrConnectWithoutNotificationInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutNotificationInput, RatingUncheckedCreateWithoutNotificationInput>
  }

  export type ProfileCreateWithoutNotification_Notification_senderIdToProfileInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutNotification_Notification_senderIdToProfileInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutNotification_Notification_senderIdToProfileInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_senderIdToProfileInput>
  }

  export type ProfileCreateWithoutNotification_Notification_userIdToProfileInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
    Rating?: RatingCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutNotification_Notification_userIdToProfileInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Rating?: RatingUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutNotification_Notification_userIdToProfileInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_userIdToProfileInput>
  }

  export type RatingUpsertWithoutNotificationInput = {
    update: XOR<RatingUpdateWithoutNotificationInput, RatingUncheckedUpdateWithoutNotificationInput>
    create: XOR<RatingCreateWithoutNotificationInput, RatingUncheckedCreateWithoutNotificationInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutNotificationInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutNotificationInput, RatingUncheckedUpdateWithoutNotificationInput>
  }

  export type RatingUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUpdateManyWithoutRatingNestedInput
    Profile?: ProfileUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type ProfileUpsertWithoutNotification_Notification_senderIdToProfileInput = {
    update: XOR<ProfileUpdateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedUpdateWithoutNotification_Notification_senderIdToProfileInput>
    create: XOR<ProfileCreateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_senderIdToProfileInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotification_Notification_senderIdToProfileInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotification_Notification_senderIdToProfileInput, ProfileUncheckedUpdateWithoutNotification_Notification_senderIdToProfileInput>
  }

  export type ProfileUpdateWithoutNotification_Notification_senderIdToProfileInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotification_Notification_senderIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUpsertWithoutNotification_Notification_userIdToProfileInput = {
    update: XOR<ProfileUpdateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedUpdateWithoutNotification_Notification_userIdToProfileInput>
    create: XOR<ProfileCreateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedCreateWithoutNotification_Notification_userIdToProfileInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotification_Notification_userIdToProfileInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotification_Notification_userIdToProfileInput, ProfileUncheckedUpdateWithoutNotification_Notification_userIdToProfileInput>
  }

  export type ProfileUpdateWithoutNotification_Notification_userIdToProfileInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
    Rating?: RatingUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotification_Notification_userIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type LikeCreateWithoutRatingInput = {
    id?: bigint | number
    userId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    Profile?: ProfileCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateWithoutRatingInput = {
    id?: bigint | number
    userId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    user_profile?: string | null
  }

  export type LikeCreateOrConnectWithoutRatingInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput>
  }

  export type LikeCreateManyRatingInputEnvelope = {
    data: LikeCreateManyRatingInput | LikeCreateManyRatingInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutRatingInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    Profile_Notification_senderIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_senderIdToProfileInput
    Profile_Notification_userIdToProfile?: ProfileCreateNestedOneWithoutNotification_Notification_userIdToProfileInput
  }

  export type NotificationUncheckedCreateWithoutRatingInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
    userId?: string | null
  }

  export type NotificationCreateOrConnectWithoutRatingInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput>
  }

  export type NotificationCreateManyRatingInputEnvelope = {
    data: NotificationCreateManyRatingInput | NotificationCreateManyRatingInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutRatingInput = {
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowCreateNestedManyWithoutFollowedInput
    Followers?: FollowCreateNestedManyWithoutFollowerInput
    Like?: LikeCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
    User?: UserCreateNestedOneWithoutProfilesInput
  }

  export type ProfileUncheckedCreateWithoutRatingInput = {
    id?: string
    username?: string | null
    name?: string | null
    lowername?: string | null
    bio?: string | null
    pronouns?: string | null
    site?: string | null
    color?: string | null
    createdAt?: Date | string
    public?: boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: boolean
    avatarUrl?: string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: string | null
    Followed?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    Followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    Like?: LikeUncheckedCreateNestedManyWithoutProfileInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_senderIdToProfileInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedCreateNestedManyWithoutProfile_Notification_userIdToProfileInput
  }

  export type ProfileCreateOrConnectWithoutRatingInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutRatingInput, ProfileUncheckedCreateWithoutRatingInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutRatingInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutRatingInput, LikeUncheckedUpdateWithoutRatingInput>
    create: XOR<LikeCreateWithoutRatingInput, LikeUncheckedCreateWithoutRatingInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutRatingInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutRatingInput, LikeUncheckedUpdateWithoutRatingInput>
  }

  export type LikeUpdateManyWithWhereWithoutRatingInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutRatingInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutRatingInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutRatingInput, NotificationUncheckedUpdateWithoutRatingInput>
    create: XOR<NotificationCreateWithoutRatingInput, NotificationUncheckedCreateWithoutRatingInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutRatingInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutRatingInput, NotificationUncheckedUpdateWithoutRatingInput>
  }

  export type NotificationUpdateManyWithWhereWithoutRatingInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutRatingInput>
  }

  export type ProfileUpsertWithoutRatingInput = {
    update: XOR<ProfileUpdateWithoutRatingInput, ProfileUncheckedUpdateWithoutRatingInput>
    create: XOR<ProfileCreateWithoutRatingInput, ProfileUncheckedCreateWithoutRatingInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutRatingInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutRatingInput, ProfileUncheckedUpdateWithoutRatingInput>
  }

  export type ProfileUpdateWithoutRatingInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUpdateManyWithoutFollowerNestedInput
    Like?: LikeUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
    User?: UserUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfileUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lowername?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    favorites?: JsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albuns?: JsonNullValueInput | InputJsonValue
    artists?: JsonNullValueInput | InputJsonValue
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Followed?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    Followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    Like?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    Notification_Notification_senderIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileNestedInput
    Notification_Notification_userIdToProfile?: NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    id?: string
  }

  export type SessionCreateManyUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyFollowedInput = {
    createdAt?: Date | string | null
    followerId: string
    id?: string
  }

  export type FollowCreateManyFollowerInput = {
    createdAt?: Date | string | null
    followedId: string
    id?: string
  }

  export type LikeCreateManyProfileInput = {
    id?: bigint | number
    userId?: string | null
    ratingId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateManyProfile_Notification_senderIdToProfileInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    userId?: string | null
  }

  export type NotificationCreateManyProfile_Notification_userIdToProfileInput = {
    id?: string
    ratingId?: string | null
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
  }

  export type RatingCreateManyProfileInput = {
    id?: string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: string | null
    total?: Decimal | DecimalJsLike | number | string
    shorten?: string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    albumId?: string | null
  }

  export type FollowUpdateWithoutFollowedInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    follower?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowedInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowedInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpdateWithoutFollowerInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    followed?: ProfileUpdateOneRequiredWithoutFollowedNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followedId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followedId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUpdateWithoutProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rating?: RatingUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateWithoutProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutProfile_Notification_senderIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateOneWithoutNotificationNestedInput
    Profile_Notification_userIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_userIdToProfileNestedInput
  }

  export type NotificationUncheckedUpdateWithoutProfile_Notification_senderIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutProfile_Notification_senderIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutProfile_Notification_userIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateOneWithoutNotificationNestedInput
    Profile_Notification_senderIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_senderIdToProfileNestedInput
  }

  export type NotificationUncheckedUpdateWithoutProfile_Notification_userIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutProfile_Notification_userIdToProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUpdateManyWithoutRatingNestedInput
    Notification?: NotificationUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    Like?: LikeUncheckedUpdateManyWithoutRatingNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratings?: NullableJsonNullValueInput | InputJsonValue
    review?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shorten?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeCreateManyRatingInput = {
    id?: bigint | number
    userId?: string | null
    inserted_at?: Date | string
    updated_at?: Date | string
    user_profile?: string | null
  }

  export type NotificationCreateManyRatingInput = {
    id?: string
    type?: string | null
    seen?: boolean | null
    createdAt?: Date | string | null
    senderId?: string | null
    userId?: string | null
  }

  export type LikeUpdateWithoutRatingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Profile?: ProfileUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateWithoutRatingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUncheckedUpdateManyWithoutRatingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    inserted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Profile_Notification_senderIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_senderIdToProfileNestedInput
    Profile_Notification_userIdToProfile?: ProfileUpdateOneWithoutNotification_Notification_userIdToProfileNestedInput
  }

  export type NotificationUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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