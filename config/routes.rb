Rails.application.routes.draw do
  
  # resources :climb_infos
  # resources :climbs
  # resources :users
  #for security, should i not have resources on users?

  # custom routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

