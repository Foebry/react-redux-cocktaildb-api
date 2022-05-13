# react-redux-cocktaildb-api

## Link to surge deploy

[sander-react-redux-cocktaildb-api.surge.sh](https://sander-react-redux-cocktaildb-api.surge.sh)

## installed modules

    - reduxjs/tookit
    - react-redux

## used technology

    - vite
    - reactJs

## API

`https://www.thecocktaildb.com/api.php`

## scope

Using Redux createApi to fetch data from 2 different endpoints.
Search will fetch cocktails containing the search string in their name.
Opening details will fetch detailed info on selected cocktail.

cocktailSlice controls 2 variables:

    - searchValue which holds the value to search on.
    - cocktailId which holds the id of the cocktail in detail.

ColorSlice provides the following actions

     - setSearchValue({value: string})
     - showDetail(id:number)
     - hideDetail()

## setup

download code:
`git clone https://github.com/Foebry/react-redux-cocktaildb-api.git`

install required packages:
`npm i`

run project:
`npm run dev`
