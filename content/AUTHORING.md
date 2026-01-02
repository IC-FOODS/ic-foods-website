# Content Authoring Guide

This guide explains how to safely edit content for the IC-FOODS website. All content is stored in CSV files and Markdown files.

## CSV Files

### Location

All CSV files are located in the `/data` directory:

- `team.csv` - Team members
- `projects.csv` - Projects
- `events.csv` - Events
- `media.csv` - Media content
- `press.csv` - Press releases and news
- `resources.csv` - Downloadable resources
- `guidelines.csv` - Produce data guidelines metadata
- `conferences.csv` - Conference information
- `conference_program_items.csv` - Conference program schedule
- `conference_videos.csv` - Conference video recordings
- `conference_speakers.csv` - Conference speakers

### Important Rules

1. **Do not rename headers** - Column names must match exactly as defined
2. **Keep slugs stable** - Slugs are used in URLs; changing them breaks links
3. **Quote fields with commas** - Any field containing commas must be wrapped in double quotes
4. **Use ISO date format** - Dates must be in YYYY-MM-DD format (e.g., 2024-03-20)
5. **Tags are comma-separated** - Multiple tags in one field, separated by commas, wrapped in quotes

### Date Format

Always use ISO 8601 date format: `YYYY-MM-DD`

Examples:

- `2024-03-20` (March 20, 2024)
- `2024-12-31` (December 31, 2024)

### Tags

Tags are comma-separated values within a single field. Always wrap the entire tags field in quotes.

Example:

```csv
tags
"technology,farmers,digital,networks"
```

### Required Fields

Each CSV has specific required fields. Missing required fields will cause build errors:

- **team.csv**: name, slug, title, summary, description, updated_at
- **projects.csv**: title, slug, summary, description, updated_at
- **events.csv**: title, slug, summary, description, start_date, updated_at
- **media.csv**: title, slug, summary, description, url, type, updated_at
- **press.csv**: title, slug, summary, description, publication, url, updated_at
- **resources.csv**: title, slug, summary, description, file_url, category, updated_at
- **guidelines.csv**: title, slug, summary, content_path, updated_at
- **conferences.csv**: year, theme, location, start_date, end_date, summary, updated_at

### Adding a New Item

1. Open the appropriate CSV file
2. Add a new row at the end
3. Fill in all required fields
4. Ensure the slug is unique (no duplicates)
5. Use proper date format
6. Quote any fields containing commas

## Guidelines (Markdown Files)

### Location

Guideline markdown files are in `/content/guidelines/`

### Adding a New Guideline

1. Create a new `.md` file in `/content/guidelines/`
   - Use lowercase, hyphenated filename (e.g., `new-guideline.md`)
2. Add a row to `guidelines.csv`:
   - `title`: Display title
   - `slug`: URL-friendly identifier (matches filename without .md)
   - `summary`: Short description
   - `content_path`: Path to markdown file (e.g., `content/guidelines/new-guideline.md`)
   - `tags`: Comma-separated tags in quotes
   - `updated_at`: Date in YYYY-MM-DD format

### Markdown Format

Guidelines use standard Markdown:

- Headings: `#` for H1, `##` for H2, `###` for H3
- Lists: Use `-` for bullet lists, numbers for ordered lists
- Links: `[text](url)`
- Bold: `**text**`
- Code: `` `code` `` for inline, triple backticks for blocks

## Conferences

### Adding a Conference

1. Add a row to `conferences.csv` with year, theme, location, dates, summary
2. Add program items to `conference_program_items.csv` (link by year)
3. Add videos to `conference_videos.csv` (link by year)
4. Add speakers to `conference_speakers.csv` (link by year)

### Conference Year

Year must be a 4-digit number (e.g., 2024, not 24)

### URLs

All URLs must start with `http://` or `https://`

## Validation

The build process validates all CSV files. Common errors:

- **Missing required field**: Check that all required columns have values
- **Invalid date format**: Use YYYY-MM-DD format
- **Duplicate slug**: Each slug must be unique within its CSV
- **Invalid URL**: URLs must start with http:// or https://
- **File not found**: For guidelines, ensure content_path points to an existing file

## Best Practices

1. **Test locally** - Run `npm run build` to check for errors before committing
2. **Keep backups** - CSV files are version controlled, but keep local backups
3. **Use consistent formatting** - Follow existing patterns in CSV files
4. **Update dates** - Set `updated_at` to today's date when editing
5. **Check slugs** - Ensure slugs are URL-friendly (lowercase, hyphens, no spaces)

## Getting Help

If you encounter errors:

1. Check the error message for the specific row and field
2. Verify date formats are correct
3. Ensure all required fields are filled
4. Check that quoted fields are properly formatted
5. Verify file paths for guidelines exist
