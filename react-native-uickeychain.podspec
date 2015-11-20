Pod::Spec.new do |s|
  s.name          = "react-native-uickeychain"
  s.version       = "1.0.0"
  s.summary       = "React Native wrapper for UICKeychainStore"
  s.license       = "MIT"
  s.platform      = :ios, "7.0"
  s.requires_arc  = true
  s.authors       = "Justin Makaila <justinmakaila@gmail.com>"
  s.homepage      = "https://github.com/justinmakaila/react-native-uickeychain"
  s.source_files  = "ios/**/*.{h,m}"
  s.dependency    "UICKeyChainStore", "~> 2.1.0"
end
