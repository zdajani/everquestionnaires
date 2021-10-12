source 'https://rubygems.org'

ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.3'
gem 'pg', '~> 0.18'
gem 'puma', '~> 4.3'
gem 'bcrypt'
gem 'jwt'
gem 'knock'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Call 'binding.pry' anywhere in the code to stop execution 
  # and get a debugger console
  gem 'pry-rails'
  gem 'rspec-rails'
  # To clean up after tests - config is found in spec/support/database_cleaner
  gem 'database_cleaner'
  # To create factories for rspec tests
  gem 'factory_girl_rails'
  # To add one-line testing functionality
  gem 'shoulda-matchers'
  # auto-generate fake test data
  gem 'faker'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # Setup for managing procfiles 
  gem 'foreman'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
