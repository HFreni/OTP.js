![OTP.js Logo](assets/img/OTPjs.png)
# OTP.js
OTP.js is a node.js library for interfacing with Object Transform Protocol (ESTA E1.59). This is an open source library, developed by [Infinitus Lux, LLC](https://www.infinituslux.com/), in order to allow javascript projects, such as our internal tooling, to use OTP.

### Important Defenitions To Understand OTP
- Octet: an 8 bit byte.
- Point: The smallest, indivisible component having properties of motion. This may be the center of a complex Object, or merely one of many Points on it.
- Object: A conceptual container composed of one or more Points. An Object’s motion is described via the properties of the Points that make it up.
- Group: A user-defined collection of one or more Points. A Group could describe a single Object, many Objects, or simply a set of Points with some logical association.
- System: A user-defined collection of one or more Groups. Systems provide part of the method of partitioning network traffic.
- Module: A set of properties of a Point, such as its position or rotation. The data structure of a Module is either defined by this standard, or it is manufacturer-specific.
- System Number: Each System is assigned a unique System Number, identifying the System.
- Group Number: Each Group is assigned a Group Number, identifying the Group within its System. Group Numbers are unique within a System. That is, anything within a single System with the same Group Number belongs to the same Group. In a multi-System implementation, there may be several Groups (a maximum of one per System) with the same Group Number.
- Point Number: Each Point is assigned a Point Number, identifying the Point. A Point Number is unique within a Group. In a multi-Group System, or a multi-System implementation, there may be many Points with the same Point Number.
- Address: The combination of System Number, Group Number, and Point Number make up the Address which identifies a Point.
- Reference Frame: Each Point can be assigned a single Reference Frame, which is another Point with which it shares a kinematic relationship. Transform information for the Point is relative to the Reference Frame.
- Time Origin: The Time Origin is the point in time from which a Component’s timestamps are calculated (represented as 0 microseconds). Components may use a standard system such as Unix Time, the moment a Component initializes, or any other moment in time as the Time Origin.
- Rotation: The circular movement or orientation of an object around a Point of rotation. For the purposes of OTP, Rotation and orientation are considered equivalent and are relative to the space defined in Section 4, or any assigned Reference Frame. There are 3 rotational axes: X,Y,Z.
- Producer: A Producer is any network device transmitting OTP Transform Messages.
- Consumer: A Consumer is the intended target of information from a Producer.
- Component: Producers and Consumers are all OTP Components.
- OTP Transform Message: An OTP Transform Message carries object transform information such as position and rotation. It is transmitted with the VECTOR_OTP_TRANSFORM_MESSAGE vector.
- OTP Advertisement Message: An OTP Advertisement Message is any of the set of messages containing OTP Module Advertisement Messages, OTP System Advertisement Messages and OTP Name Advertisement Messages. It is transmitted with the VECTOR_OTP_ADVERTISEMENT_MESSAGE vector.
- OTP Module Advertisement Message: An OTP Module Advertisement Message contains a packed list of the Module Identifiers of Modules supported by a Consumer. It is transmitted with the VECTOR_OTP_ADVERTISEMENT_MODULE vector.
- OTP System Advertisement Message: An OTP System Advertisement Message contains a packed list of the System Numbers for which Producer provides object transform data. It is transmitted with the VECTOR_OTP_ADVERTISEMENT_SYSTEM vector.
- OTP Name Advertisement Message: An OTP Name Advertisement Message contains a packed list of the Point Names and associated Addresses for a Producer. It is transmitted with the VECTOR_OTP_ADVERTISEMENT_NAME vector.
- OTP Message: An OTP Message is any of the set of messages containing OTP Transform Messages and OTP Advertisement Messages.
- OTP Folio: An OTP Folio is a set of OTP Messages with the same folio number. Together they make up a snapshot of information which due to its size has to be split across multiple messages.
- Full Point Set: A Full Point Set for a Producer includes every Point for a specific System for which a Producer is currently providing transform information.

### License
OTP.js is licensed under the MIT license, this means that you are free to do with it as you please. I'd love to see what kind of cool stuff folks come up with.

&copy; Infinitus Lux, LLC 2022
