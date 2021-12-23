
class Http {

  /**
   * informational response
   * 
   * @var int 100
   */
  static CONTINUE = 100;

  /**
   * informational response
   * 
   * @var int 101
   */
  static SWITCHING_PROTOCOLS = 101;

  /**
   * informational response
   * 
   * @var int 102
   */
  static PROCESSING = 102;

  /**
   * informational response
   * 
   * @var int 103
   */
  static EARLY_HINTS = 103;

  /**
   * success
   * 
   * @var int 200
   */
  static OK = 200;

  /**
   * success
   * 
   * @var int 201
   */
  static CREATED = 201;

  /**
   * success
   * 
   * @var int 202
   */
  static ACCEPTED = 202;

  /**
   * success
   * 
   * @var int 203
   */
  static NON_AUTHORITATIVE_INFORMATION = 203;

  /**
   * success
   * 
   * @var int 204
   */
  static NO_CONTENT = 204;

  /**
   * success
   * 
   * @var int 205
   */
  static RESET_CONTENT = 205;

  /**
   * success
   * 
   * @var int 206
   */
  static PARTIAL_CONTENT = 206;

  /**
   * success
   * 
   * @var int 207
   */
  static MULTI_STATUS = 207;

  /**
   * success
   * 
   * @var int 208
   */
  static ALREADY_REPORTED = 208;

  /**
   * success
   * 
   * @var int 218
   */
  static THIS_IS_FINE = 218;

  /**
   * success
   * 
   * @var int 226
   */
  static IM_USED = 226;

  /**
   * redirection
   * 
   * @var int 300
   */
  static MULTIPLE_CHOICES = 300;

  /**
   * redirection
   * 
   * @var int 301
   */
  static MOVED_PERMANENTLY = 301;

  /**
   * redirection
   * 
   * @var int 302
   */
  static FOUND = 302;

  /**
   * redirection
   * 
   * @var int 303
   */
  static SEE_OTHER = 303;

  /**
   * redirection
   * 
   * @var int 304
   */
  static NOT_MODIFIED = 304;

  /**
   * redirection
   * 
   * @var int 305
   */
  static USE_PROXY = 305;

  /**
   * redirection
   * 
   * @var int 307
   */
  static TEMPORARY_REDIRECT = 307;

  /**
   * redirection
   * 
   * @var int 308
   */
  static PERMANENT_REDIRECT = 308;

  /**
   * client error
   * 
   * @var int 400
   */
  static BAD_REQUEST = 400;

  /**
   * client error
   * 
   * @var int 401
   */
  static UNAUTHORIZED = 401;

  /**
   * client error
   * 
   * @var int 402
   */
  static PAYMENT_REQUIRED = 402;

  /**
   * client error
   * 
   * @var int 403
   */
  static FORBIDDEN = 403;

  /**
   * client error
   * 
   * @var int 404
   */
  static NOT_FOUND = 404;

  /**
   * client error
   * 
   * @var int 405
   */
  static METHOD_NOT_ALLOWED = 405;

  /**
   * client error
   * 
   * @var int 406
   */
  static NOT_ACCEPTABLE = 406;

  /**
   * client error
   * 
   * @var int 407
   */
  static PROXY_AUTHENTICATION_REQUIRED = 407;

  /**
   * client error
   * 
   * @var int 408
   */
  static REQUEST_TIMEOUT = 408;

  /**
   * client error
   * 
   * @var int 409
   */
  static CONFLICT = 409;

  /**
   * client error
   * 
   * @var int 410
   */
  static GONE = 410;

  /**
   * client error
   * 
   * @var int 411
   */
  static LENGTH_REQUIRED = 411;

  /**
   * client error
   * 
   * @var int 412
   */
  static PRECONDITION_FAILED = 412;

  /**
   * client error
   * 
   * @var int 413
   */
  static PAYLOAD_TOO_LARGE = 413;

  /**
   * client error
   * 
   * @var int 414
   */
  static URI_TOO_LONG = 414;

  /**
   * client error
   * 
   * @var int 415
   */
  static UNSUPPORTED_MEDIA_TYPE = 415;

  /**
   * client error
   * 
   * @var int 416
   */
  static RANGE_NOT_SATISFIABLE = 416;

  /**
   * client error
   * 
   * @var int 417
   */
  static EXPECTATION_FAILED = 417;

  /**
   * client error
   * 
   * @var int 418
   */
  static I_AM_A_TEAPOT = 418;

  /**
   * client error
   * 
   * @var int 419
   */
  static PAGE_EXPIRED = 419;

  /**
   * client error
   * 
   * @var int 421
   */
  static MISDIRECTED_REQUEST = 421;

  /**
   * client error
   * 
   * @var int 422
   */
  static UNPROCESSABLE_ENTITY = 422;

  /**
   * client error
   * 
   * @var int 423
   */
  static LOCKED = 423;

