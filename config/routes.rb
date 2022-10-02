Rails.application.routes.draw do

 get '/users', to: 'users#index'
 get '/users/:id', to: 'users#show'
 get '/users/:id/favorites', to: 'users#show_favorites'
 
 post '/users', to: 'users#create'

 get '/favorites', to: 'favorites#index'
 post '/favorites', to: 'favorites#create'
 delete '/favorites/:user_id/:recipe_id', to: 'favorites#destroy'

 get '/ratings', to: 'ratings#index'
 get '/ratings/:id', to: 'ratings#show'
 
 post '/ratings', to: 'ratings#create'
 
 get '/recipes', to: 'recipes#index'
 get '/recipes/:id', to: 'recipes#show'

 post '/recipes/:id', to: 'recipes#create'

 post '/login', to: 'sessions#create'
 delete '/logout', to: 'sessions#destroy'
 get '/me', to: 'users#show'

end
