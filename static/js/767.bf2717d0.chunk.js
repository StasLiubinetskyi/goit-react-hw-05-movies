"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{767:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var o,i,r,a,c,s,d,l,p,h,u,v,g=t(439),x=t(791),f=t(689),m=t(171),Z=t(168),b=t(867),j=t(87),_=b.ZP.div(o||(o=(0,Z.Z)(["\n  display: block;\n  flex-direction: column;\n  padding: 20px;\n"]))),k=b.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  margin-top: 20px;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),w=b.ZP.img(r||(r=(0,Z.Z)(["\n  max-width: 300px;\n  margin-right: 20px;\n"]))),P=b.ZP.div(a||(a=(0,Z.Z)(["\n  flex: 1;\n"]))),y=b.ZP.div(c||(c=(0,Z.Z)(["\n  margin-bottom: 20px;\n"]))),M=(0,b.ZP)(j.rU)(s||(s=(0,Z.Z)(["\n  margin-right: 10px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  border-radius: 5px;\n  color: white;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),C=b.ZP.div(d||(d=(0,Z.Z)(["\n  margin-top: 20px;\n"]))),R=(0,b.ZP)(j.rU)(l||(l=(0,Z.Z)(["\n  padding: 5px 10px;\n  background-color: #007bff;\n  border-radius: 5px;\n  color: white;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),U=b.ZP.p(p||(p=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 50px;\n"]))),E=b.ZP.div(h||(h=(0,Z.Z)(["\n  font-size: 16px;\n  margin-top: 50px;\n"]))),S=b.ZP.span(u||(u=(0,Z.Z)(["\n  font-weight: bold;\n"]))),z=b.ZP.span(v||(v=(0,Z.Z)(["\n  font-weight: normal;\n"]))),A=t(184),D=function(){var n,e,t,o=(0,f.UO)().movieId,i=(0,x.useState)({}),r=(0,g.Z)(i,2),a=r[0],c=r[1],s=(0,x.useState)(""),d=(0,g.Z)(s,2),l=d[0],p=d[1],h=(0,f.TH)();(0,x.useEffect)((function(){m.a.getMovieDetails(o).then((function(n){c(n.data),p(n.data.release_date)})).catch((function(n){console.error("Error fetching movie details:",n)}))}),[o]);var u,v=h.pathname.endsWith("/cast")||h.pathname.endsWith("/reviews");return(0,A.jsxs)(_,{children:[(0,A.jsx)(R,{to:null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),(0,A.jsxs)(k,{children:[(0,A.jsx)(w,{src:(u=a.poster_path,u?"https://image.tmdb.org/t/p/w500".concat(u):"https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"),alt:a.title}),(0,A.jsxs)(P,{children:[(0,A.jsxs)("h2",{children:[a.title,l&&" (".concat(l.substring(0,4),")")]}),(0,A.jsxs)("p",{children:["User Score: ",Math.round(10*a.vote_average),"%"]}),(0,A.jsxs)(U,{children:[(0,A.jsx)(S,{children:"Overview: "}),(0,A.jsx)(z,{children:a.overview})]}),(0,A.jsxs)(E,{children:[(0,A.jsx)(S,{children:"Genres: "}),(0,A.jsx)(z,{children:null===(t=a.genres)||void 0===t?void 0:t.map((function(n,e){return 0===e?n.name:", ".concat(n.name)}))})]})]})]}),(0,A.jsx)(C,{children:(0,A.jsx)("h3",{children:"Additional Information:"})}),(0,A.jsxs)(y,{children:[(0,A.jsx)(M,{to:"/movies/".concat(o,"/cast").concat(h.search),children:"Cast:"}),(0,A.jsx)(M,{to:"/movies/".concat(o,"/reviews").concat(h.search),children:"Reviews:"})]}),v&&(0,A.jsx)(f.j3,{})]})}},171:function(n,e,t){t.d(e,{a:function(){return r}});var o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="0f593a0454339471521d6a9985cd9e6b",r={getTrendingMovies:function(){return o.Z.get("/trending/movie/day?api_key=".concat(i))},searchMovies:function(n){return o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n))},getMovieDetails:function(n){return o.Z.get("/movie/".concat(n,"?api_key=").concat(i))},getMovieCast:function(n){return o.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i))},getMovieReviews:function(n){return o.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i))}}}}]);
//# sourceMappingURL=767.bf2717d0.chunk.js.map