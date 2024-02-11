/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUsersGet$Json } from '../fn/users/api-users-get-json';
import { ApiUsersGet$Json$Params } from '../fn/users/api-users-get-json';
import { apiUsersGet$Plain } from '../fn/users/api-users-get-plain';
import { ApiUsersGet$Plain$Params } from '../fn/users/api-users-get-plain';
import { apiUsersIdDelete } from '../fn/users/api-users-id-delete';
import { ApiUsersIdDelete$Params } from '../fn/users/api-users-id-delete';
import { apiUsersIdGet$Json } from '../fn/users/api-users-id-get-json';
import { ApiUsersIdGet$Json$Params } from '../fn/users/api-users-id-get-json';
import { apiUsersIdGet$Plain } from '../fn/users/api-users-id-get-plain';
import { ApiUsersIdGet$Plain$Params } from '../fn/users/api-users-id-get-plain';
import { apiUsersIdPut } from '../fn/users/api-users-id-put';
import { ApiUsersIdPut$Params } from '../fn/users/api-users-id-put';
import { apiUsersPost$Json } from '../fn/users/api-users-post-json';
import { ApiUsersPost$Json$Params } from '../fn/users/api-users-post-json';
import { apiUsersPost$Plain } from '../fn/users/api-users-post-plain';
import { ApiUsersPost$Plain$Params } from '../fn/users/api-users-post-plain';
import { User } from '../models/user';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUsersGet()` */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: ApiUsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return apiUsersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: ApiUsersGet$Plain$Params, context?: HttpContext): Observable<Array<User>> {
    return this.apiUsersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: ApiUsersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return apiUsersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: ApiUsersGet$Json$Params, context?: HttpContext): Observable<Array<User>> {
    return this.apiUsersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `apiUsersPost()` */
  static readonly ApiUsersPostPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Plain$Response(params?: ApiUsersPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return apiUsersPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Plain(params?: ApiUsersPost$Plain$Params, context?: HttpContext): Observable<UserDto> {
    return this.apiUsersPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Json$Response(params?: ApiUsersPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return apiUsersPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Json(params?: ApiUsersPost$Json$Params, context?: HttpContext): Observable<UserDto> {
    return this.apiUsersPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `apiUsersIdGet()` */
  static readonly ApiUsersIdGetPath = '/api/Users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Plain$Response(params: ApiUsersIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUsersIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Plain(params: ApiUsersIdGet$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUsersIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Json$Response(params: ApiUsersIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUsersIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Json(params: ApiUsersIdGet$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUsersIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUsersIdPut()` */
  static readonly ApiUsersIdPutPath = '/api/Users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersIdPut$Response(params: ApiUsersIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUsersIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersIdPut(params: ApiUsersIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiUsersIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUsersIdDelete()` */
  static readonly ApiUsersIdDeletePath = '/api/Users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdDelete$Response(params: ApiUsersIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUsersIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdDelete(params: ApiUsersIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUsersIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
