# encoding: utf-8
task default: :precompile

desc 'setup everything you need to run this app'
task :install do
  puts `bundle install`
  puts `npm install`
  puts `bower install`
end

desc 'run the static web server'
task :server do
  exec 'node_modules/.bin/static'
end

desc 'build assets'
task :build => [:precompile, :build_main]

desc 'precompile templates'
task :precompile do
  puts "# precompiling templates"
  template_path = "app/templates.js"
  puts `node_modules/.bin/ember precompile -d app/templates -f #{template_path}`
  src = File.read(template_path)
  File.open(template_path, 'w') do |f|
    f.write <<-END
      define(['ember'], function(Ember) {
        #{src}
      });
    END
  end
end

desc 'build main.js file'
task :build_main do
  puts "# building main.js file"
  require 'active_support/inflector'
  ignore = %w(app/main.js app/templates.js)
  files = Dir.glob('app/**/*.js')
  paths = []
  objects = []
  files.each do |file|
    next if ignore.include? file
    file.gsub!(/\.js$/, '')
    object = file.gsub(/(^app\/(.+\/)?)/, '')
                 .gsub(/\//, '_').camelize
    paths << file
    objects << object
  end
  paths << 'app/templates'
  assigns = objects.map { |object| "App.#{object} = #{object}" }.join(";\n  ")
  File.open('app/main.js', 'w') do |f|
    f.write <<-END
require(#{paths.inspect}, function(#{objects.join(', ')}) {
  #{assigns}
});
    END
  end
end

