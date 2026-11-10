const $=s=>document.querySelector(s);
const money=n=>'$'+Math.round(n).toLocaleString('es-CO');

/* ---------- íconos ---------- */
const P={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
 receipt:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 bag:'<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
 pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 pinf:'<path d="M12 22s-8-7-8-13a8 8 0 0 1 16 0c0 6-8 13-8 13z"/><circle cx="12" cy="9" r="3" fill="#fff" stroke="none"/>',
 down:'<path d="m6 9 6 6 6-6"/>', right:'<path d="m9 6 6 6-6 6"/>', left:'<path d="m15 6-6 6 6 6"/>',
 wallet:'<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 chat:'<path d="M4 5h16v11H9l-5 4z"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
 bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17h6l3-7h3M9 10h4M15 10l3 7"/>',
 send:'<path d="M4 12 20 4l-6 16-3-7z"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.5V14M12 17.5v.01"/>',
 cash:'<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9.5v.01M18 14.5v.01"/>',
 card:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/>',
 mobile:'<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18.5h2"/>',
 star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
 food:'<path d="M4 11h16a8 8 0 0 1-16 0zM12 3v4M8 5l1 2M16 5l-1 2"/>',
};
const ic=(n,s='')=>`<svg class="i" viewBox="0 0 24 24" ${s}>${P[n]}</svg>`;
function paintIcons(root=document){root.querySelectorAll('[data-i]').forEach(e=>{if(!e.dataset.done){e.insertAdjacentHTML('afterbegin',ic(e.dataset.i));e.dataset.done=1}})}

/* ---------- mapas ---------- */
function mapSVG(route){return `<svg class="m" viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice">
 <rect width="390" height="300" fill="#EEE7DD"/>
 <path d="M-10 230 C80 200 140 260 230 220 S360 180 400 200 L400 300 L-10 300z" fill="#CFE6EC"/>
 <rect x="250" y="40" width="110" height="70" rx="14" fill="#D9ECCF"/><circle cx="290" cy="70" r="10" fill="#C3E0B6"/><circle cx="325" cy="85" r="13" fill="#C3E0B6"/>
 <g stroke="#fff" stroke-width="13" stroke-linecap="round" fill="none"><path d="M-10 70H400M-10 160H400M70 -10V320M190 -10V320M320 120V320"/></g>
 <g stroke="#fff" stroke-width="6" fill="none" opacity=".9"><path d="M-10 115H250M130 -10V200M250 160 400 100"/></g>
 <g fill="#E6DED3"><rect x="10" y="10" width="45" height="45" rx="8"/><rect x="85" y="10" width="90" height="45" rx="8"/><rect x="10" y="85" width="45" height="62" rx="8"/><rect x="145" y="125" width="30" height="22" rx="6"/><rect x="205" y="10" width="30" height="45" rx="8"/><rect x="85" y="175" width="90" height="40" rx="8"/><rect x="205" y="175" width="100" height="25" rx="8"/></g>
 ${route?`<path d="M70 70 H190 V160 H320" stroke="#1B1511" stroke-width="4" fill="none" stroke-dasharray="2 8" stroke-linecap="round"/>
 <circle cx="70" cy="70" r="9" fill="#fff" stroke="#1B1511" stroke-width="3"/>
 <g transform="translate(320 160)"><circle r="20" fill="rgba(255,106,26,.18)"/><circle r="10" fill="#FF6A1A" stroke="#fff" stroke-width="3"/></g>`:''}
</svg>`}
const BIKE=[[70,70],[130,70],[190,110],[255,160],[320,160]];

