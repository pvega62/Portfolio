# Introduction
 
 This is a sample Petstore server. The API requests found here can help developers make calls to the Petstore server to send or request data about any pets and/or orders entered into the system.

 The Petstore API allows a developer to:
 
 **Pets**
 - Create, read, update, and delete pets in the database.
 - Upload an image for a pet.
 - Find pets by their status (available, pending, sold), tags, or unique identifiers.

**Store**
 - Get inventory of pets, categorized by status.
 - Place an order for a pet.
 - Find purchase orders by their ID.
 - Cancel an order.

**User**
 - Create a new user account (individually or from a list).
 - Log users in and out of the system.
 - Find a user by their ID.
 - Retrieve, update, and delete a user's information by their username. 

 # Connection Prerequisites

 The base URL for all API requests is `https://petstore.swagger.io/v2`.
 # Authentication
 To authenticate your connection to the Petstore's API, use OAuth 2.0 or an assigned API key. To be assigned a key, email budbaker@bhavenpets.com.

  **NOTE**: For security purposes, API keys must not be shared with other users. If you suspect that your API key has been compromised, please contact us immediately to revoke the old key and issue a new one.

  # Functions
  This API consists of three main sections: **Pets**, **Store**, and **User**.
## Pets
 Everything about your pets.

### Adding a New Pet
Add a new pet to the store's database.

Endpoint: https://petstore.swagger.io/v2/pet

Operation: `POST`

