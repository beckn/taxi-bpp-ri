# Introduction

The protocol layer of the Taxi BPP contains an open-source protocol server that will interface with any beckn-enabled network. This layer is completely unaware of the business logic of the BPP. Its only function is to receive and send protocol-compliant messages, validate the schema, signatures, and network policy and send it to the client layer. 

# Architecture

## Level 1 Architecture

This contains the logical grouping of components involved in protocol-specific functions.

![Layer 1, Level 1 Architecture](https://user-images.githubusercontent.com/52468749/167610674-8c953721-5a0d-4993-9e93-2190b07f4fcd.png)

## Level 2 Architecture

This diagram shows the various microservices involved in each component of the protocol server. 

![Layer 1, Level 2 Architecture](https://user-images.githubusercontent.com/52468749/167610775-629c9ce6-3caa-413f-af6f-1ec637d2a252.png)