/* ---------- datos ---------- */
const MEJORAS=[
 ['Inicio sin saturación','Una jerarquía clara y menos elementos compitiendo.','home'],
 ['Ofertas en su propia sección','Los cupones van a una pestaña dedicada.','offers'],
 ['Filtro por presupuesto','Rangos de precio y precio promedio visible.','home'],
 ['Todo al alcance del pulgar','Búsqueda, carrito y navegación abajo.','home'],
 ['Total claro desde el inicio','Envío, tarifas y descuentos antes de pagar.','cart'],
 ['Dirección con referencias','Torre, apto y notas para el repartidor.','addr'],
 ['Contacto con el repartidor','Chat, llamada y mensajes rápidos.','track'],
 ['Efectivo con cambio y ayuda','Indica con cuánto pagas; ayuda en 2 pasos.','cart'],
];
const RESTS=[
 {id:'arepas',n:'Arepas La Esquina',e:'🫓',bg:'linear-gradient(135deg,#FFE3B0,#FFC978)',cat:'rapida',time:'20–30',fee:0,avg:12000,r:4.7,items:[
   ['Arepa de huevo','Huevo, carne molida y masa crocante',8500,'🥚'],['Arepa mixta','Pollo, res y queso costeño',13500,'🫓'],['Jugo de corozo','Natural, 400 ml',4500,'🧃']]},
 {id:'corrientazo',n:'Corrientazo Doña Rosa',e:'🍛',bg:'linear-gradient(135deg,#FFD6C2,#FFAD8A)',cat:'casera',time:'25–35',fee:2900,avg:16000,r:4.8,items:[
   ['Almuerzo del día','Sopa, arroz, proteína, ensalada y jugo',16000,'🍛'],['Bandeja paisa','Fríjoles, chicharrón, huevo y maduro',24900,'🍳'],['Limonada de coco','Vaso grande',6500,'🥥']]},
 {id:'burger',n:'Burger Barrio',e:'🍔',bg:'linear-gradient(135deg,#FCE6B5,#F5C46B)',cat:'rapida',time:'25–35',fee:3500,avg:24000,r:4.6,items:[
   ['Clásica','Carne de 150 g, queso y tomate',21900,'🍔'],['Doble bacon','Doble carne, tocineta y salsa de la casa',29900,'🥓'],['Papas rústicas','Con paprika',7900,'🍟']]},
 {id:'bowl',n:'Bowl Verde',e:'🥗',bg:'linear-gradient(135deg,#DDF2D5,#A9DC9A)',cat:'saludable',time:'15–25',fee:0,avg:22000,r:4.7,items:[
   ['Bowl de pollo','Quinoa, aguacate, pollo y maíz',23900,'🥗'],['Bowl vegano','Garbanzo, hummus y vegetales asados',21900,'🥙'],['Agua de panela con limón','Fría, 500 ml',4900,'🍋']]},
 {id:'sushi',n:'Nikkei Roll',e:'🍣',bg:'linear-gradient(135deg,#FFDDE1,#FFAFB9)',cat:'asiatica',time:'30–40',fee:4900,avg:38000,r:4.8,items:[
   ['Roll acevichado','10 piezas, salmón y salsa nikkei',36900,'🍣'],['Gyozas','6 unidades de cerdo',18900,'🥟'],['Té verde frío','400 ml',6900,'🍵']]},
 {id:'pollo',n:'Pollo Brasa 85',e:'🍗',bg:'linear-gradient(135deg,#FFE2B8,#FFB866)',cat:'casera',time:'25–35',fee:2500,avg:19000,r:4.5,items:[
   ['1/4 de pollo','Con papa salada y arepa',17900,'🍗'],['1/2 pollo','Con papa, arepa y ensalada',29900,'🍗'],['Gaseosa 400 ml','Fría',3900,'🥤']]},
];
const CATS=[['todo','Todo','🍽️'],['rapida','Rápida','🍔'],['casera','Casera','🍛'],['saludable','Saludable','🥗'],['asiatica','Asiática','🍣'],['postres','Postres','🍰'],['bebidas','Bebidas','🧃']];
const BUDGETS=[['b1','$15k','Hasta',0,15000],['b2','$15–25k','Entre',15000,25000],['b3','+$25k','Más de',25000,1e9]];
const COUPONS=[
 {id:'ENVIO0',big:'$0',sm:'envío',bg:'linear-gradient(160deg,#1FB673,#14965A)',t:'Envío gratis',d:'En restaurantes seleccionados',c:'Mínimo $20.000 · vence 30 nov',v:{type:'ship'}},
 {id:'DESC20',big:'20%',sm:'dcto',bg:'linear-gradient(160deg,#FF9147,#FF6A1A)',t:'20% en tu pedido',d:'Hasta $8.000 de descuento',c:'Mínimo $30.000 · 1 uso',v:{type:'pct',p:.2,max:8000,min:30000}},
 {id:'ALMUERZO',big:'$5k',sm:'almuerzo',bg:'linear-gradient(160deg,#5B7CFF,#3667F6)',t:'$5.000 en almuerzos',d:'De 11:00 a.m. a 3:00 p.m.',c:'Categoría Casera · lun a vie',v:{type:'fix',a:5000,min:15000}},
 {id:'2X1',big:'2x1',sm:'bebidas',bg:'linear-gradient(160deg,#3A2D24,#1B1511)',t:'2x1 en bebidas',d:'Jugos y limonadas',c:'Aplica a la bebida de menor valor',v:{type:'none'}},
];

