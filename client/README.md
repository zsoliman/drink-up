# Drink Up!

get suggested cocktails based on ingredient search queries


## api link: https://rapidapi.com/thecocktaildb/api/the-cocktail-db
## base_url: https://the-cocktail-db.p.rapidapi.com/

## Get Request Endings:

search.php?s=${name}
- search by cocktail name

search.php?i=${name}
- search by ingredient name

filter.php?i=${name}
- search by ingredient

filter.php?i=${ingredient1}%2C${ingredient2}%2C${ingredient3}
- search by multiple ingredients

random.php
- lookup a random cocktail

lookup.php?i=${cocktailID}
- lookup by cocktail ID

lookup.php?iid=${ingredientID}
- lookup by ingredient ID

list.php?c=list
- list categories

# To Do:
- back end
- set up favorites
- log in
- sessions
- set up log in/log out/auth
- combine popular and random in the suggestions page
- make tags clickable 
- probably cancel the food api payment# drink-up-rails
