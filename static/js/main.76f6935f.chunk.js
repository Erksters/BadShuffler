(this["webpackJsonpshuffle-online"]=this["webpackJsonpshuffle-online"]||[]).push([[0],{24:function(e,t,s){},40:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(17),r=s.n(c),a=(s(40),s(3)),o=(s(41),s(7)),l=s(80),d=s(79),h=s(78),j=s(81),u=s.p+"static/media/heart.98868205.svg",b=s.p+"static/media/spade.ecbe2cf9.svg",f=s.p+"static/media/diamond.587172c7.svg",x=s.p+"static/media/club.d51191ce.svg",m=(s(24),s(0)),O=function(e){var t=e.AllCards,s={S:b,D:f,H:u,C:x};return Object(m.jsx)("div",{children:window.screen.width>1100?Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{children:t.slice(0,13).map((function(e,t){return Object(m.jsxs)(d.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(13,26).map((function(e,t){return Object(m.jsxs)(d.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(26,39).map((function(e,t){return Object(m.jsxs)(d.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(39,52).map((function(e,t){return Object(m.jsxs)(d.a,{style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{children:t.slice(0,13).map((function(e,t){return Object(m.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(13,26).map((function(e,t){return Object(m.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(26,39).map((function(e,t){return Object(m.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(39,52).map((function(e,t){return Object(m.jsxs)("rect",{style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))})]})})},g={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13};var y=function(){for(var e=new(0,s(43).Deck),t=[],i=[],n=[],c=[];e.length()>0;){var r=e.draw();"S"===r.getSuit()&&t.push(r),"H"===r.getSuit()&&c.push(r),"D"===r.getSuit()&&n.push(r),"C"===r.getSuit()&&i.push(r)}return t.sort((function(e,t){return g[e.getRank()]-g[t.getRank()]})),c.sort((function(e,t){return g[e.getRank()]-g[t.getRank()]})),i.sort((function(e,t){return g[e.getRank()]-g[t.getRank()]})),n.sort((function(e,t){return g[e.getRank()]-g[t.getRank()]})),[].concat(t).concat(c).concat(i).concat(n)},p=s(12),w=s.n(p),k=function(){var e=[],t=[],s=Object(i.useState)(y()),n=Object(a.a)(s,2),c=n[0],r=n[1],u=Object(i.useState)(0),b=Object(a.a)(u,2),f=b[0],x=b[1],g=Object(i.useState)([{key:0,value:0}]),p=Object(a.a)(g,2),k=p[0],v=p[1],T=Object(i.useState)([0]),S=Object(a.a)(T,2),C=S[0],A=S[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)("strong",{children:"Shuffle Skill Slider Bar (Higher is Better) "})}),Object(m.jsx)(h.a,{style:{justifyContent:"center",margin:"30px"},children:Object(m.jsx)(l.a,{onChange:function(e,t){x(t/200)},defaultValue:0,"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"on",max:100})}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[Object(m.jsx)(j.a,{id:"TEST1",onClick:function(){e=c.splice(0,26),t=c.splice(0,26);for(var s=[],i=f,n=.5+f;s.length<52;)n=.5+i,0===e.length&&t.length&&s.push(t.pop()),0===t.length&&e.length&&s.push(e.pop()),Math.random()>n&&e.length?(s.push(e.pop()),i*=-1):t.length&&(s.push(t.pop()),i*=-1);s.reverse(),r(s),function(e){var t={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13},s=0,i=0;e.map((function(e,n){n<26?s+=t[e.rank]:i+=t[e.rank]}));var n=s-i,c={key:k.length,value:n};v((function(e){return[].concat(Object(o.a)(e),[c])})),A((function(e){return[].concat(Object(o.a)(e),[c.key])}))}(s)},style:{margin:"5px"},children:"Shuffle"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("TEST1").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("TEST1").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(m.jsx)(j.a,{onClick:function(){v([{key:0,value:0}]),A([0]),r(y())},style:{margin:"5px"},children:"Reset"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(O,{AllCards:c})}),Object(m.jsx)("br",{}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[" ",Object(m.jsx)("strong",{children:"Compare Top Half Sum vs Bottom Half Sum"})]}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(w.a,{data:[{type:"line",title:"Top Half Points vs Bottom Half Points",color:"blue",points:k}],keys:C})})]})})},v=function(){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Riffle Split"}),"The Riffle split is probably the most common type of shuffle. To perform this technique, seperate a deck in two and merge both halfs together randomly. The suspicious behavior of this technique is that, if we were to start off with a manufactured deck, then the high cards will always go to the bottom of the deck. Below you can shuffle a sample deck and see where most of the high cards go in the first few shuffles.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("h4",{children:"Riffle Split example"}),Object(m.jsx)("img",{style:{maxWidth:window.screen.width-80},src:"https://fredhohman.com/card-shuffling/static/images/riffle.gif",alt:"classic shuffle gif"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(k,{}),Object(m.jsx)("br",{}),"After a while, the deck does approach a random assortment of cards. Unfortunately, this type of shuffling method is extremely static on the ends of the deck. It doesn't allow new cards on to the top or bottom of the deck. If this is the only method of shuffling used, you will be recycling used cards again and again because the top few cards won't move very far.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"What's worse, is that if you perfect your shuffling skill (slide the bar to 100 and shuffle 100 times), then you will see the deck shuffles through five or six different orientations. This perfect shuffle defeats the purpose entirely of randomness and disables proper card playing.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The solution to these issues are to shuffle more than a handful of times and to shuffle poorly. This way, you'll give every orientation of the deck a chance to exist.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},T=function(){var e=[],t=[],s=Object(i.useState)(y()),n=Object(a.a)(s,2),c=n[0],r=n[1],u=Object(i.useState)(7),b=Object(a.a)(u,2),f=b[0],x=b[1],g=Object(i.useState)([{key:0,value:0}]),p=Object(a.a)(g,2),k=p[0],v=p[1],T=Object(i.useState)([0]),S=Object(a.a)(T,2),C=S[0],A=S[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)("strong",{children:" Shuffle Chunks (Greater is More Clumped) "})}),Object(m.jsx)("br",{}),Object(m.jsx)(h.a,{style:{justifyContent:"center",margin:"30px"},children:Object(m.jsx)(l.a,{onChange:function(e,t){x(t)},defaultValue:7,"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"on",min:4,max:10})}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[Object(m.jsx)(j.a,{id:"TEST2",onClick:function(){e=c.splice(0,52);for(var s=[],i=f;s.length<52;)if(e.length<=i&&(e.reverse(),e.map((function(e){return s.unshift(e)}))),e.length>i){var n=Math.random();(t=n<.5?e.splice(0,i-1):e.splice(0,i+1)).reverse(),t.map((function(e){return s.unshift(e)}))}r(s),function(e){var t={A:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13},s=0,i=0;e.map((function(e,n){n<26?s+=t[e.rank]:i+=t[e.rank]}));var n=s-i,c={key:k.length,value:n};v((function(e){return[].concat(Object(o.a)(e),[c])})),A((function(e){return[].concat(Object(o.a)(e),[c.key])}))}(s)},style:{margin:"5px"},children:"Shuffle"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("TEST2").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("TEST2").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(m.jsx)(j.a,{onClick:function(){v([{key:0,value:0}]),A([0]),r(y())},style:{margin:"5px"},children:"Reset"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(O,{AllCards:c})}),Object(m.jsx)("br",{}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[" ",Object(m.jsx)("strong",{children:"Compare Top Half Sum vs Bottom Half Sum"})]}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(w.a,{data:[{type:"line",title:"Top Half Points vs Bottom Half Points",color:"red",points:k}],keys:C})})]})})},S=function(){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Overhand Shuffle"}),"The Overhand shuffle is probably the second most common type of shuffle. The behavior of this shuffling technique is that the cards are severely clumped together. You could predict what cards your opponent has due to the clumping of cards. Below you can shuffle a sample deck and see how little the deck has actually been shuffled after an ",Object(m.jsx)("strong",{children:"EVEN"})," number of shuffles.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("img",{style:{maxWidth:window.screen.width-80},src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/375ce685-c00c-4f3b-a467-1f6a38391fdd/d88npqq-2a2c5683-2253-4d20-8bbb-371f378b0795.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3NWNlNjg1LWMwMGMtNGYzYi1hNDY3LTFmNmEzODM5MWZkZFwvZDg4bnBxcS0yYTJjNTY4My0yMjUzLTRkMjAtOGJiYi0zNzFmMzc4YjA3OTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gnxKmUMykmQHwBbIMxTPrpNehQVE6G868fhqUS_PQtc",alt:"overhand shuffle gif"})}),Object(m.jsx)("br",{}),Object(m.jsx)(T,{}),Object(m.jsx)("br",{}),"This shuffle is, by far, worse that the Riffle split because it isn't moving more than a few cards at a time. The position of a card and it's neighbors will not vary half the time. Even if we were to shuffle hundreds and hundreds of times (Shuffle 100), there is still a high card bias with every other shuffle. So depending on the number of times you shuffle (Even VS. Odd number of times), you may or may not play with many high cards.",Object(m.jsx)("br",{})]})},C=function(e){var t=e.AllCards,s={S:b,D:f,H:u,C:x};return Object(m.jsx)("div",{children:window.screen.width>1100?Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{children:t.slice(0,13).map((function(e,t){return Object(m.jsxs)(d.a,{id:e.rank+e.suit,style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(13,26).map((function(e,t){return Object(m.jsxs)(d.a,{id:e.rank+e.suit,style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(26,39).map((function(e,t){return Object(m.jsxs)(d.a,{id:e.rank+e.suit,style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(39,52).map((function(e,t){return Object(m.jsxs)(d.a,{id:e.rank+e.suit,style:{border:"solid",width:90,height:100,borderRadius:10},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{children:t.slice(0,13).map((function(e,t){return Object(m.jsxs)("rect",{id:e.rank+e.suit,style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(13,26).map((function(e,t){return Object(m.jsxs)("rect",{id:e.rank+e.suit,style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(26,39).map((function(e,t){return Object(m.jsxs)("rect",{id:e.rank+e.suit,style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))}),Object(m.jsx)(h.a,{children:t.slice(39,52).map((function(e,t){return Object(m.jsxs)("rect",{id:e.rank+e.suit,style:{width:(window.screen.width-80)/13,height:80,border:"solid",borderRadius:4,margin:"1px"},children:[e.rank,Object(m.jsx)("img",{src:s[e.suit],alt:"suit"})]},t)}))})]})})},A=function(){var e=[],t=[],s=Object(i.useState)(y()),n=Object(a.a)(s,2),c=n[0],r=n[1],l=Object(i.useState)(-52),u=Object(a.a)(l,2),b=u[0],f=u[1],x=Object(i.useState)([{key:0,value:-52}]),O=Object(a.a)(x,2),g=O[0],p=O[1],k=Object(i.useState)([0]),v=Object(a.a)(k,2),T=v[0],S=v[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)("strong",{children:"Average is 236 Shuffles"})}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[Object(m.jsx)(j.a,{id:"Test3",onClick:function(){if(function(){var e=52;c.map((function(t,s){"K"===t.rank&&"D"===t.suit&&(e=s)})),f(-e)}(),b<-1){e=c.splice(0,1),t=c.splice(0,51);var s=Math.floor(51*Math.random())+1;t.splice(s,0,e.pop()),r(t),function(){var e={key:g.length,value:b};p((function(t){return[].concat(Object(o.a)(t),[e])})),S((function(t){return[].concat(Object(o.a)(t),[e.key])}))}()}},style:{margin:"5px"},children:"Shuffle"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<11;e++)setTimeout((function(){document.getElementById("Test3").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 10"}),Object(m.jsx)(j.a,{onClick:function(){for(var e=1;e<101;e++)setTimeout((function(){document.getElementById("Test3").click()}),100*e)},style:{margin:"5px"},children:"Shuffle 100"}),Object(m.jsx)(j.a,{onClick:function(){p([{key:0,value:-52}]),S([0]),r(y())},style:{margin:"5px"},children:"Reset"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(C,{AllCards:c})}),Object(m.jsx)("br",{}),Object(m.jsxs)(h.a,{style:{justifyContent:"center"},children:[" ",Object(m.jsx)("strong",{children:"Compare Top Half Sum vs Bottom Half Sum"})]}),Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(w.a,{data:[{type:"line",title:"Position of The King Of Diamonds per Shuffle",color:"green",points:g}],keys:T})})]})})},N=function(){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Low Rise Shuffle"}),'This last shuffle method is one that you probably haven\'t heard of. The technique here is to move the top card into a random spot into the deck. As you progress this shuffle, you will notice that a pre-determined "bottom card" (King of Diamonds) will slowly move up in position. Once the "bottom card" has moved all the way up to the top of the deck, it is safe to say that most of the deck has been shuffled. All that would be left is to move the bottom card into a random position into the deck. This way, you will have truly randomized the deck. Below you can shuffle a sample deck and see how many shuffles it takes to get the bottom King of Diamonds card to the top of the deck.',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(A,{})]})},R=function(){return Object(m.jsx)("div",{style:{textAlign:"center"},children:"This site explores the mathematics behind a standard deck of cards as well some shuffling techniques. The purpose is to teach some simple math expressions and concepts in an approachable way."})},B=function(){return Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("h1",{children:"The Mathematics Behind a Deck of Cards"}),Object(m.jsx)("h3",{children:"By Erick Saenz"}),Object(m.jsx)("br",{}),"***",Object(m.jsx)(R,{}),"***"]})},I=function(){var e=y();return Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(h.a,{style:{justifyContent:"center"},children:Object(m.jsx)(O,{AllCards:e})})})})},M=function(e){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:["One of the few things that my friends and family criticize is the way we shuffle cards. We play a variety of card games, but our shuffling techniques between each game remains the same. Since we were taught how to shuffle decks as children, we never questioned the integrity of the shuffle. In this article, I wanted to put popular shuffling techniques to the test and determine what technique truly randomizes the deck of cards. Below we see the deck that most manufacturers distrubute, but it raises a few questions:",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"1.  What is a good way to measure randomness?",Object(m.jsx)("br",{}),"2. Are all shuffling methods predictable in nature?",Object(m.jsx)("br",{}),"3. Do my shuffles give an equal opportunity for every permutation of card order to exist?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"Standard Deck of Cards"}),Object(m.jsx)(I,{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},W=s(6),D=s.n(W),E=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(D.a.Provider,{options:{tex2jax:{inlineMath:[]}},children:[Object(m.jsx)(D.a.Node,{formula:" \\sum_{n=1}^{52} \\frac{1}{n} "}),Object(m.jsx)("div",{children:"Which is expressed as ..."}),Object(m.jsx)(D.a.Node,{formula:" \\frac{1}{52} + \\frac{1}{51} + \\frac{1}{50} + \\dots  + \\frac{1}{2} + \\frac{1}{1} "}),Object(m.jsx)("div",{children:"Which approximately equals..."}),Object(m.jsx)(D.a.Node,{formula:"\\approx  4.53804\\dots"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},z=function(e){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Determing what is Random "}),"Let's say we are going to play a game with a randomized deck of cards in my hand. We will go through the deck one card at a time and your goal is to guess what card is drawn. If you guess the card correctly, then you will be awarded with $1, and the card will be thrown into a discard pile face up. If you do not guess correctly, then there are no consequences and the card will still be thrown into a discard pile face up.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'Your initial odds of guessing a card correctly would be 1-in-52, then 1-in-51, and so forth until we draw the final card. In theory, you should win about four to five dollars in this game. The math behind this game can be seen below. This expression show tells us that we need to add up the "probability of guessing correctly" per draw:',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(E,{}),"To improve your odds of winning, you could shuffle poorly or predictably. Read further below to understand what shuffling looks like on small and large scales.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},q=function(){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Conclusion"}),"Now that we've seen the different types of shuffles which one should you adopt? In all honesty, every single shuffle has it's drawbacks, For the riffle split, who would want to play with the same few cards from last round? For the overhand shuffle, cheating and predictability is too easy. And as for the Low-Rise shuffle, who has the patience to stab two hundred some cards into a deck? Suppose you had the money or the experience to build/buy such a machine would be intimidating to a family friendly environment.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"What you should try is what I would call the 52-Mashup. To perform this shuffle, drop the cards onto the table face down. Then move the cards around for a few seconds. Once you are done moving them around, put them in a neat stack and start playing. Although childish in nature, its quick, simple, and free. This has worked well enough to prevent cheating, and has seen some popularity amongst casinos.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{style:{maxWidth:window.screen.width-80},src:"https://image.shutterstock.com/image-photo/spread-out-face-down-cards-260nw-1379099099.jpg"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"Thanks for Reading"})]})},J=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(D.a.Provider,{options:{tex2jax:{inlineMath:[]}},children:[Object(m.jsx)(D.a.Node,{formula:"52!"}),Object(m.jsx)("div",{children:"Which is expressed as ..."}),Object(m.jsx)(D.a.Node,{formula:" 52 \\times 51 \\times 50 \\times \\dots \\times 3 \\times 2 \\times 1 "}),window.innerWidth>600?Object(m.jsxs)("div",{children:["Which equals ...",Object(m.jsx)(D.a.Node,{formula:"= 80658175170943878571660636856403766975289505440883277824000000000000"})]}):Object(m.jsxs)("div",{children:["Which approximately equals ...",Object(m.jsx)(D.a.Node,{formula:"= 8.06 \\times10^{67}"})]}),Object(m.jsx)("div",{children:'Also known as "that big number"'})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},Y=function(){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:["{ A, B, C }",Object(m.jsx)("br",{}),"{ A, C, B }",Object(m.jsx)("br",{}),"{ B, A, C }",Object(m.jsx)("br",{}),"{ B, C, A }",Object(m.jsx)("br",{}),"{ C, A, B }",Object(m.jsx)("br",{}),"{ C, B, A }"]})},H=function(e){return Object(m.jsxs)("div",{className:"m-3",style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"Every deck permutation "}),"The odds of you playing with the same deck twice is nearly impossible. Even though there are, what seem to be, an infinite set of deck arrangements, we can still tailor a game to our advangate. To understand what I mean by infinite arrangements, lets take a look at a deck made up by 3 cards first.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"Deck consists of three face cards A, B, C"}),Object(m.jsx)("br",{}),Object(m.jsx)(Y,{}),Object(m.jsx)("br",{}),"Unfortunately, the english language only has ",Object(m.jsx)("strong",{children:"26"})," letters, therfore, showing every permutation of ",Object(m.jsx)("strong",{children:"52"})," cards this way, would be impossible and time consuming.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The Math expression for this factorial is seen below.",Object(m.jsx)(J,{}),"That big number above is the total number of deck orientations that you could possibly play with, therfore leading to a new game every time. Seeing how we tend to start with a ",Object(m.jsx)("strong",{children:"manugactured deck"}),", which has a one-in-that-big-number chance of being used, is given to us, I wanted to make sure we give all other deck orientations a chance of being played with.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"So how should we shuffle then?"]})},L=function(){var e=Object(i.useState)(window.innerWidth),t=Object(a.a)(e,2),s=t[0],n=t[1];return window.addEventListener("resize",(function(){n(this.window.innerWidth)})),Object(m.jsx)("div",{style:{justifyContent:"center",display:"flex",marginTop:"30px"},children:s>990?Object(m.jsxs)("div",{className:"d-none d-lg-block",style:{maxWidth:"1100px"},children:[Object(m.jsx)(B,{}),Object(m.jsx)(M,{}),Object(m.jsx)(z,{}),Object(m.jsx)(H,{}),Object(m.jsx)(v,{}),Object(m.jsx)(S,{}),Object(m.jsx)(N,{}),Object(m.jsx)(q,{})]}):Object(m.jsxs)("div",{className:"d-lg-none",style:{maxWidth:window.screen.width-50},children:[Object(m.jsx)(B,{}),Object(m.jsx)(M,{}),Object(m.jsx)(z,{}),Object(m.jsx)(H,{}),Object(m.jsx)(v,{}),Object(m.jsx)(S,{}),Object(m.jsx)(N,{}),Object(m.jsx)(q,{})]})})},Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,82)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),Q()}},[[67,1,2]]]);
//# sourceMappingURL=main.76f6935f.chunk.js.map