const S={cart:{},rest:null,cat:'todo',budget:null,coupon:null,pay:'cash',cashWith:null,tip:2000,
  book:{
    casa:{a:'Cra. 51B #84-120',t:'Torre 2',ap:'Apto 1104',b:'Alto Prado',ref:'Edificio de fachada blanca, frente al parque. Dejar en portería si no contesto.'},
    oficina:{a:'',t:'',ap:'',b:'',ref:''},
    nueva:{a:'',t:'',ap:'',b:'',ref:''}
  },
  place:'casa',addr:null,
  order:null,stage:0,issue:null,stack:['home'],
  view:'home',mejora:null,sortPrice:false,offer:'all',menu:'popular'};
S.addr=S.book.casa;

/* ---------- navegación ---------- */
function show(id){
  S.view=id;
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+id));
  const r={cart:renderCart,rest:renderRest,track:renderTrack,orders:renderOrders,home:renderHome,offers:renderCoupons,addr:fillAddr,help:renderIssues}[id];r&&r();
  $('#status').style.color=(id==='home')?'#fff':'var(--ink)';
  paintIcons();markPanel(id);}
function go(id){S.stack.push(id);show(id)}
function back(){if(S.stack.length>1)S.stack.pop();show(S.stack[S.stack.length-1])}
function tab(id){S.stack=[id];renderNavs();show(id)}
function renderNavs(){const cur=S.stack[0];
  const h=[['home','Inicio','home'],['offers','Ofertas','tag'],['orders','Pedidos','receipt'],['profile','Perfil','user']]
   .map(([k,l,i])=>`<button class="${k===cur?'on':''}" onclick="tab('${k}')">${ic(i)}${l}</button>`).join('');
  ['nav1','nav2','nav3','nav4'].forEach(n=>$('#'+n).innerHTML=h);}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),1900)}

/* ---------- inicio ---------- */
function renderHome(){
  $('#budgetChips').innerHTML=BUDGETS.map(([k,v,l])=>`<button class="bopt ${S.budget===k?'on':''}" onclick="setBudget('${k}')"><small>${v}</small>${l}</button>`).join('');
  $('#cats').innerHTML=CATS.map(([k,l,e])=>`<button class="cat ${S.cat===k?'on':''}" onclick="setCat('${k}')"><i>${e}</i>${l}</button>`).join('');
  const b=BUDGETS.find(x=>x[0]===S.budget);
  const list=RESTS.filter(r=>(S.cat==='todo'||r.cat===S.cat)&&(!b||(r.avg>=b[3]&&r.avg<b[4])));
  if(S.sortPrice) list.sort((a,c)=>a.avg-c.avg);
  $('#listTitle').textContent=b?`${b[2]} ${b[1]} por persona`:'Cerca de ti';
  $('#restList').innerHTML=list.length?list.map(r=>`
    <button class="rest" onclick="openRest('${r.id}')">
      <div class="rimg" style="background:${r.bg}"><span class="emo">${r.e}</span>
        <span class="tl">${ic('clock')}${r.time} min</span><span class="fav">${ic('heart')}</span></div>
      <div class="rinfo"><div class="top"><h4>${r.n}</h4><span class="star">${ic('star')}${String(r.r).replace('.',',')}</span></div>
        <div class="row"><span class="pill o">Promedio ${money(r.avg)}</span>${r.fee?`<span class="pill">Envío ${money(r.fee)}</span>`:'<span class="pill g">Envío gratis</span>'}</div></div>
    </button>`).join(''):'<p class="empty">No hay restaurantes con ese filtro.<br>Prueba otro rango de precio.</p>';
  const c=count();$('#cartCount').style.display=c?'grid':'none';$('#cartCount').textContent=c;
}
function setBudget(k){S.budget=S.budget===k?null:k;renderHome()}
function setCat(k){S.cat=k;renderHome()}
function toggleSort(){S.sortPrice=!S.sortPrice;toast(S.sortPrice?'Ordenado por: más económico':'Ordenado por: cerca de ti');renderHome()}

