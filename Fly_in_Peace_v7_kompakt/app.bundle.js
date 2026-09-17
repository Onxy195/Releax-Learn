/* ===== themes.js ===== */
const THEMES = [
  {
    "id": "aurora",
    "name": "Lila",
    "price": 0,
    "desc": "Das ursprüngliche, schlichte Lila. Ohne Motive, ganz in Ruhe.",
    "dot": "#c79bff",
    "bg": "#10091d",
    "deep": "#5b21b6",
    "swatch": "url('assets/scenes/aurora.svg') center / cover",
    "asset": "assets/scenes/aurora.svg"
  },
  {
    "id": "daylight",
    "name": "Weiß",
    "price": 0,
    "desc": "Helle Flächen, klare Typografie. Ganz ohne Landschaft.",
    "dot": "#546473",
    "bg": "#fafafa",
    "deep": "#85919d",
    "swatch": "url('assets/scenes/daylight.svg') center / cover",
    "asset": "assets/scenes/daylight.svg"
  },
  {
    "id": "ink",
    "name": "Schwarz",
    "price": 0,
    "desc": "Reines Schwarz mit dezenten grauen Bedienelementen.",
    "dot": "#d3d3d3",
    "bg": "#000000",
    "deep": "#444444",
    "swatch": "url('assets/scenes/ink.svg') center / cover",
    "asset": "assets/scenes/ink.svg"
  },
  {
    "id": "violet",
    "name": "Abendhügel",
    "price": 300,
    "desc": "Violette Hügel unter einem stillen Mond.",
    "dot": "#be9af5",
    "bg": "#171125",
    "deep": "#715398",
    "swatch": "url('assets/scenes/violet.svg') center / cover",
    "asset": "assets/scenes/violet.svg"
  },
  {
    "id": "nordlicht",
    "name": "Wolken",
    "price": 450,
    "desc": "Ein weiter Himmel über grünem Gras.",
    "dot": "#b8e6e4",
    "bg": "#152a35",
    "deep": "#426a74",
    "asset": "assets/backgrounds/wolken-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/wolken-klar.png') center / cover"
  },
  {
    "id": "waldweg",
    "name": "Waldweg",
    "price": 550,
    "desc": "Ein schattiger Wald mit kleinen Lichtpunkten.",
    "dot": "#b2c87b",
    "bg": "#14282b",
    "deep": "#3c6661",
    "asset": "assets/backgrounds/waldweg-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/waldweg-klar.png') center / cover"
  },
  {
    "id": "lagoon",
    "name": "Bergwiese",
    "price": 600,
    "desc": "Blumen im Sonnenlicht, dahinter die Berge.",
    "dot": "#c6d59b",
    "bg": "#1b2c29",
    "deep": "#5c7256",
    "asset": "assets/backgrounds/bergwiese-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/bergwiese-klar.png') center / cover"
  },
  {
    "id": "sakura",
    "name": "Lichtung",
    "price": 700,
    "desc": "Ein heller Platz zwischen alten Bäumen.",
    "dot": "#c5d992",
    "bg": "#172820",
    "deep": "#4f6b45",
    "asset": "assets/backgrounds/lichtung-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/lichtung-klar.png') center / cover"
  },
  {
    "id": "eclipse",
    "name": "Am Meer",
    "price": 700,
    "desc": "Ein kleines Ananashaus unter Wasser.",
    "dot": "#c9dba0",
    "bg": "#15353b",
    "deep": "#4c7b70",
    "asset": "assets/backgrounds/am-meer-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/am-meer-klar.png') center / cover"
  },
  {
    "id": "pixel",
    "name": "Sommerwiese",
    "price": 800,
    "desc": "Grüne Hügel und ein blauer Sommerhimmel.",
    "dot": "#b9dcd1",
    "bg": "#18343b",
    "deep": "#537b71",
    "asset": "assets/backgrounds/sommerwiese-klar.png",
    "animated": false,
    "swatch": "url('assets/backgrounds/sommerwiese-klar.png') center / cover"
  },
  {
    "id": "hoehlenbach",
    "name": "Höhlenbach",
    "price": 850,
    "desc": "Sonnenlicht und fließendes Wasser zwischen den Felsen.",
    "dot": "#c6dea2",
    "bg": "#172c2a",
    "deep": "#516e52",
    "animated": true,
    "asset": "assets/backgrounds/hoehlenbach.gif",
    "swatch": "url('assets/backgrounds/hoehlenbach.gif') center / cover"
  },
  {
    "id": "laterne",
    "name": "Abendlicht",
    "price": 850,
    "desc": "Ein warmes Licht im stillen Feld.",
    "dot": "#e6c47d",
    "bg": "#111d2d",
    "deep": "#3f536e",
    "asset": "assets/backgrounds/abendlicht.png",
    "swatch": "url('assets/backgrounds/abendlicht.png') center / cover"
  },
  {
    "id": "teich",
    "name": "Am Teich",
    "price": 900,
    "desc": "Ein paar Fische zwischen Seerosen.",
    "dot": "#a9d8bd",
    "bg": "#08272d",
    "deep": "#326658",
    "animated": true,
    "asset": "assets/backgrounds/teich.gif",
    "swatch": "url('assets/backgrounds/teich.gif') center / cover"
  },
  {
    "id": "arcade",
    "name": "Am Wasserfall",
    "price": 950,
    "desc": "Wasser, das über die Felsen fließt. Bewegter Hintergrund.",
    "dot": "#b0d9cc",
    "bg": "#1b303c",
    "deep": "#527675",
    "asset": "assets/backgrounds/wasserfall.gif",
    "animated": true,
    "swatch": "url('assets/backgrounds/wasserfall.gif') center / cover"
  },
  {
    "id": "abendrast",
    "name": "Abendrast",
    "price": 1000,
    "desc": "Eine Laterne auf der alten Steinbrücke.",
    "dot": "#e0acce",
    "bg": "#21152f",
    "deep": "#6c416e",
    "animated": false,
    "asset": "assets/backgrounds/abendrast.png",
    "swatch": "url('assets/backgrounds/abendrast.png') center / cover"
  }
];

/* ===== app.js ===== */
/* Fly in Peace — Lernsessions als Flüge.
   Globus und Flugkarte: mitgelieferte Natural-Earth-Daten. Keine Kartenserver. */

/* ─────────────── Flughäfen ─────────────── */

const AIRPORTS = [
  ["BER","Berlin",52.37,13.51],["MUC","München",48.35,11.79],["FRA","Frankfurt",50.03,8.56],
  ["HAM","Hamburg",53.63,9.99],["CDG","Paris",49.01,2.55],["LHR","London",51.47,-0.46],
  ["DUB","Dublin",53.43,-6.25],["EDI","Edinburgh",55.95,-3.37],["AMS","Amsterdam",52.31,4.76],
  ["BRU","Brüssel",50.90,4.48],["ZRH","Zürich",47.46,8.55],["VIE","Wien",48.11,16.57],
  ["PRG","Prag",50.10,14.26],["WAW","Warschau",52.17,20.97],["BUD","Budapest",47.44,19.26],
  ["CPH","Kopenhagen",55.62,12.66],["OSL","Oslo",60.19,11.10],["ARN","Stockholm",59.65,17.92],
  ["HEL","Helsinki",60.32,24.96],["RVN","Rovaniemi",66.56,25.83],["TLL","Tallinn",59.41,24.83],
  ["RIX","Riga",56.92,23.97],["VNO","Vilnius",54.64,25.29],["KEF","Reykjavík",63.99,-22.62],
  ["LIS","Lissabon",38.77,-9.13],["MAD","Madrid",40.47,-3.56],["BCN","Barcelona",41.30,2.08],
  ["FCO","Rom",41.80,12.25],["MXP","Mailand",45.63,8.72],["ATH","Athen",37.94,23.94],
  ["OTP","Bukarest",44.57,26.10],["SOF","Sofia",42.69,23.41],["IST","Istanbul",41.28,28.75],
  ["KBP","Kiew",50.34,30.89],["SVO","Moskau",55.97,37.41],["LED","St. Petersburg",59.80,30.26],
  ["TLV","Tel Aviv",32.01,34.89],["CAI","Kairo",30.11,31.41],["CMN","Casablanca",33.37,-7.59],
  ["RAK","Marrakesch",31.61,-8.04],["LOS","Lagos",6.58,3.32],["ADD","Addis Abeba",8.98,38.80],
  ["NBO","Nairobi",-1.32,36.93],["JNB","Johannesburg",-26.13,28.24],["CPT","Kapstadt",-33.97,18.60],
  ["DOH","Doha",25.27,51.61],["DXB","Dubai",25.25,55.36],["IKA","Teheran",35.42,51.15],
  ["KHI","Karachi",24.91,67.16],["DEL","Delhi",28.56,77.10],["BOM","Mumbai",19.09,72.87],
  ["KTM","Kathmandu",27.70,85.36],["CMB","Colombo",7.18,79.88],["BKK","Bangkok",13.69,100.75],
  ["SIN","Singapur",1.36,103.99],["CGK","Jakarta",-6.13,106.66],["MNL","Manila",14.51,121.02],
  ["HKG","Hongkong",22.31,113.91],["PVG","Shanghai",31.14,121.81],["PEK","Peking",40.08,116.58],
  ["TPE","Taipeh",25.08,121.23],["ICN","Seoul",37.46,126.44],["HND","Tokio",35.55,139.78],
  ["CTS","Sapporo",42.78,141.69],["PER","Perth",-31.94,115.97],["MEL","Melbourne",-37.67,144.84],
  ["SYD","Sydney",-33.94,151.18],["AKL","Auckland",-37.01,174.79],["HNL","Honolulu",21.32,-157.92],
  ["ANC","Anchorage",61.17,-149.99],["YVR","Vancouver",49.19,-123.18],["SEA","Seattle",47.45,-122.31],
  ["SFO","San Francisco",37.62,-122.38],["LAX","Los Angeles",33.94,-118.41],["DEN","Denver",39.86,-104.67],
  ["ORD","Chicago",41.98,-87.90],["YYZ","Toronto",43.68,-79.63],["JFK","New York",40.64,-73.78],
  ["MIA","Miami",25.80,-80.29],["HAV","Havanna",22.99,-82.41],["MEX","Mexiko-Stadt",19.44,-99.07],
  ["BOG","Bogotá",4.70,-74.15],["LIM","Lima",-12.02,-77.11],["SCL","Santiago",-33.39,-70.79],
  ["EZE","Buenos Aires",-34.82,-58.54],["GIG","Rio de Janeiro",-22.81,-43.25],["GRU","São Paulo",-23.43,-46.47]
].map(([code,city,lat,lon]) => ({ code, city, lat, lon }));

