# container-names

### version 0.0.78

## Current Status

### Live testing on https://community.unix.com/

This Discourse plugin adds:

- The container names or ids of the containers listed in the yml file for two env vars:

1.  DISCOURSE_MAIN_CONTAINER_NAME
2.  DISCOURSE_DATA_CONTAINER_NAME

## TODO

- Fix issue when container info does update unless page is reloaded (computed property issue?)
- Clean up (shorten) env var names
- Test with Docker container and yml env vars above (continue testing)

## Version Info

- v0.0.7: 21 July 2020 live testing on production docker container
- v0.0.6: 20 July 2020 begin plugin