/* ---------- ofertas ---------- */
function couponMatches(c){
  if(S.offer==='all') return true;
  if(S.offer==='ship') return c.v.type==='ship';
  if(S.offer==='bogo') return c.id==='2X1';
  if(S.offer==='pct') return c.v.type==='pct'||c.v.type==='fix';
  return true;
}
function renderCoupons(){
  const list=COUPONS.filter(couponMatches);
  $('#couponList').innerHTML=list.length?list.map(c=>`
   <div class="coupon"><div class="l" style="background:${c.bg}">${c.big}<small>${c.sm}</small></div>
    <div class="r"><h4>${c.t}</h4><p>${c.d}</p><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="cond">${c.c}</span>
    <button class="btn-s ${S.coupon===c.id?'done':''}" onclick="applyCoupon('${c.id}')">${S.coupon===c.id?'✓ Activo':'Usar'}</button></div></div></div>`).join(''):'<p class="empty">No hay cupones con ese filtro.</p>';
  document.querySelectorAll('#v-offers .chip').forEach(b=>b.classList.toggle('on',b.dataset.offer===S.offer));
}
function setOffer(k){S.offer=k;renderCoupons()}
function applyCoupon(id){S.coupon=S.coupon===id?null:id;renderCoupons();toast(S.coupon?'Cupón activado: se aplicará al pagar':'Cupón desactivado')}

/* ---------- restaurante ---------- */
function openRest(id){if(S.rest&&S.rest!==id&&count())S.cart={};S.rest=id;go('rest')}
function R(){return RESTS.find(r=>r.id===S.rest)}
function renderRest(){const r=R();
  const rows=r.items.map((it,i)=>({it,i}));
  if(S.menu==='price') rows.sort((a,b)=>a.it[2]-b.it[2]);
  const shown=S.menu==='drinks'?rows.filter(({it})=>/jugo|limonada|agua|t[eé]|gaseosa/i.test(it[0])):rows;
  const menus=[['popular','Más pedidos'],['price','Menor precio'],['drinks','Bebidas']];
  $('#restBody').innerHTML=`
   <div class="hero" style="background:${r.bg}"><span class="emo">${r.e}</span><button class="back" onclick="back()">${ic('left')}</button><button class="back fav" onclick="toggleFav(this)">${ic('heart')}</button></div>
   <div class="rhead"><h2>${r.n}</h2><p class="sub"><span class="star">${ic('star')}${String(r.r).replace('.',',')}</span>· 1.2k reseñas · Abierto hasta 10:00 p.m.</p>
    <div class="facts" data-note="5"><div class="fact"><b>${r.time}</b><span>minutos</span></div><div class="fact"><b>${r.fee?money(r.fee):'Gratis'}</b><span>envío</span></div><div class="fact"><b>${money(r.avg)}</b><span>precio prom.</span></div></div></div>
   <div class="chips" style="margin:18px -20px 4px">${menus.map(([k,l])=>`<button class="chip ${S.menu===k?'on':''}" onclick="setMenu('${k}')">${l}</button>`).join('')}</div>
   ${shown.length?shown.map(({it,i})=>{const q=S.cart[i]||0;return `
    <div class="item"><div class="t"><h5>${it[0]}</h5><p>${it[1]}</p><span class="pr">${money(it[2])}</span></div>
     <div class="pic" style="background:${r.bg}"><span>${it[3]}</span>
      ${q?`<div class="qty"><button class="m" onclick="qty(${i},-1)">−</button><b>${q}</b><button onclick="qty(${i},1)">+</button></div>`:`<button class="add press" onclick="qty(${i},1)">${ic('plus')}</button>`}
     </div></div>`}).join(''):'<p class="empty">Este local no tiene bebidas en el menú.</p>'}<div style="height:10px"></div>`;
  const t=totals();
  $('#restSticky').innerHTML=count()?`<p class="est">Total con envío y tarifas: <b>${money(t.total)}</b> · sin sorpresas</p>
    <button class="cta" onclick="openCart()"><span class="badge">${count()}</span><span>Ver carrito</span><span>${money(t.total)}</span></button>`
    :`<p class="est">Verás el total real (con envío) antes de pagar</p><button class="cta full" disabled>Agrega productos</button>`;
  const fav=$('#restBody .fav');if(fav&&S.favs&&S.favs[r.id]){fav.classList.add('on');const svg=fav.querySelector('svg');if(svg)svg.style.fill='currentColor'}
  glowNote();
}
function setMenu(k){S.menu=k;if(k==='price')toast('Ordenado de menor a mayor precio');renderRest()}
function toggleFav(btn){const r=R();if(!r)return;S.favs=S.favs||{};S.favs[r.id]=!S.favs[r.id];const on=!!S.favs[r.id];btn.classList.toggle('on',on);const svg=btn.querySelector('svg');if(svg)svg.style.fill=on?'currentColor':'none'}
function qty(i,d){S.cart[i]=Math.max(0,(S.cart[i]||0)+d);if(!S.cart[i])delete S.cart[i];renderRest()}
function count(){return Object.values(S.cart).reduce((a,b)=>a+b,0)}

