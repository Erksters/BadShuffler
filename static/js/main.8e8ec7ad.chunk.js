(this["webpackJsonpshuffle-online"]=this["webpackJsonpshuffle-online"]||[]).push([[0],{39:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(17),r=n.n(c),a=(n(39),n(40),n(6)),o=n(3),l=n(79),h=n(78),d=n(77),u=n(80),j=n.p+"static/media/heart.98868205.svg",f=n.p+"static/media/spade.ecbe2cf9.svg",b=n.p+"static/media/diamond.587172c7.svg",m=n.p+"static/media/club.d51191ce.svg",x=n(0),O=function(e){var t=e.AllCards,n={S:f,D:b,H:j,C:m};return console.log(t),Object(x.jsx)("div",{children:window.screen.width>1100?Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{children:t.slice(0,13).map((function(e,t){return Object(x.jsxs)(h.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(13,26).map((function(e,t){return Object(x.jsxs)(h.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(26,39).map((function(e,t){return Object(x.jsxs)(h.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(39,52).map((function(e,t){return Object(x.jsxs)(h.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{children:t.slice(0,13).map((function(e,t){return Object(x.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(13,26).map((function(e,t){return Object(x.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(26,39).map((function(e,t){return Object(x.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))}),Object(x.jsx)(d.a,{children:t.slice(39,52).map((function(e,t){return Object(x.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(x.jsx)("img",{src:n[e.suit],alt:"suit"})]},t)}))})]})})},y={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13};var g=function(){for(var e=new(0,n(42).Deck),t=[],s=[],i=[],c=[];e.length()>0;){var r=e.draw();"S"===r.getSuit()&&t.push(r),"H"===r.getSuit()&&c.push(r),"D"===r.getSuit()&&i.push(r),"C"===r.getSuit()&&s.push(r)}return t.sort((function(e,t){return y[e.getRank()]-y[t.getRank()]})),c.sort((function(e,t){return y[e.getRank()]-y[t.getRank()]})),s.sort((function(e,t){return y[e.getRank()]-y[t.getRank()]})),i.sort((function(e,t){return y[e.getRank()]-y[t.getRank()]})),[].concat(t).concat(c).concat(s).concat(i)},p=n(11),w=n.n(p),k=function(){var e=[],t=[],n=Object(s.useState)(g()),i=Object(o.a)(n,2),c=i[0],r=i[1],j=Object(s.useState)(0),f=Object(o.a)(j,2),b=f[0],m=f[1],y=Object(s.useState)([{key:0,value:0}]),p=Object(o.a)(y,2),k=p[0],v=p[1],S=Object(s.useState)([0]),T=Object(o.a)(S,2),C=T[0],I=T[1];return Object(x.jsx)("div",{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)("strong",{children:"Shuffle Skill Slider Bar (Higher is Better) "})}),Object(x.jsx)(d.a,{style:{justifyContent:"center",margin:"30px"},children:Object(x.jsx)(l.a,{onChange:function(e,t){m(t/200)},defaultValue:0,"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"on",max:100})}),Object(x.jsxs)(d.a,{style:{justifyContent:"center"},children:[Object(x.jsx)(u.a,{id:"TEST1",onClick:function(){e=c.splice(0,26),t=c.splice(0,26);for(var n=[],s=b,i=.5+b;n.length<52;)i=.5+s,0===e.length&&t.length&&n.push(t.pop()),0===t.length&&e.length&&n.push(e.pop()),Math.random()>i&&e.length?(n.push(e.pop()),s*=-1):t.length&&(n.push(t.pop()),s*=-1);n.reverse(),r(n),function(e){var t={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13},n=0,s=0;e.map((function(e,i){i<26?n+=t[e.rank]:s+=t[e.rank]}));var i=n-s,c={key:k.length,value:i};v((function(e){return[].concat(Object(a.a)(e),[c])})),I((function(e){return[].concat(Object(a.a)(e),[c.key])}))}(n)},style:{margin:"5px"},children:"Shuffle"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("TEST1").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("TEST1").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(x.jsx)(u.a,{onClick:function(){v([{key:0,value:0}]),I([0]),r(g())},style:{margin:"5px"},children:"Reset"})]}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(w.a,{data:[{type:"line",title:"Top Half Points vs Bottom Half Points",color:"blue",points:k}],keys:C})}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(O,{AllCards:c})})]})})},v=function(){return Object(x.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(x.jsx)("h3",{children:"Riffle Split"}),"The Riffle split is probably the most common type of shuffle. What most people do is seperate a deck in two and merge both halfs together randomly. The suspicious behavior of this technique is that, if we were to start off with a manufactured deck, then the high cards will always go to the bottom of the deck. Below you can shuffle a sample deck and see where most of the high cards go in the first few shuffles.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{textAlign:"center"},children:[Object(x.jsx)("h4",{children:"Riffle Split example"}),Object(x.jsx)("img",{style:{maxWidth:window.screen.width-80},src:"https://fredhohman.com/card-shuffling/static/images/riffle.gif",alt:"classic shuffle gif"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(k,{}),Object(x.jsx)("br",{}),"After a while, the deck does approach a random assortment of cards. Unfortunately, this type of shuffling method doesn't allow new cards on to the top or bottom of the deck. It is extremely static on the ends of the deck. If this is the only method of shuffling used, you will be recycling used cards again and again. What's worse, is that if you perfect your shuffling skill (slide the bar to 100 and shuffle 100 times), then you will see the deck shuffles through five or six different orientations. The solution to these issues are to shuffle more than a handful of times and to shuffle poorly. This way, you'll give every orientation of the deck a chance to exist.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})},S=function(){var e=[],t=[],n=Object(s.useState)(g()),i=Object(o.a)(n,2),c=i[0],r=i[1],j=Object(s.useState)(7),f=Object(o.a)(j,2),b=f[0],m=f[1],y=Object(s.useState)([{key:0,value:0}]),p=Object(o.a)(y,2),k=p[0],v=p[1],S=Object(s.useState)([0]),T=Object(o.a)(S,2),C=T[0],I=T[1];return Object(x.jsx)("div",{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)("strong",{children:" Shuffle Chunks (Greater is More Clumped) "})}),Object(x.jsx)("br",{}),Object(x.jsx)(d.a,{style:{justifyContent:"center",margin:"30px"},children:Object(x.jsx)(l.a,{onChange:function(e,t){m(t)},defaultValue:7,"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"on",min:4,max:10})}),Object(x.jsxs)(d.a,{style:{justifyContent:"center"},children:[Object(x.jsx)(u.a,{id:"TEST2",onClick:function(){e=c.splice(0,52);for(var n=[],s=b;n.length<52;)if(e.length<=s&&(e.reverse(),e.map((function(e){return n.unshift(e)}))),e.length>s){var i=Math.random();(t=i<.5?e.splice(0,s-1):e.splice(0,s+1)).reverse(),t.map((function(e){return n.unshift(e)}))}r(n),function(e){var t={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13},n=0,s=0;e.map((function(e,i){i<26?n+=t[e.rank]:s+=t[e.rank]}));var i=n-s,c={key:k.length,value:i};v((function(e){return[].concat(Object(a.a)(e),[c])})),I((function(e){return[].concat(Object(a.a)(e),[c.key])}))}(n)},style:{margin:"5px"},children:"Shuffle"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("TEST2").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("TEST2").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(x.jsx)(u.a,{onClick:function(){v([{key:0,value:0}]),I([0]),r(g())},style:{margin:"5px"},children:"Reset"})]}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(w.a,{data:[{type:"line",title:"Top Half Points vs Bottom Half Points",color:"red",points:k}],keys:C})}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(O,{AllCards:c})})]})})},T=function(){return Object(x.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(x.jsx)("h3",{children:"Overhand Shuffle"}),"The Overhand shuffle is probably the second most common type of shuffle. The behavior of this shuffling technique is that the cards are severely clumped together. You could predict what cards your opponent has due to the clumping of cards. Below you can shuffle a sample deck and see how little the deck has actually been shuffled after an ",Object(x.jsx)("strong",{children:"EVEN"})," number of shuffles.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{style:{textAlign:"center"},children:Object(x.jsx)("img",{style:{maxWidth:window.screen.width-80},src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/375ce685-c00c-4f3b-a467-1f6a38391fdd/d88npqq-2a2c5683-2253-4d20-8bbb-371f378b0795.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3NWNlNjg1LWMwMGMtNGYzYi1hNDY3LTFmNmEzODM5MWZkZFwvZDg4bnBxcS0yYTJjNTY4My0yMjUzLTRkMjAtOGJiYi0zNzFmMzc4YjA3OTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gnxKmUMykmQHwBbIMxTPrpNehQVE6G868fhqUS_PQtc",alt:"overhand shuffle gif"})}),Object(x.jsx)("br",{}),Object(x.jsx)(S,{}),Object(x.jsx)("br",{}),"This shuffle is by far worse that the Riffle split because it isn't moving more than a few cards at a time. The position of a card and it's neighbors will not vary half the time. Even if we were to shuffle hundreds and hundreds of times (Shuffle 100), there is still a high card bias with every other shuffle. So depending on the number of times you shuffle (Even VS. Odd number of times), you may or may not play with many high cards.",Object(x.jsx)("br",{})]})},C=function(){var e=[],t=[],n=Object(s.useState)(g()),i=Object(o.a)(n,2),c=i[0],r=i[1],l=Object(s.useState)(-52),j=Object(o.a)(l,2),f=j[0],b=j[1],m=Object(s.useState)([{key:0,value:-52}]),y=Object(o.a)(m,2),p=y[0],k=y[1],v=Object(s.useState)([0]),S=Object(o.a)(v,2),T=S[0],C=S[1];return Object(x.jsx)("div",{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)("strong",{children:"Average is 236 Shuffles"})}),Object(x.jsxs)(d.a,{style:{justifyContent:"center"},children:[Object(x.jsx)(u.a,{id:"Test3",onClick:function(){if(function(){var e=52;c.map((function(t,n){"K"===t.rank&&"D"===t.suit&&(e=n)})),b(-e)}(),f<-1){e=c.splice(0,1),t=c.splice(0,51);var n=Math.floor(51*Math.random())+1;t.splice(n,0,e.pop()),r(t),function(){var e={key:p.length,value:f};k((function(t){return[].concat(Object(a.a)(t),[e])})),C((function(t){return[].concat(Object(a.a)(t),[e.key])}))}()}},style:{margin:"5px"},children:"Shuffle"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("Test3").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(x.jsx)(u.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("Test3").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(x.jsx)(u.a,{onClick:function(){k([{key:0,value:-52}]),C([0]),r(g())},style:{margin:"5px"},children:"Reset"})]}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(w.a,{data:[{type:"line",title:"Position of The King Of Diamonds per Shuffle",color:"green",points:p}],keys:T})}),Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(O,{AllCards:c})})]})})},I=function(){return Object(x.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(x.jsx)("h3",{children:"Low Rise Shuffle"}),'This last shuffle method is one that you probably haven\'t heard of. The technique here is to move the top card into a random spot into the deck. As you progress this shuffle, you will notice that a pre-determined "bottom card" (King of Diamonds) will slowly move up in position. Once the "bottom card" has moved all the way up to the top of the deck, it is safe to say that most of the deck has been shuffled. All that would be left is to move the bottom card into a random position into the deck. This way, you will have truly randomized the deck. Below you can shuffle a sample deck and see how many shuffles it takes to get the bottom King of Diamonds card to the top of the deck.',Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(C,{})]})},N=function(){return Object(x.jsxs)("div",{style:{textAlign:"center"},children:[Object(x.jsx)("h1",{children:"Why You're So Bad At Shuffling"}),Object(x.jsx)("h3",{children:"By Erick Saenz"})]})},M=function(){var e=g();return Object(x.jsx)("div",{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(d.a,{style:{justifyContent:"center"},children:Object(x.jsx)(O,{AllCards:e})})})})},R=function(e){return Object(x.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:["One of the few things that my friends and family criticize is the way we shuffle cards. We play a variety of games, but our shuffling techniques between each game remains the same. Since we were taught how to shuffle decks as children, we never questioned the integrity of the shuffle. In this article, I wanted to put popular shuffling techniques to the test and determine what technique truly randomizes the deck of cards. Below we see the deck that most manufacturers distrubute. This initial set of the deck is fairly standard but it raises a few questions:",Object(x.jsx)("br",{}),"1. Do my shuffles give an equal opportunity for every permutation to exist?",Object(x.jsx)("br",{}),"2. How many shuffles would it take to get the opposite orientation of the origional manufactured deck?",Object(x.jsx)("br",{}),"3. Are all shuffling methods predictable in nature?",Object(x.jsx)("br",{}),"4. What is a good way to measure randomness?",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h3",{children:"Standard Deck of Cards"}),Object(x.jsx)(M,{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Although I won't be answering these questions in this article, I can argue that the answer to my first question is no, and the reasoning behind that is that our shuffling techniques don't provides sufficient randomization in a short amount of shuffles.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})},A=n(14),B=n.n(A),z=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(B.a.Provider,{options:{tex2jax:{inlineMath:[]}},children:[Object(x.jsx)(B.a.Node,{formula:" \\sum_{n=1}^{52} \\frac{1}{n} "}),Object(x.jsx)("div",{children:"Which is expressed as ..."}),Object(x.jsx)(B.a.Node,{formula:" \\frac{1}{52} + \\frac{1}{51} + \\frac{1}{50} + \\dots  + \\frac{1}{2} + \\frac{1}{1} "}),Object(x.jsx)("div",{children:"Which approximately equals..."}),Object(x.jsx)(B.a.Node,{formula:"\\approx  4.53804\\dots"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})},W=function(e){return Object(x.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(x.jsx)("h3",{children:"Determing what is Random "}),"Let's say we are going to play a game with a randomized deck of cards in my hand. We will go through the deck one card at a time and your goal is to guess what card is drawn. If you guess the card correctly, then you will be awarded with $1, and the card will be thrown into a discard pile face up. If you do not guess correctly, then there are no consequences and the card will still be thrown into a discard pile face up.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Your initial odds of guessing a card correctly would be 1-in-52, then 1-in-51, and so forth until we draw the final card. In theory, you should win about four to five dollars in this game. The math behind this game would look like this where we add up the probability of winning per draw:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(z,{}),"To improve your odds of winning, you could shuffle poorly or predictably. Read further below to understand what shuffling looks like on small and large scales.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})},D=function(){return Object(x.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:window.screen.width>1100?Object(x.jsxs)("div",{className:"d-none d-lg-block",style:{maxWidth:"1100px"},children:[Object(x.jsx)(N,{}),Object(x.jsx)(R,{}),Object(x.jsx)(W,{}),Object(x.jsx)(v,{}),Object(x.jsx)(T,{}),Object(x.jsx)(I,{})]}):Object(x.jsxs)("div",{className:"d-lg-none",style:{maxWidth:window.screen.width-50},children:[Object(x.jsx)(N,{}),Object(x.jsx)(R,{}),Object(x.jsx)(W,{}),Object(x.jsx)(v,{}),Object(x.jsx)(T,{}),Object(x.jsx)(I,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),E()}},[[66,1,2]]]);
//# sourceMappingURL=main.8e8ec7ad.chunk.js.map