/*
    BEGIN_MODULE ExtendedSecurityServices-2006
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-ess-2006
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    CertificateSerialNumber,
    IssuerSerialNumber as IssuerAndSerialNumber,
    _decode_AlgorithmIdentifier,
    _decode_CertificateSerialNumber,
    _decode_IssuerSerialNumber as _decode_IssuerAndSerialNumber,
    _encode_AlgorithmIdentifier,
    _encode_CertificateSerialNumber,
    _encode_IssuerSerialNumber as _encode_IssuerAndSerialNumber,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    GeneralNames,
    PolicyInformation,
    SubjectKeyIdentifier,
    _decode_GeneralNames,
    _decode_PolicyInformation,
    _decode_SubjectKeyIdentifier,
    _encode_GeneralNames,
    _encode_PolicyInformation,
    _encode_SubjectKeyIdentifier,
} from "x500-ts/dist/node/CertificateExtensions";
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "./CryptographicMessageSyntax2004";
import * as __utils from "./__utils";

export type ContentIdentifier = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_ContentIdentifier: __utils.ASN1Decoder<
    ContentIdentifier
> | null = null;
let _cached_encoder_for_ContentIdentifier: __utils.ASN1Encoder<
    ContentIdentifier
> | null = null;
export function _decode_ContentIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentIdentifier) {
        _cached_decoder_for_ContentIdentifier = __utils._decodeOctetString;
    }
    return _cached_decoder_for_ContentIdentifier(el);
}
export function _encode_ContentIdentifier(
    value: ContentIdentifier,
    elGetter: __utils.ASN1Encoder<ContentIdentifier>
) {
    if (!_cached_encoder_for_ContentIdentifier) {
        _cached_encoder_for_ContentIdentifier = __utils._encodeOctetString;
    }
    return _cached_encoder_for_ContentIdentifier(value, elGetter);
}

export type AllOrFirstTier = asn1.INTEGER;
export const AllOrFirstTier_allReceipts: AllOrFirstTier = 0; /* LONG_NAMED_INTEGER_VALUE */
export const AllOrFirstTier_firstTierRecipients: AllOrFirstTier = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AllOrFirstTier: __utils.ASN1Decoder<
    AllOrFirstTier
> | null = null;
let _cached_encoder_for_AllOrFirstTier: __utils.ASN1Encoder<
    AllOrFirstTier
> | null = null;
export function _decode_AllOrFirstTier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AllOrFirstTier) {
        _cached_decoder_for_AllOrFirstTier = __utils._decodeInteger;
    }
    return _cached_decoder_for_AllOrFirstTier(el);
}
export function _encode_AllOrFirstTier(
    value: AllOrFirstTier,
    elGetter: __utils.ASN1Encoder<AllOrFirstTier>
) {
    if (!_cached_encoder_for_AllOrFirstTier) {
        _cached_encoder_for_AllOrFirstTier = __utils._encodeInteger;
    }
    return _cached_encoder_for_AllOrFirstTier(value, elGetter);
}

