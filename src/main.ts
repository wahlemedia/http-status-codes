
export default class Http {

  private constructor() { };

  /**
   * informational response
   * 
   * @var int 100
   */
  public static CONTINUE: number = 100;

  /**
   * informational response
   * 
   * @var int 101
   */
  public static SWITCHING_PROTOCOLS: number = 101;

  /**
   * informational response
   * 
   * @var int 102
   */
  public static PROCESSING: number = 102;

  /**
   * informational response
   * 
   * @var int 103
   */
  public static EARLY_HINTS: number = 103;

  /**
   * success
   * 
   * @var int 200
   */
  public static OK: number = 200;

  /**
   * success
   * 
   * @var int 201
   */
  public static CREATED: number = 201;

  /**
   * success
   * 
   * @var int 202
   */
  public static ACCEPTED: number = 202;

  /**
   * success
   * 
   * @var int 203
   */
  public static NON_AUTHORITATIVE_INFORMATION: number = 203;

  /**
   * success
   * 
   * @var int 204
   */
  public static NO_CONTENT: number = 204;

  /**
   * success
   * 
   * @var int 205
   */
  public static RESET_CONTENT: number = 205;

  /**
   * success
   * 
   * @var int 206
   */
  public static PARTIAL_CONTENT: number = 206;

  /**
   * success
   * 
   * @var int 207
   */
  public static MULTI_STATUS: number = 207;

  /**
   * success
   * 
   * @var int 208
   */
  public static ALREADY_REPORTED: number = 208;

  /**
   * success
   * 
   * @var int 218
   */
  public static THIS_IS_FINE: number = 218;

  /**
   * success
   * 
   * @var int 226
   */
  public static IM_USED: number = 226;

  /**
   * redirection
   * 
   * @var int 300
   */
  public static MULTIPLE_CHOICES: number = 300;

  /**
   * redirection
   * 
   * @var int 301
   */
  public static MOVED_PERMANENTLY: number = 301;

  /**
   * redirection
   * 
   * @var int 302
   */
  public static FOUND: number = 302;

  /**
   * redirection
   * 
   * @var int 303
   */
  public static SEE_OTHER: number = 303;

  /**
   * redirection
   * 
   * @var int 304
   */
  public static NOT_MODIFIED: number = 304;

  /**
   * redirection
   * 
   * @var int 305
   */
  public static USE_PROXY: number = 305;

  /**
   * redirection
   * 
   * @var int 307
   */
  public static TEMPORARY_REDIRECT: number = 307;

  /**
   * redirection
   * 
   * @var int 308
   */
  public static PERMANENT_REDIRECT: number = 308;

  /**
   * client error
   * 
   * @var int 400
   */
  public static BAD_REQUEST: number = 400;

  /**
   * client error
   * 
   * @var int 401
   */
  public static UNAUTHORIZED: number = 401;

  /**
   * client error
   * 
   * @var int 402
   */
  public static PAYMENT_REQUIRED: number = 402;

  /**
   * client error
   * 
   * @var int 403
   */
  public static FORBIDDEN: number = 403;

  /**
   * client error
   * 
   * @var int 404
   */
  public static NOT_FOUND: number = 404;

  /**
   * client error
   * 
   * @var int 405
   */
  public static METHOD_NOT_ALLOWED: number = 405;

  /**
   * client error
   * 
   * @var int 406
   */
  public static NOT_ACCEPTABLE: number = 406;

  /**
   * client error
   * 
   * @var int 407
   */
  public static PROXY_AUTHENTICATION_REQUIRED: number = 407;

  /**
   * client error
   * 
   * @var int 408
   */
  public static REQUEST_TIMEOUT: number = 408;

  /**
   * client error
   * 
   * @var int 409
   */
  public static CONFLICT: number = 409;

  /**
   * client error
   * 
   * @var int 410
   */
  public static GONE: number = 410;

  /**
   * client error
   * 
   * @var int 411
   */
  public static LENGTH_REQUIRED: number = 411;

  /**
   * client error
   * 
   * @var int 412
   */
  public static PRECONDITION_FAILED: number = 412;

  /**
   * client error
   * 
   * @var int 413
   */
  public static PAYLOAD_TOO_LARGE: number = 413;

  /**
   * client error
   * 
   * @var int 414
   */
  public static URI_TOO_LONG: number = 414;

  /**
   * client error
   * 
   * @var int 415
   */
  public static UNSUPPORTED_MEDIA_TYPE: number = 415;

  /**
   * client error
   * 
   * @var int 416
   */
  public static RANGE_NOT_SATISFIABLE: number = 416;

  /**
   * client error
   * 
   * @var int 417
   */
  public static EXPECTATION_FAILED: number = 417;

  /**
   * client error
   * 
   * @var int 418
   */
  public static I_AM_A_TEAPOT: number = 418;

  /**
   * client error
   * 
   * @var int 419
   */
  public static PAGE_EXPIRED: number = 419;

  /**
   * client error
   * 
   * @var int 421
   */
  public static MISDIRECTED_REQUEST: number = 421;

  /**
   * client error
   * 
   * @var int 422
   */
  public static UNPROCESSABLE_ENTITY: number = 422;

  /**
   * client error
   * 
   * @var int 423
   */
  public static LOCKED: number = 423;

