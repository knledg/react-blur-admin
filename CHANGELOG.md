## [v0.8.1]
> June 23rd, 2016

### CSS
Bugfix: Modal h tags and labels were same font color as background color

### Select
Bugfix: If parent component changed value back to null, it wasn't reflected in the Select component


## [v0.8.0]
> June 15th, 2016

### Switch
- Add onLabel and offLabel (default to ON/OFF)

### Button
- Can now pass in a string for icon and it will render as the className for an i tag (can also pass in React Element for an icon)

### Tabs
- startTab can now be a string if the Tab component has a prop of name. Support for startTab of array index still supported.

### CSS
- Remove width property for .text-info

### Checkbox
- Bugfix: Correctly pass value to parent component when clicked

### Radio
- Bugfix: Correctly pass value to the parent component when clicked



## [v0.7.0]
> June 14th, 2016

### Editable Select
- Ability to pass in onRenderValue function to render the static selected value however you want
- Ability to pass in an onSearch function that gets passed to the underlying Select so you can customize how search works

### Select
- Ability to pass in onSearch to customize how search of all options is handled to create a subset visibleOptions.

### CSS
- Removed width restriction on search bar's input at the top of the layout so it can be handled dynamically based on page width for screens like Thunderbolts

### Alert Component
- Alert Component added



## [v0.6.1]
> June 8th, 2016

### CSS
- Change search bar container width to be dynamic

## [v0.6.0]
> June 7th, 2016

### CSS
- Remove align center for first th in each table
- Bugfix: modals wouldn't scroll if their height was greater than that of the screen
- Bugfix: select dropdown options were behind panels due to a `translate` property in the panel's css

### Switch
- Feature: Able to disable switches with `this.props.disabled={true|false}`

### Select
- Bugfix: Search value for searchable selects was never set on the input
- Feature: If options changes from the parent component, those options will be removed from the select


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
