module Jekyll
    module CustomFilter
  
        def decode64(input, active = true)
            require "base64"
            if (active == false)
                return input
            else
                return Base64.decode64(input)
            end
        end
  
    end
end
  
Liquid::Template.register_filter(Jekyll::CustomFilter)