/* ---------- totales ---------- */
function totals(){const r=R();if(!r)return{sub:0,ship:0,serv:0,disc:0,tip:0,total:0};
  const sub=Object.entries(S.cart).reduce((a,[i,q])=>a+r.items[i][2]*q,0);
  let ship=r.fee,serv=Math.round(sub*.05/100)*100,disc=0,note='';
  const c=COUPONS.find(x=>x.id===S.coupon);
  if(c){const v=c.v;
    if(v.type==='ship'&&sub>=20000){disc=ship;note=c.t}
    if(v.type==='pct'&&sub>=v.min){disc=Math.min(v.max,Math.round(sub*v.p));note=c.t}
    if(v.type==='fix'&&sub>=v.min&&r.cat==='casera'){disc=v.a;note=c.t}}
  const tip=S.tip;return{sub,ship,serv,disc,note,tip,total:sub+ship+serv-disc+tip};}

/* ---------- checkout ---------- */
function openCart(){if(!count()){toast('Tu carrito está vacío');return}go('cart')}
function renderCart(){const r=R(),t=totals(),a=S.addr;
  const cashOpts=[['exact','Exacto'],[50000,'$50.000'],[100000,'$100.000']];
  const ch=typeof S.cashWith==='number'?S.cashWith-t.total:0;
  $('#cartBody').innerHTML=`
   <div class="card" data-note="6"><h4>Entregar en <a onclick="go('addr')">Editar</a></h4>
     <div class="addrc"><span class="pin">${ic('pin')}</span><div><b>${a.a}, ${a.t}, ${a.ap}</b><span>${a.b} · “${a.ref}”</span></div></div></div>
   <div class="card"><h4>${r.n} <a onclick="back()">Agregar más</a></h4>
     ${Object.entries(S.cart).map(([i,q])=>`<div class="ln"><span>${q} × ${r.items[i][0]}</span><b>${money(r.items[i][2]*q)}</b></div>`).join('')}</div>
   <div class="card" data-note="5"><h4>Resumen del pago <a onclick="tab('offers')">${S.coupon?'Cambiar cupón':'Usar cupón'}</a></h4>
     <div class="ln"><span>Productos</span><b>${money(t.sub)}</b></div>
     <div class="ln"><span>Envío<span class="info">${r.time} min · 2,1 km</span></span><b>${t.ship?money(t.ship):'Gratis'}</b></div>
     <div class="ln"><span>Tarifa de servicio<span class="info">5 % del pedido, para mantener la plataforma</span></span><b>${money(t.serv)}</b></div>
     ${t.disc?`<div class="ln disc"><span>Cupón: ${t.note}</span><b>−${money(t.disc)}</b></div>`:S.coupon?`<p class="warn">El cupón activo no aplica a este pedido (revisa el mínimo).</p>`:''}
     <div class="ln"><span>Propina para el repartidor<span class="info">El 100 % es para él</span></span><b>${money(t.tip)}</b></div>
     <div class="tipline" style="margin:6px 0 2px">${[0,2000,3000,5000].map(v=>`<button class="${S.tip===v?'on':''}" onclick="S.tip=${v};renderCart()">${v?money(v):'No'}</button>`).join('')}</div>
     <div class="ln tot"><span>Total a pagar</span><b>${money(t.total)}</b></div></div>
   <div class="card" data-note="8"><h4>Método de pago</h4>
     <div class="pays">${[['cash','cash','Efectivo'],['card','card','Tarjeta'],['nequi','mobile','Nequi']].map(([k,i,l])=>`<button class="pay ${S.pay===k?'on':''}" onclick="S.pay='${k}';renderCart()">${ic(i)}${l}</button>`).join('')}</div>
     ${S.pay==='cash'?`<div class="cash"><p>¿Con cuánto vas a pagar?</p>
       <div class="cashopts">${cashOpts.map(([v,l])=>`<button class="${S.cashWith===v?'on':''}" onclick="setCash(${typeof v==='string'?`'${v}'`:v})">${l}</button>`).join('')}</div>
       <div class="field" style="margin:8px 0 0"><input inputmode="numeric" placeholder="Otro valor, ej: 70000" value="${typeof S.cashWith==='number'&&![50000,100000].includes(S.cashWith)?S.cashWith:''}" onchange="setCash(parseInt(this.value.replace(/\\D/g,''))||null)"></div>
       ${S.cashWith==='exact'?`<div class="change">${ic('check')}Pagarás el valor exacto: ${money(t.total)}</div>`:''}
       ${typeof S.cashWith==='number'?(ch>=0?`<div class="change">${ic('cash')}El repartidor llevará ${money(ch)} de cambio</div>`:`<div class="change bad">El valor es menor al total (${money(t.total)})</div>`):''}
       </div>`:''}
   </div>`;
  const ok=S.pay!=='cash'||S.cashWith==='exact'||(typeof S.cashWith==='number'&&ch>=0);
  $('#cartSticky').innerHTML=`<button class="cta" ${ok?'':'disabled'} onclick="placeOrder()"><span>${ok?'Hacer pedido':'Indica con cuánto pagas'}</span><span>${money(t.total)}</span></button>`;
  glowNote();
}
function setCash(v){S.cashWith=v;renderCart()}
function placeOrder(){
  const r=R();
  const items=Object.entries(S.cart).map(([i,q])=>[q>1?q+' × '+r.items[i][0]:r.items[i][0], r.items[i][2]*q]);
  S.order={rest:r.n,total:totals().total,items};
  S.stage=1;S.cart={};S.cashWith=null;S.stack=['orders','track'];renderNavs();show('track');toast('¡Pedido confirmado! 🎉')}