/* Orte für die Anzeige „fliegt gerade über …" */
const WAYPOINT_CITIES = AIRPORTS.concat([
  ["Leipzig",51.34,12.37],["Nürnberg",49.45,11.08],["Salzburg",47.81,13.04],["Innsbruck",47.27,11.39],
  ["Straßburg",48.58,7.75],["Lyon",45.76,4.84],["Turin",45.07,7.69],["Florenz",43.77,11.26],
  ["Neapel",40.85,14.27],["Palermo",38.12,13.36],["Marseille",43.30,5.37],["Toulouse",43.60,1.44],
  ["Bilbao",43.26,-2.93],["Porto",41.15,-8.61],["Sevilla",37.39,-5.98],["Valencia",39.47,-0.38],
  ["Bremen",53.08,8.81],["Hannover",52.38,9.73],["Köln",50.94,6.96],["Dresden",51.05,13.74],
  ["Breslau",51.11,17.04],["Krakau",50.06,19.94],["Danzig",54.35,18.65],["Minsk",53.90,27.57],
  ["Göteborg",57.71,11.97],["Bergen",60.39,5.32],["Trondheim",63.43,10.40],["Tromsø",69.65,18.96],
  ["Turku",60.45,22.27],["Oulu",65.01,25.47],["Tampere",61.50,23.79],["Murmansk",68.97,33.09],
  ["Odessa",46.48,30.73],["Belgrad",44.79,20.45],["Zagreb",45.81,15.98],["Sarajevo",43.86,18.41],
  ["Thessaloniki",40.64,22.94],["Ankara",39.93,32.86],["Tiflis",41.72,44.79],["Baku",40.41,49.87],
  ["Almaty",43.24,76.89],["Taschkent",41.30,69.24],["Nowosibirsk",55.01,82.93],["Irkutsk",52.29,104.30],
  ["Ulaanbaatar",47.89,106.91],["Chengdu",30.57,104.07],["Xi'an",34.34,108.94],["Hanoi",21.03,105.85],
  ["Boston",42.36,-71.06],["Philadelphia",39.95,-75.17],["Atlanta",33.75,-84.39],["Dallas",32.78,-96.80],
  ["Phoenix",33.45,-112.07],["Salt Lake City",40.76,-111.89],["Calgary",51.05,-114.07],["Winnipeg",49.90,-97.14],
  ["Halifax",44.65,-63.58],["Reykjanes",63.85,-22.45],["Nuuk",64.18,-51.72],["Manaus",-3.12,-60.02],
  ["Brasília",-15.79,-47.88],["Montevideo",-34.90,-56.16],["La Paz",-16.49,-68.15],["Quito",-0.18,-78.47],
  ["Dakar",14.72,-17.47],["Abuja",9.06,7.50],["Kinshasa",-4.44,15.27],["Luanda",-8.84,13.23],
  ["Daressalam",-6.79,39.21],["Antananarivo",-18.88,47.51],["Windhoek",-22.56,17.08],["Khartum",15.50,32.56],
  ["Dschidda",21.49,39.19],["Riad",24.71,46.68],["Maskat",23.59,58.41],["Lahore",31.55,74.34],
  ["Chennai",13.08,80.27],["Dhaka",23.81,90.41],["Yangon",16.87,96.20],["Kuala Lumpur",3.14,101.69],
  ["Darwin",-12.46,130.84],["Brisbane",-27.47,153.03],["Adelaide",-34.93,138.60],["Wellington",-41.29,174.78]
].map(([city,lat,lon]) => ({ code:"", city, lat, lon })));

/* ─────────────── Themes ─────────────── */

/* ─────────────── Speicher & Zustand ─────────────── */

const store = {
  get(k, f){ try{ const v = localStorage.getItem("rl_"+k); return v===null?f:JSON.parse(v);}catch{return f;} },
  set(k, v){ try{ localStorage.setItem("rl_"+k, JSON.stringify(v)); }catch{} },
  del(k){ try{ localStorage.removeItem("rl_"+k); }catch{} }
};

let credits = store.get("credits", 0);
// Einmaliges Testguthaben; vorhandenes Guthaben bleibt erhalten.
if(!store.get("testCredits5000Granted", false)){
  credits += 5000;
  store.set("credits", credits);
  store.set("testCredits5000Granted", true);
}
let ownedThemes = store.get("themes", ["aurora"]);
let themeId = store.get("theme", "aurora");
// One migration path for both original releases and the previous Studio.
const hadStudioV3=store.get('studioV3Migrated',false);
if(!hadStudioV3){
  const previous=store.get('studioV2Migrated',false)
    ? {aurora:0,daylight:150,nordlicht:300,lagoon:450,sakura:500,blocks:600,pixel:700,arcade:800,synth:950,eclipse:1200}
    : {aurora:0,daylight:100,ink:120,starlit:250,nordlicht:320,sunrise:400,nebula:500,lagoon:600,sakura:700,dune:850,glacier:1000,synth:1250,eclipse:1600};
  let refund=0;
  for(const id of new Set(ownedThemes)){
    const design=THEMES.find(t=>t.id===id);
    refund+=Math.max(0,(previous[id]||0)-(design?design.price:0));
  }
  credits+=refund;ownedThemes=ownedThemes.filter(id=>THEMES.some(t=>t.id===id));
  for(const id of ['aurora','daylight','ink'])if(!ownedThemes.includes(id))ownedThemes.push(id);
  if(!THEMES.some(t=>t.id===themeId))themeId='aurora';
  store.set('credits',credits);store.set('themes',ownedThemes);store.set('theme',themeId);
  store.set('studioV3Migrated',true);
  if(refund)setTimeout(()=>toast(refund+' Credits für die neue Kollektion zurückerstattet.'),600);
}
// Refund the actual price reduction once, without duplicating older migrations.
if(!store.get('studioV5Migrated',false)){
  if(hadStudioV3&&ownedThemes.includes('eclipse')){
    credits+=500;store.set('credits',credits);
    setTimeout(()=>toast('500 Credits für die Preissenkung von „Am Meer“ zurückerstattet.'),650);
  }
  store.set('studioV5Migrated',true);
}
// Retire Drinnen and refund existing purchases exactly once.
if(ownedThemes.includes('zuhause')){
  credits+=900;ownedThemes=ownedThemes.filter(id=>id!=='zuhause');
  store.set('credits',credits);store.set('themes',ownedThemes);
}
if(themeId==='zuhause'){themeId='aurora';store.set('theme',themeId);}
let history = store.get("history", []);
let soundOn = store.get("sound", true);

let from = null, to = null, armed = "from";
let seat = null;
let flight = null, timer = null;
let flightView = store.get("flightView", "map")==="clock"?"clock":"map";

const $ = (id) => document.getElementById(id);
const rad = (d) => d * Math.PI / 180;

/* ─────────────── Geo ─────────────── */

function toVec(lon, lat){ const p=rad(lat), l=rad(lon);
  return [Math.cos(p)*Math.cos(l), Math.cos(p)*Math.sin(l), Math.sin(p)]; }
function toLonLat(v){
  return [Math.atan2(v[1],v[0])*180/Math.PI, Math.asin(Math.max(-1,Math.min(1,v[2])))*180/Math.PI]; }
function distanceKm(a,b){
  const d = Math.acos(Math.max(-1,Math.min(1,
    Math.sin(rad(a.lat))*Math.sin(rad(b.lat)) +
    Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.cos(rad(b.lon-a.lon)))));
  return d*6371; }
function slerp(a,b,t){
  const av=toVec(a.lon,a.lat), bv=toVec(b.lon,b.lat);
  let dot=Math.max(-1,Math.min(1, av[0]*bv[0]+av[1]*bv[1]+av[2]*bv[2]));
  const o=Math.acos(dot);
  if(o<1e-6) return toLonLat(av);
  const s1=Math.sin((1-t)*o)/Math.sin(o), s2=Math.sin(t*o)/Math.sin(o);
  return toLonLat([av[0]*s1+bv[0]*s2, av[1]*s1+bv[1]*s2, av[2]*s1+bv[2]*s2]); }
