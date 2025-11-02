/**
 * Categorie Woordenlijsten voor Linko
 * Bevat woordenlijsten per categorie voor basis categorie-check
 * Losjes model: als woord niet in lijst staat, wordt het toch geaccepteerd
 */

const categoryWords = {
    'Dieren': [
        'aal', 'aalscholver', 'aap', 'aardwolf', 'abdimstork', 'adelaar', 'adder', 'adoorn', 'ahornvlinder', 'albatros',
        'algemeenduif', 'alligator', 'alpaca', 'amberkever', 'amerikaansehond', 'anemoonvis', 'anjervis', 'antilope', 'apeneter', 'arend',
        'arowana', 'asp', 'avocet', 'axolotl', 'baardmees', 'baardvarken', 'baars', 'bamboerat', 'bandstaart', 'baviaan',
        'beekjuffer', 'berberaap', 'berghoen', 'bergmarmot', 'berguil', 'bever', 'bidsprinkhaan', 'bij', 'bizon', 'blauwvinvis',
        'bliek', 'blindevis', 'bloedegel', 'bok', 'boommarter', 'boomklever', 'boomkikker', 'boomslang', 'bosduif', 'bosmuis',
        'bosuil', 'bosvogel', 'bot', 'brasem', 'bruinebeer', 'bruinevis', 'brulkikker', 'buidelrat', 'buidelwolf', 'bultrug',
        'buizerd', 'cachalot', 'capibara', 'caracal', 'cavia', 'chimpansee', 'cicade', 'clownvis', 'cobra', 'cockatoo',
        'condor', 'coyote', 'dalmatiër', 'damhert', 'dansmug', 'das', 'degenkrab', 'dier', 'dikhuid', 'dingo',
        'dolfijn', 'doornhaai', 'doornslak', 'donkeruil', 'draaihals', 'draadworm', 'duif', 'duiker', 'duinmuis', 'dwerggeit',
        'dwerguil', 'dwergvleermuis', 'eekhoorn', 'egel', 'egelskop', 'egelvis', 'ekster', 'eland', 'elektrapaling', 'emoe',
        'emu', 'ernsthoen', 'fazant', 'flamingo', 'fret', 'gaai', 'gans', 'garnaal', 'gazelle', 'geit',
        'gier', 'gierzwaluw', 'gnoe', 'goudhaantje', 'goudvis', 'grasmus', 'grizzly', 'groenling', 'grondel', 'grutto',
        'guppy', 'haai', 'haan', 'haas', 'hamster', 'haring', 'havik', 'hert', 'hond', 'honingbij',
        'honingdas', 'hop', 'horzel', 'huismus', 'hyena', 'ibis', 'ijsbeer', 'ijsvogel', 'inktvis', 'jak',
        'jakhals', 'jaguar', 'kalkoen', 'kameleon', 'kanarie', 'kapucijnaap', 'karper', 'kat', 'kever', 'kikker',
        'kip', 'koe', 'koekoek', 'kolibrie', 'komodovaraan', 'konijn', 'kooi', 'koornslang', 'korhoen', 'kraai',
        'krab', 'krekel', 'krokodil', 'kuifmees', 'lam', 'lamantijn', 'leeuw', 'lepelaar', 'libel', 'lijster',
        'luiaard', 'lynx', 'maanvis', 'maki', 'manenwolf', 'maraboe', 'marter', 'meerval', 'mees', 'mier',
        'mol', 'molleneter', 'mug', 'muis', 'mus', 'nachtegaal', 'neushoorn', 'nijlpaard', 'octopus', 'oehoe',
        'olifant', 'ooievaar', 'orka', 'otter', 'paling', 'panter', 'papegaai', 'parkiet', 'pauw', 'pekari',
        'pelikaan', 'pinguin', 'piton', 'poema', 'poni', 'potvis', 'prairiehond', 'raaf', 'rat', 'ree',
        'regenworm', 'reiger', 'rendier', 'rups', 'salamander', 'schaap', 'schildpad', 'schorpioen', 'seepaard', 'serval',
        'sifaka', 'sijs', 'slak', 'slang', 'snip', 'snoek', 'spin', 'spreeuw', 'sprinkhaan', 'steenbok',
        'steenmarter', 'steenuil', 'stekelbaars', 'steur', 'struisvogel', 'tapir', 'tijger', 'tijgerhaai', 'tonijn', 'torenvalk',
        'tortel', 'trilspin', 'uil', 'valk', 'varken', 'vink', 'vis', 'visarend', 'vleermuis', 'vlo',
        'vogelbekdier', 'vos', 'vraatkever', 'walrus', 'waterhoen', 'watersalamander', 'wezel', 'wildebeest', 'winterkoning', 'woelmuis',
        'wolf', 'worm', 'yak', 'zalm', 'zebra', 'zeehond', 'zeekat', 'zeeleeuw', 'zeepaardje', 'zeeschildpad',
        'zeeslak', 'zeester', 'zeevis', 'zeevogel', 'zeewolf', 'zilvermeeuw', 'zonnevis', 'zwaan', 'zwaluw', 'zwartkop',
        'zwartstaartprairiehond', 'zwijn'
    ],
    
    'Landen/Steden': [
        'afghanistan', 'albanië', 'algerije', 'amsterdam', 'andorra', 'angola', 'antwerpen', 'argentinië', 'armenië', 'arnhem',
        'athene', 'australië', 'azerbeidzjan', 'bagdad', 'bahama', 'bahrein', 'baku', 'bangladesh', 'barbados', 'barcelona',
        'basel', 'belgië', 'belize', 'benin', 'berlijn', 'bern', 'bhutan', 'boedapest', 'bolivia', 'bologna',
        'bordeaux', 'bosnië', 'boston', 'botswana', 'bratislava', 'brazilië', 'brunei', 'brussel', 'bryssel', 'bucharest',
        'buenosaires', 'bulgarije', 'burkinafaso', 'burundi', 'caïro', 'cambodja', 'cameroen', 'canada', 'capetown', 'chicago',
        'chili', 'china', 'colombia', 'comoren', 'congo', 'copenhagen', 'costarica', 'croatië', 'cuba', 'cyprus',
        'damascus', 'denemarken', 'denhaag', 'djibouti', 'dominica', 'dominicanenrepubliek', 'dubai', 'dublin', 'ecuador', 'edinburgh',
        'egypte', 'eindhoven', 'eritrea', 'estland', 'ethiopië', 'fiji', 'filipijnen', 'finland', 'florence', 'frankrijk',
        'frankfurt', 'gabon', 'gambia', 'geneve', 'gent', 'georgië', 'ghana', 'griekenland', 'groningen', 'guatemala',
        'guinee', 'guyana', 'haïti', 'hamburg', 'helsinki', 'honduras', 'hongkong', 'hongarije', 'ierland', 'ijsland',
        'india', 'indonesië', 'irak', 'iran', 'israël', 'italië', 'jamaica', 'jakarta', 'japan', 'jeruzalem',
        'jordanië', 'kaapstad', 'kazachstan', 'kenia', 'kigali', 'kirgizië', 'kiribati', 'kopenhagen', 'krakau', 'kroatië',
        'kuwait', 'laos', 'letland', 'libanon', 'liberia', 'libië', 'liechtenstein', 'lima', 'linde', 'lissabon',
        'litouwen', 'londen', 'losangeles', 'luik', 'luxemburg', 'lyon', 'madagaskar', 'madrid', 'malawi', 'maldiven',
        'maleisië', 'mali', 'malta', 'manchester', 'manilla', 'marokko', 'marseille', 'mauritanie', 'mexico', 'milaan',
        'minsk', 'moldavië', 'monaco', 'mongolië', 'montenegro', 'moskou', 'mozambique', 'munchen', 'myanmar', 'namibië',
        'napels', 'nederland', 'nepal', 'newyork', 'nicaragua', 'nice', 'nicosia', 'niger', 'nigeria', 'nieuwzeeland',
        'noordmacedonië', 'noorwegen', 'oman', 'oostenrijk', 'oslo', 'ottawa', 'pakistan', 'palau', 'panama', 'paraguay',
        'parijs', 'peru', 'polen', 'porto', 'portugal', 'praha', 'pristina', 'qatar', 'quebec', 'quito',
        'reykjavik', 'rio', 'roemenië', 'rome', 'rotterdam', 'rusland', 'rwanda', 'sanfrancisco', 'santiago', 'sarajevo',
        'saudiarabie', 'senegal', 'seoul', 'servië', 'seychellen', 'shanghai', 'sierraleone', 'singapore', 'slovakije', 'slovenië',
        'sofia', 'somalië', 'soedan', 'spanje', 'srilanka', 'stockholm', 'stuttgart', 'suriname', 'swaziland', 'sydney',
        'syrië', 'tadzjikistan', 'taipei', 'talinn', 'tanzania', 'tbilisi', 'teheran', 'thailand', 'togo', 'tokio',
        'tonga', 'toronto', 'trinidad', 'tsjechië', 'tsjaad', 'tunisië', 'turkije', 'turkmenistan', 'uruguay', 'utrecht',
        'valencia', 'vancouver', 'venetie', 'venezuela', 'verenigdestaten', 'verenigdkoninkrijk', 'vienna', 'vietnam', 'vilnius', 'warsaw',
        'washington', 'wenen', 'witrusland', 'zagreb', 'zambia', 'zimbabwe', 'zuidafrika', 'zuidkorea', 'zuidsoedan', 'zurich',
        'zweden', 'zwitserland'
    ],
    
    'Voedsel': [
        'aardappel', 'abrikoos', 'advocaat', 'amandel', 'ananas', 'anijs', 'appel', 'appelmoes', 'appelsap', 'appeltaart',
        'asperge', 'aubergine', 'avocado', 'baklava', 'banaan', 'basilicum', 'biefstuk', 'bier', 'bieslook', 'bitterbal',
        'bladerdeeg', 'blauwebessen', 'bloem', 'bloemkool', 'boerenkool', 'bosbessen', 'boter', 'boterham', 'braadworst', 'bramen',
        'brandy', 'bread', 'brie', 'broccoli', 'brood', 'broodje', 'bruinebonen', 'cake', 'cashewnoten', 'champagne',
        'champignon', 'chips', 'chocola', 'citroen', 'citroensap', 'cocktail', 'cognac', 'cola', 'cornflakes', 'courgette',
        'crackers', 'croissant', 'curry', 'dadel', 'dille', 'donut', 'druif', 'ei', 'eiersalade', 'erwten',
        'falafel', 'feta', 'framboos', 'friet', 'fruit', 'gans', 'garnaal', 'geitenkass', 'gehakt', 'gember',
        'gin', 'goulash', 'granola', 'groente', 'groentesoep', 'guacamole', 'ham', 'hamburger', 'hazelnoot', 'honing',
        'honing', 'hotdog', 'huzarensalade', 'ijs', 'ijsthee', 'jam', 'jenever', 'jus', 'kaas', 'kalkoen',
        'kaneel', 'karamel', 'karnemelk', 'kastanje', 'ketchup', 'kip', 'kippenbout', 'kiwi', 'knoflook', 'koek',
        'koekje', 'koffie', 'kokos', 'komijn', 'komkommer', 'kool', 'koolraap', 'koriander', 'krab', 'kroket',
        'kruiden', 'kwark', 'lamsvlees', 'lasagne', 'latte', 'laurier', 'lever', 'limonade', 'linzen', 'macaroni',
        'maïs', 'mandarijn', 'mango', 'margarine', 'marmelade', 'marshmallow', 'mayonaise', 'melk', 'meloen', 'mie',
        'mint', 'mosterd', 'mozzarella', 'muesli', 'nasi', 'nectarine', 'nootmuskaat', 'noten', 'olie', 'olijf',
        'olijfolie', 'omelet', 'ontbijtgranen', 'oregano', 'paddenstoel', 'paella', 'pannenkoek', 'paprika', 'pasta', 'patat',
        'patatje', 'peer', 'peper', 'pepermunt', 'perzik', 'peterselie', 'piccalilly', 'pinda', 'pindakaas', 'pizza',
        'pompoen', 'popcorn', 'prei', 'pruim', 'quinoa', 'rabarber', 'radijs', 'ratatouille', 'ravioli', 'rode-biet',
        'rodebes', 'rodedrager', 'roerei', 'room', 'rosbief', 'rucola', 'rum', 'salade', 'salami', 'salie',
        'salsa', 'sandwich', 'sap', 'sardine', 'satésaus', 'scampi', 'selderie', 'sesamzaad', 'sinaasappel', 'sjalot',
        'sla', 'slagroom', 'slak', 'snoep', 'soep', 'soja', 'sorbet', 'spaghetti', 'speculaas', 'spek',
        'sperzieboon', 'spinazie', 'sprits', 'stamp', 'steak', 'stroop', 'stroopwafel', 'suiker', 'sushi', 'taart',
        'taco', 'tapas', 'tartaar', 'thee', 'tijm', 'tiramisu', 'tomaat', 'tomatensaus', 'tonijn', 'tortilla',
        'ui', 'vanille', 'varkensvlees', 'vijg', 'vis', 'vla', 'vlees', 'vodka', 'wafels', 'walnoot',
        'water', 'watermeloen', 'wijn', 'witlof', 'wortel', 'wrap', 'yoghurt', 'zalm', 'zout', 'zuurkool'
    ],
    
    'Beroepen': [
        'accountant', 'accountmanager', 'acquisiteur', 'acteur', 'administrateur', 'advocaat', 'advocaatstagiair', 'afdelingshoofd', 'agent', 'agronoom',
        'ambassadeur', 'anesthesioloog', 'animator', 'apotheker', 'archeoloog', 'architect', 'archiefbeheerder', 'arts', 'assuradeur', 'astronaut',
        'astronoom', 'auditor', 'autocoureur', 'autotechnicus', 'bakker', 'banketbakker', 'bankier', 'barbier', 'barista', 'bediende',
        'begeleider', 'beheerder', 'beheercontroller', 'beeldendkunstenaar', 'beeldhouwer', 'beiaardier', 'belastingspecialist', 'belegger', 'beleidsadviseur', 'belichter',
        'bemiddelaar', 'beroepschauffeur', 'beroepsmilitair', 'beveiligingsmedewerker', 'bewindvoerder', 'bibliothecaris', 'bioloog', 'bloemist', 'boekbinder', 'boekdrukker',
        'boekhouder', 'boer', 'boogmaker', 'boomklever', 'boswachter', 'bouwkundige', 'bouwkundigtekenaar', 'brandweerman', 'brandweervrouw', 'broodbakker',
        'buschauffeur', 'businessanalist', 'callcentermedewerker', 'cameraman', 'carrosseriebouwer', 'cartograaf', 'cateringmedewerker', 'chauffeur', 'chemicus', 'chirurg',
        'coach', 'communicatieadviseur', 'componist', 'concierge', 'constructeur', 'consultant', 'controller', 'controleur', 'copywriter', 'coureur',
        'curator', 'dansdocent', 'datamanager', 'decaan', 'decorateur', 'deurwaarder', 'dierenarts', 'dierenverzorger', 'directeur', 'docent',
        'docenttrainer', 'dokter', 'dominee', 'douanier', 'drammer', 'drukker', 'drummer', 'duurzaamheidsadviseur', 'econoom', 'elektricien',
        'employé', 'energiedeskundige', 'engineer', 'entertainer', 'etaleur', 'eventmanager', 'facilitairmedewerker', 'fietsenmaker', 'filmmaker', 'filosoof',
        'financieeladviseur', 'fiscaaljurist', 'fotograaf', 'freelancer', 'functionaris', 'fysiotherapeut', 'gastheer', 'gastvrouw', 'geoloog', 'gerontoloog',
        'gespreksleider', 'gids', 'glaszetter', 'goudsmid', 'graficus', 'grafischontwerper', 'grimeur', 'groenteboer', 'gynaecoloog', 'handelaar',
        'handlanger', 'havenmeester', 'heier', 'herder', 'historicus', 'horecamanager', 'horecamedewerker', 'hovenier', 'hradviseur', 'huisarts',
        'huishoudster', 'hypotheekadviseur', 'ictanalist', 'ictbeheerder', 'ictspecialist', 'illustrator', 'immigrantencoach', 'ingenieur', 'inkoper', 'innovatiemanager',
        'inspecteur', 'installateur', 'instructeur', 'interieurontwerper', 'journalist', 'juridischmedewerker', 'jurist', 'juwelier', 'kamperfoelie', 'kantonnier',
        'kapper', 'kassier', 'kelner', 'keramist', 'keukenhulp', 'kinderarts', 'klantadviseur', 'klantmanager', 'kleermaker', 'klokkenmaker',
        'koetsier', 'koerier', 'kok', 'kokkin', 'koster', 'kunstenaar', 'kwaliteitsmanager', 'laborant', 'laboratoriumtechnicus', 'landbouwer',
        'landmeter', 'leidinggevende', 'leerkracht', 'leraar', 'liftmonteur', 'logopedist', 'loodgieter', 'machinist', 'magazijnmedewerker', 'magistraat',
        'makelaar', 'manager', 'marinier', 'marketeer', 'marktkoopman', 'matroos', 'medewerker', 'melkboer', 'metselaar', 'meubelmaker',
        'missionaris', 'model', 'moleculairbioloog', 'monteur', 'muziekdocent', 'muzikant', 'nachtwaker', 'nagelstylist', 'neuroloog', 'notaris',
        'officier', 'onderwijzer', 'onderzoeker', 'ontwerper', 'oogarts', 'opleider', 'operator', 'opticien', 'opzichter', 'orthodontist',
        'orthopedagoog', 'ouderling', 'parfumist', 'parkbeheerder', 'parkeerwachter', 'pastoor', 'pedagoog', 'pedicure', 'performer', 'persvoorlichter',
        'piloot', 'planner', 'planoloog', 'ploegbaas', 'podotherapeut', 'poelier', 'politicagent', 'politicoloog', 'postbode', 'presentator',
        'priester', 'productmanager', 'proefleider', 'programmeur', 'projectleider', 'psycholoog', 'psychotherapeut', 'raadgever', 'radioloog', 'radiopresentator',
        'rechter', 'receptionist', 'rechercheur', 'redacteur', 'revalidatietherapeut', 'rijinstructeur', 'roeier', 'salesmanager', 'schilder', 'schilderes',
        'schoenmaker', 'schoonheidsspecialist', 'schoonmaker', 'schooldirecteur', 'schrijver', 'secretaresse', 'servicemonteur', 'sjouwer', 'slager', 'slijter',
        'slotenmaker', 'sociaalwerker', 'softwareontwikkelaar', 'soldaat', 'sommelier', 'stedenbouwkundige', 'steward', 'stoffeerder', 'straatmaker', 'stucadoor',
        'studieadviseur', 'stuntman', 'systeembeheerder', 'tandarts', 'tandtechnicus', 'tapijtwever', 'taxichauffeur', 'teamleider', 'technicus', 'technischtekenaar',
        'tekenaar', 'telemarketeer', 'telefonist', 'theatermaker', 'therapeut', 'timmerman', 'toerismeadviseur', 'toeristengids', 'toetsenist', 'toneelspeler',
        'trainer', 'trainingsacteur', 'tuinarchitect', 'tuinman', 'typist', 'uitgever', 'uitvaartleider', 'uitvinder', 'uitvoerder', 'uitzendconsulent',
        'vakman', 'verkoopadviseur', 'verkoopmedewerker', 'verloskundige', 'verpleger', 'verpleegkundige', 'verpleegster', 'vertaler', 'vervoerder', 'verzamelaar',
        'verzekeringsadviseur', 'verzorger', 'videoeditor', 'visser', 'vliegenlegger', 'vliegtuigmonteur', 'voedingsdeskundige', 'voeger', 'voetballer', 'voorlichter',
        'vormgever', 'vrachtwagenchauffeur', 'wachtmeester', 'wagenmaker', 'webdesigner', 'weerman', 'werkvoorbereider', 'winkelbediende', 'winkelier', 'woonconsulent',
        'woondeskundige', 'wordingkundige', 'zager', 'zanger', 'zeebioloog', 'zeeman', 'zeilmaker', 'zelfstandige', 'ziekenverzorger', 'ziekenhuisarts',
        'zilverwerker', 'zoöloog', 'zorgverlener', 'zweminstructeur', 'zwemmer'
    ],
    
    'Voorwerpen/Objecten': [
        'aardbol', 'aansteker', 'aardewerk', 'afstandsbediening', 'afwasborstel', 'afzuigkap', 'agenda', 'alarm', 'anker', 'antenne',
        'armband', 'asbak', 'auto', 'badhanddoek', 'badjas', 'bakpan', 'bal', 'balans', 'balpen', 'bank',
        'batterij', 'bed', 'beeldscherm', 'behangborstel', 'beker', 'bel', 'bestek', 'bezem', 'blik', 'blikopener',
        'boek', 'boekenkast', 'boor', 'boormachine', 'bord', 'borstel', 'brievenbus', 'bril', 'brilhoes', 'bureaulamp',
        'bureaustoel', 'camera', 'camerastatief', 'capsule', 'cd', 'centrifuge', 'computer', 'computermuis', 'deken', 'deur',
        'deurbel', 'deurklink', 'diaprojector', 'dobbelsteen', 'doek', 'doos', 'dop', 'draagtas', 'drankglas', 'drumstel',
        'emmer', 'envelop', 'fiets', 'fles', 'flesopener', 'fluit', 'fohn', 'fotocamera', 'fotolijst', 'garde',
        'gereedschap', 'gieter', 'gitaar', 'glas', 'glaswerk', 'glijbaan', 'gloeilamp', 'gordijn', 'grijper', 'grasmaaier',
        'hamer', 'handdoek', 'handschoen', 'handvat', 'helm', 'hengel', 'hoes', 'horloge', 'jas', 'kaars',
        'kaart', 'kaasschaaf', 'kabel', 'kan', 'kast', 'kastdeur', 'ketting', 'keukenmes', 'kist', 'klavier',
        'klok', 'knop', 'koektrommel', 'koelkast', 'koffer', 'kom', 'kompas', 'kooi', 'kookboek', 'kookplaat',
        'krijt', 'kruk', 'kussen', 'kwast', 'ladder', 'lade', 'lamp', 'lantaarn', 'laptop', 'laptophoes',
        'lepel', 'lichtknop', 'lijm', 'liniaal', 'loodlijn', 'loper', 'mand', 'mat', 'mes', 'microfoon',
        'mixer', 'mobiel', 'mok', 'monitor', 'motor', 'munt', 'muntstuk', 'naaimachine', 'naald', 'nagelschaar',
        'nagelvijl', 'notitieboek', 'notitieblok', 'oplader', 'oven', 'pak', 'pallet', 'pan', 'paperclip', 'paraplu',
        'parfumfles', 'pedaalemmer', 'pen', 'penhouder', 'piano', 'picknickmand', 'pincet', 'plaatschaar', 'plank', 'plant',
        'plasticbeker', 'plint', 'poort', 'portemonnee', 'poster', 'postzegel', 'pot', 'potje', 'potlood', 'presentatiebord',
        'printer', 'prothese', 'puzzel', 'raam', 'raamkozijn', 'radio', 'rek', 'reistas', 'ritssluiting', 'rolgordijn',
        'rolmaat', 'rugzak', 'ruit', 'schaal', 'schaar', 'schakelaar', 'scheermes', 'schep', 'schepnet', 'schild',
        'schilderij', 'schoen', 'schoenlepel', 'schroef', 'schroefboormachine', 'schroevendraaier', 'schroefmoer', 'schuim', 'schuurpapier', 'sierkussen',
        'sierpot', 'sleutel', 'sneeuwbal', 'snijplank', 'soapdispenser', 'sok', 'spatel', 'spiegel', 'spiegelkast', 'spijker',
        'spin', 'spoelbak', 'stang', 'steekwagen', 'stekker', 'stempel', 'stift', 'stoelpoten', 'stoel', 'stofzuiger',
        'stok', 'stopcontact', 'stopnaald', 'stropdas', 'tablet', 'tafel', 'tas', 'telefoon', 'televisie', 'tent',
        'theepot', 'thermos', 'thermometer', 'tissue', 'toetsenbord', 'toiletborstel', 'toiletrol', 'tong', 'touw', 'trechter',
        'trekkoord', 'trouwring', 'vaas', 'vaatdoek', 'vaatwasser', 'veiligheidsspeld', 'verfkwast', 'vergrootglas', 'verrekijker', 'vijl',
        'viltstift', 'vingerhoed', 'vislijn', 'vlag', 'vloerkleed', 'voedingskabel', 'vork', 'vrachtwagen', 'wasbak', 'wasmachine',
        'wasmand', 'waterkoker', 'waterfles', 'waterpomp', 'weekplanner', 'weegschaal', 'wekker', 'werkbank', 'werktuig', 'whisk',
        'wiel', 'wijnglas', 'wimpel', 'winkelmand', 'wip', 'wipstoel', 'wisselstekker', 'witbord', 'wok', 'wokkoker',
        'zakdoek', 'zaklamp', 'zeep', 'zeepbak', 'zeepschaal', 'zeil', 'zeilboot', 'zelfie', 'zetel', 'zilverwerk',
        'zitzak', 'zoemer', 'zoldertrap', 'zonnebril', 'zonnepaneel'
    ],
    
    'Planten/Bloemen': [
        'abrikozenboom', 'acacia', 'adderwortel', 'agave', 'ahornvlinder', 'akelei', 'akkerbloem', 'akkerdistel', 'akkerklokje', 'akkerleeuwenbek',
        'akkerwinde', 'aloë', 'alsem', 'alstroemeria', 'amandelboom', 'amarant', 'anemoon', 'anijs', 'anjer', 'anjerplant',
        'appelbloesem', 'appelboom', 'appelmunt', 'aralia', 'aronskelk', 'aster', 'asterplant', 'azalea', 'azijnboom', 'bamboe',
        'bamboeblad', 'basilicum', 'basilicumplant', 'beuk', 'beukenboom', 'bietenplant', 'blaasjeskruid', 'bladmos', 'bladspin', 'blauwgras',
        'blauweregen', 'blauwklokje', 'bloeiwijze', 'bloem', 'bloemknop', 'bloesem', 'boerenwormkruid', 'boterbloem', 'braam', 'braamstruik',
        'brandnetel', 'brem', 'bremstruik', 'bromelia', 'buddleja', 'buxus', 'buxusplant', 'cactus', 'cactussoort', 'calla',
        'camelia', 'campanula', 'ceder', 'cederboom', 'chrysant', 'chrysantbloem', 'cichorei', 'cilantro', 'citroenmelisse', 'citroengras',
        'citroenverbena', 'clivia', 'cocosplant', 'cornus', 'cosmos', 'cotoneaster', 'cyclaam', 'cyclamen', 'dadelpalm', 'dahlia',
        'daslook', 'den', 'denneboom', 'distel', 'distelsoort', 'dotterbloem', 'dotterplant', 'drakenbloedboom', 'duindoorn', 'duizendblad',
        'eik', 'eikenboom', 'eikvaren', 'engelwortel', 'enkianthus', 'erwtenplant', 'es', 'esdoorn', 'esparcette', 'fatsia',
        'fuchsia', 'gardenia', 'gemberplant', 'gentiaan', 'geranium', 'gerbera', 'gierstgras', 'ginseng', 'gladiool', 'goudbloem',
        'goudsbloem', 'gras', 'grasplant', 'hazelaar', 'heester', 'heide', 'heideplant', 'helianthus', 'helichrysum', 'hepatica',
        'herfstaster', 'hertshooi', 'hibiscus', 'hop', 'hortensia', 'hulst', 'hulstblad', 'hyacint', 'iris', 'jasmijn',
        'jonquille', 'judasboom', 'judaspenning', 'kamille', 'kamperfoelie', 'kaneelboom', 'kapucijner', 'kastanjeboom', 'kattenkruid', 'kersenbloesem',
        'kersenboom', 'klaproos', 'klaver', 'klimop', 'knoopkruid', 'korenbloem', 'koriander', 'krokus', 'kruid', 'lavendel',
        'leeuwenbek', 'lelie', 'lelietjesvan dalen', 'linde', 'lotus', 'magnolia', 'maïsplant', 'madelief', 'madeliefje', 'malva',
        'mangoplant', 'margriet', 'marjolein', 'meidoorn', 'mimosa', 'mint', 'mos', 'munt', 'muurbloem', 'narcis',
        'notenboom', 'olijfboom', 'orchidee', 'orchis', 'oregano', 'paardenbloem', 'palm', 'passiebloem', 'peperplant', 'perenboom',
        'peterselie', 'phlox', 'pijlkruid', 'pijpbloem', 'pioen', 'pioenroos', 'plataan', 'pompoenplant', 'primula', 'pruimenboom',
        'radijsplant', 'rapenplant', 'regenboogbloem', 'ridderspoor', 'roos', 'rozemarijn', 'salie', 'sandrakboom', 'schefflera', 'siererwt',
        'sintjanskruid', 'sla', 'sleutelbloem', 'spirea', 'spinnenplant', 'spruitkool', 'stamroos', 'steenbreek', 'stokroos', 'strobloem',
        'struik', 'sumak', 'sunflower', 'tamme kastanje', 'tarwe', 'teunisbloem', 'tijm', 'tulp', 'vaantjesboom', 'varen',
        'vijg', 'vijgenboom', 'viool', 'viooltje', 'vlier', 'vogelmelk', 'volkameriaan', 'waterlelie', 'weidebloem', 'weidegras',
        'weegbree', 'wilg', 'winterakoniet', 'witteklaver', 'wolfsmelk', 'zandraket', 'zegge', 'zeekraal', 'zevenblad', 'zonnebloem',
        'zonnehoed', 'zuring'
    ]
};

/**
 * Check of een woord past bij de opgegeven categorie
 * @param {string} word - Het te checken woord
 * @param {string} category - De categorie
 * @returns {boolean} - True als woord in categorie lijst staat, anders false
 */
function matchesCategory(word, category) {
    // Als categorie niet bestaat, return false
    if (!categoryWords[category]) {
        return false;
    }
    
    // Check of woord in de lijst staat (case-insensitive)
    return categoryWords[category].includes(word.toLowerCase().trim());
}

/**
 * Optioneel: Haal alle woorden op voor een categorie (voor debugging)
 * @param {string} category - De categorie
 * @returns {Array} - Array met woorden of lege array
 */
function getCategoryWords(category) {
    return categoryWords[category] || [];
}

/**
 * Optioneel: Tel hoeveel woorden er in een categorie zitten
 * @param {string} category - De categorie
 * @returns {number} - Aantal woorden
 */
function getCategoryWordCount(category) {
    return categoryWords[category] ? categoryWords[category].length : 0;
}

// Console log voor debugging (kan later verwijderd worden)
console.log('📚 Categorie woordenlijsten geladen:');
Object.keys(categoryWords).forEach(cat => {
    console.log(`  - ${cat}: ${categoryWords[cat].length} woorden`);
});
