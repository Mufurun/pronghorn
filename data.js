/* 
points stores all the datapoints on the map
    id: used for the firebase storage
    name: shown on the popup of the map
    coords: the point on the map
    group: group is based on my travel history
    url: give url if there is 
    image: pic of the location
*/
const points = [

    { id: 'bcfdc', name: "BC Forest Discovery Centre", coords: [48.8021, -123.7152], group: 'bc',url: "https://bcforestdiscoverycentre.com", image: "images/IMG_4708.webp"},
    { id: 'kokubunji', name: "My High School Days", coords: [35.7122, 139.4477], group: 'tokyo', url: "https://www.wikidata.org/wiki/Q11525427", image: "images/149.webp" },
    { id: 'gosford', name: "Language Exchange Program in High School", coords: [-33.4171, 151.3414], group: 'australia', url: "https://gosford-h.schools.nsw.gov.au/",image: "images/421.webp" },
    { id: 'sydney', name: "Opera House Over the Sea", coords: [-33.8600, 151.2214], group: 'australia', url: null,image: "images/352.webp" },
    { id: 'Ninnaji', name: "Kyoto Travel", coords: [35.0099, 135.7702], group: 'kyoto', url: null,image: "images/639.webp" },
    { id: 'kagaya', name: "Kagaya Hotel", coords: [37.0902, 136.9144], group: 'hokuriku', url: "https://www.kagaya.co.jp/en/",image: "images/IMG_1666.webp" },
    { id: 'miyake', name: "Vacation in Miyake", coords: [33.8659, 139.606], group: 'tisland', url: null,image: "images/114.webp" },
    { id: 'gasworks', name: "Gas Works Park", coords: [47.6455, -122.335], group: 'seattle', url: null,image: "images/IMG_3305.webp" },
    { id: 'parkpg', name: "Park in Prince George", coords: [53.9202, -122.7982], group: 'bc', url: null,image: "images/IMG_0208.webp" },
    { id: 'bearpg', name: "Bear in Prince George", coords: [53.8986, -122.7485], group: 'bc', url: null,image: "images/IMG_5340.webp" },
//25-4-22
    { id: 'dws', name: "Sky of Disney World", coords: [28.4186, -81.5814], group: 'hl', url: null,image: "images/011.webp" }, // add to the layers
    { id: 'eventskp', name: "ilumination at Showa", coords: [35.7066, 139.3973], group: 'tokyo', url: null,image: "images/045.webp" },
    { id: 'springtakao', name: "Spring at Mt.Takao", coords: [35.6251, 139.2437], group: 'tokyo', url: null,image: "images/087.webp" },
    { id: 'nhaneda', name: "Flight from Haneda", coords: [35.5505, 139.7878], group: 'tokyo', url: null,image: "images/201.webp" },
    { id: 'austrarozoo', name: "Zoo in Australia", coords: [-33.4185, 151.2772], group: 'australia', url: null,image: "images/272.webp" },
    { id: 'bluerocks', name: "Three Sisters: Blue Mounatians, Australia", coords: [-33.73275049398853, 150.3119492037223], group: 'australia', url: null,image: "images/343.webp" },
    { id: 'raliangrafiti', name: "Grafiti in Sydney (not now)", coords: [-33.8613, 151.2131], group: 'australia', url: null,image: "images/378.webp" },
    { id: 'musesyd', name: "Museum in Sydney", coords: [-33.8744, 151.2133], group: 'australia', url: null,image: "images/388.webp" },
    { id: 'charchsyd', name: "Cathedral in Sydney", coords: [-33.8713, 151.2133], group: 'australia', url: null,image: "images/404.webp" },
    { id: 'kiyomizu', name: "Kiyomizudera", coords: [34.99478097309438, 135.78474008546257], group: 'kyoto', url: null,image: "images/610.webp" },
    { id: 'kinkaku', name: "Kinkaku", coords: [35.03948416885166, 135.72930746929404], group: 'kyoto', url: null,image: "images/616.webp" },

{ id: 'hananoren', name: "Hanayome Noren ", coords: [37.07731167115873, 136.9244441834381], group: 'hokuriku', url: null,image: "images/IMG_1611.webp" },
{ id: 'mawakihrt', name: "Mawaki Heritage ", coords: [37.30570331178062, 137.20687275001785], group: 'hokuriku', url: null,image: "images/IMG_1684.webp" },
{ id: 'wakutama', name: "Mr.Wakutama ", coords: [37.086946676906685, 136.92469328003526], group: 'hokuriku', url: null,image: "images/IMG_1783.webp" },
{ id: 'kurobe', name: "Kurobe Dam", coords: [36.566778569842725, 137.6621593776124], group: 'hokuriku', url: null,image: "images/IMG_1820.webp" },
{ id: 'utsukushigahara', name: "Utsukushigahara", coords: [36.24177679899555, 138.093271200977], group: 'hokuriku', url: null,image: "images/IMG_1888.webp" },
{ id: 'yoritomo', name: "Yase Clif - Hiding Spot (Historical)", coords: [37.2095, 136.6831], group: 'hokuriku', url: null,image: "images/IMG_1933.webp" },
{ id: 'longbench', name: "Longest Bench in the world", coords: [37.14979035357368, 136.71076798525903], group: 'hokuriku', url: null,image: "images/IMG_1943.webp" },
{ id: 'hatago', name: "Hatago Rock", coords: [37.12398498307547, 136.72734363187513], group: 'hokuriku', url: null,image: "images/IMG_1951.webp" },
{ id: 'Ganmon', name: "Ganmon", coords: [37.12398498307547, 136.72734363187513], group: 'hokuriku', url: null,image: "images/IMG_1968.webp" },
{ id: 'nino', name: "Grill Nino", coords: [36.89680878070846, 136.78279582788295], group: 'hokuriku', url: null,image: "images/IMG_1991.webp" },
{ id: 'chiri', name: "Chirihama", coords: [36.84052682189339, 136.74875488519356], group: 'hokuriku', url: null,image: "images/IMG_2016.webp" },
{ id: 'kanazawajo', name: "Kanazawa Castle", coords: [36.566326879229116, 136.6583773703312], group: 'hokuriku', url: null,image: "images/IMG_2465.webp" },
{ id: 'twentyone', name: "21 Century Museum", coords: [36.561359869763436, 136.65828348298137], group: 'hokuriku', url: null,image: "images/IMG_2110.webp" },
{ id: 'notojimaaqua', name: "Notojima Aquarium", coords: [37.149613104090115, 136.982251796948], group: 'hokuriku', url: null,image: "images/IMG_2187.webp" },
{ id: 'arai', name: "Village (World Heritage Site)", coords: [36.43536501796552, 136.86817801829378], group: 'hokuriku', url: null,image: "images/IMG_2215.webp" },
{ id: 'shirakawa', name: "Shirakawa Village", coords: [36.25809055835815, 136.90619691583728], group: 'hokuriku', url: null,image: "images/IMG_2230.webp" },
{ id: 'summerfst', name: "Nanao Park Fest", coords: [37.048510332611315, 136.96921693209242], group: 'hokuriku', url: null,image: "images/IMG_2282.webp" },
{ id: 'sosogi', name: "No people in Sosogi", coords: [37.460587196204486, 137.0790355515116], group: 'hokuriku', url: null,image: "images/IMG_2313.webp" },
{ id: 'fikuidinasaurs', name: "Fukui Dinosaurs", coords: [36.08252080897514, 136.50656893865025], group: 'hokuriku', url: null,image: "images/IMG_2386.webp" },
{ id: 'tojinbo', name: "Tojinbo", coords: [36.23778271295443, 136.12548667653252], group: 'hokuriku', url: null,image: "images/IMG_2441.webp" },
{ id: 'nkanazawa', name: "Night in Kanazawa", coords: [36.572302942012975, 136.6637161321563], group: 'hokuriku', url: null,image: "images/IMG_2456.webp" },
{ id: 'nkanazawa2', name: "Night in Kanazawa2", coords: [36.565420474517, 136.66209505509457], group: 'hokuriku', url: null,image: "images/IMG_2463.webp" },
{ id: 'sumerfest2023', name: "Fireworks in Kanazawa", coords: [36.579660830920666, 136.65590645246326], group: 'hokuriku', url: null,image: "images/IMG_2511.webp" },
{ id: 'fuji2023', name: "Mt.Fuji", coords: [35.37256751938174, 138.7398708424644], group: 'fuji', url: null,image: "images/IMG_2567.webp" }, 
{ id: 'yamanaka', name: "Lake Yamanaka", coords: [35.42702841260836, 138.8729306847417], group: 'fuji', url: null,image: "images/IMG_2688.webp" }, 
{ id: 'fuji2011?', name: "Mt.Fuji and old guy (I hope he is doing well)", coords: [35.42702841260836, 138.8729306847417], group: 'fuji', url: null,image: null }, 
{ id: 'nmtokyo', name: "National Museum Astec Evet", coords: [35.71881751769, 139.77651367044984], group: 'tokyo', url: null,image: "images/IMG_2642.webp" }, 
{ id: 'shinagawaaq?', name: "Aquarium in Shinagawa", coords: [35.588537046764245, 139.73752215397306], group: 'tokyo', url: null,image: "images/IMG_2654.webp" }, 
{ id: 'santry', name: "Beer Factory", coords: [35.66026751379704, 139.47821776746903], group: 'tokyo', url: null,image: "images/IMG_2708.webp" }, 
{ id: 'parliament', name: "Victoria Parliament", coords: [48.419937801660765, -123.37022764444416], group: 'victoria', url: null,image: "images/IMG_2794.webp" }, 
{ id: 'farray', name: "Fan Tan Alley", coords: [48.42899284705728, -123.3679163419745], group: 'victoria', url: null,image: "images/IMG_2796.webp" }, 
{ id: 'fmw', name: "Victoria Fisherman's Wharf", coords: [48.42313888238869, -123.38263088446769], group: 'victoria', url: null,image: "images/IMG_2838.webp" }, 
{ id: 'thetis', name: "Thetis Lake", coords: [48.46922652946758, -123.46782840776324], group: 'victoria', url: null,image: "images/IMG_2859.webp" }, 
{ id: 'beaconhill', name: "Beacon Hill Park", coords: [48.413769202051206, -123.36490537016559], group: 'victoria', url: null,image: "images/IMG_2895.webp" }, 

//{ id: 'statue', name: "Great Stature", coords: [], group: 'seattle', url: null,image: null }, 


];