  /**
   * client error
   * 
   * @var int 424
   */
  public static FAILED_DEPENDENCY: number = 424;

  /**
   * client error
   * 
   * @var int 425
   */
  public static TOO_EARLY: number = 425;

  /**
   * client error
   * 
   * @var int 426
   */
  public static UPGRADE_REQUIRED: number = 426;

  /**
   * client error
   * 
   * @var int 428
   */
  public static PRECONDITION_REQUIRED: number = 428;

  /**
   * client error
   * 
   * @var int 429
   */
  public static TOO_MANY_REQUESTS: number = 429;

  /**
   * client error
   * 
   * @var int 431
   */
  public static REQUEST_HEADER_FIELDS_TOO_LARGE: number = 431;

  /**
   * client error
   * 
   * @var int 440
   */
  public static LOGIN_TIME_OUT: number = 440;

  /**
   * client error
   * 
   * @var int 444
   */
  public static NO_RESPONSE: number = 444;

  /**
   * client error
   * 
   * @var int 449
   */
  public static RETRY_WITH: number = 449;

  /**
   * client error
   * 
   * @var int 450
   */
  public static BLOCKED_BY_WINDOWS_PARENTAL_CONTROL: number = 450;

  /**
   * client error
   * 
   * @var int 451
   */
  public static UNAVAILABLE_FOR_LEGAL_REASONS: number = 451;

  /**
   * client error
   * 
   * @var int 460
   */
  public static CLIENT_CLOSED_THE_CONNECTION: number = 460;

  /**
   * client error
   * 
   * @var int 463
   */
  public static X_FORWARDED_FOR_TOO_LARGE: number = 463;

  /**
   * client error
   * 
   * @var int 494
   */
  public static REQUEST_HEADER_TOO_LARGE: number = 494;

  /**
   * client error
   * 
   * @var int 495
   */
  public static SSL_CERTIFICATE_ERROR: number = 495;

  /**
   * client error
   * 
   * @var int 496
   */
  public static SSL_CERTIFICATE_REQUIRED: number = 496;

  /**
   * client error
   * 
   * @var int 497
   */
  public static HTTP_REQUEST_SENT_TO_HTTPS_PORT: number = 497;

  /**
   * client error
   * 
   * @var int 498
   */
  public static INVALID_TOKEN: number = 498;

  /**
   * client error
   * 
   * @var int 499
   */
  public static TOKEN_REQUIRED: number = 499;

  /**
   * server error
   * 
   * @var int 500
   */
  public static INTERNAL_SERVER_ERROR: number = 500;

  /**
   * server error
   * 
   * @var int 501
   */
  public static NOT_IMPLEMENTED: number = 501;

  /**
   * server error
   * 
   * @var int 502
   */
  public static BAD_GATEWAY: number = 502;

  /**
   * server error
   * 
   * @var int 503
   */
  public static SERVICE_UNAVAILABLE: number = 503;

  /**
   * server error
   * 
   * @var int 504
   */
  public static GATEWAY_TIMEOUT: number = 504;

  /**
   * server error
   * 
   * @var int 505
   */
  public static HTTP_VERSION_NOT_SUPPORTED: number = 505;

  /**
   * server error
   * 
   * @var int 506
   */
  public static VARIANT_ALSO_NEGOTIATES: number = 506;

  /**
   * server error
   * 
   * @var int 507
   */
  public static INSUFFICIENT_STORAGE: number = 507;

  /**
   * server error
   * 
   * @var int 508
   */
  public static LOOP_DETECTED: number = 508;

  /**
   * server error
   * 
   * @var int 509
   */
  public static BANDWIDTH_LIMIT_EXCEEDED: number = 509;

  /**
   * server error
   * 
   * @var int 510
   */
  public static NOT_EXTENDED: number = 510;

  /**
   * server error
   * 
   * @var int 511
   */
  public static NETWORK_AUTHENTICATION_REQUIRED: number = 511;

  /**
   * server error
   * 
   * @var int 520
   */
  public static WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR: number = 520;

  /**
   * server error
   * 
   * @var int 521
   */
  public static WEB_SERVER_IS_DOWN: number = 521;

  /**
   * server error
   * 
   * @var int 522
   */
  public static CONNECTION_TIMED_OUT: number = 522;

  /**
   * server error
   * 
   * @var int 523
   */
  public static ORIGIN_IS_UNREACHABLE: number = 523;

  /**
   * server error
   * 
   * @var int 524
   */
  public static A_TIMEOUT_OCCURRED: number = 524;

  /**
   * server error
   * 
   * @var int 525
   */
  public static SSL_HANDSHAKE_FAILED: number = 525;

  /**
   * server error
   * 
   * @var int 526
   */
  public static INVALID_SSL_CERTIFICATE: number = 526;

  /**
   * server error
   * 
   * @var int 527
   */
  public static RAILGUN_ERROR: number = 527;

  /**
   * server error
   * 
   * @var int 529
   */
  public static SITE_IS_OVERLOADED: number = 529;

  /**
   * server error
   * 
   * @var int 530
   */
  public static SITE_IS_FROZEN: number = 530;

  /**
   * server error
   * 
   * @var int 598
   */
  public static NETWORK_READ_TIMEOUT_ERROR: number = 598;
}
