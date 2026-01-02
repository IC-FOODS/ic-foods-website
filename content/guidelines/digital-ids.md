# Digital IDs

Digital identifiers provide unique, machine-readable identification for produce items, lots, and packages. This guideline specifies formats and standards for digital identifiers.

## Identifier Types

### Product Identifiers

- **GTIN (Global Trade Item Number)**: Standard product identifier
- **UPC**: Universal Product Code for retail
- **EAN**: European Article Number

### Lot Identifiers

- **GS1 Serial Shipping Container Code (SSCC)**: For shipping containers
- **GS1 Global Location Number (GLN)**: For location identification

## Barcode Standards

### Linear Barcodes

- **Code 128**: For alphanumeric data
- **Code 39**: For basic alphanumeric encoding
- **EAN-13/UPC-A**: For retail products

### 2D Barcodes

- **QR Code**: For comprehensive data storage
- **Data Matrix**: For small item marking
- **GS1 DataBar**: For variable measure items

## Identifier Format

Digital IDs must follow recognized standards:

- Use GS1 standards where applicable
- Ensure uniqueness within the identifier space
- Include check digits for error detection
- Maintain consistent format across systems

## Implementation

- Generate identifiers at the point of packaging
- Print barcodes with sufficient resolution for scanning
- Test barcode readability before distribution
- Maintain identifier registry

## Data Carried in Identifiers

Digital IDs may encode:

- Product type
- Lot number
- Production date
- Expiration date (if applicable)
- Origin information