/* ---------- dirección ---------- */
function grabAddr(){
  const f=$('#fAddr'); if(!f) return;
  S.book[S.place]={a:f.value,t:$('#fTorre').value,ap:$('#fApto').value,b:$('#fBarrio').value,ref:$('#fRef').value};
  S.addr=S.book[S.place];
}
function fillAddr(){
  const a=S.addr;
  $('#fAddr').value=a.a;$('#fTorre').value=a.t;$('#fApto').value=a.ap;$('#fBarrio').value=a.b;$('#fRef').value=a.ref;
  document.querySelectorAll('#v-addr .chip').forEach(b=>b.classList.toggle('on', b.dataset.place===S.place));
}
function setPlace(key){grabAddr();S.place=key;S.addr=S.book[key];fillAddr()}
function saveAddr(){
  grabAddr();
  const prefix={casa:'Casa',oficina:'Oficina',nueva:'Nueva'}[S.place]||'Casa';
  $('#addrLabel').textContent=prefix+' · '+S.addr.a;toast('Dirección guardada con referencias');back()}

/* ---------- seguimiento ---------- */
const STEPS=[['Pedido confirmado','El restaurante recibió tu pedido'],['Preparando','Tu comida se está cocinando'],['En camino','Carlos va hacia tu dirección'],['Entregado','¡Buen provecho!']];
function renderTrack(){
  if(!S.order){S.order={rest:'Arepas La Esquina',total:23500};S.stage=1}
  $('#steps').innerHTML=STEPS.map((s,i)=>`<div class="step ${i<S.stage?'done':i===S.stage?'now':'todo'}"><span class="d">${i<S.stage?ic('check'):''}</span><div><b>${s[0]}</b><span>${s[1]}</span></div></div>`).join('');
  $('#prog').innerHTML=STEPS.map((_,i)=>`<i class="${i<=S.stage?'on':''}"></i>`).join('');
  $('#etaTxt').textContent=S.stage>=3?'¡Llegó!':['12:25 – 12:35','12:25 – 12:35','12:22 – 12:28'][S.stage];
  $('#etaSt').textContent=STEPS[S.stage][0];
  const [x,y]=BIKE[[0,1,3,4][S.stage]];const bk=$('#bike');bk.style.left=(x/390*100)+'%';bk.style.top=(y/300*100)+'%';
  $('#trAddr').textContent=`${S.addr.a}, ${S.addr.t}, ${S.addr.ap}`;$('#trRef').textContent='“'+S.addr.ref+'”';
  $('#quickT').innerHTML=QUICK.map(q=>`<button onclick="quickSend('${q}')">${q}</button>`).join('');
}
function advance(){S.stage=Math.min(3,S.stage+1);renderTrack();if(S.stage===3)toast('Pedido entregado 🙌')}
function renderOrders(){const o=S.order;$('#activeOrderCard').style.display=o&&S.stage<3?'block':'none';if(o){$('#aoName').textContent=o.rest+' · '+money(o.total);$('#aoEta').textContent=STEPS[S.stage][0]}}

