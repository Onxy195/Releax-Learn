/* Relax Learn — Lernsessions als Flüge.
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

const THEMES = [
  { id:"aurora",   name:"Aurora Violett", price:0,   desc:"Die Standardansicht: Schwarz mit violettem Verlauf.",
    swatch:"linear-gradient(150deg,#0A0711,#5B21B6 55%,#C79BFF)", dot:"#A855F7" },
  { id:"daylight", name:"Tageslicht",     price:100, desc:"Helle Variante für Sessions am Tag.",
    swatch:"linear-gradient(150deg,#FBF9FF,#E6DCFB 60%,#B79BF0)", dot:"#7C3AED" },
  { id:"ink",      name:"Tiefschwarz",    price:120, desc:"Komplett schwarz, nur Graustufen. Schont die Augen nachts.",
    swatch:"linear-gradient(150deg,#000,#1A1A1C 60%,#3A3A41)", dot:"#C0C0C8" },
  { id:"starlit",  name:"Sternenklar",    price:250, desc:"Nachthimmel mit Sternenfeld über der ganzen App.",
    swatch:"radial-gradient(120% 90% at 30% 10%, #1E2A6B, #070A1C 70%)", dot:"#8AA2FF", stars:true },
  { id:"nordlicht",name:"Nordlicht",      price:320, desc:"Polarlicht in Türkis und Blau, wie ein Flug über Lappland.",
    swatch:"linear-gradient(150deg,#04120F,#0E6B59 55%,#8DF2D8)", dot:"#3FD9B0" },
  { id:"sunrise",  name:"Sonnenaufgang",  price:400, desc:"Warmer Horizont in Korall und Bernstein.",
    swatch:"linear-gradient(150deg,#170A12,#8F2F4A 55%,#FFD28A)", dot:"#FF7A59" },
  { id:"nebula",   name:"Nebelkammer",    price:500, desc:"Galaxienstaub mit Sternen — das aufwendigste Design.",
    swatch:"radial-gradient(70% 60% at 25% 20%, #E056C8, transparent 60%), radial-gradient(70% 60% at 80% 60%, #6056FF, transparent 62%), #0A0416",
    dot:"#E056C8", stars:true }
];

THEMES.push(...[{"id":"lagoon","name":"Lagune","price":600,"desc":"Türkises Wasser, leuchtende Inseln und ein sanfter Lichtsaum.","dot":"#50e4d1","swatch":"radial-gradient(ellipse at 12% 90%,#176d77,transparent 60%),linear-gradient(145deg,#03171f,#0c3943)"},{"id":"sakura","name":"Sakura","price":700,"desc":"Rosé, pflaumenfarbene Schatten und zarte Blütenlichter.","dot":"#ef92c2","swatch":"radial-gradient(circle at 80% 12%,#743254,transparent 45%),linear-gradient(160deg,#251022,#160d22)"},{"id":"dune","name":"Goldene Dünen","price":850,"desc":"Sandgold und geschwungene Wüstenlinien für ruhige Abende.","dot":"#e9b767","swatch":"repeating-radial-gradient(ellipse at 0 110%,#36281a 0 40px,#2c2116 42px 80px)"},{"id":"glacier","name":"Gletscher","price":1000,"desc":"Kristallblau mit eisigen Lichtflächen und silbernen Akzenten.","dot":"#7fd3ff","swatch":"linear-gradient(135deg,transparent 35%,#22435a 36%,transparent 63%),linear-gradient(25deg,#071323,#163a51)"},{"id":"synth","name":"Neon Lounge","price":1250,"desc":"Elektrisches Pink, Cyan und ein dezentes Retro-Raster.","dot":"#fe79dd","swatch":"repeating-linear-gradient(0deg,transparent 0 59px,#75d9ef12 60px),repeating-linear-gradient(90deg,transparent 0 59px,#fe79dd12 60px),radial-gradient(ellipse at 80% 0,#452365,#100b2e 70%)"},{"id":"eclipse","name":"Eclipse","price":1600,"desc":"Ein goldener Sonnenring über tiefem, ruhigem Mitternachtsblau.","dot":"#edc777","swatch":"radial-gradient(circle at 80% 16%,#090e1e 0 105px,#edc77788 107px,#d7973533 111px,transparent 150px),linear-gradient(155deg,#0e1630,#03060d)"}]);

/* ─────────────── Speicher & Zustand ─────────────── */

const store = {
  get(k, f){ try{ const v = localStorage.getItem("rl_"+k); return v===null?f:JSON.parse(v);}catch{return f;} },
  set(k, v){ try{ localStorage.setItem("rl_"+k, JSON.stringify(v)); }catch{} },
  del(k){ try{ localStorage.removeItem("rl_"+k); }catch{} }
};

