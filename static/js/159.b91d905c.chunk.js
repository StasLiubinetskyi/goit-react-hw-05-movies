"use strict";(self.webpackChunkyour_app_name=self.webpackChunkyour_app_name||[]).push([[159],{159:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i,o,r,c=t(439),a=t(791),u=t(87),s=t(171),d=t(168),g=t(867),l=g.ZP.div(i||(i=(0,d.Z)(["\n  padding: 20px;\n  display: block;\n  width: auto;\n  max-width: 768px;\n  margin: 0;\n"]))),p=g.ZP.ul(o||(o=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),f=(0,g.ZP)(u.rU)(r||(r=(0,d.Z)(["\n  display: block;\n  padding: 10px;\n  margin: 5px 0;\n  background-color: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),v=t(184),h=function(){var n=(0,a.useState)([]),e=(0,c.Z)(n,2),t=e[0],i=e[1];return(0,a.useEffect)((function(){s.a.getTrendingMovies().then((function(n){i(n.data.results)})).catch((function(n){console.error("Error fetching trending movies:",n)}))}),[]),(0,v.jsxs)(l,{children:[(0,v.jsx)("h2",{children:"Trending Movies:"}),(0,v.jsx)(p,{children:t.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(f,{as:u.rU,to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},171:function(n,e,t){t.d(e,{a:function(){return r}});var i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="0f593a0454339471521d6a9985cd9e6b",r={getTrendingMovies:function(){return i.Z.get("/trending/movie/day?api_key=".concat(o))},searchMovies:function(n){return i.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(n))},getMovieDetails:function(n){return i.Z.get("/movie/".concat(n,"?api_key=").concat(o))},getMovieCast:function(n){return i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o))},getMovieReviews:function(n){return i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(o))}}}}]);
//# sourceMappingURL=159.b91d905c.chunk.js.map