export type ReceiptsFrom =
    | { allOrFirstTier: AllOrFirstTier } /* CHOICE_ALT_ROOT */
    | { receiptList: GeneralNames[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ReceiptsFrom: __utils.ASN1Decoder<
    ReceiptsFrom
> | null = null;
let _cached_encoder_for_ReceiptsFrom: __utils.ASN1Encoder<
    ReceiptsFrom
> | null = null;
export function _decode_ReceiptsFrom(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReceiptsFrom) {
        _cached_decoder_for_ReceiptsFrom = __utils._decode_inextensible_choice<
            ReceiptsFrom
        >({
            "CONTEXT 0": [
                "allOrFirstTier",
                __utils._decode_implicit<AllOrFirstTier>(
                    () => _decode_AllOrFirstTier
                ),
            ],
            "CONTEXT 1": [
                "receiptList",
                __utils._decode_implicit<GeneralNames[]>(() =>
                    __utils._decodeSequenceOf<GeneralNames>(
                        () => _decode_GeneralNames
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ReceiptsFrom(el);
}
export function _encode_ReceiptsFrom(
    value: ReceiptsFrom,
    elGetter: __utils.ASN1Encoder<ReceiptsFrom>
) {
    if (!_cached_encoder_for_ReceiptsFrom) {
        _cached_encoder_for_ReceiptsFrom = __utils._encode_choice<ReceiptsFrom>(
            {
                allOrFirstTier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_AllOrFirstTier,
                    __utils.BER
                ),
                receiptList: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ReceiptsFrom(value, elGetter);
}

export class ReceiptRequest {
    constructor(
        readonly signedContentIdentifier: ContentIdentifier,
        readonly receiptsFrom: ReceiptsFrom,
        readonly receiptsTo: GeneralNames[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ReceiptRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "signedContentIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "receiptsFrom",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "receiptsTo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReceiptRequest: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ReceiptRequest: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReceiptRequest: __utils.ASN1Decoder<
    ReceiptRequest
> | null = null;
let _cached_encoder_for_ReceiptRequest: __utils.ASN1Encoder<
    ReceiptRequest
> | null = null;
export function _decode_ReceiptRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReceiptRequest) {
        _cached_decoder_for_ReceiptRequest = function (
            el: asn1.ASN1Element
        ): ReceiptRequest {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ReceiptRequest contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "signedContentIdentifier";
            sequence[1].name = "receiptsFrom";
            sequence[2].name = "receiptsTo";
            let signedContentIdentifier!: ContentIdentifier;
            let receiptsFrom!: ReceiptsFrom;
            let receiptsTo!: GeneralNames[];
            signedContentIdentifier = _decode_ContentIdentifier(sequence[0]);
            receiptsFrom = _decode_ReceiptsFrom(sequence[1]);
            receiptsTo = __utils._decodeSequenceOf<GeneralNames>(
                () => _decode_GeneralNames
            )(sequence[2]);
            return new ReceiptRequest(
                signedContentIdentifier,
                receiptsFrom,
                receiptsTo
            );
        };
    }
    return _cached_decoder_for_ReceiptRequest(el);
}
export function _encode_ReceiptRequest(
    value: ReceiptRequest,
    elGetter: __utils.ASN1Encoder<ReceiptRequest>
) {
    if (!_cached_encoder_for_ReceiptRequest) {
        _cached_encoder_for_ReceiptRequest = function (
            value: ReceiptRequest,
            elGetter: __utils.ASN1Encoder<ReceiptRequest>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentIdentifier(
                            value.signedContentIdentifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ReceiptsFrom(
                            value.receiptsFrom,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            GeneralNames
                        >(() => _encode_GeneralNames, __utils.BER)(
                            value.receiptsTo,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ReceiptRequest(value, elGetter);
}

export const ub_receiptsTo: asn1.INTEGER = 16;

export const id_aa_receiptRequest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        1,
    ]
);

export const id_aa_contentIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        7,
    ]
);

export type ESSVersion = asn1.INTEGER;
export const ESSVersion_v1: ESSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ESSVersion: __utils.ASN1Decoder<
    ESSVersion
> | null = null;
let _cached_encoder_for_ESSVersion: __utils.ASN1Encoder<
    ESSVersion
> | null = null;
export function _decode_ESSVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ESSVersion) {
        _cached_decoder_for_ESSVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_ESSVersion(el);
}
export function _encode_ESSVersion(
    value: ESSVersion,
    elGetter: __utils.ASN1Encoder<ESSVersion>
) {
    if (!_cached_encoder_for_ESSVersion) {
        _cached_encoder_for_ESSVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_ESSVersion(value, elGetter);
}

export class Receipt {
    constructor(
        readonly version: ESSVersion,
        readonly contentType: ContentType,
        readonly signedContentIdentifier: ContentIdentifier,
        readonly originatorSignatureValue: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_Receipt: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedContentIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorSignatureValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Receipt: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Receipt: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Receipt: __utils.ASN1Decoder<Receipt> | null = null;
let _cached_encoder_for_Receipt: __utils.ASN1Encoder<Receipt> | null = null;
export function _decode_Receipt(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Receipt) {
        _cached_decoder_for_Receipt = function (el: asn1.ASN1Element): Receipt {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "Receipt contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "contentType";
            sequence[2].name = "signedContentIdentifier";
            sequence[3].name = "originatorSignatureValue";
            let version!: ESSVersion;
            let contentType!: ContentType;
            let signedContentIdentifier!: ContentIdentifier;
            let originatorSignatureValue!: asn1.OCTET_STRING;
            version = _decode_ESSVersion(sequence[0]);
            contentType = _decode_ContentType(sequence[1]);
            signedContentIdentifier = _decode_ContentIdentifier(sequence[2]);
            originatorSignatureValue = __utils._decodeOctetString(sequence[3]);
            return new Receipt(
                version,
                contentType,
                signedContentIdentifier,
                originatorSignatureValue
            );
        };
    }
    return _cached_decoder_for_Receipt(el);
}
export function _encode_Receipt(
    value: Receipt,
    elGetter: __utils.ASN1Encoder<Receipt>
) {
    if (!_cached_encoder_for_Receipt) {
        _cached_encoder_for_Receipt = function (
            value: Receipt,
            elGetter: __utils.ASN1Encoder<Receipt>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ESSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ContentType(
                            value.contentType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ContentIdentifier(
                            value.signedContentIdentifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.originatorSignatureValue,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Receipt(value, elGetter);
}

export const id_ct_receipt: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-ct */ 1,
    1,
]);

export class ContentHints {
    constructor(
        readonly contentDescription: asn1.OPTIONAL<asn1.UTF8String>,
        readonly contentType: ContentType
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentHints: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contentDescription",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentHints: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentHints: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContentHints: __utils.ASN1Decoder<
    ContentHints
> | null = null;
let _cached_encoder_for_ContentHints: __utils.ASN1Encoder<
    ContentHints
> | null = null;
export function _decode_ContentHints(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentHints) {
        _cached_decoder_for_ContentHints = function (
            el: asn1.ASN1Element
        ): ContentHints {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contentDescription: asn1.OPTIONAL<asn1.UTF8String>;
            let contentType!: ContentType;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                contentDescription: (_el: asn1.ASN1Element): void => {
                    contentDescription = __utils._decodeUTF8String(_el);
                },
                contentType: (_el: asn1.ASN1Element): void => {
                    contentType = _decode_ContentType(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentHints,
                _extension_additions_list_spec_for_ContentHints,
                _root_component_type_list_2_spec_for_ContentHints,
                undefined
            );
            return new ContentHints /* SEQUENCE_CONSTRUCTOR_CALL */(
                contentDescription,
                contentType
            );
        };
    }
    return _cached_decoder_for_ContentHints(el);
}
export function _encode_ContentHints(
    value: ContentHints,
    elGetter: __utils.ASN1Encoder<ContentHints>
) {
    if (!_cached_encoder_for_ContentHints) {
        _cached_encoder_for_ContentHints = function (
            value: ContentHints,
            elGetter: __utils.ASN1Encoder<ContentHints>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.contentDescription === undefined
                            ? undefined
                            : __utils._encodeUTF8String(
                                  value.contentDescription,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_ContentType(
                            value.contentType,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ContentHints(value, elGetter);
}

export const id_aa_contentHint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        4,
    ]
);

export type MsgSigDigest = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_MsgSigDigest: __utils.ASN1Decoder<
    MsgSigDigest
> | null = null;
let _cached_encoder_for_MsgSigDigest: __utils.ASN1Encoder<
    MsgSigDigest
> | null = null;
export function _decode_MsgSigDigest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MsgSigDigest) {
        _cached_decoder_for_MsgSigDigest = __utils._decodeOctetString;
    }
    return _cached_decoder_for_MsgSigDigest(el);
}
export function _encode_MsgSigDigest(
    value: MsgSigDigest,
    elGetter: __utils.ASN1Encoder<MsgSigDigest>
) {
    if (!_cached_encoder_for_MsgSigDigest) {
        _cached_encoder_for_MsgSigDigest = __utils._encodeOctetString;
    }
    return _cached_encoder_for_MsgSigDigest(value, elGetter);
}

export const id_aa_msgSigDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        5,
    ]
);

export class ContentReference {
    constructor(
        readonly contentType: ContentType,
        readonly signedContentIdentifier: ContentIdentifier,
        readonly originatorSignatureValue: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentReference: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedContentIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorSignatureValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentReference: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentReference: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContentReference: __utils.ASN1Decoder<
    ContentReference
> | null = null;
let _cached_encoder_for_ContentReference: __utils.ASN1Encoder<
    ContentReference
> | null = null;
export function _decode_ContentReference(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentReference) {
        _cached_decoder_for_ContentReference = function (
            el: asn1.ASN1Element
        ): ContentReference {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ContentReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contentType";
            sequence[1].name = "signedContentIdentifier";
            sequence[2].name = "originatorSignatureValue";
            let contentType!: ContentType;
            let signedContentIdentifier!: ContentIdentifier;
            let originatorSignatureValue!: asn1.OCTET_STRING;
            contentType = _decode_ContentType(sequence[0]);
            signedContentIdentifier = _decode_ContentIdentifier(sequence[1]);
            originatorSignatureValue = __utils._decodeOctetString(sequence[2]);
            return new ContentReference(
                contentType,
                signedContentIdentifier,
                originatorSignatureValue
            );
        };
    }
    return _cached_decoder_for_ContentReference(el);
}
export function _encode_ContentReference(
    value: ContentReference,
    elGetter: __utils.ASN1Encoder<ContentReference>
) {
    if (!_cached_encoder_for_ContentReference) {
        _cached_encoder_for_ContentReference = function (
            value: ContentReference,
            elGetter: __utils.ASN1Encoder<ContentReference>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentType(
                            value.contentType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ContentIdentifier(
                            value.signedContentIdentifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.originatorSignatureValue,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ContentReference(value, elGetter);
}

export const id_aa_contentReference: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        10,
    ]
);

export const id_aa_securityLabel: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        2,
    ]
);

export const ub_integer_options: asn1.INTEGER = 256;

export const ub_privacy_mark_length: asn1.INTEGER = 128;

export const ub_security_categories: asn1.INTEGER = 64;

export type SecurityPolicyIdentifier = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_SecurityPolicyIdentifier: __utils.ASN1Decoder<
    SecurityPolicyIdentifier
> | null = null;
let _cached_encoder_for_SecurityPolicyIdentifier: __utils.ASN1Encoder<
    SecurityPolicyIdentifier
> | null = null;
export function _decode_SecurityPolicyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityPolicyIdentifier) {
        _cached_decoder_for_SecurityPolicyIdentifier =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SecurityPolicyIdentifier(el);
}
export function _encode_SecurityPolicyIdentifier(
    value: SecurityPolicyIdentifier,
    elGetter: __utils.ASN1Encoder<SecurityPolicyIdentifier>
) {
    if (!_cached_encoder_for_SecurityPolicyIdentifier) {
        _cached_encoder_for_SecurityPolicyIdentifier =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SecurityPolicyIdentifier(value, elGetter);
}

export type SecurityClassification = asn1.INTEGER;
export const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SecurityClassification: __utils.ASN1Decoder<
    SecurityClassification
> | null = null;
let _cached_encoder_for_SecurityClassification: __utils.ASN1Encoder<
    SecurityClassification
> | null = null;
export function _decode_SecurityClassification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityClassification) {
        _cached_decoder_for_SecurityClassification = __utils._decodeInteger;
    }
    return _cached_decoder_for_SecurityClassification(el);
}
export function _encode_SecurityClassification(
    value: SecurityClassification,
    elGetter: __utils.ASN1Encoder<SecurityClassification>
) {
    if (!_cached_encoder_for_SecurityClassification) {
        _cached_encoder_for_SecurityClassification = __utils._encodeInteger;
    }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}

export type ESSPrivacyMark =
    | { pString: asn1.PrintableString } /* CHOICE_ALT_ROOT */
    | { utf8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ESSPrivacyMark: __utils.ASN1Decoder<
    ESSPrivacyMark
> | null = null;
let _cached_encoder_for_ESSPrivacyMark: __utils.ASN1Encoder<
    ESSPrivacyMark
> | null = null;
export function _decode_ESSPrivacyMark(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ESSPrivacyMark) {
        _cached_decoder_for_ESSPrivacyMark = __utils._decode_inextensible_choice<
            ESSPrivacyMark
        >({
            "UNIVERSAL 19": ["pString", __utils._decodePrintableString],
            "UNIVERSAL 12": ["utf8String", __utils._decodeUTF8String],
        });
    }
    return _cached_decoder_for_ESSPrivacyMark(el);
}
export function _encode_ESSPrivacyMark(
    value: ESSPrivacyMark,
    elGetter: __utils.ASN1Encoder<ESSPrivacyMark>
) {
    if (!_cached_encoder_for_ESSPrivacyMark) {
        _cached_encoder_for_ESSPrivacyMark = __utils._encode_choice<
            ESSPrivacyMark
        >(
            {
                pString: __utils._encodePrintableString,
                utf8String: __utils._encodeUTF8String,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ESSPrivacyMark(value, elGetter);
}

export class SecurityCategory {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityCategory: __utils.ASN1Decoder<
    SecurityCategory
> | null = null;
let _cached_encoder_for_SecurityCategory: __utils.ASN1Encoder<
    SecurityCategory
> | null = null;
export function _decode_SecurityCategory(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategory) {
        _cached_decoder_for_SecurityCategory = function (
            el: asn1.ASN1Element
        ): SecurityCategory {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SecurityCategory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            type_ = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(sequence[0]);
            value = __utils._decode_implicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);

            return new SecurityCategory(type_, value);
        };
    }
    return _cached_decoder_for_SecurityCategory(el);
}
export function _encode_SecurityCategory(
    value: SecurityCategory,
    elGetter: __utils.ASN1Encoder<SecurityCategory>
) {
    if (!_cached_encoder_for_SecurityCategory) {
        _cached_encoder_for_SecurityCategory = function (
            value: SecurityCategory,
            elGetter: __utils.ASN1Encoder<SecurityCategory>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.type_, __utils.BER),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityCategory(value, elGetter);
}

export type SecurityCategories = SecurityCategory[]; // SetOfType
let _cached_decoder_for_SecurityCategories: __utils.ASN1Decoder<
    SecurityCategories
> | null = null;
let _cached_encoder_for_SecurityCategories: __utils.ASN1Encoder<
    SecurityCategories
> | null = null;
export function _decode_SecurityCategories(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategories) {
        _cached_decoder_for_SecurityCategories = __utils._decodeSetOf<
            SecurityCategory
        >(() => _decode_SecurityCategory);
    }
    return _cached_decoder_for_SecurityCategories(el);
}
export function _encode_SecurityCategories(
    value: SecurityCategories,
    elGetter: __utils.ASN1Encoder<SecurityCategories>
) {
    if (!_cached_encoder_for_SecurityCategories) {
        _cached_encoder_for_SecurityCategories = __utils._encodeSetOf<
            SecurityCategory
        >(() => _encode_SecurityCategory, __utils.BER);
    }
    return _cached_encoder_for_SecurityCategories(value, elGetter);
}

export class ESSSecurityLabel {
    constructor(
        readonly security_policy_identifier: SecurityPolicyIdentifier,
        readonly security_classification: asn1.OPTIONAL<SecurityClassification>,
        readonly privacy_mark: asn1.OPTIONAL<ESSPrivacyMark>,
        readonly security_categories: asn1.OPTIONAL<SecurityCategories>
    ) {}
}
export const _root_component_type_list_1_spec_for_ESSSecurityLabel: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "security-policy-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-classification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privacy-mark",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-categories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ESSSecurityLabel: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ESSSecurityLabel: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ESSSecurityLabel: __utils.ASN1Decoder<
    ESSSecurityLabel
> | null = null;
let _cached_encoder_for_ESSSecurityLabel: __utils.ASN1Encoder<
    ESSSecurityLabel
> | null = null;
export function _decode_ESSSecurityLabel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ESSSecurityLabel) {
        _cached_decoder_for_ESSSecurityLabel = function (
            el: asn1.ASN1Element
        ): ESSSecurityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier!: SecurityPolicyIdentifier;
            let security_classification: asn1.OPTIONAL<SecurityClassification>;
            let privacy_mark: asn1.OPTIONAL<ESSPrivacyMark>;
            let security_categories: asn1.OPTIONAL<SecurityCategories>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "security-policy-identifier": (_el: asn1.ASN1Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                "security-classification": (_el: asn1.ASN1Element): void => {
                    security_classification = _decode_SecurityClassification(
                        _el
                    );
                },
                "privacy-mark": (_el: asn1.ASN1Element): void => {
                    privacy_mark = _decode_ESSPrivacyMark(_el);
                },
                "security-categories": (_el: asn1.ASN1Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ESSSecurityLabel,
                _extension_additions_list_spec_for_ESSSecurityLabel,
                _root_component_type_list_2_spec_for_ESSSecurityLabel,
                undefined
            );
            return new ESSSecurityLabel /* SET_CONSTRUCTOR_CALL */(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories
            );
        };
    }
    return _cached_decoder_for_ESSSecurityLabel(el);
}
export function _encode_ESSSecurityLabel(
    value: ESSSecurityLabel,
    elGetter: __utils.ASN1Encoder<ESSSecurityLabel>
) {
    if (!_cached_encoder_for_ESSSecurityLabel) {
        _cached_encoder_for_ESSSecurityLabel = function (
            value: ESSSecurityLabel,
            elGetter: __utils.ASN1Encoder<ESSSecurityLabel>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SecurityPolicyIdentifier(
                            value.security_policy_identifier,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.security_classification ===
                        undefined
                            ? undefined
                            : _encode_SecurityClassification(
                                  value.security_classification,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.privacy_mark === undefined
                            ? undefined
                            : _encode_ESSPrivacyMark(
                                  value.privacy_mark,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.security_categories === undefined
                            ? undefined
                            : _encode_SecurityCategories(
                                  value.security_categories,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ESSSecurityLabel(value, elGetter);
}

export type EquivalentLabels = ESSSecurityLabel[]; // SequenceOfType
let _cached_decoder_for_EquivalentLabels: __utils.ASN1Decoder<
    EquivalentLabels
> | null = null;
let _cached_encoder_for_EquivalentLabels: __utils.ASN1Encoder<
    EquivalentLabels
> | null = null;
export function _decode_EquivalentLabels(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EquivalentLabels) {
        _cached_decoder_for_EquivalentLabels = __utils._decodeSequenceOf<
            ESSSecurityLabel
        >(() => _decode_ESSSecurityLabel);
    }
    return _cached_decoder_for_EquivalentLabels(el);
}
export function _encode_EquivalentLabels(
    value: EquivalentLabels,
    elGetter: __utils.ASN1Encoder<EquivalentLabels>
) {
    if (!_cached_encoder_for_EquivalentLabels) {
        _cached_encoder_for_EquivalentLabels = __utils._encodeSequenceOf<
            ESSSecurityLabel
        >(() => _encode_ESSSecurityLabel, __utils.BER);
    }
    return _cached_encoder_for_EquivalentLabels(value, elGetter);
}

export const id_aa_equivalentLabels: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        9,
    ]
);

export type EntityIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EntityIdentifier: __utils.ASN1Decoder<
    EntityIdentifier
> | null = null;
let _cached_encoder_for_EntityIdentifier: __utils.ASN1Encoder<
    EntityIdentifier
> | null = null;
export function _decode_EntityIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntityIdentifier) {
        _cached_decoder_for_EntityIdentifier = __utils._decode_inextensible_choice<
            EntityIdentifier
        >({
            "UNIVERSAL 16": [
                "issuerAndSerialNumber",
                _decode_IssuerAndSerialNumber,
            ],
            "UNIVERSAL 4": [
                "subjectKeyIdentifier",
                _decode_SubjectKeyIdentifier,
            ],
        });
    }
    return _cached_decoder_for_EntityIdentifier(el);
}
export function _encode_EntityIdentifier(
    value: EntityIdentifier,
    elGetter: __utils.ASN1Encoder<EntityIdentifier>
) {
    if (!_cached_encoder_for_EntityIdentifier) {
        _cached_encoder_for_EntityIdentifier = __utils._encode_choice<
            EntityIdentifier
        >(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: _encode_SubjectKeyIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EntityIdentifier(value, elGetter);
}

export type MLReceiptPolicy =
    | { none: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { insteadOf: GeneralNames[] } /* CHOICE_ALT_ROOT */
    | { inAdditionTo: GeneralNames[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_MLReceiptPolicy: __utils.ASN1Decoder<
    MLReceiptPolicy
> | null = null;
let _cached_encoder_for_MLReceiptPolicy: __utils.ASN1Encoder<
    MLReceiptPolicy
> | null = null;
export function _decode_MLReceiptPolicy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MLReceiptPolicy) {
        _cached_decoder_for_MLReceiptPolicy = __utils._decode_inextensible_choice<
            MLReceiptPolicy
        >({
            "CONTEXT 0": [
                "none",
                __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "insteadOf",
                __utils._decode_implicit<GeneralNames[]>(() =>
                    __utils._decodeSequenceOf<GeneralNames>(
                        () => _decode_GeneralNames
                    )
                ),
            ],
            "CONTEXT 2": [
                "inAdditionTo",
                __utils._decode_implicit<GeneralNames[]>(() =>
                    __utils._decodeSequenceOf<GeneralNames>(
                        () => _decode_GeneralNames
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_MLReceiptPolicy(el);
}
export function _encode_MLReceiptPolicy(
    value: MLReceiptPolicy,
    elGetter: __utils.ASN1Encoder<MLReceiptPolicy>
) {
    if (!_cached_encoder_for_MLReceiptPolicy) {
        _cached_encoder_for_MLReceiptPolicy = __utils._encode_choice<
            MLReceiptPolicy
        >(
            {
                none: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                insteadOf: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                inAdditionTo: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        __utils._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_MLReceiptPolicy(value, elGetter);
}

export class MLData {
    constructor(
        readonly mailListIdentifier: EntityIdentifier,
        readonly expansionTime: asn1.GeneralizedTime,
        readonly mlReceiptPolicy: asn1.OPTIONAL<MLReceiptPolicy>
    ) {}
}
export const _root_component_type_list_1_spec_for_MLData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mailListIdentifier",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "expansionTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mlReceiptPolicy",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MLData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MLData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MLData: __utils.ASN1Decoder<MLData> | null = null;
let _cached_encoder_for_MLData: __utils.ASN1Encoder<MLData> | null = null;
export function _decode_MLData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MLData) {
        _cached_decoder_for_MLData = function (el: asn1.ASN1Element): MLData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mailListIdentifier!: EntityIdentifier;
            let expansionTime!: asn1.GeneralizedTime;
            let mlReceiptPolicy: asn1.OPTIONAL<MLReceiptPolicy>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                mailListIdentifier: (_el: asn1.ASN1Element): void => {
                    mailListIdentifier = _decode_EntityIdentifier(_el);
                },
                expansionTime: (_el: asn1.ASN1Element): void => {
                    expansionTime = __utils._decodeGeneralizedTime(_el);
                },
                mlReceiptPolicy: (_el: asn1.ASN1Element): void => {
                    mlReceiptPolicy = _decode_MLReceiptPolicy(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MLData,
                _extension_additions_list_spec_for_MLData,
                _root_component_type_list_2_spec_for_MLData,
                undefined
            );
            return new MLData /* SEQUENCE_CONSTRUCTOR_CALL */(
                mailListIdentifier,
                expansionTime,
                mlReceiptPolicy
            );
        };
    }
    return _cached_decoder_for_MLData(el);
}
export function _encode_MLData(
    value: MLData,
    elGetter: __utils.ASN1Encoder<MLData>
) {
    if (!_cached_encoder_for_MLData) {
        _cached_encoder_for_MLData = function (
            value: MLData,
            elGetter: __utils.ASN1Encoder<MLData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EntityIdentifier(
                            value.mailListIdentifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.expansionTime,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.mlReceiptPolicy === undefined
                            ? undefined
                            : _encode_MLReceiptPolicy(
                                  value.mlReceiptPolicy,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_MLData(value, elGetter);
}

export type MLExpansionHistory = MLData[]; // SequenceOfType
let _cached_decoder_for_MLExpansionHistory: __utils.ASN1Decoder<
    MLExpansionHistory
> | null = null;
let _cached_encoder_for_MLExpansionHistory: __utils.ASN1Encoder<
    MLExpansionHistory
> | null = null;
export function _decode_MLExpansionHistory(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MLExpansionHistory) {
        _cached_decoder_for_MLExpansionHistory = __utils._decodeSequenceOf<
            MLData
        >(() => _decode_MLData);
    }
    return _cached_decoder_for_MLExpansionHistory(el);
}
export function _encode_MLExpansionHistory(
    value: MLExpansionHistory,
    elGetter: __utils.ASN1Encoder<MLExpansionHistory>
) {
    if (!_cached_encoder_for_MLExpansionHistory) {
        _cached_encoder_for_MLExpansionHistory = __utils._encodeSequenceOf<
            MLData
        >(() => _encode_MLData, __utils.BER);
    }
    return _cached_encoder_for_MLExpansionHistory(value, elGetter);
}

export const id_aa_mlExpandHistory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        3,
    ]
);

export const ub_ml_expansion_history: asn1.INTEGER = 64;

export type Hash = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Hash: __utils.ASN1Decoder<Hash> | null = null;
let _cached_encoder_for_Hash: __utils.ASN1Encoder<Hash> | null = null;
export function _decode_Hash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Hash) {
        _cached_decoder_for_Hash = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Hash(el);
}
export function _encode_Hash(value: Hash, elGetter: __utils.ASN1Encoder<Hash>) {
    if (!_cached_encoder_for_Hash) {
        _cached_encoder_for_Hash = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Hash(value, elGetter);
}

export class IssuerSerial {
    constructor(
        readonly issuer: GeneralNames,
        readonly serialNumber: CertificateSerialNumber
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IssuerSerial: __utils.ASN1Decoder<
    IssuerSerial
> | null = null;
let _cached_encoder_for_IssuerSerial: __utils.ASN1Encoder<
    IssuerSerial
> | null = null;
export function _decode_IssuerSerial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuerSerial) {
        _cached_decoder_for_IssuerSerial = function (
            el: asn1.ASN1Element
        ): IssuerSerial {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "IssuerSerial contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: GeneralNames;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_GeneralNames(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new IssuerSerial(issuer, serialNumber);
        };
    }
    return _cached_decoder_for_IssuerSerial(el);
}
export function _encode_IssuerSerial(
    value: IssuerSerial,
    elGetter: __utils.ASN1Encoder<IssuerSerial>
) {
    if (!_cached_encoder_for_IssuerSerial) {
        _cached_encoder_for_IssuerSerial = function (
            value: IssuerSerial,
            elGetter: __utils.ASN1Encoder<IssuerSerial>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralNames(
                            value.issuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}

export class ESSCertID {
    constructor(
        readonly certHash: Hash,
        readonly issuerSerial: asn1.OPTIONAL<IssuerSerial>
    ) {}
}
export const _root_component_type_list_1_spec_for_ESSCertID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerSerial",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ESSCertID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ESSCertID: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ESSCertID: __utils.ASN1Decoder<ESSCertID> | null = null;
let _cached_encoder_for_ESSCertID: __utils.ASN1Encoder<ESSCertID> | null = null;
export function _decode_ESSCertID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ESSCertID) {
        _cached_decoder_for_ESSCertID = function (
            el: asn1.ASN1Element
        ): ESSCertID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certHash!: Hash;
            let issuerSerial: asn1.OPTIONAL<IssuerSerial>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certHash: (_el: asn1.ASN1Element): void => {
                    certHash = _decode_Hash(_el);
                },
                issuerSerial: (_el: asn1.ASN1Element): void => {
                    issuerSerial = _decode_IssuerSerial(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ESSCertID,
                _extension_additions_list_spec_for_ESSCertID,
                _root_component_type_list_2_spec_for_ESSCertID,
                undefined
            );
            return new ESSCertID /* SEQUENCE_CONSTRUCTOR_CALL */(
                certHash,
                issuerSerial
            );
        };
    }
    return _cached_decoder_for_ESSCertID(el);
}
export function _encode_ESSCertID(
    value: ESSCertID,
    elGetter: __utils.ASN1Encoder<ESSCertID>
) {
    if (!_cached_encoder_for_ESSCertID) {
        _cached_encoder_for_ESSCertID = function (
            value: ESSCertID,
            elGetter: __utils.ASN1Encoder<ESSCertID>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Hash(
                            value.certHash,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.issuerSerial === undefined
                            ? undefined
                            : _encode_IssuerSerial(
                                  value.issuerSerial,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ESSCertID(value, elGetter);
}

export class SigningCertificate {
    constructor(
        readonly certs: ESSCertID[],
        readonly policies: asn1.OPTIONAL<PolicyInformation[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_SigningCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policies",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SigningCertificate: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SigningCertificate: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SigningCertificate: __utils.ASN1Decoder<
    SigningCertificate
> | null = null;
let _cached_encoder_for_SigningCertificate: __utils.ASN1Encoder<
    SigningCertificate
> | null = null;
export function _decode_SigningCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigningCertificate) {
        _cached_decoder_for_SigningCertificate = function (
            el: asn1.ASN1Element
        ): SigningCertificate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certs!: ESSCertID[];
            let policies: asn1.OPTIONAL<PolicyInformation[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<ESSCertID>(
                        () => _decode_ESSCertID
                    )(_el);
                },
                policies: (_el: asn1.ASN1Element): void => {
                    policies = __utils._decodeSequenceOf<PolicyInformation>(
                        () => _decode_PolicyInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigningCertificate,
                _extension_additions_list_spec_for_SigningCertificate,
                _root_component_type_list_2_spec_for_SigningCertificate,
                undefined
            );
            return new SigningCertificate /* SEQUENCE_CONSTRUCTOR_CALL */(
                certs,
                policies
            );
        };
    }
    return _cached_decoder_for_SigningCertificate(el);
}
export function _encode_SigningCertificate(
    value: SigningCertificate,
    elGetter: __utils.ASN1Encoder<SigningCertificate>
) {
    if (!_cached_encoder_for_SigningCertificate) {
        _cached_encoder_for_SigningCertificate = function (
            value: SigningCertificate,
            elGetter: __utils.ASN1Encoder<SigningCertificate>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<ESSCertID>(
                            () => _encode_ESSCertID,
                            __utils.BER
                        )(value.certs, __utils.BER),
                        /* IF_ABSENT  */ value.policies === undefined
                            ? undefined
                            : __utils._encodeSequenceOf<PolicyInformation>(
                                  () => _encode_PolicyInformation,
                                  __utils.BER
                              )(value.policies, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SigningCertificate(value, elGetter);
}

export const id_aa_signingCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        12,
    ]
);

export class ESSCertIDv2 {
    constructor(
        readonly hashAlgorithm: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly certHash: Hash,
        readonly issuerSerial: asn1.OPTIONAL<IssuerSerial>
    ) {}
    public static get _default_value_for_hashAlgorithm() {
        return new AlgorithmIdentifier(id_sha256, undefined);
    }
}
export const _root_component_type_list_1_spec_for_ESSCertIDv2: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerSerial",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ESSCertIDv2: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ESSCertIDv2: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ESSCertIDv2: __utils.ASN1Decoder<
    ESSCertIDv2
> | null = null;
let _cached_encoder_for_ESSCertIDv2: __utils.ASN1Encoder<
    ESSCertIDv2
> | null = null;
export function _decode_ESSCertIDv2(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ESSCertIDv2) {
        _cached_decoder_for_ESSCertIDv2 = function (
            el: asn1.ASN1Element
        ): ESSCertIDv2 {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm: asn1.OPTIONAL<AlgorithmIdentifier> =
                ESSCertIDv2._default_value_for_hashAlgorithm;
            let certHash!: Hash;
            let issuerSerial: asn1.OPTIONAL<IssuerSerial>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlgorithm: (_el: asn1.ASN1Element): void => {
                    hashAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                certHash: (_el: asn1.ASN1Element): void => {
                    certHash = _decode_Hash(_el);
                },
                issuerSerial: (_el: asn1.ASN1Element): void => {
                    issuerSerial = _decode_IssuerSerial(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ESSCertIDv2,
                _extension_additions_list_spec_for_ESSCertIDv2,
                _root_component_type_list_2_spec_for_ESSCertIDv2,
                undefined
            );
            return new ESSCertIDv2 /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlgorithm,
                certHash,
                issuerSerial
            );
        };
    }
    return _cached_decoder_for_ESSCertIDv2(el);
}
export function _encode_ESSCertIDv2(
    value: ESSCertIDv2,
    elGetter: __utils.ASN1Encoder<ESSCertIDv2>
) {
    if (!_cached_encoder_for_ESSCertIDv2) {
        _cached_encoder_for_ESSCertIDv2 = function (
            value: ESSCertIDv2,
            elGetter: __utils.ASN1Encoder<ESSCertIDv2>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        __utils.deepEq(
                            value.hashAlgorithm,
                            ESSCertIDv2._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.hashAlgorithm,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_Hash(
                            value.certHash,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.issuerSerial === undefined
                            ? undefined
                            : _encode_IssuerSerial(
                                  value.issuerSerial,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ESSCertIDv2(value, elGetter);
}

export class SigningCertificateV2 {
    constructor(
        readonly certs: ESSCertIDv2[],
        readonly policies: asn1.OPTIONAL<PolicyInformation[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_SigningCertificateV2: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policies",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SigningCertificateV2: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SigningCertificateV2: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SigningCertificateV2: __utils.ASN1Decoder<
    SigningCertificateV2
> | null = null;
let _cached_encoder_for_SigningCertificateV2: __utils.ASN1Encoder<
    SigningCertificateV2
> | null = null;
export function _decode_SigningCertificateV2(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigningCertificateV2) {
        _cached_decoder_for_SigningCertificateV2 = function (
            el: asn1.ASN1Element
        ): SigningCertificateV2 {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certs!: ESSCertIDv2[];
            let policies: asn1.OPTIONAL<PolicyInformation[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<ESSCertIDv2>(
                        () => _decode_ESSCertIDv2
                    )(_el);
                },
                policies: (_el: asn1.ASN1Element): void => {
                    policies = __utils._decodeSequenceOf<PolicyInformation>(
                        () => _decode_PolicyInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigningCertificateV2,
                _extension_additions_list_spec_for_SigningCertificateV2,
                _root_component_type_list_2_spec_for_SigningCertificateV2,
                undefined
            );
            return new SigningCertificateV2 /* SEQUENCE_CONSTRUCTOR_CALL */(
                certs,
                policies
            );
        };
    }
    return _cached_decoder_for_SigningCertificateV2(el);
}
export function _encode_SigningCertificateV2(
    value: SigningCertificateV2,
    elGetter: __utils.ASN1Encoder<SigningCertificateV2>
) {
    if (!_cached_encoder_for_SigningCertificateV2) {
        _cached_encoder_for_SigningCertificateV2 = function (
            value: SigningCertificateV2,
            elGetter: __utils.ASN1Encoder<SigningCertificateV2>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<ESSCertIDv2>(
                            () => _encode_ESSCertIDv2,
                            __utils.BER
                        )(value.certs, __utils.BER),
                        /* IF_ABSENT  */ value.policies === undefined
                            ? undefined
                            : __utils._encodeSequenceOf<PolicyInformation>(
                                  () => _encode_PolicyInformation,
                                  __utils.BER
                              )(value.policies, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SigningCertificateV2(value, elGetter);
}

export const id_aa_signingCertificateV2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        /* smime */ 16,
        /* id-aa */ 2,
        47,
    ]
);

export const id_sha256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    1,
]);

/* END_MODULE ExtendedSecurityServices-2006 */
