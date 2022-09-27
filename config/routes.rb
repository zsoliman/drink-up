Rails.application.routes.draw do

 get '/users', to: 'users#index'
 get '/users/:id', to: 'users#show'
 get '/users/:id/favorites', to: 'users#show_favorites'
 
 get '/ratings', to: 'ratings#index'
 get '/ratings/:id', to: 'ratings#show'
 
 get '/recipes', to: 'recipes#index'
 get '/recipes/:id', to: 'recipes#show'

 post '/users', to: 'users#create'
 post '/recipes', to: 'recipes#create'
 post '/ratings', to: 'ratings#create'
end
