/*
    BEGIN_MODULE CryptographicMessageSyntax2004
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.cms-2004
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export type ContentType = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_ContentType: __utils.ASN1Decoder<
    ContentType
> | null = null;
let _cached_encoder_for_ContentType: __utils.ASN1Encoder<
    ContentType
> | null = null;
export function _decode_ContentType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentType) {
        _cached_decoder_for_ContentType = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ContentType(el);
}
export function _encode_ContentType(
    value: ContentType,
    elGetter: __utils.ASN1Encoder<ContentType>
) {
    if (!_cached_encoder_for_ContentType) {
        _cached_encoder_for_ContentType = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ContentType(value, elGetter);
}

/* END_MODULE CryptographicMessageSyntax2004 */
