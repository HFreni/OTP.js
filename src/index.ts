/**
 * Summary. index.ts is the main class for the OTP.js project.
 *
 * Description. (use period)
 *
 * @link   ttps://github.com/HFreni/OTP.js/src/index.ts
 * @file   This file is the primary class for the OTP.js project.
 * @author Harrison Freni.
 * @since  1.0.0
 */

// OTP Structure Info:
// PDU (Protocol Data Unit) cointains 3 segments:
// 1. Vector Field, 2 Octets; A key that describes the format
//    of the info in data field
// 2. Length Field, 2 Octets; Specifies the length in octets of
//    the rest of the PDU, excl. Vector & Length fields.
// 3. Data Field, Payload, Variable Octets; can be empty, contain
//    sub-fields, or whole entire PDUs.

// The OTP Layer
// Octets, Field Size, Field Name, Decription + Content.
// 0-11, 12, OTP Packet Identifier (I AM OTP);
// 0x4f 0x54 0x50 0x2d 0x45 0x31 0x2e 0x35 0x39 0x00 0x00 0x00

// 12-13, 2, Vector, Identifies type of OTP data in PDU.
// VECTOR_OTP_TRANSFORM_MESSAGE, VECTOR_OTP_ADVERTISEMENT_MESSAGE

// 14-15, 2, Length, Length of Message excl. Footer starting w/ Oct. 16
// 16, 1, Footer Options, Reserved, transmitted as 0x00
// 17, 1, Footer Length, Length of Footer in Octets.
// 18-33, 16, CID, Sender's CID (Unique ID).
// 34-37, 4, Folio #, Indicates which folio this is.
// 38-39, 2, Page, Which page of 0 thru N this is.
// 40-41, 2, Last Page, indicates which page N this is.
// 42, 1, Options,  Reserved 0x00
// 43-46, 4, Reserved, 0x00000000
// 47-78, 32, Component Name, Human Readable UTF-8 String for Component

// Producer = Tracker
// Consumer = Console, WebApp.

// Transform Message:
// Octets, Field Size, Field Name, Decription + Content.
// [OTP LAYER, Octets 0-78]
// 79-80, 2, Vector, Identifies Transform Data, VECTOR_OTP_POINT
// 81-82, Length, Length of PDU.
// 83, 1, System Number, Unique Within Network; Defines System
// 84-91, 8, Timestamp, Microseconds since Time Origin
// 92, 1, Options, Bit 7 = Full Point Set.

// Advertisement Message
// Octets, Field Size, Field Name, Decription + Content.
// [OTP LAYER, Octets 0-78]