### Examples
**API Key Example**
```HTML
POST /v2/pet
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**OAuth 2.0 Example**
```HTML
POST /v2/pet
Host: petstore.swagger.io
Authorization: Bearer <YOUR_OAUTH_TOKEN>
```
**cURL API Key Example**
```curl
POST "https://petstore.swagger.io/v2/pet" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-H "api_key: <YOUR_API_KEY>" \
-d '{
  "id": 0,
  "name": "string",
  "category": {
    "id": 0,
    "name": "string"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
```

**cURL OAuth 2.0 Example**
```curl
POST "https://petstore.swagger.io/v2/pet" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <YOUR_OAUTH_TOKEN>" \
-d '{
  "id": 0,
  "name": "string",
  "category": {
    "id": 0,
    "name": "string"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation|
| 400  | Invalid input |
| 404  | Pet not found |
| 422 | Validation exception |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "id": 210,
  "name": "Krypto",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

### Parameters
None

 ## Updating an Existing Pet
 Update an existing pet by Id.

 Endpoint: https://petstore.swagger.io/v2/pet

 Operation: `PUT`
### Examples
**API Key Example**
  ```HTML
  PUT /v2/pet
  Host: petstore.swagger.io
  api_key: <YOUR_API_KEY>
  ```

  **OAuth 2.0 Example**
  ```HTML
  PUT /v2/pet
  Host: petstore.swagger.io
  Authorization: Bearer <YOUR_OAUTH_TOKEN>
  ```
  **cURL API Key Example**
  ```curl 
  PUT "https://petstore.swagger.io/v2/pet" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "api_key: <YOUR_API_KEY>" \
  -d '{
    "id": 210,
    "name": "Krypto",
    "status": "available"
  }'
  ```

  **cURL OAuth 2.0 Example**
  ```curl 
  PUT "https://petstore.swagger.io/v2/pet" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_OAUTH_TOKEN>" \
  -d '{
    "id": 210,
    "name": "Krypto",
    "status": "available"
  }'
  ```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid input |
| 404  | Pet not found |
| 422 | Validation exception |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "id": 210,
  "name": "Krypto",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```
### Parameters
None
## Finding a Pet by Status
Finds pets by their status.

Endpoint: https://petstore.swagger.io/v2/pet/findByStatus

Operation: `GET`

### Examples
**API Key Example**
```HTML
GET /v2/pet/findByStatus?status=available
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**OAuth 2.0 Example**
```HTML
GET /v2/pet/findByStatus?status=available
Host: petstore.swagger.io
Authorization: Bearer <YOUR_OAUTH_TOKEN>
```
**cURL API Key Example**
```curl
GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available" \
-H "accept: application/json" \
-H "api_key: <YOUR_API_KEY>"
```

**cURL OAuth 2.0 Example**
```curl
GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available" \
-H "accept: application/json" \
-H "Authorization: Bearer <YOUR_OAUTH_TOKEN>"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid input |
| default | Unexpected error |

`200: Successful operation`
```json
[
  {
    "id": 210,
    "name": "Krypto",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
```
### Parameters
#### Query Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| status | string | Status of the pet to find. <br> **Default:** `available`. <br> **Allowed values:** `available`, `pending`, `sold`. |
## Finding Pets by Tags

Finds pets by their tags.

Endpoint: https://petstore.swagger.io/v2/pet/findByTags

Operation: `GET`

### Examples
**API Key Example**
```HTML
GET /v2/pet/findByTags?tags=string
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**OAuth 2.0 Example**
```HTML
GET /v2/pet/findByTags?tags=string
Host: petstore.swagger.io
Authorization: Bearer <YOUR_OAUTH_TOKEN>
```
**cURL API Key Example**
```curl
GET "https://petstore.swagger.io/v2/pet/findByTags?tags=string" \
-H "accept: application/json" \
-H "api_key: <YOUR_API_KEY>"
```

**cURL OAuth 2.0 Example**
```curl
GET "https://petstore.swagger.io/v2/pet/findByTags?tags=string" \
-H "accept: application/json" \
-H "Authorization: Bearer <YOUR_OAUTH_TOKEN>"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid input |
| default | Unexpected error |

`200: Successful operation`
```json
[
  {
    "id": 210,
    "name": "Krypto",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
```
### Parameters
#### Query Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| tags   | array  | Tags to filter by. <br> **Default:** `[]`. <br> **Allowed values:** Any valid tag names. |

## Finding a Pet by ID
Finds a pet by its unique ID.

Endpoint: https://petstore.swagger.io/v2/pet/{petId}

Operation: `GET`

### Examples
**API Key Example**
```HTML
GET /v2/pet/210
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**cURL API Key Example**
```curl
GET "https://petstore.swagger.io/v2/pet/210" \
-H "accept: application/json" \
-H "api_key: <YOUR_API_KEY>"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid ID supplied |
| 404  | Pet not found |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "id": 210,
  "name": "Krypto",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```
### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| petId   | integer  | ID of pet to return |

## Updating a Pet with Form Data
Updates a pet in the store with form data.

Endpoint: https://petstore.swagger.io/v2/pet/{petId}

Operation: `POST`

### Examples
**API Key Example**
```HTML
POST /v2/pet/210
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
Content-Type: application/x-www-form-urlencoded

name=Krypto&status=available
```

**cURL API Key Example**
```curl
POST "https://petstore.swagger.io/v2/pet/210" \
-H "api_key: <YOUR_API_KEY>" \
-H "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode "name=Krypto" \
--data-urlencode "status=available"
```
### Responses
| Code | Description |
|------|-------------|
| 405  | Invalid input |
| default | Unexpected error |

### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| petId   | integer  | ID of pet that needs to be updated |

## Deleting a Pet
Deletes a pet from the database.

Endpoint: https://petstore.swagger.io/v2/pet/{petId}

Operation: `DELETE`

### Examples
**API Key Example**
```HTML
DELETE /v2/pet/210
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**cURL API Key Example**
```curl
DELETE "https://petstore.swagger.io/v2/pet/210" \
-H "api_key: <YOUR_API_KEY>"
```
### Responses
| Code | Description |
|------|-------------|
| 400  | Invalid ID supplied |
| 404  | Pet not found |
| default | Unexpected error |

### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| petId   | integer  | ID of pet to delete |

## Uploading an Image
Uploads an image for a pet.

Endpoint: https://petstore.swagger.io/v2/pet/{petId}/uploadImage

Operation: `POST`

### Examples
**API Key Example**
```HTML
POST /v2/pet/210/uploadImage
Host: petstore.swagger.io
Content-Type: multipart/form-data
api_key: <YOUR_API_KEY>

(file contents)
```

**cURL API Key Example**
```curl
POST "https://petstore.swagger.io/v2/pet/210/uploadImage" \
-H "accept: application/json" \
-H "Content-Type: multipart/form-data" \
-H "api_key: <YOUR_API_KEY>" \
--form "file=@/path/to/your/file"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "code": 200,
  "type": "unknown",
  "message": "additional data"
}
```
### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| petId   | integer  | ID of pet to update |

# Store
Access to Petstore orders.

## Getting Pet Inventories
Returns pet inventories by status.

Endpoint: https://petstore.swagger.io/v2/store/inventory

Operation: `GET`

### Examples
**API Key Example**
```HTML
GET /v2/store/inventory
Host: petstore.swagger.io
api_key: <YOUR_API_KEY>
```

**cURL API Key Example**
```curl
GET "https://petstore.swagger.io/v2/store/inventory" \
-H "accept: application/json" \
-H "api_key: <YOUR_API_KEY>"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "sold": 0,
  "available": 0,
  "pending": 0
}
```
### Parameters
None

## Placing an Order
Place an order for a pet.

Endpoint: https://petstore.swagger.io/v2/store/order

Operation: `POST`

### Examples
**cURL Example**
```curl
POST "https://petstore.swagger.io/v2/store/order" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2025-08-11T15:13:06.939Z",
  "status": "placed",
  "complete": false
}'
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid Order |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2025-08-11T15:13:06.939Z",
  "status": "placed",
  "complete": false
}
```
### Parameters
None

## Finding a Purchase Order
Find purchase order by ID.

Endpoint: https://petstore.swagger.io/v2/store/order/{orderId}

Operation: `GET`

### Examples
**cURL Example**
```curl
GET "https://petstore.swagger.io/v2/store/order/1" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | Successful operation |
| 400  | Invalid ID supplied |
| 404  | Order not found |
| default | Unexpected error |

`200: Successful operation`
```json
{
  "id": 1,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2025-08-11T15:13:06.939Z",
  "status": "placed",
  "complete": false
}
```
### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| orderId   | integer  | ID of pet that needs to be fetched |

## Deleting a Purchase Order
Delete purchase order by ID.

Endpoint: https://petstore.swagger.io/v2/store/order/{orderId}

Operation: `DELETE`

### Examples
**cURL Example**
```curl
DELETE "https://petstore.swagger.io/v2/store/order/1" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| 400  | Invalid ID supplied |
| 404  | Order not found |
| default | Unexpected error |

### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| orderId   | integer  | ID of the order that needs to be deleted |

# User
Operations about user.

## Creating a User
Creates a new user account.

Endpoint: https://petstore.swagger.io/v2/user

Operation: `POST`

### Examples
**cURL Example**
```curl
POST "https://petstore.swagger.io/v2/user" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}'
```
### Responses
| Code | Description |
|------|-------------|
| default | successful operation |

### Parameters
None

## Creating a List of Users with Array
Creates list of users with given input array.

Endpoint: https://petstore.swagger.io/v2/user/createWithArray

Operation: `POST`

### Examples
**cURL Example**
```curl
POST "https://petstore.swagger.io/v2/user/createWithArray" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]'
```
### Responses
| Code | Description |
|------|-------------|
| default | successful operation |

### Parameters
None

## Creating a List of Users with List
Creates list of users with given input list.

Endpoint: https://petstore.swagger.io/v2/user/createWithList

Operation: `POST`

### Examples
**cURL Example**
```curl
POST "https://petstore.swagger.io/v2/user/createWithList" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]'
```
### Responses
| Code | Description |
|------|-------------|
| default | successful operation |

### Parameters
None

## Logging In
Logs user into the system.

Endpoint: https://petstore.swagger.io/v2/user/login

Operation: `GET`

### Examples
**cURL Example**
```curl
GET "https://petstore.swagger.io/v2/user/login?username=string&password=string" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | successful operation |
| 400  | Invalid username/password supplied |
| default | Unexpected error |

