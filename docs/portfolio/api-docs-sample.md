---
title: API Documentation Sample
description: A sample API documentation page for Aeyron's portfolio.
---

# API Documentation Sample

This sample shows the kind of structure I want to use for developer-facing API documentation.

## Endpoint

```http
GET /v1/devices/{deviceId}
```

Retrieves metadata and connection status for a device.

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `deviceId` | string | Yes | Unique identifier of the device. |

## Example request

```bash
curl https://api.example.com/v1/devices/dev_123 \
  -H "Authorization: Bearer <token>"
```

## Example response

```json
{
  "id": "dev_123",
  "name": "Conference Room Gateway",
  "status": "online",
  "firmwareVersion": "2.4.1",
  "lastSeenAt": "2026-06-09T08:30:00Z"
}
```

## Response fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique device identifier. |
| `name` | string | Human-readable device name. |
| `status` | string | Current connection status. Possible values: `online`, `offline`, `unknown`. |
| `firmwareVersion` | string | Installed firmware version. |
| `lastSeenAt` | string | ISO 8601 timestamp for the latest device heartbeat. |

## Writing notes

Good API documentation should:

- make authentication and error handling easy to find
- include request and response examples
- explain required fields before optional fields
- separate concepts from endpoint reference
- show realistic values instead of abstract placeholders