/* ---------- chat ---------- */
const QUICK=['Estoy en la portería','Llámame al llegar','Déjalo con el vigilante','Tengo el cambio listo'];
function quickSend(q){go('chat');sendMsg(q)}
function sendMsg(t){const i=$('#chatIn');t=t||i.value.trim();if(!t)return;i.value='';
  const m=$('#msgs');m.insertAdjacentHTML('beforeend',`<div class="msg out">${t.replace(/</g,'&lt;')}</div>`);m.scrollTop=1e5;
  setTimeout(()=>{m.insertAdjacentHTML('beforeend',`<div class="msg in">¡Listo, entendido! 👍 Llego en unos minutos.</div>`);m.scrollTop=1e5},900)}

/* ---------- ayuda ---------- */
const ISSUES=[['missing','🥡','Faltó un producto','Reembolso inmediato'],['charge','💸','Me cobraron mal','Revisamos el cobro'],['late','⏰','El pedido está demorado','Ver estado y compensación'],['cancel','✖️','Quiero cancelar','Antes de que salga el pedido'],['other','💬','Otro problema','Habla con un agente']];
function renderIssues(){$('#issues').innerHTML=ISSUES.map(([k,i,t,s])=>`<button class="issue ${S.issue===k?'on':''}" onclick="S.issue='${k}';renderIssues()"><i>${i}</i><span><b>${t}</b><span>${s}</span></span><span class="rd"></span></button>`).join('');$('#helpCta').disabled=!S.issue}
function missingItems(){
  if(S.order&&S.order.items&&S.order.items.length) return {demo:false,items:S.order.items};
  return {demo:true,items:[['Arepa de huevo',8500],['Arepa mixta',13500],['Jugo de corozo',4500]]};
}
function helpNext(){const is=ISSUES.find(x=>x[0]===S.issue);$('#h2title').textContent=is[2];
  const pack=missingItems();
  $('#help2Body').innerHTML=S.issue==='missing'?`<div class="card"><h4>Selecciona lo que no llegó</h4>
    ${pack.items.map(([n,p],i)=>`<label class="chk"><input type="checkbox" data-price="${p}" ${pack.demo&&i===pack.items.length-1?'checked':''}> ${n}<span class="p">${money(p)}</span></label>`).join('')}</div>
    <div class="field"><label>Comentario (opcional)</label><textarea rows="3" placeholder="Cuéntanos qué pasó"></textarea></div>
    <button class="linkbtn" onclick="attachPhoto(this)">📷 Adjuntar foto</button>`
   :`<div class="field"><label>Describe el problema</label><textarea rows="5" placeholder="Cuéntanos qué pasó con tu pedido"></textarea></div><button class="linkbtn" onclick="attachPhoto(this)">📷 Adjuntar foto o comprobante</button>`;
  $('#h2cta').textContent=S.issue==='missing'?'Solicitar reembolso':'Enviar';go('help2')}
