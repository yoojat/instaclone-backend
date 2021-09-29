import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IContext } from 'src/types/apollo';
import { FileUpload } from 'graphql-upload';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: FileUpload;
};

export interface Comment {
  __typename?: 'Comment';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  payload: Scalars['String'];
  photo: Photo;
  updatedAt?: Maybe<Scalars['String']>;
  user: User;
}

export interface Hashtag {
  __typename?: 'Hashtag';
  createdAt: Scalars['String'];
  hashtag: Scalars['String'];
  id: Scalars['Int'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalPhotos: Scalars['Int'];
  updatedAt: Scalars['String'];
}


export type HashtagPhotosArgs = {
  page: Scalars['Int'];
};

export interface Like {
  __typename?: 'Like';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  photo: Photo;
  updatedAt: Scalars['String'];
}

export interface LoginResult {
  __typename?: 'LoginResult';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export interface Message {
  __typename?: 'Message';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  payload?: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  room: Room;
  updatedAt?: Maybe<Scalars['String']>;
  user: User;
}

export interface Mutation {
  __typename?: 'Mutation';
  createAccount: MutationResponse;
  createComment: MutationResponse;
  deleteComment: MutationResponse;
  deletePhoto: MutationResponse;
  editComment: MutationResponse;
  editPhoto: MutationResponse;
  editProfile: MutationResponse;
  followUser: MutationResponse;
  login: LoginResult;
  readMessage: MutationResponse;
  sendMessage: MutationResponse;
  toggleLike: MutationResponse;
  unfollowUser: MutationResponse;
  uploadPhoto?: Maybe<Photo>;
}


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  payload: Scalars['String'];
  photoId: Scalars['Int'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int'];
};


export type MutationEditCommentArgs = {
  id: Scalars['Int'];
  payload: Scalars['String'];
};


export type MutationEditPhotoArgs = {
  caption: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationEditProfileArgs = {
  avatar?: Maybe<Scalars['Upload']>;
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationReadMessageArgs = {
  id: Scalars['Int'];
};


export type MutationSendMessageArgs = {
  payload: Scalars['String'];
  roomId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};


export type MutationUploadPhotoArgs = {
  caption?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};

export interface MutationResponse {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ok: Scalars['Boolean'];
}

export interface Photo {
  __typename?: 'Photo';
  caption?: Maybe<Scalars['String']>;
  commentNumber: Scalars['Int'];
  comments: Array<Maybe<Comment>>;
  createdAt: Scalars['String'];
  file: Scalars['String'];
  hastags?: Maybe<Array<Maybe<Hashtag>>>;
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  likes: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: User;
}

export interface Query {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchPhotos?: Maybe<Array<Maybe<Photo>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeFeed?: Maybe<Array<Maybe<Photo>>>;
  seeFollowers?: Maybe<SeeFollowerResult>;
  seeFollowing: SeeFollowingResult;
  seeHashtag?: Maybe<Hashtag>;
  seePhoto?: Maybe<Photo>;
  seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
  seePhotoLikes?: Maybe<Array<Maybe<User>>>;
  seeProfile?: Maybe<User>;
  seeRoom?: Maybe<Room>;
  seeRooms?: Maybe<Array<Maybe<Room>>>;
}


export type QuerySearchPhotosArgs = {
  keyword: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int'];
  username: Scalars['String'];
};


export type QuerySeeFollowingArgs = {
  lastId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int'];
};


export type QuerySeePhotoCommentsArgs = {
  id: Scalars['Int'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int'];
};


export type QuerySeeProfileArgs = {
  username?: Maybe<Scalars['String']>;
};


export type QuerySeeRoomArgs = {
  id: Scalars['Int'];
};

export interface Room {
  __typename?: 'Room';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  messages?: Maybe<Array<Maybe<Message>>>;
  unreadTotal: Scalars['Int'];
  updatedAt: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
}

export interface SeeFollowerResult {
  __typename?: 'SeeFollowerResult';
  error?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean'];
  ttalPages?: Maybe<Scalars['Int']>;
}

export interface SeeFollowingResult {
  __typename?: 'SeeFollowingResult';
  error?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean'];
}

export interface Subscription {
  __typename?: 'Subscription';
  roomUpdates?: Maybe<Message>;
}


export type SubscriptionRoomUpdatesArgs = {
  id: Scalars['Int'];
};

export interface User {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<Comment>;
  Hashtag: ResolverTypeWrapper<Hashtag>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Like: ResolverTypeWrapper<Like>;
  LoginResult: ResolverTypeWrapper<LoginResult>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  Photo: ResolverTypeWrapper<Photo>;
  Query: ResolverTypeWrapper<{}>;
  Room: ResolverTypeWrapper<Room>;
  SeeFollowerResult: ResolverTypeWrapper<SeeFollowerResult>;
  SeeFollowingResult: ResolverTypeWrapper<SeeFollowingResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  Hashtag: Hashtag;
  Int: Scalars['Int'];
  Like: Like;
  LoginResult: LoginResult;
  Message: Message;
  Mutation: {};
  MutationResponse: MutationResponse;
  Photo: Photo;
  Query: {};
  Room: Room;
  SeeFollowerResult: SeeFollowerResult;
  SeeFollowingResult: SeeFollowingResult;
  String: Scalars['String'];
  Subscription: {};
  Upload: Scalars['Upload'];
  User: User;
};

export type CommentResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Photo'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HashtagResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Hashtag'] = ResolversParentTypes['Hashtag']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashtag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType, RequireFields<HashtagPhotosArgs, 'page'>>;
  totalPhotos?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Photo'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccount?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'email' | 'firstName' | 'password' | 'username'>>;
  createComment?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'payload' | 'photoId'>>;
  deleteComment?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deletePhoto?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationDeletePhotoArgs, 'id'>>;
  editComment?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'id' | 'payload'>>;
  editPhoto?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationEditPhotoArgs, 'caption' | 'id'>>;
  editProfile?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationEditProfileArgs, never>>;
  followUser?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'username'>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  readMessage?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationReadMessageArgs, 'id'>>;
  sendMessage?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'payload'>>;
  toggleLike?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationToggleLikeArgs, 'id'>>;
  unfollowUser?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationUnfollowUserArgs, 'username'>>;
  uploadPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationUploadPhotoArgs, 'file'>>;
};

export type MutationResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commentNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hastags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hashtag']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  searchPhotos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType, RequireFields<QuerySearchPhotosArgs, 'keyword'>>;
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'keyword'>>;
  seeFeed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  seeFollowers?: Resolver<Maybe<ResolversTypes['SeeFollowerResult']>, ParentType, ContextType, RequireFields<QuerySeeFollowersArgs, 'page' | 'username'>>;
  seeFollowing?: Resolver<ResolversTypes['SeeFollowingResult'], ParentType, ContextType, RequireFields<QuerySeeFollowingArgs, 'username'>>;
  seeHashtag?: Resolver<Maybe<ResolversTypes['Hashtag']>, ParentType, ContextType, RequireFields<QuerySeeHashtagArgs, 'hashtag'>>;
  seePhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QuerySeePhotoArgs, 'id'>>;
  seePhotoComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QuerySeePhotoCommentsArgs, 'id'>>;
  seePhotoLikes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySeePhotoLikesArgs, 'id'>>;
  seeProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySeeProfileArgs, never>>;
  seeRoom?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QuerySeeRoomArgs, 'id'>>;
  seeRooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
};

export type RoomResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  unreadTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeFollowerResultResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['SeeFollowerResult'] = ResolversParentTypes['SeeFollowerResult']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ttalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeFollowingResultResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['SeeFollowingResult'] = ResolversParentTypes['SeeFollowingResult']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  roomUpdates?: SubscriptionResolver<Maybe<ResolversTypes['Message']>, "roomUpdates", ParentType, ContextType, RequireFields<SubscriptionRoomUpdatesArgs, 'id'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  totalFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = IContext> = {
  Comment?: CommentResolvers<ContextType>;
  Hashtag?: HashtagResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  SeeFollowerResult?: SeeFollowerResultResolvers<ContextType>;
  SeeFollowingResult?: SeeFollowingResultResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

