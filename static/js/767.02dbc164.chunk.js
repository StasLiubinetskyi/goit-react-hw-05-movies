"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{767:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var o,i,r,c,a,s,d,p,l,u=t(439),g=t(791),v=t(689),h=t(171),x=t(168),f=t(867),m=t(87),b=f.ZP.div(o||(o=(0,x.Z)(["\n  display: block;\n  flex-direction: column;\n  padding: 20px;\n"]))),Z=f.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n  margin-top: 20px;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),j=f.ZP.img(r||(r=(0,x.Z)(["\n  max-width: 300px;\n  margin-right: 20px;\n"]))),k=f.ZP.div(c||(c=(0,x.Z)(["\n  flex: 1;\n"]))),_=f.ZP.div(a||(a=(0,x.Z)(["\n  margin-bottom: 20px;\n"]))),w=f.ZP.p(s||(s=(0,x.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  color: #333;\n"]))),y=(0,f.ZP)(m.rU)(d||(d=(0,x.Z)(["\n  margin-right: 10px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  border-radius: 5px;\n  color: white;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),P=f.ZP.div(p||(p=(0,x.Z)(["\n  margin-top: 20px;\n"]))),M=(0,f.ZP)(m.rU)(l||(l=(0,x.Z)(["\n  padding: 5px 10px;\n  background-color: #007bff;\n  border-radius: 5px;\n  color: white;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),C=t(184),R=function(){var n=(0,v.UO)().movieId,e=(0,g.useState)({}),t=(0,u.Z)(e,2),o=t[0],i=t[1],r=(0,v.TH)();(0,g.useEffect)((function(){h.a.getMovieDetails(n).then((function(n){i(n.data)})).catch((function(n){console.error("Error fetching movie details:",n)}))}),[n]);var c,a=r.pathname.endsWith("/cast")||r.pathname.endsWith("/reviews");return(0,C.jsxs)(b,{children:[(0,C.jsx)(M,{to:"/movies",children:"< Go back"}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(j,{src:(c=o.poster_path,c?"https://image.tmdb.org/t/p/w500".concat(c):"https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"),alt:o.title}),(0,C.jsxs)(k,{children:[(0,C.jsx)("h2",{children:o.title}),(0,C.jsxs)("p",{children:["User Score: ",o.vote_average]}),(0,C.jsx)(w,{children:o.overview})]})]}),(0,C.jsx)(P,{children:(0,C.jsx)("h3",{children:"Additional Information:"})}),(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,C.jsx)(y,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]}),a&&(0,C.jsx)(v.j3,{})]})}},171:function(n,e,t){t.d(e,{a:function(){return r}});var o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="0f593a0454339471521d6a9985cd9e6b",r={getTrendingMovies:function(){return o.Z.get("/trending/movie/day?api_key=".concat(i))},searchMovies:function(n){return o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n))},getMovieDetails:function(n){return o.Z.get("/movie/".concat(n,"?api_key=").concat(i))},getMovieCast:function(n){return o.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i))},getMovieReviews:function(n){return o.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i))}}}}]);
//# sourceMappingURL=767.02dbc164.chunk.js.map