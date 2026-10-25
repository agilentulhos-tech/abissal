// Banco extra do Abissal + categorias (c) para os pacotes temáticos.
// Mesmo formato de perguntas.js: 6 faixas, da mais comum para a mais rara.
(function () {
  // categorias das 28 perguntas originais, na ordem do arquivo perguntas.js
  const CATS = ["comida", "natureza", "geografia", "geografia", "comida", "ciencia", "comida", "cotidiano", "cultura", "esporte",
    "cotidiano", "natureza", "ciencia", "cotidiano", "natureza", "comida", "geografia", "cotidiano", "cultura", "esporte",
    "geografia", "comida", "ciencia", "comida", "natureza", "cotidiano", "ciencia", "cultura"];
  window.PERGUNTAS.forEach((p, i) => { p.c = p.c || CATS[i] || "cotidiano"; });

  window.PERGUNTAS.push(
  {
    c: "esporte", q: "Nomeie um time de futebol brasileiro",
    t: [
      "Flamengo|Corinthians|Palmeiras|São Paulo",
      "Grêmio|Internacional/inter|Vasco",
      "Santos|Cruzeiro|Atlético Mineiro/galo/atlético-mg|Fluminense|Botafogo|Bahia|Fortaleza|Athletico Paranaense/athletico/atlético-pr|Sport|Vitória|Ceará|Coritiba|Goiás|Bragantino/red bull bragantino",
      "Juventude|Chapecoense|Ponte Preta|Guarani|Náutico|Santa Cruz|Paysandu|Remo|Avaí|Figueirense|América Mineiro/américa-mg|Cuiabá|Atlético Goianiense|Criciúma|Portuguesa|Mirassol|Novorizontino|CRB|CSA|ABC",
      "Brasil de Pelotas|Caxias|Ypiranga|São José|Joinville|Londrina|Operário|Botafogo-SP|Ituano|Vila Nova|Sampaio Corrêa|Moto Club|Treze|Campinense|Botafogo-PB|Confiança|River-PI|Tombense|Volta Redonda|XV de Piracicaba|Juventus|Santo André",
      "Pelotas|Aimoré|São Raimundo|Nacional-AM|Galvez|Trem|Esportivo|Guarany de Bagé|Cianorte|Ferroviário|Icasa|Gama",
    ],
  },
  {
    c: "esporte", q: "Nomeie um piloto de Fórmula 1 (de qualquer época)",
    t: [
      "Ayrton Senna/senna|Lewis Hamilton/hamilton|Max Verstappen/verstappen|Michael Schumacher/schumacher",
      "Rubens Barrichello/barrichello/rubinho|Nelson Piquet/piquet|Emerson Fittipaldi/fittipaldi",
      "Felipe Massa/massa|Fernando Alonso/alonso|Charles Leclerc/leclerc|Sebastian Vettel/vettel|Kimi Räikkönen/raikkonen|Alain Prost/prost|Lando Norris/norris|Gabriel Bortoleto/bortoleto|Niki Lauda/lauda|Carlos Sainz/sainz|Sergio Pérez/checo pérez|George Russell/russell|Oscar Piastri/piastri|Nico Rosberg/rosberg|Jenson Button/button",
      "Nigel Mansell/mansell|Mika Häkkinen/hakkinen|Damon Hill|Jacques Villeneuve|Gilles Villeneuve|Jackie Stewart|Juan Manuel Fangio/fangio|Jim Clark|Graham Hill|James Hunt|Mark Webber|Valtteri Bottas/bottas|Daniel Ricciardo/ricciardo|Pierre Gasly/gasly|Esteban Ocon/ocon|Lance Stroll/stroll|Yuki Tsunoda/tsunoda|Alexander Albon/albon|Kevin Magnussen|Nico Hülkenberg/hulkenberg|Romain Grosjean/grosjean|Kimi Antonelli/antonelli|Oliver Bearman/bearman|Isack Hadjar/hadjar|Liam Lawson/lawson|Franco Colapinto/colapinto|Felipe Nasr/nasr|Bruno Senna|Ralf Schumacher|Mick Schumacher|David Coulthard/coulthard|Juan Pablo Montoya/montoya|Nelsinho Piquet/nelson piquet jr",
      "Carlos Pace/josé carlos pace|Wilson Fittipaldi|Christian Fittipaldi|Pedro Paulo Diniz|Ricardo Zonta/zonta|Luciano Burti/burti|Tarso Marques|Enrique Bernoldi|Antônio Pizzonia/pizzonia|Ingo Hoffmann|Raul Boesel|Chico Serra|Roberto Moreno|Maurício Gugelmin/gugelmin|Lucas di Grassi|Pietro Fittipaldi|Stirling Moss|Jochen Rindt|Ronnie Peterson|Jody Scheckter|Alan Jones|Keke Rosberg|Gerhard Berger/berger|Riccardo Patrese/patrese|Jean Alesi/alesi|Michele Alboreto|Eddie Irvine|Heinz-Harald Frentzen|Giancarlo Fisichella/fisichella|Jarno Trulli|Takuma Sato|Kamui Kobayashi|Robert Kubica/kubica|Pastor Maldonado|Marcus Ericsson|Daniil Kvyat|Zhou Guanyu|Nyck de Vries|Logan Sargeant|Nikita Mazepin",
      "Chico Landi|Fritz d'Orey|Gino Bianco|Hernando da Silva Ramos|Alex Dias Ribeiro|Ricardo Rosset|Andrea de Cesaris|Taki Inoue|Yuji Ide|Jean-Denis Délétraz|Al Pease",
    ],
  },
  {
    c: "esporte", q: "Diga uma arte marcial ou luta",
    t: [
      "judô|karatê/caratê|boxe|jiu-jitsu|capoeira",
      "MMA/vale-tudo|muay thai/boxe tailandês",
      "taekwondo|kung fu|luta livre|sumô|kickboxing|krav maga|aikido|esgrima|wrestling/luta olímpica|luta greco-romana|tai chi/tai chi chuan|ninjutsu|kendo|hapkido|wushu|jeet kune do|savate|sambo",
      "luta marajoara|huka-huka|silat/pencak silat|kali/eskrima/arnis|systema|defesa pessoal|full contact|sanda/sanshou|jujutsu|kyokushin|iaido|kyudo|naginata|bojutsu|lethwei|bokator|pradal serey|glima|bartitsu|catch wrestling|luta canária|lucha libre|wing chun",
      "maculelê|jogo do pau|bajiquan|xingyiquan|baguazhang|hung gar|aikijutsu|kenjutsu|taekkyon|ssireum|kurash|kushti/pehlwani|kalaripayattu|gatka",
      "dambe|laamb|tahtib|mukna|bokh|yağlı güreş|schwingen",
    ],
  },
  {
    c: "esporte", q: "Diga um esporte que se joga com bola",
    t: [
      "futebol|vôlei/voleibol|basquete|tênis|handebol",
      "futevôlei|beach tennis",
      "futsal|futebol americano|beisebol|golfe|rugby/rúgbi|polo aquático|tênis de mesa/pingue-pongue|boliche|sinuca/bilhar|queimada/queimado|vôlei de praia|squash|críquete|hóquei|softbol|frescobol|bocha|futebol de areia/beach soccer|padel",
      "raquetebol|lacrosse|pelota basca|hurling|futebol gaélico|futebol australiano|netball|korfebol|polo|sepak takraw|tchoukball|goalball|kickball|taco/bete/betes|altinha|pebolim/totó|croquet|petanca|pickleball|teqball|showbol",
      "jai alai|bandy|floorball|bossaball|roundnet|footgolf|futmesa|vôlei sentado|basquete 3x3|biribol|punhobol/faustball|handebol de praia",
      "pok-ta-pok|ulama|cuju|kemari|calcio storico|episkyros|harpastum|chinlone|fives|pallone|jeu de paume",
    ],
  },
  {
    c: "esporte", q: "Diga um país campeão da Copa do Mundo masculina (até 2022)",
    t: ["Brasil|Alemanha", "Argentina|França", "Itália", "Espanha|Uruguai", "Inglaterra", ""],
  },
  {
    c: "natureza", q: "Diga um animal da fazenda",
    t: [
      "vaca|galinha|porco|cavalo|boi",
      "pato|ovelha|cabra/bode",
      "galo|pintinho|burro/jumento/asno|peru|coelho|ganso|cachorro|gato|bezerro|carneiro|mula|codorna|touro|égua",
      "búfalo|lhama|alpaca|avestruz|pavão|faisão|galinha-d'angola/angolinha|marreco|pombo|abelha|rato|minhoca|cabrito|leitão|potro|novilho|cordeiro",
      "chinchila|javali|emu|bicho-da-seda|perdiz|ema|jabuti|tilápia|carpa|rã|escargot/caracol|capivara",
      "iaque|zebu|nelore|angus|holandesa|dromedário|camelo",
    ],
  },
  {
    c: "natureza", q: "Nomeie um animal que voa",
    t: [
      "pássaro/passarinho|pombo|borboleta|morcego|abelha",
      "beija-flor/colibri|águia|coruja",
      "mosca|mosquito/pernilongo|urubu|papagaio|arara|gaivota|falcão|gavião|andorinha|pardal|tucano|joaninha|libélula|vespa/marimbondo|periquito|canário|sabiá|bem-te-vi|pato|ganso|cegonha|garça|flamingo|pelicano|corvo|condor|mariposa|cigarra|gafanhoto|barata",
      "tico-tico|joão-de-barro|quero-quero|seriema|carcará|gralha|maritaca|curió|pintassilgo|azulão|tiziu|sanhaço|cardeal|pica-pau|martim-pescador|albatroz|fragata|biguá|socó|colhereiro|tuiuiú|harpia|abutre|cuco|rouxinol|cotovia|vaga-lume|besouro|tanajura/içá|trinca-ferro|anu",
      "peixe-voador|esquilo-voador|dragão-voador|cobra-voadora|lula-voadora|raposa-voadora|pterodáctilo|arapuã|mamangava|cigarrinha|tesourinha|suindara|caburé|mocho|urutau|bacurau|curiango|araponga|uirapuru|cambacica|saíra|tangará",
      "colugo|petauro|ganso-de-cabeça-listrada|andorinhão|fura-buxo|trinta-réis|maçarico|batuíra|mergulhão|jaçanã",
    ],
  },
  {
    c: "natureza", q: "Nomeie um inseto",
    t: [
      "formiga|barata|mosca|abelha|mosquito/pernilongo",
      "louva-a-deus/louva-deus|joaninha",
      "borboleta|gafanhoto|grilo|cigarra|besouro|cupim|vespa/marimbondo|libélula|vaga-lume/pirilampo|pulga|piolho|percevejo|mariposa|traça|lagarta|bicho-pau",
      "mamangava|tanajura/içá|bicho-da-seda|gorgulho|caruncho|tesourinha|esperança|barbeiro|mutuca|borrachudo|maruim|mosquito-palha|aedes/aedes aegypti|besouro-rinoceronte|escaravelho|rola-bosta|serra-pau|cochonilha|pulgão|mosca-branca|lacerdinha|potó",
      "jequitiranaboia|formiga-leão|formiga-bala|tucandeira|saúva|mané-magro|inseto-folha|cigarrinha|maria-fedida|vespa-do-figo|jataí|uruçu|mandaçaia|efemérida",
      "mosca-escorpião|donzelinha|mosca-da-pedra|bicho-lixeiro|caga-fogo",
    ],
  },
  {
    c: "natureza", q: "Diga uma árvore",
    t: [
      "pau-brasil|ipê/ipê-amarelo/ipê-roxo|mangueira|coqueiro|eucalipto",
      "baobá|araucária/pinheiro-do-paraná",
      "pinheiro|jabuticabeira|goiabeira|laranjeira|limoeiro|bananeira|jacarandá|palmeira|carvalho|cedro|mogno|seringueira|cajueiro|abacateiro|macieira|figueira|oliveira|sequoia|castanheira/castanheira-do-pará|jequitibá|aroeira|amendoeira|flamboyant|salgueiro",
      "peroba|jatobá|angico|cerejeira|pitangueira|aceroleira|amoreira|ameixeira|pessegueiro|nogueira|pau-ferro|sibipiruna|quaresmeira|embaúba|samaúma/sumaúma|buriti|açaizeiro|babaçu|carnaúba|cumaru|andiroba|copaíba|imbuia|canela|paineira|tamarindeiro|bordo|bétula|faia|freixo|abeto|cipreste|teixo|acácia|tipuana|ficus",
      "pequizeiro|cagaiteira|barbatimão|umbuzeiro|juazeiro|craibeira|mulungu|caatingueira|oiti|munguba|guapuruvu|jenipapeiro|cambuí|guabirobeira|pau-mulato|ucuuba|angelim|maçaranduba|sapucaia|mata-pau/figueira-mata-pau|jaqueira|tamboril|timbaúva|corticeira|canafístula|cinamomo|plátano|tília",
      "pau-d'alho|guatambu|grumixameira|cabreúva|chichá|pau-de-tucano|ingazeiro|bacurizeiro|pau-rei|araribá|garapeira|louro-pardo|sete-copas|dragoeiro|welwitschia",
    ],
  },
  {
    c: "natureza", q: "Nomeie uma raça de gato",
    t: [
      "siamês|persa|vira-lata/srd|angorá",
      "sphynx/esfinge|maine coon",
      "ragdoll|bengal/bengala|british shorthair|munchkin|himalaio|exótico/exotic|azul russo|scottish fold|sagrado da birmânia/birmanês|siberiano|norueguês da floresta|abissínio|savannah",
      "angorá turco|van turco|burmês/burmese|tonquinês|oriental|ocicat|devon rex|cornish rex|selkirk rex|laperm|somali|chartreux|bombaim/bombay|manx|bobtail japonês|american curl|american shorthair|ragamuffin|balinês|havana|korat|singapura|mau egípcio/egyptian mau|nebelung|toyger|peterbald|donskoy|elf|bambino",
      "kurilian bobtail|pixie-bob|chausie|serengeti|lykoi|khao manee|sokoke|ojos azules|york chocolate|cymric|highlander|minuet/napoleão|snowshoe|burmilla|german rex|ural rex|thai|cheetoh",
      "brasileiro de pelo curto",
    ],
  },
  {
    c: "natureza", q: "Nomeie uma flor",
    t: [
      "rosa|girassol|margarida|orquídea|tulipa",
      "lírio|cravo",
      "violeta|hortênsia|jasmim|lavanda/alfazema|camélia|azaleia|begônia|bromélia|copo-de-leite|crisântemo|dália|gérbera|hibisco|lótus/flor de lótus|magnólia|amor-perfeito|antúrio|bico-de-papagaio|buganvília/primavera|narciso|papoula|petúnia|íris|vitória-régia|maria-sem-vergonha/beijinho|rosa do deserto|lisianto/eustoma|astromélia|boca-de-leão",
      "gardênia|gladíolo/palma-de-santa-rita|jacinto|açucena|amarílis|flor-de-maio|cravina|cravo-de-defunto/tagetes|calêndula|camomila|dente-de-leão|edelvais|estrelítzia/ave-do-paraíso|helicônia|lantana|manacá|onze-horas|sempre-viva|ixora|kalanchoe|lírio-da-paz|madressilva|malva|mimosa|miosótis|peônia|prímula|ranúnculo|sálvia|verbena|zínia|cosmos|clematis|glicínia|dama-da-noite|flor-de-cera|resedá",
      "rafflésia|flor-cadáver|protea|anêmona|aquilégia|cinerária|delfínio/esporinha|fúcsia/brinco-de-princesa|gazânia|heliotrópio|ipomeia/glória-da-manhã|flor de maracujá/passiflora|nenúfar|oleandro/espirradeira|trombeta-de-anjo|rainha-da-noite|agapanto|clívia|alpínia|bastão-do-imperador|sapatinho-de-judia|chuva-de-ouro|coroa-de-cristo|caliandra|mussaenda",
      "flor-de-jade|puya/rainha-dos-andes|orquídea-fantasma|flor-chocolate|lírio-aranha|flor-esqueleto|planta-fantasma/monotropa|darlingtonia|hydnora|sakura/flor de cerejeira",
    ],
  },
  {
    c: "geografia", q: "Diga um país da Ásia",
    t: [
      "China|Japão|Índia|Coreia do Sul/coreia",
      "Coreia do Norte|Israel|Rússia",
      "Tailândia|Vietnã|Indonésia|Filipinas|Arábia Saudita|Irã|Iraque|Turquia|Afeganistão|Paquistão|Emirados Árabes/emirados árabes unidos/emirados|Catar/qatar|Singapura/cingapura|Malásia|Nepal|Mongólia|Síria|Líbano|Taiwan",
      "Camboja|Laos|Mianmar/birmânia|Bangladesh|Sri Lanka|Jordânia|Kuwait|Omã|Iêmen|Cazaquistão|Uzbequistão|Butão|Maldivas|Palestina|Brunei|Timor-Leste|Bahrein|Geórgia|Armênia|Azerbaijão|Chipre",
      "Quirguistão|Tadjiquistão",
      "Turcomenistão",
    ],
  },
  {
    c: "geografia", q: "Nomeie um país da África",
    t: [
      "Egito|África do Sul|Nigéria|Angola",
      "Moçambique|Cabo Verde|Marrocos",
      "Quênia|Etiópia|Gana|Senegal|Camarões|Argélia|Tunísia|Líbia|Congo/república do congo|República Democrática do Congo/rdc|Madagascar|Costa do Marfim|Sudão|Uganda|Tanzânia|Zimbábue|Ruanda|Somália|Guiné-Bissau|São Tomé e Príncipe",
      "Mali|Níger|Chade|Zâmbia|Namíbia|Botsuana|Malawi/malaui|Burkina Faso|Benin|Togo|Libéria|Serra Leoa|Guiné|Gabão|Eritreia|Sudão do Sul|Mauritânia|Gâmbia|Guiné Equatorial|Seychelles|Maurício",
      "Djibuti|Burundi|Lesoto|República Centro-Africana",
      "Essuatíni/suazilândia|Comores",
    ],
  },
  {
    c: "geografia", q: "Nomeie um ponto turístico do Brasil",
    t: [
      "Cristo Redentor|Pão de Açúcar|Cataratas do Iguaçu/foz do iguaçu|Fernando de Noronha/noronha|Copacabana",
      "Lençóis Maranhenses|Pelourinho|Gramado",
      "Bonito|Chapada Diamantina|Pantanal|Amazônia/floresta amazônica|Ipanema|Maracanã|Avenida Paulista/paulista|MASP|Ouro Preto|Jericoacoara/jeri|Porto de Galinhas|Arraial do Cabo|Búzios|Paraty|Ilha Grande|Morro de São Paulo|Chapada dos Veadeiros|Jalapão|Teatro Amazonas|Encontro das Águas|Escadaria Selarón|Congresso Nacional|Catedral de Brasília|Beto Carrero|Canela|Balneário Camboriú|Parque Ibirapuera/ibirapuera|Mercadão/mercado municipal|Elevador Lacerda|Farol da Barra|Praia do Forte|Maragogi|Pipa|Monte Roraima|Aparecida/basílica de aparecida|Inhotim|Lagoa da Conceição|Itaimbezinho/cânion do itaimbezinho|Serra do Rio do Rastro",
      "Cânion do Xingó/xingó|Delta do Parnaíba|Chapada dos Guimarães|Serra da Capivara|Vale do Pati|Alter do Chão|Atins|Barreirinhas|Trancoso|Arraial d'Ajuda|Itacaré|Caraíva|Boipeba|Praia do Rosa|Bombinhas|Ilhabela|Ubatuba|Trindade|Campos do Jordão|Monte Verde|Tiradentes|Diamantina|São Miguel das Missões/missões|Vale dos Vinhedos/bento gonçalves|Cambará do Sul|Urubici|Torres|Pedra do Baú|Pico da Neblina|Pico da Bandeira|Rota das Emoções|Gruta do Lago Azul|Rio da Prata|Buraco das Araras|Estação da Luz|Museu do Ipiranga|Museu do Amanhã|Theatro Municipal|Palácio da Alvorada|Ponte JK|Marco Zero|Olinda|Forte de Copacabana|Floresta da Tijuca|Pedra da Gávea|Santa Teresa|Arcos da Lapa/lapa|Sambódromo|Usina do Gasômetro|Mercado Público|Parque da Redenção/redenção|Lago Negro|Mini Mundo",
      "Pedra Furada|Sete Cidades|Cachoeira do Tabuleiro|Cachoeira da Fumaça|Poço Encantado|Poço Azul|Morro do Pai Inácio|Chapada das Mesas|Serra do Cipó|Capitólio|Canyon Guartelá|Vila Velha|Ilha do Mel|Ilha do Cardoso|Abrolhos|Atol das Rocas|Ilha do Campeche|Guarda do Embaú|Farol de Santa Marta|Laguna|São Joaquim|Lagoa do Peixe|Praia do Cassino/cassino|Chuí|Aparados da Serra|Cânion Fortaleza|Salto do Yucumã|Ilha dos Lobos|Vale da Lua|Cavernas do Peruaçu|Gruta de Maquiné|Ibitipoca|Mamirauá|Anavilhanas|Presidente Figueiredo|Monte Pascoal",
      "Forte Príncipe da Beira|Cidade de Pedra|Serra do Roncador|Ilha do Bananal|Pico do Cabugi|Lagoa do Abaeté|Caverna do Diabo|Cânion do Poti|Ilha de Superagui|Ponta do Seixas|Mina da Passagem|Morro da Igreja|Pedra do Ingá|Serra da Barriga",
    ],
  },
  {
    c: "comida", q: "Diga um sabor de sorvete",
    t: [
      "chocolate|morango|creme|baunilha|flocos",
      "napolitano|pistache",
      "limão|coco|doce de leite|menta|abacaxi|maracujá|uva|açaí|leite ninho/ninho|cookies|tapioca|milho verde|passas ao rum/rum com passas|chiclete|nata|manga|banana|café|caramelo|amendoim|brigadeiro|prestígio",
      "tangerina|goiaba|cereja|framboesa|mirtilo/blueberry|iogurte|cupuaçu|graviola|queijo|romeu e julieta|nutella|ovomaltine|paçoca|kiwi|melancia|abacate|pêssego|ameixa|canela|torta de limão|cheesecake|tiramisu|leite condensado|frutas vermelhas|mamão papaia/papaya",
      "bacuri|jabuticaba|mangaba|cajá|umbu|pequi|tamarindo|gengibre|chá verde/matchá|lavanda|rosas|gorgonzola|caju|buriti|tucumã|cocada|pamonha",
      "azeite|pimenta|bacon|cerveja|beterraba|manjericão|cenoura|wasabi|ketchup",
    ],
  },
  {
    c: "comida", q: "Diga uma comida típica de alguma região do Brasil",
    t: [
      "feijoada|churrasco|pão de queijo|acarajé|moqueca",
      "tacacá|barreado|arroz com pequi",
      "coxinha|baião de dois|vatapá|tapioca|carne de sol|feijão tropeiro/tropeiro|tutu de feijão|pastel|pamonha|cuscuz|caruru|bobó de camarão|virado à paulista|galinhada|picanha|costela|arroz carreteiro/carreteiro|açaí|maniçoba|pato no tucupi|buchada|sarapatel|escondidinho|cartola|arrumadinho|paçoca de carne|mocotó|dobradinha",
      "arroz de cuxá|caranguejada|caldeirada|caldo de piranha|pirão|frango com quiabo|vaca atolada|leitão à pururuca|mexido|empadão goiano|sopa paraguaia|chipa|sobá|pacu assado|quibebe|galeto|cuca|sagu|polenta|bauru|torresmo",
      "entrevero|xis|pinhão sapecado|charque|mocofava|rubacão|picadinho|galinha de cabidela/galinha à cabidela|sururu|maria-isabel|chibé|pirarucu de casaca|x-caboquinho|tambaqui assado|tucunaré",
      "farofa de içá|paçoca de pilão|caribéu|cabeça de galo|capote|panelada|mão de vaca|chambaril",
    ],
  },
  {
    c: "comida", q: "Nomeie um tipo de queijo",
    t: [
      "muçarela/mussarela/mozarela|parmesão|prato|minas/queijo minas|coalho/queijo coalho",
      "catupiry|gorgonzola",
      "provolone|cheddar|brie|camembert|ricota|cottage|requeijão|gouda|emmental/ementhal|suíço|roquefort|minas frescal/frescal|canastra|reino/queijo do reino|cream cheese|burrata|mascarpone|feta|edam|grana padano|pecorino|queijo branco",
      "gruyère|estepe|tilsit|colonial|serrano|manteiga/queijo de manteiga|marajó/queijo do marajó|cabacinha|halloumi|stilton|manchego|asiago|fontina|taleggio|raclette|reblochon|comté|havarti|muenster/munster|monterey jack|bocconcini|stracciatella|scamorza|caciocavallo|boursin|queijo de cabra/chèvre|labneh|paneer|queso fresco",
      "serro|araxá|salitre|campo das vertentes|muçarela de búfala|queijo de cuia|maasdam|jarlsberg|limburger|époisses|vacherin|mimolette|cantal|saint-paulin|tête de moine|appenzeller|sbrinz|provola",
      "casu marzu|pule|bryndza|oscypek|brunost|chhena|milbenkäse|kashkaval|queijo do pico|serra da estrela",
    ],
  },
  {
    c: "comida", q: "Diga uma rede de fast food ou lanchonete",
    t: [
      "McDonald's/mcdonalds/mc|Burger King/bk|Subway|KFC|Habib's/habibs",
      "Bob's/bobs|Giraffas",
      "Pizza Hut|Domino's/dominos|Outback|Madero|Spoleto|China in Box|Starbucks|Popeyes|Taco Bell|Ragazzo|Jeronimo|Coco Bambu|Casa do Pão de Queijo|Rei do Mate|Cinnabon|Dunkin|Wendy's|Five Guys|Shake Shack|Applebee's|TGI Fridays|Montana Grill|Viena|Divino Fogão|Mania de Churrasco|Gendai|Koni|Vivenda do Camarão",
      "Lanchonete da Cidade|Patroni|Cheirin Bão|Mr. Pretzels|Bacio di Latte|Chiquinho Sorvetes|Ofner|Fran's Café|Havanna|Grão Espresso|Black Dog|Oakberry|Griletto|Mega Mate|Bullguer|Johnny Rockets|Carl's Jr|Jack in the Box|In-N-Out|Chick-fil-A|Arby's|Sonic|Jollibee|Tim Hortons|Panda Express|Chipotle|Krispy Kreme|Nando's",
      "Sukiya|Yoshinoya|Mos Burger|Lotteria|Quick|Hesburger|Max Burgers|Steak 'n Shake|White Castle|Whataburger|Culver's|Del Taco|Little Caesars|Papa John's|Sbarro|Dairy Queen|Baskin-Robbins|Zaxby's|Bojangles|Raising Cane's|Wingstop|Pollo Tropical|Pollo Campero|Telepizza",
      "Burgerville|Krystal|Hardee's|Long John Silver's|Checkers|Bembos",
    ],
  },
  {
    c: "cultura", q: "Diga um filme de animação",
    t: [
      "Toy Story|Shrek|Frozen|O Rei Leão/rei leão|Procurando Nemo/nemo",
      "Divertida Mente|Up/up altas aventuras|Carros",
      "Moana|Encanto|Os Incríveis|Monstros S.A./monstros sa|Ratatouille|WALL-E|Madagascar|A Era do Gelo/era do gelo|Kung Fu Panda|Meu Malvado Favorito|Minions|Viva/viva a vida é uma festa|Zootopia|Aladdin|A Bela e a Fera|A Pequena Sereia|Branca de Neve|Cinderela|Enrolados|Lilo & Stitch/lilo e stitch|Rio|Como Treinar o Seu Dragão|Aranhaverso/homem-aranha no aranhaverso|Super Mario Bros/super mario",
      "A Viagem de Chihiro/chihiro|Meu Amigo Totoro/totoro|Mogli|Bambi|Dumbo|Pinóquio|Peter Pan|Hércules|Mulan|Tarzan|Pocahontas|O Corcunda de Notre Dame|Valente|Soul|Luca|Red|Elementos|Wish|Bolt|Detona Ralph|Operação Big Hero/big hero|Lorax|Coraline|A Noiva Cadáver|O Estranho Mundo de Jack|Hotel Transilvânia|Trolls|Megamente|Spirit|A Fuga das Galinhas|Wallace e Gromit|Os Croods|Gato de Botas|Sing|Pets|Robôs|Formiguinhaz|Vida de Inseto|Irmão Urso|Atlantis|Planeta do Tesouro|Kubo",
      "Princesa Mononoke|O Castelo Animado|Ponyo|O Serviço de Entregas da Kiki|O Túmulo dos Vagalumes|Akira|Your Name/kimi no na wa|Paprika|Perfect Blue|Persépolis|O Menino e o Mundo|Uma História de Amor e Fúria|Tito e os Pássaros|Wolfwalkers|A Canção do Mar|Flow|Robô Selvagem|Klaus|A Família Mitchell e a Revolta das Máquinas|Fantasia|A Espada era a Lei|Oliver e sua Turma|O Cão e a Raposa|A Dama e o Vagabundo|101 Dálmatas|Aristogatas|Robin Hood|Bernardo e Bianca|Mary e Max|O Gigante de Ferro|Anastasia|Em Busca do Vale Encantado",
      "O Menino e a Garça|Tekkonkinkreet|Mind Game|A Tartaruga Vermelha|Ernest e Celestine|O Ilusionista|As Bicicletas de Belleville|Sinfonia Amazônica|Cassiopéia|Garoto Cósmico|Minhocas|Até que a Sbórnia nos Separe",
    ],
  },
  {
    c: "cultura", q: "Diga um cantor ou cantora brasileira",
    t: [
      "Anitta|Roberto Carlos|Ivete Sangalo/ivete|Caetano Veloso/caetano|Gilberto Gil",
      "Seu Jorge|Marília Mendonça|Xuxa",
      "Chico Buarque|Gal Costa|Elis Regina|Maria Bethânia|Djavan|Milton Nascimento|Tim Maia|Rita Lee|Cazuza|Renato Russo|Ludmilla|Luan Santana|Gusttavo Lima|Jorge Ben Jor/jorge ben|Marisa Monte|Zeca Pagodinho|Alcione|Pabllo Vittar|Iza|Liniker|Pitty|Vanessa da Mata|Sandy|Lulu Santos|Raul Seixas|Ney Matogrosso|Ana Castela|Daniela Mercury|Claudia Leitte|Thiaguinho|Belo|Péricles|Wesley Safadão|Joelma",
      "Tom Jobim|João Gilberto|Vinicius de Moraes|Nara Leão|Clara Nunes|Beth Carvalho|Cartola|Noel Rosa|Adoniran Barbosa|Luiz Gonzaga|Dominguinhos|Elba Ramalho|Alceu Valença|Zé Ramalho|Fagner|Belchior|Erasmo Carlos|Wanderléa|Fábio Jr|Leonardo|Daniel|Sérgio Reis|Paula Fernandes|Lexa|Gloria Groove|Duda Beat|Marina Sena|Tiago Iorc|Vitor Kley|Céu|Maria Gadú|Ana Carolina|Zélia Duncan|Emicida|Criolo|Mano Brown|Sabotage|Marcelo D2|Gabriel o Pensador|Projota|Djonga|Baco Exu do Blues|Filipe Ret|Matuê|Kevin o Chris|Lenine|Chico Science|Nando Reis|Arnaldo Antunes|Samuel Rosa|Frejat|Dinho Ouro Preto|Paulo Ricardo|Herbert Vianna|Jorge Aragão|Arlindo Cruz|Martinho da Vila|Paulinho da Viola|Diogo Nogueira|Roberta Sá|Ferrugem|Dilsinho|Xande de Pilares|Simone Mendes|Michel Teló|João Gomes|Zé Vaqueiro|Xand Avião|Gaby Amarantos|Fafá de Belém|Pocah",
      "Tom Zé|Itamar Assumpção|Jards Macalé|Sérgio Sampaio|Luiz Melodia|Cássia Eller|Angela Ro Ro|Hermeto Pascoal|Egberto Gismonti|Johnny Alf|Dolores Duran|Maysa|Elizeth Cardoso|Ângela Maria|Cauby Peixoto|Nelson Gonçalves|Carmen Miranda|Dalva de Oliveira|Orlando Silva|Jackson do Pandeiro|Clementina de Jesus|Dona Ivone Lara|Leci Brandão|Elza Soares|Moraes Moreira|Baby do Brasil|Pepeu Gomes|Almir Sater|Renato Teixeira|Inezita Barroso|Teixeirinha|Vitor Ramil|Gaúcho da Fronteira|Nei Lisboa|Humberto Gessinger|Dona Onete",
      "Lupicínio Rodrigues|Noel Guarany|Bebeto Alves|Jupiter Maçã|Wander Wildner|Taiguara|Ronnie Von|Jerry Adriani|Odair José|Reginaldo Rossi|Waldick Soriano|Amado Batista|Sidney Magal|Nelson Ned|Agnaldo Timóteo",
    ],
  },
  {
    c: "cultura", q: "Nomeie um personagem de videogame",
    t: [
      "Mario|Sonic|Pikachu|Luigi",
      "Kratos|Steve|Pac-Man/pacman",
      "Link|Zelda|Peach/princesa peach|Bowser|Yoshi|Donkey Kong|Lara Croft|Master Chief|Crash/crash bandicoot|Spyro|Kirby|Samus|Ryu|Ken|Chun-Li|Sub-Zero|Scorpion|Cloud|Ezio|Nathan Drake|Joel|Ellie|Creeper|Tails|Knuckles|Mega Man|Wario",
      "Shadow|Eggman/robotnik/dr. eggman|Toad|Daisy|Waluigi|Ganondorf/ganon|Sephiroth|Tifa|Aerith|Solid Snake/snake|Leon Kennedy/leon|Jill Valentine|Chris Redfield|Dante|Bayonetta|Arthur Morgan|Geralt|Aloy|Doomguy/doomslayer|Gordon Freeman|Sackboy|Rayman|Ratchet|Banjo|Fox McCloud|Ness|Marth|Isabelle|Tom Nook|Agente 47/agent 47|Marcus Fenix|Kazuya|Heihachi|Liu Kang|Raiden|Johnny Cage|Kitana|Blanka|Guile|Dhalsim|Zangief|M. Bison/bison|Akuma|Terry Bogard|CJ/carl johnson|Tommy Vercetti|Niko Bellic|Pyramid Head|Cuphead|Sans|Madeline|Hollow Knight|Shovel Knight|GLaDOS|Isaac",
      "Alex Kidd|Ryu Hayabusa|Simon Belmont|Alucard|Bomberman|Q*bert/qbert|Dig Dug|Frogger|Earthworm Jim|Vectorman|Ecco|Bonk|Jak|Daxter|Sly Cooper|Gex|Croc|Klonoa|Conker|Dixie Kong|Diddy Kong|King K. Rool|Ridley|Meta Knight|King Dedede|Captain Falcon|Olimar|Kerrigan|Arthas|Illidan|Thrall|Tracer|Mercy|Genji|Jinx|Ahri|Teemo|Yasuo|Herobrine|Enderman",
      "Ristar|Wonder Boy|Pepsiman|Bubsy|Psycho Fox|Kid Chameleon|Glover|Sir Daniel Fortesque|Blinx|Chibi-Robo|Toki",
    ],
  },
  {
    c: "cultura", q: "Diga uma língua (idioma) falada no mundo",
    t: [
      "inglês|espanhol|português|francês|alemão",
      "japonês|chinês/mandarim|italiano",
      "russo|árabe|coreano|hindi|grego|latim|holandês/neerlandês|turco|hebraico|polonês|sueco|norueguês|dinamarquês|finlandês|tupi|libras|esperanto",
      "guarani|quíchua/quechua|catalão|galego|basco/euskera|ucraniano|romeno|húngaro|tcheco|búlgaro|sérvio|croata|persa/farsi|urdu|bengali|tailandês|vietnamita|indonésio|malaio|tagalo|suaíli/swahili|zulu|africâner|irlandês/gaélico|islandês|albanês|armênio|georgiano|cantonês|tâmil|panjabi|iorubá|amárico",
      "nheengatu|kaingang|yanomami/ianomâmi|ticuna|terena|xavante|pomerano|talian|hunsriqueano/hunsrückisch|crioulo|papiamento|lituano|letão|estoniano|eslovaco|esloveno|macedônio|maltês|galês|bretão|occitano|sardo|romanche|mongol|tibetano|nepalês|cazaque|uzbeque|curdo|aramaico|sânscrito|hauçá|igbo|somali|malgaxe|maori|havaiano|inuktitut|navajo|klingon|élfico/quenya",
      "sindarin|dothraki|na'vi|sumério|acádio|gótico|nórdico antigo|manx|córnico|ainu|pirahã|bororo|karajá|krenak|tocariano",
    ],
  },
  {
    c: "cultura", q: "Nomeie um jogo de tabuleiro ou de cartas",
    t: [
      "xadrez|dama/damas|Banco Imobiliário/monopoly|Uno|truco",
      "War/risk|Detetive/clue|pôquer/poker",
      "dominó|ludo|Jogo da Vida|Imagem & Ação/imagem e ação|Cara a Cara|Batalha Naval|Perfil|Twister|Jenga|buraco|canastra|tranca|paciência|sueca|cacheta|pife|burro|mau-mau|blackjack/21/vinte e um|bingo|gamão|resta um|jogo da velha|Catan|Ticket to Ride|Dixit|Codenames|Magic|Yu-Gi-Oh|Scrabble",
      "Stop/adedonha|Combate|Senha/mastermind|Pega Varetas|Cilada|Carcassonne|Pandemic|Azul|Splendor|Exploding Kittens|Dobble|Coup|Love Letter|Bang|Munchkin|Dungeons & Dragons/d&d|Gloomhaven|Terraforming Mars|Wingspan|7 Wonders|Dominion|Go|mancala/oware|damas chinesas|trilha/moinho|Rummikub|copas|bridge|escopa|bisca|Lince|Super Trunfo|Tapa Certo|Cai Não Cai|Operando|Mico/jogo do mico",
      "Shogi|Xiangqi|Hanafuda|Mahjong|Pachisi|Senet|Jogo Real de Ur/ur|Hnefatafl|Puerto Rico|Agricola|Brass|Twilight Imperium|Root|Scythe|Spirit Island|Arkham Horror|Mysterium|Concept|Telestrations|Wavelength|Just One|The Mind|Hanabi|Sushi Go|Kingdomino|Patchwork|Santorini|Onitama|Hive|Quoridor|Blokus|Othello/reversi|Abalone|Lig 4/connect four|Rouba-Monte|Sete e Meio|Cuco",
      "Mehen|Patolli|Alquerque|Fanorona|Bao|Tablut|Surakarta|Chaturanga|Jogo da Onça/adugo",
    ],
  },
  {
    c: "cultura", q: "Diga um filme ou série de terror",
    t: [
      "It/it a coisa|Invocação do Mal|O Exorcista|Pânico|Annabelle",
      "Jogos Mortais|Sexta-Feira 13|A Hora do Pesadelo",
      "O Iluminado|Halloween|Atividade Paranormal|O Chamado|Brinquedo Assassino/chucky|Corra!|Nós|Hereditário|A Freira|Sobrenatural|Stranger Things|A Bruxa de Blair|O Massacre da Serra Elétrica|Premonição|A Morte do Demônio/evil dead|Psicose|Alien|O Grito|Um Lugar Silencioso|Fale Comigo|Sorria/smile|Terrifier|M3GAN/megan|Five Nights at Freddy's|Midsommar|O Babadook/babadook|Cemitério Maldito|Carrie/carrie a estranha|Drácula|Frankenstein|A Maldição da Residência Hill|The Walking Dead|American Horror Story",
      "O Bebê de Rosemary|A Profecia|Poltergeist|Tubarão|O Enigma de Outro Mundo|Hellraiser|A Mosca|Os Pássaros|Suspiria|A Noite dos Mortos-Vivos|Madrugada dos Mortos|Extermínio|O Albergue|A Casa de Cera|Pânico na Floresta|Quarentena|REC|Garota Infernal|Corrente do Mal|O Farol|A Substância|Longlegs|Noites Brutais|X|Pearl|Fragmentado|Mama|O Espelho|A Entidade|A Morte Te Dá Parabéns|O Telefone Preto",
      "À Meia-Noite Levarei Sua Alma/zé do caixão|Esta Noite Encarnarei no Teu Cadáver|O Animal Cordial|As Boas Maneiras|Trabalhar Cansa|Morto Não Fala|Mal Nosso|Skinamarink|Possessor|Ringu|Ju-On|Kairo|Medo|Invasão Zumbi|O Hospedeiro|O Lamento|Mártires/martyrs|Alta Tensão|A Invasora|Grave|Titane|Lake Mungo|Noroi|Kill List|Nosferatu|O Gabinete do Dr. Caligari|Vampyr|Haxan|Eraserhead",
      "Encarnação do Demônio|O Segredo da Múmia|As Sete Vampiras|Mangue Negro|Mar Negro|Sinfonia da Necrópole|O Escaravelho do Diabo",
    ],
  },
  {
    c: "cultura", q: "Diga um ritmo ou estilo musical",
    t: [
      "samba|funk|sertanejo|rock|pagode",
      "forró|axé|MPB",
      "pop|rap|hip hop|jazz|blues|reggae|bossa nova|eletrônica/música eletrônica|gospel|clássica/música clássica|country|heavy metal/metal|punk|trap|k-pop|reggaeton|frevo|maracatu|baião|xote|xaxado|brega|tecnobrega|arrocha|piseiro/pisadinha|lambada|choro/chorinho|música gaúcha/nativista|vanerão/vaneira|chamamé|sertanejo universitário",
      "carimbó|lundu|maxixe|marchinha|samba-enredo|samba de roda|samba-rock|partido-alto|pagode baiano|swingueira|kuduro|zouk|kizomba|bachata|salsa|merengue|cumbia|tango|bolero|fado|flamenco|ópera|soul|r&b|disco|house|techno|trance|dubstep|drum and bass|lo-fi|indie|grunge|emo|ska|hardcore|thrash|forró pé de serra|repente|embolada|coco|ciranda|moda de viola|catira|guarânia|rasqueado|polca|milonga|bugio|toada|boi-bumbá|congada|jongo|afoxé|ijexá|manguebeat|tropicália|jovem guarda|funk melody|funk ostentação|brega funk|sofrência",
      "vaporwave|synthwave|shoegaze|post-rock|math rock|krautrock|bebop|swing|ragtime|canto gregoriano/gregoriano|barroco|madrigal|zydeco|bluegrass|cajun|afrobeat|highlife|soukous|qawwali|gamelan|enka|j-pop|bhangra|raï|rebetiko|klezmer|fandango|cateretê|siriri|lambadão|guitarrada|beiradão|marabaixo|tambor de crioula|bumba meu boi|cacuriá",
      "chula|rancheira|chamarra|chacarera|zamba|cururu|mazurca|xótis|tirana",
    ],
  },
  {
    c: "cultura", q: "Nomeie uma figura histórica brasileira",
    t: [
      "Dom Pedro I|Tiradentes|Santos Dumont|Getúlio Vargas/getúlio|Pedro Álvares Cabral/cabral",
      "Princesa Isabel|Zumbi/zumbi dos palmares|Dom Pedro II",
      "Juscelino Kubitschek/jk|Machado de Assis|Oswaldo Cruz|Chico Mendes|Lampião|Maria Bonita|Anita Garibaldi|Carlos Gomes|Villa-Lobos/heitor villa-lobos|Ayrton Senna|Pelé|Marechal Rondon/rondon|Rui Barbosa|Duque de Caxias|Deodoro da Fonseca/marechal deodoro|Floriano Peixoto|José Bonifácio|Carlos Chagas|Paulo Freire|Oscar Niemeyer/niemeyer|Tarsila do Amaral/tarsila|Anita Malfatti|Portinari/cândido portinari|Carmen Miranda|Chiquinha Gonzaga|Irmã Dulce|Chico Xavier|Clarice Lispector|Carlos Drummond de Andrade/drummond|Monteiro Lobato|Jorge Amado|Cecília Meireles|Castro Alves|Aleijadinho",
      "Dandara|Luís Gama|André Rebouças|José do Patrocínio|Joaquim Nabuco|Maria Quitéria|Bárbara de Alencar|Frei Caneca|Antônio Conselheiro|Padre Cícero|Bento Gonçalves|Giuseppe Garibaldi|Barão de Mauá/mauá|Barão do Rio Branco|Dom João VI|Carlota Joaquina|Imperatriz Leopoldina/leopoldina|Marquesa de Santos|Gregório de Matos|Padre Antônio Vieira|José de Anchieta/anchieta|Manuel da Nóbrega|Bartolomeu de Gusmão|Vital Brazil|Adolfo Lutz|Nise da Silveira|Bertha Lutz|Carolina Maria de Jesus|Guimarães Rosa|Graciliano Ramos|Lima Barreto|Euclides da Cunha|Mário de Andrade|Oswald de Andrade|Di Cavalcanti|Lina Bo Bardi|Burle Marx|Glauber Rocha|Darcy Ribeiro|Sérgio Buarque de Holanda|Gilberto Freyre|Celso Furtado|Milton Santos|Marielle Franco|Betinho|Dom Hélder Câmara|Luís Carlos Prestes/prestes|Olga Benário|Leonel Brizola/brizola|João Goulart/jango|Jânio Quadros|Ulysses Guimarães|Tancredo Neves|Ana Néri",
      "Ganga Zumba|Aqualtune|Tereza de Benguela|Luísa Mahin|Chica da Silva|Felipe Camarão|Henrique Dias|Bárbara Heliodora|Hipólito José da Costa|Cipriano Barata|Teófilo Otoni|Marechal Hermes|Washington Luís|Café Filho|Eurico Dutra|Delmiro Gouveia|Francisco Matarazzo|Assis Chateaubriand|Cacilda Becker|Dercy Gonçalves|Grande Otelo|Mazzaropi|Oscarito|Pixinguinha|Ary Barroso|Dorival Caymmi|Patativa do Assaré|Cora Coralina|Augusto dos Anjos|Cruz e Sousa|Olavo Bilac|Gonçalves Dias|José de Alencar|Álvares de Azevedo|Rachel de Queiroz|Erico Verissimo|Mario Quintana|Lupicínio Rodrigues",
      "Bartira|Caramuru|João Ramalho|Tibiriçá|Arariboia|Cunhambebe|Ajuricaba|Sepé Tiaraju|Mandu Ladino|Manuel Congo|Clara Camarão|Maria Felipa|Joana Angélica|Jovita Feitosa",
    ],
  },
  {
    c: "cultura", q: "Diga um superpoder",
    t: [
      "voar|invisibilidade/ficar invisível|super força/força|teletransporte|telepatia/ler mentes",
      "viajar no tempo|parar o tempo/controlar o tempo",
      "super velocidade/velocidade|visão de raio-x/raio x|imortalidade|regeneração/cura/fator de cura|telecinese|metamorfose/mudar de forma|controlar fogo/fogo/piroquinese|controlar água/hidrocinese|controlar gelo/gelo/criocinese|eletricidade/soltar raios|respirar debaixo d'água|falar com animais|encolher|crescer|elasticidade|soltar teia/teia|super audição|visão noturna|clonagem|ver o futuro/premonição/precognição|controlar mentes",
      "atravessar paredes/intangibilidade|magnetismo|controlar a gravidade|criar portais|campo de força|absorver poderes|copiar poderes|explosões|sentido aranha|invulnerabilidade|controlar plantas|controlar o clima|controlar a terra|controlar sombras/umbracinese|controlar a luz/fotocinese|grito sônico|super inteligência|falar todas as línguas|ressuscitar|necromancia|manipular a realidade|ilusão|hipnose|possessão|transmutação|controlar metal|controlar sangue|ecolocalização|camuflagem|veneno|garras|asas",
      "sorte/manipular probabilidade|tecnopatia/controlar máquinas|psicometria|projeção astral|retrocognição|clarividência|empatia|duplicação|controle molecular|absorver energia|levitação|nunca dormir|não sentir dor|memória fotográfica/memória perfeita",
      "nunca pegar trânsito|wi-fi infinito|comer sem engordar|falar com plantas|acordar sem despertador|achar o controle remoto|entender cachorro|dormir em qualquer lugar|sempre achar vaga",
    ],
  },
  {
    c: "ciencia", q: "Nomeie um cientista famoso",
    t: [
      "Albert Einstein/einstein|Isaac Newton/newton|Charles Darwin/darwin|Galileu/galileu galilei|Marie Curie/madame curie",
      "Nikola Tesla/tesla|Stephen Hawking/hawking|Santos Dumont/alberto santos-dumont",
      "Thomas Edison/edison|Louis Pasteur/pasteur|Leonardo da Vinci/da vinci|Aristóteles|Pitágoras|Arquimedes|Copérnico|Kepler|Mendel|Freud|Alexander Fleming/fleming|Carl Sagan/sagan|Oswaldo Cruz|Carlos Chagas|Vital Brazil|Alan Turing/turing|Graham Bell|Benjamin Franklin|Michael Faraday/faraday|Niels Bohr/bohr|Max Planck/planck|Oppenheimer",
      "Rosalind Franklin|Watson|Crick|Ada Lovelace|Hipátia|Euclides|Ptolomeu|Hipócrates|Lavoisier|Mendeleev/mendeleiev|Dalton|Rutherford|Schrödinger|Heisenberg|Dirac|Feynman|Fermi|Maxwell|Hubble/edwin hubble|Pavlov|Lamarck|Lineu|Humboldt|Jane Goodall|Dian Fossey|Rachel Carson|Jacques Cousteau|Ampère|Volta|Ohm|James Watt|Kelvin|Celsius|Fahrenheit|Joule|Pascal|Descartes|Leibniz|Euler|Gauss|Fibonacci|Hooke|Boyle|Avogadro|Alfred Nobel|Robert Koch|Jenner|Semmelweis|Lister|Salk|Sabin|Katalin Karikó|Neil deGrasse Tyson|Galeno|Avicena|Al-Khwarizmi",
      "César Lattes|Mário Schenberg|Johanna Döbereiner|Bertha Lutz|Nise da Silveira|Adolfo Lutz|Carlos Chagas Filho|Miguel Nicolelis|Suzana Herculano-Houzel|Artur Avila|Marcelo Gleiser|Duília de Mello|Sônia Guimarães|Jaqueline Goes de Jesus|Landell de Moura|Bartolomeu de Gusmão|Ramanujan|Emmy Noether|Lise Meitner|Chien-Shiung Wu|Barbara McClintock|Dorothy Hodgkin|Vera Rubin|Henrietta Leavitt|Cecilia Payne|Tycho Brahe|Huygens|Torricelli|Leeuwenhoek|Hertz|Röntgen|Becquerel|Pierre Curie|Gödel|Von Neumann|Claude Shannon|Grace Hopper|Hedy Lamarr|Margaret Hamilton|Katherine Johnson|Tim Berners-Lee|Ibn al-Haytham",
      "Oswaldo Frota-Pessoa|Crodowaldo Pavan|Warwick Kerr|Aziz Ab'Saber|José Leite Lopes|Jayme Tiomno|Elisa Frota-Pessoa|Graziela Barroso|Carlos Nobre",
    ],
  },
  {
    c: "ciencia", q: "Diga algo que existe no espaço",
    t: [
      "estrela|planeta|sol|lua|cometa",
      "buraco negro|asteroide",
      "galáxia|Via Láctea|meteoro|meteorito|satélite|nebulosa|constelação|supernova|estação espacial/iss|foguete|astronauta|lixo espacial|anéis de Saturno|poeira cósmica|vácuo|radiação|Hubble/telescópio hubble|sonda|Marte|Júpiter|Terra|Plutão|Andrômeda/galáxia de andrômeda|estrela cadente",
      "quasar|pulsar|estrela de nêutrons|anã branca|anã vermelha|gigante vermelha|matéria escura|energia escura|exoplaneta|cinturão de asteroides|cinturão de Kuiper|nuvem de Oort|buraco de minhoca|vento solar|tempestade solar|mancha solar|raios cósmicos|radiação cósmica de fundo|Sirius|Betelgeuse|Alfa Centauri|Estrela Polar/polaris|Cruzeiro do Sul|Órion/três marias|Plêiades|Voyager|James Webb|Sputnik|Tiangong|Starlink|Europa|Titã|Ganimedes|Ceres|cometa Halley/halley",
      "magnetar|blazar|anã marrom|cefeida|aglomerado globular|ponto de Lagrange|disco de acreção|horizonte de eventos|singularidade|antimatéria|neutrino|grande atrator|vazio de Boötes|Sagitário A*|Proxima Centauri|TRAPPIST-1|Oumuamua|Nuvens de Magalhães|Pilares da Criação|Nebulosa de Órion|Nebulosa do Caranguejo|Eta Carinae|Vega|Antares|Rigel|Aldebarã|Canopus|Arcturus|New Horizons|Perseverance|Curiosity|Ingenuity|Rosetta|Cassini|Juno|Parker",
      "Stephenson 2-18|UY Scuti|objeto de Hoag|estrela de Tabby|Laniakea|Grande Muralha Sloan|El Gordo|sinal Wow|bolhas de Fermi",
    ],
  },
  {
    c: "ciencia", q: "Diga uma unidade de medida",
    t: [
      "metro|quilo/quilograma/kg|litro|centímetro/cm|grama",
      "polegada|pé",
      "quilômetro|milímetro/mm|tonelada|segundo|minuto|hora|mililitro/ml|grau|celsius|watt|volt|caloria|hectare|metro quadrado|byte|megabyte/mega|gigabyte/giga|milha|libra|dúzia|semana|mês|ano|século|década",
      "ampere|joule|newton|pascal|kelvin|fahrenheit|hertz|decibel|ohm|quilowatt|cavalo-vapor/cv|rpm|jarda|onça|galão|nó|arroba|alqueire|palmo|légua|braça|metro cúbico|terabyte|bit|ano-luz|quilate|bar|atmosfera|mol|lúmen|candela|xícara|colher de sopa",
      "parsec|unidade astronômica|angstrom|mícron/micrômetro|nanômetro|coulomb|farad|henry|tesla|weber|siemens|becquerel|sievert|gray|lux|dioptria|radiano|esterradiano|grão|pinta|vara|côvado|toesa|barril|btu|erg|dina|gauss|torr|milímetro de mercúrio/mmhg|nanossegundo|milênio|pixel|dpi|baud",
      "fanga|almude|canada|quarta|tarefa|smoot|furlong|stone|slug|poise|stokes|picômetro|yoctossegundo|tempo de Planck",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie algo que tem numa cozinha",
    t: [
      "geladeira|fogão|pia|panela|prato",
      "micro-ondas|airfryer/air fryer",
      "garfo|faca|colher|copo|xícara|mesa|cadeira|liquidificador|forno|armário|talher|frigideira|chaleira|cafeteira|torradeira|batedeira|panela de pressão|escorredor|lixeira|pano de prato|esponja|detergente|tábua de carne|concha|espátula|abridor",
      "ralador|peneira|rolo de massa|batedor/fouet|tesoura|pegador|filtro|bule|garrafa térmica|pote/tupperware|assadeira|forma|fruteira|porta-temperos|saleiro|açucareiro|paliteiro|avental|luva térmica|mixer|sanduicheira|processador|coifa/exaustor|lava-louças|freezer|purificador",
      "pilão|almofariz|moedor|cuscuzeira|espremedor|descascador|cortador de pizza|termômetro|balança|timer|mandoline|wok|fondue|grill|panela elétrica de arroz|iogurteira|desidratador|máquina de pão|sorveteira",
      "chinoise|cloche|sifão|chaira/pedra de afiar|quebra-nozes|boleador|maçarico|banho-maria|tacho|caldeirão|saca-rolhas|cutelo",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie um aplicativo de celular",
    t: [
      "WhatsApp/zap|Instagram/insta|TikTok|YouTube",
      "Facebook|Uber|iFood",
      "Spotify|Netflix|Telegram|Twitter/x|Gmail|Google Maps/maps|Waze|Nubank|Mercado Livre|Shopee|Amazon|Kwai|Pinterest|Discord|Snapchat|LinkedIn|99|Google|Chrome|ChatGPT|PicPay|Inter|Duolingo|Tinder|Twitch|Disney+/disney plus|Prime Video",
      "Shein|AliExpress|Magalu|Americanas|OLX|Rappi|Zé Delivery|Deezer|Globoplay|Max/hbo max|Threads|Reddit|Bumble|Canva|CapCut|Zoom|Teams|Google Meet/meet|Outlook|Google Drive/drive|Dropbox|Signal|Gov.br|Caixa Tem|FGTS|Bradesco|Itaú|Santander|Banco do Brasil|PayPal|Strava|Calm|Shazam|Moovit|Airbnb|Booking",
      "Notion|Trello|Slack|Evernote|Truecaller|Life360|Letterboxd|Goodreads|Wattpad|Kindle|Audible|Flo|MyFitnessPal|Nike Run Club|BeReal|Clubhouse|Vivino|Yuka|Too Good To Go|Mobills|Organizze|Sem Parar|Veloe|Carteira Digital de Trânsito/cdt|e-Título|Meu INSS|Conecte SUS",
      "Habitica|Forest|Anki|Obsidian|Mastodon|Bluesky|Tumblr|Orkut|MSN|ICQ|Vine|Periscope|Foursquare",
    ],
  },
  {
    c: "cotidiano", q: "Diga uma marca famosa de roupa ou tênis",
    t: [
      "Nike|Adidas|Puma|Zara",
      "Gucci|Louis Vuitton|Havaianas",
      "Hering|Renner|C&A/cea|Riachuelo|Reserva|Lacoste|Tommy Hilfiger/tommy|Calvin Klein|Levi's/levis|Chanel|Prada|Converse/all star|Vans|Fila|Mizuno|Olympikus|Asics|New Balance|Reebok|Under Armour|Farm|Osklen|Ralph Lauren/polo ralph lauren|Hollister|Abercrombie",
      "Dior|Versace|Balenciaga|Armani|Burberry|Hermès|Fendi|Givenchy|Valentino|Saint Laurent/ysl|Dolce & Gabbana/dolce gabbana|Supreme|Off-White|Champion|Kappa|Umbro|Penalty|Topper|Rainha|Kichute|Melissa|Arezzo|Schutz|Colcci|Ellus|Forum|Animale|Cantão|Richards|Aramis|Dudalina|Cyclone|Mormaii|Oakley|Quiksilver|Billabong|Rip Curl|Hurley|Element|Diesel|Guess|Uniqlo|H&M|Lupo|Marisa|Pernambucanas|Youcom",
      "Moncler|Stone Island|Patagonia|The North Face/north face|Columbia|Timberland|Dr. Martens|Birkenstock|Crocs|Ugg|Veja|Insecta Shoes|Mr. Cat|Democrata|Ferracini|West Coast|Cavalera|Triton|Zoomp|Fido Dido|Pakalolo|Company|Redley|Hang Loose",
      "Bad Boy|Gang|M.Officer|Yes Brazil|Taco|Toulon|Brooksfield|Siberian|Staroup|US Top|Conga|Bamba",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie um meio de transporte",
    t: [
      "carro|ônibus|moto|avião|bicicleta/bike",
      "patinete|helicóptero|metrô",
      "trem|navio|barco|caminhão|táxi|van|lancha|caminhonete/picape|skate|cavalo|submarino|foguete|bonde|balsa|jet ski|canoa|iate|ambulância|carroça|teleférico|trator",
      "monotrilho|VLT|trólebus|BRT|kombi|jipe|quadriciclo|triciclo|charrete|riquixá|tuk-tuk|gôndola|jangada|caiaque|veleiro|planador|balão|dirigível|ultraleve|asa-delta|paraquedas|parapente|patins|hoverboard|monociclo|segway|motorhome|trailer|carreta|bitrem|cegonha|guincho|escada rolante|elevador",
      "aerobarco|hovercraft|bondinho|funicular|zepelim|catamarã|escuna|galeão|caravela|pau de arara|carro de boi|camelo|elefante|trenó|moto de neve/snowmobile|ônibus espacial|tirolesa|liteira",
      "pedalinho|draisiana|velocípede|maglev|hyperloop|batiscafo|gaiola|voadeira|rabeta|catraia",
    ],
  },
  {
    c: "cotidiano", q: "Diga um objeto que tem na escola",
    t: [
      "lápis|caneta|caderno|borracha|mochila",
      "estojo|apontador",
      "quadro/lousa|giz|régua|livro|mesa|cadeira|carteira|apagador|tesoura|cola|mapa|globo|merenda/lanche|uniforme|agenda|calculadora|compasso|transferidor|marca-texto|lápis de cor|canetinha|pincel|computador|projetor|sino|bebedouro|armário|lixeira|bola",
      "esquadro|corretivo|grampeador|clipe|fichário|pasta|dicionário|atlas|caderno de desenho|massinha|papel crepom|cartolina|EVA|guache/tinta guache|lancheira|garrafinha|crachá|diário de classe|pincel atômico|data show|microscópio|tubo de ensaio|esqueleto|quadra|bandeira",
      "mimeógrafo|retroprojetor|lousa digital|ábaco|tabuada|cartilha|apostila|boletim|caderneta|carimbo|prancheta|bambolê|corda|cone|apito",
      "mata-borrão|tinteiro|pena|palmatória|flanelógrafo|nanquim|normógrafo|papel almaço|papel vegetal",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie um signo do zodíaco",
    t: ["Leão|Áries|Escorpião", "Peixes|Gêmeos", "Touro|Câncer|Virgem|Libra|Sagitário", "Capricórnio|Aquário", "Ofiúco", ""],
  },
  {
    c: "cotidiano", q: "Diga uma ferramenta",
    t: [
      "martelo|chave de fenda|alicate|serrote|furadeira",
      "trena|chave inglesa",
      "chave philips/chave phillips|pá|enxada|parafusadeira|serra|lixa|nível|esquadro|pincel|rolo|espátula|desempenadeira|colher de pedreiro|marreta|picareta|machado|facão|tesoura|estilete|lanterna|escada|carrinho de mão|chave de boca|torquês|grampeador|pistola de cola quente/cola quente|chave allen",
      "serra tico-tico|esmerilhadeira/lixadeira|plaina|formão|grosa|lima|torno|morsa|sargento|prumo|arco de serra|alicate de pressão|alicate de corte|chave de grifo|cavadeira|ancinho/rastelo|foice|tesoura de poda|maçarico|ferro de solda|multímetro|martelete|betoneira|chave de roda|macaco|compressor|pistola de pintura",
      "talhadeira|ponteiro|cinzel|goiva|verruma|trado|pua|graminho|suta|riscador|punção|saca-pino|desandador|cossinete|paquímetro|micrômetro|torquímetro|rebitadeira|enxó|enxadão|chibanca|pé de cabra|alavanca",
      "bedame|garlopa|vazador|tirfor|talha|prensa",
    ],
  },
  {
    c: "cotidiano", q: "Diga algo que é vermelho",
    t: [
      "morango|sangue|maçã|tomate|rosa",
      "carro de bombeiro/caminhão de bombeiro|semáforo/sinal vermelho",
      "cereja|melancia|pimenta|batom|ketchup|framboesa|joaninha|Ferrari|camisa do Inter|Coca-Cola|Papai Noel|fogo|lava|vinho|Marte|cardeal|extintor|placa de pare|hidrante|tijolo|caqui|pitanga|acerola|beterraba|groselha|camarão cozido|Chapeuzinho Vermelho|cartão vermelho|tapete vermelho",
      "urucum|páprica|rabanete|pimentão vermelho|romã|cranberry|sangria|brasa|botão de emergência|ônibus de Londres|bandeira da China|flamboyant|papoula|hemácia/glóbulo vermelho|rubi",
      "tiê-sangue|vermelhão|cochonilha|carmim|lagosta cozida|crista do galo|coral vermelho|amanita|maçã do amor",
      "gigante vermelha|Betelgeuse|Antares|Grande Mancha Vermelha|Mar Vermelho|Praça Vermelha",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie uma marca que você encontra no supermercado",
    t: [
      "Nestlé|Coca-Cola|Sadia|Seara|Omo",
      "Bombril|Maggi|Danone",
      "Perdigão|Ypê|Nescau|Toddy|Elma Chips|Ruffles|Doritos|Lacta|Garoto|Bauducco|Colgate|Dove|Nivea|Hellmann's|Pilão|Melitta|3 Corações/três corações|Ninho|Leite Moça/moça|Parmalat|Italac|Piracanjuba|Friboi|Brahma|Skol|Heineken|Kibon|Oreo|Trakinas|Bis|Kit Kat|Sonho de Valsa|Miojo|Nissin|Knorr|Sazón|Qualy|Veja|Pinho Sol|Pampers|Gillette|Natura|O Boticário|Fanta|Guaraná Antarctica/antarctica",
      "Piraquê|Vitarella|Marilan|Mabel|Isabela|Adria|Renata|Barilla|Camil|Tio João|Kicaldo|Prato Fino|Itambé|Batavo|Vigor|Polenghi|Tirolez|Aviação|Swift|Aurora|Quero|Fugini|Predilecta|Gomes da Costa|Coqueiro|Liza|Soya|Doriana|Becel|Delícia|Arisco|Kitano|Hikari|Sakura|Ajinomoto|Maizena|Royal|Dr. Oetker|Fleischmann|Yoki|Visconti|Panco|Pullman|Wickbold|Seven Boys|Plus Vita|Elefante|Cica|Arcor|Peccin|Dori|Fini|Haribo|Halls|Trident|Mentos|Pringles|Cheetos|Fandangos|Torcida|Lay's|Yakult|Activia|Danoninho|Chandelle|Del Valle|Ades|Sukita|Kuat|Schweppes|H2OH|Gatorade|Powerade|Red Bull|Monster|Crystal|Bonafont|Minalba|São Lourenço|Comfort|Downy|Ariel|Brilhante|Scott|Neve|Personal|Huggies|Johnson's|Rexona|Axe|Old Spice|Protex|Lux|Palmolive|Granado|Phebo|Sorriso|Close Up|Oral-B|Listerine|Bic|Sundown|Seda|Pantene|Elseve|Tresemmé|Clear|Head & Shoulders|Garnier|Monange|Avon|Eudora",
      "Pif Paf|Rezende|Bonduelle|Nutrella|Neugebauer|Florestal|Elegê|Santa Clara|Languiru|Piá|Frimesa|Copacol|Fruki|Polar|Bom Princípio|Oderich|Docile|Orquídea|São Braz|Vitamilho|Maratá|Ypióca|51|Velho Barreiro|Pitú|Tang",
      "Kolynos|Gumex|Leite de Rosas|Biotônico Fontoura|Mirabel|Ki-Suco|Frisco|Grapette|Crush|Mate Couro|Guaraná Jesus|Cotuba",
    ],
  },
  {
    c: "cotidiano", q: "Diga uma matéria (disciplina) da escola",
    t: [
      "matemática|português|história|geografia|ciências",
      "educação física|artes",
      "inglês|espanhol|física|química|biologia|filosofia|sociologia|redação|literatura|ensino religioso/religião|música",
      "álgebra|geometria|gramática|informática|robótica|programação|empreendedorismo|educação financeira|teatro|dança|projeto de vida|OSPB|educação moral e cívica/moral e cívica|latim|francês|alemão|libras|ética|cidadania|trigonometria|estatística",
      "técnicas agrícolas|economia doméstica|trabalhos manuais|desenho geométrico|caligrafia|puericultura|estudos sociais|psicologia|lógica|astronomia|geologia|oratória|xadrez|educação ambiental",
      "canto orfeônico|grego|retórica|cosmografia|datilografia/mecanografia|taquigrafia|economia política|técnicas comerciais|higiene",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie um material de construção",
    t: [
      "tijolo|cimento|areia|telha|madeira",
      "entulho|concreto",
      "brita/pedra brita|cal|vergalhão/ferro|vidro|argamassa|azulejo|piso|cerâmica|porcelanato|tinta|gesso|bloco|compensado/madeirite|prego|parafuso|cano/tubo|pvc|fio|janela|porta|massa corrida|rejunte|impermeabilizante|manta asfáltica|isopor|drywall|lajota|laje|aço|alumínio|granito|mármore|pedra",
      "thinner|selador|verniz|massa acrílica|textura|grafiato|fibrocimento|telha de barro|telha colonial|bloco de concreto|bloco cerâmico|tijolo de vidro|tijolo ecológico|tijolo baiano|pastilha|ladrilho|seixo|pedrisco|pó de pedra|cascalho|saibro|caibro|ripa|viga|pilar|treliça|tela|arame|chapisco|reboco|emboço|contrapiso|aditivo|graute|silicone|espuma expansiva|lã de vidro|lã de rocha|telha sanduíche|steel frame|policarbonato|acrílico|lona",
      "fundo preparador|zarcão|esmalte sintético|primer|epóxi|poliuretano|catalisador|massa plástica|taipa|pau a pique|adobe|bambu|sapé|superadobe|pedra-sabão|ardósia|quartzito|travertino|basalto|pedra miracema|pedra são tomé|pedra portuguesa|paralelepípedo|paver/bloquete|meio-fio|manilha|calha|rufo|cumeeira|forro|lambri|sanca|cantoneira|metalon|tubo galvanizado|caixa d'água|caixa de gordura",
      "argila expandida/cinasita|vermiculita|perlita|pozolana|escória|cinza volante|geotêxtil|bentonita|sílica ativa|betume|piche",
    ],
  },
  {
    c: "cotidiano", q: "Diga um apelido carinhoso para quem você ama",
    t: [
      "amor|vida|bebê/bb|meu bem|gato/gata",
      "mozão|xuxu/chuchu",
      "querido/querida|amorzinho|fofo/fofa|lindo/linda|princesa|príncipe|docinho|neném|anjo|coração|paixão|bem|mô|amore|baby|gatinho/gatinha|minha vida|meu tudo|xodó|moreco",
      "chuchuzinho|dengo/meu dengo|pitoco|pituca|pudim|mel|florzinha|flor|estrela|lindeza|bonequinha|meu rei|minha rainha|nego/nega|preta|preto|tchutchuca|mor|vidinha|tesouro|meu sol|jujuba|panqueca|batatinha|bombom|coisa linda|pequeno/pequena",
      "cuchi-cuchi|biscoitinho|pãozinho|ursinho/ursinha|coelhinho|pinguim|tigrão|gatão|lindão|meu velho/minha velha",
      "meu pão de queijo|meu bolinho de chuva|meu torresmo|minha capivara|meu baiacu|meu caramelo|meu cabeça|meu pirulito|meu brigadeiro",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie uma emoção ou sentimento",
    t: [
      "amor|alegria|tristeza|raiva|medo|felicidade",
      "saudade|nojo",
      "ódio|ciúme/ciúmes|ansiedade|inveja|esperança|vergonha|culpa|orgulho|surpresa|paixão|solidão|tédio|angústia|carinho|gratidão|empolgação/animação|frustração|calma/tranquilidade|preguiça|nervosismo|confiança|insegurança|euforia|alívio",
      "melancolia|nostalgia|compaixão|empatia|ternura|admiração|desprezo|remorso|arrependimento|ressentimento|rancor|mágoa|desespero|pânico|pavor|êxtase|serenidade|satisfação|contentamento|entusiasmo|curiosidade|confusão|constrangimento|timidez|desconfiança|indignação|decepção|desilusão|apatia|luto|vergonha alheia|carência|afeto",
      "schadenfreude|sehnsucht|hygge|ennui|spleen|torpor|enfado|fastio|acídia|lassidão|pesar|comiseração|júbilo|regozijo|deleite|enlevo|arrebatamento|assombro|estupor|perplexidade|agonia|aflição|inquietação|sossego|alumbramento|cringe|bad|deprê",
      "mono no aware|toska|hiraeth|waldeinsamkeit|gigil|iktsuarpok|kilig|dor de cotovelo|síndrome do impostor",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie um objeto que tem num banheiro",
    t: [
      "privada/vaso sanitário/vaso|chuveiro|pia|espelho|papel higiênico",
      "patinho de borracha|bidê",
      "toalha|sabonete|xampu/shampoo|condicionador|escova de dentes|pasta de dente/creme dental|box|banheira|tapete|lixeira|desodorante|pente|escova de cabelo|secador|barbeador/gilete|cotonete|fio dental|torneira|ralo|descarga|armário|cesto de roupa|perfume|hidratante|esponja|bucha|saboneteira/porta-sabonete|toalheiro|cortina|ducha higiênica|desentupidor",
      "enxaguante bucal|algodão|lâmina|pinça|cortador de unha|lixa de unha|chapinha|babyliss|maquiagem|protetor solar|aromatizador/bom ar|desinfetante|escova sanitária|balança|tapete antiderrapante|suporte de papel|prateleira|nicho|exaustor|tomada|rodo|balde|absorvente|fralda|termômetro|band-aid/curativo|remédio|caixa de primeiros socorros|sais de banho|touca|roupão|chinelo|revista",
      "penico/urinol|mictório|ofurô|hidromassagem|sauna|pedra-pome|lixa de pé|esfoliante|máscara facial|tônico|demaquilante|cera depilatória|depilador|aparador de pelos|escova interdental|irrigador oral|limpador de língua|caixa acoplada|válvula de descarga/válvula hydra|sifão|registro|aquecedor de toalha|espelho de aumento",
      "escarradeira|jarro e bacia|bacia de ágata|vaso turco|washlet/privada japonesa",
    ],
  },
  {
    c: "cotidiano", q: "Diga uma brincadeira de criança",
    t: [
      "pega-pega/pique-pega|esconde-esconde/pique-esconde|amarelinha/macaca/sapata|pular corda",
      "pião|bolinha de gude/bolita/gude|pipa/papagaio/pandorga",
      "queimada/queimado|estátua|cabra-cega/cobra-cega|passa anel|telefone sem fio|elástico|ciranda|corre cotia|batata quente|morto-vivo/vivo ou morto|polícia e ladrão|mamãe da rua|taco/bete|carrinho de rolimã/rolimã|ioiô|bambolê|balanço|gangorra|escorregador|boneca|carrinho|stop/adedonha|lenço atrás|dança das cadeiras|forca|jogo da velha",
      "cinco marias/três marias|pular sela/pula-carniça/carniça|peteca|bolha de sabão/bolinha de sabão|bandeirinha/pique-bandeira/rouba-bandeira|cabo de guerra|corrida de saco|ovo na colher|barra-manteiga|garrafão|chicotinho queimado|seu mestre mandou/o mestre mandou|adoleta|escravos de Jó|pera, uva ou maçã|mímica|perna de pau|cama de gato|par ou ímpar|jokenpô/pedra papel tesoura",
      "bilboquê|bafo/bater figurinha|tazo|finca|elefantinho colorido|coelhinho sai da toca|gato mia|mãe-cola/pique-cola|pique-alto|pega-varetas|vaca amarela|boca de forno",
      "pau-de-sebo|perna de lata/pé de lata|estilingue/bodoque/atiradeira/funda|corrida de tampinha|futebol de botão|barquinho de papel|avião de papel|trava-língua",
    ],
  },
  {
    c: "cotidiano", q: "Nomeie uma peça ou objeto de um carro",
    t: [
      "volante|banco|pneu|freio|motor|rádio",
      "estepe|buzina|cinto de segurança/cinto",
      "retrovisor|para-brisa|limpador de para-brisa/palheta|câmbio/marcha|embreagem|acelerador|farol|lanterna|porta-malas|capô|para-choque|placa|painel|velocímetro|ar-condicionado|airbag|macaco|triângulo|chave de roda|bateria|tanque|vidro|porta|maçaneta|tapete|encosto de cabeça|GPS|alto-falante|freio de mão|pisca/seta|antena|calota|roda|escapamento",
      "conta-giros|hodômetro/odômetro|marcador de combustível|luz de ré|sensor de estacionamento|câmera de ré|acendedor/isqueiro|porta-copos|porta-luvas|teto solar|quebra-sol|extintor|radiador|alternador|motor de arranque|vela/vela de ignição|correia dentada|filtro de ar|filtro de óleo|carburador|injeção eletrônica|cárter|amortecedor|mola|disco de freio|pastilha de freio|tambor de freio|semi-eixo|homocinética|diferencial|caixa de câmbio|rack|engate|bagageiro|santo antônio|para-lama|soleira|chassi|bomba de combustível",
      "bico injetor|sonda lambda|catalisador|coxim|bieleta|pivô|bandeja|terminal de direção|caixa de direção|cruzeta|cardã|comando de válvulas|tucho|biela|virabrequim|pistão|junta do cabeçote|cabeçote|bloco do motor|reservatório de expansão|ventoinha|válvula termostática|bobina|distribuidor|cabos de vela|ABS|central multimídia|chicote|fusível|relé",
      "afogador|quebra-vento|estribo|toca-fitas|cinzeiro|manivela de vidro|dado de pelúcia|capa de banco|cheirinho",
    ],
  }
  );
})();
