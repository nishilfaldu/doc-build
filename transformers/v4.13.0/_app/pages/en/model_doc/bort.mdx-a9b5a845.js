import{S as Ze,i as et,s as tt,e as a,k as u,w as Ke,t as i,L as rt,c as o,d as r,m,a as n,x as je,h as s,b as l,J as t,g as f,y as Fe,K as at,q as Qe,o as Ve,B as Xe}from"../../../chunks/vendor-e859c359.js";import{I as Ye}from"../../../chunks/IconCopyLink-5fae3b20.js";function ot(ae){let d,O,c,p,N,T,oe,C,ne,W,w,g,D,B,ie,G,se,H,E,le,R,he,fe,M,$,ce,K,I,J,ue,j,z,me,F,v,_,pe,L,de,ve,be,y,we,q,ge,Ee,Te,k,Be,A,Re,_e,Q,b,ye,P,ke,Ae,x,Pe,xe,V;return T=new Ye({}),B=new Ye({}),{c(){d=a("meta"),O=u(),c=a("h1"),p=a("a"),N=a("span"),Ke(T.$$.fragment),oe=u(),C=a("span"),ne=i("BORT"),W=u(),w=a("h2"),g=a("a"),D=a("span"),Ke(B.$$.fragment),ie=u(),G=a("span"),se=i("Overview"),H=u(),E=a("p"),le=i("The BORT model was proposed in "),R=a("a"),he=i("Optimal Subarchitecture Extraction for BERT"),fe=i(` by
Adrian de Wynter and Daniel J. Perry. It is an optimal subset of architectural parameters for the BERT, which the
authors refer to as \u201CBort\u201D.`),M=u(),$=a("p"),ce=i("The abstract from the paper is the following:"),K=u(),I=a("p"),J=a("em"),ue=i(`We extract an optimal subset of architectural parameters for the BERT architecture from Devlin et al. (2018) by
applying recent breakthroughs in algorithms for neural architecture search. This optimal subset, which we refer to as
\u201CBort\u201D, is demonstrably smaller, having an effective (that is, not counting the embedding layer) size of 5.5% the
original BERT-large architecture, and 16% of the net size. Bort is also able to be pretrained in 288 GPU hours, which
is 1.2% of the time required to pretrain the highest-performing BERT parametric architectural variant, RoBERTa-large
(Liu et al., 2019), and about 33% of that of the world-record, in GPU hours, required to train BERT-large on the same
hardware. It is also 7.9x faster on a CPU, as well as being better performing than other compressed variants of the
architecture, and some of the non-compressed variants: it obtains performance improvements of between 0.3% and 31%,
absolute, with respect to BERT-large, on multiple public natural language understanding (NLU) benchmarks.`),j=u(),z=a("p"),me=i("Tips:"),F=u(),v=a("ul"),_=a("li"),pe=i("BORT\u2019s model architecture is based on BERT, so one can refer to "),L=a("a"),de=i("BERT\u2019s documentation page"),ve=i(` for the
model\u2019s API as well as usage examples.`),be=u(),y=a("li"),we=i("BORT uses the RoBERTa tokenizer instead of the BERT tokenizer, so one can refer to "),q=a("a"),ge=i("RoBERTa\u2019s documentation page"),Ee=i(" for the tokenizer\u2019s API as well as usage examples."),Te=u(),k=a("li"),Be=i("BORT requires a specific fine-tuning algorithm, called "),A=a("a"),Re=i("Agora"),_e=i(` ,
that is sadly not open-sourced yet. It would be very useful for the community, if someone tries to implement the
algorithm to make BORT fine-tuning work.`),Q=u(),b=a("p"),ye=i("This model was contributed by "),P=a("a"),ke=i("stefan-it"),Ae=i(". The original code can be found "),x=a("a"),Pe=i("here"),xe=i("."),this.h()},l(e){const h=rt('[data-svelte="svelte-1phssyn"]',document.head);d=o(h,"META",{name:!0,content:!0}),h.forEach(r),O=m(e),c=o(e,"H1",{class:!0});var X=n(c);p=o(X,"A",{id:!0,class:!0,href:!0});var Oe=n(p);N=o(Oe,"SPAN",{});var $e=n(N);je(T.$$.fragment,$e),$e.forEach(r),Oe.forEach(r),oe=m(X),C=o(X,"SPAN",{});var Ie=n(C);ne=s(Ie,"BORT"),Ie.forEach(r),X.forEach(r),W=m(e),w=o(e,"H2",{class:!0});var Y=n(w);g=o(Y,"A",{id:!0,class:!0,href:!0});var ze=n(g);D=o(ze,"SPAN",{});var Le=n(D);je(B.$$.fragment,Le),Le.forEach(r),ze.forEach(r),ie=m(Y),G=o(Y,"SPAN",{});var qe=n(G);se=s(qe,"Overview"),qe.forEach(r),Y.forEach(r),H=m(e),E=o(e,"P",{});var Z=n(E);le=s(Z,"The BORT model was proposed in "),R=o(Z,"A",{href:!0,rel:!0});var Se=n(R);he=s(Se,"Optimal Subarchitecture Extraction for BERT"),Se.forEach(r),fe=s(Z,` by
Adrian de Wynter and Daniel J. Perry. It is an optimal subset of architectural parameters for the BERT, which the
authors refer to as \u201CBort\u201D.`),Z.forEach(r),M=m(e),$=o(e,"P",{});var Ue=n($);ce=s(Ue,"The abstract from the paper is the following:"),Ue.forEach(r),K=m(e),I=o(e,"P",{});var Ne=n(I);J=o(Ne,"EM",{});var Ce=n(J);ue=s(Ce,`We extract an optimal subset of architectural parameters for the BERT architecture from Devlin et al. (2018) by
applying recent breakthroughs in algorithms for neural architecture search. This optimal subset, which we refer to as
\u201CBort\u201D, is demonstrably smaller, having an effective (that is, not counting the embedding layer) size of 5.5% the
original BERT-large architecture, and 16% of the net size. Bort is also able to be pretrained in 288 GPU hours, which
is 1.2% of the time required to pretrain the highest-performing BERT parametric architectural variant, RoBERTa-large
(Liu et al., 2019), and about 33% of that of the world-record, in GPU hours, required to train BERT-large on the same
hardware. It is also 7.9x faster on a CPU, as well as being better performing than other compressed variants of the
architecture, and some of the non-compressed variants: it obtains performance improvements of between 0.3% and 31%,
absolute, with respect to BERT-large, on multiple public natural language understanding (NLU) benchmarks.`),Ce.forEach(r),Ne.forEach(r),j=m(e),z=o(e,"P",{});var De=n(z);me=s(De,"Tips:"),De.forEach(r),F=m(e),v=o(e,"UL",{});var S=n(v);_=o(S,"LI",{});var ee=n(_);pe=s(ee,"BORT\u2019s model architecture is based on BERT, so one can refer to "),L=o(ee,"A",{href:!0});var Ge=n(L);de=s(Ge,"BERT\u2019s documentation page"),Ge.forEach(r),ve=s(ee,` for the
model\u2019s API as well as usage examples.`),ee.forEach(r),be=m(S),y=o(S,"LI",{});var te=n(y);we=s(te,"BORT uses the RoBERTa tokenizer instead of the BERT tokenizer, so one can refer to "),q=o(te,"A",{href:!0});var Je=n(q);ge=s(Je,"RoBERTa\u2019s documentation page"),Je.forEach(r),Ee=s(te," for the tokenizer\u2019s API as well as usage examples."),te.forEach(r),Te=m(S),k=o(S,"LI",{});var re=n(k);Be=s(re,"BORT requires a specific fine-tuning algorithm, called "),A=o(re,"A",{href:!0,rel:!0});var We=n(A);Re=s(We,"Agora"),We.forEach(r),_e=s(re,` ,
that is sadly not open-sourced yet. It would be very useful for the community, if someone tries to implement the
algorithm to make BORT fine-tuning work.`),re.forEach(r),S.forEach(r),Q=m(e),b=o(e,"P",{});var U=n(b);ye=s(U,"This model was contributed by "),P=o(U,"A",{href:!0,rel:!0});var He=n(P);ke=s(He,"stefan-it"),He.forEach(r),Ae=s(U,". The original code can be found "),x=o(U,"A",{href:!0,rel:!0});var Me=n(x);Pe=s(Me,"here"),Me.forEach(r),xe=s(U,"."),U.forEach(r),this.h()},h(){l(d,"name","hf:doc:metadata"),l(d,"content",JSON.stringify(nt)),l(p,"id","bort"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#bort"),l(c,"class","relative group"),l(g,"id","overview"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#overview"),l(w,"class","relative group"),l(R,"href","https://arxiv.org/abs/2010.10499"),l(R,"rel","nofollow"),l(L,"href","/docs/transformers/master/en/bert"),l(q,"href","/docs/transformers/master/en/roberta"),l(A,"href","https://adewynter.github.io/notes/bort_algorithms_and_applications.html#fine-tuning-with-algebraic-topology"),l(A,"rel","nofollow"),l(P,"href","https://huggingface.co/stefan-it"),l(P,"rel","nofollow"),l(x,"href","https://github.com/alexa/bort/"),l(x,"rel","nofollow")},m(e,h){t(document.head,d),f(e,O,h),f(e,c,h),t(c,p),t(p,N),Fe(T,N,null),t(c,oe),t(c,C),t(C,ne),f(e,W,h),f(e,w,h),t(w,g),t(g,D),Fe(B,D,null),t(w,ie),t(w,G),t(G,se),f(e,H,h),f(e,E,h),t(E,le),t(E,R),t(R,he),t(E,fe),f(e,M,h),f(e,$,h),t($,ce),f(e,K,h),f(e,I,h),t(I,J),t(J,ue),f(e,j,h),f(e,z,h),t(z,me),f(e,F,h),f(e,v,h),t(v,_),t(_,pe),t(_,L),t(L,de),t(_,ve),t(v,be),t(v,y),t(y,we),t(y,q),t(q,ge),t(y,Ee),t(v,Te),t(v,k),t(k,Be),t(k,A),t(A,Re),t(k,_e),f(e,Q,h),f(e,b,h),t(b,ye),t(b,P),t(P,ke),t(b,Ae),t(b,x),t(x,Pe),t(b,xe),V=!0},p:at,i(e){V||(Qe(T.$$.fragment,e),Qe(B.$$.fragment,e),V=!0)},o(e){Ve(T.$$.fragment,e),Ve(B.$$.fragment,e),V=!1},d(e){r(d),e&&r(O),e&&r(c),Xe(T),e&&r(W),e&&r(w),Xe(B),e&&r(H),e&&r(E),e&&r(M),e&&r($),e&&r(K),e&&r(I),e&&r(j),e&&r(z),e&&r(F),e&&r(v),e&&r(Q),e&&r(b)}}}const nt={local:"bort",sections:[{local:"overview",title:"Overview"}],title:"BORT"};function it(ae,d,O){let{fw:c}=d;return ae.$$set=p=>{"fw"in p&&O(0,c=p.fw)},[c]}class ht extends Ze{constructor(d){super();et(this,d,it,ot,tt,{fw:0})}}export{ht as default,nt as metadata};
