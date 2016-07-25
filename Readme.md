Lattice take home project

Specs
```
Requirements
1. When loaded I should see a list of the popular movies and a search bar.
2. If I search from a movie in the search bar I should see a list of the movies whose title matches my search.
3. If I click on a movie it should take me to a page where I see more information about that movie

Technical Requirements
1. Create a backend the application communicates with. The backend code then queries the movie api.

You may use any programming language and/or framework. Please use whatever technology you're most comfortable with.

Extra Points (optional)
1. You incorporate other aspects of the movie API to make the application richer.
2. The UI/UX is nice
```

# Config

## backend
create a file `backend/config.js` as below
```
module.exports = {
  api_root: 'http://api.themoviedb.org/3',
  api_key: <themoviedb_api_key>,
}
```

# Running
install packages and run
```
  npm install -g forever
  npm install -g node-inspector
  npm install -g webpack
  npm install -g babel-cli
  npm install
  npm run start
```
