// Categorie Woordenlijsten voor Linko
// Deze lijsten helpen bij het valideren of een woord bij een categorie past

const categoryWords = {
    'Dieren': new Set([
        'aap', 'aalbes', 'aal', 'adelaar', 'alligator', 'alpaca', 'anaconda', 'anakonda', 'anemoon', 'antilope',
        'arend', 'armadillo', 'baboon', 'baars', 'baarskop', 'beer', 'biber', 'bij', 'bison', 'blauwalg',
        'boa', 'bok', 'boomkikker', 'buffel', 'capibara', 'capybara', 'cheetah', 'chimpansee', 'chinchilla', 'coyote',
        'das', 'dier', 'dodo', 'dolfijn', 'duif', 'duiker', 'eekhoorn', 'egel', 'ekster', 'eland',
        'emoe', 'ezel', 'fazant', 'flamingo', 'fret', 'gazelle', 'geit', 'gier', 'giraffe', 'gnoe', 'gorilla', 'haai',
        'hagedis', 'hamster', 'haring', 'havik', 'hond', 'hyena', 'ibis', 'ijsbeer', 'impala', 'jaguar',
        'kalf', 'kameel', 'kangaroo', 'kangoeroe', 'kat', 'kever', 'kip', 'kikker', 'koe', 'koala',
        'koekoek', 'kolibrie', 'konijn', 'krab', 'kreeft', 'krokodil', 'lama', 'lammersgier', 'leeuw', 'leeuwerik',
        'lemming', 'leguaan', 'luipaard', 'lynx', 'makreel', 'marmot', 'merel', 'mier', 'mol', 'muis',
        'mus', 'nijlpaard', 'octopus', 'oehoe', 'olifant', 'orang-oetan', 'orca', 'otter', 'panda', 'papegaai',
        'paard', 'pauw', 'pelikaan', 'pens', 'pinguïn', 'pinguin', 'poema', 'pony', 'python', 'rat',
        'raaf', 'reiger', 'rendier', 'ribkwal', 'rif', 'roodborst', 'salamander', 'schildpad', 'schorpioen', 'slang',
        'slak', 'specht', 'sprinkhaan', 'stier', 'tapir', 'tijger', 'uil', 'varken', 'valk',
        'vis', 'vlieg', 'vlinder', 'vlo', 'vogel', 'vos', 'walrus', 'wesp', 'wolf', 'worm',
        'zalm', 'zebra', 'zeehond', 'zeekoe', 'zwaluw'
    ]),
    
    'Landen/Steden': new Set([
        // Nederlandse steden
        'aalsmeer', 'aalten', 'alkmaar', 'almelo', 'almere', 'amersfoort', 'amsterdam', 'apeldoorn', 'arnhem', 'assen',
        'baarn', 'bergen', 'boxmeer', 'boxtel', 'breda', 'bussum', 'delft', 'delfzijl', 'denhaag', 'deventer',
        'doetinchem', 'dordrecht', 'echt', 'ede', 'edam', 'eindhoven', 'emmen', 'enschede', 'goes', 'gouda',
        'groningen', 'haarlem', 'harderwijk', 'heerlen', 'helmond', 'hengelo', 'hertogenbosch', 'hilversum', 'hoorn', 'ijmuiden',
        'katwijk', 'leeuwarden', 'leiden', 'lelystad', 'maastricht', 'middelburg', 'nijmegen', 'oss', 'purmerend', 'roermond',
        'roosendaal', 'rotterdam', 'schiedam', 'sittard', 'tilburg', 'utrecht', 'venlo', 'vlaardingen', 'vlissingen', 'zaandam',
        'zeist', 'zoetermeer', 'zutphen', 'zwolle',
        
        // Belgische steden
        'aalst', 'antwerpen', 'brugge', 'brussel', 'charleroi', 'gent', 'leuven', 'luik', 'mechelen', 'oostende',
        
        // Europese hoofdsteden
        'amsterdam', 'andorra', 'athene', 'belgrado', 'berlijn', 'bern', 'bratislava', 'brussel', 'boekarest', 'boedapest',
        'dublin', 'helsinki', 'kiev', 'kopenhagen', 'lissabon', 'londen', 'luxembourg', 'madrid', 'minsk', 'monaco',
        'moskou', 'oslo', 'parijs', 'praag', 'riga', 'rome', 'sofia', 'stockholm', 'tallinn', 'tirana',
        'vaduz', 'valletta', 'warschau', 'wenen', 'vilnius', 'zagreb',
        
        // Wereldsteden
        'bangkok', 'barcelona', 'beijing', 'delhi', 'dubai', 'istanbul', 'kaapstad', 'kairo', 'losangeles', 'melbourne',
        'mexico', 'miami', 'mumbai', 'newyork', 'peking', 'rio', 'seoul', 'shanghai', 'singapore', 'sydney',
        'tokyo', 'toronto', 'washington',
        
        // Landen
        'afghanistan', 'albanie', 'algerije', 'andorra', 'angola', 'antarctica', 'argentinie', 'armenie', 'australie', 'oostenrijk', 'azerbeidzjan',
        'bahama', 'bahrein', 'bangladesh', 'barbados', 'belarus', 'belgie', 'belize', 'benin', 'bhutan', 'bolivia',
        'bosnie', 'botswana', 'brazilie', 'brunei', 'bulgarije', 'cambodja', 'canada', 'chili', 'china', 'colombia',
        'congo', 'cuba', 'cyprus', 'denemarken', 'duitsland', 'ecuador', 'egypte', 'engeland', 'eritrea', 'estland',
        'ethiopie', 'fiji', 'filipijnen', 'finland', 'frankrijk', 'gabon', 'gambia', 'georgie', 'ghana', 'griekenland',
        'guatemala', 'guinea', 'guyana', 'haiti', 'honduras', 'hongarije', 'ierland', 'ijsland', 'india', 'indonesie',
        'irak', 'iran', 'israel', 'italie', 'ivoorkust', 'jamaica', 'japan', 'jemen', 'jordanie', 'kameroen',
        'kazachstan', 'kenia', 'kroatie', 'koeweit', 'laos', 'letland', 'libanon', 'liberia', 'libie', 'litouwen',
        'luxemburg', 'macedonie', 'madagaskar', 'maleisie', 'mali', 'malta', 'marokko', 'mexico', 'moldova', 'monaco',
        'mongolie', 'montenegro', 'mozambique', 'myanmar', 'namibie', 'nepal', 'nederland', 'nicaragua', 'niger', 'nigeria',
        'noorwegen', 'oekraine', 'oman', 'pakistan', 'panama', 'paraguay', 'peru', 'polen', 'portugal', 'qatar',
        'roemenie', 'rusland', 'rwanda', 'samoa', 'saoedi', 'schotland', 'senegal', 'servie', 'singapore', 'slovakije',
        'slovenie', 'somalie', 'spanje', 'soedan', 'suriname', 'syrië', 'taiwan', 'tanzania', 'thailand', 'togo',
        'tsjechie', 'tunesie', 'turkije', 'uganda', 'uruguay', 'venezuela', 'vietnam', 'wales', 'wit-rusland', 'zambia',
        'zimbabwe', 'zweden', 'zwitserland', 'zuid-afrika', 'zuid-korea', 'andalusie', 'antillen', 'aruba', 'curacao'
    ]),
    
    'Voedsel': new Set([
        'aardappel', 'abrikoos', 'advocaat', 'ananas', 'andijvie', 'anijs', 'appel', 'appelmoes', 'asperge', 'aubergine',
        'avocado', 'bacon', 'bagel', 'baguette', 'balkenbrij', 'banaan', 'biefstuk', 'bier', 'bieslook', 'bitterbal', 'bitterballen',
        'bloemkool', 'boerenkool', 'boerenkoolstamppot', 'bonen', 'boter', 'bouillon', 'braadworst', 'brood', 'brownie', 'broodje',
        'cake', 'cappuccino', 'cashew', 'champignon', 'chips', 'chocola', 'citroen', 'cocktail', 'cola', 'courgette', 
        'croissant', 'curry', 'doperwten', 'druif', 'eend', 'erwt', 'erwten', 'erwtensoep', 'espresso', 'falafel', 
        'feta', 'filetstuk', 'forel', 'framboos', 'frikandel', 'friet', 'gehakt', 'gehaktbal', 'gerst', 'gist', 
        'granola', 'groente', 'groentesoep', 'guave', 'hachee', 'ham', 'hamburger', 'haring', 'haver', 'havermout', 
        'hazelnoot', 'honing', 'hummus', 'hutspot', 'ijs', 'jam', 'jenever', 'jus', 'kaas', 'kabeljauw', 
        'kalkoen', 'kaneel', 'karnemelk', 'kastanje', 'kebab', 'kersen', 'ketchup', 'kip', 'kippensoep', 'kiwi', 
        'knoflook', 'koffie', 'kokos', 'komijn', 'komkommer', 'kool', 'koolraap', 'koriander', 'kroket', 'kroketten', 
        'kruiden', 'kwark', 'lamsvlees', 'lasagne', 'latte', 'limoen', 'limonade', 'linzen', 'macaroni', 'maiskolf', 
        'mandarijn', 'mango', 'margarine', 'marshmallow', 'mayonaise', 'melk', 'meloen', 'mosterd', 'muesli', 'munt', 
        'nasi', 'nasigoreng', 'nectarine', 'noga', 'noodles', 'nootmuskaat', 'oliebollen', 'olijf', 'omelet', 'ontbijtkoek',
        'pannenkoek', 'paprika', 'pasta', 'pastei', 'patat', 'peer', 'peper', 'perzik', 'peterselie', 'pindakaas',
        'pizza', 'popcorn', 'pompoen', 'prei', 'pruim', 'pudding', 'quiche', 'rabarber', 'radijs', 'rijst',
        'risi', 'roerei', 'rookworst', 'roomijs', 'rosé', 'rundvlees', 'saffaan', 'salade', 'salami', 'sandwich', 
        'sate', 'satésaus', 'saucijs', 'saus', 'selderie', 'sinaasappel', 'sla', 'snert', 'snoep', 'soep', 
        'soja', 'spaghetti', 'spek', 'speculaas', 'spinazie', 'spruitjes', 'stamppot', 'steak', 'stroopwafel', 'suiker', 
        'sushi', 'taco', 'taart', 'thee', 'toast', 'tomaat', 'tomatensaus', 'tonijn', 'ui', 'uitsmijter', 
        'vanille', 'varkensvlees', 'vijg', 'vis', 'vla', 'vodka', 'wafel', 'walnoot', 'water', 'watermeloen', 
        'wijn', 'witlof', 'wokken', 'wortel', 'worst', 'yoghurt', 'zalm', 'zout', 'zuurkool'
    ]),
    
    'Beroepen': new Set([
        'accountant', 'acteur', 'advocaat', 'agent', 'apotheker', 'architect', 'arts', 'astronaut', 'bakker', 'barman',
        'beeldhouwen', 'behanger', 'bibliothecaris', 'boekhouder', 'boer', 'bouwvakker', 'brandweerman', 'burgemeester', 'chauffeur', 'chef',
        'chirurg', 'coach', 'columnist', 'conducteur', 'conciërge', 'danser', 'deurwaarder', 'dichter', 'directeur', 'dokter',
        'dominee', 'drogist', 'editor', 'elektricien', 'fotograaf', 'fysiotherapeut', 'gids', 'gitarist', 'glazenwasser', 'graficus',
        'hardloper', 'horecamedewerker', 'hovenier', 'imker', 'ingenieur', 'journalist', 'juwelier', 'kapper', 'kassiere', 'kok',
        'koning', 'kunstenaar', 'laborant', 'lasser', 'leraar', 'loodgieter', 'makelaar', 'masseur', 'manager', 'mechanicien',
        'medewerker', 'metselaar', 'militair', 'minister', 'monteur', 'muzikant', 'notaris', 'opzichter', 'orthopedagoog', 'piloot',
        'politieagent', 'portier', 'postbode', 'predikant', 'presentator', 'prins', 'professor', 'psycholoog', 'rechter', 'redacteur',
        'reisleider', 'reparateur', 'schilder', 'schrijver', 'secretaresse', 'slager', 'soldaat', 'stewardess', 'student', 'stylist',
        'tandarts', 'taxichauffeur', 'technicus', 'timmerman', 'trainer', 'tuinman', 'verpleger', 'vertegenwoordiger', 'vrachtwagenchauffeur', 'wegenbouwer',
        'wethouder', 'winkelier', 'zanger', 'zuster'
    ]),
    
    'Voorwerpen': new Set([
        'aardappelschilmes', 'asbak', 'auto', 'axe', 'bal', 'balkon', 'bank', 'bed', 'beker', 'bel', 'beurs',
        'beuzelarij', 'bezem', 'blik', 'bloem', 'bloempot', 'boek', 'bord', 'borstel', 'bril', 'brommer',
        'brug', 'bureau', 'bus', 'cadeau', 'camera', 'cd', 'computer', 'das', 'deken', 'deur',
        'doek', 'doos', 'douche', 'drank', 'droger', 'dvd', 'emmer', 'envelop', 'fiets', 'fles',
        'fluitketel', 'fornuis', 'foto', 'glas', 'handschoen', 'hamer', 'hek', 'helm', 'hoed', 'horloge',
        'huis', 'jas', 'kachel', 'kaars', 'kaft', 'kal', 'kam', 'kan', 'kano', 'kast',
        'ketting', 'keuken', 'kist', 'kleed', 'klok', 'knie', 'knoop', 'koffer', 'kom', 'kraan',
        'krat', 'kruk', 'kuip', 'lamp', 'laptop', 'liniaal', 'lucifer', 'map', 'matras', 'mes',
        'mok', 'muur', 'naald', 'net', 'notitieblok', 'oven', 'pan', 'papier', 'paraplu', 'pen',
        'piano', 'pijp', 'pilaar', 'plant', 'plank', 'plat', 'platen', 'portemonnee', 'pot', 'printer',
        'radio', 'raam', 'rek', 'ring', 'rooster', 'rugzak', 'schaaf', 'schaal', 'schaap', 'schaar',
        'schaats', 'schakel', 'schep', 'scherm', 'schoen', 'schommel', 'schort', 'schroef', 'schuur', 'slee',
        'sleutel', 'smartphone', 'snaar', 'sneeuwbal', 'snoer', 'sofa', 'spiegel', 'spijker', 'spons', 'stoel',
        'stok', 'stofzuiger', 'tafel', 'tang', 'tas', 'telefoon', 'televisie', 'tent', 'theelepel',
        'toren', 'trampoline', 'trap', 'vaas', 'veer', 'vel', 'venster', 'verf', 'veter', 'vlag',
        'vloer', 'vork', 'wasmachine', 'wc', 'wieg', 'wiel', 'zaag', 'zak', 'zeep', 'zonnebril'
    ]),
    
    'Planten/Bloemen': new Set([
        'aalbes', 'aardbei', 'acacia', 'agave', 'aloe', 'amaryllis', 'ananas', 'anjer', 'appelboom', 'aster',
        'azalea', 'bamboe', 'banaan', 'begonia', 'berk', 'bernagie', 'bes', 'beuk', 'blauweregen', 'bloem',
        'boom', 'bougainville', 'braam', 'cactus', 'camelia', 'cannabis', 'chrysant', 'citroen', 'clematis', 'cosmos',
        'cyclaam', 'dahlia', 'distel', 'edelweiss', 'eik', 'els', 'ficus', 'framboos', 'freesia', 'fuchsia',
        'gardenia', 'geranium', 'gerbera', 'gras', 'heide', 'heester', 'hibiscus', 'hortensia', 'hulst', 'hyacint',
        'iris', 'jasmijn', 'jeneverbes', 'kamperfoelie', 'kastanje', 'kers', 'klimop', 'krokus', 'laurier', 'lavendel',
        'lelie', 'linde', 'lotus', 'magnolia', 'maretak', 'margriet', 'meidoorn', 'mimosa', 'mos', 'narcis',
        'netel', 'olijf', 'orchidee', 'palm', 'paardenbloem', 'papaver', 'petunia', 'pijnboom', 'plant', 'populier',
        'primula', 'riet', 'rododendron', 'roos', 'rozen', 'salie', 'selder', 'sering', 'sleutelbloem', 'sneeuwklokje',
        'spar', 'struik', 'taxus', 'thee', 'thuya', 'tijm', 'tomaat', 'tulp', 'varen', 'vergeetmijniet',
        'viooltje', 'vlier', 'wilg', 'yucca', 'zonnebloem'
    ])
};

// Controleer of woord bij categorie past
function matchesCategory(word, category) {
    const normalizedWord = word.toLowerCase();
    return categoryWords[category]?.has(normalizedWord) || false;
}

// Log statistieken bij laden
console.log('📚 Categorie woordenlijsten geladen:');
for (const [category, words] of Object.entries(categoryWords)) {
    console.log(`  - ${category}: ${words.size} woorden`);
}