`200: successful operation`
<br>
Headers:
`X-Rate-Limit`: Calls per hour allowed by the user.
`X-Expires-After`: Date in UTC when token expires.

### Parameters
#### Query Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| username   | string  | The username for login. |
| password   | string  | The password for login in clear text. |

## Logging Out
Logs out current logged in user session.

Endpoint: https://petstore.swagger.io/v2/user/logout

Operation: `GET`

### Examples
**cURL Example**
```curl
GET "https://petstore.swagger.io/v2/user/logout" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| default | successful operation |

### Parameters
None

## Getting User by Username
Get user by user name.

Endpoint: https://petstore.swagger.io/v2/user/{username}

Operation: `GET`

### Examples
**cURL Example**
```curl
GET "https://petstore.swagger.io/v2/user/user1" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| 200  | successful operation |
| 400  | Invalid username supplied |
| 404  | User not found |
| default | Unexpected error |

`200: successful operation`
```json
{
  "id": 0,
  "username": "user1",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}
```
### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| username   | string  | The name that needs to be fetched. Use user1 for testing. |

## Updating a User
Updates a user.

Endpoint: https://petstore.swagger.io/v2/user/{username}

Operation: `PUT`

### Examples
**cURL Example**
```curl
PUT "https://petstore.swagger.io/v2/user/user1" \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{
  "id": 0,
  "username": "user1",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}'
```
### Responses
| Code | Description |
|------|-------------|
| 400  | Invalid user supplied |
| 404  | User not found |
| default | Unexpected error |

### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| username   | string  | name that need to be updated |

## Deleting a User
Deletes a user.

Endpoint: https://petstore.swagger.io/v2/user/{username}

Operation: `DELETE`

### Examples
**cURL Example**
```curl
DELETE "https://petstore.swagger.io/v2/user/user1" \
-H "accept: application/json"
```
### Responses
| Code | Description |
|------|-------------|
| 400  | Invalid username supplied |
| 404  | User not found |
| default | Unexpected error |

### Parameters
#### Path Parameters
| Name   | Type   | Description                                                                                             |
|--------|--------|---------------------------------------------------------------------------------------------------------|
| username   | string  | The name that needs to be deleted |

# Conclusion
This document is meant to provide an in-depth guide for the Petstore API as I would write it if I were a company's technical writer/documentation specialist. 

It includes detailed information about the API endpoints, examples on how to make calls to the API, the parameters required for each endpoint, and the expected responses. This should serve as a comprehensive resource for developers working with the Petstore API.

The API was created by Swagger, a powerful open-source framework for API development as a sample API. It's not intended for production use but rather as a demonstration of how I'd document an API. You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).