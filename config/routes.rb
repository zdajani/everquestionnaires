Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # appends api to resources - ex api/questionnaires 
  scope 'api/' do 
    resources :questionnaires do
      resources :questions
    end
    
    resources :answers, only: [:create]
    resources :users, only: [:create]
    
    # route for page with custom routes
    resources :admin, only: [:index]
    get 'admin/questionnaires/:id' => 'admin#questionnaire_responses', as: 'questionnaire_responses'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
