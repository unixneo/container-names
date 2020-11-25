# container-names

### version 0.0.87. (superceded)

## Current Status

### SUPERCEDED BY

https://github.com/unixneo/discourse-container-names-with-gon

This plugin remains public but has been replaced by the plugin in the repo above.

### SUMMARY

This Discourse plugin adds:

- The container names or ids of the containers listed in the yml file for two env vars:

1.  DISCOURSE_CONTAINER_MAIN
2.  DISCOURSE_CONTAINER_DATA

## TODO

- Fix issue when container info does update unless page is reloaded (computed property issue?)
- Add / cleanup / fix I18N locale info for added `<span>` element.

## Version Info

- v0.0.87: 02 August 2020 change let to var
- v0.0.86: 22 July 2020 add comments regarding TODO issues
- v0.0.80: 21 July 2020 live testing on production docker container, changed env var names
- v0.0.60: 20 July 2020 begin plugin
