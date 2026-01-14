# AgeExample Component

Dynamic date and year components for documentation that automatically stay current.

## Components

### Year
Displays the current year or an offset from the current year.

**Props:**
- `offset` (number, optional, default: 0) - Number of years to add to current year

**Usage:**
```jsx
<Year />                 // Displays current year (e.g., "2026")
<Year offset={1} />      // Displays next year (e.g., "2027")
<Year offset={-1} />     // Displays last year (e.g., "2025")
```

### BirthYear
Calculates birth year for someone of a given age.

**Props:**
- `age` (number, required) - The age of the person
- `offset` (number, optional, default: 0) - Number of years to offset the calculation

**Usage:**
```jsx
<BirthYear age={17} />              // Birth year for someone who is 17 now
<BirthYear age={17} offset={2} />   // Birth year for someone who will be 17 in 2 years
```

### CompactDate
Displays a full date (e.g., "July 1, 2026").

**Props:**
- `month` (number, required) - Month (1-12)
- `day` (number, required) - Day of month
- `offset` (number, optional, default: 0) - Number of years to offset

**Usage:**
```jsx
<CompactDate month={7} day={1} />              // July 1, 2026 (current year)
<CompactDate month={12} day={31} />            // December 31, 2026
<CompactDate month={6} day={30} offset={-1} /> // June 30, 2025 (last year)
<CompactDate month={1} day={1} offset={-17} /> // January 1, 2009 (17 years ago)
```

## Importing

At the top of your MDX file:

```jsx
import { Year, BirthYear, CompactDate } from '@site/src/components/AgeExample';
```

## Examples in Context

### Example 1: Season start documentation
```markdown
If your season starts <CompactDate month={7} day={1} />, ages are calculated as of <CompactDate month={6} day={30} />.
```
Output: "If your season starts July 1, 2026, ages are calculated as of June 30, 2026."

### Example 2: Birth year examples
```markdown
A curler born <CompactDate month={1} day={1} offset={-17} /> would be 17 on <CompactDate month={12} day={31} />.
```
Output: "A curler born January 1, 2009 would be 17 on December 31, 2026."

### Example 3: Year references
```markdown
The system uses January of the same season year (<Year offset={1} />).
```
Output: "The system uses January of the same season year (2027)."

## Benefits

1. **Always Current**: Dates automatically update based on the current year
2. **No Manual Updates**: No need to manually update years in documentation
3. **Consistent Examples**: All examples stay relevant to users viewing the docs
4. **Maintainable**: Easy to update the logic in one place if needed

## Implementation Notes

- Uses `new Date().getFullYear()` to get the current year
- All calculations are done at render time in the user's browser
- Negative offsets are useful for birth years (e.g., `offset={-17}` for someone born 17 years ago)
- Positive offsets are useful for future dates (e.g., `offset={1}` for next year)
