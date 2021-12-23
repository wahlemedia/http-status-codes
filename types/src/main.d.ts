export default class Http {
    private constructor();
    /**
     * informational response
     *
     * @var int 100
     */
    static CONTINUE: number;
    /**
     * informational response
     *
     * @var int 101
     */
    static SWITCHING_PROTOCOLS: number;
    /**
     * informational response
     *
     * @var int 102
     */
    static PROCESSING: number;
    /**
     * informational response
     *
     * @var int 103
     */
    static EARLY_HINTS: number;
    /**
     * success
     *
     * @var int 200
     */
    static OK: number;
    /**
     * success
     *
     * @var int 201
     */
    static CREATED: number;
    /**
     * success
     *
     * @var int 202
     */
    static ACCEPTED: number;
    /**
     * success
     *
     * @var int 203
     */
    static NON_AUTHORITATIVE_INFORMATION: number;
    /**
     * success
     *
     * @var int 204
     */
    static NO_CONTENT: number;
    /**
     * success
     *
     * @var int 205
     */
    static RESET_CONTENT: number;
    /**
     * success
     *
     * @var int 206
     */
    static PARTIAL_CONTENT: number;
    /**
     * success
     *
     * @var int 207
     */
    static MULTI_STATUS: number;
    /**
     * success
     *
     * @var int 208
     */
    static ALREADY_REPORTED: number;
    /**
     * success
     *
     * @var int 218
     */
    static THIS_IS_FINE: number;
    /**
     * success
     *
     * @var int 226
     */
    static IM_USED: number;
    /**
     * redirection
     *
     * @var int 300
     */
    static MULTIPLE_CHOICES: number;
    /**
     * redirection
     *
     * @var int 301
     */
    static MOVED_PERMANENTLY: number;
    /**
     * redirection
     *
     * @var int 302
     */
    static FOUND: number;
    /**
     * redirection
     *
     * @var int 303
     */
    static SEE_OTHER: number;
    /**
     * redirection
     *
     * @var int 304
     */
    static NOT_MODIFIED: number;
    /**
     * redirection
     *
     * @var int 305
     */
    static USE_PROXY: number;
    /**
     * redirection
     *
     * @var int 307
     */
    static TEMPORARY_REDIRECT: number;
    /**
     * redirection
     *
     * @var int 308
     */
    static PERMANENT_REDIRECT: number;
    /**
     * client error
     *
     * @var int 400
     */
    static BAD_REQUEST: number;
    /**
     * client error
     *
     * @var int 401
     */
    static UNAUTHORIZED: number;
    /**
     * client error
     *
     * @var int 402
     */
    static PAYMENT_REQUIRED: number;
    /**
     * client error
     *
     * @var int 403
     */
    static FORBIDDEN: number;
    /**
     * client error
     *
     * @var int 404
     */
    static NOT_FOUND: number;
    /**
     * client error
     *
     * @var int 405
     */
    static METHOD_NOT_ALLOWED: number;
    /**
     * client error
     *
     * @var int 406
     */
    static NOT_ACCEPTABLE: number;
    /**
     * client error
     *
     * @var int 407
     */
    static PROXY_AUTHENTICATION_REQUIRED: number;
    /**
     * client error
     *
     * @var int 408
     */
    static REQUEST_TIMEOUT: number;
    /**
     * client error
     *
     * @var int 409
     */
    static CONFLICT: number;
    /**
     * client error
     *
     * @var int 410
     */
    static GONE: number;
    /**
     * client error
     *
     * @var int 411
     */
    static LENGTH_REQUIRED: number;
    /**
     * client error
     *
     * @var int 412
     */
    static PRECONDITION_FAILED: number;
    /**
     * client error
     *
     * @var int 413
     */
    static PAYLOAD_TOO_LARGE: number;
    /**
     * client error
     *
     * @var int 414
     */
    static URI_TOO_LONG: number;
    /**
     * client error
     *
     * @var int 415
     */
    static UNSUPPORTED_MEDIA_TYPE: number;
    /**
     * client error
     *
     * @var int 416
     */
    static RANGE_NOT_SATISFIABLE: number;
    /**
     * client error
     *
     * @var int 417
     */
    static EXPECTATION_FAILED: number;
    /**
     * client error
     *
     * @var int 418
     */
    static I_AM_A_TEAPOT: number;
    /**
     * client error
     *
     * @var int 419
     */
    static PAGE_EXPIRED: number;
    /**
     * client error
     *
     * @var int 421
     */
    static MISDIRECTED_REQUEST: number;
    /**
     * client error
     *
     * @var int 422
     */
    static UNPROCESSABLE_ENTITY: number;
    /**
     * client error
     *
     * @var int 423
     */
    static LOCKED: number;
    /**
     * client error
     *
     * @var int 424
     */
    static FAILED_DEPENDENCY: number;
    /**
     * client error
     *
     * @var int 425
     */
    static TOO_EARLY: number;
    /**
     * client error
     *
     * @var int 426
     */
    static UPGRADE_REQUIRED: number;
    /**
     * client error
     *
     * @var int 428
     */
    static PRECONDITION_REQUIRED: number;
    /**
     * client error
     *
     * @var int 429
     */
    static TOO_MANY_REQUESTS: number;
    /**
     * client error
     *
     * @var int 431
     */
    static REQUEST_HEADER_FIELDS_TOO_LARGE: number;
    /**
     * client error
     *
     * @var int 440
     */
    static LOGIN_TIME_OUT: number;
    /**
     * client error
     *
     * @var int 444
     */
    static NO_RESPONSE: number;
    /**
     * client error
     *
     * @var int 449
     */
    static RETRY_WITH: number;
    /**
     * client error
     *
     * @var int 450
     */
    static BLOCKED_BY_WINDOWS_PARENTAL_CONTROL: number;
    /**
     * client error
     *
     * @var int 451
     */
    static UNAVAILABLE_FOR_LEGAL_REASONS: number;
    /**
     * client error
     *
     * @var int 460
     */
    static CLIENT_CLOSED_THE_CONNECTION: number;
    /**
     * client error
     *
     * @var int 463
     */
    static X_FORWARDED_FOR_TOO_LARGE: number;
    /**
     * client error
     *
     * @var int 494
     */
    static REQUEST_HEADER_TOO_LARGE: number;
    /**
     * client error
     *
     * @var int 495
     */
    static SSL_CERTIFICATE_ERROR: number;
    /**
     * client error
     *
     * @var int 496
     */
    static SSL_CERTIFICATE_REQUIRED: number;
    /**
     * client error
     *
     * @var int 497
     */
    static HTTP_REQUEST_SENT_TO_HTTPS_PORT: number;
    /**
     * client error
     *
     * @var int 498
     */
    static INVALID_TOKEN: number;
    /**
     * client error
     *
     * @var int 499
     */
    static TOKEN_REQUIRED: number;
    /**
     * server error
     *
     * @var int 500
     */
    static INTERNAL_SERVER_ERROR: number;
    /**
     * server error
     *
     * @var int 501
     */
    static NOT_IMPLEMENTED: number;
    /**
     * server error
     *
     * @var int 502
     */
    static BAD_GATEWAY: number;
    /**
     * server error
     *
     * @var int 503
     */
    static SERVICE_UNAVAILABLE: number;
    /**
     * server error
     *
     * @var int 504
     */
    static GATEWAY_TIMEOUT: number;
    /**
     * server error
     *
     * @var int 505
     */
    static HTTP_VERSION_NOT_SUPPORTED: number;
    /**
     * server error
     *
     * @var int 506
     */
    static VARIANT_ALSO_NEGOTIATES: number;
    /**
     * server error
     *
     * @var int 507
     */
    static INSUFFICIENT_STORAGE: number;
    /**
     * server error
     *
     * @var int 508
     */
    static LOOP_DETECTED: number;
    /**
     * server error
     *
     * @var int 509
     */
    static BANDWIDTH_LIMIT_EXCEEDED: number;
    /**
     * server error
     *
     * @var int 510
     */
    static NOT_EXTENDED: number;
    /**
     * server error
     *
     * @var int 511
     */
    static NETWORK_AUTHENTICATION_REQUIRED: number;
    /**
     * server error
     *
     * @var int 520
     */
    static WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR: number;
    /**
     * server error
     *
     * @var int 521
     */
    static WEB_SERVER_IS_DOWN: number;
    /**
     * server error
     *
     * @var int 522
     */
    static CONNECTION_TIMED_OUT: number;
    /**
     * server error
     *
     * @var int 523
     */
    static ORIGIN_IS_UNREACHABLE: number;
    /**
     * server error
     *
     * @var int 524
     */
    static A_TIMEOUT_OCCURRED: number;
    /**
     * server error
     *
     * @var int 525
     */
    static SSL_HANDSHAKE_FAILED: number;
    /**
     * server error
     *
     * @var int 526
     */
    static INVALID_SSL_CERTIFICATE: number;
    /**
     * server error
     *
     * @var int 527
     */
    static RAILGUN_ERROR: number;
    /**
     * server error
     *
     * @var int 529
     */
    static SITE_IS_OVERLOADED: number;
    /**
     * server error
     *
     * @var int 530
     */
    static SITE_IS_FROZEN: number;
    /**
     * server error
     *
     * @var int 598
     */
    static NETWORK_READ_TIMEOUT_ERROR: number;
}
