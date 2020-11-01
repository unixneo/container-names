# name: container-names
# about: plugin to add container names or ids from yml to backup page
# version: 0.0.87
# date: 21 July 2020
# authors: Neo
# url: https://github.com/unixneo/container-names


gem 'gon', ' 6.2.0', {require: false }

enabled_site_setting :container_names_enabled

register_asset "stylesheets/common/container-names.scss"

# the below might be moved to the javascript init script to get 
# computed property to work?
after_initialize do
     if GlobalSetting.container_main.to_s.length > 1
      gon.container_main = GlobalSetting.container_main.dup
      SiteSetting.container_main = GlobalSetting.container_main.dup
     else
      gon.container_main = = 'enabled but unspecified'
      SiteSetting.container_main = 'enabled but unspecified'
     end
     if GlobalSetting.container_data.to_s.length > 1
      gon.container_data = GlobalSetting.container_data.dup
      SiteSetting.container_data = GlobalSetting.container_data.dup
     else
      gon.container_data = 'enabled but unspecified'
      SiteSetting.container_data = 'enabled but unspecified'
     end
end
