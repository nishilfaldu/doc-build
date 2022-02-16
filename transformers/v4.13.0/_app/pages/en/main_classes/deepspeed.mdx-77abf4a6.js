import{S as oW,i as lW,s as rW,e as o,k as u,w as f,t as a,L as pW,c as l,d as t,m as c,a as r,x as d,h as n,b as h,J as s,g as i,y as m,q as _,o as v,B as j}from"../../../chunks/vendor-e859c359.js";import{T as nW}from"../../../chunks/Tip-edc75249.js";import{D as K1}from"../../../chunks/Docstring-ade913b3.js";import{C as g}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as w}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function iW(qn){let y,L;return{c(){y=o("p"),L=a("This section is a must-read")},l(b){y=l(b,"P",{});var $=r(y);L=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,y,$),s(y,L)},d(b){b&&t(y)}}}function uW(qn){let y,L,b,$,hs,F,$n,fs,ds,ot,B;return{c(){y=o("p"),L=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),hs=a(" was run, the "),F=o("code"),$n=a("model"),fs=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=o("code"),ot=a("model.load_state_dict(state_dict)"),B=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(V){y=l(V,"P",{});var Z=r(y);L=n(Z,"Note, that once "),b=l(Z,"CODE",{});var Gr=r(b);$=n(Gr,"load_state_dict_from_zero_checkpoint"),Gr.forEach(t),hs=n(Z," was run, the "),F=l(Z,"CODE",{});var ye=r(F);$n=n(ye,"model"),ye.forEach(t),fs=n(Z,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=l(Z,"CODE",{});var Mr=r(ds);ot=n(Mr,"model.load_state_dict(state_dict)"),Mr.forEach(t),B=n(Z,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),Z.forEach(t)},m(V,Z){i(V,y,Z),s(y,L),s(y,b),s(b,$),s(y,hs),s(y,F),s(F,$n),s(y,fs),s(y,ds),s(ds,ot),s(y,B)},d(V){V&&t(y)}}}function cW(qn){let y,L,b,$,hs,F,$n,fs,ds,ot,B,V,Z,Gr,ye,Mr,BE,J1,O,Lc,VE,YE,Zc,KE,JE,Gc,XE,QE,Mc,eq,sq,Nc,tq,aq,Hc,nq,X1,be,oq,kn,lq,rq,Dn,pq,iq,Q1,Nr,uq,ev,Hr,cq,sv,lt,hq,Pn,fq,dq,tv,rt,On,mq,Wr,_q,vq,jq,U,gq,Fr,wq,yq,Wc,bq,Eq,Fc,qq,$q,Bc,kq,Dq,Br,Pq,Oq,av,Vr,zq,nv,Yr,Tq,ov,Kr,Vc,Aq,lv,Jr,Sq,rv,Xr,zn,xq,Qr,Cq,Iq,pv,ep,Rq,iv,sp,uv,ms,pt,Yc,Tn,Uq,Kc,Lq,cv,tp,hv,_s,it,Jc,An,Zq,Xc,Gq,fv,ap,Mq,dv,Sn,mv,Ee,Nq,Qc,Hq,Wq,eh,Fq,Bq,_v,xn,vv,qe,Vq,Cn,Yq,Kq,In,Jq,Xq,jv,ut,Qq,np,e0,s0,gv,op,t0,wv,lp,a0,yv,Rn,bv,$e,n0,sh,o0,l0,th,r0,p0,Ev,ct,i0,ah,u0,c0,qv,Un,$v,de,h0,nh,f0,d0,oh,m0,_0,lh,v0,kv,rp,j0,Dv,Ln,Pv,ke,g0,rh,w0,y0,ph,b0,E0,Ov,ht,q0,ih,$0,k0,zv,De,D0,uh,P0,O0,Zn,z0,T0,Tv,pp,A0,Av,Gn,Sv,ip,S0,xv,Mn,Cv,up,x0,Iv,Nn,Rv,ft,C0,ch,I0,R0,Uv,dt,U0,hh,L0,Z0,Lv,mt,G0,Hn,M0,N0,Zv,cp,Gv,vs,_t,fh,Wn,H0,dh,W0,Mv,vt,F0,hp,B0,V0,Nv,jt,js,Y0,mh,K0,J0,_h,X0,Q0,e$,me,s$,vh,t$,a$,jh,n$,o$,Fn,l$,r$,Hv,fp,p$,Wv,Bn,Fv,dp,i$,Bv,Vn,Vv,z,u$,gh,c$,h$,wh,f$,d$,yh,m$,_$,bh,v$,j$,Yn,g$,w$,Yv,K,y$,Eh,b$,E$,qh,q$,$$,$h,k$,D$,Kv,gt,P$,kh,O$,z$,Jv,Kn,Xv,wt,T$,Dh,A$,S$,Qv,yt,x$,Jn,C$,I$,ej,mp,sj,gs,bt,Ph,Xn,R$,Oh,U$,tj,Et,L$,_p,Z$,G$,aj,Qn,nj,Pe,M$,zh,N$,H$,eo,W$,F$,oj,vp,B$,lj,qt,Th,V$,Y$,Ah,K$,rj,jp,J$,pj,so,ij,gp,X$,uj,$t,Q$,to,e5,s5,cj,wp,t5,hj,yp,a5,fj,bp,n5,dj,Ep,ao,o5,Sh,l5,r5,mj,no,_j,qp,p5,vj,$p,jj,ws,kt,xh,oo,i5,Ch,u5,gj,Dt,c5,Ih,h5,f5,wj,kp,d5,yj,lo,bj,Pt,m5,Rh,_5,v5,Ej,Dp,j5,qj,Pp,g5,$j,ro,kj,Oe,w5,Uh,y5,b5,Lh,E5,q5,Dj,po,Pj,Ot,$5,Zh,k5,D5,Oj,io,zj,Op,P5,Tj,zt,O5,Gh,z5,T5,Aj,zp,Sj,ys,Tt,Mh,uo,A5,Nh,S5,xj,At,x5,co,C5,I5,Cj,St,R5,ho,U5,L5,Ij,fo,Rj,xt,Z5,Hh,G5,M5,Uj,mo,Lj,Ct,N5,_o,H5,W5,Zj,Tp,F5,Gj,J,B5,Wh,V5,Y5,Fh,K5,J5,Bh,X5,Q5,Mj,vo,Nj,It,e6,Ap,s6,t6,Hj,Sp,Wj,bs,Rt,Vh,jo,a6,Yh,n6,Fj,T,o6,xp,l6,r6,Cp,p6,i6,Kh,u6,c6,Jh,h6,f6,Ip,d6,m6,Bj,Rp,_6,Vj,go,Yj,Up,v6,Kj,wo,Jj,Lp,Xj,Es,Ut,Xh,yo,j6,Qh,g6,Qj,Lt,eg,ze,w6,Zp,y6,b6,Gp,E6,q6,sg,Zt,$6,Mp,k6,D6,tg,Te,P6,ef,O6,z6,Np,T6,A6,ag,Hp,S6,ng,Gt,x6,Wp,C6,I6,og,Mt,sf,R6,U6,bo,L6,Fp,Z6,G6,lg,X,M6,tf,N6,H6,Bp,W6,F6,af,B6,V6,rg,Vp,pg,qs,Nt,nf,Eo,Y6,of,K6,ig,qo,$o,J6,X6,ug,Ae,Q6,lf,e4,s4,ko,t4,a4,cg,Ht,n4,Yp,o4,l4,hg,Kp,r4,fg,Jp,dg,$s,Wt,rf,Do,p4,pf,i4,mg,Xp,u4,_g,Po,vg,Qp,uf,c4,jg,Se,ks,h4,cf,f4,d4,hf,m4,_4,v4,A,ff,j4,g4,df,w4,y4,mf,b4,E4,_f,q4,$4,vf,k4,D4,jf,P4,O4,z4,gf,T4,gg,ei,wg,Ds,Ft,wf,Oo,A4,yf,S4,yg,si,x4,bg,zo,Eg,G,C4,bf,I4,R4,Ef,U4,L4,qf,Z4,G4,$f,M4,N4,qg,xe,H4,kf,W4,F4,Df,B4,V4,$g,ti,Pf,Y4,kg,Bt,To,Of,K4,J4,zf,X4,Q4,Ao,Tf,e8,s8,Af,t8,Dg,S,a8,Sf,n8,o8,xf,l8,r8,Cf,p8,i8,If,u8,c8,Rf,h8,f8,Pg,_e,Uf,d8,m8,Lf,_8,v8,Zf,j8,g8,Og,ai,w8,zg,Ce,So,Gf,y8,b8,Mf,E8,q8,xo,Nf,$8,k8,Hf,D8,P8,Co,Wf,O8,z8,Ff,T8,Tg,Ie,A8,Bf,S8,x8,ni,C8,I8,Ag,Io,Vf,R8,U8,Sg,Q,L8,Yf,Z8,G8,Kf,M8,N8,Jf,H8,W8,xg,oi,Ro,Xf,F8,B8,Qf,V8,Cg,ve,ed,Y8,K8,sd,J8,X8,td,Q8,e7,Ig,Re,s7,ad,t7,a7,nd,n7,o7,Rg,Vt,Uo,l7,od,r7,p7,i7,Lo,u7,ld,c7,h7,Ug,li,Lg,Ps,Yt,rd,Zo,f7,pd,d7,Zg,ri,m7,Gg,pi,_7,Mg,Go,Ng,Kt,v7,id,j7,g7,Hg,Ue,w7,Mo,y7,b7,No,E7,q7,Wg,Jt,$7,ud,k7,D7,Fg,Le,P7,cd,O7,z7,Ho,T7,A7,Bg,ii,Vg,Os,Xt,hd,Wo,S7,fd,x7,Yg,ui,C7,Kg,ci,I7,Jg,Qt,zs,R7,dd,U7,L7,md,Z7,G7,M7,Fo,N7,_d,H7,W7,Xg,Ze,F7,vd,B7,V7,jd,Y7,K7,Qg,hi,ew,Ts,ea,gd,Bo,J7,wd,X7,sw,sa,Q7,yd,e9,s9,tw,Vo,aw,ta,t9,bd,a9,n9,nw,Yo,ow,fi,lw,As,aa,Ed,Ko,o9,qd,l9,rw,na,r9,$d,p9,i9,pw,Jo,iw,oa,u9,kd,c9,h9,uw,Xo,cw,Ss,la,Dd,Qo,f9,Pd,d9,hw,ra,m9,Od,_9,v9,fw,di,j9,dw,pa,g9,zd,w9,y9,mw,mi,_w,xs,ia,Td,el,b9,Ad,E9,vw,Ge,q9,Sd,$9,k9,sl,D9,P9,jw,E,O9,xd,z9,T9,_i,A9,S9,Cd,x9,C9,Id,I9,R9,Rd,U9,L9,Ud,Z9,G9,Ld,M9,N9,Zd,H9,W9,gw,Me,F9,Gd,B9,V9,Md,Y9,K9,ww,tl,yw,vi,J9,bw,ee,al,Nd,X9,Q9,Hd,ek,sk,nl,Wd,tk,ak,Fd,nk,ok,ol,Bd,lk,rk,Vd,pk,ik,ll,Yd,uk,ck,Kd,hk,Ew,ji,fk,qw,gi,dk,$w,rl,kw,ua,mk,wi,_k,vk,Dw,yi,jk,Pw,pl,Ow,se,gk,Jd,wk,yk,Xd,bk,Ek,Qd,qk,$k,zw,bi,Tw,Cs,ca,em,il,kk,sm,Dk,Aw,x,Pk,tm,Ok,zk,am,Tk,Ak,nm,Sk,xk,om,Ck,Ik,ul,Rk,Uk,Sw,Ei,Lk,xw,ha,cl,lm,Zk,Gk,rm,Mk,Nk,Ne,pm,Hk,Wk,im,Fk,Bk,um,Vk,Yk,Cw,D,Kk,cm,Jk,Xk,qi,Qk,eD,hm,sD,tD,fm,aD,nD,dm,oD,lD,mm,rD,pD,Iw,He,iD,_m,uD,cD,vm,hD,fD,Rw,hl,Uw,We,dD,jm,mD,_D,$i,vD,jD,Lw,te,fa,gm,gD,wD,wm,yD,bD,ED,da,ym,qD,$D,bm,kD,DD,PD,Fe,Em,OD,zD,qm,TD,AD,$m,SD,xD,CD,Be,km,ID,RD,Dm,UD,LD,Pm,ZD,GD,Zw,ki,MD,Gw,fl,Mw,ma,ND,Di,HD,WD,Nw,_a,FD,Om,BD,VD,Hw,dl,Ww,M,YD,zm,KD,JD,Tm,XD,QD,Am,eP,sP,Sm,tP,aP,Fw,Pi,Bw,Is,va,xm,ml,nP,Cm,oP,Vw,Oi,lP,Yw,ja,rP,Im,pP,iP,Kw,_l,Jw,ga,uP,vl,cP,hP,Xw,zi,Qw,Rs,wa,Rm,jl,fP,Um,dP,ey,Ti,mP,sy,Ai,_P,ty,gl,ay,Ve,vP,Si,jP,gP,Lm,wP,yP,ny,ya,bP,Zm,EP,qP,oy,xi,$P,ly,wl,ry,ba,kP,Ci,DP,PP,py,Ea,OP,yl,zP,TP,iy,Ii,AP,uy,bl,cy,ae,SP,Ri,xP,CP,Gm,IP,RP,Mm,UP,LP,hy,qa,ZP,Nm,GP,MP,fy,Ui,NP,dy,El,my,$a,HP,Li,WP,FP,_y,ka,BP,ql,VP,YP,vy,Zi,jy,Us,Da,Hm,$l,KP,Wm,JP,gy,Gi,XP,wy,kl,yy,C,QP,Mi,eO,sO,Fm,tO,aO,Bm,nO,oO,Vm,lO,rO,Ym,pO,iO,by,Ni,uO,Ey,Dl,qy,Pa,cO,Hi,hO,fO,$y,Wi,ky,Ls,Oa,Km,Pl,dO,Jm,mO,Dy,Fi,_O,Py,Ol,Oy,Ye,vO,Bi,jO,gO,Xm,wO,yO,zy,Vi,bO,Ty,zl,Ay,za,EO,Yi,qO,$O,Sy,Ki,xy,Zs,Ta,Qm,Tl,kO,e_,DO,Cy,Ji,PO,Iy,Al,Ry,Ke,OO,Xi,zO,TO,s_,AO,SO,Uy,Qi,xO,Ly,Sl,Zy,Aa,CO,eu,IO,RO,Gy,su,My,Gs,Sa,t_,xl,UO,a_,LO,Ny,xa,ZO,n_,GO,MO,Hy,tu,o_,NO,Wy,Ca,HO,l_,WO,FO,Fy,N,BO,r_,VO,YO,p_,KO,JO,i_,XO,QO,u_,ez,sz,By,Cl,Vy,au,c_,tz,Yy,Ia,az,Il,nz,oz,Ky,nu,h_,lz,Jy,ou,rz,Xy,lu,pz,Qy,Rl,e2,Je,iz,f_,uz,cz,d_,hz,fz,s2,Ul,t2,Ra,a2,Ua,dz,m_,mz,_z,n2,La,vz,__,jz,gz,o2,Ll,l2,ru,v_,wz,r2,Xe,yz,j_,bz,Ez,g_,qz,$z,p2,pu,kz,i2,Zl,u2,Za,Dz,w_,Pz,Oz,c2,Gl,h2,Ga,zz,y_,Tz,Az,f2,iu,Sz,d2,Ml,b_,xz,Cz,m2,Qe,Iz,E_,Rz,Uz,q_,Lz,Zz,_2,uu,Gz,v2,Ms,Ma,$_,Nl,Mz,k_,Nz,j2,cu,Hz,g2,hu,Wz,w2,fu,Fz,y2,Ns,Na,D_,Hl,Bz,P_,Vz,b2,Ha,Yz,O_,Kz,Jz,E2,Wl,q2,du,Xz,$2,k,Qz,z_,eT,sT,T_,tT,aT,A_,nT,oT,S_,lT,rT,mu,pT,iT,x_,uT,cT,C_,hT,fT,k2,Fl,D2,Wa,dT,I_,mT,_T,P2,_u,vT,O2,Fa,jT,Bl,gT,wT,z2,ne,yT,R_,bT,ET,U_,qT,$T,vu,kT,DT,T2,Hs,Ba,L_,Vl,PT,Z_,OT,A2,Yl,zT,Kl,TT,S2,Va,AT,G_,ST,xT,x2,ju,CT,C2,Jl,I2,es,IT,M_,RT,UT,N_,LT,ZT,R2,gu,U2,Ws,Ya,H_,Xl,GT,W_,MT,L2,wu,NT,Z2,Ka,HT,yu,WT,FT,G2,Ql,M2,bu,BT,N2,Ja,VT,F_,YT,KT,H2,er,W2,Eu,JT,F2,qu,XT,B2,Fs,Xa,B_,sr,QT,V_,eA,V2,$u,sA,Y2,ku,tA,K2,ss,Y_,K_,aA,nA,J_,je,oA,Du,lA,rA,Pu,pA,iA,Ou,uA,cA,hA,X_,Q_,fA,J2,tr,X2,ge,e1,ar,dA,nr,mA,_A,vA,s1,t1,jA,gA,a1,or,wA,lr,yA,bA,Q2,zu,EA,eb,Qa,Bs,n1,qA,$A,o1,kA,DA,l1,PA,OA,r1,rr,zA,pr,TA,AA,sb,Vs,en,p1,ir,SA,i1,xA,tb,Tu,Au,u1,CA,IA,ab,H,RA,c1,UA,LA,h1,ZA,GA,f1,MA,NA,d1,HA,WA,nb,sn,FA,ur,BA,VA,ob,Ys,tn,m1,cr,YA,_1,KA,lb,ts,Ks,JA,Su,XA,QA,xu,eS,sS,tS,hr,aS,fr,nS,oS,lS,Js,rS,Cu,pS,iS,dr,uS,cS,rb,Iu,pb,Xs,an,v1,mr,hS,j1,fS,ib,as,dS,g1,mS,_S,Ru,vS,jS,ub,nn,gS,Uu,wS,yS,cb,ns,bS,Lu,ES,qS,w1,$S,kS,hb,Zu,DS,fb,_r,db,Gu,PS,mb,vr,_b,Qs,on,y1,jr,OS,b1,zS,vb,q,gr,TS,E1,AS,SS,we,xS,q1,CS,IS,$1,RS,US,k1,LS,ZS,GS,oe,Mu,MS,NS,D1,HS,WS,Nu,FS,BS,P1,VS,YS,KS,os,wr,JS,O1,XS,QS,et,ex,z1,sx,tx,T1,ax,nx,ox,ln,yr,lx,br,rx,A1,px,ix,ux,rn,Er,cx,st,hx,S1,fx,dx,x1,mx,_x,vx,pn,qr,jx,tt,gx,C1,wx,yx,I1,bx,Ex,jb,at,un,R1,$r,qx,U1,$x,gb,le,L1,kr,kx,Dx,Z1,Dr,Px,Ox,G1,Pr,zx,Tx,M1,Or,Ax,wb,Hu,Sx,yb,ls,N1,zr,xx,Cx,H1,Tr,Ix,Rx,W1,Ar,Ux,bb,rs,Lx,Wu,Zx,Gx,Sr,Mx,Nx,Eb;return F=new w({}),Tn=new w({}),An=new w({}),Sn=new g({props:{code:"pip install deepspeed,",highlighted:"pip install deepspeed"}}),xn=new g({props:{code:"pip install transformers[deepspeed],",highlighted:"pip install transformers[deepspeed]"}}),Rn=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log,`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),Un=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())",',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),Ln=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel,`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),Gn=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())",',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),Mn=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))",`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),Nn=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82),",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),Wn=new w({}),Bn=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>,",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),Vn=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json,",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Kn=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1   \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro,`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1   \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),Xn=new w({}),Qn=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1   \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro,`,highlighted:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1   \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),so=new g({props:{code:`{
  "zero_optimization": {
     "stage": 2,
     "offload_optimizer": {
         "device": "cpu",
         "pin_memory": true
     },
     "allgather_partitions": true,
     "allgather_bucket_size": 2e8,
     "reduce_scatter": true,
     "reduce_bucket_size": 2e8,
     "overlap_comm": true,
     "contiguous_gradients": true
  }
},`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
     <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
     <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),no=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...,",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),oo=new w({}),lo=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
# This emulates a launcher in the notebook
import os
os.environ['MASTER_ADDR'] = 'localhost'
os.environ['MASTER_PORT'] = '9994' # modify if RuntimeError: Address already in use
os.environ['RANK'] = "0"
os.environ['LOCAL_RANK'] = "0"
os.environ['WORLD_SIZE'] = "1"

# Now proceed as normal, plus pass the deepspeed config file
training_args = TrainingArguments(..., deepspeed="ds_config_zero3.json")
trainer = Trainer(...)
trainer.train(),`,highlighted:`<span class="hljs-comment"># DeepSpeed requires a distributed environment even when only one process is used.</span>
<span class="hljs-comment"># This emulates a launcher in the notebook</span>
<span class="hljs-keyword">import</span> os
os.environ[<span class="hljs-string">&#x27;MASTER_ADDR&#x27;</span>] = <span class="hljs-string">&#x27;localhost&#x27;</span>
os.environ[<span class="hljs-string">&#x27;MASTER_PORT&#x27;</span>] = <span class="hljs-string">&#x27;9994&#x27;</span> <span class="hljs-comment"># modify if RuntimeError: Address already in use</span>
os.environ[<span class="hljs-string">&#x27;RANK&#x27;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&#x27;LOCAL_RANK&#x27;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&#x27;WORLD_SIZE&#x27;</span>] = <span class="hljs-string">&quot;1&quot;</span>

<span class="hljs-comment"># Now proceed as normal, plus pass the deepspeed config file</span>
training_args = TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;ds_config_zero3.json&quot;</span>)
trainer = Trainer(...)
trainer.train()`}}),ro=new g({props:{code:`%%bash
cat <<'EOT' > ds_config_zero3.json
{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_fp16_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}
EOT,`,highlighted:`%%bash
cat &lt;&lt;<span class="hljs-string">&#x27;EOT&#x27;</span> &gt; ds_config_zero3.json
{
    <span class="hljs-string">&quot;fp16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;loss_scale&quot;</span>: <span class="hljs-number">0</span>,
        <span class="hljs-string">&quot;loss_scale_window&quot;</span>: <span class="hljs-number">1000</span>,
        <span class="hljs-string">&quot;initial_scale_power&quot;</span>: <span class="hljs-number">16</span>,
        <span class="hljs-string">&quot;hysteresis&quot;</span>: <span class="hljs-number">2</span>,
        <span class="hljs-string">&quot;min_loss_scale&quot;</span>: <span class="hljs-number">1</span>
    },

    <span class="hljs-string">&quot;optimizer&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;AdamW&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;betas&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;eps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;weight_decay&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;scheduler&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;WarmupLR&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;warmup_min_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_max_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_num_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;zero_optimization&quot;</span>: {
        <span class="hljs-string">&quot;stage&quot;</span>: <span class="hljs-number">3</span>,
        <span class="hljs-string">&quot;offload_optimizer&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;offload_param&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;overlap_comm&quot;</span>: true,
        <span class="hljs-string">&quot;contiguous_gradients&quot;</span>: true,
        <span class="hljs-string">&quot;sub_group_size&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;reduce_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_prefetch_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_param_persistence_threshold&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_max_live_parameters&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_max_reuse_distance&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span>: true
    },

    <span class="hljs-string">&quot;gradient_accumulation_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;gradient_clipping&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: false
}
EOT`}}),po=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...,`,highlighted:`!git clone https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/huggingface/</span>transformers
!cd transformers; deepspeed examples<span class="hljs-regexp">/pytorch/</span>translation/run_translation.py ...`}}),io=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...,`,highlighted:`%%bash

git clone https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/huggingface/</span>transformers
cd transformers
deepspeed examples<span class="hljs-regexp">/pytorch/</span>translation/run_translation.py ...`}}),uo=new w({}),fo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json',`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),mo=new g({props:{code:"grep -i Lamb $(find . -name '*json'),",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),vo=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),jo=new w({}),go=new g({props:{code:'TrainingArguments(..., deespeed="/path/to/ds_config.json"),',highlighted:'TrainingArguments(..., deespeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),wo=new g({props:{code:`ds_config_dict=dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deespeed=ds_config_dict),`,highlighted:`ds_config_dict=<span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deespeed=ds_config_dict)`}}),yo=new w({}),Lt=new nW({props:{warning:!0,$$slots:{default:[iW]},$$scope:{ctx:qn}}}),Eo=new w({}),Do=new w({}),Po=new g({props:{code:`{
    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 5e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 5e8,
        "contiguous_gradients": true
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Oo=new w({}),zo=new g({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_fp16_weights_on_model_save": true
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Zo=new w({}),Go=new g({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 4,
            "fast_init": false
        },
        "offload_param": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 5,
            "buffer_size": 1e8,
            "max_in_cpu": 1e9
        }
        "aio": {
            "block_size": 262144,
            "queue_depth": 32,
            "thread_count": 1,
            "single_submit": false,
            "overlap_events": true
        }
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_fp16_weights_on_model_save": true
    },
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;fast_init&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;max_in_cpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span>
        <span class="hljs-punctuation">}</span>
        <span class="hljs-attr">&quot;aio&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;block_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">262144</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;queue_depth&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">32</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;thread_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;single_submit&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;overlap_events&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),Wo=new w({}),Bo=new w({}),Vo=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Yo=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Ko=new w({}),Jo=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_fp16_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Xo=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": 1e6,
        "stage3_prefetch_bucket_size": 0.94e6,
        "stage3_param_persistence_threshold": 1e4,
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_fp16_weights_on_model_save": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.94e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e4</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Qo=new w({}),el=new w({}),tl=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": "auto",
         "betas": "auto",
         "eps": "auto",
         "weight_decay": "auto"
       }
   }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),rl=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": 0.001,
         "betas": [0.8, 0.999],
         "eps": 1e-8,
         "weight_decay": 3e-7
       }
   }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),pl=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),il=new w({}),hl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),fl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": 0,
             "warmup_max_lr": 0.001,
             "warmup_num_steps": 1000
         }
     }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),dl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupDecayLR",
         "params": {
             "last_batch_iteration": -1,
             "total_num_steps": "auto",
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;last_batch_iteration&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">-1</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ml=new w({}),_l=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),jl=new w({}),gl=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),wl=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),bl=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
},`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),El=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),$l=new w({}),kl=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Dl=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),Pl=new w({}),Ol=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),zl=new g({props:{code:`{
    "gradient_accumulation_steps": 3
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),Tl=new w({}),Al=new g({props:{code:`{
    "gradient_clipping": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Sl=new g({props:{code:`{
    "gradient_clipping": 1.0
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),xl=new w({}),Cl=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_fp16_weights_on_model_save": true
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Rl=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint
checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir),`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint
checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ul=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint
checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir),`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint
checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ra=new nW({props:{$$slots:{default:[uW]},$$scope:{ctx:qn}}}),Ll=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint
state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir) # already on cpu
model = model.cpu()
model.load_state_dict(state_dict),`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint
state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir) <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),Zl=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*,`,highlighted:`$ <span class="hljs-built_in">ls</span> -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),Gl=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin,",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),Nl=new w({}),Hl=new w({}),Wl=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed
with deepspeed.zero.Init():
   config = T5Config.from_pretrained("t5-small")
   model = T5ForConditionalGeneration(config),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed
<span class="hljs-keyword">with</span> deepspeed.zero.Init():
   config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
   model = T5ForConditionalGeneration(config)`}}),Fl=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments
training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments
training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Vl=new w({}),Jl=new g({props:{code:"tensor([1.], device='cuda:0', dtype=torch.float16, requires_grad=True),",highlighted:'tensor([<span class="hljs-number">1.</span>], device=<span class="hljs-string">&#x27;cuda:0&#x27;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),Xl=new w({}),Ql=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json,",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),er=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config "ro-en" --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix "translate English to Romanian: ",`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),sr=new w({}),tr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")',`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),ir=new w({}),cr=new w({}),mr=new w({}),_r=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, deepspeed

ds_config = { ... } # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config) # keep this object alive
model = AutoModel.from_pretrained("gpt2")
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, deepspeed

ds_config = { ... } <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config) <span class="hljs-comment"># keep this object alive</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),vr=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, AutoConfig, deepspeed

ds_config = { ... } # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config) # keep this object alive
config = AutoConfig.from_pretrained("gpt2")
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoConfig, deepspeed

ds_config = { ... } <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config) <span class="hljs-comment"># keep this object alive</span>
config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),jr=new w({}),gr=new K1({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),wr=new K1({props:{name:"del\\_config\\_sub\\_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L114"}}),yr=new K1({props:{name:"get\\_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L105"}}),Er=new K1({props:{name:"is\\_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L147"}}),qr=new K1({props:{name:"is\\_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L137"}}),$r=new w({}),{c(){y=o("meta"),L=u(),b=o("h1"),$=o("a"),hs=o("span"),f(F.$$.fragment),$n=u(),fs=o("span"),ds=a("DeepSpeed Integration"),ot=u(),B=o("p"),V=o("a"),Z=a("DeepSpeed"),Gr=a(" implements everything described in the "),ye=o("a"),Mr=a("ZeRO paper"),BE=a(". Currently it provides full support for:"),J1=u(),O=o("ol"),Lc=o("li"),VE=a("Optimizer state partitioning (ZeRO stage 1)"),YE=u(),Zc=o("li"),KE=a("Gradient partitioning (ZeRO stage 2)"),JE=u(),Gc=o("li"),XE=a("Parameter partitioning (ZeRO stage 3)"),QE=u(),Mc=o("li"),eq=a("Custom mixed precision training handling"),sq=u(),Nc=o("li"),tq=a("A range of fast CUDA-extension-based optimizers"),aq=u(),Hc=o("li"),nq=a("ZeRO-Offload to CPU and NVMe"),X1=u(),be=o("p"),oq=a("ZeRO-Offload has its own dedicated paper: "),kn=o("a"),lq=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),rq=a(". And NVMe-support is described in the paper "),Dn=o("a"),pq=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),iq=a("."),Q1=u(),Nr=o("p"),uq=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),ev=u(),Hr=o("p"),cq=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),sv=u(),lt=o("p"),hq=a("\u{1F917} Transformers integrates "),Pn=o("a"),fq=a("DeepSpeed"),dq=a(" via 2 options:"),tv=u(),rt=o("ol"),On=o("li"),mq=a("Integration of the core DeepSpeed features via "),Wr=o("a"),_q=a("Trainer"),vq=a(`. This is everything done for you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),jq=u(),U=o("li"),gq=a("If you don\u2019t use "),Fr=o("a"),wq=a("Trainer"),yq=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wc=o("code"),bq=a("from_pretrained"),Eq=a(" and "),Fc=o("code"),qq=a("from_config"),$q=a(` include integration of essential
parts of DeepSpeed like `),Bc=o("code"),kq=a("zero.Init"),Dq=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Br=o("a"),Pq=a("deepspeed-non-trainer-integration"),Oq=a("."),av=u(),Vr=o("p"),zq=a("What is integrated:"),nv=u(),Yr=o("p"),Tq=a("Training:"),ov=u(),Kr=o("ol"),Vc=o("li"),Aq=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),lv=u(),Jr=o("p"),Sq=a("Inference:"),rv=u(),Xr=o("ol"),zn=o("li"),xq=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Qr=o("a"),Cq=a("deepspeed-zero-inference"),Iq=a("."),pv=u(),ep=o("p"),Rq=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),iv=u(),sp=o("a"),uv=u(),ms=o("h2"),pt=o("a"),Yc=o("span"),f(Tn.$$.fragment),Uq=u(),Kc=o("span"),Lq=a("Trainer Deepspeed Integration"),cv=u(),tp=o("a"),hv=u(),_s=o("h3"),it=o("a"),Jc=o("span"),f(An.$$.fragment),Zq=u(),Xc=o("span"),Gq=a("Installation"),fv=u(),ap=o("p"),Mq=a("Install the library via pypi:"),dv=u(),f(Sn.$$.fragment),mv=u(),Ee=o("p"),Nq=a("or via "),Qc=o("code"),Hq=a("transformers"),Wq=a("\u2019 "),eh=o("code"),Fq=a("extras"),Bq=a(":"),_v=u(),f(xn.$$.fragment),vv=u(),qe=o("p"),Vq=a("or find more details on "),Cn=o("a"),Yq=a("the DeepSpeed\u2019s GitHub page"),Kq=a(` and
`),In=o("a"),Jq=a("advanced install"),Xq=a("."),jv=u(),ut=o("p"),Qq=a("If you\u2019re still struggling with the build, first make sure to read "),np=o("a"),e0=a("zero-install-notes"),s0=a("."),gv=u(),op=o("p"),t0=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),wv=u(),lp=o("p"),a0=a("To make a local build for DeepSpeed:"),yv=u(),f(Rn.$$.fragment),bv=u(),$e=o("p"),n0=a("If you intend to use NVMe offload you will need to also include "),sh=o("code"),o0=a("DS_BUILD_AIO=1"),l0=a(` in the instructions above (and also
install `),th=o("em"),r0=a("libaio-dev"),p0=a(" system-wide)."),Ev=u(),ct=o("p"),i0=a("Edit "),ah=o("code"),u0=a("TORCH_CUDA_ARCH_LIST"),c0=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),qv=u(),f(Un.$$.fragment),$v=u(),de=o("p"),h0=a("So if you get "),nh=o("code"),f0=a("8, 6"),d0=a(", then use "),oh=o("code"),m0=a('TORCH_CUDA_ARCH_LIST="8.6"'),_0=a(`. If you have multiple different cards, you can list all
of them like so `),lh=o("code"),v0=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),kv=u(),rp=o("p"),j0=a("If you need to use the same setup on multiple machines, make a binary wheel:"),Dv=u(),f(Ln.$$.fragment),Pv=u(),ke=o("p"),g0=a("it will generate something like "),rh=o("code"),w0=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),y0=a(` which now you can install
as `),ph=o("code"),b0=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),E0=a(" locally or on any other machine."),Ov=u(),ht=o("p"),q0=a("Again, remember to ensure to adjust "),ih=o("code"),$0=a("TORCH_CUDA_ARCH_LIST"),k0=a(" to the target architectures."),zv=u(),De=o("p"),D0=a("You can find the complete list of NVIDIA GPUs and their corresponding "),uh=o("strong"),P0=a("Compute Capabilities"),O0=a(` (same as arch in this
context) `),Zn=o("a"),z0=a("here"),T0=a("."),Tv=u(),pp=o("p"),A0=a("You can check the archs pytorch was built with using:"),Av=u(),f(Gn.$$.fragment),Sv=u(),ip=o("p"),S0=a("Here is how to find out the arch for one of the installed GPU. For example, for GPU 0:"),xv=u(),f(Mn.$$.fragment),Cv=u(),up=o("p"),x0=a("If the output is:"),Iv=u(),f(Nn.$$.fragment),Rv=u(),ft=o("p"),C0=a("then you know that this card\u2019s arch is "),ch=o("code"),I0=a("8.6"),R0=a("."),Uv=u(),dt=o("p"),U0=a("You can also leave "),hh=o("code"),L0=a("TORCH_CUDA_ARCH_LIST"),Z0=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Lv=u(),mt=o("p"),G0=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Hn=o("a"),M0=a("Deepspeed"),N0=a(","),Zv=u(),cp=o("a"),Gv=u(),vs=o("h3"),_t=o("a"),fh=o("span"),f(Wn.$$.fragment),H0=u(),dh=o("span"),W0=a("Deployment with multiple GPUs"),Mv=u(),vt=o("p"),F0=a("To deploy this feature with multiple GPUs adjust the "),hp=o("a"),B0=a("Trainer"),V0=a(` command line arguments as
following:`),Nv=u(),jt=o("ol"),js=o("li"),Y0=a("replace "),mh=o("code"),K0=a("python -m torch.distributed.launch"),J0=a(" with "),_h=o("code"),X0=a("deepspeed"),Q0=a("."),e$=u(),me=o("li"),s$=a("add a new argument "),vh=o("code"),t$=a("--deepspeed ds_config.json"),a$=a(", where "),jh=o("code"),n$=a("ds_config.json"),o$=a(` is the DeepSpeed configuration file as
documented `),Fn=o("a"),l$=a("here"),r$=a(". The file naming is up to you."),Hv=u(),fp=o("p"),p$=a("Therefore, if your original command line looked as following:"),Wv=u(),f(Bn.$$.fragment),Fv=u(),dp=o("p"),i$=a("Now it should be:"),Bv=u(),f(Vn.$$.fragment),Vv=u(),z=o("p"),u$=a("Unlike, "),gh=o("code"),c$=a("torch.distributed.launch"),h$=a(" where you have to specify how many GPUs to use with "),wh=o("code"),f$=a("--nproc_per_node"),d$=a(`, with the
`),yh=o("code"),m$=a("deepspeed"),_$=a(" launcher you don\u2019t have to use the corresponding "),bh=o("code"),v$=a("--num_gpus"),j$=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Yn=o("a"),g$=a("here"),w$=a("."),Yv=u(),K=o("p"),y$=a("In fact, you can continue using "),Eh=o("code"),b$=a("-m torch.distributed.launch"),E$=a(` with DeepSpeed as long as you don\u2019t need to use
`),qh=o("code"),q$=a("deepspeed"),$$=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),$h=o("code"),k$=a("deepspeed"),D$=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Kv=u(),gt=o("p"),P$=a("Here is an example of running "),kh=o("code"),O$=a("run_translation.py"),z$=a(" under DeepSpeed deploying all available GPUs:"),Jv=u(),f(Kn.$$.fragment),Xv=u(),wt=o("p"),T$=a("Note that in the DeepSpeed documentation you are likely to see "),Dh=o("code"),A$=a("--deepspeed --deepspeed_config ds_config.json"),S$=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Qv=u(),yt=o("p"),x$=a("For some practical usage examples, please, see this "),Jn=o("a"),C$=a("post"),I$=a("."),ej=u(),mp=o("a"),sj=u(),gs=o("h3"),bt=o("a"),Ph=o("span"),f(Xn.$$.fragment),R$=u(),Oh=o("span"),U$=a("Deployment with one GPU"),tj=u(),Et=o("p"),L$=a("To deploy DeepSpeed with one GPU adjust the "),_p=o("a"),Z$=a("Trainer"),G$=a(" command line arguments as following:"),aj=u(),f(Qn.$$.fragment),nj=u(),Pe=o("p"),M$=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),zh=o("code"),N$=a("--num_gpus=1"),H$=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),eo=o("a"),W$=a("documentation"),F$=a(" discusses the launcher options."),oj=u(),vp=o("p"),B$=a("Why would you want to use DeepSpeed with just one GPU?"),lj=u(),qt=o("ol"),Th=o("li"),V$=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),Y$=u(),Ah=o("li"),K$=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),rj=u(),jp=o("p"),J$=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),pj=u(),f(so.$$.fragment),ij=u(),gp=o("p"),X$=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),uj=u(),$t=o("p"),Q$=a("For a practical usage example of this type of deployment, please, see this "),to=o("a"),e5=a("post"),s5=a("."),cj=u(),wp=o("p"),t5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),hj=u(),yp=o("p"),a5=a(`<!--- TODO: Benchmark whether we can get better performance out of ZeRO-3 vs. ZeRO-2 on a single GPU, and then
recommend ZeRO-3 config as starting one. \u2014>`),fj=u(),bp=o("p"),n5=a("Notes:"),dj=u(),Ep=o("ul"),ao=o("li"),o5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Sh=o("code"),l5=a("CUDA_VISIBLE_DEVICES"),r5=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),mj=u(),f(no.$$.fragment),_j=u(),qp=o("p"),p5=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),vj=u(),$p=o("a"),jj=u(),ws=o("h3"),kt=o("a"),xh=o("span"),f(oo.$$.fragment),i5=u(),Ch=o("span"),u5=a("Deployment in Notebooks"),gj=u(),Dt=o("p"),c5=a("The problem with running notebook cells as a script is that there is no normal "),Ih=o("code"),h5=a("deepspeed"),f5=a(` launcher to rely on, so
under certain setups we have to emulate it.`),wj=u(),kp=o("p"),d5=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),yj=u(),f(lo.$$.fragment),bj=u(),Pt=o("p"),m5=a("Note: "),Rh=o("code"),_5=a("..."),v5=a(" stands for the normal arguments that you\u2019d pass to the functions."),Ej=u(),Dp=o("p"),j5=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),qj=u(),Pp=o("p"),g5=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),$j=u(),f(ro.$$.fragment),kj=u(),Oe=o("p"),w5=a("If the training script is in a normal file and not in the notebook cells, you can launch "),Uh=o("code"),y5=a("deepspeed"),b5=a(` normally via
shell from a cell. For example, to use `),Lh=o("code"),E5=a("run_translation.py"),q5=a(" you would launch it with:"),Dj=u(),f(po.$$.fragment),Pj=u(),Ot=o("p"),$5=a("or with "),Zh=o("code"),k5=a("%%bash"),D5=a(" magic, where you can write a multi-line code for the shell program to run:"),Oj=u(),f(io.$$.fragment),zj=u(),Op=o("p"),P5=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Tj=u(),zt=o("p"),O5=a("Note: While "),Gh=o("code"),z5=a("%%bash"),T5=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Aj=u(),zp=o("a"),Sj=u(),ys=o("h3"),Tt=o("a"),Mh=o("span"),f(uo.$$.fragment),A5=u(),Nh=o("span"),S5=a("Configuration"),xj=u(),At=o("p"),x5=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),co=o("a"),C5=a("following documentation"),I5=a("."),Cj=u(),St=o("p"),R5=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),ho=o("a"),U5=a(`the DeepSpeedExamples
repo`),L5=a(":"),Ij=u(),f(fo.$$.fragment),Rj=u(),xt=o("p"),Z5=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Hh=o("code"),G5=a(".json"),M5=a(" files with:"),Uj=u(),f(mo.$$.fragment),Lj=u(),Ct=o("p"),N5=a("Some more examples are to be found in the "),_o=o("a"),H5=a("main repo"),W5=a(" as well."),Zj=u(),Tp=o("p"),F5=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Gj=u(),J=o("p"),B5=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Wh=o("code"),V5=a("AdamW"),Y5=a(" optimizer and "),Fh=o("code"),K5=a("WarmupLR"),J5=a(` scheduler and will enable mixed
precision training if `),Bh=o("code"),X5=a("--fp16"),Q5=a(" is passed:"),Mj=u(),f(vo.$$.fragment),Nj=u(),It=o("p"),e6=a("When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=o("a"),s6=a("Trainer"),t6=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Hj=u(),Sp=o("a"),Wj=u(),bs=o("h3"),Rt=o("a"),Vh=o("span"),f(jo.$$.fragment),a6=u(),Yh=o("span"),n6=a("Passing Configuration"),Fj=u(),T=o("p"),o6=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),xp=o("a"),l6=a("Trainer"),r6=a(" via "),Cp=o("a"),p6=a("TrainingArguments"),i6=a(" then for the "),Kh=o("code"),u6=a("deepspeed"),c6=a(` argument you can
pass a nested `),Jh=o("code"),h6=a("dict"),f6=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=o("a"),d6=a("TrainingArguments"),m6=a("."),Bj=u(),Rp=o("p"),_6=a("To summarize you can do:"),Vj=u(),f(go.$$.fragment),Yj=u(),Up=o("p"),v6=a("or:"),Kj=u(),f(wo.$$.fragment),Jj=u(),Lp=o("a"),Xj=u(),Es=o("h3"),Ut=o("a"),Xh=o("span"),f(yo.$$.fragment),j6=u(),Qh=o("span"),g6=a("Shared Configuration"),Qj=u(),f(Lt.$$.fragment),eg=u(),ze=o("p"),w6=a("Some configuration values are required by both the "),Zp=o("a"),y6=a("Trainer"),b6=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=o("a"),E6=a("Trainer"),q6=a(" command line arguments."),sg=u(),Zt=o("p"),$6=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=o("a"),k6=a("Trainer"),D6=a(` do the majority
of configuration for you.`),tg=u(),Te=o("p"),P6=a("Therefore, in the rest of this guide you will find a special configuration value: "),ef=o("code"),O6=a("auto"),z6=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=o("a"),T6=a("Trainer"),A6=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),ag=u(),Hp=o("p"),S6=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),ng=u(),Gt=o("p"),x6=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=o("a"),C6=a("TrainingArguments"),I6=a(" based on that. The steps are:"),og=u(),Mt=o("ol"),sf=o("li"),R6=a("Create or load the DeepSpeed configuration to be used as a master configuration"),U6=u(),bo=o("li"),L6=a("Create the "),Fp=o("a"),Z6=a("TrainingArguments"),G6=a(" object based on these values"),lg=u(),X=o("p"),M6=a("Do note that some values, such as "),tf=o("code"),N6=a("scheduler.params.total_num_steps"),H6=a(` are calculated by
`),Bp=o("a"),W6=a("Trainer"),F6=a(" during "),af=o("code"),B6=a("train"),V6=a(", but you can of course do the math yourself."),rg=u(),Vp=o("a"),pg=u(),qs=o("h3"),Nt=o("a"),nf=o("span"),f(Eo.$$.fragment),Y6=u(),of=o("span"),K6=a("ZeRO"),ig=u(),qo=o("p"),$o=o("a"),J6=a("Zero Redundancy Optimizer (ZeRO)"),X6=a(` is the workhorse of DeepSpeed. It
support 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),ug=u(),Ae=o("p"),Q6=a("The "),lf=o("code"),e4=a("zero_optimization"),s4=a(" section of the configuration file is the most important part ("),ko=o("a"),t4=a("docs"),a4=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),cg=u(),Ht=o("p"),n4=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=o("a"),o4=a("Trainer"),l4=a(` provides
no equivalent command line arguments.`),hg=u(),Kp=o("p"),r4=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),fg=u(),Jp=o("a"),dg=u(),$s=o("h4"),Wt=o("a"),rf=o("span"),f(Do.$$.fragment),p4=u(),pf=o("span"),i4=a("ZeRO-2 Config"),mg=u(),Xp=o("p"),u4=a("The following is an example configuration for ZeRO stage 2:"),_g=u(),f(Po.$$.fragment),vg=u(),Qp=o("p"),uf=o("strong"),c4=a("Performance tuning:"),jg=u(),Se=o("ul"),ks=o("li"),h4=a("enabling "),cf=o("code"),f4=a("offload_optimizer"),d4=a(" should reduce GPU RAM usage (it requires "),hf=o("code"),m4=a('"stage": 2'),_4=a(")"),v4=u(),A=o("li"),ff=o("code"),j4=a('"overlap_comm": true'),g4=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),df=o("code"),w4=a("overlap_comm"),y4=a(` uses 4.5x
the `),mf=o("code"),b4=a("allgather_bucket_size"),E4=a(" and "),_f=o("code"),q4=a("reduce_bucket_size"),$4=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),vf=o("code"),k4=a("5e8 x 2Bytes x 2 x 4.5"),D4=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),jf=o("code"),P4=a("2e8"),O4=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),z4=u(),gf=o("li"),T4=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size,
the slower the communication, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),gg=u(),ei=o("a"),wg=u(),Ds=o("h4"),Ft=o("a"),wf=o("span"),f(Oo.$$.fragment),A4=u(),yf=o("span"),S4=a("ZeRO-3 Config"),yg=u(),si=o("p"),x4=a("The following is an example configuration for ZeRO stage 3:"),bg=u(),f(zo.$$.fragment),Eg=u(),G=o("p"),C4=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),bf=o("code"),I4=a('"device": "cpu"'),R4=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=o("code"),U4=a("none"),L4=a(" instead of "),qf=o("code"),Z4=a("cpu"),G4=a(" for the "),$f=o("code"),M4=a("device"),N4=a(` entry. Offloading to
NVMe is discussed further down.`),qg=u(),xe=o("p"),H4=a("Pinned memory is enabled with "),kf=o("code"),W4=a("pin_memory"),F4=a(" set to "),Df=o("code"),B4=a("true"),V4=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),$g=u(),ti=o("p"),Pf=o("strong"),Y4=a("Performance tuning:"),kg=u(),Bt=o("ul"),To=o("li"),Of=o("code"),K4=a("stage3_max_live_parameters"),J4=a(": "),zf=o("code"),X4=a("1e9"),Q4=u(),Ao=o("li"),Tf=o("code"),e8=a("stage3_max_reuse_distance"),s8=a(": "),Af=o("code"),t8=a("1e9"),Dg=u(),S=o("p"),a8=a("If hitting OOM reduce "),Sf=o("code"),n8=a("stage3_max_live_parameters"),o8=a(" and "),xf=o("code"),l8=a("stage3_max_reuse_distance"),r8=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Cf=o("code"),p8=a("1e9"),i8=a(` would consume ~2GB. The memory is shared by
`),If=o("code"),u8=a("stage3_max_live_parameters"),c8=a(" and "),Rf=o("code"),h8=a("stage3_max_reuse_distance"),f8=a(", so its not additive, its just 2GB total."),Pg=u(),_e=o("p"),Uf=o("code"),d8=a("stage3_max_live_parameters"),m8=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Lf=o("code"),_8=a("stage3_max_reuse_distance"),v8=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Zf=o("code"),j8=a("stage3_max_reuse_distance"),g8=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Og=u(),ai=o("p"),w8=a("The following configuration values depend on the model\u2019s hidden size:"),zg=u(),Ce=o("ul"),So=o("li"),Gf=o("code"),y8=a("reduce_bucket_size"),b8=a(": "),Mf=o("code"),E8=a("hidden_size*hidden_size"),q8=u(),xo=o("li"),Nf=o("code"),$8=a("stage3_prefetch_bucket_size"),k8=a(": "),Hf=o("code"),D8=a("0.9 * hidden_size * hidden_size"),P8=u(),Co=o("li"),Wf=o("code"),O8=a("stage3_param_persistence_threshold"),z8=a(": "),Ff=o("code"),T8=a("10 * hidden_size"),Tg=u(),Ie=o("p"),A8=a("therefore set these values to "),Bf=o("code"),S8=a("auto"),x8=a(" and the "),ni=o("a"),C8=a("Trainer"),I8=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),Ag=u(),Io=o("p"),Vf=o("code"),R8=a("stage3_gather_fp16_weights_on_model_save"),U8=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Sg=u(),Q=o("p"),L8=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Yf=o("code"),Z8=a("allgather_partitions"),G8=a(", "),Kf=o("code"),M8=a("allgather_bucket_size"),N8=a(` and
`),Jf=o("code"),H8=a("reduce_scatter"),W8=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),xg=u(),oi=o("ul"),Ro=o("li"),Xf=o("code"),F8=a("sub_group_size"),B8=a(": "),Qf=o("code"),V8=a("1e9"),Cg=u(),ve=o("p"),ed=o("code"),Y8=a("sub_group_size"),K8=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),sd=o("code"),J8=a("sub_group_size"),X8=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),td=o("code"),Q8=a("sub_group_size"),e7=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Ig=u(),Re=o("p"),s7=a("You can leave "),ad=o("code"),t7=a("sub_group_size"),a7=a(" to its default value of "),nd=o("em"),n7=a("1e9"),o7=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Rg=u(),Vt=o("ol"),Uo=o("li"),l7=a("Running into OOM during optimizer step: Reduce "),od=o("code"),r7=a("sub_group_size"),p7=a(" to reduce memory utilization of temporary buffers"),i7=u(),Lo=o("li"),u7=a("Optimizer Step is taking a long time: Increase "),ld=o("code"),c7=a("sub_group_size"),h7=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Ug=u(),li=o("a"),Lg=u(),Ps=o("h3"),Yt=o("a"),rd=o("span"),f(Zo.$$.fragment),f7=u(),pd=o("span"),d7=a("NVMe Support"),Zg=u(),ri=o("p"),m7=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Gg=u(),pi=o("p"),_7=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Mg=u(),f(Go.$$.fragment),Ng=u(),Kt=o("p"),v7=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),id=o("em"),j7=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),g7=a(")."),Hg=u(),Ue=o("p"),w7=a("Here is the full documentation for offloading "),Mo=o("a"),y7=a("optimizer states"),b7=a(" and "),No=o("a"),E7=a("parameters"),q7=a("."),Wg=u(),Jt=o("p"),$7=a("Make sure that your "),ud=o("code"),k7=a("nvme_path"),D7=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Fg=u(),Le=o("p"),P7=a("In order to figure out the optimal "),cd=o("code"),O7=a("aio"),z7=a(` configuration block you must run a benchmark on your target setup, as
`),Ho=o("a"),T7=a("explained here"),A7=a("."),Bg=u(),ii=o("a"),Vg=u(),Os=o("h4"),Xt=o("a"),hd=o("span"),f(Wo.$$.fragment),S7=u(),fd=o("span"),x7=a("ZeRO-2 vs ZeRO-3 Performance"),Yg=u(),ui=o("p"),C7=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Kg=u(),ci=o("p"),I7=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Jg=u(),Qt=o("ul"),zs=o("li"),R7=a("set "),dd=o("code"),U7=a("stage3_param_persistence_threshold"),L7=a(" to a very large number - larger than the largest parameter, e.g., "),md=o("code"),Z7=a("6 * hidden_size * hidden_size"),G7=a(". This will keep the parameters on the GPUs."),M7=u(),Fo=o("li"),N7=a("turn off "),_d=o("code"),H7=a("offload_params"),W7=a(" since ZeRO-2 doesn\u2019t have that option."),Xg=u(),Ze=o("p"),F7=a("The performance will likely improve significantly with just "),vd=o("code"),B7=a("offload_params"),V7=a(` turned off, even if you don\u2019t change
`),jd=o("code"),Y7=a("stage3_param_persistence_threshold"),K7=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Qg=u(),hi=o("a"),ew=u(),Ts=o("h4"),ea=o("a"),gd=o("span"),f(Bo.$$.fragment),J7=u(),wd=o("span"),X7=a("ZeRO-2 Example"),sw=u(),sa=o("p"),Q7=a("Here is a full ZeRO-2 auto-configuration file "),yd=o("code"),e9=a("ds_config_zero2.json"),s9=a(":"),tw=u(),f(Vo.$$.fragment),aw=u(),ta=o("p"),t9=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),bd=o("code"),a9=a("auto"),n9=a(" settings in it."),nw=u(),f(Yo.$$.fragment),ow=u(),fi=o("a"),lw=u(),As=o("h4"),aa=o("a"),Ed=o("span"),f(Ko.$$.fragment),o9=u(),qd=o("span"),l9=a("ZeRO-3 Example"),rw=u(),na=o("p"),r9=a("Here is a full ZeRO-3 auto-configuration file "),$d=o("code"),p9=a("ds_config_zero3.json"),i9=a(":"),pw=u(),f(Jo.$$.fragment),iw=u(),oa=o("p"),u9=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),kd=o("code"),c9=a("auto"),h9=a(" settings in it."),uw=u(),f(Xo.$$.fragment),cw=u(),Ss=o("h3"),la=o("a"),Dd=o("span"),f(Qo.$$.fragment),f9=u(),Pd=o("span"),d9=a("Optimizer and Scheduler"),hw=u(),ra=o("p"),m9=a("As long as you don\u2019t enable "),Od=o("code"),_9=a("offload_optimizer"),v9=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),fw=u(),di=o("p"),j9=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),dw=u(),pa=o("p"),g9=a("It is possible to use a non-DeepSpeed optimizer when "),zd=o("code"),w9=a("offload_optimizer"),y9=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),mw=u(),mi=o("a"),_w=u(),xs=o("h4"),ia=o("a"),Td=o("span"),f(el.$$.fragment),b9=u(),Ad=o("span"),E9=a("Optimizer"),vw=u(),Ge=o("p"),q9=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Sd=o("code"),$9=a("torch"),k9=a(". The full documentation is "),sl=o("a"),D9=a("here"),P9=a("."),jw=u(),E=o("p"),O9=a("If you don\u2019t configure the "),xd=o("code"),z9=a("optimizer"),T9=a(" entry in the configuration file, the "),_i=o("a"),A9=a("Trainer"),S9=a(` will
automatically set it to `),Cd=o("code"),x9=a("AdamW"),C9=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Id=o("code"),I9=a("--learning_rate"),R9=a(", "),Rd=o("code"),U9=a("--adam_beta1"),L9=a(", "),Ud=o("code"),Z9=a("--adam_beta2"),G9=a(", "),Ld=o("code"),M9=a("--adam_epsilon"),N9=a(" and "),Zd=o("code"),H9=a("--weight_decay"),W9=a("."),gw=u(),Me=o("p"),F9=a("Here is an example of the auto-configured "),Gd=o("code"),B9=a("optimizer"),V9=a(" entry for "),Md=o("code"),Y9=a("AdamW"),K9=a(":"),ww=u(),f(tl.$$.fragment),yw=u(),vi=o("p"),J9=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),bw=u(),ee=o("ul"),al=o("li"),Nd=o("code"),X9=a("lr"),Q9=a(" with the value of "),Hd=o("code"),ek=a("--learning_rate"),sk=u(),nl=o("li"),Wd=o("code"),tk=a("betas"),ak=a(" with the value of "),Fd=o("code"),nk=a("--adam_beta1 --adam_beta2"),ok=u(),ol=o("li"),Bd=o("code"),lk=a("eps"),rk=a(" with the value of "),Vd=o("code"),pk=a("--adam_epsilon"),ik=u(),ll=o("li"),Yd=o("code"),uk=a("weight_decay"),ck=a(" with the value of "),Kd=o("code"),hk=a("--weight_decay"),Ew=u(),ji=o("p"),fk=a("Therefore please remember to tune the shared hyperparameters on the command line."),qw=u(),gi=o("p"),dk=a("You can also set the values explicitly:"),$w=u(),f(rl.$$.fragment),kw=u(),ua=o("p"),mk=a("But then you\u2019re on your own synchronizing the "),wi=o("a"),_k=a("Trainer"),vk=a(` command line arguments and the DeepSpeed
configuration.`),Dw=u(),yi=o("p"),jk=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),Pw=u(),f(pl.$$.fragment),Ow=u(),se=o("p"),gk=a("Similarly to "),Jd=o("code"),wk=a("AdamW"),yk=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Xd=o("code"),bk=a("weight_decay"),Ek=a(" around "),Qd=o("code"),qk=a("0.01"),$k=a("."),zw=u(),bi=o("a"),Tw=u(),Cs=o("h4"),ca=o("a"),em=o("span"),f(il.$$.fragment),kk=u(),sm=o("span"),Dk=a("Scheduler"),Aw=u(),x=o("p"),Pk=a("DeepSpeed supports "),tm=o("code"),Ok=a("LRRangeTest"),zk=a(", "),am=o("code"),Tk=a("OneCycle"),Ak=a(", "),nm=o("code"),Sk=a("WarmupLR"),xk=a(" and "),om=o("code"),Ck=a("WarmupDecayLR"),Ik=a(` learning rate schedulers. The full
documentation is `),ul=o("a"),Rk=a("here"),Uk=a("."),Sw=u(),Ei=o("p"),Lk=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),xw=u(),ha=o("ul"),cl=o("li"),lm=o("code"),Zk=a("WarmupLR"),Gk=a(" via "),rm=o("code"),Mk=a("--lr_scheduler_type constant_with_warmup"),Nk=u(),Ne=o("li"),pm=o("code"),Hk=a("WarmupDecayLR"),Wk=a(" via "),im=o("code"),Fk=a("--lr_scheduler_type linear"),Bk=a(". This is also the default value for "),um=o("code"),Vk=a("--lr_scheduler_type"),Yk=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Cw=u(),D=o("p"),Kk=a("If you don\u2019t configure the "),cm=o("code"),Jk=a("scheduler"),Xk=a(" entry in the configuration file, the "),qi=o("a"),Qk=a("Trainer"),eD=a(` will use
the values of `),hm=o("code"),sD=a("--lr_scheduler_type"),tD=a(", "),fm=o("code"),aD=a("--learning_rate"),nD=a(" and "),dm=o("code"),oD=a("--warmup_steps"),lD=a(" or "),mm=o("code"),rD=a("--warmup_ratio"),pD=a(` to configure a
\u{1F917} Transformers version of it.`),Iw=u(),He=o("p"),iD=a("Here is an example of the auto-configured "),_m=o("code"),uD=a("scheduler"),cD=a(" entry for "),vm=o("code"),hD=a("WarmupLR"),fD=a(":"),Rw=u(),f(hl.$$.fragment),Uw=u(),We=o("p"),dD=a("Since "),jm=o("em"),mD=a("\u201Cauto\u201D"),_D=a(" is used the "),$i=o("a"),vD=a("Trainer"),jD=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Lw=u(),te=o("ul"),fa=o("li"),gm=o("code"),gD=a("warmup_min_lr"),wD=a(" with the value of "),wm=o("code"),yD=a("0"),bD=a("."),ED=u(),da=o("li"),ym=o("code"),qD=a("warmup_max_lr"),$D=a(" with the value of "),bm=o("code"),kD=a("--learning_rate"),DD=a("."),PD=u(),Fe=o("li"),Em=o("code"),OD=a("warmup_num_steps"),zD=a(" with the value of "),qm=o("code"),TD=a("--warmup_steps"),AD=a(" if provided. Otherwise will use "),$m=o("code"),SD=a("--warmup_ratio"),xD=a(`
multiplied by the number of training steps and rounded up.`),CD=u(),Be=o("li"),km=o("code"),ID=a("total_num_steps"),RD=a(" with either the value of "),Dm=o("code"),UD=a("--max_steps"),LD=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Pm=o("code"),ZD=a("WarmupDecayLR"),GD=a(")."),Zw=u(),ki=o("p"),MD=a("You can, of course, take over any or all of the configuration values and set those yourself:"),Gw=u(),f(fl.$$.fragment),Mw=u(),ma=o("p"),ND=a("But then you\u2019re on your own synchronizing the "),Di=o("a"),HD=a("Trainer"),WD=a(` command line arguments and the DeepSpeed
configuration.`),Nw=u(),_a=o("p"),FD=a("For example, for "),Om=o("code"),BD=a("WarmupDecayLR"),VD=a(", you can use the following entry:"),Hw=u(),f(dl.$$.fragment),Ww=u(),M=o("p"),YD=a("and `"),zm=o("code"),KD=a("total_num_steps"),JD=a(", "),Tm=o("code"),XD=a("warmup_max_lr"),QD=a(", "),Am=o("code"),eP=a("warmup_num_steps"),sP=a(" and "),Sm=o("code"),tP=a("total_num_steps"),aP=a(" will be set at loading time."),Fw=u(),Pi=o("a"),Bw=u(),Is=o("h3"),va=o("a"),xm=o("span"),f(ml.$$.fragment),nP=u(),Cm=o("span"),oP=a("fp32 Precision"),Vw=u(),Oi=o("p"),lP=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),Yw=u(),ja=o("p"),rP=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Im=o("code"),pP=a("NaN"),iP=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Kw=u(),f(_l.$$.fragment),Jw=u(),ga=o("p"),uP=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),vl=o("a"),cP=a("TensorFloat-32(TF32) on Ampere devices"),hP=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Xw=u(),zi=o("a"),Qw=u(),Rs=o("h3"),wa=o("a"),Rm=o("span"),f(jl.$$.fragment),fP=u(),Um=o("span"),dP=a("Automatic Mixed Precision"),ey=u(),Ti=o("p"),mP=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),sy=u(),Ai=o("p"),_P=a("To configure pytorch AMP-like mode set:"),ty=u(),f(gl.$$.fragment),ay=u(),Ve=o("p"),vP=a("and the "),Si=o("a"),jP=a("Trainer"),gP=a(` will automatically enable or disable it based on the value of
`),Lm=o("code"),wP=a("args.fp16_backend"),yP=a(". The rest of config values are up to you."),ny=u(),ya=o("p"),bP=a("This mode gets enabled when "),Zm=o("code"),EP=a("--fp16 --fp16_backend amp"),qP=a(" command line args are passed."),oy=u(),xi=o("p"),$P=a("You can also enable/disable this mode explicitly:"),ly=u(),f(wl.$$.fragment),ry=u(),ba=o("p"),kP=a("But then you\u2019re on your own synchronizing the "),Ci=o("a"),DP=a("Trainer"),PP=a(` command line arguments and the DeepSpeed
configuration.`),py=u(),Ea=o("p"),OP=a("Here is the "),yl=o("a"),zP=a("documentation"),TP=a("."),iy=u(),Ii=o("p"),AP=a("To configure apex AMP-like mode set:"),uy=u(),f(bl.$$.fragment),cy=u(),ae=o("p"),SP=a("and the "),Ri=o("a"),xP=a("Trainer"),CP=a(" will automatically configure it based on the values of "),Gm=o("code"),IP=a("args.fp16_backend"),RP=a(` and
`),Mm=o("code"),UP=a("args.fp16_opt_level"),LP=a("."),hy=u(),qa=o("p"),ZP=a("This mode gets enabled when "),Nm=o("code"),GP=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),MP=a(" command line args are passed."),fy=u(),Ui=o("p"),NP=a("You can also configure this mode explicitly:"),dy=u(),f(El.$$.fragment),my=u(),$a=o("p"),HP=a("But then you\u2019re on your own synchronizing the "),Li=o("a"),WP=a("Trainer"),FP=a(` command line arguments and the DeepSpeed
configuration.`),_y=u(),ka=o("p"),BP=a("Here is the "),ql=o("a"),VP=a("documentation"),YP=a("."),vy=u(),Zi=o("a"),jy=u(),Us=o("h3"),Da=o("a"),Hm=o("span"),f($l.$$.fragment),KP=u(),Wm=o("span"),JP=a("Batch Size"),gy=u(),Gi=o("p"),XP=a("To configure batch size, use:"),wy=u(),f(kl.$$.fragment),yy=u(),C=o("p"),QP=a("and the "),Mi=o("a"),eO=a("Trainer"),sO=a(" will automatically set "),Fm=o("code"),tO=a("train_micro_batch_size_per_gpu"),aO=a(` to the value of
`),Bm=o("code"),nO=a("args.per_device_train_batch_size"),oO=a(" and "),Vm=o("code"),lO=a("train_batch_size"),rO=a(" to "),Ym=o("code"),pO=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),iO=a("."),by=u(),Ni=o("p"),uO=a("You can also set the values explicitly:"),Ey=u(),f(Dl.$$.fragment),qy=u(),Pa=o("p"),cO=a("But then you\u2019re on your own synchronizing the "),Hi=o("a"),hO=a("Trainer"),fO=a(` command line arguments and the DeepSpeed
configuration.`),$y=u(),Wi=o("a"),ky=u(),Ls=o("h3"),Oa=o("a"),Km=o("span"),f(Pl.$$.fragment),dO=u(),Jm=o("span"),mO=a("Gradient Accumulation"),Dy=u(),Fi=o("p"),_O=a("To configure gradient accumulation set:"),Py=u(),f(Ol.$$.fragment),Oy=u(),Ye=o("p"),vO=a("and the "),Bi=o("a"),jO=a("Trainer"),gO=a(" will automatically set it to the value of "),Xm=o("code"),wO=a("args.gradient_accumulation_steps"),yO=a("."),zy=u(),Vi=o("p"),bO=a("You can also set the value explicitly:"),Ty=u(),f(zl.$$.fragment),Ay=u(),za=o("p"),EO=a("But then you\u2019re on your own synchronizing the "),Yi=o("a"),qO=a("Trainer"),$O=a(` command line arguments and the DeepSpeed
configuration.`),Sy=u(),Ki=o("a"),xy=u(),Zs=o("h3"),Ta=o("a"),Qm=o("span"),f(Tl.$$.fragment),kO=u(),e_=o("span"),DO=a("Gradient Clipping"),Cy=u(),Ji=o("p"),PO=a("To configure gradient gradient clipping set:"),Iy=u(),f(Al.$$.fragment),Ry=u(),Ke=o("p"),OO=a("and the "),Xi=o("a"),zO=a("Trainer"),TO=a(" will automatically set it to the value of "),s_=o("code"),AO=a("args.max_grad_norm"),SO=a("."),Uy=u(),Qi=o("p"),xO=a("You can also set the value explicitly:"),Ly=u(),f(Sl.$$.fragment),Zy=u(),Aa=o("p"),CO=a("But then you\u2019re on your own synchronizing the "),eu=o("a"),IO=a("Trainer"),RO=a(` command line arguments and the DeepSpeed
configuration.`),Gy=u(),su=o("a"),My=u(),Gs=o("h3"),Sa=o("a"),t_=o("span"),f(xl.$$.fragment),UO=u(),a_=o("span"),LO=a("Getting The Model Weights Out"),Ny=u(),xa=o("p"),ZO=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),n_=o("code"),GO=a("global_step*/*optim_states.pt"),MO=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Hy=u(),tu=o("p"),o_=o("strong"),NO=a("FP16 Weights:"),Wy=u(),Ca=o("p"),HO=a("When a model is saved under ZeRO-2, you end up having the normal "),l_=o("code"),WO=a("pytorch_model.bin"),FO=a(` file with the model weights, but
they are only the fp16 version of the weights.`),Fy=u(),N=o("p"),BO=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),r_=o("code"),VO=a('"stage3_gather_fp16_weights_on_model_save": true'),YO=a(" is required to get the "),p_=o("code"),KO=a("Trainer"),JO=a(` to save the fp16
version of the weights. If this setting is `),i_=o("code"),XO=a("False"),QO=u(),u_=o("code"),ez=a("pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),sz=a(` it
won\u2019t be possible to load it back.`),By=u(),f(Cl.$$.fragment),Vy=u(),au=o("p"),c_=o("strong"),tz=a("FP32 Weights:"),Yy=u(),Ia=o("p"),az=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Il=o("a"),nz=a("models hub"),oz=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Ky=u(),nu=o("p"),h_=o("strong"),lz=a("Live FP32 Weights Recovery:"),Jy=u(),ou=o("p"),rz=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Xy=u(),lu=o("p"),pz=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Qy=u(),f(Rl.$$.fragment),e2=u(),Je=o("p"),iz=a("If you\u2019re using the "),f_=o("code"),uz=a("--load_best_model_at_end"),cz=a(" class:"),d_=o("em"),hz=a("~transformers.TrainingArguments"),fz=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),s2=u(),f(Ul.$$.fragment),t2=u(),f(Ra.$$.fragment),a2=u(),Ua=o("p"),dz=a("Of course, you don\u2019t have to use class:"),m_=o("em"),mz=a("~transformers.Trainer"),_z=a(` and you can adjust the examples above to your own
trainer.`),n2=u(),La=o("p"),vz=a("If for some reason you want more refinement, you can also extract the fp32 "),__=o("code"),jz=a("state_dict"),gz=a(` of the weights and apply
these yourself as is shown in the following example:`),o2=u(),f(Ll.$$.fragment),l2=u(),ru=o("p"),v_=o("strong"),wz=a("Offline FP32 Weights Recovery:"),r2=u(),Xe=o("p"),yz=a("DeepSpeed creates a special conversion script "),j_=o("code"),bz=a("zero_to_fp32.py"),Ez=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),g_=o("code"),qz=a("Trainer"),$z=a(" to do the extraction."),p2=u(),pu=o("p"),kz=a("Let\u2019s say your checkpoint folder looks like this:"),i2=u(),f(Zl.$$.fragment),u2=u(),Za=o("p"),Dz=a("In this example there is just one DeepSpeed checkpoint sub-folder "),w_=o("em"),Pz=a("global_step1"),Oz=a(`. Therefore to reconstruct the fp32
weights just run:`),c2=u(),f(Gl.$$.fragment),h2=u(),Ga=o("p"),zz=a("This is it. "),y_=o("code"),Tz=a("pytorch_model.bin"),Az=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),f2=u(),iu=o("p"),Sz=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),d2=u(),Ml=o("p"),b_=o("code"),xz=a("python zero_to_fp32.py -h"),Cz=a(" will give you usage details."),m2=u(),Qe=o("p"),Iz=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=o("code"),Rz=a("latest"),Uz=a(`, which in the current
example will contain `),q_=o("code"),Lz=a("global_step1"),Zz=a("."),_2=u(),uu=o("p"),Gz=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),v2=u(),Ms=o("h3"),Ma=o("a"),$_=o("span"),f(Nl.$$.fragment),Mz=u(),k_=o("span"),Nz=a("ZeRO-3 and Infinity Nuances"),j2=u(),cu=o("p"),Hz=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),g2=u(),hu=o("p"),Wz=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),w2=u(),fu=o("p"),Fz=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),y2=u(),Ns=o("h4"),Na=o("a"),D_=o("span"),f(Hl.$$.fragment),Bz=u(),P_=o("span"),Vz=a("Constructing Massive Models"),b2=u(),Ha=o("p"),Yz=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),O_=o("em"),Kz=a("deepspeed.zero.Init()"),Jz=a(`
context manager (which is also a function decorator), like so:`),E2=u(),f(Wl.$$.fragment),q2=u(),du=o("p"),Xz=a("As you can see this gives you a randomly initialized model."),$2=u(),k=o("p"),Qz=a("If you want to use a pretrained model, "),z_=o("code"),eT=a("model_class.from_pretrained"),sT=a(` will activate this feature as long as
`),T_=o("code"),tT=a("is_deepspeed_zero3_enabled()"),aT=a(" returns "),A_=o("code"),nT=a("True"),oT=a(`, which currently is setup by the
class:`),S_=o("em"),lT=a("~transformers.TrainingArguments"),rT=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),mu=o("a"),pT=a("TrainingArguments"),iT=a(" object "),x_=o("strong"),uT=a("before"),cT=a(` calling
`),C_=o("code"),hT=a("from_pretrained"),fT=a(". Here is an example of a possible sequence:"),k2=u(),f(Fl.$$.fragment),D2=u(),Wa=o("p"),dT=a("If you\u2019re using the official example scripts and your command line arguments include "),I_=o("code"),mT=a("--deepspeed ds_config.json"),_T=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),P2=u(),_u=o("p"),vT=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),O2=u(),Fa=o("p"),jT=a("For full details on this method and other related features please refer to "),Bl=o("a"),gT=a("Constructing Massive Models"),wT=a("."),z2=u(),ne=o("p"),yT=a("Also when loading fp16-pretrained models, you will want to tell "),R_=o("code"),bT=a("from_pretrained"),ET=a(` to use
`),U_=o("code"),qT=a("torch_dtype=torch.float16"),$T=a(". For details, please, see "),vu=o("a"),kT=a("from_pretrained-torch-dtype"),DT=a("."),T2=u(),Hs=o("h4"),Ba=o("a"),L_=o("span"),f(Vl.$$.fragment),PT=u(),Z_=o("span"),OT=a("Gathering Parameters"),A2=u(),Yl=o("p"),zT=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Kl=o("a"),TT=a("Gathering Parameters"),S2=u(),Va=o("p"),AT=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),G_=o("code"),ST=a("from_pretrained"),xT=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),x2=u(),ju=o("p"),CT=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),C2=u(),f(Jl.$$.fragment),I2=u(),es=o("p"),IT=a("stress on "),M_=o("code"),RT=a("tensor([1.])"),UT=a(", or if you get an error where it says the parameter is of size "),N_=o("code"),LT=a("1"),ZT=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),R2=u(),gu=o("a"),U2=u(),Ws=o("h3"),Ya=o("a"),H_=o("span"),f(Xl.$$.fragment),GT=u(),W_=o("span"),MT=a("ZeRO Inference"),L2=u(),wu=o("p"),NT=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),Z2=u(),Ka=o("p"),HT=a("Otherwise you just need to pass the usual "),yu=o("a"),WT=a("TrainingArguments"),FT=a(" arguments. For example:"),G2=u(),f(Ql.$$.fragment),M2=u(),bu=o("p"),BT=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),N2=u(),Ja=o("p"),VT=a("Here is an example of running "),F_=o("code"),YT=a("run_translation.py"),KT=a(" under DeepSpeed deploying all available GPUs:"),H2=u(),f(er.$$.fragment),W2=u(),Eu=o("p"),JT=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),F2=u(),qu=o("p"),XT=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),B2=u(),Fs=o("h3"),Xa=o("a"),B_=o("span"),f(sr.$$.fragment),QT=u(),V_=o("span"),eA=a("Filing Issues"),V2=u(),$u=o("p"),sA=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),Y2=u(),ku=o("p"),tA=a("In your report please always include:"),K2=u(),ss=o("ol"),Y_=o("li"),K_=o("p"),aA=a("the full Deepspeed config file in the report"),nA=u(),J_=o("li"),je=o("p"),oA=a("either the command line arguments if you were using the "),Du=o("a"),lA=a("Trainer"),rA=a(` or
`),Pu=o("a"),pA=a("TrainingArguments"),iA=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Ou=o("a"),uA=a("TrainingArguments"),cA=a(" as it has dozens of entries that are irrelevant."),hA=u(),X_=o("li"),Q_=o("p"),fA=a("Output of:"),J2=u(),f(tr.$$.fragment),X2=u(),ge=o("ol"),e1=o("li"),ar=o("p"),dA=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),nr=o("a"),mA=a("notebook"),_A=a(` as
a starting point.`),vA=u(),s1=o("li"),t1=o("p"),jA=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),gA=u(),a1=o("li"),or=o("p"),wA=a("If possible try to use one of the existing "),lr=o("a"),yA=a("examples"),bA=a(" to reproduce the problem with."),Q2=u(),zu=o("p"),EA=a("Things to consider:"),eb=u(),Qa=o("ul"),Bs=o("li"),n1=o("p"),qA=a("Deepspeed is often not the cause of the problem."),$A=u(),o1=o("p"),kA=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),DA=u(),l1=o("p"),PA=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),OA=u(),r1=o("li"),rr=o("p"),zA=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),pr=o("a"),TA=a("Deepspeed"),AA=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),sb=u(),Vs=o("h3"),en=o("a"),p1=o("span"),f(ir.$$.fragment),SA=u(),i1=o("span"),xA=a("Troubleshooting"),tb=u(),Tu=o("ul"),Au=o("li"),u1=o("code"),CA=a("deepspeed"),IA=a(" process gets killed at startup without a traceback"),ab=u(),H=o("p"),RA=a("If the "),c1=o("code"),UA=a("deepspeed"),LA=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),h1=o("code"),ZA=a("offload_optimizer"),GA=a(" or "),f1=o("code"),MA=a("offload_param"),NA=a(` or
both configured to offload to `),d1=o("code"),HA=a("cpu"),WA=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),nb=u(),sn=o("p"),FA=a("Work is being done to enable estimating how much memory is needed for a specific model: "),ur=o("a"),BA=a("PR"),VA=a("."),ob=u(),Ys=o("h3"),tn=o("a"),m1=o("span"),f(cr.$$.fragment),YA=u(),_1=o("span"),KA=a("Notes"),lb=u(),ts=o("ul"),Ks=o("li"),JA=a("DeepSpeed works with the PyTorch "),Su=o("a"),XA=a("Trainer"),QA=a(" but not TF "),xu=o("a"),eS=a("TFTrainer"),sS=a("."),tS=u(),hr=o("li"),aS=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),fr=o("a"),nS=a("source"),oS=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),lS=u(),Js=o("li"),rS=a("You don\u2019t have to use the "),Cu=o("a"),pS=a("Trainer"),iS=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),dr=o("a"),uS=a("the DeepSpeed integration instructions"),cS=a("."),rb=u(),Iu=o("a"),pb=u(),Xs=o("h2"),an=o("a"),v1=o("span"),f(mr.$$.fragment),hS=u(),j1=o("span"),fS=a("Non-Trainer Deepspeed Integration"),ib=u(),as=o("p"),dS=a("The "),g1=o("code"),mS=a("HfDeepSpeedConfig"),_S=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Ru=o("a"),vS=a("Trainer"),jS=a(" is not used."),ub=u(),nn=o("p"),gS=a("When using "),Uu=o("a"),wS=a("Trainer"),yS=a(" everything is automatically taken care of."),cb=u(),ns=o("p"),bS=a("When not using "),Lu=o("a"),ES=a("Trainer"),qS=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),w1=o("code"),$S=a("HfDeepSpeedConfig"),kS=a(" object before instantiating the model."),hb=u(),Zu=o("p"),DS=a("For example for a pretrained model:"),fb=u(),f(_r.$$.fragment),db=u(),Gu=o("p"),PS=a("or for non-pretrained model:"),mb=u(),f(vr.$$.fragment),_b=u(),Qs=o("h2"),on=o("a"),y1=o("span"),f(jr.$$.fragment),OS=u(),b1=o("span"),zS=a("HfDeepSpeedConfig"),vb=u(),q=o("div"),f(gr.$$.fragment),TS=u(),E1=o("p"),AS=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),SS=u(),we=o("p"),xS=a("A "),q1=o("code"),CS=a("weakref"),IS=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),$1=o("code"),RS=a("from_pretrained"),US=a(" and "),k1=o("code"),LS=a("_get_resized_embeddings"),ZS=a(`).
Therefore it\u2019s important that this object remains alive while the program is still running.`),GS=u(),oe=o("p"),Mu=o("a"),MS=a("Trainer"),NS=a(" uses the "),D1=o("code"),HS=a("HfTrainerDeepSpeedConfig"),WS=a(` subclass instead. That subclass has logic to
sync the configuration with values of `),Nu=o("a"),FS=a("TrainingArguments"),BS=a(` by replacing special placeholder
values: `),P1=o("code"),VS=a('"auto"'),YS=a(". Without this special logic the DeepSpeed configuration is not modified in any way."),KS=u(),os=o("div"),f(wr.$$.fragment),JS=u(),O1=o("p"),XS=a("Deletes a sub-section of the config file if it\u2019s found."),QS=u(),et=o("p"),ex=a("Unless "),z1=o("code"),sx=a("must_exist"),tx=a(" is "),T1=o("code"),ax=a("True"),nx=a(" the section doesn\u2019t have to exist."),ox=u(),ln=o("div"),f(yr.$$.fragment),lx=u(),br=o("p"),rx=a("Returns the set value or "),A1=o("code"),px=a("default"),ix=a(" if no value is set"),ux=u(),rn=o("div"),f(Er.$$.fragment),cx=u(),st=o("p"),hx=a("Returns "),S1=o("code"),fx=a("True"),dx=a("/"),x1=o("code"),mx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),_x=a(` or
isn\u2019t set).`),vx=u(),pn=o("div"),f(qr.$$.fragment),jx=u(),tt=o("p"),gx=a("Returns "),C1=o("code"),wx=a("True"),yx=a("/"),I1=o("code"),bx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),Ex=a(` or
isn\u2019t set).`),jb=u(),at=o("h2"),un=o("a"),R1=o("span"),f($r.$$.fragment),qx=u(),U1=o("span"),$x=a("Main DeepSpeed Resources"),gb=u(),le=o("ul"),L1=o("li"),kr=o("a"),kx=a("Project\u2019s github"),Dx=u(),Z1=o("li"),Dr=o("a"),Px=a("Usage docs"),Ox=u(),G1=o("li"),Pr=o("a"),zx=a("API docs"),Tx=u(),M1=o("li"),Or=o("a"),Ax=a("Blog posts"),wb=u(),Hu=o("p"),Sx=a("Papers:"),yb=u(),ls=o("ul"),N1=o("li"),zr=o("a"),xx=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Cx=u(),H1=o("li"),Tr=o("a"),Ix=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Rx=u(),W1=o("li"),Ar=o("a"),Ux=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),bb=u(),rs=o("p"),Lx=a("Finally, please, remember that, HuggingFace "),Wu=o("a"),Zx=a("Trainer"),Gx=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Sr=o("a"),Mx=a("DeepSpeed GitHub"),Nx=a("."),this.h()},l(e){const p=pW('[data-svelte="svelte-1phssyn"]',document.head);y=l(p,"META",{name:!0,content:!0}),p.forEach(t),L=c(e),b=l(e,"H1",{class:!0});var xr=r(b);$=l(xr,"A",{id:!0,class:!0,href:!0});var F1=r($);hs=l(F1,"SPAN",{});var Yx=r(hs);d(F.$$.fragment,Yx),Yx.forEach(t),F1.forEach(t),$n=c(xr),fs=l(xr,"SPAN",{});var Kx=r(fs);ds=n(Kx,"DeepSpeed Integration"),Kx.forEach(t),xr.forEach(t),ot=c(e),B=l(e,"P",{});var B1=r(B);V=l(B1,"A",{href:!0,rel:!0});var Jx=r(V);Z=n(Jx,"DeepSpeed"),Jx.forEach(t),Gr=n(B1," implements everything described in the "),ye=l(B1,"A",{href:!0,rel:!0});var Xx=r(ye);Mr=n(Xx,"ZeRO paper"),Xx.forEach(t),BE=n(B1,". Currently it provides full support for:"),B1.forEach(t),J1=c(e),O=l(e,"OL",{});var re=r(O);Lc=l(re,"LI",{});var Qx=r(Lc);VE=n(Qx,"Optimizer state partitioning (ZeRO stage 1)"),Qx.forEach(t),YE=c(re),Zc=l(re,"LI",{});var eC=r(Zc);KE=n(eC,"Gradient partitioning (ZeRO stage 2)"),eC.forEach(t),JE=c(re),Gc=l(re,"LI",{});var sC=r(Gc);XE=n(sC,"Parameter partitioning (ZeRO stage 3)"),sC.forEach(t),QE=c(re),Mc=l(re,"LI",{});var tC=r(Mc);eq=n(tC,"Custom mixed precision training handling"),tC.forEach(t),sq=c(re),Nc=l(re,"LI",{});var aC=r(Nc);tq=n(aC,"A range of fast CUDA-extension-based optimizers"),aC.forEach(t),aq=c(re),Hc=l(re,"LI",{});var nC=r(Hc);nq=n(nC,"ZeRO-Offload to CPU and NVMe"),nC.forEach(t),re.forEach(t),X1=c(e),be=l(e,"P",{});var Fu=r(be);oq=n(Fu,"ZeRO-Offload has its own dedicated paper: "),kn=l(Fu,"A",{href:!0,rel:!0});var oC=r(kn);lq=n(oC,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),oC.forEach(t),rq=n(Fu,". And NVMe-support is described in the paper "),Dn=l(Fu,"A",{href:!0,rel:!0});var lC=r(Dn);pq=n(lC,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),lC.forEach(t),iq=n(Fu,"."),Fu.forEach(t),Q1=c(e),Nr=l(e,"P",{});var rC=r(Nr);uq=n(rC,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),rC.forEach(t),ev=c(e),Hr=l(e,"P",{});var pC=r(Hr);cq=n(pC,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),pC.forEach(t),sv=c(e),lt=l(e,"P",{});var qb=r(lt);hq=n(qb,"\u{1F917} Transformers integrates "),Pn=l(qb,"A",{href:!0,rel:!0});var iC=r(Pn);fq=n(iC,"DeepSpeed"),iC.forEach(t),dq=n(qb," via 2 options:"),qb.forEach(t),tv=c(e),rt=l(e,"OL",{});var $b=r(rt);On=l($b,"LI",{});var kb=r(On);mq=n(kb,"Integration of the core DeepSpeed features via "),Wr=l(kb,"A",{href:!0});var uC=r(Wr);_q=n(uC,"Trainer"),uC.forEach(t),vq=n(kb,`. This is everything done for you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),kb.forEach(t),jq=c($b),U=l($b,"LI",{});var pe=r(U);gq=n(pe,"If you don\u2019t use "),Fr=l(pe,"A",{href:!0});var cC=r(Fr);wq=n(cC,"Trainer"),cC.forEach(t),yq=n(pe,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wc=l(pe,"CODE",{});var hC=r(Wc);bq=n(hC,"from_pretrained"),hC.forEach(t),Eq=n(pe," and "),Fc=l(pe,"CODE",{});var fC=r(Fc);qq=n(fC,"from_config"),fC.forEach(t),$q=n(pe,` include integration of essential
parts of DeepSpeed like `),Bc=l(pe,"CODE",{});var dC=r(Bc);kq=n(dC,"zero.Init"),dC.forEach(t),Dq=n(pe,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Br=l(pe,"A",{href:!0});var mC=r(Br);Pq=n(mC,"deepspeed-non-trainer-integration"),mC.forEach(t),Oq=n(pe,"."),pe.forEach(t),$b.forEach(t),av=c(e),Vr=l(e,"P",{});var _C=r(Vr);zq=n(_C,"What is integrated:"),_C.forEach(t),nv=c(e),Yr=l(e,"P",{});var vC=r(Yr);Tq=n(vC,"Training:"),vC.forEach(t),ov=c(e),Kr=l(e,"OL",{});var jC=r(Kr);Vc=l(jC,"LI",{});var gC=r(Vc);Aq=n(gC,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),gC.forEach(t),jC.forEach(t),lv=c(e),Jr=l(e,"P",{});var wC=r(Jr);Sq=n(wC,"Inference:"),wC.forEach(t),rv=c(e),Xr=l(e,"OL",{});var yC=r(Xr);zn=l(yC,"LI",{});var Db=r(zn);xq=n(Db,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Qr=l(Db,"A",{href:!0});var bC=r(Qr);Cq=n(bC,"deepspeed-zero-inference"),bC.forEach(t),Iq=n(Db,"."),Db.forEach(t),yC.forEach(t),pv=c(e),ep=l(e,"P",{});var EC=r(ep);Rq=n(EC,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),EC.forEach(t),iv=c(e),sp=l(e,"A",{id:!0}),r(sp).forEach(t),uv=c(e),ms=l(e,"H2",{class:!0});var Pb=r(ms);pt=l(Pb,"A",{id:!0,class:!0,href:!0});var qC=r(pt);Yc=l(qC,"SPAN",{});var $C=r(Yc);d(Tn.$$.fragment,$C),$C.forEach(t),qC.forEach(t),Uq=c(Pb),Kc=l(Pb,"SPAN",{});var kC=r(Kc);Lq=n(kC,"Trainer Deepspeed Integration"),kC.forEach(t),Pb.forEach(t),cv=c(e),tp=l(e,"A",{id:!0}),r(tp).forEach(t),hv=c(e),_s=l(e,"H3",{class:!0});var Ob=r(_s);it=l(Ob,"A",{id:!0,class:!0,href:!0});var DC=r(it);Jc=l(DC,"SPAN",{});var PC=r(Jc);d(An.$$.fragment,PC),PC.forEach(t),DC.forEach(t),Zq=c(Ob),Xc=l(Ob,"SPAN",{});var OC=r(Xc);Gq=n(OC,"Installation"),OC.forEach(t),Ob.forEach(t),fv=c(e),ap=l(e,"P",{});var zC=r(ap);Mq=n(zC,"Install the library via pypi:"),zC.forEach(t),dv=c(e),d(Sn.$$.fragment,e),mv=c(e),Ee=l(e,"P",{});var Bu=r(Ee);Nq=n(Bu,"or via "),Qc=l(Bu,"CODE",{});var TC=r(Qc);Hq=n(TC,"transformers"),TC.forEach(t),Wq=n(Bu,"\u2019 "),eh=l(Bu,"CODE",{});var AC=r(eh);Fq=n(AC,"extras"),AC.forEach(t),Bq=n(Bu,":"),Bu.forEach(t),_v=c(e),d(xn.$$.fragment,e),vv=c(e),qe=l(e,"P",{});var Vu=r(qe);Vq=n(Vu,"or find more details on "),Cn=l(Vu,"A",{href:!0,rel:!0});var SC=r(Cn);Yq=n(SC,"the DeepSpeed\u2019s GitHub page"),SC.forEach(t),Kq=n(Vu,` and
`),In=l(Vu,"A",{href:!0,rel:!0});var xC=r(In);Jq=n(xC,"advanced install"),xC.forEach(t),Xq=n(Vu,"."),Vu.forEach(t),jv=c(e),ut=l(e,"P",{});var zb=r(ut);Qq=n(zb,"If you\u2019re still struggling with the build, first make sure to read "),np=l(zb,"A",{href:!0});var CC=r(np);e0=n(CC,"zero-install-notes"),CC.forEach(t),s0=n(zb,"."),zb.forEach(t),gv=c(e),op=l(e,"P",{});var IC=r(op);t0=n(IC,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),IC.forEach(t),wv=c(e),lp=l(e,"P",{});var RC=r(lp);a0=n(RC,"To make a local build for DeepSpeed:"),RC.forEach(t),yv=c(e),d(Rn.$$.fragment,e),bv=c(e),$e=l(e,"P",{});var Yu=r($e);n0=n(Yu,"If you intend to use NVMe offload you will need to also include "),sh=l(Yu,"CODE",{});var UC=r(sh);o0=n(UC,"DS_BUILD_AIO=1"),UC.forEach(t),l0=n(Yu,` in the instructions above (and also
install `),th=l(Yu,"EM",{});var LC=r(th);r0=n(LC,"libaio-dev"),LC.forEach(t),p0=n(Yu," system-wide)."),Yu.forEach(t),Ev=c(e),ct=l(e,"P",{});var Tb=r(ct);i0=n(Tb,"Edit "),ah=l(Tb,"CODE",{});var ZC=r(ah);u0=n(ZC,"TORCH_CUDA_ARCH_LIST"),ZC.forEach(t),c0=n(Tb,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),Tb.forEach(t),qv=c(e),d(Un.$$.fragment,e),$v=c(e),de=l(e,"P",{});var Cr=r(de);h0=n(Cr,"So if you get "),nh=l(Cr,"CODE",{});var GC=r(nh);f0=n(GC,"8, 6"),GC.forEach(t),d0=n(Cr,", then use "),oh=l(Cr,"CODE",{});var MC=r(oh);m0=n(MC,'TORCH_CUDA_ARCH_LIST="8.6"'),MC.forEach(t),_0=n(Cr,`. If you have multiple different cards, you can list all
of them like so `),lh=l(Cr,"CODE",{});var NC=r(lh);v0=n(NC,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),NC.forEach(t),Cr.forEach(t),kv=c(e),rp=l(e,"P",{});var HC=r(rp);j0=n(HC,"If you need to use the same setup on multiple machines, make a binary wheel:"),HC.forEach(t),Dv=c(e),d(Ln.$$.fragment,e),Pv=c(e),ke=l(e,"P",{});var Ku=r(ke);g0=n(Ku,"it will generate something like "),rh=l(Ku,"CODE",{});var WC=r(rh);w0=n(WC,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),WC.forEach(t),y0=n(Ku,` which now you can install
as `),ph=l(Ku,"CODE",{});var FC=r(ph);b0=n(FC,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),FC.forEach(t),E0=n(Ku," locally or on any other machine."),Ku.forEach(t),Ov=c(e),ht=l(e,"P",{});var Ab=r(ht);q0=n(Ab,"Again, remember to ensure to adjust "),ih=l(Ab,"CODE",{});var BC=r(ih);$0=n(BC,"TORCH_CUDA_ARCH_LIST"),BC.forEach(t),k0=n(Ab," to the target architectures."),Ab.forEach(t),zv=c(e),De=l(e,"P",{});var Ju=r(De);D0=n(Ju,"You can find the complete list of NVIDIA GPUs and their corresponding "),uh=l(Ju,"STRONG",{});var VC=r(uh);P0=n(VC,"Compute Capabilities"),VC.forEach(t),O0=n(Ju,` (same as arch in this
context) `),Zn=l(Ju,"A",{href:!0,rel:!0});var YC=r(Zn);z0=n(YC,"here"),YC.forEach(t),T0=n(Ju,"."),Ju.forEach(t),Tv=c(e),pp=l(e,"P",{});var KC=r(pp);A0=n(KC,"You can check the archs pytorch was built with using:"),KC.forEach(t),Av=c(e),d(Gn.$$.fragment,e),Sv=c(e),ip=l(e,"P",{});var JC=r(ip);S0=n(JC,"Here is how to find out the arch for one of the installed GPU. For example, for GPU 0:"),JC.forEach(t),xv=c(e),d(Mn.$$.fragment,e),Cv=c(e),up=l(e,"P",{});var XC=r(up);x0=n(XC,"If the output is:"),XC.forEach(t),Iv=c(e),d(Nn.$$.fragment,e),Rv=c(e),ft=l(e,"P",{});var Sb=r(ft);C0=n(Sb,"then you know that this card\u2019s arch is "),ch=l(Sb,"CODE",{});var QC=r(ch);I0=n(QC,"8.6"),QC.forEach(t),R0=n(Sb,"."),Sb.forEach(t),Uv=c(e),dt=l(e,"P",{});var xb=r(dt);U0=n(xb,"You can also leave "),hh=l(xb,"CODE",{});var eI=r(hh);L0=n(eI,"TORCH_CUDA_ARCH_LIST"),eI.forEach(t),Z0=n(xb,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),xb.forEach(t),Lv=c(e),mt=l(e,"P",{});var Cb=r(mt);G0=n(Cb,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Hn=l(Cb,"A",{href:!0,rel:!0});var sI=r(Hn);M0=n(sI,"Deepspeed"),sI.forEach(t),N0=n(Cb,","),Cb.forEach(t),Zv=c(e),cp=l(e,"A",{id:!0}),r(cp).forEach(t),Gv=c(e),vs=l(e,"H3",{class:!0});var Ib=r(vs);_t=l(Ib,"A",{id:!0,class:!0,href:!0});var tI=r(_t);fh=l(tI,"SPAN",{});var aI=r(fh);d(Wn.$$.fragment,aI),aI.forEach(t),tI.forEach(t),H0=c(Ib),dh=l(Ib,"SPAN",{});var nI=r(dh);W0=n(nI,"Deployment with multiple GPUs"),nI.forEach(t),Ib.forEach(t),Mv=c(e),vt=l(e,"P",{});var Rb=r(vt);F0=n(Rb,"To deploy this feature with multiple GPUs adjust the "),hp=l(Rb,"A",{href:!0});var oI=r(hp);B0=n(oI,"Trainer"),oI.forEach(t),V0=n(Rb,` command line arguments as
following:`),Rb.forEach(t),Nv=c(e),jt=l(e,"OL",{});var Ub=r(jt);js=l(Ub,"LI",{});var Xu=r(js);Y0=n(Xu,"replace "),mh=l(Xu,"CODE",{});var lI=r(mh);K0=n(lI,"python -m torch.distributed.launch"),lI.forEach(t),J0=n(Xu," with "),_h=l(Xu,"CODE",{});var rI=r(_h);X0=n(rI,"deepspeed"),rI.forEach(t),Q0=n(Xu,"."),Xu.forEach(t),e$=c(Ub),me=l(Ub,"LI",{});var cn=r(me);s$=n(cn,"add a new argument "),vh=l(cn,"CODE",{});var pI=r(vh);t$=n(pI,"--deepspeed ds_config.json"),pI.forEach(t),a$=n(cn,", where "),jh=l(cn,"CODE",{});var iI=r(jh);n$=n(iI,"ds_config.json"),iI.forEach(t),o$=n(cn,` is the DeepSpeed configuration file as
documented `),Fn=l(cn,"A",{href:!0,rel:!0});var uI=r(Fn);l$=n(uI,"here"),uI.forEach(t),r$=n(cn,". The file naming is up to you."),cn.forEach(t),Ub.forEach(t),Hv=c(e),fp=l(e,"P",{});var cI=r(fp);p$=n(cI,"Therefore, if your original command line looked as following:"),cI.forEach(t),Wv=c(e),d(Bn.$$.fragment,e),Fv=c(e),dp=l(e,"P",{});var hI=r(dp);i$=n(hI,"Now it should be:"),hI.forEach(t),Bv=c(e),d(Vn.$$.fragment,e),Vv=c(e),z=l(e,"P",{});var ie=r(z);u$=n(ie,"Unlike, "),gh=l(ie,"CODE",{});var fI=r(gh);c$=n(fI,"torch.distributed.launch"),fI.forEach(t),h$=n(ie," where you have to specify how many GPUs to use with "),wh=l(ie,"CODE",{});var dI=r(wh);f$=n(dI,"--nproc_per_node"),dI.forEach(t),d$=n(ie,`, with the
`),yh=l(ie,"CODE",{});var mI=r(yh);m$=n(mI,"deepspeed"),mI.forEach(t),_$=n(ie," launcher you don\u2019t have to use the corresponding "),bh=l(ie,"CODE",{});var _I=r(bh);v$=n(_I,"--num_gpus"),_I.forEach(t),j$=n(ie,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Yn=l(ie,"A",{href:!0,rel:!0});var vI=r(Yn);g$=n(vI,"here"),vI.forEach(t),w$=n(ie,"."),ie.forEach(t),Yv=c(e),K=l(e,"P",{});var hn=r(K);y$=n(hn,"In fact, you can continue using "),Eh=l(hn,"CODE",{});var jI=r(Eh);b$=n(jI,"-m torch.distributed.launch"),jI.forEach(t),E$=n(hn,` with DeepSpeed as long as you don\u2019t need to use
`),qh=l(hn,"CODE",{});var gI=r(qh);q$=n(gI,"deepspeed"),gI.forEach(t),$$=n(hn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),$h=l(hn,"CODE",{});var wI=r($h);k$=n(wI,"deepspeed"),wI.forEach(t),D$=n(hn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),hn.forEach(t),Kv=c(e),gt=l(e,"P",{});var Lb=r(gt);P$=n(Lb,"Here is an example of running "),kh=l(Lb,"CODE",{});var yI=r(kh);O$=n(yI,"run_translation.py"),yI.forEach(t),z$=n(Lb," under DeepSpeed deploying all available GPUs:"),Lb.forEach(t),Jv=c(e),d(Kn.$$.fragment,e),Xv=c(e),wt=l(e,"P",{});var Zb=r(wt);T$=n(Zb,"Note that in the DeepSpeed documentation you are likely to see "),Dh=l(Zb,"CODE",{});var bI=r(Dh);A$=n(bI,"--deepspeed --deepspeed_config ds_config.json"),bI.forEach(t),S$=n(Zb,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Zb.forEach(t),Qv=c(e),yt=l(e,"P",{});var Gb=r(yt);x$=n(Gb,"For some practical usage examples, please, see this "),Jn=l(Gb,"A",{href:!0,rel:!0});var EI=r(Jn);C$=n(EI,"post"),EI.forEach(t),I$=n(Gb,"."),Gb.forEach(t),ej=c(e),mp=l(e,"A",{id:!0}),r(mp).forEach(t),sj=c(e),gs=l(e,"H3",{class:!0});var Mb=r(gs);bt=l(Mb,"A",{id:!0,class:!0,href:!0});var qI=r(bt);Ph=l(qI,"SPAN",{});var $I=r(Ph);d(Xn.$$.fragment,$I),$I.forEach(t),qI.forEach(t),R$=c(Mb),Oh=l(Mb,"SPAN",{});var kI=r(Oh);U$=n(kI,"Deployment with one GPU"),kI.forEach(t),Mb.forEach(t),tj=c(e),Et=l(e,"P",{});var Nb=r(Et);L$=n(Nb,"To deploy DeepSpeed with one GPU adjust the "),_p=l(Nb,"A",{href:!0});var DI=r(_p);Z$=n(DI,"Trainer"),DI.forEach(t),G$=n(Nb," command line arguments as following:"),Nb.forEach(t),aj=c(e),d(Qn.$$.fragment,e),nj=c(e),Pe=l(e,"P",{});var Qu=r(Pe);M$=n(Qu,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),zh=l(Qu,"CODE",{});var PI=r(zh);N$=n(PI,"--num_gpus=1"),PI.forEach(t),H$=n(Qu,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),eo=l(Qu,"A",{href:!0,rel:!0});var OI=r(eo);W$=n(OI,"documentation"),OI.forEach(t),F$=n(Qu," discusses the launcher options."),Qu.forEach(t),oj=c(e),vp=l(e,"P",{});var zI=r(vp);B$=n(zI,"Why would you want to use DeepSpeed with just one GPU?"),zI.forEach(t),lj=c(e),qt=l(e,"OL",{});var Hb=r(qt);Th=l(Hb,"LI",{});var TI=r(Th);V$=n(TI,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),TI.forEach(t),Y$=c(Hb),Ah=l(Hb,"LI",{});var AI=r(Ah);K$=n(AI,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),AI.forEach(t),Hb.forEach(t),rj=c(e),jp=l(e,"P",{});var SI=r(jp);J$=n(SI,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),SI.forEach(t),pj=c(e),d(so.$$.fragment,e),ij=c(e),gp=l(e,"P",{});var xI=r(gp);X$=n(xI,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),xI.forEach(t),uj=c(e),$t=l(e,"P",{});var Wb=r($t);Q$=n(Wb,"For a practical usage example of this type of deployment, please, see this "),to=l(Wb,"A",{href:!0,rel:!0});var CI=r(to);e5=n(CI,"post"),CI.forEach(t),s5=n(Wb,"."),Wb.forEach(t),cj=c(e),wp=l(e,"P",{});var II=r(wp);t5=n(II,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),II.forEach(t),hj=c(e),yp=l(e,"P",{});var RI=r(yp);a5=n(RI,`<!--- TODO: Benchmark whether we can get better performance out of ZeRO-3 vs. ZeRO-2 on a single GPU, and then
recommend ZeRO-3 config as starting one. \u2014>`),RI.forEach(t),fj=c(e),bp=l(e,"P",{});var UI=r(bp);n5=n(UI,"Notes:"),UI.forEach(t),dj=c(e),Ep=l(e,"UL",{});var LI=r(Ep);ao=l(LI,"LI",{});var Fb=r(ao);o5=n(Fb,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Sh=l(Fb,"CODE",{});var ZI=r(Sh);l5=n(ZI,"CUDA_VISIBLE_DEVICES"),ZI.forEach(t),r5=n(Fb,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),Fb.forEach(t),LI.forEach(t),mj=c(e),d(no.$$.fragment,e),_j=c(e),qp=l(e,"P",{});var GI=r(qp);p5=n(GI,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),GI.forEach(t),vj=c(e),$p=l(e,"A",{id:!0}),r($p).forEach(t),jj=c(e),ws=l(e,"H3",{class:!0});var Bb=r(ws);kt=l(Bb,"A",{id:!0,class:!0,href:!0});var MI=r(kt);xh=l(MI,"SPAN",{});var NI=r(xh);d(oo.$$.fragment,NI),NI.forEach(t),MI.forEach(t),i5=c(Bb),Ch=l(Bb,"SPAN",{});var HI=r(Ch);u5=n(HI,"Deployment in Notebooks"),HI.forEach(t),Bb.forEach(t),gj=c(e),Dt=l(e,"P",{});var Vb=r(Dt);c5=n(Vb,"The problem with running notebook cells as a script is that there is no normal "),Ih=l(Vb,"CODE",{});var WI=r(Ih);h5=n(WI,"deepspeed"),WI.forEach(t),f5=n(Vb,` launcher to rely on, so
under certain setups we have to emulate it.`),Vb.forEach(t),wj=c(e),kp=l(e,"P",{});var FI=r(kp);d5=n(FI,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),FI.forEach(t),yj=c(e),d(lo.$$.fragment,e),bj=c(e),Pt=l(e,"P",{});var Yb=r(Pt);m5=n(Yb,"Note: "),Rh=l(Yb,"CODE",{});var BI=r(Rh);_5=n(BI,"..."),BI.forEach(t),v5=n(Yb," stands for the normal arguments that you\u2019d pass to the functions."),Yb.forEach(t),Ej=c(e),Dp=l(e,"P",{});var VI=r(Dp);j5=n(VI,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),VI.forEach(t),qj=c(e),Pp=l(e,"P",{});var YI=r(Pp);g5=n(YI,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),YI.forEach(t),$j=c(e),d(ro.$$.fragment,e),kj=c(e),Oe=l(e,"P",{});var ec=r(Oe);w5=n(ec,"If the training script is in a normal file and not in the notebook cells, you can launch "),Uh=l(ec,"CODE",{});var KI=r(Uh);y5=n(KI,"deepspeed"),KI.forEach(t),b5=n(ec,` normally via
shell from a cell. For example, to use `),Lh=l(ec,"CODE",{});var JI=r(Lh);E5=n(JI,"run_translation.py"),JI.forEach(t),q5=n(ec," you would launch it with:"),ec.forEach(t),Dj=c(e),d(po.$$.fragment,e),Pj=c(e),Ot=l(e,"P",{});var Kb=r(Ot);$5=n(Kb,"or with "),Zh=l(Kb,"CODE",{});var XI=r(Zh);k5=n(XI,"%%bash"),XI.forEach(t),D5=n(Kb," magic, where you can write a multi-line code for the shell program to run:"),Kb.forEach(t),Oj=c(e),d(io.$$.fragment,e),zj=c(e),Op=l(e,"P",{});var QI=r(Op);P5=n(QI,"In such case you don\u2019t need any of the code presented at the beginning of this section."),QI.forEach(t),Tj=c(e),zt=l(e,"P",{});var Jb=r(zt);O5=n(Jb,"Note: While "),Gh=l(Jb,"CODE",{});var eR=r(Gh);z5=n(eR,"%%bash"),eR.forEach(t),T5=n(Jb,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Jb.forEach(t),Aj=c(e),zp=l(e,"A",{id:!0}),r(zp).forEach(t),Sj=c(e),ys=l(e,"H3",{class:!0});var Xb=r(ys);Tt=l(Xb,"A",{id:!0,class:!0,href:!0});var sR=r(Tt);Mh=l(sR,"SPAN",{});var tR=r(Mh);d(uo.$$.fragment,tR),tR.forEach(t),sR.forEach(t),A5=c(Xb),Nh=l(Xb,"SPAN",{});var aR=r(Nh);S5=n(aR,"Configuration"),aR.forEach(t),Xb.forEach(t),xj=c(e),At=l(e,"P",{});var Qb=r(At);x5=n(Qb,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),co=l(Qb,"A",{href:!0,rel:!0});var nR=r(co);C5=n(nR,"following documentation"),nR.forEach(t),I5=n(Qb,"."),Qb.forEach(t),Cj=c(e),St=l(e,"P",{});var e3=r(St);R5=n(e3,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),ho=l(e3,"A",{href:!0,rel:!0});var oR=r(ho);U5=n(oR,`the DeepSpeedExamples
repo`),oR.forEach(t),L5=n(e3,":"),e3.forEach(t),Ij=c(e),d(fo.$$.fragment,e),Rj=c(e),xt=l(e,"P",{});var s3=r(xt);Z5=n(s3,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Hh=l(s3,"CODE",{});var lR=r(Hh);G5=n(lR,".json"),lR.forEach(t),M5=n(s3," files with:"),s3.forEach(t),Uj=c(e),d(mo.$$.fragment,e),Lj=c(e),Ct=l(e,"P",{});var t3=r(Ct);N5=n(t3,"Some more examples are to be found in the "),_o=l(t3,"A",{href:!0,rel:!0});var rR=r(_o);H5=n(rR,"main repo"),rR.forEach(t),W5=n(t3," as well."),t3.forEach(t),Zj=c(e),Tp=l(e,"P",{});var pR=r(Tp);F5=n(pR,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),pR.forEach(t),Gj=c(e),J=l(e,"P",{});var fn=r(J);B5=n(fn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Wh=l(fn,"CODE",{});var iR=r(Wh);V5=n(iR,"AdamW"),iR.forEach(t),Y5=n(fn," optimizer and "),Fh=l(fn,"CODE",{});var uR=r(Fh);K5=n(uR,"WarmupLR"),uR.forEach(t),J5=n(fn,` scheduler and will enable mixed
precision training if `),Bh=l(fn,"CODE",{});var cR=r(Bh);X5=n(cR,"--fp16"),cR.forEach(t),Q5=n(fn," is passed:"),fn.forEach(t),Mj=c(e),d(vo.$$.fragment,e),Nj=c(e),It=l(e,"P",{});var a3=r(It);e6=n(a3,"When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=l(a3,"A",{href:!0});var hR=r(Ap);s6=n(hR,"Trainer"),hR.forEach(t),t6=n(a3,`
to the console, so you can see exactly what was the final configuration passed to it.`),a3.forEach(t),Hj=c(e),Sp=l(e,"A",{id:!0}),r(Sp).forEach(t),Wj=c(e),bs=l(e,"H3",{class:!0});var n3=r(bs);Rt=l(n3,"A",{id:!0,class:!0,href:!0});var fR=r(Rt);Vh=l(fR,"SPAN",{});var dR=r(Vh);d(jo.$$.fragment,dR),dR.forEach(t),fR.forEach(t),a6=c(n3),Yh=l(n3,"SPAN",{});var mR=r(Yh);n6=n(mR,"Passing Configuration"),mR.forEach(t),n3.forEach(t),Fj=c(e),T=l(e,"P",{});var ue=r(T);o6=n(ue,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),xp=l(ue,"A",{href:!0});var _R=r(xp);l6=n(_R,"Trainer"),_R.forEach(t),r6=n(ue," via "),Cp=l(ue,"A",{href:!0});var vR=r(Cp);p6=n(vR,"TrainingArguments"),vR.forEach(t),i6=n(ue," then for the "),Kh=l(ue,"CODE",{});var jR=r(Kh);u6=n(jR,"deepspeed"),jR.forEach(t),c6=n(ue,` argument you can
pass a nested `),Jh=l(ue,"CODE",{});var gR=r(Jh);h6=n(gR,"dict"),gR.forEach(t),f6=n(ue,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=l(ue,"A",{href:!0});var wR=r(Ip);d6=n(wR,"TrainingArguments"),wR.forEach(t),m6=n(ue,"."),ue.forEach(t),Bj=c(e),Rp=l(e,"P",{});var yR=r(Rp);_6=n(yR,"To summarize you can do:"),yR.forEach(t),Vj=c(e),d(go.$$.fragment,e),Yj=c(e),Up=l(e,"P",{});var bR=r(Up);v6=n(bR,"or:"),bR.forEach(t),Kj=c(e),d(wo.$$.fragment,e),Jj=c(e),Lp=l(e,"A",{id:!0}),r(Lp).forEach(t),Xj=c(e),Es=l(e,"H3",{class:!0});var o3=r(Es);Ut=l(o3,"A",{id:!0,class:!0,href:!0});var ER=r(Ut);Xh=l(ER,"SPAN",{});var qR=r(Xh);d(yo.$$.fragment,qR),qR.forEach(t),ER.forEach(t),j6=c(o3),Qh=l(o3,"SPAN",{});var $R=r(Qh);g6=n($R,"Shared Configuration"),$R.forEach(t),o3.forEach(t),Qj=c(e),d(Lt.$$.fragment,e),eg=c(e),ze=l(e,"P",{});var sc=r(ze);w6=n(sc,"Some configuration values are required by both the "),Zp=l(sc,"A",{href:!0});var kR=r(Zp);y6=n(kR,"Trainer"),kR.forEach(t),b6=n(sc,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=l(sc,"A",{href:!0});var DR=r(Gp);E6=n(DR,"Trainer"),DR.forEach(t),q6=n(sc," command line arguments."),sc.forEach(t),sg=c(e),Zt=l(e,"P",{});var l3=r(Zt);$6=n(l3,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=l(l3,"A",{href:!0});var PR=r(Mp);k6=n(PR,"Trainer"),PR.forEach(t),D6=n(l3,` do the majority
of configuration for you.`),l3.forEach(t),tg=c(e),Te=l(e,"P",{});var tc=r(Te);P6=n(tc,"Therefore, in the rest of this guide you will find a special configuration value: "),ef=l(tc,"CODE",{});var OR=r(ef);O6=n(OR,"auto"),OR.forEach(t),z6=n(tc,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=l(tc,"A",{href:!0});var zR=r(Np);T6=n(zR,"Trainer"),zR.forEach(t),A6=n(tc,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),tc.forEach(t),ag=c(e),Hp=l(e,"P",{});var TR=r(Hp);S6=n(TR,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),TR.forEach(t),ng=c(e),Gt=l(e,"P",{});var r3=r(Gt);x6=n(r3,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=l(r3,"A",{href:!0});var AR=r(Wp);C6=n(AR,"TrainingArguments"),AR.forEach(t),I6=n(r3," based on that. The steps are:"),r3.forEach(t),og=c(e),Mt=l(e,"OL",{});var p3=r(Mt);sf=l(p3,"LI",{});var SR=r(sf);R6=n(SR,"Create or load the DeepSpeed configuration to be used as a master configuration"),SR.forEach(t),U6=c(p3),bo=l(p3,"LI",{});var i3=r(bo);L6=n(i3,"Create the "),Fp=l(i3,"A",{href:!0});var xR=r(Fp);Z6=n(xR,"TrainingArguments"),xR.forEach(t),G6=n(i3," object based on these values"),i3.forEach(t),p3.forEach(t),lg=c(e),X=l(e,"P",{});var dn=r(X);M6=n(dn,"Do note that some values, such as "),tf=l(dn,"CODE",{});var CR=r(tf);N6=n(CR,"scheduler.params.total_num_steps"),CR.forEach(t),H6=n(dn,` are calculated by
`),Bp=l(dn,"A",{href:!0});var IR=r(Bp);W6=n(IR,"Trainer"),IR.forEach(t),F6=n(dn," during "),af=l(dn,"CODE",{});var RR=r(af);B6=n(RR,"train"),RR.forEach(t),V6=n(dn,", but you can of course do the math yourself."),dn.forEach(t),rg=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),pg=c(e),qs=l(e,"H3",{class:!0});var u3=r(qs);Nt=l(u3,"A",{id:!0,class:!0,href:!0});var UR=r(Nt);nf=l(UR,"SPAN",{});var LR=r(nf);d(Eo.$$.fragment,LR),LR.forEach(t),UR.forEach(t),Y6=c(u3),of=l(u3,"SPAN",{});var ZR=r(of);K6=n(ZR,"ZeRO"),ZR.forEach(t),u3.forEach(t),ig=c(e),qo=l(e,"P",{});var Hx=r(qo);$o=l(Hx,"A",{href:!0,rel:!0});var GR=r($o);J6=n(GR,"Zero Redundancy Optimizer (ZeRO)"),GR.forEach(t),X6=n(Hx,` is the workhorse of DeepSpeed. It
support 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Hx.forEach(t),ug=c(e),Ae=l(e,"P",{});var ac=r(Ae);Q6=n(ac,"The "),lf=l(ac,"CODE",{});var MR=r(lf);e4=n(MR,"zero_optimization"),MR.forEach(t),s4=n(ac," section of the configuration file is the most important part ("),ko=l(ac,"A",{href:!0,rel:!0});var NR=r(ko);t4=n(NR,"docs"),NR.forEach(t),a4=n(ac,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),ac.forEach(t),cg=c(e),Ht=l(e,"P",{});var c3=r(Ht);n4=n(c3,"This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=l(c3,"A",{href:!0});var HR=r(Yp);o4=n(HR,"Trainer"),HR.forEach(t),l4=n(c3,` provides
no equivalent command line arguments.`),c3.forEach(t),hg=c(e),Kp=l(e,"P",{});var WR=r(Kp);r4=n(WR,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),WR.forEach(t),fg=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),dg=c(e),$s=l(e,"H4",{class:!0});var h3=r($s);Wt=l(h3,"A",{id:!0,class:!0,href:!0});var FR=r(Wt);rf=l(FR,"SPAN",{});var BR=r(rf);d(Do.$$.fragment,BR),BR.forEach(t),FR.forEach(t),p4=c(h3),pf=l(h3,"SPAN",{});var VR=r(pf);i4=n(VR,"ZeRO-2 Config"),VR.forEach(t),h3.forEach(t),mg=c(e),Xp=l(e,"P",{});var YR=r(Xp);u4=n(YR,"The following is an example configuration for ZeRO stage 2:"),YR.forEach(t),_g=c(e),d(Po.$$.fragment,e),vg=c(e),Qp=l(e,"P",{});var KR=r(Qp);uf=l(KR,"STRONG",{});var JR=r(uf);c4=n(JR,"Performance tuning:"),JR.forEach(t),KR.forEach(t),jg=c(e),Se=l(e,"UL",{});var nc=r(Se);ks=l(nc,"LI",{});var oc=r(ks);h4=n(oc,"enabling "),cf=l(oc,"CODE",{});var XR=r(cf);f4=n(XR,"offload_optimizer"),XR.forEach(t),d4=n(oc," should reduce GPU RAM usage (it requires "),hf=l(oc,"CODE",{});var QR=r(hf);m4=n(QR,'"stage": 2'),QR.forEach(t),_4=n(oc,")"),oc.forEach(t),v4=c(nc),A=l(nc,"LI",{});var Y=r(A);ff=l(Y,"CODE",{});var eU=r(ff);j4=n(eU,'"overlap_comm": true'),eU.forEach(t),g4=n(Y," trades off increased GPU RAM usage to lower all-reduce latency. "),df=l(Y,"CODE",{});var sU=r(df);w4=n(sU,"overlap_comm"),sU.forEach(t),y4=n(Y,` uses 4.5x
the `),mf=l(Y,"CODE",{});var tU=r(mf);b4=n(tU,"allgather_bucket_size"),tU.forEach(t),E4=n(Y," and "),_f=l(Y,"CODE",{});var aU=r(_f);q4=n(aU,"reduce_bucket_size"),aU.forEach(t),$4=n(Y,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),vf=l(Y,"CODE",{});var nU=r(vf);k4=n(nU,"5e8 x 2Bytes x 2 x 4.5"),nU.forEach(t),D4=n(Y,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),jf=l(Y,"CODE",{});var oU=r(jf);P4=n(oU,"2e8"),oU.forEach(t),O4=n(Y,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),Y.forEach(t),z4=c(nc),gf=l(nc,"LI",{});var lU=r(gf);T4=n(lU,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size,
the slower the communication, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),lU.forEach(t),nc.forEach(t),gg=c(e),ei=l(e,"A",{id:!0}),r(ei).forEach(t),wg=c(e),Ds=l(e,"H4",{class:!0});var f3=r(Ds);Ft=l(f3,"A",{id:!0,class:!0,href:!0});var rU=r(Ft);wf=l(rU,"SPAN",{});var pU=r(wf);d(Oo.$$.fragment,pU),pU.forEach(t),rU.forEach(t),A4=c(f3),yf=l(f3,"SPAN",{});var iU=r(yf);S4=n(iU,"ZeRO-3 Config"),iU.forEach(t),f3.forEach(t),yg=c(e),si=l(e,"P",{});var uU=r(si);x4=n(uU,"The following is an example configuration for ZeRO stage 3:"),uU.forEach(t),bg=c(e),d(zo.$$.fragment,e),Eg=c(e),G=l(e,"P",{});var ps=r(G);C4=n(ps,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),bf=l(ps,"CODE",{});var cU=r(bf);I4=n(cU,'"device": "cpu"'),cU.forEach(t),R4=n(ps,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=l(ps,"CODE",{});var hU=r(Ef);U4=n(hU,"none"),hU.forEach(t),L4=n(ps," instead of "),qf=l(ps,"CODE",{});var fU=r(qf);Z4=n(fU,"cpu"),fU.forEach(t),G4=n(ps," for the "),$f=l(ps,"CODE",{});var dU=r($f);M4=n(dU,"device"),dU.forEach(t),N4=n(ps,` entry. Offloading to
NVMe is discussed further down.`),ps.forEach(t),qg=c(e),xe=l(e,"P",{});var lc=r(xe);H4=n(lc,"Pinned memory is enabled with "),kf=l(lc,"CODE",{});var mU=r(kf);W4=n(mU,"pin_memory"),mU.forEach(t),F4=n(lc," set to "),Df=l(lc,"CODE",{});var _U=r(Df);B4=n(_U,"true"),_U.forEach(t),V4=n(lc,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),lc.forEach(t),$g=c(e),ti=l(e,"P",{});var vU=r(ti);Pf=l(vU,"STRONG",{});var jU=r(Pf);Y4=n(jU,"Performance tuning:"),jU.forEach(t),vU.forEach(t),kg=c(e),Bt=l(e,"UL",{});var d3=r(Bt);To=l(d3,"LI",{});var m3=r(To);Of=l(m3,"CODE",{});var gU=r(Of);K4=n(gU,"stage3_max_live_parameters"),gU.forEach(t),J4=n(m3,": "),zf=l(m3,"CODE",{});var wU=r(zf);X4=n(wU,"1e9"),wU.forEach(t),m3.forEach(t),Q4=c(d3),Ao=l(d3,"LI",{});var _3=r(Ao);Tf=l(_3,"CODE",{});var yU=r(Tf);e8=n(yU,"stage3_max_reuse_distance"),yU.forEach(t),s8=n(_3,": "),Af=l(_3,"CODE",{});var bU=r(Af);t8=n(bU,"1e9"),bU.forEach(t),_3.forEach(t),d3.forEach(t),Dg=c(e),S=l(e,"P",{});var ce=r(S);a8=n(ce,"If hitting OOM reduce "),Sf=l(ce,"CODE",{});var EU=r(Sf);n8=n(EU,"stage3_max_live_parameters"),EU.forEach(t),o8=n(ce," and "),xf=l(ce,"CODE",{});var qU=r(xf);l8=n(qU,"stage3_max_reuse_distance"),qU.forEach(t),r8=n(ce,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Cf=l(ce,"CODE",{});var $U=r(Cf);p8=n($U,"1e9"),$U.forEach(t),i8=n(ce,` would consume ~2GB. The memory is shared by
`),If=l(ce,"CODE",{});var kU=r(If);u8=n(kU,"stage3_max_live_parameters"),kU.forEach(t),c8=n(ce," and "),Rf=l(ce,"CODE",{});var DU=r(Rf);h8=n(DU,"stage3_max_reuse_distance"),DU.forEach(t),f8=n(ce,", so its not additive, its just 2GB total."),ce.forEach(t),Pg=c(e),_e=l(e,"P",{});var Ir=r(_e);Uf=l(Ir,"CODE",{});var PU=r(Uf);d8=n(PU,"stage3_max_live_parameters"),PU.forEach(t),m8=n(Ir,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Lf=l(Ir,"CODE",{});var OU=r(Lf);_8=n(OU,"stage3_max_reuse_distance"),OU.forEach(t),v8=n(Ir,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Zf=l(Ir,"CODE",{});var zU=r(Zf);j8=n(zU,"stage3_max_reuse_distance"),zU.forEach(t),g8=n(Ir,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ir.forEach(t),Og=c(e),ai=l(e,"P",{});var TU=r(ai);w8=n(TU,"The following configuration values depend on the model\u2019s hidden size:"),TU.forEach(t),zg=c(e),Ce=l(e,"UL",{});var rc=r(Ce);So=l(rc,"LI",{});var v3=r(So);Gf=l(v3,"CODE",{});var AU=r(Gf);y8=n(AU,"reduce_bucket_size"),AU.forEach(t),b8=n(v3,": "),Mf=l(v3,"CODE",{});var SU=r(Mf);E8=n(SU,"hidden_size*hidden_size"),SU.forEach(t),v3.forEach(t),q8=c(rc),xo=l(rc,"LI",{});var j3=r(xo);Nf=l(j3,"CODE",{});var xU=r(Nf);$8=n(xU,"stage3_prefetch_bucket_size"),xU.forEach(t),k8=n(j3,": "),Hf=l(j3,"CODE",{});var CU=r(Hf);D8=n(CU,"0.9 * hidden_size * hidden_size"),CU.forEach(t),j3.forEach(t),P8=c(rc),Co=l(rc,"LI",{});var g3=r(Co);Wf=l(g3,"CODE",{});var IU=r(Wf);O8=n(IU,"stage3_param_persistence_threshold"),IU.forEach(t),z8=n(g3,": "),Ff=l(g3,"CODE",{});var RU=r(Ff);T8=n(RU,"10 * hidden_size"),RU.forEach(t),g3.forEach(t),rc.forEach(t),Tg=c(e),Ie=l(e,"P",{});var pc=r(Ie);A8=n(pc,"therefore set these values to "),Bf=l(pc,"CODE",{});var UU=r(Bf);S8=n(UU,"auto"),UU.forEach(t),x8=n(pc," and the "),ni=l(pc,"A",{href:!0});var LU=r(ni);C8=n(LU,"Trainer"),LU.forEach(t),I8=n(pc,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),pc.forEach(t),Ag=c(e),Io=l(e,"P",{});var Wx=r(Io);Vf=l(Wx,"CODE",{});var ZU=r(Vf);R8=n(ZU,"stage3_gather_fp16_weights_on_model_save"),ZU.forEach(t),U8=n(Wx,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Wx.forEach(t),Sg=c(e),Q=l(e,"P",{});var mn=r(Q);L8=n(mn,"If you\u2019re migrating from ZeRO-2 configuration note that "),Yf=l(mn,"CODE",{});var GU=r(Yf);Z8=n(GU,"allgather_partitions"),GU.forEach(t),G8=n(mn,", "),Kf=l(mn,"CODE",{});var MU=r(Kf);M8=n(MU,"allgather_bucket_size"),MU.forEach(t),N8=n(mn,` and
`),Jf=l(mn,"CODE",{});var NU=r(Jf);H8=n(NU,"reduce_scatter"),NU.forEach(t),W8=n(mn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),mn.forEach(t),xg=c(e),oi=l(e,"UL",{});var HU=r(oi);Ro=l(HU,"LI",{});var w3=r(Ro);Xf=l(w3,"CODE",{});var WU=r(Xf);F8=n(WU,"sub_group_size"),WU.forEach(t),B8=n(w3,": "),Qf=l(w3,"CODE",{});var FU=r(Qf);V8=n(FU,"1e9"),FU.forEach(t),w3.forEach(t),HU.forEach(t),Cg=c(e),ve=l(e,"P",{});var Rr=r(ve);ed=l(Rr,"CODE",{});var BU=r(ed);Y8=n(BU,"sub_group_size"),BU.forEach(t),K8=n(Rr,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),sd=l(Rr,"CODE",{});var VU=r(sd);J8=n(VU,"sub_group_size"),VU.forEach(t),X8=n(Rr,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),td=l(Rr,"CODE",{});var YU=r(td);Q8=n(YU,"sub_group_size"),YU.forEach(t),e7=n(Rr,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Rr.forEach(t),Ig=c(e),Re=l(e,"P",{});var ic=r(Re);s7=n(ic,"You can leave "),ad=l(ic,"CODE",{});var KU=r(ad);t7=n(KU,"sub_group_size"),KU.forEach(t),a7=n(ic," to its default value of "),nd=l(ic,"EM",{});var JU=r(nd);n7=n(JU,"1e9"),JU.forEach(t),o7=n(ic,` when not using NVMe offload. You may want to change its
default value in the following cases:`),ic.forEach(t),Rg=c(e),Vt=l(e,"OL",{});var y3=r(Vt);Uo=l(y3,"LI",{});var b3=r(Uo);l7=n(b3,"Running into OOM during optimizer step: Reduce "),od=l(b3,"CODE",{});var XU=r(od);r7=n(XU,"sub_group_size"),XU.forEach(t),p7=n(b3," to reduce memory utilization of temporary buffers"),b3.forEach(t),i7=c(y3),Lo=l(y3,"LI",{});var E3=r(Lo);u7=n(E3,"Optimizer Step is taking a long time: Increase "),ld=l(E3,"CODE",{});var QU=r(ld);c7=n(QU,"sub_group_size"),QU.forEach(t),h7=n(E3,` to improve bandwidth utilization as a result of
the increased data buffers.`),E3.forEach(t),y3.forEach(t),Ug=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),Lg=c(e),Ps=l(e,"H3",{class:!0});var q3=r(Ps);Yt=l(q3,"A",{id:!0,class:!0,href:!0});var eL=r(Yt);rd=l(eL,"SPAN",{});var sL=r(rd);d(Zo.$$.fragment,sL),sL.forEach(t),eL.forEach(t),f7=c(q3),pd=l(q3,"SPAN",{});var tL=r(pd);d7=n(tL,"NVMe Support"),tL.forEach(t),q3.forEach(t),Zg=c(e),ri=l(e,"P",{});var aL=r(ri);m7=n(aL,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),aL.forEach(t),Gg=c(e),pi=l(e,"P",{});var nL=r(pi);_7=n(nL,"The following configuration example enables NVMe to offload both optimizer states and the params:"),nL.forEach(t),Mg=c(e),d(Go.$$.fragment,e),Ng=c(e),Kt=l(e,"P",{});var $3=r(Kt);v7=n($3,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),id=l($3,"EM",{});var oL=r(id);j7=n(oL,"\u201Cdevice\u201D: \u201Ccpu\u201D"),oL.forEach(t),g7=n($3,")."),$3.forEach(t),Hg=c(e),Ue=l(e,"P",{});var uc=r(Ue);w7=n(uc,"Here is the full documentation for offloading "),Mo=l(uc,"A",{href:!0,rel:!0});var lL=r(Mo);y7=n(lL,"optimizer states"),lL.forEach(t),b7=n(uc," and "),No=l(uc,"A",{href:!0,rel:!0});var rL=r(No);E7=n(rL,"parameters"),rL.forEach(t),q7=n(uc,"."),uc.forEach(t),Wg=c(e),Jt=l(e,"P",{});var k3=r(Jt);$7=n(k3,"Make sure that your "),ud=l(k3,"CODE",{});var pL=r(ud);k7=n(pL,"nvme_path"),pL.forEach(t),D7=n(k3,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),k3.forEach(t),Fg=c(e),Le=l(e,"P",{});var cc=r(Le);P7=n(cc,"In order to figure out the optimal "),cd=l(cc,"CODE",{});var iL=r(cd);O7=n(iL,"aio"),iL.forEach(t),z7=n(cc,` configuration block you must run a benchmark on your target setup, as
`),Ho=l(cc,"A",{href:!0,rel:!0});var uL=r(Ho);T7=n(uL,"explained here"),uL.forEach(t),A7=n(cc,"."),cc.forEach(t),Bg=c(e),ii=l(e,"A",{id:!0}),r(ii).forEach(t),Vg=c(e),Os=l(e,"H4",{class:!0});var D3=r(Os);Xt=l(D3,"A",{id:!0,class:!0,href:!0});var cL=r(Xt);hd=l(cL,"SPAN",{});var hL=r(hd);d(Wo.$$.fragment,hL),hL.forEach(t),cL.forEach(t),S7=c(D3),fd=l(D3,"SPAN",{});var fL=r(fd);x7=n(fL,"ZeRO-2 vs ZeRO-3 Performance"),fL.forEach(t),D3.forEach(t),Yg=c(e),ui=l(e,"P",{});var dL=r(ui);C7=n(dL,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),dL.forEach(t),Kg=c(e),ci=l(e,"P",{});var mL=r(ci);I7=n(mL,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),mL.forEach(t),Jg=c(e),Qt=l(e,"UL",{});var P3=r(Qt);zs=l(P3,"LI",{});var hc=r(zs);R7=n(hc,"set "),dd=l(hc,"CODE",{});var _L=r(dd);U7=n(_L,"stage3_param_persistence_threshold"),_L.forEach(t),L7=n(hc," to a very large number - larger than the largest parameter, e.g., "),md=l(hc,"CODE",{});var vL=r(md);Z7=n(vL,"6 * hidden_size * hidden_size"),vL.forEach(t),G7=n(hc,". This will keep the parameters on the GPUs."),hc.forEach(t),M7=c(P3),Fo=l(P3,"LI",{});var O3=r(Fo);N7=n(O3,"turn off "),_d=l(O3,"CODE",{});var jL=r(_d);H7=n(jL,"offload_params"),jL.forEach(t),W7=n(O3," since ZeRO-2 doesn\u2019t have that option."),O3.forEach(t),P3.forEach(t),Xg=c(e),Ze=l(e,"P",{});var fc=r(Ze);F7=n(fc,"The performance will likely improve significantly with just "),vd=l(fc,"CODE",{});var gL=r(vd);B7=n(gL,"offload_params"),gL.forEach(t),V7=n(fc,` turned off, even if you don\u2019t change
`),jd=l(fc,"CODE",{});var wL=r(jd);Y7=n(wL,"stage3_param_persistence_threshold"),wL.forEach(t),K7=n(fc,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),fc.forEach(t),Qg=c(e),hi=l(e,"A",{id:!0}),r(hi).forEach(t),ew=c(e),Ts=l(e,"H4",{class:!0});var z3=r(Ts);ea=l(z3,"A",{id:!0,class:!0,href:!0});var yL=r(ea);gd=l(yL,"SPAN",{});var bL=r(gd);d(Bo.$$.fragment,bL),bL.forEach(t),yL.forEach(t),J7=c(z3),wd=l(z3,"SPAN",{});var EL=r(wd);X7=n(EL,"ZeRO-2 Example"),EL.forEach(t),z3.forEach(t),sw=c(e),sa=l(e,"P",{});var T3=r(sa);Q7=n(T3,"Here is a full ZeRO-2 auto-configuration file "),yd=l(T3,"CODE",{});var qL=r(yd);e9=n(qL,"ds_config_zero2.json"),qL.forEach(t),s9=n(T3,":"),T3.forEach(t),tw=c(e),d(Vo.$$.fragment,e),aw=c(e),ta=l(e,"P",{});var A3=r(ta);t9=n(A3,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),bd=l(A3,"CODE",{});var $L=r(bd);a9=n($L,"auto"),$L.forEach(t),n9=n(A3," settings in it."),A3.forEach(t),nw=c(e),d(Yo.$$.fragment,e),ow=c(e),fi=l(e,"A",{id:!0}),r(fi).forEach(t),lw=c(e),As=l(e,"H4",{class:!0});var S3=r(As);aa=l(S3,"A",{id:!0,class:!0,href:!0});var kL=r(aa);Ed=l(kL,"SPAN",{});var DL=r(Ed);d(Ko.$$.fragment,DL),DL.forEach(t),kL.forEach(t),o9=c(S3),qd=l(S3,"SPAN",{});var PL=r(qd);l9=n(PL,"ZeRO-3 Example"),PL.forEach(t),S3.forEach(t),rw=c(e),na=l(e,"P",{});var x3=r(na);r9=n(x3,"Here is a full ZeRO-3 auto-configuration file "),$d=l(x3,"CODE",{});var OL=r($d);p9=n(OL,"ds_config_zero3.json"),OL.forEach(t),i9=n(x3,":"),x3.forEach(t),pw=c(e),d(Jo.$$.fragment,e),iw=c(e),oa=l(e,"P",{});var C3=r(oa);u9=n(C3,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),kd=l(C3,"CODE",{});var zL=r(kd);c9=n(zL,"auto"),zL.forEach(t),h9=n(C3," settings in it."),C3.forEach(t),uw=c(e),d(Xo.$$.fragment,e),cw=c(e),Ss=l(e,"H3",{class:!0});var I3=r(Ss);la=l(I3,"A",{id:!0,class:!0,href:!0});var TL=r(la);Dd=l(TL,"SPAN",{});var AL=r(Dd);d(Qo.$$.fragment,AL),AL.forEach(t),TL.forEach(t),f9=c(I3),Pd=l(I3,"SPAN",{});var SL=r(Pd);d9=n(SL,"Optimizer and Scheduler"),SL.forEach(t),I3.forEach(t),hw=c(e),ra=l(e,"P",{});var R3=r(ra);m9=n(R3,"As long as you don\u2019t enable "),Od=l(R3,"CODE",{});var xL=r(Od);_9=n(xL,"offload_optimizer"),xL.forEach(t),v9=n(R3,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),R3.forEach(t),fw=c(e),di=l(e,"P",{});var CL=r(di);j9=n(CL,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),CL.forEach(t),dw=c(e),pa=l(e,"P",{});var U3=r(pa);g9=n(U3,"It is possible to use a non-DeepSpeed optimizer when "),zd=l(U3,"CODE",{});var IL=r(zd);w9=n(IL,"offload_optimizer"),IL.forEach(t),y9=n(U3,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),U3.forEach(t),mw=c(e),mi=l(e,"A",{id:!0}),r(mi).forEach(t),_w=c(e),xs=l(e,"H4",{class:!0});var L3=r(xs);ia=l(L3,"A",{id:!0,class:!0,href:!0});var RL=r(ia);Td=l(RL,"SPAN",{});var UL=r(Td);d(el.$$.fragment,UL),UL.forEach(t),RL.forEach(t),b9=c(L3),Ad=l(L3,"SPAN",{});var LL=r(Ad);E9=n(LL,"Optimizer"),LL.forEach(t),L3.forEach(t),vw=c(e),Ge=l(e,"P",{});var dc=r(Ge);q9=n(dc,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Sd=l(dc,"CODE",{});var ZL=r(Sd);$9=n(ZL,"torch"),ZL.forEach(t),k9=n(dc,". The full documentation is "),sl=l(dc,"A",{href:!0,rel:!0});var GL=r(sl);D9=n(GL,"here"),GL.forEach(t),P9=n(dc,"."),dc.forEach(t),jw=c(e),E=l(e,"P",{});var P=r(E);O9=n(P,"If you don\u2019t configure the "),xd=l(P,"CODE",{});var ML=r(xd);z9=n(ML,"optimizer"),ML.forEach(t),T9=n(P," entry in the configuration file, the "),_i=l(P,"A",{href:!0});var NL=r(_i);A9=n(NL,"Trainer"),NL.forEach(t),S9=n(P,` will
automatically set it to `),Cd=l(P,"CODE",{});var HL=r(Cd);x9=n(HL,"AdamW"),HL.forEach(t),C9=n(P,` and will use the supplied values or the defaults for the following command line
arguments: `),Id=l(P,"CODE",{});var WL=r(Id);I9=n(WL,"--learning_rate"),WL.forEach(t),R9=n(P,", "),Rd=l(P,"CODE",{});var FL=r(Rd);U9=n(FL,"--adam_beta1"),FL.forEach(t),L9=n(P,", "),Ud=l(P,"CODE",{});var BL=r(Ud);Z9=n(BL,"--adam_beta2"),BL.forEach(t),G9=n(P,", "),Ld=l(P,"CODE",{});var VL=r(Ld);M9=n(VL,"--adam_epsilon"),VL.forEach(t),N9=n(P," and "),Zd=l(P,"CODE",{});var YL=r(Zd);H9=n(YL,"--weight_decay"),YL.forEach(t),W9=n(P,"."),P.forEach(t),gw=c(e),Me=l(e,"P",{});var mc=r(Me);F9=n(mc,"Here is an example of the auto-configured "),Gd=l(mc,"CODE",{});var KL=r(Gd);B9=n(KL,"optimizer"),KL.forEach(t),V9=n(mc," entry for "),Md=l(mc,"CODE",{});var JL=r(Md);Y9=n(JL,"AdamW"),JL.forEach(t),K9=n(mc,":"),mc.forEach(t),ww=c(e),d(tl.$$.fragment,e),yw=c(e),vi=l(e,"P",{});var XL=r(vi);J9=n(XL,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),XL.forEach(t),bw=c(e),ee=l(e,"UL",{});var _n=r(ee);al=l(_n,"LI",{});var Z3=r(al);Nd=l(Z3,"CODE",{});var QL=r(Nd);X9=n(QL,"lr"),QL.forEach(t),Q9=n(Z3," with the value of "),Hd=l(Z3,"CODE",{});var eZ=r(Hd);ek=n(eZ,"--learning_rate"),eZ.forEach(t),Z3.forEach(t),sk=c(_n),nl=l(_n,"LI",{});var G3=r(nl);Wd=l(G3,"CODE",{});var sZ=r(Wd);tk=n(sZ,"betas"),sZ.forEach(t),ak=n(G3," with the value of "),Fd=l(G3,"CODE",{});var tZ=r(Fd);nk=n(tZ,"--adam_beta1 --adam_beta2"),tZ.forEach(t),G3.forEach(t),ok=c(_n),ol=l(_n,"LI",{});var M3=r(ol);Bd=l(M3,"CODE",{});var aZ=r(Bd);lk=n(aZ,"eps"),aZ.forEach(t),rk=n(M3," with the value of "),Vd=l(M3,"CODE",{});var nZ=r(Vd);pk=n(nZ,"--adam_epsilon"),nZ.forEach(t),M3.forEach(t),ik=c(_n),ll=l(_n,"LI",{});var N3=r(ll);Yd=l(N3,"CODE",{});var oZ=r(Yd);uk=n(oZ,"weight_decay"),oZ.forEach(t),ck=n(N3," with the value of "),Kd=l(N3,"CODE",{});var lZ=r(Kd);hk=n(lZ,"--weight_decay"),lZ.forEach(t),N3.forEach(t),_n.forEach(t),Ew=c(e),ji=l(e,"P",{});var rZ=r(ji);fk=n(rZ,"Therefore please remember to tune the shared hyperparameters on the command line."),rZ.forEach(t),qw=c(e),gi=l(e,"P",{});var pZ=r(gi);dk=n(pZ,"You can also set the values explicitly:"),pZ.forEach(t),$w=c(e),d(rl.$$.fragment,e),kw=c(e),ua=l(e,"P",{});var H3=r(ua);mk=n(H3,"But then you\u2019re on your own synchronizing the "),wi=l(H3,"A",{href:!0});var iZ=r(wi);_k=n(iZ,"Trainer"),iZ.forEach(t),vk=n(H3,` command line arguments and the DeepSpeed
configuration.`),H3.forEach(t),Dw=c(e),yi=l(e,"P",{});var uZ=r(yi);jk=n(uZ,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),uZ.forEach(t),Pw=c(e),d(pl.$$.fragment,e),Ow=c(e),se=l(e,"P",{});var vn=r(se);gk=n(vn,"Similarly to "),Jd=l(vn,"CODE",{});var cZ=r(Jd);wk=n(cZ,"AdamW"),cZ.forEach(t),yk=n(vn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Xd=l(vn,"CODE",{});var hZ=r(Xd);bk=n(hZ,"weight_decay"),hZ.forEach(t),Ek=n(vn," around "),Qd=l(vn,"CODE",{});var fZ=r(Qd);qk=n(fZ,"0.01"),fZ.forEach(t),$k=n(vn,"."),vn.forEach(t),zw=c(e),bi=l(e,"A",{id:!0}),r(bi).forEach(t),Tw=c(e),Cs=l(e,"H4",{class:!0});var W3=r(Cs);ca=l(W3,"A",{id:!0,class:!0,href:!0});var dZ=r(ca);em=l(dZ,"SPAN",{});var mZ=r(em);d(il.$$.fragment,mZ),mZ.forEach(t),dZ.forEach(t),kk=c(W3),sm=l(W3,"SPAN",{});var _Z=r(sm);Dk=n(_Z,"Scheduler"),_Z.forEach(t),W3.forEach(t),Aw=c(e),x=l(e,"P",{});var he=r(x);Pk=n(he,"DeepSpeed supports "),tm=l(he,"CODE",{});var vZ=r(tm);Ok=n(vZ,"LRRangeTest"),vZ.forEach(t),zk=n(he,", "),am=l(he,"CODE",{});var jZ=r(am);Tk=n(jZ,"OneCycle"),jZ.forEach(t),Ak=n(he,", "),nm=l(he,"CODE",{});var gZ=r(nm);Sk=n(gZ,"WarmupLR"),gZ.forEach(t),xk=n(he," and "),om=l(he,"CODE",{});var wZ=r(om);Ck=n(wZ,"WarmupDecayLR"),wZ.forEach(t),Ik=n(he,` learning rate schedulers. The full
documentation is `),ul=l(he,"A",{href:!0,rel:!0});var yZ=r(ul);Rk=n(yZ,"here"),yZ.forEach(t),Uk=n(he,"."),he.forEach(t),Sw=c(e),Ei=l(e,"P",{});var bZ=r(Ei);Lk=n(bZ,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),bZ.forEach(t),xw=c(e),ha=l(e,"UL",{});var F3=r(ha);cl=l(F3,"LI",{});var B3=r(cl);lm=l(B3,"CODE",{});var EZ=r(lm);Zk=n(EZ,"WarmupLR"),EZ.forEach(t),Gk=n(B3," via "),rm=l(B3,"CODE",{});var qZ=r(rm);Mk=n(qZ,"--lr_scheduler_type constant_with_warmup"),qZ.forEach(t),B3.forEach(t),Nk=c(F3),Ne=l(F3,"LI",{});var Ur=r(Ne);pm=l(Ur,"CODE",{});var $Z=r(pm);Hk=n($Z,"WarmupDecayLR"),$Z.forEach(t),Wk=n(Ur," via "),im=l(Ur,"CODE",{});var kZ=r(im);Fk=n(kZ,"--lr_scheduler_type linear"),kZ.forEach(t),Bk=n(Ur,". This is also the default value for "),um=l(Ur,"CODE",{});var DZ=r(um);Vk=n(DZ,"--lr_scheduler_type"),DZ.forEach(t),Yk=n(Ur,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Ur.forEach(t),F3.forEach(t),Cw=c(e),D=l(e,"P",{});var W=r(D);Kk=n(W,"If you don\u2019t configure the "),cm=l(W,"CODE",{});var PZ=r(cm);Jk=n(PZ,"scheduler"),PZ.forEach(t),Xk=n(W," entry in the configuration file, the "),qi=l(W,"A",{href:!0});var OZ=r(qi);Qk=n(OZ,"Trainer"),OZ.forEach(t),eD=n(W,` will use
the values of `),hm=l(W,"CODE",{});var zZ=r(hm);sD=n(zZ,"--lr_scheduler_type"),zZ.forEach(t),tD=n(W,", "),fm=l(W,"CODE",{});var TZ=r(fm);aD=n(TZ,"--learning_rate"),TZ.forEach(t),nD=n(W," and "),dm=l(W,"CODE",{});var AZ=r(dm);oD=n(AZ,"--warmup_steps"),AZ.forEach(t),lD=n(W," or "),mm=l(W,"CODE",{});var SZ=r(mm);rD=n(SZ,"--warmup_ratio"),SZ.forEach(t),pD=n(W,` to configure a
\u{1F917} Transformers version of it.`),W.forEach(t),Iw=c(e),He=l(e,"P",{});var _c=r(He);iD=n(_c,"Here is an example of the auto-configured "),_m=l(_c,"CODE",{});var xZ=r(_m);uD=n(xZ,"scheduler"),xZ.forEach(t),cD=n(_c," entry for "),vm=l(_c,"CODE",{});var CZ=r(vm);hD=n(CZ,"WarmupLR"),CZ.forEach(t),fD=n(_c,":"),_c.forEach(t),Rw=c(e),d(hl.$$.fragment,e),Uw=c(e),We=l(e,"P",{});var vc=r(We);dD=n(vc,"Since "),jm=l(vc,"EM",{});var IZ=r(jm);mD=n(IZ,"\u201Cauto\u201D"),IZ.forEach(t),_D=n(vc," is used the "),$i=l(vc,"A",{href:!0});var RZ=r($i);vD=n(RZ,"Trainer"),RZ.forEach(t),jD=n(vc,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),vc.forEach(t),Lw=c(e),te=l(e,"UL",{});var jn=r(te);fa=l(jn,"LI",{});var V1=r(fa);gm=l(V1,"CODE",{});var UZ=r(gm);gD=n(UZ,"warmup_min_lr"),UZ.forEach(t),wD=n(V1," with the value of "),wm=l(V1,"CODE",{});var LZ=r(wm);yD=n(LZ,"0"),LZ.forEach(t),bD=n(V1,"."),V1.forEach(t),ED=c(jn),da=l(jn,"LI",{});var Y1=r(da);ym=l(Y1,"CODE",{});var ZZ=r(ym);qD=n(ZZ,"warmup_max_lr"),ZZ.forEach(t),$D=n(Y1," with the value of "),bm=l(Y1,"CODE",{});var GZ=r(bm);kD=n(GZ,"--learning_rate"),GZ.forEach(t),DD=n(Y1,"."),Y1.forEach(t),PD=c(jn),Fe=l(jn,"LI",{});var Lr=r(Fe);Em=l(Lr,"CODE",{});var MZ=r(Em);OD=n(MZ,"warmup_num_steps"),MZ.forEach(t),zD=n(Lr," with the value of "),qm=l(Lr,"CODE",{});var NZ=r(qm);TD=n(NZ,"--warmup_steps"),NZ.forEach(t),AD=n(Lr," if provided. Otherwise will use "),$m=l(Lr,"CODE",{});var HZ=r($m);SD=n(HZ,"--warmup_ratio"),HZ.forEach(t),xD=n(Lr,`
multiplied by the number of training steps and rounded up.`),Lr.forEach(t),CD=c(jn),Be=l(jn,"LI",{});var Zr=r(Be);km=l(Zr,"CODE",{});var WZ=r(km);ID=n(WZ,"total_num_steps"),WZ.forEach(t),RD=n(Zr," with either the value of "),Dm=l(Zr,"CODE",{});var FZ=r(Dm);UD=n(FZ,"--max_steps"),FZ.forEach(t),LD=n(Zr,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Pm=l(Zr,"CODE",{});var BZ=r(Pm);ZD=n(BZ,"WarmupDecayLR"),BZ.forEach(t),GD=n(Zr,")."),Zr.forEach(t),jn.forEach(t),Zw=c(e),ki=l(e,"P",{});var VZ=r(ki);MD=n(VZ,"You can, of course, take over any or all of the configuration values and set those yourself:"),VZ.forEach(t),Gw=c(e),d(fl.$$.fragment,e),Mw=c(e),ma=l(e,"P",{});var V3=r(ma);ND=n(V3,"But then you\u2019re on your own synchronizing the "),Di=l(V3,"A",{href:!0});var YZ=r(Di);HD=n(YZ,"Trainer"),YZ.forEach(t),WD=n(V3,` command line arguments and the DeepSpeed
configuration.`),V3.forEach(t),Nw=c(e),_a=l(e,"P",{});var Y3=r(_a);FD=n(Y3,"For example, for "),Om=l(Y3,"CODE",{});var KZ=r(Om);BD=n(KZ,"WarmupDecayLR"),KZ.forEach(t),VD=n(Y3,", you can use the following entry:"),Y3.forEach(t),Hw=c(e),d(dl.$$.fragment,e),Ww=c(e),M=l(e,"P",{});var is=r(M);YD=n(is,"and `"),zm=l(is,"CODE",{});var JZ=r(zm);KD=n(JZ,"total_num_steps"),JZ.forEach(t),JD=n(is,", "),Tm=l(is,"CODE",{});var XZ=r(Tm);XD=n(XZ,"warmup_max_lr"),XZ.forEach(t),QD=n(is,", "),Am=l(is,"CODE",{});var QZ=r(Am);eP=n(QZ,"warmup_num_steps"),QZ.forEach(t),sP=n(is," and "),Sm=l(is,"CODE",{});var eG=r(Sm);tP=n(eG,"total_num_steps"),eG.forEach(t),aP=n(is," will be set at loading time."),is.forEach(t),Fw=c(e),Pi=l(e,"A",{id:!0}),r(Pi).forEach(t),Bw=c(e),Is=l(e,"H3",{class:!0});var K3=r(Is);va=l(K3,"A",{id:!0,class:!0,href:!0});var sG=r(va);xm=l(sG,"SPAN",{});var tG=r(xm);d(ml.$$.fragment,tG),tG.forEach(t),sG.forEach(t),nP=c(K3),Cm=l(K3,"SPAN",{});var aG=r(Cm);oP=n(aG,"fp32 Precision"),aG.forEach(t),K3.forEach(t),Vw=c(e),Oi=l(e,"P",{});var nG=r(Oi);lP=n(nG,"Deepspeed supports the full fp32 and the fp16 mixed precision."),nG.forEach(t),Yw=c(e),ja=l(e,"P",{});var J3=r(ja);rP=n(J3,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Im=l(J3,"CODE",{});var oG=r(Im);pP=n(oG,"NaN"),oG.forEach(t),iP=n(J3,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),J3.forEach(t),Kw=c(e),d(_l.$$.fragment,e),Jw=c(e),ga=l(e,"P",{});var X3=r(ga);uP=n(X3,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),vl=l(X3,"A",{href:!0,rel:!0});var lG=r(vl);cP=n(lG,"TensorFloat-32(TF32) on Ampere devices"),lG.forEach(t),hP=n(X3,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),X3.forEach(t),Xw=c(e),zi=l(e,"A",{id:!0}),r(zi).forEach(t),Qw=c(e),Rs=l(e,"H3",{class:!0});var Q3=r(Rs);wa=l(Q3,"A",{id:!0,class:!0,href:!0});var rG=r(wa);Rm=l(rG,"SPAN",{});var pG=r(Rm);d(jl.$$.fragment,pG),pG.forEach(t),rG.forEach(t),fP=c(Q3),Um=l(Q3,"SPAN",{});var iG=r(Um);dP=n(iG,"Automatic Mixed Precision"),iG.forEach(t),Q3.forEach(t),ey=c(e),Ti=l(e,"P",{});var uG=r(Ti);mP=n(uG,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),uG.forEach(t),sy=c(e),Ai=l(e,"P",{});var cG=r(Ai);_P=n(cG,"To configure pytorch AMP-like mode set:"),cG.forEach(t),ty=c(e),d(gl.$$.fragment,e),ay=c(e),Ve=l(e,"P",{});var jc=r(Ve);vP=n(jc,"and the "),Si=l(jc,"A",{href:!0});var hG=r(Si);jP=n(hG,"Trainer"),hG.forEach(t),gP=n(jc,` will automatically enable or disable it based on the value of
`),Lm=l(jc,"CODE",{});var fG=r(Lm);wP=n(fG,"args.fp16_backend"),fG.forEach(t),yP=n(jc,". The rest of config values are up to you."),jc.forEach(t),ny=c(e),ya=l(e,"P",{});var eE=r(ya);bP=n(eE,"This mode gets enabled when "),Zm=l(eE,"CODE",{});var dG=r(Zm);EP=n(dG,"--fp16 --fp16_backend amp"),dG.forEach(t),qP=n(eE," command line args are passed."),eE.forEach(t),oy=c(e),xi=l(e,"P",{});var mG=r(xi);$P=n(mG,"You can also enable/disable this mode explicitly:"),mG.forEach(t),ly=c(e),d(wl.$$.fragment,e),ry=c(e),ba=l(e,"P",{});var sE=r(ba);kP=n(sE,"But then you\u2019re on your own synchronizing the "),Ci=l(sE,"A",{href:!0});var _G=r(Ci);DP=n(_G,"Trainer"),_G.forEach(t),PP=n(sE,` command line arguments and the DeepSpeed
configuration.`),sE.forEach(t),py=c(e),Ea=l(e,"P",{});var tE=r(Ea);OP=n(tE,"Here is the "),yl=l(tE,"A",{href:!0,rel:!0});var vG=r(yl);zP=n(vG,"documentation"),vG.forEach(t),TP=n(tE,"."),tE.forEach(t),iy=c(e),Ii=l(e,"P",{});var jG=r(Ii);AP=n(jG,"To configure apex AMP-like mode set:"),jG.forEach(t),uy=c(e),d(bl.$$.fragment,e),cy=c(e),ae=l(e,"P",{});var gn=r(ae);SP=n(gn,"and the "),Ri=l(gn,"A",{href:!0});var gG=r(Ri);xP=n(gG,"Trainer"),gG.forEach(t),CP=n(gn," will automatically configure it based on the values of "),Gm=l(gn,"CODE",{});var wG=r(Gm);IP=n(wG,"args.fp16_backend"),wG.forEach(t),RP=n(gn,` and
`),Mm=l(gn,"CODE",{});var yG=r(Mm);UP=n(yG,"args.fp16_opt_level"),yG.forEach(t),LP=n(gn,"."),gn.forEach(t),hy=c(e),qa=l(e,"P",{});var aE=r(qa);ZP=n(aE,"This mode gets enabled when "),Nm=l(aE,"CODE",{});var bG=r(Nm);GP=n(bG,"--fp16 --fp16_backend apex --fp16_opt_level 01"),bG.forEach(t),MP=n(aE," command line args are passed."),aE.forEach(t),fy=c(e),Ui=l(e,"P",{});var EG=r(Ui);NP=n(EG,"You can also configure this mode explicitly:"),EG.forEach(t),dy=c(e),d(El.$$.fragment,e),my=c(e),$a=l(e,"P",{});var nE=r($a);HP=n(nE,"But then you\u2019re on your own synchronizing the "),Li=l(nE,"A",{href:!0});var qG=r(Li);WP=n(qG,"Trainer"),qG.forEach(t),FP=n(nE,` command line arguments and the DeepSpeed
configuration.`),nE.forEach(t),_y=c(e),ka=l(e,"P",{});var oE=r(ka);BP=n(oE,"Here is the "),ql=l(oE,"A",{href:!0,rel:!0});var $G=r(ql);VP=n($G,"documentation"),$G.forEach(t),YP=n(oE,"."),oE.forEach(t),vy=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),jy=c(e),Us=l(e,"H3",{class:!0});var lE=r(Us);Da=l(lE,"A",{id:!0,class:!0,href:!0});var kG=r(Da);Hm=l(kG,"SPAN",{});var DG=r(Hm);d($l.$$.fragment,DG),DG.forEach(t),kG.forEach(t),KP=c(lE),Wm=l(lE,"SPAN",{});var PG=r(Wm);JP=n(PG,"Batch Size"),PG.forEach(t),lE.forEach(t),gy=c(e),Gi=l(e,"P",{});var OG=r(Gi);XP=n(OG,"To configure batch size, use:"),OG.forEach(t),wy=c(e),d(kl.$$.fragment,e),yy=c(e),C=l(e,"P",{});var fe=r(C);QP=n(fe,"and the "),Mi=l(fe,"A",{href:!0});var zG=r(Mi);eO=n(zG,"Trainer"),zG.forEach(t),sO=n(fe," will automatically set "),Fm=l(fe,"CODE",{});var TG=r(Fm);tO=n(TG,"train_micro_batch_size_per_gpu"),TG.forEach(t),aO=n(fe,` to the value of
`),Bm=l(fe,"CODE",{});var AG=r(Bm);nO=n(AG,"args.per_device_train_batch_size"),AG.forEach(t),oO=n(fe," and "),Vm=l(fe,"CODE",{});var SG=r(Vm);lO=n(SG,"train_batch_size"),SG.forEach(t),rO=n(fe," to "),Ym=l(fe,"CODE",{});var xG=r(Ym);pO=n(xG,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),xG.forEach(t),iO=n(fe,"."),fe.forEach(t),by=c(e),Ni=l(e,"P",{});var CG=r(Ni);uO=n(CG,"You can also set the values explicitly:"),CG.forEach(t),Ey=c(e),d(Dl.$$.fragment,e),qy=c(e),Pa=l(e,"P",{});var rE=r(Pa);cO=n(rE,"But then you\u2019re on your own synchronizing the "),Hi=l(rE,"A",{href:!0});var IG=r(Hi);hO=n(IG,"Trainer"),IG.forEach(t),fO=n(rE,` command line arguments and the DeepSpeed
configuration.`),rE.forEach(t),$y=c(e),Wi=l(e,"A",{id:!0}),r(Wi).forEach(t),ky=c(e),Ls=l(e,"H3",{class:!0});var pE=r(Ls);Oa=l(pE,"A",{id:!0,class:!0,href:!0});var RG=r(Oa);Km=l(RG,"SPAN",{});var UG=r(Km);d(Pl.$$.fragment,UG),UG.forEach(t),RG.forEach(t),dO=c(pE),Jm=l(pE,"SPAN",{});var LG=r(Jm);mO=n(LG,"Gradient Accumulation"),LG.forEach(t),pE.forEach(t),Dy=c(e),Fi=l(e,"P",{});var ZG=r(Fi);_O=n(ZG,"To configure gradient accumulation set:"),ZG.forEach(t),Py=c(e),d(Ol.$$.fragment,e),Oy=c(e),Ye=l(e,"P",{});var gc=r(Ye);vO=n(gc,"and the "),Bi=l(gc,"A",{href:!0});var GG=r(Bi);jO=n(GG,"Trainer"),GG.forEach(t),gO=n(gc," will automatically set it to the value of "),Xm=l(gc,"CODE",{});var MG=r(Xm);wO=n(MG,"args.gradient_accumulation_steps"),MG.forEach(t),yO=n(gc,"."),gc.forEach(t),zy=c(e),Vi=l(e,"P",{});var NG=r(Vi);bO=n(NG,"You can also set the value explicitly:"),NG.forEach(t),Ty=c(e),d(zl.$$.fragment,e),Ay=c(e),za=l(e,"P",{});var iE=r(za);EO=n(iE,"But then you\u2019re on your own synchronizing the "),Yi=l(iE,"A",{href:!0});var HG=r(Yi);qO=n(HG,"Trainer"),HG.forEach(t),$O=n(iE,` command line arguments and the DeepSpeed
configuration.`),iE.forEach(t),Sy=c(e),Ki=l(e,"A",{id:!0}),r(Ki).forEach(t),xy=c(e),Zs=l(e,"H3",{class:!0});var uE=r(Zs);Ta=l(uE,"A",{id:!0,class:!0,href:!0});var WG=r(Ta);Qm=l(WG,"SPAN",{});var FG=r(Qm);d(Tl.$$.fragment,FG),FG.forEach(t),WG.forEach(t),kO=c(uE),e_=l(uE,"SPAN",{});var BG=r(e_);DO=n(BG,"Gradient Clipping"),BG.forEach(t),uE.forEach(t),Cy=c(e),Ji=l(e,"P",{});var VG=r(Ji);PO=n(VG,"To configure gradient gradient clipping set:"),VG.forEach(t),Iy=c(e),d(Al.$$.fragment,e),Ry=c(e),Ke=l(e,"P",{});var wc=r(Ke);OO=n(wc,"and the "),Xi=l(wc,"A",{href:!0});var YG=r(Xi);zO=n(YG,"Trainer"),YG.forEach(t),TO=n(wc," will automatically set it to the value of "),s_=l(wc,"CODE",{});var KG=r(s_);AO=n(KG,"args.max_grad_norm"),KG.forEach(t),SO=n(wc,"."),wc.forEach(t),Uy=c(e),Qi=l(e,"P",{});var JG=r(Qi);xO=n(JG,"You can also set the value explicitly:"),JG.forEach(t),Ly=c(e),d(Sl.$$.fragment,e),Zy=c(e),Aa=l(e,"P",{});var cE=r(Aa);CO=n(cE,"But then you\u2019re on your own synchronizing the "),eu=l(cE,"A",{href:!0});var XG=r(eu);IO=n(XG,"Trainer"),XG.forEach(t),RO=n(cE,` command line arguments and the DeepSpeed
configuration.`),cE.forEach(t),Gy=c(e),su=l(e,"A",{id:!0}),r(su).forEach(t),My=c(e),Gs=l(e,"H3",{class:!0});var hE=r(Gs);Sa=l(hE,"A",{id:!0,class:!0,href:!0});var QG=r(Sa);t_=l(QG,"SPAN",{});var eM=r(t_);d(xl.$$.fragment,eM),eM.forEach(t),QG.forEach(t),UO=c(hE),a_=l(hE,"SPAN",{});var sM=r(a_);LO=n(sM,"Getting The Model Weights Out"),sM.forEach(t),hE.forEach(t),Ny=c(e),xa=l(e,"P",{});var fE=r(xa);ZO=n(fE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),n_=l(fE,"CODE",{});var tM=r(n_);GO=n(tM,"global_step*/*optim_states.pt"),tM.forEach(t),MO=n(fE,` (this is glob
pattern), and are saved under the normal checkpoint.`),fE.forEach(t),Hy=c(e),tu=l(e,"P",{});var aM=r(tu);o_=l(aM,"STRONG",{});var nM=r(o_);NO=n(nM,"FP16 Weights:"),nM.forEach(t),aM.forEach(t),Wy=c(e),Ca=l(e,"P",{});var dE=r(Ca);HO=n(dE,"When a model is saved under ZeRO-2, you end up having the normal "),l_=l(dE,"CODE",{});var oM=r(l_);WO=n(oM,"pytorch_model.bin"),oM.forEach(t),FO=n(dE,` file with the model weights, but
they are only the fp16 version of the weights.`),dE.forEach(t),Fy=c(e),N=l(e,"P",{});var us=r(N);BO=n(us,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),r_=l(us,"CODE",{});var lM=r(r_);VO=n(lM,'"stage3_gather_fp16_weights_on_model_save": true'),lM.forEach(t),YO=n(us," is required to get the "),p_=l(us,"CODE",{});var rM=r(p_);KO=n(rM,"Trainer"),rM.forEach(t),JO=n(us,` to save the fp16
version of the weights. If this setting is `),i_=l(us,"CODE",{});var pM=r(i_);XO=n(pM,"False"),pM.forEach(t),QO=c(us),u_=l(us,"CODE",{});var iM=r(u_);ez=n(iM,"pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),iM.forEach(t),sz=n(us,` it
won\u2019t be possible to load it back.`),us.forEach(t),By=c(e),d(Cl.$$.fragment,e),Vy=c(e),au=l(e,"P",{});var uM=r(au);c_=l(uM,"STRONG",{});var cM=r(c_);tz=n(cM,"FP32 Weights:"),cM.forEach(t),uM.forEach(t),Yy=c(e),Ia=l(e,"P",{});var mE=r(Ia);az=n(mE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Il=l(mE,"A",{href:!0,rel:!0});var hM=r(Il);nz=n(hM,"models hub"),hM.forEach(t),oz=n(mE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),mE.forEach(t),Ky=c(e),nu=l(e,"P",{});var fM=r(nu);h_=l(fM,"STRONG",{});var dM=r(h_);lz=n(dM,"Live FP32 Weights Recovery:"),dM.forEach(t),fM.forEach(t),Jy=c(e),ou=l(e,"P",{});var mM=r(ou);rz=n(mM,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),mM.forEach(t),Xy=c(e),lu=l(e,"P",{});var _M=r(lu);pz=n(_M,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),_M.forEach(t),Qy=c(e),d(Rl.$$.fragment,e),e2=c(e),Je=l(e,"P",{});var yc=r(Je);iz=n(yc,"If you\u2019re using the "),f_=l(yc,"CODE",{});var vM=r(f_);uz=n(vM,"--load_best_model_at_end"),vM.forEach(t),cz=n(yc," class:"),d_=l(yc,"EM",{});var jM=r(d_);hz=n(jM,"~transformers.TrainingArguments"),jM.forEach(t),fz=n(yc,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),yc.forEach(t),s2=c(e),d(Ul.$$.fragment,e),t2=c(e),d(Ra.$$.fragment,e),a2=c(e),Ua=l(e,"P",{});var _E=r(Ua);dz=n(_E,"Of course, you don\u2019t have to use class:"),m_=l(_E,"EM",{});var gM=r(m_);mz=n(gM,"~transformers.Trainer"),gM.forEach(t),_z=n(_E,` and you can adjust the examples above to your own
trainer.`),_E.forEach(t),n2=c(e),La=l(e,"P",{});var vE=r(La);vz=n(vE,"If for some reason you want more refinement, you can also extract the fp32 "),__=l(vE,"CODE",{});var wM=r(__);jz=n(wM,"state_dict"),wM.forEach(t),gz=n(vE,` of the weights and apply
these yourself as is shown in the following example:`),vE.forEach(t),o2=c(e),d(Ll.$$.fragment,e),l2=c(e),ru=l(e,"P",{});var yM=r(ru);v_=l(yM,"STRONG",{});var bM=r(v_);wz=n(bM,"Offline FP32 Weights Recovery:"),bM.forEach(t),yM.forEach(t),r2=c(e),Xe=l(e,"P",{});var bc=r(Xe);yz=n(bc,"DeepSpeed creates a special conversion script "),j_=l(bc,"CODE",{});var EM=r(j_);bz=n(EM,"zero_to_fp32.py"),EM.forEach(t),Ez=n(bc,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),g_=l(bc,"CODE",{});var qM=r(g_);qz=n(qM,"Trainer"),qM.forEach(t),$z=n(bc," to do the extraction."),bc.forEach(t),p2=c(e),pu=l(e,"P",{});var $M=r(pu);kz=n($M,"Let\u2019s say your checkpoint folder looks like this:"),$M.forEach(t),i2=c(e),d(Zl.$$.fragment,e),u2=c(e),Za=l(e,"P",{});var jE=r(Za);Dz=n(jE,"In this example there is just one DeepSpeed checkpoint sub-folder "),w_=l(jE,"EM",{});var kM=r(w_);Pz=n(kM,"global_step1"),kM.forEach(t),Oz=n(jE,`. Therefore to reconstruct the fp32
weights just run:`),jE.forEach(t),c2=c(e),d(Gl.$$.fragment,e),h2=c(e),Ga=l(e,"P",{});var gE=r(Ga);zz=n(gE,"This is it. "),y_=l(gE,"CODE",{});var DM=r(y_);Tz=n(DM,"pytorch_model.bin"),DM.forEach(t),Az=n(gE," will now contain the full fp32 model weights consolidated from multiple GPUs."),gE.forEach(t),f2=c(e),iu=l(e,"P",{});var PM=r(iu);Sz=n(PM,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),PM.forEach(t),d2=c(e),Ml=l(e,"P",{});var Fx=r(Ml);b_=l(Fx,"CODE",{});var OM=r(b_);xz=n(OM,"python zero_to_fp32.py -h"),OM.forEach(t),Cz=n(Fx," will give you usage details."),Fx.forEach(t),m2=c(e),Qe=l(e,"P",{});var Ec=r(Qe);Iz=n(Ec,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=l(Ec,"CODE",{});var zM=r(E_);Rz=n(zM,"latest"),zM.forEach(t),Uz=n(Ec,`, which in the current
example will contain `),q_=l(Ec,"CODE",{});var TM=r(q_);Lz=n(TM,"global_step1"),TM.forEach(t),Zz=n(Ec,"."),Ec.forEach(t),_2=c(e),uu=l(e,"P",{});var AM=r(uu);Gz=n(AM,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),AM.forEach(t),v2=c(e),Ms=l(e,"H3",{class:!0});var wE=r(Ms);Ma=l(wE,"A",{id:!0,class:!0,href:!0});var SM=r(Ma);$_=l(SM,"SPAN",{});var xM=r($_);d(Nl.$$.fragment,xM),xM.forEach(t),SM.forEach(t),Mz=c(wE),k_=l(wE,"SPAN",{});var CM=r(k_);Nz=n(CM,"ZeRO-3 and Infinity Nuances"),CM.forEach(t),wE.forEach(t),j2=c(e),cu=l(e,"P",{});var IM=r(cu);Hz=n(IM,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),IM.forEach(t),g2=c(e),hu=l(e,"P",{});var RM=r(hu);Wz=n(RM,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),RM.forEach(t),w2=c(e),fu=l(e,"P",{});var UM=r(fu);Fz=n(UM,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),UM.forEach(t),y2=c(e),Ns=l(e,"H4",{class:!0});var yE=r(Ns);Na=l(yE,"A",{id:!0,class:!0,href:!0});var LM=r(Na);D_=l(LM,"SPAN",{});var ZM=r(D_);d(Hl.$$.fragment,ZM),ZM.forEach(t),LM.forEach(t),Bz=c(yE),P_=l(yE,"SPAN",{});var GM=r(P_);Vz=n(GM,"Constructing Massive Models"),GM.forEach(t),yE.forEach(t),b2=c(e),Ha=l(e,"P",{});var bE=r(Ha);Yz=n(bE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),O_=l(bE,"EM",{});var MM=r(O_);Kz=n(MM,"deepspeed.zero.Init()"),MM.forEach(t),Jz=n(bE,`
context manager (which is also a function decorator), like so:`),bE.forEach(t),E2=c(e),d(Wl.$$.fragment,e),q2=c(e),du=l(e,"P",{});var NM=r(du);Xz=n(NM,"As you can see this gives you a randomly initialized model."),NM.forEach(t),$2=c(e),k=l(e,"P",{});var I=r(k);Qz=n(I,"If you want to use a pretrained model, "),z_=l(I,"CODE",{});var HM=r(z_);eT=n(HM,"model_class.from_pretrained"),HM.forEach(t),sT=n(I,` will activate this feature as long as
`),T_=l(I,"CODE",{});var WM=r(T_);tT=n(WM,"is_deepspeed_zero3_enabled()"),WM.forEach(t),aT=n(I," returns "),A_=l(I,"CODE",{});var FM=r(A_);nT=n(FM,"True"),FM.forEach(t),oT=n(I,`, which currently is setup by the
class:`),S_=l(I,"EM",{});var BM=r(S_);lT=n(BM,"~transformers.TrainingArguments"),BM.forEach(t),rT=n(I,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),mu=l(I,"A",{href:!0});var VM=r(mu);pT=n(VM,"TrainingArguments"),VM.forEach(t),iT=n(I," object "),x_=l(I,"STRONG",{});var YM=r(x_);uT=n(YM,"before"),YM.forEach(t),cT=n(I,` calling
`),C_=l(I,"CODE",{});var KM=r(C_);hT=n(KM,"from_pretrained"),KM.forEach(t),fT=n(I,". Here is an example of a possible sequence:"),I.forEach(t),k2=c(e),d(Fl.$$.fragment,e),D2=c(e),Wa=l(e,"P",{});var EE=r(Wa);dT=n(EE,"If you\u2019re using the official example scripts and your command line arguments include "),I_=l(EE,"CODE",{});var JM=r(I_);mT=n(JM,"--deepspeed ds_config.json"),JM.forEach(t),_T=n(EE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),EE.forEach(t),P2=c(e),_u=l(e,"P",{});var XM=r(_u);vT=n(XM,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),XM.forEach(t),O2=c(e),Fa=l(e,"P",{});var qE=r(Fa);jT=n(qE,"For full details on this method and other related features please refer to "),Bl=l(qE,"A",{href:!0,rel:!0});var QM=r(Bl);gT=n(QM,"Constructing Massive Models"),QM.forEach(t),wT=n(qE,"."),qE.forEach(t),z2=c(e),ne=l(e,"P",{});var wn=r(ne);yT=n(wn,"Also when loading fp16-pretrained models, you will want to tell "),R_=l(wn,"CODE",{});var eN=r(R_);bT=n(eN,"from_pretrained"),eN.forEach(t),ET=n(wn,` to use
`),U_=l(wn,"CODE",{});var sN=r(U_);qT=n(sN,"torch_dtype=torch.float16"),sN.forEach(t),$T=n(wn,". For details, please, see "),vu=l(wn,"A",{href:!0});var tN=r(vu);kT=n(tN,"from_pretrained-torch-dtype"),tN.forEach(t),DT=n(wn,"."),wn.forEach(t),T2=c(e),Hs=l(e,"H4",{class:!0});var $E=r(Hs);Ba=l($E,"A",{id:!0,class:!0,href:!0});var aN=r(Ba);L_=l(aN,"SPAN",{});var nN=r(L_);d(Vl.$$.fragment,nN),nN.forEach(t),aN.forEach(t),PT=c($E),Z_=l($E,"SPAN",{});var oN=r(Z_);OT=n(oN,"Gathering Parameters"),oN.forEach(t),$E.forEach(t),A2=c(e),Yl=l(e,"P",{});var Bx=r(Yl);zT=n(Bx,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Kl=l(Bx,"A",{href:!0,rel:!0});var lN=r(Kl);TT=n(lN,"Gathering Parameters"),lN.forEach(t),Bx.forEach(t),S2=c(e),Va=l(e,"P",{});var kE=r(Va);AT=n(kE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),G_=l(kE,"CODE",{});var rN=r(G_);ST=n(rN,"from_pretrained"),rN.forEach(t),xT=n(kE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),kE.forEach(t),x2=c(e),ju=l(e,"P",{});var pN=r(ju);CT=n(pN,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),pN.forEach(t),C2=c(e),d(Jl.$$.fragment,e),I2=c(e),es=l(e,"P",{});var qc=r(es);IT=n(qc,"stress on "),M_=l(qc,"CODE",{});var iN=r(M_);RT=n(iN,"tensor([1.])"),iN.forEach(t),UT=n(qc,", or if you get an error where it says the parameter is of size "),N_=l(qc,"CODE",{});var uN=r(N_);LT=n(uN,"1"),uN.forEach(t),ZT=n(qc,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),qc.forEach(t),R2=c(e),gu=l(e,"A",{id:!0}),r(gu).forEach(t),U2=c(e),Ws=l(e,"H3",{class:!0});var DE=r(Ws);Ya=l(DE,"A",{id:!0,class:!0,href:!0});var cN=r(Ya);H_=l(cN,"SPAN",{});var hN=r(H_);d(Xl.$$.fragment,hN),hN.forEach(t),cN.forEach(t),GT=c(DE),W_=l(DE,"SPAN",{});var fN=r(W_);MT=n(fN,"ZeRO Inference"),fN.forEach(t),DE.forEach(t),L2=c(e),wu=l(e,"P",{});var dN=r(wu);NT=n(dN,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),dN.forEach(t),Z2=c(e),Ka=l(e,"P",{});var PE=r(Ka);HT=n(PE,"Otherwise you just need to pass the usual "),yu=l(PE,"A",{href:!0});var mN=r(yu);WT=n(mN,"TrainingArguments"),mN.forEach(t),FT=n(PE," arguments. For example:"),PE.forEach(t),G2=c(e),d(Ql.$$.fragment,e),M2=c(e),bu=l(e,"P",{});var _N=r(bu);BT=n(_N,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),_N.forEach(t),N2=c(e),Ja=l(e,"P",{});var OE=r(Ja);VT=n(OE,"Here is an example of running "),F_=l(OE,"CODE",{});var vN=r(F_);YT=n(vN,"run_translation.py"),vN.forEach(t),KT=n(OE," under DeepSpeed deploying all available GPUs:"),OE.forEach(t),H2=c(e),d(er.$$.fragment,e),W2=c(e),Eu=l(e,"P",{});var jN=r(Eu);JT=n(jN,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),jN.forEach(t),F2=c(e),qu=l(e,"P",{});var gN=r(qu);XT=n(gN,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),gN.forEach(t),B2=c(e),Fs=l(e,"H3",{class:!0});var zE=r(Fs);Xa=l(zE,"A",{id:!0,class:!0,href:!0});var wN=r(Xa);B_=l(wN,"SPAN",{});var yN=r(B_);d(sr.$$.fragment,yN),yN.forEach(t),wN.forEach(t),QT=c(zE),V_=l(zE,"SPAN",{});var bN=r(V_);eA=n(bN,"Filing Issues"),bN.forEach(t),zE.forEach(t),V2=c(e),$u=l(e,"P",{});var EN=r($u);sA=n(EN,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),EN.forEach(t),Y2=c(e),ku=l(e,"P",{});var qN=r(ku);tA=n(qN,"In your report please always include:"),qN.forEach(t),K2=c(e),ss=l(e,"OL",{});var $c=r(ss);Y_=l($c,"LI",{});var $N=r(Y_);K_=l($N,"P",{});var kN=r(K_);aA=n(kN,"the full Deepspeed config file in the report"),kN.forEach(t),$N.forEach(t),nA=c($c),J_=l($c,"LI",{});var DN=r(J_);je=l(DN,"P",{});var yn=r(je);oA=n(yn,"either the command line arguments if you were using the "),Du=l(yn,"A",{href:!0});var PN=r(Du);lA=n(PN,"Trainer"),PN.forEach(t),rA=n(yn,` or
`),Pu=l(yn,"A",{href:!0});var ON=r(Pu);pA=n(ON,"TrainingArguments"),ON.forEach(t),iA=n(yn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Ou=l(yn,"A",{href:!0});var zN=r(Ou);uA=n(zN,"TrainingArguments"),zN.forEach(t),cA=n(yn," as it has dozens of entries that are irrelevant."),yn.forEach(t),DN.forEach(t),hA=c($c),X_=l($c,"LI",{});var TN=r(X_);Q_=l(TN,"P",{});var AN=r(Q_);fA=n(AN,"Output of:"),AN.forEach(t),TN.forEach(t),$c.forEach(t),J2=c(e),d(tr.$$.fragment,e),X2=c(e),ge=l(e,"OL",{start:!0});var kc=r(ge);e1=l(kc,"LI",{});var SN=r(e1);ar=l(SN,"P",{});var TE=r(ar);dA=n(TE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),nr=l(TE,"A",{href:!0,rel:!0});var xN=r(nr);mA=n(xN,"notebook"),xN.forEach(t),_A=n(TE,` as
a starting point.`),TE.forEach(t),SN.forEach(t),vA=c(kc),s1=l(kc,"LI",{});var CN=r(s1);t1=l(CN,"P",{});var IN=r(t1);jA=n(IN,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),IN.forEach(t),CN.forEach(t),gA=c(kc),a1=l(kc,"LI",{});var RN=r(a1);or=l(RN,"P",{});var AE=r(or);wA=n(AE,"If possible try to use one of the existing "),lr=l(AE,"A",{href:!0,rel:!0});var UN=r(lr);yA=n(UN,"examples"),UN.forEach(t),bA=n(AE," to reproduce the problem with."),AE.forEach(t),RN.forEach(t),kc.forEach(t),Q2=c(e),zu=l(e,"P",{});var LN=r(zu);EA=n(LN,"Things to consider:"),LN.forEach(t),eb=c(e),Qa=l(e,"UL",{});var SE=r(Qa);Bs=l(SE,"LI",{});var Dc=r(Bs);n1=l(Dc,"P",{});var ZN=r(n1);qA=n(ZN,"Deepspeed is often not the cause of the problem."),ZN.forEach(t),$A=c(Dc),o1=l(Dc,"P",{});var GN=r(o1);kA=n(GN,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),GN.forEach(t),DA=c(Dc),l1=l(Dc,"P",{});var MN=r(l1);PA=n(MN,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),MN.forEach(t),Dc.forEach(t),OA=c(SE),r1=l(SE,"LI",{});var NN=r(r1);rr=l(NN,"P",{});var xE=r(rr);zA=n(xE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),pr=l(xE,"A",{href:!0,rel:!0});var HN=r(pr);TA=n(HN,"Deepspeed"),HN.forEach(t),AA=n(xE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),xE.forEach(t),NN.forEach(t),SE.forEach(t),sb=c(e),Vs=l(e,"H3",{class:!0});var CE=r(Vs);en=l(CE,"A",{id:!0,class:!0,href:!0});var WN=r(en);p1=l(WN,"SPAN",{});var FN=r(p1);d(ir.$$.fragment,FN),FN.forEach(t),WN.forEach(t),SA=c(CE),i1=l(CE,"SPAN",{});var BN=r(i1);xA=n(BN,"Troubleshooting"),BN.forEach(t),CE.forEach(t),tb=c(e),Tu=l(e,"UL",{});var VN=r(Tu);Au=l(VN,"LI",{});var Vx=r(Au);u1=l(Vx,"CODE",{});var YN=r(u1);CA=n(YN,"deepspeed"),YN.forEach(t),IA=n(Vx," process gets killed at startup without a traceback"),Vx.forEach(t),VN.forEach(t),ab=c(e),H=l(e,"P",{});var cs=r(H);RA=n(cs,"If the "),c1=l(cs,"CODE",{});var KN=r(c1);UA=n(KN,"deepspeed"),KN.forEach(t),LA=n(cs,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),h1=l(cs,"CODE",{});var JN=r(h1);ZA=n(JN,"offload_optimizer"),JN.forEach(t),GA=n(cs," or "),f1=l(cs,"CODE",{});var XN=r(f1);MA=n(XN,"offload_param"),XN.forEach(t),NA=n(cs,` or
both configured to offload to `),d1=l(cs,"CODE",{});var QN=r(d1);HA=n(QN,"cpu"),QN.forEach(t),WA=n(cs,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),cs.forEach(t),nb=c(e),sn=l(e,"P",{});var IE=r(sn);FA=n(IE,"Work is being done to enable estimating how much memory is needed for a specific model: "),ur=l(IE,"A",{href:!0,rel:!0});var eH=r(ur);BA=n(eH,"PR"),eH.forEach(t),VA=n(IE,"."),IE.forEach(t),ob=c(e),Ys=l(e,"H3",{class:!0});var RE=r(Ys);tn=l(RE,"A",{id:!0,class:!0,href:!0});var sH=r(tn);m1=l(sH,"SPAN",{});var tH=r(m1);d(cr.$$.fragment,tH),tH.forEach(t),sH.forEach(t),YA=c(RE),_1=l(RE,"SPAN",{});var aH=r(_1);KA=n(aH,"Notes"),aH.forEach(t),RE.forEach(t),lb=c(e),ts=l(e,"UL",{});var Pc=r(ts);Ks=l(Pc,"LI",{});var Oc=r(Ks);JA=n(Oc,"DeepSpeed works with the PyTorch "),Su=l(Oc,"A",{href:!0});var nH=r(Su);XA=n(nH,"Trainer"),nH.forEach(t),QA=n(Oc," but not TF "),xu=l(Oc,"A",{href:!0});var oH=r(xu);eS=n(oH,"TFTrainer"),oH.forEach(t),sS=n(Oc,"."),Oc.forEach(t),tS=c(Pc),hr=l(Pc,"LI",{});var UE=r(hr);aS=n(UE,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),fr=l(UE,"A",{href:!0,rel:!0});var lH=r(fr);nS=n(lH,"source"),lH.forEach(t),oS=n(UE,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),UE.forEach(t),lS=c(Pc),Js=l(Pc,"LI",{});var zc=r(Js);rS=n(zc,"You don\u2019t have to use the "),Cu=l(zc,"A",{href:!0});var rH=r(Cu);pS=n(rH,"Trainer"),rH.forEach(t),iS=n(zc,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),dr=l(zc,"A",{href:!0,rel:!0});var pH=r(dr);uS=n(pH,"the DeepSpeed integration instructions"),pH.forEach(t),cS=n(zc,"."),zc.forEach(t),Pc.forEach(t),rb=c(e),Iu=l(e,"A",{id:!0}),r(Iu).forEach(t),pb=c(e),Xs=l(e,"H2",{class:!0});var LE=r(Xs);an=l(LE,"A",{id:!0,class:!0,href:!0});var iH=r(an);v1=l(iH,"SPAN",{});var uH=r(v1);d(mr.$$.fragment,uH),uH.forEach(t),iH.forEach(t),hS=c(LE),j1=l(LE,"SPAN",{});var cH=r(j1);fS=n(cH,"Non-Trainer Deepspeed Integration"),cH.forEach(t),LE.forEach(t),ib=c(e),as=l(e,"P",{});var Tc=r(as);dS=n(Tc,"The "),g1=l(Tc,"CODE",{});var hH=r(g1);mS=n(hH,"HfDeepSpeedConfig"),hH.forEach(t),_S=n(Tc,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Ru=l(Tc,"A",{href:!0});var fH=r(Ru);vS=n(fH,"Trainer"),fH.forEach(t),jS=n(Tc," is not used."),Tc.forEach(t),ub=c(e),nn=l(e,"P",{});var ZE=r(nn);gS=n(ZE,"When using "),Uu=l(ZE,"A",{href:!0});var dH=r(Uu);wS=n(dH,"Trainer"),dH.forEach(t),yS=n(ZE," everything is automatically taken care of."),ZE.forEach(t),cb=c(e),ns=l(e,"P",{});var Ac=r(ns);bS=n(Ac,"When not using "),Lu=l(Ac,"A",{href:!0});var mH=r(Lu);ES=n(mH,"Trainer"),mH.forEach(t),qS=n(Ac,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),w1=l(Ac,"CODE",{});var _H=r(w1);$S=n(_H,"HfDeepSpeedConfig"),_H.forEach(t),kS=n(Ac," object before instantiating the model."),Ac.forEach(t),hb=c(e),Zu=l(e,"P",{});var vH=r(Zu);DS=n(vH,"For example for a pretrained model:"),vH.forEach(t),fb=c(e),d(_r.$$.fragment,e),db=c(e),Gu=l(e,"P",{});var jH=r(Gu);PS=n(jH,"or for non-pretrained model:"),jH.forEach(t),mb=c(e),d(vr.$$.fragment,e),_b=c(e),Qs=l(e,"H2",{class:!0});var GE=r(Qs);on=l(GE,"A",{id:!0,class:!0,href:!0});var gH=r(on);y1=l(gH,"SPAN",{});var wH=r(y1);d(jr.$$.fragment,wH),wH.forEach(t),gH.forEach(t),OS=c(GE),b1=l(GE,"SPAN",{});var yH=r(b1);zS=n(yH,"HfDeepSpeedConfig"),yH.forEach(t),GE.forEach(t),vb=c(e),q=l(e,"DIV",{class:!0});var R=r(q);d(gr.$$.fragment,R),TS=c(R),E1=l(R,"P",{});var bH=r(E1);AS=n(bH,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),bH.forEach(t),SS=c(R),we=l(R,"P",{});var bn=r(we);xS=n(bn,"A "),q1=l(bn,"CODE",{});var EH=r(q1);CS=n(EH,"weakref"),EH.forEach(t),IS=n(bn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),$1=l(bn,"CODE",{});var qH=r($1);RS=n(qH,"from_pretrained"),qH.forEach(t),US=n(bn," and "),k1=l(bn,"CODE",{});var $H=r(k1);LS=n($H,"_get_resized_embeddings"),$H.forEach(t),ZS=n(bn,`).
Therefore it\u2019s important that this object remains alive while the program is still running.`),bn.forEach(t),GS=c(R),oe=l(R,"P",{});var nt=r(oe);Mu=l(nt,"A",{href:!0});var kH=r(Mu);MS=n(kH,"Trainer"),kH.forEach(t),NS=n(nt," uses the "),D1=l(nt,"CODE",{});var DH=r(D1);HS=n(DH,"HfTrainerDeepSpeedConfig"),DH.forEach(t),WS=n(nt,` subclass instead. That subclass has logic to
sync the configuration with values of `),Nu=l(nt,"A",{href:!0});var PH=r(Nu);FS=n(PH,"TrainingArguments"),PH.forEach(t),BS=n(nt,` by replacing special placeholder
values: `),P1=l(nt,"CODE",{});var OH=r(P1);VS=n(OH,'"auto"'),OH.forEach(t),YS=n(nt,". Without this special logic the DeepSpeed configuration is not modified in any way."),nt.forEach(t),KS=c(R),os=l(R,"DIV",{class:!0});var Sc=r(os);d(wr.$$.fragment,Sc),JS=c(Sc),O1=l(Sc,"P",{});var zH=r(O1);XS=n(zH,"Deletes a sub-section of the config file if it\u2019s found."),zH.forEach(t),QS=c(Sc),et=l(Sc,"P",{});var xc=r(et);ex=n(xc,"Unless "),z1=l(xc,"CODE",{});var TH=r(z1);sx=n(TH,"must_exist"),TH.forEach(t),tx=n(xc," is "),T1=l(xc,"CODE",{});var AH=r(T1);ax=n(AH,"True"),AH.forEach(t),nx=n(xc," the section doesn\u2019t have to exist."),xc.forEach(t),Sc.forEach(t),ox=c(R),ln=l(R,"DIV",{class:!0});var ME=r(ln);d(yr.$$.fragment,ME),lx=c(ME),br=l(ME,"P",{});var NE=r(br);rx=n(NE,"Returns the set value or "),A1=l(NE,"CODE",{});var SH=r(A1);px=n(SH,"default"),SH.forEach(t),ix=n(NE," if no value is set"),NE.forEach(t),ME.forEach(t),ux=c(R),rn=l(R,"DIV",{class:!0});var HE=r(rn);d(Er.$$.fragment,HE),cx=c(HE),st=l(HE,"P",{});var Cc=r(st);hx=n(Cc,"Returns "),S1=l(Cc,"CODE",{});var xH=r(S1);fx=n(xH,"True"),xH.forEach(t),dx=n(Cc,"/"),x1=l(Cc,"CODE",{});var CH=r(x1);mx=n(CH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),CH.forEach(t),_x=n(Cc,` or
isn\u2019t set).`),Cc.forEach(t),HE.forEach(t),vx=c(R),pn=l(R,"DIV",{class:!0});var WE=r(pn);d(qr.$$.fragment,WE),jx=c(WE),tt=l(WE,"P",{});var Ic=r(tt);gx=n(Ic,"Returns "),C1=l(Ic,"CODE",{});var IH=r(C1);wx=n(IH,"True"),IH.forEach(t),yx=n(Ic,"/"),I1=l(Ic,"CODE",{});var RH=r(I1);bx=n(RH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),RH.forEach(t),Ex=n(Ic,` or
isn\u2019t set).`),Ic.forEach(t),WE.forEach(t),R.forEach(t),jb=c(e),at=l(e,"H2",{class:!0});var FE=r(at);un=l(FE,"A",{id:!0,class:!0,href:!0});var UH=r(un);R1=l(UH,"SPAN",{});var LH=r(R1);d($r.$$.fragment,LH),LH.forEach(t),UH.forEach(t),qx=c(FE),U1=l(FE,"SPAN",{});var ZH=r(U1);$x=n(ZH,"Main DeepSpeed Resources"),ZH.forEach(t),FE.forEach(t),gb=c(e),le=l(e,"UL",{});var En=r(le);L1=l(En,"LI",{});var GH=r(L1);kr=l(GH,"A",{href:!0,rel:!0});var MH=r(kr);kx=n(MH,"Project\u2019s github"),MH.forEach(t),GH.forEach(t),Dx=c(En),Z1=l(En,"LI",{});var NH=r(Z1);Dr=l(NH,"A",{href:!0,rel:!0});var HH=r(Dr);Px=n(HH,"Usage docs"),HH.forEach(t),NH.forEach(t),Ox=c(En),G1=l(En,"LI",{});var WH=r(G1);Pr=l(WH,"A",{href:!0,rel:!0});var FH=r(Pr);zx=n(FH,"API docs"),FH.forEach(t),WH.forEach(t),Tx=c(En),M1=l(En,"LI",{});var BH=r(M1);Or=l(BH,"A",{href:!0,rel:!0});var VH=r(Or);Ax=n(VH,"Blog posts"),VH.forEach(t),BH.forEach(t),En.forEach(t),wb=c(e),Hu=l(e,"P",{});var YH=r(Hu);Sx=n(YH,"Papers:"),YH.forEach(t),yb=c(e),ls=l(e,"UL",{});var Rc=r(ls);N1=l(Rc,"LI",{});var KH=r(N1);zr=l(KH,"A",{href:!0,rel:!0});var JH=r(zr);xx=n(JH,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),JH.forEach(t),KH.forEach(t),Cx=c(Rc),H1=l(Rc,"LI",{});var XH=r(H1);Tr=l(XH,"A",{href:!0,rel:!0});var QH=r(Tr);Ix=n(QH,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),QH.forEach(t),XH.forEach(t),Rx=c(Rc),W1=l(Rc,"LI",{});var eW=r(W1);Ar=l(eW,"A",{href:!0,rel:!0});var sW=r(Ar);Ux=n(sW,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),sW.forEach(t),eW.forEach(t),Rc.forEach(t),bb=c(e),rs=l(e,"P",{});var Uc=r(rs);Lx=n(Uc,"Finally, please, remember that, HuggingFace "),Wu=l(Uc,"A",{href:!0});var tW=r(Wu);Zx=n(tW,"Trainer"),tW.forEach(t),Gx=n(Uc,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Sr=l(Uc,"A",{href:!0,rel:!0});var aW=r(Sr);Mx=n(aW,"DeepSpeed GitHub"),aW.forEach(t),Nx=n(Uc,"."),Uc.forEach(t),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(hW)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(V,"href","https://github.com/microsoft/DeepSpeed"),h(V,"rel","nofollow"),h(ye,"href","https://arxiv.org/abs/1910.02054"),h(ye,"rel","nofollow"),h(kn,"href","https://arxiv.org/abs/2101.06840"),h(kn,"rel","nofollow"),h(Dn,"href","https://arxiv.org/abs/2104.07857"),h(Dn,"rel","nofollow"),h(Pn,"href","https://github.com/microsoft/DeepSpeed"),h(Pn,"rel","nofollow"),h(Wr,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fr,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Br,"href","/docs/transformers/master/en/main_classes/deepspeed#deepspeed-non-trainer-integration"),h(Qr,"href","/docs/transformers/master/en/main_classes/deepspeed#deepspeed-zero-inference"),h(sp,"id","deepspeed-trainer-integration"),h(pt,"id","trainer-deepspeed-integration"),h(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pt,"href","#trainer-deepspeed-integration"),h(ms,"class","relative group"),h(tp,"id","deepspeed-installation"),h(it,"id","installation"),h(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(it,"href","#installation"),h(_s,"class","relative group"),h(Cn,"href","https://github.com/microsoft/deepspeed#installation"),h(Cn,"rel","nofollow"),h(In,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(In,"rel","nofollow"),h(np,"href","/docs/transformers/master/en/main_classes/deepspeed#zero-install-notes"),h(Zn,"href","https://developer.nvidia.com/cuda-gpus"),h(Zn,"rel","nofollow"),h(Hn,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Hn,"rel","nofollow"),h(cp,"id","deepspeed-multi-gpu"),h(_t,"id","deployment-with-multiple-gpus"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#deployment-with-multiple-gpus"),h(vs,"class","relative group"),h(hp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fn,"href","https://www.deepspeed.ai/docs/config-json/"),h(Fn,"rel","nofollow"),h(Yn,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Yn,"rel","nofollow"),h(Jn,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(Jn,"rel","nofollow"),h(mp,"id","deepspeed-one-gpu"),h(bt,"id","deployment-with-one-gpu"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#deployment-with-one-gpu"),h(gs,"class","relative group"),h(_p,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(eo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(eo,"rel","nofollow"),h(to,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(to,"rel","nofollow"),h($p,"id","deepspeed-notebook"),h(kt,"id","deployment-in-notebooks"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#deployment-in-notebooks"),h(ws,"class","relative group"),h(zp,"id","deepspeed-config"),h(Tt,"id","configuration"),h(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tt,"href","#configuration"),h(ys,"class","relative group"),h(co,"href","https://www.deepspeed.ai/docs/config-json/"),h(co,"rel","nofollow"),h(ho,"href","https://github.com/microsoft/DeepSpeedExamples"),h(ho,"rel","nofollow"),h(_o,"href","https://github.com/microsoft/DeepSpeed"),h(_o,"rel","nofollow"),h(Ap,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Sp,"id","deepspeed-config-passing"),h(Rt,"id","passing-configuration"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#passing-configuration"),h(bs,"class","relative group"),h(xp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Cp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ip,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Lp,"id","deepspeed-config-shared"),h(Ut,"id","shared-configuration"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#shared-configuration"),h(Es,"class","relative group"),h(Zp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Gp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Np,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Fp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Bp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Vp,"id","deepspeed-zero"),h(Nt,"id","zero"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#zero"),h(qs,"class","relative group"),h($o,"href","https://www.deepspeed.ai/tutorials/zero/"),h($o,"rel","nofollow"),h(ko,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(ko,"rel","nofollow"),h(Yp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Jp,"id","deepspeed-zero2-config"),h(Wt,"id","zero2-config"),h(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wt,"href","#zero2-config"),h($s,"class","relative group"),h(ei,"id","deepspeed-zero3-config"),h(Ft,"id","zero3-config"),h(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ft,"href","#zero3-config"),h(Ds,"class","relative group"),h(ni,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(li,"id","deepspeed-nvme"),h(Yt,"id","nvme-support"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#nvme-support"),h(Ps,"class","relative group"),h(Mo,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(Mo,"rel","nofollow"),h(No,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(No,"rel","nofollow"),h(Ho,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(Ho,"rel","nofollow"),h(ii,"id","deepspeed-zero2-zero3-performance"),h(Xt,"id","zero2-vs-zero3-performance"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#zero2-vs-zero3-performance"),h(Os,"class","relative group"),h(hi,"id","deepspeed-zero2-example"),h(ea,"id","zero2-example"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#zero2-example"),h(Ts,"class","relative group"),h(fi,"id","deepspeed-zero3-example"),h(aa,"id","zero3-example"),h(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(aa,"href","#zero3-example"),h(As,"class","relative group"),h(la,"id","optimizer-and-scheduler"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#optimizer-and-scheduler"),h(Ss,"class","relative group"),h(mi,"id","deepspeed-optimizer"),h(ia,"id","optimizer"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#optimizer"),h(xs,"class","relative group"),h(sl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(sl,"rel","nofollow"),h(_i,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(wi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(bi,"id","deepspeed-scheduler"),h(ca,"id","scheduler"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#scheduler"),h(Cs,"class","relative group"),h(ul,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(ul,"rel","nofollow"),h(qi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h($i,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Di,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Pi,"id","deepspeed-fp32"),h(va,"id","fp32-precision"),h(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(va,"href","#fp32-precision"),h(Is,"class","relative group"),h(vl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(vl,"rel","nofollow"),h(zi,"id","deepspeed-amp"),h(wa,"id","automatic-mixed-precision"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#automatic-mixed-precision"),h(Rs,"class","relative group"),h(Si,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(yl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(yl,"rel","nofollow"),h(Ri,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Li,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ql,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(ql,"rel","nofollow"),h(Zi,"id","deepspeed-bs"),h(Da,"id","batch-size"),h(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Da,"href","#batch-size"),h(Us,"class","relative group"),h(Mi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Hi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wi,"id","deepspeed-grad-acc"),h(Oa,"id","gradient-accumulation"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#gradient-accumulation"),h(Ls,"class","relative group"),h(Bi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Yi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ki,"id","deepspeed-grad-clip"),h(Ta,"id","gradient-clipping"),h(Ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ta,"href","#gradient-clipping"),h(Zs,"class","relative group"),h(Xi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(eu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(su,"id","deepspeed-weight-extraction"),h(Sa,"id","getting-the-model-weights-out"),h(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sa,"href","#getting-the-model-weights-out"),h(Gs,"class","relative group"),h(Il,"href","https://huggingface.co/models"),h(Il,"rel","nofollow"),h(Ma,"id","zero3-and-infinity-nuances"),h(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ma,"href","#zero3-and-infinity-nuances"),h(Ms,"class","relative group"),h(Na,"id","constructing-massive-models"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#constructing-massive-models"),h(Ns,"class","relative group"),h(mu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Bl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(Bl,"rel","nofollow"),h(vu,"href","/docs/transformers/master/en/main_classes/deepspeed#from_pretrained-torch-dtype"),h(Ba,"id","gathering-parameters"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#gathering-parameters"),h(Hs,"class","relative group"),h(Kl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Kl,"rel","nofollow"),h(gu,"id","deepspeed-zero-inference"),h(Ya,"id","zero-inference"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#zero-inference"),h(Ws,"class","relative group"),h(yu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Xa,"id","filing-issues"),h(Xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xa,"href","#filing-issues"),h(Fs,"class","relative group"),h(Du,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Pu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ou,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(nr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(nr,"rel","nofollow"),h(lr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(lr,"rel","nofollow"),h(ge,"start","4"),h(pr,"href","https://github.com/microsoft/DeepSpeed/"),h(pr,"rel","nofollow"),h(en,"id","troubleshooting"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#troubleshooting"),h(Vs,"class","relative group"),h(ur,"href","https://github.com/microsoft/DeepSpeed/pull/965"),h(ur,"rel","nofollow"),h(tn,"id","notes"),h(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(tn,"href","#notes"),h(Ys,"class","relative group"),h(Su,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(xu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TFTrainer"),h(fr,"href","https://github.com/microsoft/deepspeed#installation"),h(fr,"rel","nofollow"),h(Cu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(dr,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(dr,"rel","nofollow"),h(Iu,"id","deepspeed-non-trainer-integration"),h(an,"id","nontrainer-deepspeed-integration"),h(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(an,"href","#nontrainer-deepspeed-integration"),h(Xs,"class","relative group"),h(Ru,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Uu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Lu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(on,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(Qs,"class","relative group"),h(Mu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Nu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(os,"class","docstring"),h(ln,"class","docstring"),h(rn,"class","docstring"),h(pn,"class","docstring"),h(q,"class","docstring"),h(un,"id","main-deepspeed-resources"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#main-deepspeed-resources"),h(at,"class","relative group"),h(kr,"href","https://github.com/microsoft/deepspeed"),h(kr,"rel","nofollow"),h(Dr,"href","https://www.deepspeed.ai/getting-started/"),h(Dr,"rel","nofollow"),h(Pr,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(Pr,"rel","nofollow"),h(Or,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(Or,"rel","nofollow"),h(zr,"href","https://arxiv.org/abs/1910.02054"),h(zr,"rel","nofollow"),h(Tr,"href","https://arxiv.org/abs/2101.06840"),h(Tr,"rel","nofollow"),h(Ar,"href","https://arxiv.org/abs/2104.07857"),h(Ar,"rel","nofollow"),h(Wu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Sr,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Sr,"rel","nofollow")},m(e,p){s(document.head,y),i(e,L,p),i(e,b,p),s(b,$),s($,hs),m(F,hs,null),s(b,$n),s(b,fs),s(fs,ds),i(e,ot,p),i(e,B,p),s(B,V),s(V,Z),s(B,Gr),s(B,ye),s(ye,Mr),s(B,BE),i(e,J1,p),i(e,O,p),s(O,Lc),s(Lc,VE),s(O,YE),s(O,Zc),s(Zc,KE),s(O,JE),s(O,Gc),s(Gc,XE),s(O,QE),s(O,Mc),s(Mc,eq),s(O,sq),s(O,Nc),s(Nc,tq),s(O,aq),s(O,Hc),s(Hc,nq),i(e,X1,p),i(e,be,p),s(be,oq),s(be,kn),s(kn,lq),s(be,rq),s(be,Dn),s(Dn,pq),s(be,iq),i(e,Q1,p),i(e,Nr,p),s(Nr,uq),i(e,ev,p),i(e,Hr,p),s(Hr,cq),i(e,sv,p),i(e,lt,p),s(lt,hq),s(lt,Pn),s(Pn,fq),s(lt,dq),i(e,tv,p),i(e,rt,p),s(rt,On),s(On,mq),s(On,Wr),s(Wr,_q),s(On,vq),s(rt,jq),s(rt,U),s(U,gq),s(U,Fr),s(Fr,wq),s(U,yq),s(U,Wc),s(Wc,bq),s(U,Eq),s(U,Fc),s(Fc,qq),s(U,$q),s(U,Bc),s(Bc,kq),s(U,Dq),s(U,Br),s(Br,Pq),s(U,Oq),i(e,av,p),i(e,Vr,p),s(Vr,zq),i(e,nv,p),i(e,Yr,p),s(Yr,Tq),i(e,ov,p),i(e,Kr,p),s(Kr,Vc),s(Vc,Aq),i(e,lv,p),i(e,Jr,p),s(Jr,Sq),i(e,rv,p),i(e,Xr,p),s(Xr,zn),s(zn,xq),s(zn,Qr),s(Qr,Cq),s(zn,Iq),i(e,pv,p),i(e,ep,p),s(ep,Rq),i(e,iv,p),i(e,sp,p),i(e,uv,p),i(e,ms,p),s(ms,pt),s(pt,Yc),m(Tn,Yc,null),s(ms,Uq),s(ms,Kc),s(Kc,Lq),i(e,cv,p),i(e,tp,p),i(e,hv,p),i(e,_s,p),s(_s,it),s(it,Jc),m(An,Jc,null),s(_s,Zq),s(_s,Xc),s(Xc,Gq),i(e,fv,p),i(e,ap,p),s(ap,Mq),i(e,dv,p),m(Sn,e,p),i(e,mv,p),i(e,Ee,p),s(Ee,Nq),s(Ee,Qc),s(Qc,Hq),s(Ee,Wq),s(Ee,eh),s(eh,Fq),s(Ee,Bq),i(e,_v,p),m(xn,e,p),i(e,vv,p),i(e,qe,p),s(qe,Vq),s(qe,Cn),s(Cn,Yq),s(qe,Kq),s(qe,In),s(In,Jq),s(qe,Xq),i(e,jv,p),i(e,ut,p),s(ut,Qq),s(ut,np),s(np,e0),s(ut,s0),i(e,gv,p),i(e,op,p),s(op,t0),i(e,wv,p),i(e,lp,p),s(lp,a0),i(e,yv,p),m(Rn,e,p),i(e,bv,p),i(e,$e,p),s($e,n0),s($e,sh),s(sh,o0),s($e,l0),s($e,th),s(th,r0),s($e,p0),i(e,Ev,p),i(e,ct,p),s(ct,i0),s(ct,ah),s(ah,u0),s(ct,c0),i(e,qv,p),m(Un,e,p),i(e,$v,p),i(e,de,p),s(de,h0),s(de,nh),s(nh,f0),s(de,d0),s(de,oh),s(oh,m0),s(de,_0),s(de,lh),s(lh,v0),i(e,kv,p),i(e,rp,p),s(rp,j0),i(e,Dv,p),m(Ln,e,p),i(e,Pv,p),i(e,ke,p),s(ke,g0),s(ke,rh),s(rh,w0),s(ke,y0),s(ke,ph),s(ph,b0),s(ke,E0),i(e,Ov,p),i(e,ht,p),s(ht,q0),s(ht,ih),s(ih,$0),s(ht,k0),i(e,zv,p),i(e,De,p),s(De,D0),s(De,uh),s(uh,P0),s(De,O0),s(De,Zn),s(Zn,z0),s(De,T0),i(e,Tv,p),i(e,pp,p),s(pp,A0),i(e,Av,p),m(Gn,e,p),i(e,Sv,p),i(e,ip,p),s(ip,S0),i(e,xv,p),m(Mn,e,p),i(e,Cv,p),i(e,up,p),s(up,x0),i(e,Iv,p),m(Nn,e,p),i(e,Rv,p),i(e,ft,p),s(ft,C0),s(ft,ch),s(ch,I0),s(ft,R0),i(e,Uv,p),i(e,dt,p),s(dt,U0),s(dt,hh),s(hh,L0),s(dt,Z0),i(e,Lv,p),i(e,mt,p),s(mt,G0),s(mt,Hn),s(Hn,M0),s(mt,N0),i(e,Zv,p),i(e,cp,p),i(e,Gv,p),i(e,vs,p),s(vs,_t),s(_t,fh),m(Wn,fh,null),s(vs,H0),s(vs,dh),s(dh,W0),i(e,Mv,p),i(e,vt,p),s(vt,F0),s(vt,hp),s(hp,B0),s(vt,V0),i(e,Nv,p),i(e,jt,p),s(jt,js),s(js,Y0),s(js,mh),s(mh,K0),s(js,J0),s(js,_h),s(_h,X0),s(js,Q0),s(jt,e$),s(jt,me),s(me,s$),s(me,vh),s(vh,t$),s(me,a$),s(me,jh),s(jh,n$),s(me,o$),s(me,Fn),s(Fn,l$),s(me,r$),i(e,Hv,p),i(e,fp,p),s(fp,p$),i(e,Wv,p),m(Bn,e,p),i(e,Fv,p),i(e,dp,p),s(dp,i$),i(e,Bv,p),m(Vn,e,p),i(e,Vv,p),i(e,z,p),s(z,u$),s(z,gh),s(gh,c$),s(z,h$),s(z,wh),s(wh,f$),s(z,d$),s(z,yh),s(yh,m$),s(z,_$),s(z,bh),s(bh,v$),s(z,j$),s(z,Yn),s(Yn,g$),s(z,w$),i(e,Yv,p),i(e,K,p),s(K,y$),s(K,Eh),s(Eh,b$),s(K,E$),s(K,qh),s(qh,q$),s(K,$$),s(K,$h),s($h,k$),s(K,D$),i(e,Kv,p),i(e,gt,p),s(gt,P$),s(gt,kh),s(kh,O$),s(gt,z$),i(e,Jv,p),m(Kn,e,p),i(e,Xv,p),i(e,wt,p),s(wt,T$),s(wt,Dh),s(Dh,A$),s(wt,S$),i(e,Qv,p),i(e,yt,p),s(yt,x$),s(yt,Jn),s(Jn,C$),s(yt,I$),i(e,ej,p),i(e,mp,p),i(e,sj,p),i(e,gs,p),s(gs,bt),s(bt,Ph),m(Xn,Ph,null),s(gs,R$),s(gs,Oh),s(Oh,U$),i(e,tj,p),i(e,Et,p),s(Et,L$),s(Et,_p),s(_p,Z$),s(Et,G$),i(e,aj,p),m(Qn,e,p),i(e,nj,p),i(e,Pe,p),s(Pe,M$),s(Pe,zh),s(zh,N$),s(Pe,H$),s(Pe,eo),s(eo,W$),s(Pe,F$),i(e,oj,p),i(e,vp,p),s(vp,B$),i(e,lj,p),i(e,qt,p),s(qt,Th),s(Th,V$),s(qt,Y$),s(qt,Ah),s(Ah,K$),i(e,rj,p),i(e,jp,p),s(jp,J$),i(e,pj,p),m(so,e,p),i(e,ij,p),i(e,gp,p),s(gp,X$),i(e,uj,p),i(e,$t,p),s($t,Q$),s($t,to),s(to,e5),s($t,s5),i(e,cj,p),i(e,wp,p),s(wp,t5),i(e,hj,p),i(e,yp,p),s(yp,a5),i(e,fj,p),i(e,bp,p),s(bp,n5),i(e,dj,p),i(e,Ep,p),s(Ep,ao),s(ao,o5),s(ao,Sh),s(Sh,l5),s(ao,r5),i(e,mj,p),m(no,e,p),i(e,_j,p),i(e,qp,p),s(qp,p5),i(e,vj,p),i(e,$p,p),i(e,jj,p),i(e,ws,p),s(ws,kt),s(kt,xh),m(oo,xh,null),s(ws,i5),s(ws,Ch),s(Ch,u5),i(e,gj,p),i(e,Dt,p),s(Dt,c5),s(Dt,Ih),s(Ih,h5),s(Dt,f5),i(e,wj,p),i(e,kp,p),s(kp,d5),i(e,yj,p),m(lo,e,p),i(e,bj,p),i(e,Pt,p),s(Pt,m5),s(Pt,Rh),s(Rh,_5),s(Pt,v5),i(e,Ej,p),i(e,Dp,p),s(Dp,j5),i(e,qj,p),i(e,Pp,p),s(Pp,g5),i(e,$j,p),m(ro,e,p),i(e,kj,p),i(e,Oe,p),s(Oe,w5),s(Oe,Uh),s(Uh,y5),s(Oe,b5),s(Oe,Lh),s(Lh,E5),s(Oe,q5),i(e,Dj,p),m(po,e,p),i(e,Pj,p),i(e,Ot,p),s(Ot,$5),s(Ot,Zh),s(Zh,k5),s(Ot,D5),i(e,Oj,p),m(io,e,p),i(e,zj,p),i(e,Op,p),s(Op,P5),i(e,Tj,p),i(e,zt,p),s(zt,O5),s(zt,Gh),s(Gh,z5),s(zt,T5),i(e,Aj,p),i(e,zp,p),i(e,Sj,p),i(e,ys,p),s(ys,Tt),s(Tt,Mh),m(uo,Mh,null),s(ys,A5),s(ys,Nh),s(Nh,S5),i(e,xj,p),i(e,At,p),s(At,x5),s(At,co),s(co,C5),s(At,I5),i(e,Cj,p),i(e,St,p),s(St,R5),s(St,ho),s(ho,U5),s(St,L5),i(e,Ij,p),m(fo,e,p),i(e,Rj,p),i(e,xt,p),s(xt,Z5),s(xt,Hh),s(Hh,G5),s(xt,M5),i(e,Uj,p),m(mo,e,p),i(e,Lj,p),i(e,Ct,p),s(Ct,N5),s(Ct,_o),s(_o,H5),s(Ct,W5),i(e,Zj,p),i(e,Tp,p),s(Tp,F5),i(e,Gj,p),i(e,J,p),s(J,B5),s(J,Wh),s(Wh,V5),s(J,Y5),s(J,Fh),s(Fh,K5),s(J,J5),s(J,Bh),s(Bh,X5),s(J,Q5),i(e,Mj,p),m(vo,e,p),i(e,Nj,p),i(e,It,p),s(It,e6),s(It,Ap),s(Ap,s6),s(It,t6),i(e,Hj,p),i(e,Sp,p),i(e,Wj,p),i(e,bs,p),s(bs,Rt),s(Rt,Vh),m(jo,Vh,null),s(bs,a6),s(bs,Yh),s(Yh,n6),i(e,Fj,p),i(e,T,p),s(T,o6),s(T,xp),s(xp,l6),s(T,r6),s(T,Cp),s(Cp,p6),s(T,i6),s(T,Kh),s(Kh,u6),s(T,c6),s(T,Jh),s(Jh,h6),s(T,f6),s(T,Ip),s(Ip,d6),s(T,m6),i(e,Bj,p),i(e,Rp,p),s(Rp,_6),i(e,Vj,p),m(go,e,p),i(e,Yj,p),i(e,Up,p),s(Up,v6),i(e,Kj,p),m(wo,e,p),i(e,Jj,p),i(e,Lp,p),i(e,Xj,p),i(e,Es,p),s(Es,Ut),s(Ut,Xh),m(yo,Xh,null),s(Es,j6),s(Es,Qh),s(Qh,g6),i(e,Qj,p),m(Lt,e,p),i(e,eg,p),i(e,ze,p),s(ze,w6),s(ze,Zp),s(Zp,y6),s(ze,b6),s(ze,Gp),s(Gp,E6),s(ze,q6),i(e,sg,p),i(e,Zt,p),s(Zt,$6),s(Zt,Mp),s(Mp,k6),s(Zt,D6),i(e,tg,p),i(e,Te,p),s(Te,P6),s(Te,ef),s(ef,O6),s(Te,z6),s(Te,Np),s(Np,T6),s(Te,A6),i(e,ag,p),i(e,Hp,p),s(Hp,S6),i(e,ng,p),i(e,Gt,p),s(Gt,x6),s(Gt,Wp),s(Wp,C6),s(Gt,I6),i(e,og,p),i(e,Mt,p),s(Mt,sf),s(sf,R6),s(Mt,U6),s(Mt,bo),s(bo,L6),s(bo,Fp),s(Fp,Z6),s(bo,G6),i(e,lg,p),i(e,X,p),s(X,M6),s(X,tf),s(tf,N6),s(X,H6),s(X,Bp),s(Bp,W6),s(X,F6),s(X,af),s(af,B6),s(X,V6),i(e,rg,p),i(e,Vp,p),i(e,pg,p),i(e,qs,p),s(qs,Nt),s(Nt,nf),m(Eo,nf,null),s(qs,Y6),s(qs,of),s(of,K6),i(e,ig,p),i(e,qo,p),s(qo,$o),s($o,J6),s(qo,X6),i(e,ug,p),i(e,Ae,p),s(Ae,Q6),s(Ae,lf),s(lf,e4),s(Ae,s4),s(Ae,ko),s(ko,t4),s(Ae,a4),i(e,cg,p),i(e,Ht,p),s(Ht,n4),s(Ht,Yp),s(Yp,o4),s(Ht,l4),i(e,hg,p),i(e,Kp,p),s(Kp,r4),i(e,fg,p),i(e,Jp,p),i(e,dg,p),i(e,$s,p),s($s,Wt),s(Wt,rf),m(Do,rf,null),s($s,p4),s($s,pf),s(pf,i4),i(e,mg,p),i(e,Xp,p),s(Xp,u4),i(e,_g,p),m(Po,e,p),i(e,vg,p),i(e,Qp,p),s(Qp,uf),s(uf,c4),i(e,jg,p),i(e,Se,p),s(Se,ks),s(ks,h4),s(ks,cf),s(cf,f4),s(ks,d4),s(ks,hf),s(hf,m4),s(ks,_4),s(Se,v4),s(Se,A),s(A,ff),s(ff,j4),s(A,g4),s(A,df),s(df,w4),s(A,y4),s(A,mf),s(mf,b4),s(A,E4),s(A,_f),s(_f,q4),s(A,$4),s(A,vf),s(vf,k4),s(A,D4),s(A,jf),s(jf,P4),s(A,O4),s(Se,z4),s(Se,gf),s(gf,T4),i(e,gg,p),i(e,ei,p),i(e,wg,p),i(e,Ds,p),s(Ds,Ft),s(Ft,wf),m(Oo,wf,null),s(Ds,A4),s(Ds,yf),s(yf,S4),i(e,yg,p),i(e,si,p),s(si,x4),i(e,bg,p),m(zo,e,p),i(e,Eg,p),i(e,G,p),s(G,C4),s(G,bf),s(bf,I4),s(G,R4),s(G,Ef),s(Ef,U4),s(G,L4),s(G,qf),s(qf,Z4),s(G,G4),s(G,$f),s($f,M4),s(G,N4),i(e,qg,p),i(e,xe,p),s(xe,H4),s(xe,kf),s(kf,W4),s(xe,F4),s(xe,Df),s(Df,B4),s(xe,V4),i(e,$g,p),i(e,ti,p),s(ti,Pf),s(Pf,Y4),i(e,kg,p),i(e,Bt,p),s(Bt,To),s(To,Of),s(Of,K4),s(To,J4),s(To,zf),s(zf,X4),s(Bt,Q4),s(Bt,Ao),s(Ao,Tf),s(Tf,e8),s(Ao,s8),s(Ao,Af),s(Af,t8),i(e,Dg,p),i(e,S,p),s(S,a8),s(S,Sf),s(Sf,n8),s(S,o8),s(S,xf),s(xf,l8),s(S,r8),s(S,Cf),s(Cf,p8),s(S,i8),s(S,If),s(If,u8),s(S,c8),s(S,Rf),s(Rf,h8),s(S,f8),i(e,Pg,p),i(e,_e,p),s(_e,Uf),s(Uf,d8),s(_e,m8),s(_e,Lf),s(Lf,_8),s(_e,v8),s(_e,Zf),s(Zf,j8),s(_e,g8),i(e,Og,p),i(e,ai,p),s(ai,w8),i(e,zg,p),i(e,Ce,p),s(Ce,So),s(So,Gf),s(Gf,y8),s(So,b8),s(So,Mf),s(Mf,E8),s(Ce,q8),s(Ce,xo),s(xo,Nf),s(Nf,$8),s(xo,k8),s(xo,Hf),s(Hf,D8),s(Ce,P8),s(Ce,Co),s(Co,Wf),s(Wf,O8),s(Co,z8),s(Co,Ff),s(Ff,T8),i(e,Tg,p),i(e,Ie,p),s(Ie,A8),s(Ie,Bf),s(Bf,S8),s(Ie,x8),s(Ie,ni),s(ni,C8),s(Ie,I8),i(e,Ag,p),i(e,Io,p),s(Io,Vf),s(Vf,R8),s(Io,U8),i(e,Sg,p),i(e,Q,p),s(Q,L8),s(Q,Yf),s(Yf,Z8),s(Q,G8),s(Q,Kf),s(Kf,M8),s(Q,N8),s(Q,Jf),s(Jf,H8),s(Q,W8),i(e,xg,p),i(e,oi,p),s(oi,Ro),s(Ro,Xf),s(Xf,F8),s(Ro,B8),s(Ro,Qf),s(Qf,V8),i(e,Cg,p),i(e,ve,p),s(ve,ed),s(ed,Y8),s(ve,K8),s(ve,sd),s(sd,J8),s(ve,X8),s(ve,td),s(td,Q8),s(ve,e7),i(e,Ig,p),i(e,Re,p),s(Re,s7),s(Re,ad),s(ad,t7),s(Re,a7),s(Re,nd),s(nd,n7),s(Re,o7),i(e,Rg,p),i(e,Vt,p),s(Vt,Uo),s(Uo,l7),s(Uo,od),s(od,r7),s(Uo,p7),s(Vt,i7),s(Vt,Lo),s(Lo,u7),s(Lo,ld),s(ld,c7),s(Lo,h7),i(e,Ug,p),i(e,li,p),i(e,Lg,p),i(e,Ps,p),s(Ps,Yt),s(Yt,rd),m(Zo,rd,null),s(Ps,f7),s(Ps,pd),s(pd,d7),i(e,Zg,p),i(e,ri,p),s(ri,m7),i(e,Gg,p),i(e,pi,p),s(pi,_7),i(e,Mg,p),m(Go,e,p),i(e,Ng,p),i(e,Kt,p),s(Kt,v7),s(Kt,id),s(id,j7),s(Kt,g7),i(e,Hg,p),i(e,Ue,p),s(Ue,w7),s(Ue,Mo),s(Mo,y7),s(Ue,b7),s(Ue,No),s(No,E7),s(Ue,q7),i(e,Wg,p),i(e,Jt,p),s(Jt,$7),s(Jt,ud),s(ud,k7),s(Jt,D7),i(e,Fg,p),i(e,Le,p),s(Le,P7),s(Le,cd),s(cd,O7),s(Le,z7),s(Le,Ho),s(Ho,T7),s(Le,A7),i(e,Bg,p),i(e,ii,p),i(e,Vg,p),i(e,Os,p),s(Os,Xt),s(Xt,hd),m(Wo,hd,null),s(Os,S7),s(Os,fd),s(fd,x7),i(e,Yg,p),i(e,ui,p),s(ui,C7),i(e,Kg,p),i(e,ci,p),s(ci,I7),i(e,Jg,p),i(e,Qt,p),s(Qt,zs),s(zs,R7),s(zs,dd),s(dd,U7),s(zs,L7),s(zs,md),s(md,Z7),s(zs,G7),s(Qt,M7),s(Qt,Fo),s(Fo,N7),s(Fo,_d),s(_d,H7),s(Fo,W7),i(e,Xg,p),i(e,Ze,p),s(Ze,F7),s(Ze,vd),s(vd,B7),s(Ze,V7),s(Ze,jd),s(jd,Y7),s(Ze,K7),i(e,Qg,p),i(e,hi,p),i(e,ew,p),i(e,Ts,p),s(Ts,ea),s(ea,gd),m(Bo,gd,null),s(Ts,J7),s(Ts,wd),s(wd,X7),i(e,sw,p),i(e,sa,p),s(sa,Q7),s(sa,yd),s(yd,e9),s(sa,s9),i(e,tw,p),m(Vo,e,p),i(e,aw,p),i(e,ta,p),s(ta,t9),s(ta,bd),s(bd,a9),s(ta,n9),i(e,nw,p),m(Yo,e,p),i(e,ow,p),i(e,fi,p),i(e,lw,p),i(e,As,p),s(As,aa),s(aa,Ed),m(Ko,Ed,null),s(As,o9),s(As,qd),s(qd,l9),i(e,rw,p),i(e,na,p),s(na,r9),s(na,$d),s($d,p9),s(na,i9),i(e,pw,p),m(Jo,e,p),i(e,iw,p),i(e,oa,p),s(oa,u9),s(oa,kd),s(kd,c9),s(oa,h9),i(e,uw,p),m(Xo,e,p),i(e,cw,p),i(e,Ss,p),s(Ss,la),s(la,Dd),m(Qo,Dd,null),s(Ss,f9),s(Ss,Pd),s(Pd,d9),i(e,hw,p),i(e,ra,p),s(ra,m9),s(ra,Od),s(Od,_9),s(ra,v9),i(e,fw,p),i(e,di,p),s(di,j9),i(e,dw,p),i(e,pa,p),s(pa,g9),s(pa,zd),s(zd,w9),s(pa,y9),i(e,mw,p),i(e,mi,p),i(e,_w,p),i(e,xs,p),s(xs,ia),s(ia,Td),m(el,Td,null),s(xs,b9),s(xs,Ad),s(Ad,E9),i(e,vw,p),i(e,Ge,p),s(Ge,q9),s(Ge,Sd),s(Sd,$9),s(Ge,k9),s(Ge,sl),s(sl,D9),s(Ge,P9),i(e,jw,p),i(e,E,p),s(E,O9),s(E,xd),s(xd,z9),s(E,T9),s(E,_i),s(_i,A9),s(E,S9),s(E,Cd),s(Cd,x9),s(E,C9),s(E,Id),s(Id,I9),s(E,R9),s(E,Rd),s(Rd,U9),s(E,L9),s(E,Ud),s(Ud,Z9),s(E,G9),s(E,Ld),s(Ld,M9),s(E,N9),s(E,Zd),s(Zd,H9),s(E,W9),i(e,gw,p),i(e,Me,p),s(Me,F9),s(Me,Gd),s(Gd,B9),s(Me,V9),s(Me,Md),s(Md,Y9),s(Me,K9),i(e,ww,p),m(tl,e,p),i(e,yw,p),i(e,vi,p),s(vi,J9),i(e,bw,p),i(e,ee,p),s(ee,al),s(al,Nd),s(Nd,X9),s(al,Q9),s(al,Hd),s(Hd,ek),s(ee,sk),s(ee,nl),s(nl,Wd),s(Wd,tk),s(nl,ak),s(nl,Fd),s(Fd,nk),s(ee,ok),s(ee,ol),s(ol,Bd),s(Bd,lk),s(ol,rk),s(ol,Vd),s(Vd,pk),s(ee,ik),s(ee,ll),s(ll,Yd),s(Yd,uk),s(ll,ck),s(ll,Kd),s(Kd,hk),i(e,Ew,p),i(e,ji,p),s(ji,fk),i(e,qw,p),i(e,gi,p),s(gi,dk),i(e,$w,p),m(rl,e,p),i(e,kw,p),i(e,ua,p),s(ua,mk),s(ua,wi),s(wi,_k),s(ua,vk),i(e,Dw,p),i(e,yi,p),s(yi,jk),i(e,Pw,p),m(pl,e,p),i(e,Ow,p),i(e,se,p),s(se,gk),s(se,Jd),s(Jd,wk),s(se,yk),s(se,Xd),s(Xd,bk),s(se,Ek),s(se,Qd),s(Qd,qk),s(se,$k),i(e,zw,p),i(e,bi,p),i(e,Tw,p),i(e,Cs,p),s(Cs,ca),s(ca,em),m(il,em,null),s(Cs,kk),s(Cs,sm),s(sm,Dk),i(e,Aw,p),i(e,x,p),s(x,Pk),s(x,tm),s(tm,Ok),s(x,zk),s(x,am),s(am,Tk),s(x,Ak),s(x,nm),s(nm,Sk),s(x,xk),s(x,om),s(om,Ck),s(x,Ik),s(x,ul),s(ul,Rk),s(x,Uk),i(e,Sw,p),i(e,Ei,p),s(Ei,Lk),i(e,xw,p),i(e,ha,p),s(ha,cl),s(cl,lm),s(lm,Zk),s(cl,Gk),s(cl,rm),s(rm,Mk),s(ha,Nk),s(ha,Ne),s(Ne,pm),s(pm,Hk),s(Ne,Wk),s(Ne,im),s(im,Fk),s(Ne,Bk),s(Ne,um),s(um,Vk),s(Ne,Yk),i(e,Cw,p),i(e,D,p),s(D,Kk),s(D,cm),s(cm,Jk),s(D,Xk),s(D,qi),s(qi,Qk),s(D,eD),s(D,hm),s(hm,sD),s(D,tD),s(D,fm),s(fm,aD),s(D,nD),s(D,dm),s(dm,oD),s(D,lD),s(D,mm),s(mm,rD),s(D,pD),i(e,Iw,p),i(e,He,p),s(He,iD),s(He,_m),s(_m,uD),s(He,cD),s(He,vm),s(vm,hD),s(He,fD),i(e,Rw,p),m(hl,e,p),i(e,Uw,p),i(e,We,p),s(We,dD),s(We,jm),s(jm,mD),s(We,_D),s(We,$i),s($i,vD),s(We,jD),i(e,Lw,p),i(e,te,p),s(te,fa),s(fa,gm),s(gm,gD),s(fa,wD),s(fa,wm),s(wm,yD),s(fa,bD),s(te,ED),s(te,da),s(da,ym),s(ym,qD),s(da,$D),s(da,bm),s(bm,kD),s(da,DD),s(te,PD),s(te,Fe),s(Fe,Em),s(Em,OD),s(Fe,zD),s(Fe,qm),s(qm,TD),s(Fe,AD),s(Fe,$m),s($m,SD),s(Fe,xD),s(te,CD),s(te,Be),s(Be,km),s(km,ID),s(Be,RD),s(Be,Dm),s(Dm,UD),s(Be,LD),s(Be,Pm),s(Pm,ZD),s(Be,GD),i(e,Zw,p),i(e,ki,p),s(ki,MD),i(e,Gw,p),m(fl,e,p),i(e,Mw,p),i(e,ma,p),s(ma,ND),s(ma,Di),s(Di,HD),s(ma,WD),i(e,Nw,p),i(e,_a,p),s(_a,FD),s(_a,Om),s(Om,BD),s(_a,VD),i(e,Hw,p),m(dl,e,p),i(e,Ww,p),i(e,M,p),s(M,YD),s(M,zm),s(zm,KD),s(M,JD),s(M,Tm),s(Tm,XD),s(M,QD),s(M,Am),s(Am,eP),s(M,sP),s(M,Sm),s(Sm,tP),s(M,aP),i(e,Fw,p),i(e,Pi,p),i(e,Bw,p),i(e,Is,p),s(Is,va),s(va,xm),m(ml,xm,null),s(Is,nP),s(Is,Cm),s(Cm,oP),i(e,Vw,p),i(e,Oi,p),s(Oi,lP),i(e,Yw,p),i(e,ja,p),s(ja,rP),s(ja,Im),s(Im,pP),s(ja,iP),i(e,Kw,p),m(_l,e,p),i(e,Jw,p),i(e,ga,p),s(ga,uP),s(ga,vl),s(vl,cP),s(ga,hP),i(e,Xw,p),i(e,zi,p),i(e,Qw,p),i(e,Rs,p),s(Rs,wa),s(wa,Rm),m(jl,Rm,null),s(Rs,fP),s(Rs,Um),s(Um,dP),i(e,ey,p),i(e,Ti,p),s(Ti,mP),i(e,sy,p),i(e,Ai,p),s(Ai,_P),i(e,ty,p),m(gl,e,p),i(e,ay,p),i(e,Ve,p),s(Ve,vP),s(Ve,Si),s(Si,jP),s(Ve,gP),s(Ve,Lm),s(Lm,wP),s(Ve,yP),i(e,ny,p),i(e,ya,p),s(ya,bP),s(ya,Zm),s(Zm,EP),s(ya,qP),i(e,oy,p),i(e,xi,p),s(xi,$P),i(e,ly,p),m(wl,e,p),i(e,ry,p),i(e,ba,p),s(ba,kP),s(ba,Ci),s(Ci,DP),s(ba,PP),i(e,py,p),i(e,Ea,p),s(Ea,OP),s(Ea,yl),s(yl,zP),s(Ea,TP),i(e,iy,p),i(e,Ii,p),s(Ii,AP),i(e,uy,p),m(bl,e,p),i(e,cy,p),i(e,ae,p),s(ae,SP),s(ae,Ri),s(Ri,xP),s(ae,CP),s(ae,Gm),s(Gm,IP),s(ae,RP),s(ae,Mm),s(Mm,UP),s(ae,LP),i(e,hy,p),i(e,qa,p),s(qa,ZP),s(qa,Nm),s(Nm,GP),s(qa,MP),i(e,fy,p),i(e,Ui,p),s(Ui,NP),i(e,dy,p),m(El,e,p),i(e,my,p),i(e,$a,p),s($a,HP),s($a,Li),s(Li,WP),s($a,FP),i(e,_y,p),i(e,ka,p),s(ka,BP),s(ka,ql),s(ql,VP),s(ka,YP),i(e,vy,p),i(e,Zi,p),i(e,jy,p),i(e,Us,p),s(Us,Da),s(Da,Hm),m($l,Hm,null),s(Us,KP),s(Us,Wm),s(Wm,JP),i(e,gy,p),i(e,Gi,p),s(Gi,XP),i(e,wy,p),m(kl,e,p),i(e,yy,p),i(e,C,p),s(C,QP),s(C,Mi),s(Mi,eO),s(C,sO),s(C,Fm),s(Fm,tO),s(C,aO),s(C,Bm),s(Bm,nO),s(C,oO),s(C,Vm),s(Vm,lO),s(C,rO),s(C,Ym),s(Ym,pO),s(C,iO),i(e,by,p),i(e,Ni,p),s(Ni,uO),i(e,Ey,p),m(Dl,e,p),i(e,qy,p),i(e,Pa,p),s(Pa,cO),s(Pa,Hi),s(Hi,hO),s(Pa,fO),i(e,$y,p),i(e,Wi,p),i(e,ky,p),i(e,Ls,p),s(Ls,Oa),s(Oa,Km),m(Pl,Km,null),s(Ls,dO),s(Ls,Jm),s(Jm,mO),i(e,Dy,p),i(e,Fi,p),s(Fi,_O),i(e,Py,p),m(Ol,e,p),i(e,Oy,p),i(e,Ye,p),s(Ye,vO),s(Ye,Bi),s(Bi,jO),s(Ye,gO),s(Ye,Xm),s(Xm,wO),s(Ye,yO),i(e,zy,p),i(e,Vi,p),s(Vi,bO),i(e,Ty,p),m(zl,e,p),i(e,Ay,p),i(e,za,p),s(za,EO),s(za,Yi),s(Yi,qO),s(za,$O),i(e,Sy,p),i(e,Ki,p),i(e,xy,p),i(e,Zs,p),s(Zs,Ta),s(Ta,Qm),m(Tl,Qm,null),s(Zs,kO),s(Zs,e_),s(e_,DO),i(e,Cy,p),i(e,Ji,p),s(Ji,PO),i(e,Iy,p),m(Al,e,p),i(e,Ry,p),i(e,Ke,p),s(Ke,OO),s(Ke,Xi),s(Xi,zO),s(Ke,TO),s(Ke,s_),s(s_,AO),s(Ke,SO),i(e,Uy,p),i(e,Qi,p),s(Qi,xO),i(e,Ly,p),m(Sl,e,p),i(e,Zy,p),i(e,Aa,p),s(Aa,CO),s(Aa,eu),s(eu,IO),s(Aa,RO),i(e,Gy,p),i(e,su,p),i(e,My,p),i(e,Gs,p),s(Gs,Sa),s(Sa,t_),m(xl,t_,null),s(Gs,UO),s(Gs,a_),s(a_,LO),i(e,Ny,p),i(e,xa,p),s(xa,ZO),s(xa,n_),s(n_,GO),s(xa,MO),i(e,Hy,p),i(e,tu,p),s(tu,o_),s(o_,NO),i(e,Wy,p),i(e,Ca,p),s(Ca,HO),s(Ca,l_),s(l_,WO),s(Ca,FO),i(e,Fy,p),i(e,N,p),s(N,BO),s(N,r_),s(r_,VO),s(N,YO),s(N,p_),s(p_,KO),s(N,JO),s(N,i_),s(i_,XO),s(N,QO),s(N,u_),s(u_,ez),s(N,sz),i(e,By,p),m(Cl,e,p),i(e,Vy,p),i(e,au,p),s(au,c_),s(c_,tz),i(e,Yy,p),i(e,Ia,p),s(Ia,az),s(Ia,Il),s(Il,nz),s(Ia,oz),i(e,Ky,p),i(e,nu,p),s(nu,h_),s(h_,lz),i(e,Jy,p),i(e,ou,p),s(ou,rz),i(e,Xy,p),i(e,lu,p),s(lu,pz),i(e,Qy,p),m(Rl,e,p),i(e,e2,p),i(e,Je,p),s(Je,iz),s(Je,f_),s(f_,uz),s(Je,cz),s(Je,d_),s(d_,hz),s(Je,fz),i(e,s2,p),m(Ul,e,p),i(e,t2,p),m(Ra,e,p),i(e,a2,p),i(e,Ua,p),s(Ua,dz),s(Ua,m_),s(m_,mz),s(Ua,_z),i(e,n2,p),i(e,La,p),s(La,vz),s(La,__),s(__,jz),s(La,gz),i(e,o2,p),m(Ll,e,p),i(e,l2,p),i(e,ru,p),s(ru,v_),s(v_,wz),i(e,r2,p),i(e,Xe,p),s(Xe,yz),s(Xe,j_),s(j_,bz),s(Xe,Ez),s(Xe,g_),s(g_,qz),s(Xe,$z),i(e,p2,p),i(e,pu,p),s(pu,kz),i(e,i2,p),m(Zl,e,p),i(e,u2,p),i(e,Za,p),s(Za,Dz),s(Za,w_),s(w_,Pz),s(Za,Oz),i(e,c2,p),m(Gl,e,p),i(e,h2,p),i(e,Ga,p),s(Ga,zz),s(Ga,y_),s(y_,Tz),s(Ga,Az),i(e,f2,p),i(e,iu,p),s(iu,Sz),i(e,d2,p),i(e,Ml,p),s(Ml,b_),s(b_,xz),s(Ml,Cz),i(e,m2,p),i(e,Qe,p),s(Qe,Iz),s(Qe,E_),s(E_,Rz),s(Qe,Uz),s(Qe,q_),s(q_,Lz),s(Qe,Zz),i(e,_2,p),i(e,uu,p),s(uu,Gz),i(e,v2,p),i(e,Ms,p),s(Ms,Ma),s(Ma,$_),m(Nl,$_,null),s(Ms,Mz),s(Ms,k_),s(k_,Nz),i(e,j2,p),i(e,cu,p),s(cu,Hz),i(e,g2,p),i(e,hu,p),s(hu,Wz),i(e,w2,p),i(e,fu,p),s(fu,Fz),i(e,y2,p),i(e,Ns,p),s(Ns,Na),s(Na,D_),m(Hl,D_,null),s(Ns,Bz),s(Ns,P_),s(P_,Vz),i(e,b2,p),i(e,Ha,p),s(Ha,Yz),s(Ha,O_),s(O_,Kz),s(Ha,Jz),i(e,E2,p),m(Wl,e,p),i(e,q2,p),i(e,du,p),s(du,Xz),i(e,$2,p),i(e,k,p),s(k,Qz),s(k,z_),s(z_,eT),s(k,sT),s(k,T_),s(T_,tT),s(k,aT),s(k,A_),s(A_,nT),s(k,oT),s(k,S_),s(S_,lT),s(k,rT),s(k,mu),s(mu,pT),s(k,iT),s(k,x_),s(x_,uT),s(k,cT),s(k,C_),s(C_,hT),s(k,fT),i(e,k2,p),m(Fl,e,p),i(e,D2,p),i(e,Wa,p),s(Wa,dT),s(Wa,I_),s(I_,mT),s(Wa,_T),i(e,P2,p),i(e,_u,p),s(_u,vT),i(e,O2,p),i(e,Fa,p),s(Fa,jT),s(Fa,Bl),s(Bl,gT),s(Fa,wT),i(e,z2,p),i(e,ne,p),s(ne,yT),s(ne,R_),s(R_,bT),s(ne,ET),s(ne,U_),s(U_,qT),s(ne,$T),s(ne,vu),s(vu,kT),s(ne,DT),i(e,T2,p),i(e,Hs,p),s(Hs,Ba),s(Ba,L_),m(Vl,L_,null),s(Hs,PT),s(Hs,Z_),s(Z_,OT),i(e,A2,p),i(e,Yl,p),s(Yl,zT),s(Yl,Kl),s(Kl,TT),i(e,S2,p),i(e,Va,p),s(Va,AT),s(Va,G_),s(G_,ST),s(Va,xT),i(e,x2,p),i(e,ju,p),s(ju,CT),i(e,C2,p),m(Jl,e,p),i(e,I2,p),i(e,es,p),s(es,IT),s(es,M_),s(M_,RT),s(es,UT),s(es,N_),s(N_,LT),s(es,ZT),i(e,R2,p),i(e,gu,p),i(e,U2,p),i(e,Ws,p),s(Ws,Ya),s(Ya,H_),m(Xl,H_,null),s(Ws,GT),s(Ws,W_),s(W_,MT),i(e,L2,p),i(e,wu,p),s(wu,NT),i(e,Z2,p),i(e,Ka,p),s(Ka,HT),s(Ka,yu),s(yu,WT),s(Ka,FT),i(e,G2,p),m(Ql,e,p),i(e,M2,p),i(e,bu,p),s(bu,BT),i(e,N2,p),i(e,Ja,p),s(Ja,VT),s(Ja,F_),s(F_,YT),s(Ja,KT),i(e,H2,p),m(er,e,p),i(e,W2,p),i(e,Eu,p),s(Eu,JT),i(e,F2,p),i(e,qu,p),s(qu,XT),i(e,B2,p),i(e,Fs,p),s(Fs,Xa),s(Xa,B_),m(sr,B_,null),s(Fs,QT),s(Fs,V_),s(V_,eA),i(e,V2,p),i(e,$u,p),s($u,sA),i(e,Y2,p),i(e,ku,p),s(ku,tA),i(e,K2,p),i(e,ss,p),s(ss,Y_),s(Y_,K_),s(K_,aA),s(ss,nA),s(ss,J_),s(J_,je),s(je,oA),s(je,Du),s(Du,lA),s(je,rA),s(je,Pu),s(Pu,pA),s(je,iA),s(je,Ou),s(Ou,uA),s(je,cA),s(ss,hA),s(ss,X_),s(X_,Q_),s(Q_,fA),i(e,J2,p),m(tr,e,p),i(e,X2,p),i(e,ge,p),s(ge,e1),s(e1,ar),s(ar,dA),s(ar,nr),s(nr,mA),s(ar,_A),s(ge,vA),s(ge,s1),s(s1,t1),s(t1,jA),s(ge,gA),s(ge,a1),s(a1,or),s(or,wA),s(or,lr),s(lr,yA),s(or,bA),i(e,Q2,p),i(e,zu,p),s(zu,EA),i(e,eb,p),i(e,Qa,p),s(Qa,Bs),s(Bs,n1),s(n1,qA),s(Bs,$A),s(Bs,o1),s(o1,kA),s(Bs,DA),s(Bs,l1),s(l1,PA),s(Qa,OA),s(Qa,r1),s(r1,rr),s(rr,zA),s(rr,pr),s(pr,TA),s(rr,AA),i(e,sb,p),i(e,Vs,p),s(Vs,en),s(en,p1),m(ir,p1,null),s(Vs,SA),s(Vs,i1),s(i1,xA),i(e,tb,p),i(e,Tu,p),s(Tu,Au),s(Au,u1),s(u1,CA),s(Au,IA),i(e,ab,p),i(e,H,p),s(H,RA),s(H,c1),s(c1,UA),s(H,LA),s(H,h1),s(h1,ZA),s(H,GA),s(H,f1),s(f1,MA),s(H,NA),s(H,d1),s(d1,HA),s(H,WA),i(e,nb,p),i(e,sn,p),s(sn,FA),s(sn,ur),s(ur,BA),s(sn,VA),i(e,ob,p),i(e,Ys,p),s(Ys,tn),s(tn,m1),m(cr,m1,null),s(Ys,YA),s(Ys,_1),s(_1,KA),i(e,lb,p),i(e,ts,p),s(ts,Ks),s(Ks,JA),s(Ks,Su),s(Su,XA),s(Ks,QA),s(Ks,xu),s(xu,eS),s(Ks,sS),s(ts,tS),s(ts,hr),s(hr,aS),s(hr,fr),s(fr,nS),s(hr,oS),s(ts,lS),s(ts,Js),s(Js,rS),s(Js,Cu),s(Cu,pS),s(Js,iS),s(Js,dr),s(dr,uS),s(Js,cS),i(e,rb,p),i(e,Iu,p),i(e,pb,p),i(e,Xs,p),s(Xs,an),s(an,v1),m(mr,v1,null),s(Xs,hS),s(Xs,j1),s(j1,fS),i(e,ib,p),i(e,as,p),s(as,dS),s(as,g1),s(g1,mS),s(as,_S),s(as,Ru),s(Ru,vS),s(as,jS),i(e,ub,p),i(e,nn,p),s(nn,gS),s(nn,Uu),s(Uu,wS),s(nn,yS),i(e,cb,p),i(e,ns,p),s(ns,bS),s(ns,Lu),s(Lu,ES),s(ns,qS),s(ns,w1),s(w1,$S),s(ns,kS),i(e,hb,p),i(e,Zu,p),s(Zu,DS),i(e,fb,p),m(_r,e,p),i(e,db,p),i(e,Gu,p),s(Gu,PS),i(e,mb,p),m(vr,e,p),i(e,_b,p),i(e,Qs,p),s(Qs,on),s(on,y1),m(jr,y1,null),s(Qs,OS),s(Qs,b1),s(b1,zS),i(e,vb,p),i(e,q,p),m(gr,q,null),s(q,TS),s(q,E1),s(E1,AS),s(q,SS),s(q,we),s(we,xS),s(we,q1),s(q1,CS),s(we,IS),s(we,$1),s($1,RS),s(we,US),s(we,k1),s(k1,LS),s(we,ZS),s(q,GS),s(q,oe),s(oe,Mu),s(Mu,MS),s(oe,NS),s(oe,D1),s(D1,HS),s(oe,WS),s(oe,Nu),s(Nu,FS),s(oe,BS),s(oe,P1),s(P1,VS),s(oe,YS),s(q,KS),s(q,os),m(wr,os,null),s(os,JS),s(os,O1),s(O1,XS),s(os,QS),s(os,et),s(et,ex),s(et,z1),s(z1,sx),s(et,tx),s(et,T1),s(T1,ax),s(et,nx),s(q,ox),s(q,ln),m(yr,ln,null),s(ln,lx),s(ln,br),s(br,rx),s(br,A1),s(A1,px),s(br,ix),s(q,ux),s(q,rn),m(Er,rn,null),s(rn,cx),s(rn,st),s(st,hx),s(st,S1),s(S1,fx),s(st,dx),s(st,x1),s(x1,mx),s(st,_x),s(q,vx),s(q,pn),m(qr,pn,null),s(pn,jx),s(pn,tt),s(tt,gx),s(tt,C1),s(C1,wx),s(tt,yx),s(tt,I1),s(I1,bx),s(tt,Ex),i(e,jb,p),i(e,at,p),s(at,un),s(un,R1),m($r,R1,null),s(at,qx),s(at,U1),s(U1,$x),i(e,gb,p),i(e,le,p),s(le,L1),s(L1,kr),s(kr,kx),s(le,Dx),s(le,Z1),s(Z1,Dr),s(Dr,Px),s(le,Ox),s(le,G1),s(G1,Pr),s(Pr,zx),s(le,Tx),s(le,M1),s(M1,Or),s(Or,Ax),i(e,wb,p),i(e,Hu,p),s(Hu,Sx),i(e,yb,p),i(e,ls,p),s(ls,N1),s(N1,zr),s(zr,xx),s(ls,Cx),s(ls,H1),s(H1,Tr),s(Tr,Ix),s(ls,Rx),s(ls,W1),s(W1,Ar),s(Ar,Ux),i(e,bb,p),i(e,rs,p),s(rs,Lx),s(rs,Wu),s(Wu,Zx),s(rs,Gx),s(rs,Sr),s(Sr,Mx),s(rs,Nx),Eb=!0},p(e,[p]){const xr={};p&2&&(xr.$$scope={dirty:p,ctx:e}),Lt.$set(xr);const F1={};p&2&&(F1.$$scope={dirty:p,ctx:e}),Ra.$set(F1)},i(e){Eb||(_(F.$$.fragment,e),_(Tn.$$.fragment,e),_(An.$$.fragment,e),_(Sn.$$.fragment,e),_(xn.$$.fragment,e),_(Rn.$$.fragment,e),_(Un.$$.fragment,e),_(Ln.$$.fragment,e),_(Gn.$$.fragment,e),_(Mn.$$.fragment,e),_(Nn.$$.fragment,e),_(Wn.$$.fragment,e),_(Bn.$$.fragment,e),_(Vn.$$.fragment,e),_(Kn.$$.fragment,e),_(Xn.$$.fragment,e),_(Qn.$$.fragment,e),_(so.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(lo.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(fo.$$.fragment,e),_(mo.$$.fragment,e),_(vo.$$.fragment,e),_(jo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(yo.$$.fragment,e),_(Lt.$$.fragment,e),_(Eo.$$.fragment,e),_(Do.$$.fragment,e),_(Po.$$.fragment,e),_(Oo.$$.fragment,e),_(zo.$$.fragment,e),_(Zo.$$.fragment,e),_(Go.$$.fragment,e),_(Wo.$$.fragment,e),_(Bo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(Qo.$$.fragment,e),_(el.$$.fragment,e),_(tl.$$.fragment,e),_(rl.$$.fragment,e),_(pl.$$.fragment,e),_(il.$$.fragment,e),_(hl.$$.fragment,e),_(fl.$$.fragment,e),_(dl.$$.fragment,e),_(ml.$$.fragment,e),_(_l.$$.fragment,e),_(jl.$$.fragment,e),_(gl.$$.fragment,e),_(wl.$$.fragment,e),_(bl.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Dl.$$.fragment,e),_(Pl.$$.fragment,e),_(Ol.$$.fragment,e),_(zl.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Sl.$$.fragment,e),_(xl.$$.fragment,e),_(Cl.$$.fragment,e),_(Rl.$$.fragment,e),_(Ul.$$.fragment,e),_(Ra.$$.fragment,e),_(Ll.$$.fragment,e),_(Zl.$$.fragment,e),_(Gl.$$.fragment,e),_(Nl.$$.fragment,e),_(Hl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Vl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ir.$$.fragment,e),_(cr.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(gr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(Er.$$.fragment,e),_(qr.$$.fragment,e),_($r.$$.fragment,e),Eb=!0)},o(e){v(F.$$.fragment,e),v(Tn.$$.fragment,e),v(An.$$.fragment,e),v(Sn.$$.fragment,e),v(xn.$$.fragment,e),v(Rn.$$.fragment,e),v(Un.$$.fragment,e),v(Ln.$$.fragment,e),v(Gn.$$.fragment,e),v(Mn.$$.fragment,e),v(Nn.$$.fragment,e),v(Wn.$$.fragment,e),v(Bn.$$.fragment,e),v(Vn.$$.fragment,e),v(Kn.$$.fragment,e),v(Xn.$$.fragment,e),v(Qn.$$.fragment,e),v(so.$$.fragment,e),v(no.$$.fragment,e),v(oo.$$.fragment,e),v(lo.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(fo.$$.fragment,e),v(mo.$$.fragment,e),v(vo.$$.fragment,e),v(jo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(yo.$$.fragment,e),v(Lt.$$.fragment,e),v(Eo.$$.fragment,e),v(Do.$$.fragment,e),v(Po.$$.fragment,e),v(Oo.$$.fragment,e),v(zo.$$.fragment,e),v(Zo.$$.fragment,e),v(Go.$$.fragment,e),v(Wo.$$.fragment,e),v(Bo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(Qo.$$.fragment,e),v(el.$$.fragment,e),v(tl.$$.fragment,e),v(rl.$$.fragment,e),v(pl.$$.fragment,e),v(il.$$.fragment,e),v(hl.$$.fragment,e),v(fl.$$.fragment,e),v(dl.$$.fragment,e),v(ml.$$.fragment,e),v(_l.$$.fragment,e),v(jl.$$.fragment,e),v(gl.$$.fragment,e),v(wl.$$.fragment,e),v(bl.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Dl.$$.fragment,e),v(Pl.$$.fragment,e),v(Ol.$$.fragment,e),v(zl.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Sl.$$.fragment,e),v(xl.$$.fragment,e),v(Cl.$$.fragment,e),v(Rl.$$.fragment,e),v(Ul.$$.fragment,e),v(Ra.$$.fragment,e),v(Ll.$$.fragment,e),v(Zl.$$.fragment,e),v(Gl.$$.fragment,e),v(Nl.$$.fragment,e),v(Hl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Vl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ir.$$.fragment,e),v(cr.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(gr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(Er.$$.fragment,e),v(qr.$$.fragment,e),v($r.$$.fragment,e),Eb=!1},d(e){t(y),e&&t(L),e&&t(b),j(F),e&&t(ot),e&&t(B),e&&t(J1),e&&t(O),e&&t(X1),e&&t(be),e&&t(Q1),e&&t(Nr),e&&t(ev),e&&t(Hr),e&&t(sv),e&&t(lt),e&&t(tv),e&&t(rt),e&&t(av),e&&t(Vr),e&&t(nv),e&&t(Yr),e&&t(ov),e&&t(Kr),e&&t(lv),e&&t(Jr),e&&t(rv),e&&t(Xr),e&&t(pv),e&&t(ep),e&&t(iv),e&&t(sp),e&&t(uv),e&&t(ms),j(Tn),e&&t(cv),e&&t(tp),e&&t(hv),e&&t(_s),j(An),e&&t(fv),e&&t(ap),e&&t(dv),j(Sn,e),e&&t(mv),e&&t(Ee),e&&t(_v),j(xn,e),e&&t(vv),e&&t(qe),e&&t(jv),e&&t(ut),e&&t(gv),e&&t(op),e&&t(wv),e&&t(lp),e&&t(yv),j(Rn,e),e&&t(bv),e&&t($e),e&&t(Ev),e&&t(ct),e&&t(qv),j(Un,e),e&&t($v),e&&t(de),e&&t(kv),e&&t(rp),e&&t(Dv),j(Ln,e),e&&t(Pv),e&&t(ke),e&&t(Ov),e&&t(ht),e&&t(zv),e&&t(De),e&&t(Tv),e&&t(pp),e&&t(Av),j(Gn,e),e&&t(Sv),e&&t(ip),e&&t(xv),j(Mn,e),e&&t(Cv),e&&t(up),e&&t(Iv),j(Nn,e),e&&t(Rv),e&&t(ft),e&&t(Uv),e&&t(dt),e&&t(Lv),e&&t(mt),e&&t(Zv),e&&t(cp),e&&t(Gv),e&&t(vs),j(Wn),e&&t(Mv),e&&t(vt),e&&t(Nv),e&&t(jt),e&&t(Hv),e&&t(fp),e&&t(Wv),j(Bn,e),e&&t(Fv),e&&t(dp),e&&t(Bv),j(Vn,e),e&&t(Vv),e&&t(z),e&&t(Yv),e&&t(K),e&&t(Kv),e&&t(gt),e&&t(Jv),j(Kn,e),e&&t(Xv),e&&t(wt),e&&t(Qv),e&&t(yt),e&&t(ej),e&&t(mp),e&&t(sj),e&&t(gs),j(Xn),e&&t(tj),e&&t(Et),e&&t(aj),j(Qn,e),e&&t(nj),e&&t(Pe),e&&t(oj),e&&t(vp),e&&t(lj),e&&t(qt),e&&t(rj),e&&t(jp),e&&t(pj),j(so,e),e&&t(ij),e&&t(gp),e&&t(uj),e&&t($t),e&&t(cj),e&&t(wp),e&&t(hj),e&&t(yp),e&&t(fj),e&&t(bp),e&&t(dj),e&&t(Ep),e&&t(mj),j(no,e),e&&t(_j),e&&t(qp),e&&t(vj),e&&t($p),e&&t(jj),e&&t(ws),j(oo),e&&t(gj),e&&t(Dt),e&&t(wj),e&&t(kp),e&&t(yj),j(lo,e),e&&t(bj),e&&t(Pt),e&&t(Ej),e&&t(Dp),e&&t(qj),e&&t(Pp),e&&t($j),j(ro,e),e&&t(kj),e&&t(Oe),e&&t(Dj),j(po,e),e&&t(Pj),e&&t(Ot),e&&t(Oj),j(io,e),e&&t(zj),e&&t(Op),e&&t(Tj),e&&t(zt),e&&t(Aj),e&&t(zp),e&&t(Sj),e&&t(ys),j(uo),e&&t(xj),e&&t(At),e&&t(Cj),e&&t(St),e&&t(Ij),j(fo,e),e&&t(Rj),e&&t(xt),e&&t(Uj),j(mo,e),e&&t(Lj),e&&t(Ct),e&&t(Zj),e&&t(Tp),e&&t(Gj),e&&t(J),e&&t(Mj),j(vo,e),e&&t(Nj),e&&t(It),e&&t(Hj),e&&t(Sp),e&&t(Wj),e&&t(bs),j(jo),e&&t(Fj),e&&t(T),e&&t(Bj),e&&t(Rp),e&&t(Vj),j(go,e),e&&t(Yj),e&&t(Up),e&&t(Kj),j(wo,e),e&&t(Jj),e&&t(Lp),e&&t(Xj),e&&t(Es),j(yo),e&&t(Qj),j(Lt,e),e&&t(eg),e&&t(ze),e&&t(sg),e&&t(Zt),e&&t(tg),e&&t(Te),e&&t(ag),e&&t(Hp),e&&t(ng),e&&t(Gt),e&&t(og),e&&t(Mt),e&&t(lg),e&&t(X),e&&t(rg),e&&t(Vp),e&&t(pg),e&&t(qs),j(Eo),e&&t(ig),e&&t(qo),e&&t(ug),e&&t(Ae),e&&t(cg),e&&t(Ht),e&&t(hg),e&&t(Kp),e&&t(fg),e&&t(Jp),e&&t(dg),e&&t($s),j(Do),e&&t(mg),e&&t(Xp),e&&t(_g),j(Po,e),e&&t(vg),e&&t(Qp),e&&t(jg),e&&t(Se),e&&t(gg),e&&t(ei),e&&t(wg),e&&t(Ds),j(Oo),e&&t(yg),e&&t(si),e&&t(bg),j(zo,e),e&&t(Eg),e&&t(G),e&&t(qg),e&&t(xe),e&&t($g),e&&t(ti),e&&t(kg),e&&t(Bt),e&&t(Dg),e&&t(S),e&&t(Pg),e&&t(_e),e&&t(Og),e&&t(ai),e&&t(zg),e&&t(Ce),e&&t(Tg),e&&t(Ie),e&&t(Ag),e&&t(Io),e&&t(Sg),e&&t(Q),e&&t(xg),e&&t(oi),e&&t(Cg),e&&t(ve),e&&t(Ig),e&&t(Re),e&&t(Rg),e&&t(Vt),e&&t(Ug),e&&t(li),e&&t(Lg),e&&t(Ps),j(Zo),e&&t(Zg),e&&t(ri),e&&t(Gg),e&&t(pi),e&&t(Mg),j(Go,e),e&&t(Ng),e&&t(Kt),e&&t(Hg),e&&t(Ue),e&&t(Wg),e&&t(Jt),e&&t(Fg),e&&t(Le),e&&t(Bg),e&&t(ii),e&&t(Vg),e&&t(Os),j(Wo),e&&t(Yg),e&&t(ui),e&&t(Kg),e&&t(ci),e&&t(Jg),e&&t(Qt),e&&t(Xg),e&&t(Ze),e&&t(Qg),e&&t(hi),e&&t(ew),e&&t(Ts),j(Bo),e&&t(sw),e&&t(sa),e&&t(tw),j(Vo,e),e&&t(aw),e&&t(ta),e&&t(nw),j(Yo,e),e&&t(ow),e&&t(fi),e&&t(lw),e&&t(As),j(Ko),e&&t(rw),e&&t(na),e&&t(pw),j(Jo,e),e&&t(iw),e&&t(oa),e&&t(uw),j(Xo,e),e&&t(cw),e&&t(Ss),j(Qo),e&&t(hw),e&&t(ra),e&&t(fw),e&&t(di),e&&t(dw),e&&t(pa),e&&t(mw),e&&t(mi),e&&t(_w),e&&t(xs),j(el),e&&t(vw),e&&t(Ge),e&&t(jw),e&&t(E),e&&t(gw),e&&t(Me),e&&t(ww),j(tl,e),e&&t(yw),e&&t(vi),e&&t(bw),e&&t(ee),e&&t(Ew),e&&t(ji),e&&t(qw),e&&t(gi),e&&t($w),j(rl,e),e&&t(kw),e&&t(ua),e&&t(Dw),e&&t(yi),e&&t(Pw),j(pl,e),e&&t(Ow),e&&t(se),e&&t(zw),e&&t(bi),e&&t(Tw),e&&t(Cs),j(il),e&&t(Aw),e&&t(x),e&&t(Sw),e&&t(Ei),e&&t(xw),e&&t(ha),e&&t(Cw),e&&t(D),e&&t(Iw),e&&t(He),e&&t(Rw),j(hl,e),e&&t(Uw),e&&t(We),e&&t(Lw),e&&t(te),e&&t(Zw),e&&t(ki),e&&t(Gw),j(fl,e),e&&t(Mw),e&&t(ma),e&&t(Nw),e&&t(_a),e&&t(Hw),j(dl,e),e&&t(Ww),e&&t(M),e&&t(Fw),e&&t(Pi),e&&t(Bw),e&&t(Is),j(ml),e&&t(Vw),e&&t(Oi),e&&t(Yw),e&&t(ja),e&&t(Kw),j(_l,e),e&&t(Jw),e&&t(ga),e&&t(Xw),e&&t(zi),e&&t(Qw),e&&t(Rs),j(jl),e&&t(ey),e&&t(Ti),e&&t(sy),e&&t(Ai),e&&t(ty),j(gl,e),e&&t(ay),e&&t(Ve),e&&t(ny),e&&t(ya),e&&t(oy),e&&t(xi),e&&t(ly),j(wl,e),e&&t(ry),e&&t(ba),e&&t(py),e&&t(Ea),e&&t(iy),e&&t(Ii),e&&t(uy),j(bl,e),e&&t(cy),e&&t(ae),e&&t(hy),e&&t(qa),e&&t(fy),e&&t(Ui),e&&t(dy),j(El,e),e&&t(my),e&&t($a),e&&t(_y),e&&t(ka),e&&t(vy),e&&t(Zi),e&&t(jy),e&&t(Us),j($l),e&&t(gy),e&&t(Gi),e&&t(wy),j(kl,e),e&&t(yy),e&&t(C),e&&t(by),e&&t(Ni),e&&t(Ey),j(Dl,e),e&&t(qy),e&&t(Pa),e&&t($y),e&&t(Wi),e&&t(ky),e&&t(Ls),j(Pl),e&&t(Dy),e&&t(Fi),e&&t(Py),j(Ol,e),e&&t(Oy),e&&t(Ye),e&&t(zy),e&&t(Vi),e&&t(Ty),j(zl,e),e&&t(Ay),e&&t(za),e&&t(Sy),e&&t(Ki),e&&t(xy),e&&t(Zs),j(Tl),e&&t(Cy),e&&t(Ji),e&&t(Iy),j(Al,e),e&&t(Ry),e&&t(Ke),e&&t(Uy),e&&t(Qi),e&&t(Ly),j(Sl,e),e&&t(Zy),e&&t(Aa),e&&t(Gy),e&&t(su),e&&t(My),e&&t(Gs),j(xl),e&&t(Ny),e&&t(xa),e&&t(Hy),e&&t(tu),e&&t(Wy),e&&t(Ca),e&&t(Fy),e&&t(N),e&&t(By),j(Cl,e),e&&t(Vy),e&&t(au),e&&t(Yy),e&&t(Ia),e&&t(Ky),e&&t(nu),e&&t(Jy),e&&t(ou),e&&t(Xy),e&&t(lu),e&&t(Qy),j(Rl,e),e&&t(e2),e&&t(Je),e&&t(s2),j(Ul,e),e&&t(t2),j(Ra,e),e&&t(a2),e&&t(Ua),e&&t(n2),e&&t(La),e&&t(o2),j(Ll,e),e&&t(l2),e&&t(ru),e&&t(r2),e&&t(Xe),e&&t(p2),e&&t(pu),e&&t(i2),j(Zl,e),e&&t(u2),e&&t(Za),e&&t(c2),j(Gl,e),e&&t(h2),e&&t(Ga),e&&t(f2),e&&t(iu),e&&t(d2),e&&t(Ml),e&&t(m2),e&&t(Qe),e&&t(_2),e&&t(uu),e&&t(v2),e&&t(Ms),j(Nl),e&&t(j2),e&&t(cu),e&&t(g2),e&&t(hu),e&&t(w2),e&&t(fu),e&&t(y2),e&&t(Ns),j(Hl),e&&t(b2),e&&t(Ha),e&&t(E2),j(Wl,e),e&&t(q2),e&&t(du),e&&t($2),e&&t(k),e&&t(k2),j(Fl,e),e&&t(D2),e&&t(Wa),e&&t(P2),e&&t(_u),e&&t(O2),e&&t(Fa),e&&t(z2),e&&t(ne),e&&t(T2),e&&t(Hs),j(Vl),e&&t(A2),e&&t(Yl),e&&t(S2),e&&t(Va),e&&t(x2),e&&t(ju),e&&t(C2),j(Jl,e),e&&t(I2),e&&t(es),e&&t(R2),e&&t(gu),e&&t(U2),e&&t(Ws),j(Xl),e&&t(L2),e&&t(wu),e&&t(Z2),e&&t(Ka),e&&t(G2),j(Ql,e),e&&t(M2),e&&t(bu),e&&t(N2),e&&t(Ja),e&&t(H2),j(er,e),e&&t(W2),e&&t(Eu),e&&t(F2),e&&t(qu),e&&t(B2),e&&t(Fs),j(sr),e&&t(V2),e&&t($u),e&&t(Y2),e&&t(ku),e&&t(K2),e&&t(ss),e&&t(J2),j(tr,e),e&&t(X2),e&&t(ge),e&&t(Q2),e&&t(zu),e&&t(eb),e&&t(Qa),e&&t(sb),e&&t(Vs),j(ir),e&&t(tb),e&&t(Tu),e&&t(ab),e&&t(H),e&&t(nb),e&&t(sn),e&&t(ob),e&&t(Ys),j(cr),e&&t(lb),e&&t(ts),e&&t(rb),e&&t(Iu),e&&t(pb),e&&t(Xs),j(mr),e&&t(ib),e&&t(as),e&&t(ub),e&&t(nn),e&&t(cb),e&&t(ns),e&&t(hb),e&&t(Zu),e&&t(fb),j(_r,e),e&&t(db),e&&t(Gu),e&&t(mb),j(vr,e),e&&t(_b),e&&t(Qs),j(jr),e&&t(vb),e&&t(q),j(gr),j(wr),j(yr),j(Er),j(qr),e&&t(jb),e&&t(at),j($r),e&&t(gb),e&&t(le),e&&t(wb),e&&t(Hu),e&&t(yb),e&&t(ls),e&&t(bb),e&&t(rs)}}}const hW={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function fW(qn,y,L){let{fw:b}=y;return qn.$$set=$=>{"fw"in $&&L(0,b=$.fw)},[b]}class wW extends oW{constructor(y){super();lW(this,y,fW,cW,rW,{fw:0})}}export{wW as default,hW as metadata};
