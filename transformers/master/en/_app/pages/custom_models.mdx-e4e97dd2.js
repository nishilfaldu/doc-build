import{S as Hs,i as Ss,s as Ds,e as r,k as m,w as y,t as i,R as Ns,c as n,d as o,m as d,a as f,x as _,h as a,b as c,F as t,g as l,y as w,q as g,o as $,B as v}from"../chunks/vendor-9daddcfa.js";import{T as zs}from"../chunks/Tip-c0a70391.js";import{I as Rt}from"../chunks/IconCopyLink-a413fd1b.js";import{C as A}from"../chunks/CodeBlock-37b92346.js";import"../chunks/CopyButton-6099fd9d.js";function Is(Ee){let h,C,p,b,x;return{c(){h=r("p"),C=i(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),p=r("code"),b=i("transformers"),x=i(" package.")},l(E){h=n(E,"P",{});var P=f(h);C=a(P,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),p=n(P,"CODE",{});var S=f(p);b=a(S,"transformers"),S.forEach(o),x=a(P," package."),P.forEach(o)},m(E,P){l(E,h,P),t(h,C),t(h,p),t(p,b),t(h,x)},d(E){E&&o(h)}}}function Fs(Ee){let h,C,p,b,x,E,P,S,Do,Be,ae,No,Je,le,zo,Re,re,Io,Ge,q,D,je,B,Fo,Ae,Yo,Ke,u,Lo,Ce,Uo,Bo,Pe,Jo,Ro,Me,Go,Ko,Te,Qo,Vo,xe,Wo,Xo,qe,Zo,et,Qe,J,Ve,M,ot,Oe,tt,st,He,it,at,We,R,Xe,ne,lt,Ze,G,eo,j,Se,rt,nt,fe,ft,mt,De,dt,ht,me,pt,ut,oo,N,to,de,ct,so,he,yt,io,K,ao,z,_t,Ne,wt,gt,lo,Q,ro,T,$t,pe,vt,bt,ze,kt,Et,no,ue,jt,fo,V,mo,ce,At,ho,ye,Ct,po,W,uo,I,Pt,Ie,Mt,Tt,co,_e,xt,yo,X,_o,we,qt,wo,Z,go,ge,Ot,$o,ee,vo,F,Ht,$e,St,Dt,bo,O,Y,Fe,oe,Nt,Ye,zt,ko,L,It,Le,Ft,Yt,Eo,te,jo,U,Lt,Ue,Ut,Bt,Ao,se,Co,ve,Jt,Po;return E=new Rt({}),B=new Rt({}),J=new A({props:{code:`.
\u2514\u2500\u2500 awesome_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration.py
    \u2514\u2500\u2500 modeling.py`,highlighted:`.
\u2514\u2500\u2500 awesome_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling.<span class="hljs-keyword">py</span>`}}),R=new A({props:{code:`from transformers import PretrainedConfig


class AwesomeConfig(PretrainedConfig):
    model_type = "awesome"

    def __init__(self, attribute=1, hidden_size=42, **kwargs):
        self.attribute = attribute
        self.hidden_size = hidden_size
        super().__init__(**kwargs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PretrainedConfig


<span class="hljs-keyword">class</span> <span class="hljs-title class_">AwesomeConfig</span>(<span class="hljs-title class_ inherited__">PretrainedConfig</span>):
    model_type = <span class="hljs-string">&quot;awesome&quot;</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, attribute=<span class="hljs-number">1</span>, hidden_size=<span class="hljs-number">42</span>, **kwargs</span>):
        self.attribute = attribute
        self.hidden_size = hidden_size
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),G=new A({props:{code:`import torch

from transformers import PreTrainedModel

from .configuration import AwesomeConfig


class AwesomeModel(PreTrainedModel):
    config_class = AwesomeConfig
    base_model_prefix = "base"

    def __init__(self, config):
        super().__init__(config)
        self.linear = torch.nn.Linear(config.hidden_size, config.hidden_size)

    def forward(self, x):
        return self.linear(x)`,highlighted:`<span class="hljs-keyword">import</span> torch

<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedModel

<span class="hljs-keyword">from</span> .configuration <span class="hljs-keyword">import</span> AwesomeConfig


<span class="hljs-keyword">class</span> <span class="hljs-title class_">AwesomeModel</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
    config_class = AwesomeConfig
    base_model_prefix = <span class="hljs-string">&quot;base&quot;</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__(config)
        self.linear = torch.nn.Linear(config.hidden_size, config.hidden_size)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, x</span>):
        <span class="hljs-keyword">return</span> self.linear(x)`}}),N=new zs({props:{warning:"&lcub;true}",$$slots:{default:[Is]},$$scope:{ctx:Ee}}}),K=new A({props:{code:`from awesome_model.configuration import AwesomeConfig
from awesome_model.modeling import AwesomeModel`,highlighted:`<span class="hljs-keyword">from</span> awesome_model.configuration <span class="hljs-keyword">import</span> AwesomeConfig
<span class="hljs-keyword">from</span> awesome_model.modeling <span class="hljs-keyword">import</span> AwesomeModel`}}),Q=new A({props:{code:`AwesomeConfig.register_for_auto_class()
AwesomeModel.register_for_auto_class("AutoModel")`,highlighted:`AwesomeConfig.register_for_auto_class()
AwesomeModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)`}}),V=new A({props:{code:`config = AwesomeConfig()
model = AwesomeModel(config)`,highlighted:`config = AwesomeConfig()
model = AwesomeModel(config)`}}),W=new A({props:{code:'model.save_pretrained("save_dir")',highlighted:'model.save_pretrained(<span class="hljs-string">&quot;save_dir&quot;</span>)'}}),X=new A({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),Z=new A({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),ee=new A({props:{code:'model.push_to_hub("model-identifier")',highlighted:'model.push_to_hub(<span class="hljs-string">&quot;model-identifier&quot;</span>)'}}),oe=new Rt({}),te=new A({props:{code:`from transformers import AutoModel

model = AutoModel.from_pretrained("model-checkpoint", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;model-checkpoint&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),se=new A({props:{code:`commit_hash = "b731e5fae6d80a4a775461251c4388886fb7a249"
model = AutoModel.from_pretrained("model-checkpoint", trust_remote_code=True, revision=commit_hash)`,highlighted:`commit_hash = <span class="hljs-string">&quot;b731e5fae6d80a4a775461251c4388886fb7a249&quot;</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;model-checkpoint&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash)`}}),{c(){h=r("meta"),C=m(),p=r("h1"),b=r("a"),x=r("span"),y(E.$$.fragment),P=m(),S=r("span"),Do=i("Sharing custom models"),Be=m(),ae=r("p"),No=i(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Je=m(),le=r("p"),zo=i(`Once you are happy with those tweaks and trained a model you want to share with the community, there are simple steps
to push on the Model Hub not only the weights of your model, but also the code it relies on, so that anyone in the
community can use it, even if it\u2019s not present in the \u{1F917} Transformers library.`),Re=m(),re=r("p"),Io=i("This also applies to configurations and tokenizers (support for feature extractors and processors is coming soon)."),Ge=m(),q=r("h2"),D=r("a"),je=r("span"),y(B.$$.fragment),Fo=m(),Ae=r("span"),Yo=i("Sending the code to the Hub"),Ke=m(),u=r("p"),Lo=i("First, make sure your model is fully defined in a "),Ce=r("code"),Uo=i(".py"),Bo=i(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For instance,
let\u2019s say you have a `),Pe=r("code"),Jo=i("modeling.py"),Ro=i(" file and a "),Me=r("code"),Go=i("configuration.py"),Ko=i(` file in a folder of the current working directory
named `),Te=r("code"),Qo=i("awesome_model"),Vo=i(", and that the modeling file defines an "),xe=r("code"),Wo=i("AwesomeModel"),Xo=i(", the configuration file a "),qe=r("code"),Zo=i("AwesomeConfig"),et=i("."),Qe=m(),y(J.$$.fragment),Ve=m(),M=r("p"),ot=i("The "),Oe=r("code"),tt=i("__init__.py"),st=i(" can be empty, it\u2019s just there so that Python detects "),He=r("code"),it=i("awesome_model"),at=i(` can be use as a module.
Here is an example of what the configuration file could look like:`),We=m(),y(R.$$.fragment),Xe=m(),ne=r("p"),lt=i("and the modeling file could have content like this:"),Ze=m(),y(G.$$.fragment),eo=m(),j=r("p"),Se=r("code"),rt=i("AwesomeModel"),nt=i(" should subclass "),fe=r("a"),ft=i("PreTrainedModel"),mt=i(" and "),De=r("code"),dt=i("AwesomeConfig"),ht=i(" should subclass "),me=r("a"),pt=i("PretrainedConfig"),ut=i(`. The
easiest way to achieve this is to copy the modeling and configuration files of the model closest to the one you\u2019re
coding, and then tweaking them.`),oo=m(),y(N.$$.fragment),to=m(),de=r("p"),ct=i("Note that you can re-use (or subclass) an existing configuration/model."),so=m(),he=r("p"),yt=i("To share your model with the community, follow those steps: first import the custom objects."),io=m(),y(K.$$.fragment),ao=m(),z=r("p"),_t=i("Then you have to tell the library you want to copy the code files of those objects when using the "),Ne=r("code"),wt=i("save_pretrained"),gt=i(`
method and properly register them with a given Auto class (especially for models), just run:`),lo=m(),y(Q.$$.fragment),ro=m(),T=r("p"),$t=i(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),pe=r("a"),vt=i("AutoConfig"),bt=i(`) but it\u2019s different for models. Your custom model could be suitable for sequence classification (in
which case you should do `),ze=r("code"),kt=i('AwesomeModel.register_for_auto_class("AutoModelForSequenceClassification")'),Et=i(`) or any other
task, so you have to specify which one of the auto classes is the correct one for your model.`),no=m(),ue=r("p"),jt=i("Next, just create the config and models as you would any other Transformer models:"),fo=m(),y(V.$$.fragment),mo=m(),ce=r("p"),At=i("then train your model. Alternatively, you could load a pretrained checkpoint you have already trained in your model."),ho=m(),ye=r("p"),Ct=i("Once everything is ready, you just have to do:"),po=m(),y(W.$$.fragment),uo=m(),I=r("p"),Pt=i(`which will not only save the model weights and the configuration in json format, but also copy the modeling and
configuration `),Ie=r("code"),Mt=i(".py"),Tt=i(" files in this folder, so you can directly upload the result to the Hub."),co=m(),_e=r("p"),xt=i("If you have already logged in to Hugging face with"),yo=m(),y(X.$$.fragment),_o=m(),we=r("p"),qt=i("or in a notebook with"),wo=m(),y(Z.$$.fragment),go=m(),ge=r("p"),Ot=i("you can push your model and its code to the Hub with the following:"),$o=m(),y(ee.$$.fragment),vo=m(),F=r("p"),Ht=i("See the "),$e=r("a"),St=i("sharing tutorial"),Dt=i(" for more information on the push to Hub method."),bo=m(),O=r("h2"),Y=r("a"),Fe=r("span"),y(oe.$$.fragment),Nt=m(),Ye=r("span"),zt=i("Using a model with custom code"),ko=m(),L=r("p"),It=i(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),Le=r("code"),Ft=i("from_pretrained"),Yt=i(` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Eo=m(),y(te.$$.fragment),jo=m(),U=r("p"),Lt=i("It is also strongly encouraged to pass a commit hash as a "),Ue=r("code"),Ut=i("revision"),Bt=i(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Ao=m(),y(se.$$.fragment),Co=m(),ve=r("p"),Jt=i(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),this.h()},l(e){const s=Ns('[data-svelte="svelte-1phssyn"]',document.head);h=n(s,"META",{name:!0,content:!0}),s.forEach(o),C=d(e),p=n(e,"H1",{class:!0});var ie=f(p);b=n(ie,"A",{id:!0,class:!0,href:!0});var Gt=f(b);x=n(Gt,"SPAN",{});var Kt=f(x);_(E.$$.fragment,Kt),Kt.forEach(o),Gt.forEach(o),P=d(ie),S=n(ie,"SPAN",{});var Qt=f(S);Do=a(Qt,"Sharing custom models"),Qt.forEach(o),ie.forEach(o),Be=d(e),ae=n(e,"P",{});var Vt=f(ae);No=a(Vt,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Vt.forEach(o),Je=d(e),le=n(e,"P",{});var Wt=f(le);zo=a(Wt,`Once you are happy with those tweaks and trained a model you want to share with the community, there are simple steps
to push on the Model Hub not only the weights of your model, but also the code it relies on, so that anyone in the
community can use it, even if it\u2019s not present in the \u{1F917} Transformers library.`),Wt.forEach(o),Re=d(e),re=n(e,"P",{});var Xt=f(re);Io=a(Xt,"This also applies to configurations and tokenizers (support for feature extractors and processors is coming soon)."),Xt.forEach(o),Ge=d(e),q=n(e,"H2",{class:!0});var Mo=f(q);D=n(Mo,"A",{id:!0,class:!0,href:!0});var Zt=f(D);je=n(Zt,"SPAN",{});var es=f(je);_(B.$$.fragment,es),es.forEach(o),Zt.forEach(o),Fo=d(Mo),Ae=n(Mo,"SPAN",{});var os=f(Ae);Yo=a(os,"Sending the code to the Hub"),os.forEach(o),Mo.forEach(o),Ke=d(e),u=n(e,"P",{});var k=f(u);Lo=a(k,"First, make sure your model is fully defined in a "),Ce=n(k,"CODE",{});var ts=f(Ce);Uo=a(ts,".py"),ts.forEach(o),Bo=a(k,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For instance,
let\u2019s say you have a `),Pe=n(k,"CODE",{});var ss=f(Pe);Jo=a(ss,"modeling.py"),ss.forEach(o),Ro=a(k," file and a "),Me=n(k,"CODE",{});var is=f(Me);Go=a(is,"configuration.py"),is.forEach(o),Ko=a(k,` file in a folder of the current working directory
named `),Te=n(k,"CODE",{});var as=f(Te);Qo=a(as,"awesome_model"),as.forEach(o),Vo=a(k,", and that the modeling file defines an "),xe=n(k,"CODE",{});var ls=f(xe);Wo=a(ls,"AwesomeModel"),ls.forEach(o),Xo=a(k,", the configuration file a "),qe=n(k,"CODE",{});var rs=f(qe);Zo=a(rs,"AwesomeConfig"),rs.forEach(o),et=a(k,"."),k.forEach(o),Qe=d(e),_(J.$$.fragment,e),Ve=d(e),M=n(e,"P",{});var be=f(M);ot=a(be,"The "),Oe=n(be,"CODE",{});var ns=f(Oe);tt=a(ns,"__init__.py"),ns.forEach(o),st=a(be," can be empty, it\u2019s just there so that Python detects "),He=n(be,"CODE",{});var fs=f(He);it=a(fs,"awesome_model"),fs.forEach(o),at=a(be,` can be use as a module.
Here is an example of what the configuration file could look like:`),be.forEach(o),We=d(e),_(R.$$.fragment,e),Xe=d(e),ne=n(e,"P",{});var ms=f(ne);lt=a(ms,"and the modeling file could have content like this:"),ms.forEach(o),Ze=d(e),_(G.$$.fragment,e),eo=d(e),j=n(e,"P",{});var H=f(j);Se=n(H,"CODE",{});var ds=f(Se);rt=a(ds,"AwesomeModel"),ds.forEach(o),nt=a(H," should subclass "),fe=n(H,"A",{href:!0});var hs=f(fe);ft=a(hs,"PreTrainedModel"),hs.forEach(o),mt=a(H," and "),De=n(H,"CODE",{});var ps=f(De);dt=a(ps,"AwesomeConfig"),ps.forEach(o),ht=a(H," should subclass "),me=n(H,"A",{href:!0});var us=f(me);pt=a(us,"PretrainedConfig"),us.forEach(o),ut=a(H,`. The
easiest way to achieve this is to copy the modeling and configuration files of the model closest to the one you\u2019re
coding, and then tweaking them.`),H.forEach(o),oo=d(e),_(N.$$.fragment,e),to=d(e),de=n(e,"P",{});var cs=f(de);ct=a(cs,"Note that you can re-use (or subclass) an existing configuration/model."),cs.forEach(o),so=d(e),he=n(e,"P",{});var ys=f(he);yt=a(ys,"To share your model with the community, follow those steps: first import the custom objects."),ys.forEach(o),io=d(e),_(K.$$.fragment,e),ao=d(e),z=n(e,"P",{});var To=f(z);_t=a(To,"Then you have to tell the library you want to copy the code files of those objects when using the "),Ne=n(To,"CODE",{});var _s=f(Ne);wt=a(_s,"save_pretrained"),_s.forEach(o),gt=a(To,`
method and properly register them with a given Auto class (especially for models), just run:`),To.forEach(o),lo=d(e),_(Q.$$.fragment,e),ro=d(e),T=n(e,"P",{});var ke=f(T);$t=a(ke,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),pe=n(ke,"A",{href:!0});var ws=f(pe);vt=a(ws,"AutoConfig"),ws.forEach(o),bt=a(ke,`) but it\u2019s different for models. Your custom model could be suitable for sequence classification (in
which case you should do `),ze=n(ke,"CODE",{});var gs=f(ze);kt=a(gs,'AwesomeModel.register_for_auto_class("AutoModelForSequenceClassification")'),gs.forEach(o),Et=a(ke,`) or any other
task, so you have to specify which one of the auto classes is the correct one for your model.`),ke.forEach(o),no=d(e),ue=n(e,"P",{});var $s=f(ue);jt=a($s,"Next, just create the config and models as you would any other Transformer models:"),$s.forEach(o),fo=d(e),_(V.$$.fragment,e),mo=d(e),ce=n(e,"P",{});var vs=f(ce);At=a(vs,"then train your model. Alternatively, you could load a pretrained checkpoint you have already trained in your model."),vs.forEach(o),ho=d(e),ye=n(e,"P",{});var bs=f(ye);Ct=a(bs,"Once everything is ready, you just have to do:"),bs.forEach(o),po=d(e),_(W.$$.fragment,e),uo=d(e),I=n(e,"P",{});var xo=f(I);Pt=a(xo,`which will not only save the model weights and the configuration in json format, but also copy the modeling and
configuration `),Ie=n(xo,"CODE",{});var ks=f(Ie);Mt=a(ks,".py"),ks.forEach(o),Tt=a(xo," files in this folder, so you can directly upload the result to the Hub."),xo.forEach(o),co=d(e),_e=n(e,"P",{});var Es=f(_e);xt=a(Es,"If you have already logged in to Hugging face with"),Es.forEach(o),yo=d(e),_(X.$$.fragment,e),_o=d(e),we=n(e,"P",{});var js=f(we);qt=a(js,"or in a notebook with"),js.forEach(o),wo=d(e),_(Z.$$.fragment,e),go=d(e),ge=n(e,"P",{});var As=f(ge);Ot=a(As,"you can push your model and its code to the Hub with the following:"),As.forEach(o),$o=d(e),_(ee.$$.fragment,e),vo=d(e),F=n(e,"P",{});var qo=f(F);Ht=a(qo,"See the "),$e=n(qo,"A",{href:!0});var Cs=f($e);St=a(Cs,"sharing tutorial"),Cs.forEach(o),Dt=a(qo," for more information on the push to Hub method."),qo.forEach(o),bo=d(e),O=n(e,"H2",{class:!0});var Oo=f(O);Y=n(Oo,"A",{id:!0,class:!0,href:!0});var Ps=f(Y);Fe=n(Ps,"SPAN",{});var Ms=f(Fe);_(oe.$$.fragment,Ms),Ms.forEach(o),Ps.forEach(o),Nt=d(Oo),Ye=n(Oo,"SPAN",{});var Ts=f(Ye);zt=a(Ts,"Using a model with custom code"),Ts.forEach(o),Oo.forEach(o),ko=d(e),L=n(e,"P",{});var Ho=f(L);It=a(Ho,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),Le=n(Ho,"CODE",{});var xs=f(Le);Ft=a(xs,"from_pretrained"),xs.forEach(o),Yt=a(Ho,` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Ho.forEach(o),Eo=d(e),_(te.$$.fragment,e),jo=d(e),U=n(e,"P",{});var So=f(U);Lt=a(So,"It is also strongly encouraged to pass a commit hash as a "),Ue=n(So,"CODE",{});var qs=f(Ue);Ut=a(qs,"revision"),qs.forEach(o),Bt=a(So,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),So.forEach(o),Ao=d(e),_(se.$$.fragment,e),Co=d(e),ve=n(e,"P",{});var Os=f(ve);Jt=a(Os,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Os.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Ys)),c(b,"id","sharing-custom-models"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#sharing-custom-models"),c(p,"class","relative group"),c(D,"id","sending-the-code-to-the-hub"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#sending-the-code-to-the-hub"),c(q,"class","relative group"),c(fe,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(me,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(pe,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoConfig"),c($e,"href","model_sharing"),c(Y,"id","using-a-model-with-custom-code"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#using-a-model-with-custom-code"),c(O,"class","relative group")},m(e,s){t(document.head,h),l(e,C,s),l(e,p,s),t(p,b),t(b,x),w(E,x,null),t(p,P),t(p,S),t(S,Do),l(e,Be,s),l(e,ae,s),t(ae,No),l(e,Je,s),l(e,le,s),t(le,zo),l(e,Re,s),l(e,re,s),t(re,Io),l(e,Ge,s),l(e,q,s),t(q,D),t(D,je),w(B,je,null),t(q,Fo),t(q,Ae),t(Ae,Yo),l(e,Ke,s),l(e,u,s),t(u,Lo),t(u,Ce),t(Ce,Uo),t(u,Bo),t(u,Pe),t(Pe,Jo),t(u,Ro),t(u,Me),t(Me,Go),t(u,Ko),t(u,Te),t(Te,Qo),t(u,Vo),t(u,xe),t(xe,Wo),t(u,Xo),t(u,qe),t(qe,Zo),t(u,et),l(e,Qe,s),w(J,e,s),l(e,Ve,s),l(e,M,s),t(M,ot),t(M,Oe),t(Oe,tt),t(M,st),t(M,He),t(He,it),t(M,at),l(e,We,s),w(R,e,s),l(e,Xe,s),l(e,ne,s),t(ne,lt),l(e,Ze,s),w(G,e,s),l(e,eo,s),l(e,j,s),t(j,Se),t(Se,rt),t(j,nt),t(j,fe),t(fe,ft),t(j,mt),t(j,De),t(De,dt),t(j,ht),t(j,me),t(me,pt),t(j,ut),l(e,oo,s),w(N,e,s),l(e,to,s),l(e,de,s),t(de,ct),l(e,so,s),l(e,he,s),t(he,yt),l(e,io,s),w(K,e,s),l(e,ao,s),l(e,z,s),t(z,_t),t(z,Ne),t(Ne,wt),t(z,gt),l(e,lo,s),w(Q,e,s),l(e,ro,s),l(e,T,s),t(T,$t),t(T,pe),t(pe,vt),t(T,bt),t(T,ze),t(ze,kt),t(T,Et),l(e,no,s),l(e,ue,s),t(ue,jt),l(e,fo,s),w(V,e,s),l(e,mo,s),l(e,ce,s),t(ce,At),l(e,ho,s),l(e,ye,s),t(ye,Ct),l(e,po,s),w(W,e,s),l(e,uo,s),l(e,I,s),t(I,Pt),t(I,Ie),t(Ie,Mt),t(I,Tt),l(e,co,s),l(e,_e,s),t(_e,xt),l(e,yo,s),w(X,e,s),l(e,_o,s),l(e,we,s),t(we,qt),l(e,wo,s),w(Z,e,s),l(e,go,s),l(e,ge,s),t(ge,Ot),l(e,$o,s),w(ee,e,s),l(e,vo,s),l(e,F,s),t(F,Ht),t(F,$e),t($e,St),t(F,Dt),l(e,bo,s),l(e,O,s),t(O,Y),t(Y,Fe),w(oe,Fe,null),t(O,Nt),t(O,Ye),t(Ye,zt),l(e,ko,s),l(e,L,s),t(L,It),t(L,Le),t(Le,Ft),t(L,Yt),l(e,Eo,s),w(te,e,s),l(e,jo,s),l(e,U,s),t(U,Lt),t(U,Ue),t(Ue,Ut),t(U,Bt),l(e,Ao,s),w(se,e,s),l(e,Co,s),l(e,ve,s),t(ve,Jt),Po=!0},p(e,[s]){const ie={};s&2&&(ie.$$scope={dirty:s,ctx:e}),N.$set(ie)},i(e){Po||(g(E.$$.fragment,e),g(B.$$.fragment,e),g(J.$$.fragment,e),g(R.$$.fragment,e),g(G.$$.fragment,e),g(N.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(W.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(oe.$$.fragment,e),g(te.$$.fragment,e),g(se.$$.fragment,e),Po=!0)},o(e){$(E.$$.fragment,e),$(B.$$.fragment,e),$(J.$$.fragment,e),$(R.$$.fragment,e),$(G.$$.fragment,e),$(N.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(V.$$.fragment,e),$(W.$$.fragment,e),$(X.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(oe.$$.fragment,e),$(te.$$.fragment,e),$(se.$$.fragment,e),Po=!1},d(e){o(h),e&&o(C),e&&o(p),v(E),e&&o(Be),e&&o(ae),e&&o(Je),e&&o(le),e&&o(Re),e&&o(re),e&&o(Ge),e&&o(q),v(B),e&&o(Ke),e&&o(u),e&&o(Qe),v(J,e),e&&o(Ve),e&&o(M),e&&o(We),v(R,e),e&&o(Xe),e&&o(ne),e&&o(Ze),v(G,e),e&&o(eo),e&&o(j),e&&o(oo),v(N,e),e&&o(to),e&&o(de),e&&o(so),e&&o(he),e&&o(io),v(K,e),e&&o(ao),e&&o(z),e&&o(lo),v(Q,e),e&&o(ro),e&&o(T),e&&o(no),e&&o(ue),e&&o(fo),v(V,e),e&&o(mo),e&&o(ce),e&&o(ho),e&&o(ye),e&&o(po),v(W,e),e&&o(uo),e&&o(I),e&&o(co),e&&o(_e),e&&o(yo),v(X,e),e&&o(_o),e&&o(we),e&&o(wo),v(Z,e),e&&o(go),e&&o(ge),e&&o($o),v(ee,e),e&&o(vo),e&&o(F),e&&o(bo),e&&o(O),v(oe),e&&o(ko),e&&o(L),e&&o(Eo),v(te,e),e&&o(jo),e&&o(U),e&&o(Ao),v(se,e),e&&o(Co),e&&o(ve)}}}const Ys={local:"sharing-custom-models",sections:[{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"}],title:"Sharing custom models"};function Ls(Ee,h,C){let{fw:p}=h;return Ee.$$set=b=>{"fw"in b&&C(0,p=b.fw)},[p]}class Ks extends Hs{constructor(h){super();Ss(this,h,Ls,Fs,Ds,{fw:0})}}export{Ks as default,Ys as metadata};
