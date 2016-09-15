## [v0.11.1]

**Bug Fix**

- Always update value when props change on Select Component

## [v0.11.0]

- Remove IonIcons, just use Font Awesome Icons Only (#65)


## [v0.10.2]

### Table Component
- Add style to props

### Radio Input
- Add defaultChecked to props


## [v0.10.1]

### Remove Karma
- Remove karma, just use mocha and jsdom
- Reduces test time from 33 seconds to ~2

## [v0.10.0]
> July 28th, 2016

**BREAKING CHANGES**

- Changed _msgCenter css from `a` tag to `div`

### CSS
- Changed css in Msg _msgCenter.scss from a tag to div for stylistic preferences

### Messages-Alert and Container
- Added a message alert component in page top nav bar
- Added a message alert container component that corresponds with our message alerts

### SearchBar
- Added necessary css for search bar component (corresponds with Search Bar added to React Webpack Skeleton)

### Bug Fix Alert Component
- optional className was not being passed in **FIXED**
- Added test to show className is now working

### Bug Fix Pagination Component
- Pagination was not working properly because it was returning a string not a number **FIXED**
- Pagination now only takes a number from the used value

### Notifications Navigation Bar Component
- Added a notifications alert component to our page top to display notification count and their messages
- Behavior: When a child notification is passed into the notifications container they will be displayed with their message, the user who sent it, and a created at timestamp
- Component includes an icon with animation to display notification count

### Add MaxHeight prop to Select Dropdowns
- Added an optional maxHeight property to our select dropdown components
- This property will allow for a scrolling feature if the maxHeight container is exceeded
- Behavior: if maxHeight is being passed dropdown will have a max height of that value

### Modal
- Add primary modal type originally user could not pass in primary type **FIXED**
- Added buttonText prop to allow users to pass in any text inside the button as oppose to the default button title of 'OK' this allows for a more customizable modal

### Add Refs to Native Input Elements
- Allows users to get access to the DOM elements within components if needed


## [v0.9.0]
> July 7th, 2016

### CSS
- Add search results css (see React Webpack Skeleton for demo)
- Added .blue-text class, removed .red-text and .yellow-text from the .color-widget container
- Delete .color-widget container which mostly just centered the text. Allows the user to optionally center text with Row/Col system or Bootstraps text-center instead of requiring it.


## [v0.8.2]
> June 23rd, 2016

### EditableSelect
Ability to pass in prop `isBeingEdited` to have it start in an "open" state

### Select
Ability to pass in an `onRenderValue` function so that, when open, it will display a custom value at the top. This is useful when label for each of your options is a React Element of some sort.


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
