import Http from '../main'

describe('http status codes', () => {

    it('returns 1xx informational response codes', () => {

        expect(Http.CONTINUE)
            .toBe(100);

        expect(Http.SWITCHING_PROTOCOLS)
            .toBe(101);

        expect(Http.PROCESSING)
            .toBe(102);

        expect(Http.EARLY_HINTS)
            .toBe(103);

    })

    it('returns 2xx success codes', () => {

        expect(Http.OK)
            .toBe(200);

        expect(Http.CREATED)
            .toBe(201);

        expect(Http.ACCEPTED)
            .toBe(202);

        expect(Http.NON_AUTHORITATIVE_INFORMATION)
            .toBe(203);

        expect(Http.NO_CONTENT)
            .toBe(204);

        expect(Http.RESET_CONTENT)
            .toBe(205);

        expect(Http.PARTIAL_CONTENT)
            .toBe(206);

        expect(Http.MULTI_STATUS)
            .toBe(207);

        expect(Http.ALREADY_REPORTED)
            .toBe(208);

        expect(Http.IM_USED)
            .toBe(226);

    })

    it('returns 3xx redirection codes', () => {

        expect(Http.MOVED_PERMANENTLY)
            .toBe(301);

        expect(Http.FOUND)
            .toBe(302);

        expect(Http.SEE_OTHER)
            .toBe(303);

        expect(Http.NOT_MODIFIED)
            .toBe(304);

        expect(Http.USE_PROXY)
            .toBe(305);

        expect(Http.TEMPORARY_REDIRECT)
            .toBe(307);

        expect(Http.PERMANENT_REDIRECT)
            .toBe(308);

    })

    it('returns 4xx client errors codes', () => {

        expect(Http.BAD_REQUEST)
            .toBe(400);

        expect(Http.UNAUTHORIZED)
            .toBe(401);

        expect(Http.PAYMENT_REQUIRED)
            .toBe(402);

        expect(Http.FORBIDDEN)
            .toBe(403);

        expect(Http.NOT_FOUND)
            .toBe(404);

        expect(Http.METHOD_NOT_ALLOWED)
            .toBe(405);

        expect(Http.NOT_ACCEPTABLE)
            .toBe(406);

        expect(Http.PROXY_AUTHENTICATION_REQUIRED)
            .toBe(407);

        expect(Http.REQUEST_TIMEOUT)
            .toBe(408);

        expect(Http.CONFLICT)
            .toBe(409);

        expect(Http.GONE)
            .toBe(410);

        expect(Http.LENGTH_REQUIRED)
            .toBe(411);

        expect(Http.PRECONDITION_FAILED)
            .toBe(412);

        expect(Http.PAYLOAD_TOO_LARGE)
            .toBe(413);

        expect(Http.URI_TOO_LONG)
            .toBe(414);

        expect(Http.UNSUPPORTED_MEDIA_TYPE)
            .toBe(415);

        expect(Http.RANGE_NOT_SATISFIABLE)
            .toBe(416);

        expect(Http.EXPECTATION_FAILED)
            .toBe(417);

        expect(Http.I_AM_A_TEAPOT)
            .toBe(418);

        expect(Http.PAGE_EXPIRED)
            .toBe(419);

        expect(Http.MISDIRECTED_REQUEST)
            .toBe(421);

        expect(Http.UNPROCESSABLE_ENTITY)
            .toBe(422);

        expect(Http.LOCKED)
            .toBe(423);

        expect(Http.FAILED_DEPENDENCY)
            .toBe(424);

        expect(Http.TOO_EARLY)
            .toBe(425);

        expect(Http.UPGRADE_REQUIRED)
            .toBe(426);

        expect(Http.PRECONDITION_REQUIRED)
            .toBe(428);

        expect(Http.TOO_MANY_REQUESTS)
            .toBe(429);

        expect(Http.REQUEST_HEADER_FIELDS_TOO_LARGE)
            .toBe(431);

        expect(Http.LOGIN_TIME_OUT)
            .toBe(440);

        expect(Http.NO_RESPONSE)
            .toBe(444);

        expect(Http.RETRY_WITH)
            .toBe(449);

        expect(Http.BLOCKED_BY_WINDOWS_PARENTAL_CONTROL)
            .toBe(450);

        expect(Http.UNAVAILABLE_FOR_LEGAL_REASONS)
            .toBe(451);

        expect(Http.CLIENT_CLOSED_THE_CONNECTION)
            .toBe(460);

        expect(Http.X_FORWARDED_FOR_TOO_LARGE)
            .toBe(463);

        expect(Http.REQUEST_HEADER_TOO_LARGE)
            .toBe(494);

        expect(Http.SSL_CERTIFICATE_ERROR)
            .toBe(495);

        expect(Http.SSL_CERTIFICATE_REQUIRED)
            .toBe(496);

        expect(Http.HTTP_REQUEST_SENT_TO_HTTPS_PORT)
            .toBe(497);

        expect(Http.INVALID_TOKEN)
            .toBe(498);

        expect(Http.TOKEN_REQUIRED)
            .toBe(499);

    })

    it('returns 5xx server errors codes', () => {

        expect(Http.INTERNAL_SERVER_ERROR)
            .toBe(500);

        expect(Http.NOT_IMPLEMENTED)
            .toBe(501);

        expect(Http.BAD_GATEWAY)
            .toBe(502);

        expect(Http.SERVICE_UNAVAILABLE)
            .toBe(503);

        expect(Http.GATEWAY_TIMEOUT)
            .toBe(504);

        expect(Http.HTTP_VERSION_NOT_SUPPORTED)
            .toBe(505);

        expect(Http.VARIANT_ALSO_NEGOTIATES)
            .toBe(506);

        expect(Http.INSUFFICIENT_STORAGE)
            .toBe(507);

        expect(Http.LOOP_DETECTED)
            .toBe(508);

        expect(Http.BANDWIDTH_LIMIT_EXCEEDED)
            .toBe(509);

        expect(Http.NOT_EXTENDED)
            .toBe(510);

        expect(Http.NETWORK_AUTHENTICATION_REQUIRED)
            .toBe(511);

        expect(Http.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR)
            .toBe(520);

        expect(Http.WEB_SERVER_IS_DOWN)
            .toBe(521);

        expect(Http.CONNECTION_TIMED_OUT)
            .toBe(522);

        expect(Http.ORIGIN_IS_UNREACHABLE)
            .toBe(523);

        expect(Http.A_TIMEOUT_OCCURRED)
            .toBe(524);

        expect(Http.SSL_HANDSHAKE_FAILED)
            .toBe(525);

        expect(Http.INVALID_SSL_CERTIFICATE)
            .toBe(526);

        expect(Http.RAILGUN_ERROR)
            .toBe(527);

        expect(Http.SITE_IS_OVERLOADED)
            .toBe(529);

        expect(Http.SITE_IS_FROZEN)
            .toBe(530);

        expect(Http.NETWORK_READ_TIMEOUT_ERROR)
            .toBe(598);

    })
})