function attachPhoto(btn){
  const on=btn.dataset.on==='1';
  btn.dataset.on=on?'':'1';
  const base=btn.textContent.includes('comprobante')?'📷 Adjuntar foto o comprobante':'📷 Adjuntar foto';
  btn.textContent=on?base:'📷 Foto adjunta';
  toast(on?'Foto quitada':'Foto adjunta');
}
function helpSubmit(){const m=S.issue==='missing';
  const picked=m?[...document.querySelectorAll('#help2Body input[type=checkbox]:checked')]:[];
  if(m&&!picked.length){toast('Marca los productos que no llegaron');return}
  const sum=picked.reduce((a,b)=>a+Number(b.dataset.price||0),0);
  $('#h3t').textContent=m?'Reembolso aprobado':'Recibimos tu caso';
  $('#h3p').textContent=m?`Te devolvimos ${money(sum)} a tu método de pago. Lo verás en minutos (si pagaste en efectivo, queda como saldo en la app).`:'Un agente te responderá en menos de 10 minutos por chat. Te avisaremos con una notificación.';
  const cols=['#FF6A1A','#FFB020','#14965A','#3667F6','#FF9147'];
  $('#conf').innerHTML=Array.from({length:22},(_,i)=>`<i style="left:${8+Math.random()*84}%;top:${Math.random()*40}px;background:${cols[i%5]};animation-delay:${Math.random()*.4}s"></i>`).join('');
  go('help3')}

/* ---------- panel y anotaciones ---------- */
function markPanel(id){
  const specific=S.mejora!=null && MEJORAS[S.mejora][2]===id;
  if(S.mejora!=null && !specific) S.mejora=null;
  document.querySelectorAll('.mej').forEach((b,i)=>b.classList.toggle('act', specific?i===S.mejora:MEJORAS[i][2]===id));
  glowNote();
}
function glowNote(){
  const n=S.mejora!=null && MEJORAS[S.mejora][2]===S.view ? String(S.mejora+1) : null;
  document.querySelectorAll('[data-note]').forEach(e=>e.classList.toggle('glow', !!n && e.dataset.note===n));
}
$('#mejoras').innerHTML=MEJORAS.map(([t,d],i)=>`<button class="mej" onclick="jump(${i})"><span class="n">${i+1}</span><span><b>${t}</b></span><span class="d">${d}</span></button>`).join('');
function jump(i){
  S.mejora=i;
  const s=MEJORAS[i][2];
  if(s==='cart'){if(!count()){S.rest='arepas';S.cart={0:1,2:1}}S.stack=['home','rest','cart'];show('cart')}
  else if(s==='track'){S.stack=['orders','track'];show('track')}
  else if(s==='addr'){S.stack=['home','addr'];show('addr')}
  else tab(s);
  renderNavs();
  glowNote();
  const el=document.querySelector('.view.on [data-note="'+(i+1)+'"]');if(el)el.scrollIntoView({block:'center',behavior:'smooth'});
}
$('#sw').onclick=e=>{e.currentTarget.classList.toggle('on');$('#scr').classList.toggle('notes')};
$('#logoI').innerHTML=ic('food');
$('#quickC').innerHTML=QUICK.map(q=>`<button onclick="sendMsg('${q}')">${q}</button>`).join('');
$('#mapA').outerHTML=mapSVG(false);$('#mapT').outerHTML=mapSVG(true);

renderNavs();show('home');
