Rails.application.routes.draw do

 get '/users', to: 'users#index'
 get '/users/:id', to: 'users#show'
 get 'users/:id/favorites', to: 'users#favorites'

 get '/ratings', to: 'ratings#index'
 get '/ratings/:id', to: 'ratings#show'

 get '/recipes', to: 'recipes#index'
 get '/recipes/:id', to: 'recipes#show'


 
 post '/users/new', to: 'users#create'
end
