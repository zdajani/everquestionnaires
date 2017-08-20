Rails.application.routes.draw do

  # appends api to resources - ex api/questionnaires 
  scope 'api/' do 
    resources :questionnaires do
      resources :questions
    end
    
    resources :answers, only: [:create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
