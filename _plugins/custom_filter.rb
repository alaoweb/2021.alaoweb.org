module Jekyll
    module CustomFilter
  
        def decode64(input)
            require "base64"
            return Base64.decode64(input)
        end
  
    end
end
  
Liquid::Template.register_filter(Jekyll::CustomFilter)