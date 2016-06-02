## [v0.5.0]
> June 2nd, 2016

### CSS
- Remove fixed width on buttons, I think that should be handled by each developer
- Allow labels to be seen on modals (text and background color were the same)
- First td in each row of a table would be centered, changed that in to default alignment of left so the developer can choose how they want alignment

### Button
- Remove div.button-wrapper around buttons, let the padding/spacing be handled by the individual developer

### Modal (enhancement)
- onClose is no longer a required func. isOpen can change from the parent so technically the logic can be handled externally if needed.

### Select (enhancement)
- this.props.value can be a string or a number (previously just a string)


## [v0.4.0]
> May 31, 2016

**BREAKING CHANGES**
- Renamed `EditableField` class to `EditableText`

### EditableText
- Only show error help label if there is an error
- If validationResult is unknown, return empty string instead of throwing an error

### Select
- Update this.props.options proptypes to be more specific
- Show the label for the selected option instead of always showing the placeholder

### EditableSelect Component added
- Just as with EditableText, developers can now utilize an EditableSelect, that shows a static text value and when clicked it will transform into a Select dropdown.
- Default behavior: onClick it will load the open Select dropdown and focus on the input search if it exists. Escape will close the dropdown and revert back to the clickable text div

### CSS
- Added `.disabled` class so any DOM element can benefit from the `not-allowed` cursor

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
