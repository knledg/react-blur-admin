# React Blur Admin
All credit for the theme goes to [akveo](http://akveo.com/blur-admin/), this is just a React implementation.

Note: This is currently partial implementation of Blur Admin. This repo includes styles from Blur Admin that are required for pages and components to load correctly and the components themselves.

Individual pages/demos/layouts can be found in the [React Webpack Skeleton repo](https://github.com/knledg/react-webpack-skeleton).

### Currently Implemented

- Text Inputs
- Buttons
- Editable Fields
- Loading Spinner
- Tables (not including smart tables)
- Tabs
- Switches
- Select Dropdowns
- Progress Bars
- Panels
- Pages
- Textareas
- Pagination (diverged from Blur's implementation slightly for additional flexibility)
- Notifications

### Needs Implementation

- Accordions
- Sliders
- Alerts
- Searchable table columns
- Tags Inputs

## Semver

Before the v1.0.0 release, a minor update will represent breaking changes and a patch will represent feature enhancements or bug fixes.

## Example Usage

A React Webpack Skeleton implementing the layout for React Blur Admin and using it's components will be uploaded and linked shortly. You can see how each component is implemented by looking at the source code for each of the demo pages.

## Dependencies
- Bootstrap CSS
- Bootstrap-Select CSS
- Bootstrap-Switch CSS
- Blur CSS
- EventEmitter implemented in lib/event-bus so that notifications can listen for a new notification from anywhere without any specific implementation of flux
- Utilizes Flexbox for columns/rows

