# encoding: utf-8
task default: :precompile

desc 'setup everything you need to run this app'
task :install do
  puts `npm install`
  puts `bower install`
end

desc 'run the static web server'
task :server do
  exec 'node_modules/.bin/static'
end

desc 'precompile templates'
task :precompile do
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