  /**
   * client error
   * 
   * @var int 424
   */
  static FAILED_DEPENDENCY = 424;

  /**
   * client error
   * 
   * @var int 425
   */
  static TOO_EARLY = 425;

  /**
   * client error
   * 
   * @var int 426
   */
  static UPGRADE_REQUIRED = 426;

  /**
   * client error
   * 
   * @var int 428
   */
  static PRECONDITION_REQUIRED = 428;

  /**
   * client error
   * 
   * @var int 429
   */
  static TOO_MANY_REQUESTS = 429;

  /**
   * client error
   * 
   * @var int 431
   */
  static REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

  /**
   * client error
   * 
   * @var int 440
   */
  static LOGIN_TIME_OUT = 440;

  /**
   * client error
   * 
   * @var int 444
   */
  static NO_RESPONSE = 444;

  /**
   * client error
   * 
   * @var int 449
   */
  static RETRY_WITH = 449;

  /**
   * client error
   * 
   * @var int 450
   */
  static BLOCKED_BY_WINDOWS_PARENTAL_CONTROL = 450;

  /**
   * client error
   * 
   * @var int 451
   */
  static UNAVAILABLE_FOR_LEGAL_REASONS = 451;

  /**
   * client error
   * 
   * @var int 460
   */
  static CLIENT_CLOSED_THE_CONNECTION = 460;

  /**
   * client error
   * 
   * @var int 463
   */
  static X_FORWARDED_FOR_TOO_LARGE = 463;

  /**
   * client error
   * 
   * @var int 494
   */
  static REQUEST_HEADER_TOO_LARGE = 494;

  /**
   * client error
   * 
   * @var int 495
   */
  static SSL_CERTIFICATE_ERROR = 495;

  /**
   * client error
   * 
   * @var int 496
   */
  static SSL_CERTIFICATE_REQUIRED = 496;

  /**
   * client error
   * 
   * @var int 497
   */
  static HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497;

  /**
   * client error
   * 
   * @var int 498
   */
  static INVALID_TOKEN = 498;

  /**
   * client error
   * 
   * @var int 499
   */
  static TOKEN_REQUIRED = 499;

  /**
   * server error
   * 
   * @var int 500
   */
  static INTERNAL_SERVER_ERROR = 500;

  /**
   * server error
   * 
   * @var int 501
   */
  static NOT_IMPLEMENTED = 501;

  /**
   * server error
   * 
   * @var int 502
   */
  static BAD_GATEWAY = 502;

  /**
   * server error
   * 
   * @var int 503
   */
  static SERVICE_UNAVAILABLE = 503;

  /**
   * server error
   * 
   * @var int 504
   */
  static GATEWAY_TIMEOUT = 504;

  /**
   * server error
   * 
   * @var int 505
   */
  static HTTP_VERSION_NOT_SUPPORTED = 505;

  /**
   * server error
   * 
   * @var int 506
   */
  static VARIANT_ALSO_NEGOTIATES = 506;

  /**
   * server error
   * 
   * @var int 507
   */
  static INSUFFICIENT_STORAGE = 507;

  /**
   * server error
   * 
   * @var int 508
   */
  static LOOP_DETECTED = 508;

  /**
   * server error
   * 
   * @var int 509
   */
  static BANDWIDTH_LIMIT_EXCEEDED = 509;

  /**
   * server error
   * 
   * @var int 510
   */
  static NOT_EXTENDED = 510;

  /**
   * server error
   * 
   * @var int 511
   */
  static NETWORK_AUTHENTICATION_REQUIRED = 511;

  /**
   * server error
   * 
   * @var int 520
   */
  static WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520;

  /**
   * server error
   * 
   * @var int 521
   */
  static WEB_SERVER_IS_DOWN = 521;

  /**
   * server error
   * 
   * @var int 522
   */
  static CONNECTION_TIMED_OUT = 522;

  /**
   * server error
   * 
   * @var int 523
   */
  static ORIGIN_IS_UNREACHABLE = 523;

  /**
   * server error
   * 
   * @var int 524
   */
  static A_TIMEOUT_OCCURRED = 524;

  /**
   * server error
   * 
   * @var int 525
   */
  static SSL_HANDSHAKE_FAILED = 525;

  /**
   * server error
   * 
   * @var int 526
   */
  static INVALID_SSL_CERTIFICATE = 526;

  /**
   * server error
   * 
   * @var int 527
   */
  static RAILGUN_ERROR = 527;

  /**
   * server error
   * 
   * @var int 529
   */
  static SITE_IS_OVERLOADED = 529;

  /**
   * server error
   * 
   * @var int 530
   */
  static SITE_IS_FROZEN = 530;

  /**
   * server error
   * 
   * @var int 598
   */
  static NETWORK_READ_TIMEOUT_ERROR = 598;
}

export default Http