function durationFor(km){ return Math.max(20, Math.round((10 + km/850*60)/5)*5); }
function creditsFor(min, win){ return Math.round(min*(200/60)*(win?1.1:1)); }
function clock(sec){ sec=Math.max(0,Math.round(sec));
  const h=Math.floor(sec/3600), m=Math.floor(sec%3600/60), s=sec%60;
  return h ? `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`
           : `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }
function humanMin(min){ const h=Math.floor(min/60), m=min%60;
  return h ? (m ? `${h} h ${m} min` : `${h} h`) : `${m} min`; }

/* ─────────────── Oberfläche ─────────────── */

function switchView(id){
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("is-active", v.id===id));
  window.scrollTo(0,0);
  if(id==="view-flight"){ ensureFlightMap(); requestAnimationFrame(()=>{ if(flightMap)flightMap.invalidateSize(); renderFlight(); }); }
  if(id==="view-map") setTimeout(drawGlobe, 40);
  if(id==="view-flight")setFlightView(flightView);
}
let pageTransition;
function show(id){
  if(document.querySelector('.view.is-active')?.id===id)return;
  pageTransition?.skipTransition();
  if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    pageTransition=document.startViewTransition(()=>switchView(id));
  }else{
    switchView(id);
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches)$(id).animate([{opacity:0,transform:'translateY(18px) scale(.985)'},{opacity:1,transform:'none'}],{duration:700,easing:'cubic-bezier(.22,1,.36,1)'});
  }
}
const topbarObserver=new ResizeObserver(entries=>document.documentElement.style.setProperty('--topbar-height',entries[0].target.getBoundingClientRect().height+'px'));
topbarObserver.observe(document.querySelector('.topbar'));
const blurMenu=document.querySelector('.blur-settings');
function setBackgroundBlur(value){const n=Math.max(0,Math.min(24,Number(value)||0));document.documentElement.style.setProperty('--background-blur',n+'px');$('backgroundBlur').value=n;$('blurValue').textContent=n+' px';store.set('backgroundBlur',n);}
setBackgroundBlur(store.get('backgroundBlur',0));
$('backgroundBlur').addEventListener('input',e=>setBackgroundBlur(e.target.value));
document.addEventListener('pointerdown',e=>{if(!blurMenu.contains(e.target))blurMenu.open=false;});
document.addEventListener('focusin',e=>{if(!blurMenu.contains(e.target))blurMenu.open=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&blurMenu.open){blurMenu.open=false;blurMenu.querySelector('summary').focus();}});
function toast(text){
  const el=$("toast"); el.textContent=text; el.classList.add("is-on");
  clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("is-on"), 2600);
}
function paintCredits(){ $("creditsValue").textContent = credits.toLocaleString("de-DE"); }
function applyTheme(id){
  themeId = id;
  document.documentElement.dataset.theme = id;
  store.set("theme", id);
  refreshThemeColors();
  updateFlightColors();
  drawGlobe();
}

/* ─────────────── Kabinenklang ─────────────── */

const audioPrefs=Object.assign({enabled:true,master:45,click:35,cabin:soundOn?35:0},store.get("audioMix",{}));
delete audioPrefs.rain;delete audioPrefs.thunder;store.set('audioMix',audioPrefs);
const ambience=(()=>{
  let ctx,master;const channels={};
  const FADE=1.1; // Sekunden für weiche Übergänge statt abrupter Sprünge
  function buffer(){
    // Kabinenrauschen: synthetisches, seamless-loopendes Rosa-/Braunrauschen.
    const length=ctx.sampleRate*19,buf=ctx.createBuffer(1,length,ctx.sampleRate),data=buf.getChannelData(0);
    let brown=0;
    for(let i=0;i<length;i++){
      const white=Math.random()*2-1;brown=(brown+.025*white)/1.025;
      data[i]=brown*3;
    }
    // A seam-free loop avoids clicks between buffers.
    for(let i=0;i<ctx.sampleRate*.04;i++){const f=i/(ctx.sampleRate*.04);data[i]*=f;data[length-1-i]*=f;}
    return buf;
  }
  function ensure(){
    if(ctx)return;
    ctx=new (window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=0;
    const limiter=ctx.createDynamicsCompressor();
    limiter.threshold.value=-6;limiter.knee.value=6;limiter.ratio.value=12;limiter.attack.value=.003;limiter.release.value=.25;
    master.connect(limiter).connect(ctx.destination);
    const src=ctx.createBufferSource(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
    src.buffer=buffer();src.loop=true;filter.type='lowpass';filter.frequency.value=420;
    gain.gain.value=0;src.connect(filter).connect(gain).connect(master);src.start();channels.cabin=gain;
    sync();
  }
  const CHANNEL_HEADROOM={cabin:.55};
  function sync(){
    if(!ctx)return;
    const now=ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value,now);
    master.gain.linearRampToValueAtTime(audioPrefs.enabled?audioPrefs.master/100:0,now+FADE);
    for(const [kind,gain] of Object.entries(channels)){
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value,now);
      gain.gain.linearRampToValueAtTime(audioPrefs[kind]/100*CHANNEL_HEADROOM[kind],now+FADE);
    }
  }
  function wake(){ensure();if(ctx.state==='suspended')ctx.resume().catch(()=>{});sync();}
  function blob(){
    if(!audioPrefs.enabled||!audioPrefs.click||!audioPrefs.master)return;
    wake();const osc=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;
    osc.type='sine';osc.frequency.setValueAtTime(470,now);osc.frequency.exponentialRampToValueAtTime(180,now+.11);
    gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(audioPrefs.click/100*.20,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+.14);
    osc.connect(gain).connect(master);osc.start(now);osc.stop(now+.15);osc.onended=()=>{osc.disconnect();gain.disconnect();};
  }
  return {wake,sync,blob};
})();
function paintSound(){
  soundOn=audioPrefs.cabin>0;
  $("audioEnabled").checked=audioPrefs.enabled;
  for(const key of ['master','click','cabin']){$('volume-'+key).value=audioPrefs[key];$('value-'+key).textContent=audioPrefs[key]+' %';}
}
const soundMenu=document.querySelector('.sound-settings');
document.addEventListener('pointerdown',e=>{if(!soundMenu.contains(e.target))soundMenu.open=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&soundMenu.open){soundMenu.open=false;soundMenu.querySelector('summary').focus();}});
document.addEventListener('focusin',e=>{if(!soundMenu.contains(e.target))soundMenu.open=false;});
function saveAudio(){store.set('audioMix',audioPrefs);store.set('sound',audioPrefs.cabin>0);ambience.sync();paintSound();}
$("audioEnabled").addEventListener('change',e=>{audioPrefs.enabled=e.target.checked;ambience.wake();saveAudio();});
for(const key of ['master','click','cabin'])$('volume-'+key).addEventListener('input',e=>{audioPrefs[key]=Number(e.target.value);ambience.wake();saveAudio();});
document.addEventListener('click',e=>{
  // Labels forward a second click to their input; play only that click.
  if(e.target.closest('label') && e.target.tagName!=='INPUT')return;
  ambience.blob();
});
document.addEventListener('pointerdown',()=>{if(audioPrefs.enabled)ambience.wake();},{once:true});
document.addEventListener('keydown',()=>{if(audioPrefs.enabled)ambience.wake();},{once:true});



/* ─────────────── Globus ─────────────── */

const globe = $("globe");
const gx = globe.getContext("2d");
let rotation = [-15, -20], zoom = 1, spin = true, landFeature = null, borderFeature = null;
let targetZoom=1, lastGlobeFrame=0;
let projection = null, geoPath = null, dpr = 1, gsize = 600;
const graticule10 = window.d3 ? d3.geoGraticule10() : null;

// Theme-Farben werden nur beim Start und bei Theme-Wechsel gelesen,
// nicht mehr in jedem einzelnen Frame — getComputedStyle ist teuer.
let themeColors = {};
function refreshThemeColors(){
  themeColors = {
    oceanA: css("--ocean-a"), oceanB: css("--ocean-b"), oceanC: css("--ocean-c"),
    land: css("--land"), landLine: css("--land-line"),
    accentSoft: css("--accent-soft"), warm: css("--warm"), text: css("--text")
  };
}

const ROUGH_LAND = [
  [[-168,65],[-140,70],[-110,68],[-95,72],[-80,63],[-56,52],[-70,42],[-81,25],[-97,26],[-115,30],[-124,40],[-130,55],[-165,60]],
  [[-81,8],[-60,10],[-35,-5],[-48,-25],[-65,-50],[-75,-45],[-70,-18]],
  [[-17,15],[10,37],[32,31],[51,12],[40,-15],[20,-35],[12,-6],[-5,5]],
  [[-10,36],[8,54],[28,60],[30,70],[60,70],[95,78],[140,72],[179,66],[140,50],[122,30],[100,5],[80,8],[57,25],[35,36],[14,38]],
  [[113,-22],[130,-12],[146,-19],[150,-38],[130,-32],[115,-34]]
];

function setupGlobe(){
  const rect = globe.getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio||1, 1.5);
  gsize = rect.width || 600;
  globe.width = Math.round(gsize*dpr);
  globe.height = Math.round(gsize*dpr);
  if(window.d3){
    projection = d3.geoOrthographic()
      .translate([gsize/2, gsize/2])
      .clipAngle(90);
    geoPath = d3.geoPath(projection, gx);
  }
}

function loadWorld(){
  const topo=window.WORLD_DATA;
  if(topo && window.topojson){landFeature=topojson.feature(topo,topo.objects.land);borderFeature=topojson.mesh(topo,topo.objects.countries,(a,b)=>a!==b);}
}

function css(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

let hitZones = [];
function drawGlobe(){
  if(!globe.getBoundingClientRect().width) return;
  if(!projection || Math.abs(globe.width/dpr - globe.getBoundingClientRect().width) > 2) setupGlobe();

  const R = gsize*0.42*zoom;
  gx.setTransform(dpr,0,0,dpr,0,0);
  gx.clearRect(0,0,gsize,gsize);
  const focus=Math.min(1,Math.max(0,(zoom-1)/1.2));
  const cx=gsize/2-gsize*.10*focus, cy=gsize/2;

  const halo = gx.createRadialGradient(cx,cy,R*.99,cx,cy,R*1.04);
  halo.addColorStop(0, "rgba(168,85,247,.09)"); halo.addColorStop(1,"rgba(168,85,247,0)");
  gx.fillStyle = halo; gx.beginPath(); gx.arc(cx,cy,R*1.04,0,Math.PI*2); gx.fill();

  const sea = gx.createRadialGradient(cx-R*.35, cy-R*.4, R*.1, cx, cy, R);
  sea.addColorStop(0, themeColors.oceanA); sea.addColorStop(.6, themeColors.oceanB); sea.addColorStop(1, themeColors.oceanC);
  gx.beginPath(); gx.arc(cx,cy,R,0,Math.PI*2); gx.fillStyle=sea; gx.fill();

  if(projection){
    projection.scale(R).rotate(rotation).translate([cx,cy]);

    if(graticule10){
      gx.beginPath(); geoPath(graticule10);
      gx.strokeStyle = "rgba(160,160,200,.14)"; gx.lineWidth = 1; gx.stroke();
    }

    if(landFeature){
      gx.beginPath(); geoPath(landFeature);
      gx.fillStyle = themeColors.land; gx.fill();
      gx.strokeStyle = themeColors.landLine; gx.lineWidth = .9; gx.stroke();
      if(borderFeature && zoom > 1.25){
        gx.beginPath(); geoPath(borderFeature);
        gx.strokeStyle = "rgba(180,180,210,.30)"; gx.lineWidth = .6; gx.stroke();
      }
    } else {
      gx.fillStyle = themeColors.land; gx.strokeStyle = themeColors.landLine; gx.lineWidth = 1;
      ROUGH_LAND.forEach(poly => {
        gx.beginPath(); geoPath({ type:"Polygon", coordinates:[poly.concat([poly[0]])] });
        gx.fill(); gx.stroke();
      });
    }

    if(from && to){
      gx.beginPath();
      geoPath({ type:"LineString", coordinates:[[from.lon,from.lat],[to.lon,to.lat]] });
      gx.strokeStyle = themeColors.accentSoft; gx.lineWidth = 2; gx.setLineDash([5,6]); gx.stroke(); gx.setLineDash([]);
    }
  }

  gx.beginPath(); gx.arc(cx,cy,R,0,Math.PI*2);
  gx.strokeStyle = "rgba(180,160,220,.35)"; gx.lineWidth = 1.2; gx.stroke();

  hitZones = [];
  const center = [-rotation[0], -rotation[1]];
  AIRPORTS.forEach(a => {
    const visible = !projection || (window.d3 && d3.geoDistance([a.lon,a.lat], center) < Math.PI/2 - 0.02);
    if(!visible) return;
    const p = projection ? projection([a.lon,a.lat]) : null;
    if(!p) return;
    const picked = (from&&a.code===from.code) || (to&&a.code===to.code);
    hitZones.push({ airport:a, x:p[0], y:p[1] });
    if(picked){
      gx.fillStyle = "rgba(199,155,255,.25)";
      gx.beginPath(); gx.arc(p[0],p[1],13,0,Math.PI*2); gx.fill();
    }
    gx.fillStyle = picked ? themeColors.accentSoft : themeColors.warm;
    gx.beginPath(); gx.arc(p[0],p[1], picked?5:2.8, 0, Math.PI*2); gx.fill();
    if(picked || zoom > 1.5){
      gx.font = `${picked?600:400} 11px -apple-system, "Segoe UI", sans-serif`;
      gx.fillStyle = picked ? themeColors.text : "rgba(160,150,185,.9)";
      gx.fillText(zoom>2.2 ? a.city : a.code, p[0]+8, p[1]+4);
    }
  });
}

function loopGlobe(now=0){
  const dt=Math.min(64,now-lastGlobeFrame||16);lastGlobeFrame=now;
  const easing=window.matchMedia("(prefers-reduced-motion: reduce)").matches?1:1-Math.exp(-dt/150);
  zoom+=(targetZoom-zoom)*easing;
  if(spin && $("view-map").classList.contains("is-active")){
    rotation[0] = (rotation[0] + 0.05 + 180) % 360 - 180;
  }
  if($("view-map").classList.contains("is-active")) drawGlobe();
  requestAnimationFrame(loopGlobe);
}

let drag=null;
globe.addEventListener("pointerdown", e => {
  drag={x:e.clientX,y:e.clientY,moved:0}; spin=false; globe.setPointerCapture(e.pointerId);
});
globe.addEventListener("pointermove", e => {
  if(!drag) return;
  const dx=e.clientX-drag.x, dy=e.clientY-drag.y;
  drag.moved += Math.abs(dx)+Math.abs(dy);
  const k = 0.32/zoom;
  rotation[0] = (rotation[0] + dx*k*1.1 + 540)%360 - 180;
  rotation[1] = Math.max(-85, Math.min(85, rotation[1] - dy*k));
  drag.x=e.clientX; drag.y=e.clientY;
});
globe.addEventListener("pointerup", e => {
  const wasDrag = drag && drag.moved>6; drag=null;
  if(wasDrag) return;
  const r = globe.getBoundingClientRect();
  const px=e.clientX-r.left, py=e.clientY-r.top;
  let best=null, bestD = 22;
  hitZones.forEach(z => { const d=Math.hypot(z.x-px, z.y-py); if(d<bestD){bestD=d; best=z.airport;} });
  if(best) chooseAirport(best);
});
globe.addEventListener("pointercancel", ()=>{ drag=null; });
globe.addEventListener("wheel", e => {
  e.preventDefault(); spin=false;
  targetZoom = Math.max(0.8, Math.min(6, targetZoom * (e.deltaY < 0 ? 1.12 : 0.89)));
}, { passive:false });
$("globeIn").addEventListener("click", ()=>{ spin=false; targetZoom=Math.min(6, targetZoom*1.25); });
$("globeOut").addEventListener("click", ()=>{ targetZoom=Math.max(0.8, targetZoom/1.25); });
$("globeHome").addEventListener("click", ()=>{ targetZoom=1; rotation=[-15,-20]; spin=true; });

/* ─────────────── Route ─────────────── */

function chooseAirport(a){
  if(armed==="from"){
    if(to && to.code===a.code) to=null;
    from=a; armed="to";
  } else {
    if(from && from.code===a.code){ toast("Start und Ziel dürfen nicht gleich sein."); return; }
    to=a; armed="from";
  }
  paintRoute();
}

function paintRoute(){
  const f=$("pickFrom"), t=$("pickTo");
  f.querySelector(".pick-code").textContent = from?from.code:"—";
  f.querySelector(".pick-city").textContent = from?from.city:"noch offen";
  t.querySelector(".pick-code").textContent = to?to.code:"—";
  t.querySelector(".pick-city").textContent = to?to.city:"noch offen";
  f.classList.toggle("is-armed", armed==="from");
  t.classList.toggle("is-armed", armed==="to");

  const ready = !!(from&&to);
  $("routeFigures").hidden = !ready;
  $("toSeats").disabled = !ready;
  if(ready){
    const km = Math.round(distanceKm(from,to)), min = durationFor(km);
    $("figDist").textContent = km.toLocaleString("de-DE");
    $("figTime").textContent = humanMin(min);
    $("figCred").textContent = "+" + creditsFor(min,false);
    $("globeHint").textContent = `${from.city} nach ${to.city} — Flug auswählen, wenn es passt.`;
  } else if(armed==="to"){
    $("globeHint").textContent = "Jetzt das Ziel antippen oder suchen.";
  }
}

function paintHistory(){
  const el=$("lastFlights");
  el.innerHTML = history.length
    ? "<div>Zuletzt geflogen</div>" + history.slice(0,3).map(h =>
        `<div><b>${h.from} → ${h.to}</b> · ${humanMin(h.min)} · +${h.credits}</div>`).join("")
    : "";
}

/* Suche */
const search = $("search"), results = $("results");
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  if(q.length<2){ results.hidden=true; return; }
  const hits = AIRPORTS.filter(a => a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q)).slice(0,8);
  if(!hits.length){ results.innerHTML = `<button type="button" disabled>Kein Flughafen gefunden</button>`; results.hidden=false; return; }
  results.innerHTML = hits.map(a => `<button type="button" data-code="${a.code}">${a.city}<span class="rc">${a.code}</span></button>`).join("");
  results.hidden = false;
});
results.addEventListener("click", e => {
  const b = e.target.closest("button[data-code]"); if(!b) return;
  const a = AIRPORTS.find(x=>x.code===b.dataset.code);
  chooseAirport(a);
  rotation = [-a.lon, -a.lat]; spin=false; targetZoom = Math.max(targetZoom, 1.6);
  search.value=""; results.hidden=true;
});
document.addEventListener("click", e => { if(!e.target.closest(".search")) results.hidden=true; });

document.querySelectorAll('[data-short-route]').forEach(button=>button.addEventListener('click',()=>{
  const [start,end]=button.dataset.shortRoute.split('-');
  from=AIRPORTS.find(a=>a.code===start);to=AIRPORTS.find(a=>a.code===end);armed='to';
  rotation=[-from.lon,-from.lat];spin=false;paintRoute();drawGlobe();
}));
$("resetRoute").addEventListener("click", ()=>{ from=null; to=null; armed="from"; paintRoute(); });
$("toSeats").addEventListener("click", ()=>{ buildCabin(); show("view-seat"); });
document.querySelectorAll("[data-back]").forEach(b => b.addEventListener("click", ()=>show(b.dataset.back)));

/* ─────────────── Kabine ─────────────── */

function buildCabin(){
  const grid=$("seatGrid"); grid.innerHTML=""; seat=null;
  const rows=12, letters=["A","B","C","D"];
  const taken = new Set();
  const load = 0.55 + Math.random()*0.2;              // 55–75 % belegt, jedes Mal neu
  for(let r=1;r<=rows;r++) for(const L of letters) if(Math.random()<load) taken.add(r+L);
  // mindestens acht freie Plätze, darunter zwei am Fenster
  const all = []; for(let r=1;r<=rows;r++) for(const L of letters) all.push(r+L);
  const freeWindows = all.filter(s => /[AD]$/.test(s) && !taken.has(s));
  while(freeWindows.length<2){ const pick = all.filter(s=>/[AD]$/.test(s))[Math.floor(Math.random()*24)];
    if(taken.delete(pick)) freeWindows.push(pick); }
  while(all.filter(s=>!taken.has(s)).length < 8) taken.delete(all[Math.floor(Math.random()*all.length)]);

  for(let r=1;r<=rows;r++){
    const row=document.createElement("div"); row.className="seat-row";
    ["A","B",null,"C","D"].forEach(L => {
      if(L===null){ const n=document.createElement("span"); n.className="row-no"; n.textContent=r; row.appendChild(n); return; }
      const id=r+L;
      const b=document.createElement("button"); b.type="button";
      b.className="seat"+((L==="A"||L==="D")?" window":"")+(r<=3?" premium":"");
      b.textContent=id; b.dataset.seat=id;
      if(taken.has(id)){ b.classList.add("is-taken"); b.disabled=true; b.title="Schon gebucht"; }
      else b.addEventListener("click", ()=>pickSeat(id,b));
      row.appendChild(b);
    });
    grid.appendChild(row);
  }
  const free = all.length - taken.size;
  $("seatHeadline").textContent = `Such dir einen Platz nach ${to.city}`;
  $("seatSub").textContent = `Noch ${free} von 48 Plätzen frei. Am Fenster gibt es zehn Prozent mehr Credits.`;
  $("seatChosen").textContent = "Kein Platz gewählt";
  $("seatNote").textContent = "";
  $("toPass").disabled = true;
}

function pickSeat(id, btn){
  document.querySelectorAll(".seat.is-picked").forEach(s=>s.classList.remove("is-picked"));
  btn.classList.add("is-picked"); seat=id;
  const win = /[AD]$/.test(id), row = parseInt(id,10);
  $("seatChosen").textContent = `Platz ${id} · ${row<=3?"Premium":"Economy"}`;
  $("seatNote").textContent = win ? "Fensterplatz — 10 % mehr Credits" : "Gangplatz";
  $("toPass").disabled = false;
}

$("toPass").addEventListener("click", ()=>{ buildPass(); show("view-pass"); });

/* ─────────────── Boarding Pass ─────────────── */

function buildPass(){
  const km = Math.round(distanceKm(from,to)), min = durationFor(km);
  $("passFrom").textContent = from.code; $("passFromCity").textContent = from.city;
  $("passTo").textContent = to.code;     $("passToCity").textContent = to.city;
  $("passSeat").textContent = seat;
  $("passTime").textContent = humanMin(min);
  $("passGate").textContent = "B" + (7 + (km % 19));
  $("passNo").textContent = "FP " + (100 + Math.floor(km/37)%800);
  $("passClass").textContent = parseInt(seat,10)<=3 ? "Premium" : "Economy";
  $("pass").classList.remove("is-torn");
  resetSwipe();
}

const swipe=$("swipe"), knob=$("swipeKnob");
let swipeDrag=null, boardingTimer=null;
function paintTear(ratio){
  const pass=$("pass"), main=pass.querySelector(".pass-main"), stub=pass.querySelector(".pass-stub");
  pass.classList.toggle("is-ripping",ratio>0 && ratio<1);
  if(ratio===0){main.style.clipPath="";stub.style.clipPath="";return;}
  // The split advances from left to right. Uneven paper fibres are stable while dragging.
  const top=[],bottom=[],edge=ratio*100;
  for(let i=0;i<=100;i++){
    const opened=i<edge;
    const fibre=opened ? (Math.sin(i*2.1)*1.5+Math.sin(i*5.7)*.8) : 0;
    const gap=opened ? Math.max(0,(1-i/edge)*16+2+fibre) : 0;
    top.push(i+"% calc(100% - "+gap.toFixed(2)+"px)");
    bottom.push(i+"% "+(gap*.85).toFixed(2)+"px");
  }
  main.style.clipPath="polygon(0 0,100% 0,"+top.reverse().join(",")+")";
  stub.style.clipPath="polygon("+bottom.join(",")+",100% 100%,0 100%)";
}
function resetSwipe(){
  clearTimeout(boardingTimer);boardingTimer=null;
  swipeDrag=null;knob.disabled=false;knob.style.left="5px";
  swipe.classList.remove("is-done");$("pass").classList.remove("is-torn");
  $("swipeLabel").textContent="Zum Boarding wischen";paintTear(0);
}
function swipeMax(){return swipe.clientWidth-knob.offsetWidth-5;}
function finishBoarding(){
  if(boardingTimer!==null)return;
  paintTear(1);swipe.classList.add("is-done");knob.disabled=true;
  $("swipeLabel").textContent="Boarding abgeschlossen";
  $("pass").classList.add("is-torn");
  boardingTimer=setTimeout(()=>{boardingTimer=null;startFlight();},950);
}
knob.addEventListener("pointerdown",e=>{
  swipeDrag={startX:e.clientX,base:parseFloat(knob.style.left)||5};
  knob.setPointerCapture(e.pointerId);
});
knob.addEventListener("pointermove",e=>{
  if(!swipeDrag)return;
  const x=Math.max(5,Math.min(swipeMax(),swipeDrag.base+e.clientX-swipeDrag.startX));
  knob.style.left=x+"px";
  const ratio=(x-5)/(swipeMax()-5);
  $("swipeLabel").textContent=ratio>.85?"Loslassen zum Abheben":"Zum Boarding wischen";
  paintTear(ratio);
});
knob.addEventListener("pointerup",()=>{
  if(!swipeDrag)return;
  swipeDrag=null;
  if((parseFloat(knob.style.left)||5)>=swipeMax()-6)finishBoarding();else resetSwipe();
});
knob.addEventListener("pointercancel",resetSwipe);
knob.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){e.preventDefault();finishBoarding();}
});
document.querySelector('[data-back="view-seat"]').addEventListener("click",resetSwipe);

/* Flugkarte: Leaflet mit dunklen Esri-Kacheln, im selben Stil wie DVB Live. Braucht eine Internetverbindung. */
let follow=true,flightZoom=6,interacting=false,gestureUntil=0,lastCameraFrame=0,lastTileUpdate=0;
let flightMap=null,planeMarker=null,planeRotEl=null,routeLine=null,flownLine=null,airportLayer=null,fullRoutePoints=[];

function currentLocation(t){
  if(!flight)return [0,0];
  const a=AIRPORTS.find(x=>x.code===flight.from),b=AIRPORTS.find(x=>x.code===flight.to);
  return slerp(a,b,t);
}
function buildRoutePoints(a,b,steps){
  // Echte Großkreis-Route (dieselbe Kurve wie slerp() für die Flugzeugposition),
  // damit die gezeichnete Linie exakt dem Flugweg entspricht. Longitude wird
  // "entpackt" (kein Sprung am 180°-Meridian), damit Leaflet keine Blitzlinie quer
  // um die Welt zieht.
  const pts=[]; let prevLon=a.lon;
  for(let i=0;i<=steps;i++){
    const p=slerp(a,b,i/steps);
    let lon=p[0];
    while(lon-prevLon>180) lon-=360;
    while(lon-prevLon<-180) lon+=360;
    prevLon=lon;
    pts.push([p[1],lon]);
  }
  return pts;
}
// Split at the date line instead of drawing a line across the entire map.
function splitWorldRoute(points){
  const wrap=lon=>((lon+180)%360+360)%360-180;
  const segments=[];let segment=[];
  for(const [lat,lon] of points){
    const p=[lat,wrap(lon)];
    if(segment.length){
      const prev=segment[segment.length-1],delta=p[1]-prev[1];
      if(Math.abs(delta)>180){
        const edge=delta>0?-180:180,adjusted=p[1]+(delta>0?-360:360);
        const ratio=(edge-prev[1])/(adjusted-prev[1]);
        const crossing=prev[0]+(lat-prev[0])*ratio;
        segment.push([crossing,edge]);segments.push(segment);segment=[[crossing,-edge]];
      }
    }
    segment.push(p);
  }
  if(segment.length)segments.push(segment);
  return segments;
}
function bearingDeg(a,b){ // a,b = [lon,lat]
  const φ1=a[1]*Math.PI/180,φ2=b[1]*Math.PI/180,Δλ=(b[0]-a[0])*Math.PI/180;
  const y=Math.sin(Δλ)*Math.cos(φ2),x=Math.cos(φ1)*Math.sin(φ2)-Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
  return (Math.atan2(y,x)*180/Math.PI+360)%360;
}
function ensureFlightMap(){
  if(flightMap||!window.L)return;
  flightMap=L.map('map',{zoomControl:false,fadeAnimation:false,minZoom:3,maxZoom:16,
    maxBounds:[[-85.05112878,-180],[85.05112878,180]],maxBoundsViscosity:1});
  flightMap.setView([20,0],3);
  const constrainWorld=()=>{
    const size=flightMap.getSize();
    flightMap.setMinZoom(Math.max(2,Math.ceil(Math.log2(Math.max(size.x,size.y)/256))));
  };
  constrainWorld(); flightMap.on('resize',constrainWorld);
  // Wheel input precedes Leaflet's debounced zoomstart event.
  $('map').addEventListener('wheel',()=>{gestureUntil=performance.now()+450;},{passive:true});
  $('map').addEventListener('pointerdown',()=>{gestureUntil=performance.now()+600;},{passive:true});
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',{
    attribution:'Kartendaten &copy; Esri',maxZoom:16,noWrap:true,bounds:[[-85.05112878,-180],[85.05112878,180]]
  }).addTo(flightMap)
    .on('tileerror',()=>{$('mapFallback').hidden=false;})
    .on('load',()=>{$('mapFallback').hidden=true;});
  routeLine=L.polyline([],{color:themeColors.accentSoft,weight:3,dashArray:'8 9',opacity:1,interactive:false}).addTo(flightMap);
  flownLine=L.polyline([],{color:themeColors.accentSoft,weight:4,opacity:1,interactive:false}).addTo(flightMap);
  airportLayer=L.layerGroup().addTo(flightMap);
  planeMarker=L.marker([0,0],{interactive:false,icon:L.divIcon({className:'plane-icon',iconSize:[74,74],iconAnchor:[37,37],html:
    '<div class="plane-rot"><img src="assets/plane.png" width="74" height="74" alt="" draggable="false"></div>'
  })}).addTo(flightMap);
  planeRotEl=planeMarker.getElement().querySelector('.plane-rot');
  flightMap.on('dragstart',()=>{follow=false;paintFollow();});
  flightMap.on('zoomstart',()=>{interacting=true;});
  flightMap.on('zoomend',()=>{interacting=false;flightZoom=flightMap.getZoom();gestureUntil=performance.now()+150;});
}
function updateFlightColors(){
  if(!routeLine)return;
  routeLine.setStyle({color:themeColors.accentSoft});
  flownLine.setStyle({color:themeColors.accentSoft});
  paintAirports();
}
function paintAirports(){
  if(!airportLayer)return;
  airportLayer.clearLayers();
  AIRPORTS.forEach(city=>{
    L.circleMarker([city.lat,city.lon],{radius:3,color:themeColors.warm,fillColor:themeColors.warm,fillOpacity:1,weight:0,interactive:false})
      .bindTooltip(city.city,{permanent:true,direction:'right',offset:[6,0],className:'airport-label'})
      .addTo(airportLayer);
  });
}
function paintFollow(){$('followBtn').textContent=follow?'Folgt dem Flug':'Flugzeug folgen';$('followBtn').setAttribute('aria-pressed',String(follow));}
function setupFlightLayers(){
  ensureFlightMap();
  follow=true;paintFollow();paintAirports();
  if(!flight||!flightMap)return;
  const a=AIRPORTS.find(x=>x.code===flight.from),b=AIRPORTS.find(x=>x.code===flight.to);
  fullRoutePoints=buildRoutePoints(a,b,128);
  routeLine.setLatLngs(splitWorldRoute(fullRoutePoints));
  const bounds=L.latLngBounds(fullRoutePoints);
  requestAnimationFrame(()=>{
    flightMap.invalidateSize();flightMap.fitBounds(bounds,{padding:[60,60],maxZoom:7,animate:false});flightZoom=flightMap.getZoom();
    renderFlight();
  });
}
$('zoomIn').addEventListener('click',()=>{if(flightMap)flightMap.zoomIn();});
$('zoomOut').addEventListener('click',()=>{if(flightMap)flightMap.zoomOut();});
$('followBtn').addEventListener('click',()=>{follow=!follow;paintFollow();});
function renderFlight(){
  if(!flight||!$('view-flight').classList.contains('is-active')||flightView==='clock'||!flightMap)return;
  if(interacting)return;
  const t=progress().t,loc=currentLocation(t);
  planeMarker.setLatLng([loc[1],loc[0]]);
  // Geflogene Strecke entlang derselben Großkreis-Punkte wie die geplante Route,
  // damit das Flugzeug immer sichtbar exakt auf der eingezeichneten Linie sitzt.
  if(fullRoutePoints.length){
    const idx=Math.max(0,Math.min(fullRoutePoints.length-1,Math.floor(t*(fullRoutePoints.length-1))));
    const flown=fullRoutePoints.slice(0,idx+1);
    let lon=loc[0];const previous=flown[flown.length-1][1];
    while(lon-previous>180)lon-=360;while(lon-previous<-180)lon+=360;
    flown.push([loc[1],lon]);
    flownLine.setLatLngs(splitWorldRoute(flown));
  }
  const prev=currentLocation(Math.max(0,t-.0008)),next=currentLocation(Math.min(1,t+.0008));
  const heading=bearingDeg(prev,next);
  if(planeRotEl)planeRotEl.style.transform=`rotate(${heading}deg)`;
  const now=performance.now();
  if(follow && !interacting && now>gestureUntil)smoothFollow(loc,now);
  else lastCameraFrame=now;
  // Leaflet rounds marker positions by default. Keep our plane at fractional
  // pixels too, so its position and the moving map share one smooth frame.
  if(!interacting){
    const point=flightMap.project([loc[1],loc[0]],flightMap.getZoom()).subtract(flightMap.getPixelOrigin());
    L.DomUtil.setPosition(planeMarker.getElement(),point);
  }

}
function smoothFollow(loc,now){
  const map=flightMap,zoom=map.getZoom(),size=map.getSize(),half=size.divideBy(2);
  const target=map.project([loc[1],loc[0]],zoom);
  const nw=map.project([85.05112878,-180],zoom),se=map.project([-85.05112878,180],zoom);
  target.x=Math.max(nw.x+half.x,Math.min(se.x-half.x,target.x));
  target.y=Math.max(nw.y+half.y,Math.min(se.y-half.y,target.y));
  const current=map.project(map.getCenter(),zoom);
  // A date-line crossing belongs on the other edge of this single world,
  // not on a camera journey back across every continent.
  if(Math.abs(target.x-current.x)>(se.x-nw.x)/2){
    map.setView(map.unproject(target,zoom),zoom,{animate:false,reset:true});lastCameraFrame=now;return;
  }
  const dt=Math.min(.05,Math.max(.001,(now-lastCameraFrame)/1000));lastCameraFrame=now;
  const ease=1-Math.exp(-dt/.12);
  const center=current.add(target.subtract(current).multiplyBy(ease));
  const panePosition=half.subtract(center.subtract(map.getPixelOrigin()));
  // Public Leaflet projection/DOM APIs retain fractions instead of the
  // rounded panBy/panTo jumps. All overlays move with the same map pane.
  L.DomUtil.setPosition(map.getPane('mapPane'),panePosition);
  map.fire('move');
  if(now-lastTileUpdate>200){map.fire('moveend');lastTileUpdate=now;}
  // Periodically rebase the pane so long flights never accumulate huge transforms.
  if(Math.abs(panePosition.x)>4096||Math.abs(panePosition.y)>4096){
    map.setView(map.unproject(center,zoom),zoom,{animate:false,reset:true});
  }
}
function flightFrame(){
  renderFlight();requestAnimationFrame(flightFrame);
}



/* ─────────────── Flugablauf ─────────────── */

function setFlightView(mode){
  flightView=mode;store.set('flightView',mode);
  $('view-flight').classList.toggle('clock-view',mode==='clock');
  $('showFlightMap').setAttribute('aria-pressed',String(mode==='map'));
  $('showFocusClock').setAttribute('aria-pressed',String(mode==='clock'));
  if(mode==='map'&&flightMap)requestAnimationFrame(()=>{flightMap.invalidateSize();renderFlight();});
  if(flight&&progress().t<1)update();
}
$('showFlightMap').addEventListener('click',()=>setFlightView('map'));
$('showFocusClock').addEventListener('click',()=>setFlightView('clock'));
function startFlight(){
  const km = Math.round(distanceKm(from,to)), min = durationFor(km);
  flight = { from:from.code, to:to.code, seat, km, min, started:Date.now(), pausedAt:null, pausedMs:0 };
  store.set("flight", flight);
  $("hudRoute").textContent = `${from.city} → ${to.city}`;
  $("hudSeat").textContent = `Platz ${seat} · ${km.toLocaleString("de-DE")} km`;
  $("pauseBtn").textContent = "Pause";
  show("view-flight");
  setupFlightLayers();
  runTimer();
}

function progress(){
  const now = flight.pausedAt || Date.now();
  const elapsed = (now - flight.started - flight.pausedMs);
  const total = flight.min*60000;
  return { t: Math.max(0, Math.min(1, elapsed/total)), elapsed, total };
}

function nearestCity(lat, lon){
  let best=null, bd=1e9;
  WAYPOINT_CITIES.forEach(c => {
    const d = distanceKm({lat,lon}, c);
    if(d<bd){ bd=d; best=c; }
  });
  return bd < 420 ? best : null;
}

function runTimer(){
  clearInterval(timer);
  timer = setInterval(update, 250);
  update();
}

function update(){
  if(!flight) return;
  const { t, elapsed, total } = progress();
  $("hudRemain").textContent = clock((total-elapsed)/1000);
  $("progressFill").style.width = (t*100).toFixed(2)+"%";
  const earned = Math.floor(t * creditsFor(flight.min, /[AD]$/.test(flight.seat)));
  $("hudEarned").textContent = `${earned} Credits gesammelt`;

  const loc=currentLocation(t);
  const over=nearestCity(loc[1],loc[0]);
  $("hudOver").textContent=over?`gerade über ${over.city}`:"";

  $('focusRemain').textContent=$('hudRemain').textContent;
  $('focusRoute').textContent=$('hudRoute').textContent+' · Platz '+flight.seat;
  $('focusProgressFill').style.width=(t*100).toFixed(2)+'%';
  $('focusProgress').setAttribute('aria-valuenow',Math.round(t*100));
  $('focusState').textContent=flight.pausedAt?'Deine Auszeit pausiert':'bis zur Landung';
  if(t>=1) land();
}

$("pauseBtn").addEventListener("click", ()=>{
  if(!flight) return;
  if(flight.pausedAt){
    flight.pausedMs += Date.now()-flight.pausedAt; flight.pausedAt=null;
    $("pauseBtn").textContent="Pause"; runTimer();
  } else {
    flight.pausedAt = Date.now(); $("pauseBtn").textContent="Weiterfliegen"; clearInterval(timer);
  }
  store.set("flight", flight);
  update();
});

$("abortBtn").addEventListener("click", ()=>{
  if(!flight) return;
  if(!confirm("Flug beenden? Deine bisher verdienten Credits behältst du.")) return;
  const {t,elapsed}=progress();
  const earned=Math.floor(t*creditsFor(flight.min,/[AD]$/.test(flight.seat)));
  credits+=earned;
  history.unshift({from:flight.from,to:flight.to,min:Math.floor(elapsed/60000),credits:earned});history=history.slice(0,8);
  store.set('credits',credits);store.set('history',history);
  clearInterval(timer); flight=null; store.del("flight");paintCredits();paintHistory();
  toast("Flug beendet. "+earned+" Credits gutgeschrieben.");
  show("view-map");
});


function land(){
  clearInterval(timer);
  const win = /[AD]$/.test(flight.seat);
  const earned = creditsFor(flight.min, win);
  credits += earned;
  const dest = AIRPORTS.find(a=>a.code===flight.to);
  history.unshift({ from:flight.from, to:flight.to, min:flight.min, credits:earned });
  history = history.slice(0,8);
  store.set("credits", credits); store.set("history", history); store.del("flight");

  $("arrivalCity").textContent = dest.city;
  $("arrivalLine").textContent =
    `${humanMin(flight.min)} am Stück gelernt, ${flight.km.toLocaleString("de-DE")} km zurückgelegt.` +
    (win ? " Der Fensterplatz hat sich gelohnt." : "");
  $("arrivalCredits").textContent = "+"+earned;
  flight=null;
  paintCredits(); paintHistory();
  show("view-arrival");
}

$("arrivalAgain").addEventListener("click", ()=>{ from=to; to=null; armed="to"; paintRoute(); show("view-map"); });
$("arrivalHangar").addEventListener("click", ()=>{ buildShop(); show("view-shop"); });

/* ─────────────── Studio ─────────────── */

function openDesignPreview(th){
  const dialog=$('designPreview');dialog.dataset.theme=th.id;dialog.dataset.animated=String(!!th.animated);
  $('previewTitle').textContent=th.name;$('previewDescription').textContent=th.desc;
  $('previewArt').src=th.asset;
  $('previewPrice').textContent=ownedThemes.includes(th.id)?'Bereits in deiner Kollektion':th.price.toLocaleString('de-DE')+' Credits';
  dialog.showModal();
}
$('closePreview').addEventListener('click',()=>$('designPreview').close());
$('designPreview').addEventListener('click',e=>{if(e.target===$('designPreview'))$('designPreview').close();});
function buildShop(){
  const wrap=$("themes"); wrap.innerHTML="";
  if(window.buildCompanionShop)window.buildCompanionShop();
  [...THEMES].sort((a,b)=>a.price-b.price).forEach(th => {
    const card=document.createElement("div");
    card.className = "theme-card" + (th.animated?" animated-design":"") + (th.id===themeId ? " is-active" : "");
    card.innerHTML = `
      <div class="swatch" style="background:${th.swatch}"><span class="design-price">${th.price?th.price.toLocaleString("de-DE")+" Credits":"Inklusive"}</span>
        <span class="dot" style="background:${th.dot}"></span>
      </div>
      <div class="theme-name">${th.name}</div>
      <p class="theme-desc">${th.desc}</p>`;
    const btn=document.createElement("button"); btn.type="button";
    const has = ownedThemes.includes(th.id);
    if(th.id===themeId){ btn.className="btn quiet"; btn.textContent="Aktiv"; btn.disabled=true; }
    else if(has){ btn.className="btn quiet"; btn.textContent="Anwenden"; }
    else { btn.className="btn primary"; btn.textContent=`Für ${th.price} Credits freischalten`; }
    btn.addEventListener("click", ()=>{
      if(ownedThemes.includes(th.id)){ applyTheme(th.id); toast(`${th.name} ist aktiv.`); }
      else if(credits >= th.price){
        credits -= th.price; ownedThemes.push(th.id);
        store.set("credits", credits); store.set("themes", ownedThemes);
        paintCredits(); applyTheme(th.id); toast(`${th.name} freigeschaltet.`);
      } else { toast(`Noch ${th.price-credits} Credits bis „${th.name}".`); return; }
      buildShop();
    });
    const preview=document.createElement('button');preview.type='button';preview.className='btn preview-button';preview.textContent='Vorschau';
    preview.addEventListener('click',()=>openDesignPreview(th));card.appendChild(preview);
    card.appendChild(btn);
    wrap.appendChild(card);
  });
}