let credits = store.get("credits", 0);
let ownedThemes = store.get("themes", ["aurora"]);
let themeId = store.get("theme", "aurora");
let history = store.get("history", []);
let soundOn = store.get("sound", true);

let from = null, to = null, armed = "from";
let seat = null;
let flight = null, timer = null;

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
function durationFor(km){ return Math.max(10, Math.round((25 + km/850*60)/5)*5); }
function creditsFor(min, win){ return Math.round(min*1.2*(win?1.1:1)) + 40; }
function clock(sec){ sec=Math.max(0,Math.round(sec));
  const h=Math.floor(sec/3600), m=Math.floor(sec%3600/60), s=sec%60;
  return h ? `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`
           : `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }
function humanMin(min){ const h=Math.floor(min/60), m=min%60;
  return h ? (m ? `${h} h ${m} min` : `${h} h`) : `${m} min`; }

/* ─────────────── Oberfläche ─────────────── */

function show(id){
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("is-active", v.id===id));
  window.scrollTo(0,0);
  if(id==="view-flight") requestAnimationFrame(drawFlight);
  if(id==="view-map") setTimeout(drawGlobe, 40);
}
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
  drawFlight();
  drawGlobe();
}

/* ─────────────── Kabinenklang ─────────────── */

const audioPrefs=Object.assign({enabled:true,master:45,click:35,cabin:soundOn?35:0,rain:0},store.get("audioMix",{}));
const ambience=(()=>{
  let ctx,master,rainEl;const channels={};
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
    // Regen + Gewitter: echte Aufnahme statt synthetischem Rauschen, loopt nahtlos.
    // Als eingebettete Data-URL geladen (siehe assets/regen-gewitter-data.js), damit
    // sie beim direkten Öffnen der index.html (ohne Server) sicher abspielt.
    rainEl=new Audio(window.RAIN_SOUND_DATA_URL);
    rainEl.loop=true;rainEl.preload='auto';
    const rainSrc=ctx.createMediaElementSource(rainEl),rainGain=ctx.createGain();
    rainGain.gain.value=0;rainSrc.connect(rainGain).connect(master);channels.rain=rainGain;
    rainEl.play().catch(()=>{});
    sync();
  }
  const CHANNEL_HEADROOM={cabin:.55,rain:1.15}; // Regen & Gewitter darf deutlich lauter werden als das Kabinenrauschen
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
  function wake(){ensure();if(ctx.state==='suspended')ctx.resume().catch(()=>{});if(rainEl&&rainEl.paused)rainEl.play().catch(()=>{});sync();}
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
  $("soundBtn").setAttribute("aria-pressed",String(soundOn&&audioPrefs.enabled));
  $("soundLabel").textContent=soundOn&&audioPrefs.enabled?"Kabine an":"Kabine aus";
  $("soundIcon").textContent=soundOn&&audioPrefs.enabled?"🔊":"🔈";
  $("audioEnabled").checked=audioPrefs.enabled;
  for(const key of ['master','click','cabin','rain']){$('volume-'+key).value=audioPrefs[key];$('value-'+key).textContent=audioPrefs[key]+' %';}
}
function saveAudio(){store.set('audioMix',audioPrefs);store.set('sound',audioPrefs.cabin>0);ambience.sync();paintSound();}
$("soundBtn").addEventListener('click',()=>{audioPrefs.cabin=audioPrefs.cabin?0:35;if(audioPrefs.cabin)audioPrefs.enabled=true;ambience.wake();saveAudio();});
$("audioEnabled").addEventListener('change',e=>{audioPrefs.enabled=e.target.checked;ambience.wake();saveAudio();});
for(const key of ['master','click','cabin','rain'])$('volume-'+key).addEventListener('input',e=>{audioPrefs[key]=Number(e.target.value);ambience.wake();saveAudio();});
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
  $("passNo").textContent = "RL " + (100 + Math.floor(km/37)%800);
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

/* Flight canvas uses bundled world geometry, never remote tiles. */
let follow=true,thirdPerson=store.get('rearCamera',false),flightZoom=1,mapCenter=null,mapDrag=null;
let cachedFlightSize=[0,0],flightWidth=0,flightHeight=0;
const flightCanvas=$('flightCanvas'),fx=flightCanvas.getContext('2d');
function currentLocation(t){
  if(!flight)return [0,0];
  const a=AIRPORTS.find(x=>x.code===flight.from),b=AIRPORTS.find(x=>x.code===flight.to);
  return slerp(a,b,t);
}
function paintFollow(){$('followBtn').textContent=follow?'Folgt dem Flug':'Flugzeug folgen';$('followBtn').setAttribute('aria-pressed',String(follow));}
function setupFlightLayers(){follow=true;mapCenter=null;flightZoom=1;paintFollow();paintCamera();drawFlight();}
function paintCamera(){
  $('map').classList.toggle('is-rear',thirdPerson);$('cameraBtn').textContent=thirdPerson?'Kartenansicht':'Rückansicht';
  $('cameraBtn').setAttribute('aria-pressed',String(thirdPerson));
  $('followBtn').hidden=thirdPerson;
}
$('cameraBtn').addEventListener('click',()=>{thirdPerson=!thirdPerson;store.set('rearCamera',thirdPerson);paintCamera();drawFlight();});
$('zoomIn').addEventListener('click',()=>{flightZoom=Math.min(4,flightZoom*1.3);drawFlight();});
$('zoomOut').addEventListener('click',()=>{flightZoom=Math.max(.35,flightZoom/1.3);drawFlight();});
$('followBtn').addEventListener('click',()=>{follow=!follow;paintFollow();drawFlight();});
flightCanvas.addEventListener('pointerdown',e=>{if(thirdPerson)return;follow=false;paintFollow();mapCenter=mapCenter||currentLocation(progress().t);mapDrag=[e.clientX,e.clientY];flightCanvas.setPointerCapture(e.pointerId);});
flightCanvas.addEventListener('pointermove',e=>{
  if(!mapDrag)return;const scale=flightWidth*.75*flightZoom;
  mapCenter[0]-=(e.clientX-mapDrag[0])/scale*180/Math.PI;mapCenter[1]=Math.max(-80,Math.min(80,mapCenter[1]+(e.clientY-mapDrag[1])/scale*180/Math.PI));
  mapDrag=[e.clientX,e.clientY];drawFlight();
});
['pointerup','pointercancel'].forEach(type=>flightCanvas.addEventListener(type,()=>{mapDrag=null;}));
function drawFlight(){
  if(!flight||!$('view-flight').classList.contains('is-active')||!window.d3)return;
  const rect=$('map').getBoundingClientRect(),w=rect.width,h=rect.height,d=Math.min(devicePixelRatio||1,2);
  if(w<1||h<1)return;flightWidth=w;flightHeight=h;
  if(cachedFlightSize[0]!==w*d||cachedFlightSize[1]!==h*d){flightCanvas.width=w*d;flightCanvas.height=h*d;cachedFlightSize=[w*d,h*d];}
  fx.setTransform(d,0,0,d,0,0);fx.clearRect(0,0,w,h);
  const t=progress().t,loc=currentLocation(t);if(follow||thirdPerson||!mapCenter)mapCenter=loc.slice();
  const pr=d3.geoMercator().rotate([-mapCenter[0],0]).center([0,mapCenter[1]]).translate([w/2,h/2]).scale(w*.75*flightZoom);
  const path=d3.geoPath(pr,fx),a=AIRPORTS.find(x=>x.code===flight.from),b=AIRPORTS.find(x=>x.code===flight.to);
  const prev=currentLocation(Math.max(0,t-.0001)),next=currentLocation(Math.min(1,t+.0001)),p1=pr(prev),p2=pr(next);
  const heading=Math.atan2(p2[1]-p1[1],p2[0]-p1[0])+Math.PI/2;
  fx.fillStyle=themeColors.oceanB;fx.fillRect(0,0,w,h);fx.save();
  if(thirdPerson){fx.translate(w/2,h/2);fx.rotate(-heading);fx.translate(-w/2,-h/2);}
  if(landFeature){fx.beginPath();path(landFeature);fx.fillStyle=themeColors.land;fx.fill();fx.strokeStyle=themeColors.landLine;fx.lineWidth=.8;fx.stroke();}
  if(borderFeature){fx.beginPath();path(borderFeature);fx.strokeStyle=themeColors.landLine;fx.globalAlpha=.35;fx.lineWidth=.5;fx.stroke();fx.globalAlpha=1;}
  fx.beginPath();path({type:'LineString',coordinates:[[a.lon,a.lat],[b.lon,b.lat]]});fx.strokeStyle=themeColors.accentSoft;fx.lineWidth=2;fx.setLineDash([6,8]);fx.stroke();fx.setLineDash([]);
  fx.beginPath();path({type:'LineString',coordinates:[[a.lon,a.lat],loc]});fx.lineWidth=3;fx.stroke();
  if(!thirdPerson)for(const city of AIRPORTS){const p=pr([city.lon,city.lat]);if(p[0]<0||p[0]>w||p[1]<0||p[1]>h)continue;fx.fillStyle=themeColors.warm;fx.beginPath();fx.arc(p[0],p[1],2.5,0,Math.PI*2);fx.fill();fx.font='11px Segoe UI';fx.fillStyle=themeColors.text;fx.fillText(city.city,p[0]+7,p[1]-5);}
  fx.restore();
  if(!thirdPerson){
    const p=pr(loc);fx.save();fx.translate(p[0],p[1]);fx.rotate(heading);fx.shadowColor='#0008';fx.shadowBlur=12;
    const metal=fx.createLinearGradient(-10,0,10,0);metal.addColorStop(0,'#9eabc7');metal.addColorStop(.5,'#fff');metal.addColorStop(1,'#aebad1');fx.fillStyle=metal;
    fx.beginPath();fx.moveTo(0,-29);fx.bezierCurveTo(6,-24,5,-7,5,1);fx.lineTo(28,16);fx.lineTo(28,21);fx.lineTo(4,12);fx.lineTo(3,23);fx.lineTo(12,29);fx.lineTo(12,32);fx.lineTo(0,28);fx.lineTo(-12,32);fx.lineTo(-12,29);fx.lineTo(-3,23);fx.lineTo(-4,12);fx.lineTo(-28,21);fx.lineTo(-28,16);fx.lineTo(-5,1);fx.bezierCurveTo(-5,-7,-6,-24,0,-29);fx.fill();fx.restore();
  }
}
function flightFrame(){
  drawFlight();requestAnimationFrame(flightFrame);
}



/* ─────────────── Flugablauf ─────────────── */

function startFlight(){
  const km = Math.round(distanceKm(from,to)), min = durationFor(km);
  flight = { from:from.code, to:to.code, seat, km, min, started:Date.now(), pausedAt:null, pausedMs:0, turbo:false };
  store.set("flight", flight);
  $("hudRoute").textContent = `${from.city} → ${to.city}`;
  $("hudSeat").textContent = `Platz ${seat} · ${km.toLocaleString("de-DE")} km`;
  $("pauseBtn").textContent = "Pause"; $("turbo").checked = false;
  show("view-flight");
  setupFlightLayers();
  runTimer();
}

function progress(){
  const speed = flight.turbo ? 60 : 1;
  const now = flight.pausedAt || Date.now();
  const elapsed = (now - flight.started - flight.pausedMs) * speed;
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
  const earned = Math.round(t * creditsFor(flight.min, /[AD]$/.test(flight.seat)));
  $("hudEarned").textContent = `${earned} Credits gesammelt`;

  const loc=currentLocation(t);
  const over=nearestCity(loc[1],loc[0]);
  $("hudOver").textContent=over?`gerade über ${over.city}`:"";

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
});

$("abortBtn").addEventListener("click", ()=>{
  if(!flight) return;
  if(!confirm("Flug abbrechen? Die Credits dieser Session sind dann weg.")) return;
  clearInterval(timer); flight=null; store.del("flight");
  toast("Flug abgebrochen. Keine Credits gutgeschrieben.");
  show("view-map");
});

$("turbo").addEventListener("change", e => {
  if(!flight) return;
  const { elapsed } = progress();
  flight.turbo = e.target.checked;
  const speed = flight.turbo ? 60 : 1;
  flight.started = Date.now() - elapsed/speed;
  flight.pausedMs = 0;
  if(flight.pausedAt) flight.pausedAt = Date.now();
  store.set("flight", flight);
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

function buildShop(){
  const wrap=$("themes"); wrap.innerHTML="";
  THEMES.forEach(th => {
    const card=document.createElement("div");
    card.className = "theme-card" + (th.id===themeId ? " is-active" : "");
    card.innerHTML = `
      <div class="swatch" style="background:${th.swatch}">
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
    card.appendChild(btn);
    wrap.appendChild(card);
  });
}

$("openHangar").addEventListener("click", ()=>{ buildShop(); show("view-shop"); });
$("creditsPill").addEventListener("click", ()=>{ buildShop(); show("view-shop"); });
$("shopBack").addEventListener("click", ()=>show(flight?"view-flight":"view-map"));

/* ─────────────── Start ─────────────── */

window.addEventListener("resize", ()=>{ setupGlobe(); drawFlight(); });

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
    $("turbo").checked = !!saved.turbo;
    $("pauseBtn").textContent = saved.pausedAt ? "Weiterfliegen" : "Pause";
    show("view-flight");
    setupFlightLayers();
    if(progress().t>=1) land();
    else if(!saved.pausedAt) runTimer();
    else update();
  }
})();
