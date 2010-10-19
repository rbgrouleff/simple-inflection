require "rubygems"
require "bundler/setup"

Bundler.require :default

desc 'Create bundled files for distribution.'
task :bundle do
  version = File.read('VERSION').strip
  
  files = [
    'simple_inflection.js'
  ]
  
  string = files.inject '' do |s, f|
    s << File.read("src/#{f}")
  end
  
  ["dist/simple_inflection-#{version}.js"].each do |path|
    File.open(path, 'w') do |f|
      f.write string
    end
  end
  
  ["dist/simple_inflection-#{version}-min.js"].each do |path|
    File.open(path, 'w') do |f|
      f.write Closure::Compiler.new.compile(string)
    end
  end
  
end
