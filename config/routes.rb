Rails.application.routes.draw do

 get '/users', to: 'users#index'
 get '/users/:id', to: 'users#show'
 get '/users/:id/favorites', to: 'users#show_favorites'
 
 post '/users', to: 'users#create'

 get '/ratings', to: 'ratings#index'
 get '/ratings/:id', to: 'ratings#show'
 
 post '/ratings', to: 'ratings#create'
 
 get '/recipes', to: 'recipes#index'
 get '/recipes/:id', to: 'recipes#show'

 post '/recipes', to: 'recipes#create'

 post '/login', to: 'sessions#create'
 delete '/logout', to: 'sessions#destroy'
 get '/me', to: 'users#show'

end