$("openHangar").addEventListener("click", ()=>{ buildShop(); show("view-shop"); });
$("creditsPill").addEventListener("click", ()=>{ buildShop(); show("view-shop"); });
$("shopBack").addEventListener("click", ()=>show(flight?"view-flight":"view-map"));

/* ─────────────── Start ─────────────── */

window.addEventListener("resize", ()=>{ setupGlobe(); if(flightMap)flightMap.invalidateSize(); });

(function init(){
  document.documentElement.dataset.theme = themeId;
  refreshThemeColors();
  paintCredits(); paintRoute(); paintHistory(); paintSound(); paintFollow();
  setupGlobe(); loadWorld(); loopGlobe(); flightFrame();

  const saved = store.get("flight", null);
  if(saved){
    flight = saved;
    from = AIRPORTS.find(a=>a.code===saved.from);
    to   = AIRPORTS.find(a=>a.code===saved.to);
    seat = saved.seat;
    $("hudRoute").textContent = `${from.city} → ${to.city}`;
    $("hudSeat").textContent = `Platz ${seat} · ${saved.km.toLocaleString("de-DE")} km`;
    // Retire accelerated saved flights without losing their existing progress.
    if(saved.turbo){
      const now=saved.pausedAt||Date.now(),elapsed=(now-saved.started-saved.pausedMs)*60;
      saved.started=now-elapsed;saved.pausedMs=0;
    }
    delete saved.turbo;store.set('flight',saved);
    $("pauseBtn").textContent = saved.pausedAt ? "Weiterfliegen" : "Pause";
    show("view-flight");
    setupFlightLayers();
    if(progress().t>=1) land();
    else if(!saved.pausedAt) runTimer();
    else update();
  }
})();

