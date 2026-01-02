# Lot Codes

Lot codes provide unique identification for batches of produce, enabling traceability and quality management. This guideline defines the format and structure requirements for lot codes.

## Lot Code Structure

Standard lot code format:

```
[Producer Code]-[Date]-[Batch Number]
```

Example: `FARM001-20240320-001`

## Required Components

### Producer Code

- Unique identifier for the producer or facility
- Minimum 3 characters, maximum 10 characters
- Alphanumeric (letters and numbers)

### Date Component

- Format: YYYYMMDD (ISO 8601 date format)
- Represents harvest date or production date
- Use production date for processed items

### Batch Number

- Sequential number for batches produced on the same date
- Minimum 3 digits, zero-padded
- Resets daily or per production run

## Alternative Formats

### GS1 Format

For systems using GS1 standards:

```
(01)[GTIN](10)[Lot Number](21)[Serial Number]
```

### Simple Format

For small operations:

```
[Product Code]-[YYYYMMDD]-[Sequence]
```

## Implementation Requirements

- Generate lot codes at point of harvest or production
- Print lot codes on all packaging
- Maintain lot code registry
- Link lot codes to production records

## Data Association

Each lot code must be associated with:

- Product type and variety
- Production location
- Harvest date
- Quality test results (if applicable)
- Certification information

## Best Practices

- Use consistent format across all products
- Ensure lot codes are human-readable
- Include lot codes in all transaction records
- Maintain lot code history for at least 2 years
