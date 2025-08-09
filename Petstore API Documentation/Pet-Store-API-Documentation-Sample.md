# Introduction
 
 This is a sample Petstore server. The API requests found here can help developers make calls to the Petstore server to send or request data about any pets and/or orders entered into the system.

 The Petstore API allows a developer to:
 
 **Pets**
 - Create, read, update, and delete pets in database
 - Upload an image for a pet
 - Find pets by their status (available, pending, sold), tags, or unique identifiers.

**Store**
 - Get inventory of pets, categorized by status
 - Place an order for a pet
 - Find purchase orders by their ID
 - Cancel an order

**User**
 - Create a new user account (individually or from a list)
 - Log users in and out of the system
 - Find a user by their ID
 - Retrieve, update, and delete a user's information by their username 

 # Connection Prerequisites

 The base URL for all API requests is `https://petstore.swagger.io/v2`
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

 Endpoint: https://petstore.swagger.io/v2/pet/{petId}

 Operation: `PUT`
### Examples
**API Key Example**
  ```HTML
  PUT /v2/pet/210
  Host: petstore.swagger.io
  api_key: <YOUR_API_KEY>
  ```

  **OAuth 2.0 Example**
  ```HTML
  PUT /v2/pet/210
  Host: petstore.swagger.io
  Authorization: Bearer <YOUR_OAUTH_TOKEN>
  ```
  **cURL API Key Example**
  ```curl 
  PUT "https://petstore.swagger.io/v2/pet/210" \
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
  PUT "https://petstore.swagger.io/v2/pet/210" \
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