/* ===== slime.js ===== */
/* A small visitor: 20 seconds to find it, then five minutes of quiet. */
(()=>{
  const VISIBLE_MS=20000,QUIET_MS=300000;
  const visitor=document.createElement('button');
  visitor.type='button';visitor.className='slime-visitor';visitor.hidden=true;
  visitor.setAttribute('aria-label','Lila Schleim finden – 200 Credits');
  visitor.innerHTML='<img src="assets/slime.svg" alt="" draggable="false">';
  document.body.append(visitor);
  let expires=0,next=Number(store.get('slimeNext',0))||Date.now()+12000,active=false;
  function hide(){
    active=false;visitor.hidden=true;
    next=Date.now()+QUIET_MS;store.set('slimeNext',next);
  }
  function showVisitor(){
    const map=$('mapStage'),onFlight=$('view-flight').classList.contains('is-active');
    const onMap=onFlight && !$('view-flight').classList.contains('clock-view') && Math.random()<.65;
    (onMap?map:document.body).append(visitor);
    visitor.classList.toggle('on-map',onMap);
    const edge=Math.floor(Math.random()*3),offset=15+Math.random()*55;
    visitor.style.left=edge===0?'2px':edge===1?'calc(100% - 78px)':offset+'%';
    visitor.style.top=edge===2?'calc(100% - 80px)':(onMap?15+Math.random()*50:25+Math.random()*40)+'%';
    visitor.style.setProperty('--crawl-x',edge===0?'14px':edge===1?'-14px':'28px');
    visitor.style.setProperty('--crawl-y',edge===2?'0px':'40px');
    visitor.hidden=false;active=true;expires=Date.now()+VISIBLE_MS;
  }
  visitor.addEventListener('click',event=>{
    event.stopPropagation();
    if(!active||Date.now()>=expires)return;
    const rect=visitor.getBoundingClientRect();
    hide(); // Lock immediately so rapid taps can never pay twice.
    credits+=200;store.set('credits',credits);paintCredits();
    const burst=document.createElement('div');burst.className='slime-found';
    burst.style.left=Math.max(80,Math.min(innerWidth-80,rect.left+rect.width/2))+'px';
    burst.style.top=Math.max(45,rect.top+rect.height/2)+'px';
    burst.innerHTML='<strong>Gefunden!</strong><span>+200 Credits</span>';
    for(let i=0;i<16;i++){
      const pixel=document.createElement('i'),angle=i*Math.PI/8;
      pixel.style.setProperty('--dx',Math.cos(angle)*(35+Math.random()*45)+'px');
      pixel.style.setProperty('--dy',Math.sin(angle)*(35+Math.random()*45)+'px');
      pixel.style.background=['#ad83ef','#7052b1','#eadcff','#e484b4'][i%4];burst.append(pixel);
    }
    document.body.append(burst);toast('Gefunden! +200 Credits');
    setTimeout(()=>burst.remove(),1800);
  });
  setInterval(()=>{
    if(active){
      if(Date.now()>=expires || (visitor.parentElement.id==='mapStage'&&(!$('view-flight').classList.contains('is-active')||$('view-flight').classList.contains('clock-view'))))hide();
    }else if(!document.hidden && Date.now()>=next)showVisitor();
  },250);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&active)hide();});
})();

