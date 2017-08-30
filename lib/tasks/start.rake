# Call rake.start instead of having to call foreman start -f Procfile.dev
# to start dev server
namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true yarn postinstall && foreman start'
  end
end

# default to dev server on rake.start
desc 'Start development server'
task start: 'start:development'
