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
    //southern bc
        { id: 'sook', name: "Sook", coords: [48.3569, -123.7266], group: 'southernbc',url: null, image: "images/IMG_4046.webp"},
        { id: 'kitchenkodama', name: "Kitchen Kodama", coords: [48.85427660017365, -123.5006565720225], group: 'southernbc', url: null, image: "images/IMG_5477.webp"},
        { id: 'whistler', name: "Winter Olympic in Whister", coords: [50.1184, -122.9550], group: 'southernbc', url: null, image: "images/IMG_6191.webp"},


    //Cowichan
        { id: 'bcfdc', name: "BC Forest Discovery Centre", coords: [48.8021, -123.7152], group: 'cowichan',url: "https://bcforestdiscoverycentre.com", image: "images/IMG_4708.webp"},
        { id: 'bcfdc2', name: "Steam Train \"Shay\"", coords: [48.803200, -123.709277], group: 'cowichan',url: "https://bcforestdiscoverycentre.com", image: "images/IMG_5482.webp"},
        { id: 'maplebay', name: "Maple Bay", coords: [48.8166, -123.6094], group: 'cowichan',url: null, image: "images/IMG_4402.webp"},
        { id: 'cherrypoint', name: "Cherry Point", coords: [48.71, -123.5564], group: 'cowichan',url: null, image: "images/IMG_4425.webp"},
        { id: 'wetland', name: "A Wetland near Paldi", coords: [48.7956, -123.8697], group: 'cowichan',url: null, image: "images/IMG_4445.webp"},
        { id: 'chicemetry', name: "Chinese Cemetery", coords: [48.7936, -123.795], group: 'cowichan',url: null, image: "images/IMG_4460.webp"},
        { id: 'carinbush', name: "A Used Car", coords: [48.8034, -123.9501], group: 'cowichan',url: null, image: "images/IMG_4480.webp"},
        { id: 'paldi', name: "Sikh temple at Paldi", coords: [48.7912, -123.8553], group: 'cowichan',url: "https://www.cowichanvalleycitizen.com/community/paldi-sikh-temple-in-cowichan-celebrating-100-years-798784", image: "images/IMG_4483.webp"},
        { id: 'honeymoon', name: "Honeymoon Bay", coords: [48.8179, -124.17], group: 'cowichan',url: null, image: "images/IMG_4540.webp"},
        { id: 'dinerlkcow', name: "Diner at Lake Cowichan", coords: [48.8222, -124.057], group: 'cowichan',url: null, image: "images/IMG_4537.webp"},
        { id: 'chemainusbay', name: "Random Beach at Chemainus", coords: [48.9329, -123.726], group: 'cowichan',url: null, image: "images/IMG_4561.webp"},
        { id: 'bmferry', name: "Brentwood Mill Bay Ferry", coords: [48.5828, -123.483], group: 'cowichan',url: "https://www.bcferries.com/routes-fares/schedules/daily/BTW-MIL", image: "images/IMG_4659.webp"},
        { id: 'nanaimobay', name: "Nanaimo Bay", coords: [49.1661, -123.9347], group: 'cowichan',url: null, image: "images/IMG_5129.webp"},
        { id: 'butchartg', name: "Butchart Garden", coords: [48.5645, -123.4688], group: 'cowichan',url: null, image: "images/IMG_5288.webp"},
        { id: 'raptors', name: "Raptors Centre", coords: [48.8212, -123.6619], group: 'cowichan',url: "https://the-raptors.com/", image: "images/IMG_5361.webp"},
        { id: 'maplemt', name: "Maple Mountain", coords: [48.838909, -123.592767], group: 'cowichan',url: null, image: "images/IMG_5542.webp"},
        { id: 'waytogenoa', name: "Way Back from Genoa Bay", coords: [48.800149, -123.602115], group: 'cowichan',url: null, image: "images/IMG_5563.webp"},
        { id: 'thetisisland', name: "Monster on the Thetis Island", coords: [48.996986, -123.659086], group: 'cowichan',url: null, image: "images/IMG_5599.webp"},
        { id: 'thetisisland2', name: "Northmost Thetis Island", coords: [49.021084, -123.689545], group: 'cowichan',url: null, image: "images/IMG_5602.webp"},
        { id: 'shawniganlakepark', name: "Shawnigan Lake", coords: [48.641965, -123.632698], group: 'cowichan',url: null, image: "images/IMG_5624.webp"},
        { id: 'Rebel', name: "Rebel 500", coords: [48.658367, -123.560351], group: 'cowichan',url: null, image: "images/IMG_5715.webp"},


        //victoria
        { id: 'parliament', name: "Victoria Parliament", coords: [48.419937801660765, -123.37022764444416], group: 'victoria', url: null,image: "images/IMG_2794.webp" }, 
        { id: 'farray', name: "Fan Tan Alley", coords: [48.42899284705728, -123.3679163419745], group: 'victoria', url: null,image: "images/IMG_2796.webp" }, 
        { id: 'fmw', name: "Victoria Fisherman's Wharf", coords: [48.42313888238869, -123.38263088446769], group: 'victoria', url: "https://www.fishermanswharfvic.ca/",image: "images/IMG_2838.webp" }, 
        { id: 'thetis', name: "Thetis Lake", coords: [48.46922652946758, -123.46782840776324], group: 'victoria', url: null,image: "images/IMG_2859.webp" }, 
        { id: 'beaconhill', name: "Beacon Hill Park", coords: [48.413769202051206, -123.36490537016559], group: 'victoria', url: "https://www.victoria.ca/parks-recreation/parks-trails/our-parks/beacon-hill-park",image: "images/IMG_2895.webp" }, 
        { id: 'oakbay', name: "Night at Oak Bay", coords: [48.4247, -123.3067], group: 'victoria', url: null,image: "images/IMG_5353.webp" }, 
        { id: 'butchartg', name: "Butchart Garden (Sunken)", coords: [48.5645, -123.4688], group: 'victoria',url: "https://www.butchartgardens.com/", image: "images/IMG_5288.webp"},
        { id: 'gingerbread', name: "Ginger Clock", coords: [48.4206, -123.3725], group: 'victoria', url: null, image: "images/25042812.webp"},
        { id: 'stcecilia', name: "Cozy Coffy", coords: [48.4267, -123.3692], group: 'victoria', url: null, image: "images/25042813.webp"},
        { id: 'nightbike', name: "Night Bike Ride", coords: [48.406824, -123.348427], group: 'victoria', url: null, image: "images/IMG_5369.webp"},
        { id: 'biketobeach', name: "Bike to Beach", coords: [48.526357, -123.365069], group: 'victoria', url: null, image: "images/IMG_5558.webp"},
        { id: 'victoriabay', name: "Port of Victoria", coords: [48.420884, -123.370566], group: 'victoria', url: null, image: "images/IMG_5683.webp"},
        { id: 'fireup', name: "Fire Up!", coords: [48.4294, -123.3300], group: 'victoria', url: null, image: "images/IMG_6033.webp"},
        { id: 'rbcmuseum', name: "No Place to Homo (RBC Museum)", coords: [48.4200, -123.3674], group: 'victoria', url: null, image: "images/IMG_5961.webp"},



    //Vancouver
        { id: 'funnybayr', name: "Funny Bay?", coords: [49.2786, -123.1141], group: 'vancouver',url: "https://www.fannybayoysters.com/", image: "images/IMG_5298.webp"},
        { id: 'aquarium', name: "Aquarium", coords: [49.3005, -123.1309], group: 'vancouver',url: "https://www.vanaqua.org/", image: "images/IMG_5815.webp"},
        { id: 'moanth', name: "Museum of Anthropology", coords: [49.269127, -123.259181], group: 'vancouver',url: "https://moa.ubc.ca/", image: "images/IMG_5966.webp"},
        { id: 'japamex', name: "Ramen Burrito", coords: [49.2543, -123.1149], group: 'vancouver',url: "https://www.misotaco.ca/?gad_source=1&gbraid=0AAAAArCjgvkhvwQ6C6lrQwEF1bnPZ5eYg", image: "images/IMG_6177.webp"},


    //northern BC
        { id: 'elkintelkwa', name: "Elk in Telkwa", coords: [54.623420, -127.242979], group: 'nouthernbc',url: null, image: "images/IMG_6288.webp"},
        { id: 'shackpoutine', name: "Shack Food Truck in Smithers", coords: [54.781760, -127.166045], group: 'nouthernbc',url: null, image: "images/IMG_6290.webp"},
        { id: 'redchrissouthvalley', name: "Mountain from Red Chris Mine", coords: [57.696202, -129.752356], group: 'nouthernbc',url: null, image: "images/IMG_6330.webp"},
        { id: 'gitwangakbattlehill', name: "Gitwangak Battle Hill", coords: [55.120401, -128.015151], group: 'nouthernbc',url: null, image: "images/IMG_6368.webp"},
        { id: 'bearbonetelkwa', name: "Bear in Telkwa (I don't know the location)", coords: [54.628577, -127.224624], group: 'nouthernbc',url: null, image: "images/IMG_6417.webp"},
        { id: 'campingsitetelkwa', name: "Camp Site in Telkwa", coords: [54.6436, -127.2294], group: 'nouthernbc',url: null, image: "images/IMG_6429.webp"},
        { id: 'elkhouseton', name: "Can You Find Elk?", coords: [54.436896, -126.196896], group: 'nouthernbc',url: null, image: "images/IMG_6457.webp"},
        { id: 'tattogaresort', name: "Not Like Poisoness Water Tattoga Lake Resort", coords: [57.7109, -129.9925], group: 'nouthernbc',url: null, image: "images/IMG_6480.webp"},
        { id: 'honeymoonisland', name: "Honeymoon Island on Stuart Lake", coords: [54.499175, -124.389243], group: 'nouthernbc',url: null, image: "images/IMG_6543.webp"},
        { id: 'onlogs', name: "We're on a bridge", coords: [55.005062, -124.347864], group: 'nouthernbc',url: null, image: "images/IMG_6544.webp"},
        { id: 'redchris2', name: "Dropped by Heli", coords: [57.773036, -129.753621], group: 'nouthernbc',url: null, image: "images/IMG_6554.webp"},



    //pg    
        { id: 'parkpg', name: "Park in Prince George", coords: [53.9202, -122.7982], group: 'pg', url: null,image: "images/IMG_0208.webp" },
        { id: 'bearpg', name: "Bear in Prince George", coords: [53.8986, -122.7485], group: 'pg', url: null,image: "images/IMG_5340.webp" },
        { id: 'salmonrelease', name: "Salmon Baby Released", coords: [53.926330, -122.742049], group: 'pg', url: null,image: "images/IMG_6394.webp" },





    //tokyo
        { id: 'kokubunji', name: "My High School Days", coords: [35.7122, 139.4477], group: 'tokyo', url: "https://www.wikidata.org/wiki/Q11525427", image: "images/149.webp" },
        { id: 'eventskp', name: "Illumination at Showa", coords: [35.7066, 139.3973], group: 'tokyo', url: "https://www.showakinen-koen.jp/guide-english/",image: "images/045.webp" },
        { id: 'springtakao', name: "Spring at Mt.Takao", coords: [35.6251, 139.2437], group: 'tokyo', url: null,image: "images/087.webp" },
        { id: 'nhaneda', name: "Flight from Haneda", coords: [35.5505, 139.7878], group: 'tokyo', url: "https://tokyo-haneda.com/en/flight/flightInfo_int.html",image: "images/201.webp" },
        { id: 'nmtokyo', name: "National Museum Aztec Evet", coords: [35.71881751769, 139.77651367044984], group: 'tokyo', url: "https://www.tnm.jp/?lang=en",image: "images/IMG_2642.webp" }, 
        { id: 'shinagawaaq?', name: "Aquarium in Shinagawa", coords: [35.588537046764245, 139.73752215397306], group: 'tokyo', url: null,image: "images/IMG_2654.webp" }, 
        { id: 'santry', name: "Beer Factory", coords: [35.66026751379704, 139.47821776746903], group: 'tokyo', url: null,image: "images/IMG_2708.webp" }, 
        { id: 'miyake', name: "Vacation in Miyake", coords: [34.07, 139.5234], group: 'tokyo', url: null,image: "images/114.webp" },
        { id: 'rainbowbridge', name: "Under the bridge", coords: [35.6372, 139.7637], group: 'tokyo', url: null, image: "images/25042802.webp"},
        { id: 'hitotsubashi', name: "Building at Hitotsubashi Uni", coords: [35.6942, 139.4452], group: 'tokyo', url: "https://www.hit-u.ac.jp/eng/", image: "images/25042803.webp"},
        { id: 'kozuisland', name: "My Lock Screen (Kozu)", coords: [34.2036, 139.1332], group: 'tokyo', url: null, image: "images/25042804.webp"},
        { id: 'disneysea', name: "Disney Lake", coords: [35.6253, 139.8863], group: 'tokyo', url: "https://www.google.com/maps/@35.6252786,139.8861614,3a,75y,189.34h,88.27t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIC4r_3GjgE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAIMqDu0IspfisE3Bu6gpx8WrJbTa9z2orNKdJv1SUMN0IXyiN_VvxFJXQMOqjU3TfBZ3y7vVIOokI-9hMxllczX1HW_GgOCZ7QoJPETqp8cW413oDU8_1ZZlhMkvZ9hsFv_jQBUF3HeY-A%3Dw900-h600-k-no-pi1.7325475972657358-ya189.3408474307626-ro0-fo100!7i2508!8i1254?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D", image: "images/25042805.webp"},
        { id: 'tokyotower', name: "Tokyo Tower", coords: [35.6563, 139.7592], group: 'tokyo', url: null, image: "images/25042806.webp"},
        { id: 'tokyostation', name: "Tokyo Station", coords: [35.6816, 139.7653], group: 'tokyo', url: null, image: "images/25042808.webp"},
        { id: 'disneyland', name: "Disney Land", coords: [35.633, 139.8801], group: 'tokyo', url: null, image: "images/25042814.webp"},

        

    //Kanagawa
        { id: 'swing', name: "Falling off from the Swing", coords: [35.441, 139.4606], group: 'kanagawa', url: null, image: "images/IMG_3673.webp"},
        { id: 'sunrise', name: "Common Place to See the Sun Rise", coords: [35.4379, 139.4518], group: 'kanagawa', url: null, image: "images/IMG_3942.webp"},
        { id: 'foodsample', name: "Food Sample Shop at Red Bricks (closed)", coords: [35.4523, 139.6429], group: 'kanagawa', url: null, image: "images/498.webp"},
        { id: 'landmarktower', name: "Yokohama Landmark Tower from roller coaster", coords: [35.4556, 139.6367], group: 'kanagawa', url: null, image: "images/511.webp"},
    
    //Japan 
        { id: 'kamuimisakaglider', name: "Paraglider Exp", coords: [35.5811, 138.7546], group: 'japan', url: null, image: "images/527.webp"},
        { id: 'centergasshuku', name: "Somewhere in Kosuge", coords: [35.7602, 138.9401], group: 'japan', url: null, image: "images/25042801.webp"},
        
    //Kanto
        { id: 'hotelchiba', name: "Hotel in Chiba", coords: [35.0902, 139.8443], group: 'kanto', url: null, image: "images/25042815.webp"},
        { id: 'fishchiba', name: "Fish at Miyazo", coords: [35.1145, 139.8309], group: 'kanto', url: null, image: "images/25042816.webp"},
        { id: 'mttsukuba', name: "Shrine at Mt Tsukuba", coords: [36.2132, 140.1013], group: 'kanto', url: null, image: "images/25042817.webp"},
        { id: 'tsukubacable', name: "Cable Car at Mt.Tsukuba", coords: [36.2147, 140.1002], group: 'kanto', url: null, image: "images/25042818.webp"},
        { id: 'tsukubasumit', name: "Mt Tsukuba (Nyotaisan)", coords: [36.2254, 140.1067], group: 'kanto', url: null, image: "images/25042819.webp"},

    //kyoto
        { id: 'ktower', name: "Kyoto Tower from the station", coords: [34.9866, 135.7603], group: 'kyoto', url: "https://www.kyoto-tower.jp/en/",image: "images/616.webp" },
        { id: 'Ninnaji', name: "Ninnnaji?", coords: [35.0099, 135.7702], group: 'kyoto', url: "https://ninnaji.jp/en/",image: "images/639.webp" },
        { id: 'kiyomizu', name: "Kiyomizudera", coords: [34.99478097309438, 135.78474008546257], group: 'kyoto', url: "https://www.kiyomizudera.or.jp/en/",image: "images/610.webp" },
        { id: 'kinkaku', name: "Kinkaku", coords: [35.03948416885166, 135.72930746929404], group: 'kyoto', url: "https://www.shokoku-ji.jp/kinkakuji/",image: "images/616.webp" },
    //fuji
        { id: 'fuji2023', name: "Mt.Fuji", coords: [35.37256751938174, 138.7398708424644], group: 'fuji', url: "https://www.fujisan-climb.jp/en/",image: "images/IMG_2567.webp" }, 
        { id: 'yamanaka', name: "Lake Kawaguchi", coords: [35.52285947957453, 138.753864500151], group: 'fuji', url: null,image: "images/IMG_2688.webp" }, 
        { id: 'fuji2011?', name: "Mt.Fuji and an Old Guy (I hope he is doing well)", coords: [35.377, 138.745], group: 'fuji', url: null,image: "images/IMG_5356.webp" }, 
    //hokuriku
        { id: 'kagaya', name: "Kagaya Hotel", coords: [37.0902, 136.9144], group: 'noto', url: "https://www.kagaya.co.jp/en/",image: "images/IMG_1666.webp" },
        { id: 'hananoren', name: "Hanayome Noren ", coords: [37.07731167115873, 136.9244441834381], group: 'noto', url: "https://www.westjr.co.jp/global/en/train/hanayomenoren/",image: "images/IMG_1611.webp" },
        { id: 'mawakihrt', name: "Mawaki Heritage ", coords: [37.30570331178062, 137.20687275001785], group: 'noto', url: null,image: "images/IMG_1684.webp" },
        { id: 'wakutama', name: "Mr.Wakutama ", coords: [37.086946676906685, 136.92469328003526], group: 'noto', url: null,image: "images/IMG_1783.webp" },
        { id: 'kurobe', name: "Kurobe Dam", coords: [36.566778569842725, 137.6621593776124], group: 'hokuriku', url: "https://www.kurobe-dam.com/",image: "images/IMG_1820.webp" },
        { id: 'utsukushigahara', name: "Utsukushigahara", coords: [36.24177679899555, 138.093271200977], group: 'hokuriku', url: null,image: "images/IMG_1888.webp" },
        { id: 'yoritomo', name: "Yase Clif - Hiding Spot (Historical)", coords: [37.2095, 136.6831], group: 'noto', url: null,image: "images/IMG_1933.webp" },
        { id: 'longbench', name: "Longest Bench in the world", coords: [37.14979035357368, 136.71076798525903], group: 'noto', url: null,image: "images/IMG_1943.webp" },
        { id: 'hatago', name: "Hatago Rock", coords: [37.12398498307547, 136.72734363187513], group: 'noto', url: null,image: "images/IMG_1951.webp" },
        { id: 'Ganmon', name: "Ganmon", coords: [37.12398498307547, 136.72734363187513], group: 'noto', url: null,image: "images/IMG_1968.webp" },
        { id: 'nino', name: "Grill Nino", coords: [36.89680878070846, 136.78279582788295], group: 'noto', url: null,image: "images/IMG_1991.webp" },
        { id: 'chiri', name: "Chirihama", coords: [36.84052682189339, 136.74875488519356], group: 'noto', url: null,image: "images/IMG_2016.webp" },
        { id: 'kanazawajo', name: "Kanazawa Castle", coords: [36.566326879229116, 136.6583773703312], group: 'hokuriku', url: "https://www.pref.ishikawa.jp/siro-niwa/kanazawajou/e/",image: "images/IMG_2465.webp" },
        { id: 'twentyone', name: "21 Century Museum", coords: [36.561359869763436, 136.65828348298137], group: 'hokuriku', url: "https://www.kanazawa21.jp/en/",image: "images/IMG_2110.webp" },
        { id: 'notojimaaqua', name: "Notojima Aquarium", coords: [37.149613104090115, 136.982251796948], group: 'noto', url: "https://www.notoaqua.jp/global/english/",image: "images/IMG_2187.webp" },
        { id: 'arai', name: "Village (World Heritage Site)", coords: [36.43536501796552, 136.86817801829378], group: 'hokuriku', url: null,image: "images/IMG_2215.webp" },
        { id: 'shirakawa', name: "Shirakawa Village", coords: [36.25809055835815, 136.90619691583728], group: 'hokuriku', url: "https://www.vill.shirakawa.lg.jp/en/",image: "images/IMG_2230.webp" },
        { id: 'summerfst', name: "Nanao Park Fest", coords: [37.048510332611315, 136.96921693209242], group: 'noto', url: null,image: "images/IMG_2282.webp" },
        { id: 'sosogi', name: "No people in Sosogi", coords: [37.460587196204486, 137.0790355515116], group: 'noto', url: null,image: "images/IMG_2312.webp" },
        { id: 'fikuidinasaurs', name: "Fukui Dinosaurs", coords: [36.08252080897514, 136.50656893865025], group: 'hokuriku', url: "https://www.dinosaur.pref.fukui.jp/en/",image: "images/IMG_2386.webp" },
        { id: 'tojinbo', name: "Tojinbo", coords: [36.23778271295443, 136.12548667653252], group: 'hokuriku', url: null,image: "images/IMG_2441.webp" },
        { id: 'nkanazawa', name: "Night in Kanazawa", coords: [36.572302942012975, 136.6637161321563], group: 'hokuriku', url: null,image: "images/IMG_2456.webp" },
        { id: 'nkanazawa2', name: "Night in Kanazawa2", coords: [36.565420474517, 136.66209505509457], group: 'hokuriku', url: null,image: "images/IMG_2463.webp" },
        { id: 'sumerfest2023', name: "Fireworks in Kanazawa", coords: [36.579660830920666, 136.65590645246326], group: 'hokuriku', url: null,image: "images/IMG_2511.webp" },
        { id: 'matsumoto', name: "Matsumoto Castle", coords: [36.2389, 137.9681], group: 'hokuriku', url: null, image: "images/25042810.webp"},
        { id: 'naebakagura', name: "Naeba Skiiii", coords: [36.8424, 138.748], group: 'hokuriku', url: null, image: "images/25042809.webp"},

        //australia, Sydney
        { id: 'gosford', name: "Language Exchange Program in High School", coords: [-33.4171, 151.3414], group: 'gosford', url: "https://gosford-h.schools.nsw.gov.au/",image: "images/421.webp" },
        { id: 'sydney', name: "Opera House Over the Sea", coords: [-33.8600, 151.2214], group: 'sydney', url: null,image: "images/352.webp" },
        { id: 'austrarozoo', name: "Zoo in Australia", coords: [-33.4185, 151.2772], group: 'gosford', url: "https://www.reptilepark.com.au/",image: "images/272.webp" },
        { id: 'bluerocks', name: "Three Sisters: Blue Mounatians, Australia", coords: [-33.73275049398853, 150.3119492037223], group: 'australia', url: null,image: "images/343.webp" },
        { id: 'raliangrafiti', name: "Graffitti in Sydney (not now)", coords: [-33.8613, 151.2131], group: 'sydney', url: null,image: "images/378.webp" },
        { id: 'musesyd', name: "Museum in Sydney", coords: [-33.8744, 151.2133], group: 'sydney', url: "https://australian.museum/",image: "images/388.webp" },
        { id: 'charchsyd', name: "Cathedral in Sydney", coords: [-33.8713, 151.2133], group: 'sydney', url: "https://stmaryscathedral.org.au/",image: "images/404.webp" },
        { id: 'george', name: "George St. Construction", coords: [-33.8729, 151.2071], group: 'sydney', url: null, image: "images/25042807.webp"},


    //seattle
        { id: 'gasworks', name: "Gas Works Park", coords: [47.6455, -122.335], group: 'seattle', url: null,image: "images/IMG_3305.webp" },
        { id: 'troll', name: "Fremont Troll", coords: [47.651, -122.3472], group: 'seattle', url: null,image: "images/IMG_3251.webp" }, 
        { id: 'statue', name: "Lenin", coords: [47.6513, -122.3509], group: 'seattle', url: null,image: "images/IMG_3255.webp" }, 
        { id: 'sdinasour', name: "Dinosaur", coords: [47.6505, -122.3548], group: 'seattle', url: null,image: "images/IMG_3262.webp" }, 
        { id: 'fbridge', name: "Fremount Bridge", coords: [47.6482, -122.3498], group: 'seattle', url: null,image: "images/IMG_3266.webp" }, 
        { id: 'sberlin', name: "Berlin Wall", coords: [47.6494, -122.3475], group: 'seattle', url: null,image: "images/IMG_3273.webp" }, 
        { id: 'brewery', name: "Fremont Brewery", coords: [47.6492, -122.3445], group: 'seattle', url: null,image: "images/IMG_3276.webp" }, 
        { id: 'pub', name: "Pacific Inn Pub - A nice guy recommended", coords: [47.6496, -122.3429], group: 'seattle', url: "https://www.pacinnpub.com/",image: "images/IMG_3287.webp" }, 
        { id: 'uwlibrayr', name: "Library in UW", coords: [47.6561, -122.3091], group: 'seattle', url: "https://www.washington.edu/",image: "images/IMG_3291.webp" }, 
        { id: 'stbseattle', name: "Star Starbucks", coords: [47.614, -122.3283], group: 'seattle', url: "https://www.starbucksreserve.com/menus/seattle-roastery-main-bar-menu",image: "images/IMG_3329.webp" }, 
        { id: 'dicks', name: "Dicks", coords: [47.6234, -122.3564], group: 'seattle', url: null,image: "images/IMG_3325.webp" }, 
        { id: 'sphere', name: "Spheres", coords: [47.6157, -122.3394], group: 'seattle', url: "https://www.seattlespheres.com/",image: "images/IMG_3356.webp" }, 
        { id: 'fstb', name: "First Starbucks", coords: [47.61, -122.3426], group: 'seattle', url: null,image: "images/IMG_3362.webp" }, 
        { id: 'gwall', name: "Pike Place Market", coords: [49.0746, -122.1407], group: 'seattle', url: "https://www.pikeplacemarket.org/",image: "images/IMG_4191.webp" }, 
    
    //orland
        { id: 'dws', name: "Sky of Disney World", coords: [28.4186, -81.5814], group: 'orland', url: null,image: "images/011.webp" }, 
    //LA    
        { id: 'lsairport', name: "Airport", coords: [33.9448, -118.408], group: 'california', url: null,image: "images/25042811.webp" }, 

        
    
    ];
    
    //List of groups above
    const region_categories = [ 
        'victoria', 
        'vancouver',
        'bc',
        'southernbc',
        'cowichan',
        'nouthernbc',
        'pg',
        'japan',
        'kanto',
        'kanagawa',
        'tokyo',
        'kyoto',
        'hokuriku',
        'noto',
        'fuji',
        'australia',
        'gosford',
        'sydney',
        'seattle',
        'orland',
        'california'
    ];
    
    const regions = [
        {//World View
            id: 'world',
            zoom:[20, 0], 
            size:2
        },
        {//Canada
            id:'canada',
            zoom:[58, -110],
            size:4
        },{//BC
            id: 'bc',
            zoom:[52.3488, -122.7393],
            size:6
        },{//BC
            id: 'cowichan',
            zoom:[48.7785, -123.7074],
            size:11
        },{//southern BC
            id: 'southernbc',
            zoom:[50.205, -122.1617],
            size:7
        },{//Victoria
            id: 'victoria',
            zoom:[48.4503, -123.3433],
            size:13
        },{//Vancouver
            id: 'vancouver',
            zoom:[49.2449, -123.1142],
            size:12
        },{//nouthern BC
            id: 'nouthernbc',
            zoom:[56.450, -125.067],
            size:6
        },{//Prince George
            id:'pg',
            zoom:[53.9102, -122.7713],
            size:14
        },
    
        {//Japan
            id: 'japan',
            zoom:[35.9602, 137.8564],
            size:5
        },{//Hokuriku
            id:'hokuriku',
            zoom:[36.8, 137.42],
            size:9
        },{//Noto
            id:'noto',
            zoom:[37.1461, 136.8967],
            size:10
        },{//Kanto
            id: 'kanto',
            zoom:[35.7028, 139.5909],
            size:9
        },{//Tokyo
            id: 'tokyo',
            zoom:[35.7028, 139.5909],
            size:11
        },{//Kanagawa
            id: 'kanagawa',
            zoom:[35.4154, 139.4241],
            size:11
        },{//Kyoto
            id: 'kyoto',
            zoom:[35.0083, 135.7497],
            size:13
        },{//Fuji
            id: 'fuji',
            zoom:[35.3821, 138.7735],
            size:11
        },
    
        {//Australia
            id:'australia',
            zoom:[-25.7207, 133.5259],
            size:5
        },{//New South Wales
            id:'eastern nsw',
            zoom:[-33.598, 150.8348],
            size:10
        },{//Sydney
            id:'sydney',
            zoom:[-33.8721, 151.2112],
            size:15
        },{//Gosford
            id:'gosford',
            zoom:[-33.417, 151.3446],
            size:13
        },
    
        {//USA
            id: 'usa',
            zoom:[39.8423, -97.9019],
            size: 5
        },{//seattle
            id: 'seattle',
            zoom:[47.6011, -122.3313],
            size: 12
        },{//orland
            id: 'orland',
            zoom:[28.3736, -81.5745],
            size: 13
        },{//california
            id: 'california',
            zoom:[36.7384, -117.9822],
            size: 7
        }
        
    ];
    
    

export { points, region_categories, regions };