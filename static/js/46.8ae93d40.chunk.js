"use strict";(self.webpackChunkyour_app_name=self.webpackChunkyour_app_name||[]).push([[46],{46:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var i,r,c,o,a,u=t(439),s=t(791),d=t(689),p=t(171),v=t(168),f=t(867),g=f.ZP.div(i||(i=(0,v.Z)(["\n  padding: 0px;\n"]))),h=f.ZP.ul(r||(r=(0,v.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),l=f.ZP.li(c||(c=(0,v.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 10px;\n  margin-bottom: 10px;\n"]))),Z=f.ZP.h4(o||(o=(0,v.Z)(["\n  margin: 0 0 5px;\n"]))),m=f.ZP.p(a||(a=(0,v.Z)(["\n  margin: 0;\n"]))),x=t(184),y=function(){var e=(0,d.UO)().movieId,n=(0,s.useState)([]),t=(0,u.Z)(n,2),i=t[0],r=t[1];return(0,s.useEffect)((function(){p.a.getMovieReviews(e).then((function(e){r(e.data.results)})).catch((function(e){console.error("Error fetching reviews:",e)}))}),[e]),(0,x.jsx)(g,{children:0===i.length?(0,x.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,x.jsx)(h,{children:i.map((function(e){return(0,x.jsxs)(l,{children:[(0,x.jsx)(Z,{children:e.author}),(0,x.jsx)(m,{children:e.content})]},e.id)}))})})}},171:function(e,n,t){t.d(n,{a:function(){return c}});var i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var r="0f593a0454339471521d6a9985cd9e6b",c={getTrendingMovies:function(){return i.Z.get("/trending/movie/day?api_key=".concat(r))},searchMovies:function(e){return i.Z.get("/search/movie?api_key=".concat(r,"&query=").concat(e))},getMovieDetails:function(e){return i.Z.get("/movie/".concat(e,"?api_key=").concat(r))},getMovieCast:function(e){return i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(r))},getMovieReviews:function(e){return i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(r))}}}}]);
//# sourceMappingURL=46.8ae93d40.chunk.js.map