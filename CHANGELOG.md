## [v0.3.0]
> May 29, 2016

### Editable Fields
- Editable Fields don't listen for esc/enter events twice

### Select
- Select has more readable label before hover and while open
- Select active status previously wasn't working but now is
- Select tabIndex had a spelling error
- Select now recognized up/down events for scrolling through options and esc/enter for hiding options and selecting an option respectively
- Indicate selected option with a checkmark

### Button
- Buttons can optionally have an icon React Element passed as a prop

### Tables
- Fixed bug where table-responsive wasn't doing anything


**BREAKING CHANGES**

Renamed some props for the table component:

- tableHover -> hover
- tableResponsive -> responsive
- tableStriped -> stripe
- tableCondensed -> condense
- tableBordered -> border


## [v0.2.0]
> May 26, 2016

- Change Select `onChange` to pass the value to the parent instead of the label.
- If Input `getValidationResult` receives an unexpected validation result, return an empty validation class instead of throwing an error. That way developers can handle not showing any validation if the input value has no length.

## [v0.1.1]
> May 25, 2016

- Add Preloader component so users can use the same Preloader spinner as a loading indicator

## [v0.1.0]
> May 24, 2016

- Initial Release
