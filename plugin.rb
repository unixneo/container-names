# name: container-names
# about: plugin to add container names or ids from yml to backup page
# version: 0.0.83
# date: 21 July 2020
# authors: Neo
# url: https://github.com/unixneo/container-names

enabled_site_setting :container_names_enabled

register_asset "stylesheets/common/container-names.scss"

# the below might be moved to the javascript init script?
after_initialize do
     if GlobalSetting.container_main.to_s.length > 1
      SiteSetting.container_main = GlobalSetting.container_main
     else
      SiteSetting.container_main = 'enabled but unspecified'
     end
     if GlobalSetting.container_data.to_s.length > 1
      SiteSetting.container_data = GlobalSetting.container_data
     else
      SiteSetting.container_data = 'enabled but unspecified'
     end
end
