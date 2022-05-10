# Introduction

The client layer of the Taxi BPP contains all the micorservices involved in processing requests coming from the protocol server. This layer will translate the context and message coming from the protocol server and trigger the associated microservices to compute the response.

# Architecture

## Level 1 Architecture

This contains the logical grouping of components involved in client-side functions.

![Layer 2, Level 1 Architecture](https://user-images.githubusercontent.com/52468749/167610889-5537cb7e-74cb-4d18-8fa2-6531302ec9cb.png)

## Level 2 Architecture

This diagram shows the various microservices involved in each component of the client layer. 

![Layer 2, Level 2 Architecture](https://user-images.githubusercontent.com/52468749/167610983-40fab921-400c-42d4-a536-1a9427b18268.png)

