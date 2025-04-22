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
    { id: 'kyoto', name: "Kyoto Travel", coords: [35.0099, 135.7702], group: 'kyoto', url: null,image: "images/639.webp" },
    { id: 'kagaya', name: "Kagaya Hotel", coords: [37.0902, 136.9144], group: 'kyoto', url: "https://www.kagaya.co.jp/en/",image: "images/IMG_1666.webp" },
    { id: 'miyake', name: "Vacation in Miyake", coords: [33.8659, 139.606], group: 'tisland', url: null,image: "images/114.webp" },
    { id: 'gasworks', name: "Gas Works Park", coords: [47.6455, -122.335], group: 'bc', url: null,image: "images/IMG_3305.webp" },
    { id: 'parkpg', name: "Park in Prince George", coords: [53.9202, -122.7982], group: 'bc', url: null,image: "images/IMG_0208.webp" },
    { id: 'bearpg', name: "Bear in Prince George", coords: [53.8986, -122.7485], group: 'bc', url: null,image: "images/IMG_5340.webp" }
];