/* ===== companions.js ===== */
/* Persistent little floor companions. Positions are viewport CSS pixels. */
(()=>{
  const types=[
    {id:'snake',name:'Milo',kind:'Die kleine Schlange',desc:'Schlängelt sich neugierig an deinem Bildschirmrand entlang.',asset:'snake.svg'},
    {id:'snail',name:'Mika',kind:'Die gemütliche Schnecke',desc:'Hat ihr Zuhause dabei und wirklich alle Zeit der Welt.',asset:'snail.svg'},
    {id:'slime',name:'Blu',kind:'Der blaue Schleim',desc:'Ein leiser Wackelpudding für deine nächste Lernreise.',asset:'blue-slime.svg'},
    {id:'duck',name:'Pippa',kind:'Die kleine Ente',desc:'Watschelt in aller Ruhe durch deinen Tag.',asset:'duck.gif',facingRight:true},
    {id:'ghost',name:'Boo',kind:'Der kleine Geist',desc:'Schwebt leise an deiner Seite.',asset:'ghost.gif'}
  ];
  let owned=store.get('companions',[]).filter(id=>types.some(t=>t.id===id));
  let active=store.get('activeCompanions',[]).filter(id=>owned.includes(id));
  const actors=new Map(),SIZE=42,reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const ground=()=>Math.max(0,innerHeight-SIZE-5),right=()=>Math.max(0,innerWidth-SIZE);
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  function save(){store.set('companions',owned);store.set('activeCompanions',active);}
  function create(type){
    const el=document.createElement('button');el.type='button';el.className='floor-companion '+type.id;
    el.setAttribute('aria-label',type.name+' hochheben: Leertaste; bewegen: Pfeiltasten; fallen lassen: Leertaste');
    el.title=type.name+' · Hochheben und fallen lassen';
    el.innerHTML='<span class="companion-facing"><img src="assets/'+type.asset+'" alt="" draggable="false"></span>';
    document.body.append(el);
    const actor={el,facingRight:!!type.facingRight,x:Math.random()*right(),y:ground(),vx:0,vy:0,dir:Math.random()<.5?-1:1,held:false,keyboard:false,lastX:0,lastY:0,lastMove:0,walkTime:0,turnAfter:7+Math.random()*11,pauseTime:0};
    const face=el.firstElementChild;actor.face=face;
    function release(){actor.held=false;actor.keyboard=false;el.classList.remove('is-held');}
    el.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;e.preventDefault();e.stopPropagation();
      actor.held=true;actor.keyboard=false;actor.vx=actor.vy=0;
      actor.offsetX=e.clientX-actor.x;actor.offsetY=e.clientY-actor.y;
      actor.lastX=e.clientX;actor.lastY=e.clientY;actor.lastMove=performance.now();
      el.setPointerCapture(e.pointerId);el.classList.add('is-held');
    });
    el.addEventListener('pointermove',e=>{
      if(!actor.held||actor.keyboard||!el.hasPointerCapture(e.pointerId))return;
      const now=performance.now(),dt=Math.max(.016,(now-actor.lastMove)/1000);
      actor.x=clamp(e.clientX-actor.offsetX,0,right());actor.y=clamp(e.clientY-actor.offsetY,0,ground());
      actor.vx=clamp((e.clientX-actor.lastX)/dt,-350,350);actor.vy=clamp((e.clientY-actor.lastY)/dt,-400,400);
      actor.lastX=e.clientX;actor.lastY=e.clientY;actor.lastMove=now;
    });
    el.addEventListener('pointerup',e=>{
      if(!actor.held||actor.keyboard)return;
      if(performance.now()-actor.lastMove>100)actor.vx=actor.vy=0;
      release();if(el.hasPointerCapture(e.pointerId))el.releasePointerCapture(e.pointerId);
    });
    el.addEventListener('pointercancel',()=>{actor.vx=actor.vy=0;release();});
    el.addEventListener('lostpointercapture',()=>{if(!actor.keyboard)release();});
    el.addEventListener('keydown',e=>{
      if(e.key===' '||e.key==='Enter'){e.preventDefault();actor.held=!actor.held;actor.keyboard=actor.held;actor.vx=actor.vy=0;el.classList.toggle('is-held',actor.held);if(actor.held)actor.y=Math.max(0,actor.y-70);}
      if(actor.keyboard&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
        e.preventDefault();actor.x=clamp(actor.x+(e.key==='ArrowLeft'?-20:e.key==='ArrowRight'?20:0),0,right());
        actor.y=clamp(actor.y+(e.key==='ArrowUp'?-20:e.key==='ArrowDown'?20:0),0,ground());
      }
      if(e.key==='Escape')release();
    });
    el.addEventListener('blur',()=>{if(actor.keyboard)release();});
    actors.set(type.id,actor);
  }
  function sync(){
    for(const [id,actor] of actors)if(!active.includes(id)){actor.el.remove();actors.delete(id);}
    types.forEach(t=>{if(active.includes(t.id)&&!actors.has(t.id))create(t);});
  }
  window.buildCompanionShop=()=>{
    const wrap=$('companions');wrap.innerHTML='';
    types.forEach(type=>{
      const card=document.createElement('article');card.className='companion-card';
      const has=owned.includes(type.id),awake=active.includes(type.id);
      card.innerHTML='<div class="companion-portrait '+type.id+'"><img src="assets/'+type.asset+'" alt="'+type.kind+'"></div><div><span class="companion-kind">'+type.kind+'</span><h4>'+type.name+'</h4><p>'+type.desc+'</p></div>';
      const button=document.createElement('button');button.type='button';button.className='btn '+(has?'quiet':'primary');
      button.textContent=has?(awake?'Schlafen legen':'Aufwecken'):'Für 500 Credits adoptieren';
      if(has)button.setAttribute('aria-pressed',String(awake));
      button.addEventListener('click',()=>{
        if(!owned.includes(type.id)){
          if(credits<500){toast('Noch '+(500-credits)+' Credits bis zu '+type.name+'.');return;}
          credits-=500;owned.push(type.id);active.push(type.id);store.set('credits',credits);paintCredits();toast(type.name+' begleitet dich jetzt.');
        }else if(active.includes(type.id))active=active.filter(id=>id!==type.id);else active.push(type.id);
        save();sync();window.buildCompanionShop();
      });card.append(button);wrap.append(card);
    });
  };
  let previous=performance.now();
  function frame(now){
    const dt=Math.min(.035,(now-previous)/1000);previous=now;
    for(const actor of actors.values()){
      const floor=ground();
      if(!actor.held){
        if(actor.y<floor-.1||Math.abs(actor.vy)>4){
          actor.vy+=850*dt;actor.y+=actor.vy*dt;actor.x+=actor.vx*dt;
          if(actor.y>=floor){actor.y=floor;actor.vy=Math.abs(actor.vy)>80?-actor.vy*.27:0;actor.vx*=.4;}
         }else{
          actor.y=floor;actor.vy=0;actor.vx=0;
          if(!reduce.matches){
            if(actor.pauseTime>0)actor.pauseTime=Math.max(0,actor.pauseTime-dt);
            else{
              actor.walkTime+=dt;
              actor.x+=actor.dir*(Math.max(1,right())/45)*dt;
              if(actor.walkTime>=actor.turnAfter){
                actor.dir*=-1;actor.walkTime=0;actor.turnAfter=7+Math.random()*11;
                actor.pauseTime=.6+Math.random()*1.8;
              }
            }
          }
        }
        actor.el.classList.toggle('is-resting',actor.pauseTime>0);
        if(actor.x<=0){actor.x=0;actor.dir=1;actor.walkTime=0;actor.turnAfter=7+Math.random()*11;actor.vx=Math.abs(actor.vx)*.4;}
        if(actor.x>=right()){actor.x=right();actor.dir=-1;actor.walkTime=0;actor.turnAfter=7+Math.random()*11;actor.vx=-Math.abs(actor.vx)*.4;}
      }
      actor.el.style.transform='translate3d('+actor.x+'px,'+actor.y+'px,0)';
      actor.face.style.transform='scaleX('+((actor.dir<0?1:-1)*(actor.facingRight?-1:1))+')';
      actor.el.classList.toggle('is-airborne',actor.held||actor.y<floor-1);
    }
    requestAnimationFrame(frame);
  }
  window.addEventListener('resize',()=>{for(const a of actors.values()){a.x=clamp(a.x,0,right());a.y=clamp(a.y,0,ground());}});
  document.addEventListener('visibilitychange',()=>{previous=performance.now();});
  sync();requestAnimationFrame(frame);
})();
