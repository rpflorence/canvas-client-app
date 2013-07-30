# encoding: utf-8
task default: :precompile

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

