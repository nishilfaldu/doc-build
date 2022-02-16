import{S as Ba,i as Ra,s as za,e as a,k as p,w as h,t as s,L as Ma,c as o,d as r,m as l,a as n,x as u,h as i,b as m,J as e,g as d,y as g,K as Za,q as v,o as _,B as $}from"../../../chunks/vendor-e859c359.js";import{D as b}from"../../../chunks/Docstring-ade913b3.js";import{I as Ht}from"../../../chunks/IconCopyLink-5fae3b20.js";function Ga(Nt){let S,_e,D,y,Oe,Z,Wt,Ce,Jt,nt,$e,qt,st,Pe,jt,it,A,N,Ie,G,Ut,Te,Qt,pt,k,K,Bt,X,Rt,be,zt,Mt,lt,L,Y,Zt,Ve,Gt,mt,E,ee,Kt,te,Xt,He,Yt,er,tr,re,rr,Ne,ar,or,ct,O,W,We,ae,nr,Je,sr,dt,f,oe,ir,qe,pr,lr,C,je,mr,cr,Ue,dr,fr,Qe,hr,ur,J,Be,gr,vr,Re,_r,$r,Pr,q,ne,br,I,wr,we,Dr,yr,ze,Er,Fr,xr,j,se,Sr,ie,Ar,De,kr,Lr,Or,U,pe,Cr,Me,Ir,ft,F,le,Tr,Ze,Vr,Hr,Q,me,Nr,ce,Wr,ye,Jr,qr,ht,x,de,jr,Ge,Ur,Qr,B,fe,Br,Ke,Rr,ut,w,he,zr,Xe,Mr,Zr,Ye,Gr,Kr,R,ue,Xr,et,Yr,gt,T,z,tt,ge,ea,rt,ta,vt,V,ve,ra,H,aa,Ee,oa,na,at,sa,ia,_t;return Z=new Ht({}),G=new Ht({}),K=new b({props:{name:"class transformers.pipelines.ArgumentHandler",anchor:"transformers.pipelines.ArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L370"}}),Y=new b({props:{name:"class transformers.pipelines.ZeroShotClassificationArgumentHandler",anchor:"transformers.pipelines.ZeroShotClassificationArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/zero_shot_classification.py#L14"}}),ee=new b({props:{name:"class transformers.pipelines.QuestionAnsweringArgumentHandler",anchor:"transformers.pipelines.QuestionAnsweringArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/question_answering.py#L32"}}),ae=new Ht({}),oe=new b({props:{name:"class transformers.PipelineDataFormat",anchor:"transformers.PipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L380",parametersDescription:[{anchor:"transformers.PipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),ne=new b({props:{name:"from\\_str",anchor:"transformers.PipelineDataFormat.from_str",parameters:[{name:"format",val:": str"},{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L458",parametersDescription:[{anchor:"transformers.PipelineDataFormat.from_str.output_path",description:`<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to save the outgoing data.`,name:"output_path"},{anchor:"transformers.PipelineDataFormat.from_str.input_path",description:`<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to look for the input data.`,name:"input_path"},{anchor:"transformers.PipelineDataFormat.from_str.column",description:`<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The column to read.`,name:"column"},{anchor:"transformers.PipelineDataFormat.from_str.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],returnDescription:`
<p>The proper data format.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/internal/pipelines_utils#transformers.PipelineDataFormat"
>PipelineDataFormat</a></p>
`}}),se=new b({props:{name:"save",anchor:"transformers.PipelineDataFormat.save",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L429",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),pe=new b({props:{name:"save\\_binary",anchor:"transformers.PipelineDataFormat.save_binary",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L440",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save_binary.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}],returnDescription:`
<p>Path where the data has been saved.</p>
`,returnType:`
<p><code>str</code></p>
`}}),le=new b({props:{name:"class transformers.CsvPipelineDataFormat",anchor:"transformers.CsvPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L495",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.CsvPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.CsvPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.CsvPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),me=new b({props:{name:"save",anchor:"transformers.CsvPipelineDataFormat.save",parameters:[{name:"data",val:": typing.List[dict]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L525",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>List[dict]</code>) &#x2014; The data to store.",name:"data"}]}}),de=new b({props:{name:"class transformers.JsonPipelineDataFormat",anchor:"transformers.JsonPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L540",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.JsonPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.JsonPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.JsonPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),fe=new b({props:{name:"save",anchor:"transformers.JsonPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L571",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),he=new b({props:{name:"class transformers.PipedPipelineDataFormat",anchor:"transformers.PipedPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L582",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipedPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipedPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipedPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),ue=new b({props:{name:"save",anchor:"transformers.PipedPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L612",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),ge=new Ht({}),ve=new b({props:{name:"class transformers.pipelines.PipelineException",anchor:"transformers.pipelines.PipelineException",parameters:[{name:"task",val:": str"},{name:"model",val:": str"},{name:"reason",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/pipelines/base.py#L353",parametersDescription:[{anchor:"transformers.pipelines.PipelineException.task",description:"<strong>task</strong> (<code>str</code>) &#x2014; The task of the pipeline.",name:"task"},{anchor:"transformers.pipelines.PipelineException.model",description:"<strong>model</strong> (<code>str</code>) &#x2014; The model used by the pipeline.",name:"model"},{anchor:"transformers.pipelines.PipelineException.reason",description:"<strong>reason</strong> (<code>str</code>) &#x2014; The error message to display.",name:"reason"}]}}),{c(){S=a("meta"),_e=p(),D=a("h1"),y=a("a"),Oe=a("span"),h(Z.$$.fragment),Wt=p(),Ce=a("span"),Jt=s("Utilities for pipelines"),nt=p(),$e=a("p"),qt=s("This page lists all the utility functions the library provides for pipelines."),st=p(),Pe=a("p"),jt=s("Most of those are only useful if you are studying the code of the models in the library."),it=p(),A=a("h2"),N=a("a"),Ie=a("span"),h(G.$$.fragment),Ut=p(),Te=a("span"),Qt=s("Argument handling"),pt=p(),k=a("div"),h(K.$$.fragment),Bt=p(),X=a("p"),Rt=s("Base interface for handling arguments for each "),be=a("a"),zt=s("Pipeline"),Mt=s("."),lt=p(),L=a("div"),h(Y.$$.fragment),Zt=p(),Ve=a("p"),Gt=s(`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),mt=p(),E=a("div"),h(ee.$$.fragment),Kt=p(),te=a("p"),Xt=s(`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),He=a("code"),Yt=s("SquadExample"),er=s("."),tr=p(),re=a("p"),rr=s("QuestionAnsweringArgumentHandler manages all the possible to create a "),Ne=a("code"),ar=s("SquadExample"),or=s(` from the
command-line supplied arguments.`),ct=p(),O=a("h2"),W=a("a"),We=a("span"),h(ae.$$.fragment),nr=p(),Je=a("span"),sr=s("Data format"),dt=p(),f=a("div"),h(oe.$$.fragment),ir=p(),qe=a("p"),pr=s(`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),lr=p(),C=a("ul"),je=a("li"),mr=s("JSON"),cr=p(),Ue=a("li"),dr=s("CSV"),fr=p(),Qe=a("li"),hr=s("stdin/stdout (pipe)"),ur=p(),J=a("p"),Be=a("code"),gr=s("PipelineDataFormat"),vr=s(` also includes some utilities to work with multi-columns like mapping from datasets
columns to pipelines keyword arguments through the `),Re=a("code"),_r=s("dataset_kwarg_1=dataset_column_1"),$r=s(" format."),Pr=p(),q=a("div"),h(ne.$$.fragment),br=p(),I=a("p"),wr=s("Creates an instance of the right subclass of "),we=a("a"),Dr=s("PipelineDataFormat"),yr=s(` depending on
`),ze=a("code"),Er=s("format"),Fr=s("."),xr=p(),j=a("div"),h(se.$$.fragment),Sr=p(),ie=a("p"),Ar=s(`Save the provided data object with the representation for the current
`),De=a("a"),kr=s("PipelineDataFormat"),Lr=s("."),Or=p(),U=a("div"),h(pe.$$.fragment),Cr=p(),Me=a("p"),Ir=s("Save the provided data object as a pickle-formatted binary data on the disk."),ft=p(),F=a("div"),h(le.$$.fragment),Tr=p(),Ze=a("p"),Vr=s("Support for pipelines using CSV data format."),Hr=p(),Q=a("div"),h(me.$$.fragment),Nr=p(),ce=a("p"),Wr=s(`Save the provided data object with the representation for the current
`),ye=a("a"),Jr=s("PipelineDataFormat"),qr=s("."),ht=p(),x=a("div"),h(de.$$.fragment),jr=p(),Ge=a("p"),Ur=s("Support for pipelines using JSON file format."),Qr=p(),B=a("div"),h(fe.$$.fragment),Br=p(),Ke=a("p"),Rr=s("Save the provided data object in a json file."),ut=p(),w=a("div"),h(he.$$.fragment),zr=p(),Xe=a("p"),Mr=s("Read data from piped input to the python process. For multi columns data, columns should separated by"),Zr=p(),Ye=a("p"),Gr=s("If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Kr=p(),R=a("div"),h(ue.$$.fragment),Xr=p(),et=a("p"),Yr=s("Print the data."),gt=p(),T=a("h2"),z=a("a"),tt=a("span"),h(ge.$$.fragment),ea=p(),rt=a("span"),ta=s("Utilities"),vt=p(),V=a("div"),h(ve.$$.fragment),ra=p(),H=a("p"),aa=s("Raised by a "),Ee=a("a"),oa=s("Pipeline"),na=s(" when handling "),at=a("strong"),sa=s("call"),ia=s("."),this.h()},l(t){const c=Ma('[data-svelte="svelte-1phssyn"]',document.head);S=o(c,"META",{name:!0,content:!0}),c.forEach(r),_e=l(t),D=o(t,"H1",{class:!0});var $t=n(D);y=o($t,"A",{id:!0,class:!0,href:!0});var pa=n(y);Oe=o(pa,"SPAN",{});var la=n(Oe);u(Z.$$.fragment,la),la.forEach(r),pa.forEach(r),Wt=l($t),Ce=o($t,"SPAN",{});var ma=n(Ce);Jt=i(ma,"Utilities for pipelines"),ma.forEach(r),$t.forEach(r),nt=l(t),$e=o(t,"P",{});var ca=n($e);qt=i(ca,"This page lists all the utility functions the library provides for pipelines."),ca.forEach(r),st=l(t),Pe=o(t,"P",{});var da=n(Pe);jt=i(da,"Most of those are only useful if you are studying the code of the models in the library."),da.forEach(r),it=l(t),A=o(t,"H2",{class:!0});var Pt=n(A);N=o(Pt,"A",{id:!0,class:!0,href:!0});var fa=n(N);Ie=o(fa,"SPAN",{});var ha=n(Ie);u(G.$$.fragment,ha),ha.forEach(r),fa.forEach(r),Ut=l(Pt),Te=o(Pt,"SPAN",{});var ua=n(Te);Qt=i(ua,"Argument handling"),ua.forEach(r),Pt.forEach(r),pt=l(t),k=o(t,"DIV",{class:!0});var bt=n(k);u(K.$$.fragment,bt),Bt=l(bt),X=o(bt,"P",{});var wt=n(X);Rt=i(wt,"Base interface for handling arguments for each "),be=o(wt,"A",{href:!0});var ga=n(be);zt=i(ga,"Pipeline"),ga.forEach(r),Mt=i(wt,"."),wt.forEach(r),bt.forEach(r),lt=l(t),L=o(t,"DIV",{class:!0});var Dt=n(L);u(Y.$$.fragment,Dt),Zt=l(Dt),Ve=o(Dt,"P",{});var va=n(Ve);Gt=i(va,`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),va.forEach(r),Dt.forEach(r),mt=l(t),E=o(t,"DIV",{class:!0});var Fe=n(E);u(ee.$$.fragment,Fe),Kt=l(Fe),te=o(Fe,"P",{});var yt=n(te);Xt=i(yt,`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),He=o(yt,"CODE",{});var _a=n(He);Yt=i(_a,"SquadExample"),_a.forEach(r),er=i(yt,"."),yt.forEach(r),tr=l(Fe),re=o(Fe,"P",{});var Et=n(re);rr=i(Et,"QuestionAnsweringArgumentHandler manages all the possible to create a "),Ne=o(Et,"CODE",{});var $a=n(Ne);ar=i($a,"SquadExample"),$a.forEach(r),or=i(Et,` from the
command-line supplied arguments.`),Et.forEach(r),Fe.forEach(r),ct=l(t),O=o(t,"H2",{class:!0});var Ft=n(O);W=o(Ft,"A",{id:!0,class:!0,href:!0});var Pa=n(W);We=o(Pa,"SPAN",{});var ba=n(We);u(ae.$$.fragment,ba),ba.forEach(r),Pa.forEach(r),nr=l(Ft),Je=o(Ft,"SPAN",{});var wa=n(Je);sr=i(wa,"Data format"),wa.forEach(r),Ft.forEach(r),dt=l(t),f=o(t,"DIV",{class:!0});var P=n(f);u(oe.$$.fragment,P),ir=l(P),qe=o(P,"P",{});var Da=n(qe);pr=i(Da,`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),Da.forEach(r),lr=l(P),C=o(P,"UL",{});var xe=n(C);je=o(xe,"LI",{});var ya=n(je);mr=i(ya,"JSON"),ya.forEach(r),cr=l(xe),Ue=o(xe,"LI",{});var Ea=n(Ue);dr=i(Ea,"CSV"),Ea.forEach(r),fr=l(xe),Qe=o(xe,"LI",{});var Fa=n(Qe);hr=i(Fa,"stdin/stdout (pipe)"),Fa.forEach(r),xe.forEach(r),ur=l(P),J=o(P,"P",{});var ot=n(J);Be=o(ot,"CODE",{});var xa=n(Be);gr=i(xa,"PipelineDataFormat"),xa.forEach(r),vr=i(ot,` also includes some utilities to work with multi-columns like mapping from datasets
columns to pipelines keyword arguments through the `),Re=o(ot,"CODE",{});var Sa=n(Re);_r=i(Sa,"dataset_kwarg_1=dataset_column_1"),Sa.forEach(r),$r=i(ot," format."),ot.forEach(r),Pr=l(P),q=o(P,"DIV",{class:!0});var xt=n(q);u(ne.$$.fragment,xt),br=l(xt),I=o(xt,"P",{});var Se=n(I);wr=i(Se,"Creates an instance of the right subclass of "),we=o(Se,"A",{href:!0});var Aa=n(we);Dr=i(Aa,"PipelineDataFormat"),Aa.forEach(r),yr=i(Se,` depending on
`),ze=o(Se,"CODE",{});var ka=n(ze);Er=i(ka,"format"),ka.forEach(r),Fr=i(Se,"."),Se.forEach(r),xt.forEach(r),xr=l(P),j=o(P,"DIV",{class:!0});var St=n(j);u(se.$$.fragment,St),Sr=l(St),ie=o(St,"P",{});var At=n(ie);Ar=i(At,`Save the provided data object with the representation for the current
`),De=o(At,"A",{href:!0});var La=n(De);kr=i(La,"PipelineDataFormat"),La.forEach(r),Lr=i(At,"."),At.forEach(r),St.forEach(r),Or=l(P),U=o(P,"DIV",{class:!0});var kt=n(U);u(pe.$$.fragment,kt),Cr=l(kt),Me=o(kt,"P",{});var Oa=n(Me);Ir=i(Oa,"Save the provided data object as a pickle-formatted binary data on the disk."),Oa.forEach(r),kt.forEach(r),P.forEach(r),ft=l(t),F=o(t,"DIV",{class:!0});var Ae=n(F);u(le.$$.fragment,Ae),Tr=l(Ae),Ze=o(Ae,"P",{});var Ca=n(Ze);Vr=i(Ca,"Support for pipelines using CSV data format."),Ca.forEach(r),Hr=l(Ae),Q=o(Ae,"DIV",{class:!0});var Lt=n(Q);u(me.$$.fragment,Lt),Nr=l(Lt),ce=o(Lt,"P",{});var Ot=n(ce);Wr=i(Ot,`Save the provided data object with the representation for the current
`),ye=o(Ot,"A",{href:!0});var Ia=n(ye);Jr=i(Ia,"PipelineDataFormat"),Ia.forEach(r),qr=i(Ot,"."),Ot.forEach(r),Lt.forEach(r),Ae.forEach(r),ht=l(t),x=o(t,"DIV",{class:!0});var ke=n(x);u(de.$$.fragment,ke),jr=l(ke),Ge=o(ke,"P",{});var Ta=n(Ge);Ur=i(Ta,"Support for pipelines using JSON file format."),Ta.forEach(r),Qr=l(ke),B=o(ke,"DIV",{class:!0});var Ct=n(B);u(fe.$$.fragment,Ct),Br=l(Ct),Ke=o(Ct,"P",{});var Va=n(Ke);Rr=i(Va,"Save the provided data object in a json file."),Va.forEach(r),Ct.forEach(r),ke.forEach(r),ut=l(t),w=o(t,"DIV",{class:!0});var M=n(w);u(he.$$.fragment,M),zr=l(M),Xe=o(M,"P",{});var Ha=n(Xe);Mr=i(Ha,"Read data from piped input to the python process. For multi columns data, columns should separated by"),Ha.forEach(r),Zr=l(M),Ye=o(M,"P",{});var Na=n(Ye);Gr=i(Na,"If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Na.forEach(r),Kr=l(M),R=o(M,"DIV",{class:!0});var It=n(R);u(ue.$$.fragment,It),Xr=l(It),et=o(It,"P",{});var Wa=n(et);Yr=i(Wa,"Print the data."),Wa.forEach(r),It.forEach(r),M.forEach(r),gt=l(t),T=o(t,"H2",{class:!0});var Tt=n(T);z=o(Tt,"A",{id:!0,class:!0,href:!0});var Ja=n(z);tt=o(Ja,"SPAN",{});var qa=n(tt);u(ge.$$.fragment,qa),qa.forEach(r),Ja.forEach(r),ea=l(Tt),rt=o(Tt,"SPAN",{});var ja=n(rt);ta=i(ja,"Utilities"),ja.forEach(r),Tt.forEach(r),vt=l(t),V=o(t,"DIV",{class:!0});var Vt=n(V);u(ve.$$.fragment,Vt),ra=l(Vt),H=o(Vt,"P",{});var Le=n(H);aa=i(Le,"Raised by a "),Ee=o(Le,"A",{href:!0});var Ua=n(Ee);oa=i(Ua,"Pipeline"),Ua.forEach(r),na=i(Le," when handling "),at=o(Le,"STRONG",{});var Qa=n(at);sa=i(Qa,"call"),Qa.forEach(r),ia=i(Le,"."),Le.forEach(r),Vt.forEach(r),this.h()},h(){m(S,"name","hf:doc:metadata"),m(S,"content",JSON.stringify(Ka)),m(y,"id","utilities-for-pipelines"),m(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(y,"href","#utilities-for-pipelines"),m(D,"class","relative group"),m(N,"id","transformers.pipelines.ArgumentHandler"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#transformers.pipelines.ArgumentHandler"),m(A,"class","relative group"),m(be,"href","/docs/transformers/master/en/main_classes/pipelines#transformers.Pipeline"),m(k,"class","docstring"),m(L,"class","docstring"),m(E,"class","docstring"),m(W,"id","transformers.PipelineDataFormat"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#transformers.PipelineDataFormat"),m(O,"class","relative group"),m(we,"href","/docs/transformers/master/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(q,"class","docstring"),m(De,"href","/docs/transformers/master/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(j,"class","docstring"),m(U,"class","docstring"),m(f,"class","docstring"),m(ye,"href","/docs/transformers/master/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(Q,"class","docstring"),m(F,"class","docstring"),m(B,"class","docstring"),m(x,"class","docstring"),m(R,"class","docstring"),m(w,"class","docstring"),m(z,"id","transformers.pipelines.PipelineException"),m(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(z,"href","#transformers.pipelines.PipelineException"),m(T,"class","relative group"),m(Ee,"href","/docs/transformers/master/en/main_classes/pipelines#transformers.Pipeline"),m(V,"class","docstring")},m(t,c){e(document.head,S),d(t,_e,c),d(t,D,c),e(D,y),e(y,Oe),g(Z,Oe,null),e(D,Wt),e(D,Ce),e(Ce,Jt),d(t,nt,c),d(t,$e,c),e($e,qt),d(t,st,c),d(t,Pe,c),e(Pe,jt),d(t,it,c),d(t,A,c),e(A,N),e(N,Ie),g(G,Ie,null),e(A,Ut),e(A,Te),e(Te,Qt),d(t,pt,c),d(t,k,c),g(K,k,null),e(k,Bt),e(k,X),e(X,Rt),e(X,be),e(be,zt),e(X,Mt),d(t,lt,c),d(t,L,c),g(Y,L,null),e(L,Zt),e(L,Ve),e(Ve,Gt),d(t,mt,c),d(t,E,c),g(ee,E,null),e(E,Kt),e(E,te),e(te,Xt),e(te,He),e(He,Yt),e(te,er),e(E,tr),e(E,re),e(re,rr),e(re,Ne),e(Ne,ar),e(re,or),d(t,ct,c),d(t,O,c),e(O,W),e(W,We),g(ae,We,null),e(O,nr),e(O,Je),e(Je,sr),d(t,dt,c),d(t,f,c),g(oe,f,null),e(f,ir),e(f,qe),e(qe,pr),e(f,lr),e(f,C),e(C,je),e(je,mr),e(C,cr),e(C,Ue),e(Ue,dr),e(C,fr),e(C,Qe),e(Qe,hr),e(f,ur),e(f,J),e(J,Be),e(Be,gr),e(J,vr),e(J,Re),e(Re,_r),e(J,$r),e(f,Pr),e(f,q),g(ne,q,null),e(q,br),e(q,I),e(I,wr),e(I,we),e(we,Dr),e(I,yr),e(I,ze),e(ze,Er),e(I,Fr),e(f,xr),e(f,j),g(se,j,null),e(j,Sr),e(j,ie),e(ie,Ar),e(ie,De),e(De,kr),e(ie,Lr),e(f,Or),e(f,U),g(pe,U,null),e(U,Cr),e(U,Me),e(Me,Ir),d(t,ft,c),d(t,F,c),g(le,F,null),e(F,Tr),e(F,Ze),e(Ze,Vr),e(F,Hr),e(F,Q),g(me,Q,null),e(Q,Nr),e(Q,ce),e(ce,Wr),e(ce,ye),e(ye,Jr),e(ce,qr),d(t,ht,c),d(t,x,c),g(de,x,null),e(x,jr),e(x,Ge),e(Ge,Ur),e(x,Qr),e(x,B),g(fe,B,null),e(B,Br),e(B,Ke),e(Ke,Rr),d(t,ut,c),d(t,w,c),g(he,w,null),e(w,zr),e(w,Xe),e(Xe,Mr),e(w,Zr),e(w,Ye),e(Ye,Gr),e(w,Kr),e(w,R),g(ue,R,null),e(R,Xr),e(R,et),e(et,Yr),d(t,gt,c),d(t,T,c),e(T,z),e(z,tt),g(ge,tt,null),e(T,ea),e(T,rt),e(rt,ta),d(t,vt,c),d(t,V,c),g(ve,V,null),e(V,ra),e(V,H),e(H,aa),e(H,Ee),e(Ee,oa),e(H,na),e(H,at),e(at,sa),e(H,ia),_t=!0},p:Za,i(t){_t||(v(Z.$$.fragment,t),v(G.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(ee.$$.fragment,t),v(ae.$$.fragment,t),v(oe.$$.fragment,t),v(ne.$$.fragment,t),v(se.$$.fragment,t),v(pe.$$.fragment,t),v(le.$$.fragment,t),v(me.$$.fragment,t),v(de.$$.fragment,t),v(fe.$$.fragment,t),v(he.$$.fragment,t),v(ue.$$.fragment,t),v(ge.$$.fragment,t),v(ve.$$.fragment,t),_t=!0)},o(t){_(Z.$$.fragment,t),_(G.$$.fragment,t),_(K.$$.fragment,t),_(Y.$$.fragment,t),_(ee.$$.fragment,t),_(ae.$$.fragment,t),_(oe.$$.fragment,t),_(ne.$$.fragment,t),_(se.$$.fragment,t),_(pe.$$.fragment,t),_(le.$$.fragment,t),_(me.$$.fragment,t),_(de.$$.fragment,t),_(fe.$$.fragment,t),_(he.$$.fragment,t),_(ue.$$.fragment,t),_(ge.$$.fragment,t),_(ve.$$.fragment,t),_t=!1},d(t){r(S),t&&r(_e),t&&r(D),$(Z),t&&r(nt),t&&r($e),t&&r(st),t&&r(Pe),t&&r(it),t&&r(A),$(G),t&&r(pt),t&&r(k),$(K),t&&r(lt),t&&r(L),$(Y),t&&r(mt),t&&r(E),$(ee),t&&r(ct),t&&r(O),$(ae),t&&r(dt),t&&r(f),$(oe),$(ne),$(se),$(pe),t&&r(ft),t&&r(F),$(le),$(me),t&&r(ht),t&&r(x),$(de),$(fe),t&&r(ut),t&&r(w),$(he),$(ue),t&&r(gt),t&&r(T),$(ge),t&&r(vt),t&&r(V),$(ve)}}}const Ka={local:"utilities-for-pipelines",sections:[{local:"transformers.pipelines.ArgumentHandler",title:"Argument handling"},{local:"transformers.PipelineDataFormat",title:"Data format"},{local:"transformers.pipelines.PipelineException",title:"Utilities"}],title:"Utilities for pipelines"};function Xa(Nt,S,_e){let{fw:D}=S;return Nt.$$set=y=>{"fw"in y&&_e(0,D=y.fw)},[D]}class ro extends Ba{constructor(S){super();Ra(this,S,Xa,Ga,za,{fw:0})}}export{ro as default,Ka as metadata};
