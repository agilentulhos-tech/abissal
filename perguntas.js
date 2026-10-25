// Banco de perguntas do Abissal.
// Cada pergunta tem 6 faixas de raridade, da mais comum para a mais rara:
// [plâncton, esperto demais, cardume, raro, lado B, um em um milhão]
// Respostas separadas por "|". Apelidos da mesma resposta separados por "/".
window.PERGUNTAS = [
  {
    q: "Diga uma fruta que dá no Brasil",
    t: [
      "banana|manga|laranja|maçã|abacaxi",
      "jabuticaba|açaí|caju",
      "goiaba|maracujá|mamão/papaia|melancia|uva|limão|acerola|coco|morango|tangerina/bergamota/mexerica/mimosa/ponkan|pera|melão|graviola|caqui|pitanga",
      "cupuaçu|siriguela/seriguela|cajá|umbu|pequi|carambola|jaca|fruta-do-conde/pinha/ata/condessa|kiwi|amora|abacate|figo|lichia|pêssego|ameixa|nêspera|framboesa|pitaya",
      "buriti|bacuri|cambuci|grumixama|uvaia|araçá|mangaba|murici|tucumã|jenipapo|sapoti|bacaba|cagaita|camu-camu|cereja|tamarindo|romã|jambo|cacau|mirtilo|pupunha",
      "cambucá|bacupari|jatobá|ingá|guabiroba|araticum|puçá|cabeludinha|sapucaia|abiu|biribá|murta",
    ],
  },
  {
    q: "Nomeie um animal que vive na Amazônia",
    t: [
      "onça/onça-pintada|arara|boto/boto-cor-de-rosa|macaco|jacaré",
      "preguiça/bicho-preguiça|piranha|sucuri/anaconda",
      "tucano|capivara|anta|papagaio|jiboia|tamanduá/tamanduá-bandeira|pirarucu|tartaruga|cobra|sapo|harpia/gavião-real|ariranha|peixe-boi|tatu",
      "macaco-prego|mico-leão|uacari|sagui|jaguatirica|queixada|cutia|paca|tracajá|poraquê/peixe-elétrico|tambaqui|surucucu|jararaca|perereca|sapo-cururu|gato-maracajá|quati|cuíca|morcego|beija-flor|uirapuru|gavião",
      "zogue-zogue|macaco-aranha|bugio/guariba|lontra|candiru|aruanã|tucunaré|matamatá|ouriço-cacheiro|irara|caititu|cachorro-do-mato|jupará|mutum|cigana|jacamim|ararajuba|piraíba",
      "cachorro-vinagre|sauim-de-coleira|cuxiú|tamanduaí|uacari-branco|peixe-cachorro|acará-disco|onça-preta|gato-mourisco|jacuruxi|surucuá",
    ],
  },
  {
    q: "Diga uma capital de estado brasileiro",
    t: [
      "São Paulo/sp/sampa|Rio de Janeiro/rio|Brasília",
      "Salvador|Belo Horizonte/bh",
      "Porto Alegre/poa|Curitiba|Recife|Fortaleza|Florianópolis/floripa|Manaus|Belém",
      "Goiânia|Natal|João Pessoa|Maceió|Vitória|Cuiabá|Campo Grande|São Luís|Aracaju|Teresina",
      "Porto Velho|Rio Branco|Macapá",
      "Palmas|Boa Vista",
    ],
  },
  {
    q: "Nomeie um país da América do Sul",
    t: [
      "Brasil|Argentina",
      "Chile|Uruguai",
      "Paraguai|Peru|Colômbia|Bolívia|Venezuela",
      "Equador",
      "Guiana",
      "Suriname",
    ],
  },
  {
    q: "Diga uma comida de festa junina",
    t: [
      "pipoca|pamonha|canjica/mungunzá/munguzá|quentão|paçoca",
      "pé de moleque|curau",
      "milho/milho cozido/milho verde/espiga|maçã do amor|cocada|bolo de milho|vinho quente|cachorro-quente|arroz doce|amendoim|cuscuz|pinhão|bolo de fubá",
      "queijadinha|bolo de aipim/bolo de mandioca/bolo de macaxeira|pastel|churrasquinho/espetinho|batata-doce|tapioca|doce de abóbora|beijinho|brigadeiro",
      "pé de moça|mané pelado|bolo de puba|baião de dois|sarapatel|caldo verde|caldo de feijão|bom-bocado|cartola",
      "maria-mole|quebra-queixo|broa de milho|alfenim|rapadura",
    ],
  },
  {
    q: "Nomeie um planeta, planeta-anão ou lua do Sistema Solar",
    t: [
      "Terra|Marte|Lua|Júpiter|Saturno",
      "Plutão|Vênus",
      "Mercúrio|Urano|Netuno",
      "Europa|Titã|Io|Ganimedes|Fobos|Ceres",
      "Calisto|Deimos|Encélado|Tritão|Caronte|Éris|Makemake|Haumea|Reia|Mimas",
      "Oberon|Titânia|Miranda|Ariel|Umbriel|Japeto|Dione|Tétis|Hipérion|Febe|Proteu|Nereida|Amalteia|Disnomia|Hidra|Nix",
    ],
  },
  {
    q: "Diga um ingrediente que vai em cima de pizza",
    t: [
      "queijo/muçarela/mussarela/mozarela|calabresa|tomate|presunto",
      "catupiry/requeijão|orégano",
      "frango|azeitona|cebola|bacon|milho|ovo|manjericão|pepperoni|palmito|champignon/cogumelo|atum|lombo|pimentão|parmesão|provolone|gorgonzola|brócolis|rúcula|chocolate|banana",
      "alho|tomate seco|ervilha|camarão|abacaxi|carne seca/charque|batata palha|peito de peru|salame|alcaparra|anchova/aliche|berinjela|abobrinha|cheddar|cream cheese|morango|doce de leite|strogonoff/estrogonofe|mel|pimenta",
      "carne moída|linguiça|brie|jalapeño|alho-poró|escarola|sardinha|figo|coração de frango|mortadela|queijo coalho|parma/presunto de parma|damasco|nozes|castanha|batata|azeite",
      "kiwi|jaca|pistache|marshmallow|goiabada/romeu e julieta|lagosta|salmão|polvo|trufa",
    ],
  },
  {
    q: "Nomeie uma marca de carro",
    t: [
      "Fiat|Volkswagen/vw|Chevrolet/gm|Ford|Toyota",
      "Ferrari|Tesla|BYD",
      "Honda|Hyundai|Renault|Nissan|Jeep|BMW|Mercedes/Mercedes-Benz|Audi|Peugeot|Citroën|Kia|Mitsubishi|Porsche|Lamborghini|Volvo",
      "Chery/caoa chery|Land Rover|Suzuki|Subaru|Mini|Jaguar|Maserati|Bugatti|Mazda|Dodge|RAM|Troller|GWM/great wall|Aston Martin|Rolls-Royce|Bentley|McLaren|Lexus|Gurgel",
      "Alfa Romeo|JAC|Lifan|Lada|Smart|Cadillac|Chrysler|Lincoln|Infiniti|Seat|Skoda|Opel|DS|Jetour|Omoda|Geely|Zeekr|Haval|Puma|Ssangyong",
      "Willys|DKW/dkw-vemag|Simca|Romi/romi-isetta|Lobini|Koenigsegg|Pagani|Saab|Pontiac|Studebaker|Trabant|Effa|Chana|Rivian|Lucid|Polestar",
    ],
  },
  {
    q: "Diga um instrumento musical",
    t: [
      "violão|guitarra|piano|bateria",
      "ukulele|cavaquinho|pandeiro",
      "violino|flauta|saxofone/sax|baixo|teclado|trompete|sanfona/acordeão/acordeom|gaita/gaita de boca/harmônica|harpa|tambor|triângulo|violoncelo/cello|trombone|clarinete|berimbau|zabumba|surdo|tamborim|xilofone",
      "oboé|fagote|tuba|viola|viola caipira|banjo|bandolim|cuíca|agogô|chocalho|reco-reco|órgão|flauta doce|gaita de fole|contrabaixo|bongô|marimba|atabaque|castanholas|sintetizador|flauta transversal|trompa|caixa",
      "cítara|sitar|alaúde|didgeridoo|kalimba|theremin|tabla|shamisen|koto|erhu|balalaica|ocarina|cajón|timbal|ganzá|caxixi|pífano|rabeca|bombo|carrilhão|celesta|vibrafone|glockenspiel/lira|tantã|repinique",
      "hang/handpan|kazoo|serrote|alfaia|charango|bouzouki|bandoneon|cravo|harmônio|udu|cuatro",
    ],
  },
  {
    q: "Nomeie um esporte olímpico",
    t: [
      "futebol|vôlei/voleibol|natação|basquete/basquetebol",
      "skate|surfe/surf",
      "atletismo|ginástica/ginástica artística|judô|tênis|handebol|boxe|ciclismo|tênis de mesa/pingue-pongue|corrida|maratona|vôlei de praia|esgrima|levantamento de peso/halterofilismo|hipismo|remo|canoagem|tiro com arco|taekwondo|luta olímpica/wrestling",
      "polo aquático|saltos ornamentais|nado artístico|badminton|hóquei/hóquei na grama|golfe|rugby/rúgbi|triatlo|pentatlo moderno|tiro esportivo|vela/iatismo|escalada|breaking/breakdance|bmx|mountain bike|ginástica rítmica|trampolim|marcha atlética|salto com vara|arremesso de peso|lançamento de dardo",
      "decatlo|heptatlo|salto triplo|lançamento de martelo|lançamento de disco|caiaque|softbol|beisebol|caratê/karatê|maratona aquática|salto em distância|salto em altura|corrida com barreiras|revezamento|curling|esqui|patinação|bobsled|biatlo|hóquei no gelo|snowboard",
      "cabo de guerra|críquete|polo|pelota basca|lacrosse|croquet|skeleton|luge|squash|flag football",
    ],
  },
  {
    q: "Diga uma cor",
    t: [
      "azul|vermelho|verde|amarelo|preto|branco",
      "roxo|rosa",
      "laranja|cinza|marrom|lilás|bege|dourado|prata|vinho|violeta|azul-marinho",
      "turquesa|magenta|ciano|bordô|creme|salmão|caramelo|marfim|anil|índigo|grafite|lavanda|coral|verde-limão|verde-água|ocre|cobre|bronze|mostarda|fúcsia|pink",
      "carmim|escarlate|púrpura|terracota|azul-petróleo|verde-musgo|cáqui|sépia|âmbar|oliva/verde-oliva|pérola|chumbo|nude|off-white|champanhe|esmeralda|rubi|safira",
      "cerúleo|vermelhão|gris|alizarina|siena|celadon|glauco|opala|cinábrio|amaranto|heliotrópio",
    ],
  },
  {
    q: "Nomeie um animal marinho",
    t: [
      "tubarão|baleia|golfinho|polvo|peixe",
      "cavalo-marinho|água-viva/medusa|estrela-do-mar",
      "tartaruga marinha/tartaruga|caranguejo|lula|orca|camarão|lagosta|siri|foca|leão-marinho|arraia/raia|jubarte/baleia-jubarte|ostra|mexilhão/marisco|ouriço-do-mar|pinguim|peixe-palhaço|morsa",
      "moreia|baiacu/peixe-balão|cachalote|narval|beluga|peixe-boi|dugongo|lontra-marinha|coral|anêmona|esponja|krill|plâncton|peixe-voador|atum|sardinha|salmão|bacalhau|enguia|mero|garoupa|marlim|caravela/caravela-portuguesa|lula-gigante|peixe-espada",
      "peixe-lanterna|peixe-diabo/tamboril|peixe-lua|nudibrânquio/lesma-do-mar|pepino-do-mar|polvo-dumbo|tubarão-baleia|tubarão-martelo|tubarão-branco|baleia-azul|isópode|tamarutaca/camarão-louva-a-deus|peixe-pedra|peixe-leão|vieira|craca|náutilo|siba/choco|arenque|linguado|manta/raia-manta",
      "sifonóforo|lula-vampiro|peixe-bolha|dragão-marinho|lula-colossal|tubarão-duende|tubarão-da-groenlândia|enguia-pelicano|quimera|salpa|poliqueta|lírio-do-mar|lebre-do-mar|peixe-víbora",
    ],
  },
  {
    q: "Diga um elemento químico",
    t: [
      "oxigênio|hidrogênio|carbono|ferro|ouro",
      "urânio|hélio|nióbio",
      "nitrogênio|prata|cobre|sódio|cálcio|potássio|cloro|enxofre|zinco|alumínio|chumbo|mercúrio|magnésio|flúor|fósforo|platina|silício|lítio|neônio",
      "iodo|níquel|titânio|estanho|cobalto|cromo|argônio|tungstênio|plutônio|rádio|manganês|bromo|boro|berílio|criptônio|xenônio|radônio|polônio|césio|selênio|arsênio",
      "bário|estrôncio|vanádio|irídio|ósmio|paládio|ródio|bismuto|antimônio|cádmio|germânio|gálio|índio|telúrio|tálio|tório|amerício|zircônio|molibdênio|rubídio|frâncio|escândio|astato",
      "háfnio|tântalo|rênio|rutênio|tecnécio|ítrio|lantânio|cério|praseodímio|neodímio|promécio|samário|európio|gadolínio|térbio|disprósio|hólmio|érbio|túlio|itérbio|lutécio|actínio|protactínio|netúnio|cúrio|berquélio|califórnio|einstênio|férmio|mendelévio|nobélio|laurêncio|rutherfórdio|dúbnio|seabórgio|bóhrio|hássio|meitnério|darmstádio|roentgênio|copernício|nihônio|fleróvio|moscóvio|livermório|tenesso|oganessônio",
    ],
  },
  {
    q: "Nomeie uma profissão",
    t: [
      "médico|professor|advogado|engenheiro|bombeiro|policial",
      "astronauta|youtuber/influenciador/influencer",
      "enfermeiro|dentista|motorista|cozinheiro/chef|pedreiro|arquiteto|veterinário|jornalista|padeiro|eletricista|mecânico|piloto|programador/desenvolvedor|contador|psicólogo|cabeleireiro|garçom|vendedor|agricultor/fazendeiro|ator/atriz|cantor|jogador de futebol|juiz|carteiro|faxineiro/diarista|empresário",
      "farmacêutico|fisioterapeuta|nutricionista|biólogo|químico|físico|economista|designer|fotógrafo|encanador|marceneiro|carpinteiro|pintor|costureira/costureiro|açougueiro|pescador|motoboy|taxista|caminhoneiro|soldado|delegado|promotor|bibliotecário|historiador|geógrafo|escritor|músico|dançarino/bailarino|frentista|manicure|segurança|porteiro|recepcionista|jardineiro|zelador|motorista de aplicativo/uber|entregador",
      "sommelier|barista|oceanógrafo|astrônomo|arqueólogo|paleontólogo|geólogo|meteorologista|tradutor|intérprete|leiloeiro|despachante|corretor|tabelião|perito|legista|anestesista|radiologista|ourives|relojoeiro|sapateiro|ferreiro|serralheiro|vidraceiro|tatuador|palhaço|mágico|dublador|roteirista|árbitro|salva-vidas|guia turístico|comissário de bordo/aeromoça|controlador de voo|maquinista|estivador|garimpeiro|apicultor|vaqueiro|benzedeira",
      "luthier|taxidermista|lapidador|afinador de piano|ascensorista|limpador de chaminé|sineiro|calígrafo|cartógrafo|ferrador|tanoeiro|provador de sorvete|mergulhador|faroleiro|ventríloquo|caçambeiro",
    ],
  },
  {
    q: "Diga uma raça de cachorro",
    t: [
      "vira-lata/srd/caramelo|pastor alemão|poodle|labrador|golden retriever/golden",
      "buldogue francês/bulldog francês|shih tzu|pinscher",
      "rottweiler|pit bull/pitbull|chihuahua|husky siberiano/husky|dálmata|beagle|yorkshire|pug|border collie|dachshund/salsicha|buldogue/bulldog/buldogue inglês/bulldog inglês|spitz alemão/lulu da pomerânia/lulu|maltês|boxer|dobermann/doberman|chow chow|lhasa apso|pastor belga|são bernardo",
      "akita|shiba inu/shiba|basset hound/basset|cocker spaniel/cocker|schnauzer|fila brasileiro/fila|dogue alemão|bernese|samoieda|corgi|jack russell|bull terrier|cane corso|weimaraner|galgo|whippet|malamute do alasca/malamute|pastor australiano|setter irlandês|shar-pei/sharpei|terra-nova|bichon frisé|pequinês|fox paulistinha/terrier brasileiro|mastiff|bulldog americano/buldogue americano|boston terrier|american bully",
      "dogo argentino|rhodesian ridgeback|vizsla|saluki|borzoi|galgo afegão/afghan hound|papillon|cavalier king charles|pointer|bloodhound|staffordshire|leonberger|kuvasz|pastor de shetland|cão de crista chinês|dogue de bordeaux|basenji|komondor|pastor maremano|rafeiro do alentejo",
      "xoloitzcuintle/pelado mexicano|azawakh|lagotto romagnolo|mudi|otterhound|puli|bergamasco|kai ken|catahoula|veadeiro pampeano|campeiro|ovelheiro gaúcho|podengo",
    ],
  },
  {
    q: "Nomeie um doce brasileiro",
    t: [
      "brigadeiro|beijinho|pudim|paçoca",
      "quindim|cajuzinho|bem-casado",
      "pé de moleque|cocada|doce de leite|romeu e julieta|goiabada|bolo de rolo|canjica|arroz doce|pavê|olho de sogra|sonho|maria-mole|bombom|curau|mousse de maracujá|bala de coco|suspiro|doce de abóbora|brigadeirão|torta de limão",
      "queijadinha|bom-bocado|cartola|mané pelado|fios de ovos|rapadura|bananada/doce de banana|marmelada|ambrosia|baba de moça|manjar/manjar branco|pé de moça|bolo de fubá|broa|bananinha|pão de mel",
      "furrundu|chuvisco|cueca virada|toucinho do céu|bolo souza leão|alfenim|espera-marido|camafeu|papo de anjo|sequilho|doce de figo|doce de mamão|doce de cidra|sagu|cuca",
      "chimia|quebra-queixo|puxa-puxa|mariola|bolo de noiva|delícia de abacaxi",
    ],
  },
  {
    q: "Diga um estado brasileiro",
    t: [
      "São Paulo/sp|Rio de Janeiro/rj|Minas Gerais/minas/mg|Bahia",
      "Acre|Rio Grande do Sul/rs",
      "Paraná|Santa Catarina|Pernambuco|Ceará|Amazonas|Pará|Goiás|Espírito Santo",
      "Mato Grosso|Mato Grosso do Sul|Paraíba|Rio Grande do Norte|Alagoas|Sergipe|Maranhão|Piauí",
      "Tocantins|Rondônia|Roraima|Amapá",
      "Distrito Federal/df",
    ],
  },
  {
    q: "Algo que você encontra numa praia",
    t: [
      "areia|mar/água|sol|concha|guarda-sol",
      "castelo de areia|protetor solar",
      "cadeira|canga/toalha|coqueiro/coco|onda|caranguejo|siri|pedra|gaivota|biquíni|sunga|bola|salva-vidas/guarda-vidas|barraca|vendedor/ambulante|milho|picolé/sorvete|caipirinha|água de coco|cerveja|óculos de sol|chinelo|balde/pá|lixo|alga|peixe|barco|prancha/surfista|estrela-do-mar|quiosque",
      "queijo coalho|biscoito globo/biscoito de polvilho|mate|chapéu|boné|frescobol/raquete|boia|jangada|farol|píer|duna|pescador|rede|vôlei|futevôlei|caiaque|jet ski|água-viva|bronzeador|gelo|isopor/caixa térmica|sombra|criança|cachorro|pipa",
      "tatuí|maria-farinha|mexilhão|ostra|bolacha-do-mar|vidro do mar|garrafa com mensagem|naufrágio|tesouro|detector de metal|tartaruga|pegada|restinga|sal|maresia|bandeira vermelha|arraia",
      "âmbar cinzento|baleia encalhada|moeda antiga|pulga-da-praia|caramujo|lula|pinguim|espuma|tronco|sargaço",
    ],
  },
  {
    q: "Nomeie um super-herói ou super-heroína",
    t: [
      "Homem-Aranha/spider-man/spiderman|Batman|Superman/super-homem|Mulher-Maravilha",
      "Deadpool|Homem de Ferro|Capitão América",
      "Hulk|Thor|Flash|Aquaman|Pantera Negra|Viúva Negra|Wolverine|Capitã Marvel|Lanterna Verde|Doutor Estranho|Homem-Formiga|Feiticeira Escarlate|Gavião Arqueiro|Robin|Supergirl",
      "Visão|Ciclope|Tempestade|Jean Grey/fênix|Mulher-Hulk|Ciborgue/cyborg|Shazam/capitão marvel|Arqueiro Verde|Senhor das Estrelas|Groot|Rocket|Falcão|Soldado Invernal|Demolidor|Justiceiro|Motoqueiro Fantasma|Vespa|Gambit|Vampira|Noturno|Fera|Homem de Gelo|Tocha Humana|Coisa|Mulher Invisível|Senhor Fantástico|Miles Morales|Ms. Marvel/kamala khan|Shang-Chi|Blade|Mulher-Aranha|Batgirl|Asa Noturna/nightwing",
      "Besouro Azul|Caçador de Marte|Zatanna|Raio Negro|Cavaleiro da Lua|Luke Cage|Punho de Ferro|Jessica Jones|Colossus|Psylocke|Cable|Homem-Elástico|Gladiador Dourado|Canário Negro|Gavião Negro|Mulher-Gavião|Estelar|Mutano|Ravena|Spawn|Hellboy|Invencível|Capitão Planeta|Sr. Incrível|Gelado/frozone|Elastigirl|Super Choque",
      "Capitão 7|Judoka|Chapolin/chapolin colorado|Garota Esquilo|Super Mouse|Jaspion|Ultraman|Kamen Rider|Homem-Animal",
    ],
  },
  {
    q: "Diga um jogador da história da seleção brasileira",
    t: [
      "Pelé|Neymar|Ronaldo/ronaldo fenômeno|Ronaldinho/ronaldinho gaúcho",
      "Vini Jr/vinícius júnior/vinicius jr|Kaká|Romário",
      "Rivaldo|Cafu|Roberto Carlos|Zico|Garrincha|Sócrates|Adriano|Casemiro|Alisson|Marcelo|Thiago Silva|Daniel Alves/dani alves|Taffarel|Dida|Júlio César|Bebeto|Rodrygo|Raphinha|Richarlison|Endrick|Philippe Coutinho/coutinho|Gabriel Jesus|Marquinhos|Lúcio|Robinho|Fred|Hulk",
      "Tostão|Rivelino|Jairzinho|Gérson|Carlos Alberto/carlos alberto torres|Falcão|Careca|Dunga|Zagallo|Didi|Vavá|Nilton Santos|Djalma Santos|Leônidas/leônidas da silva|Juninho Pernambucano|Edmundo|Denílson|Gilberto Silva|Kléberson|Juan|Luís Fabiano|Elano|Ramires|Paulinho|Fernandinho|Willian|Oscar|David Luiz|Ederson|Firmino/roberto firmino|Militão/éder militão|Bruno Guimarães|Paquetá/lucas paquetá|Antony|Gabigol/gabriel barbosa|Bremer|Danilo|Fabinho|Rogério Ceni|Marcos|Zé Roberto|Leonardo|Mauro Silva|Branco|Aldair|Jorginho|Zinho|Müller|Mazinho|Renato Gaúcho|Júnior|Éder|Toninho Cerezo/cerezo",
      "Friedenreich/arthur friedenreich|Domingos da Guia|Zizinho|Castilho|Gilmar|Bellini|Mauro Ramos|Zito|Amarildo|Félix|Brito|Piazza|Clodoaldo|Everaldo|Paulo César Caju|Dirceu|Reinaldo|Valdir Peres|Mozer|Ricardo Rocha|Viola|Edílson|Vampeta|Belletti|Grafite|Maicon|Felipe Melo|Jô|Bernard|Hernanes|Ganso/paulo henrique ganso|Taison|Douglas Costa|Everton Cebolinha|Arthur|Weverton|Savinho|Estêvão|João Pedro|Martinelli/gabriel martinelli|Igor Jesus|Luiz Henrique",
      "Heleno de Freitas|Jair da Rosa Pinto|Danilo Alvim|Barbosa|Bigode|Baltazar|Julinho|Dino Sani|Mazzola|Pepe|Dadá Maravilha|Roberto Miranda|Paulo Isidoro|Serginho Chulapa|Roberto Dinamite|Nelinho|Zé Sérgio|Valdo|Silas|Ricardo Gomes|Zetti|Luizão|Ricardinho|Diego Tardelli|Diego Souza|Vitor Roque|Andreas Pereira|Douglas Luiz|Alex Sandro",
    ],
  },
  {
    q: "Nomeie um país da Europa",
    t: [
      "França|Itália|Portugal|Espanha|Alemanha|Inglaterra",
      "Vaticano|Islândia|Mônaco",
      "Reino Unido|Holanda/países baixos|Bélgica|Suíça|Grécia|Rússia|Irlanda|Suécia|Noruega|Dinamarca|Finlândia|Polônia|Áustria|Ucrânia|Croácia|Escócia|País de Gales|Turquia",
      "Hungria|República Tcheca/tchéquia|Romênia|Bulgária|Sérvia|Eslováquia|Eslovênia|Luxemburgo|Bósnia/bósnia e herzegovina|Albânia|Lituânia|Letônia|Estônia|Bielorrússia/belarus|Malta|Chipre|Irlanda do Norte",
      "Liechtenstein|San Marino|Andorra|Montenegro|Macedônia do Norte/macedônia|Moldávia|Kosovo",
      "Geórgia|Armênia|Azerbaijão|Cazaquistão",
    ],
  },
  {
    q: "Diga um legume, verdura ou hortaliça",
    t: [
      "alface|batata|cenoura|tomate|cebola",
      "chuchu|jiló|quiabo",
      "brócolis|couve|repolho|abóbora/jerimum|abobrinha|pepino|beterraba|berinjela|pimentão|mandioca/aipim/macaxeira|espinafre|rúcula|couve-flor|vagem|ervilha|milho|batata-doce|alho|agrião|inhame|cará",
      "acelga|almeirão|chicória/escarola|rabanete|nabo|salsão/aipo|alho-poró|maxixe|taioba|ora-pro-nóbis|mostarda|cebolinha|salsa/salsinha|coentro|gengibre|aspargo|alcachofra|palmito|mandioquinha/batata-baroa/batata-salsa|moranga",
      "bertalha|caruru|beldroega|serralha|jambu|vinagreira/azedinha|endívia|couve-de-bruxelas|kale/couve crespa|pak choi|erva-doce/funcho|tupinambo|yacon|mangarito|bardana/gobo|radicchio",
      "nirá|capuchinha|peixinho-da-horta|cará-moela|taro|daikon|couve-rábano/kohlrabi|pastinaca/cherovia|mizuna",
    ],
  },
  {
    q: "Nomeie um dinossauro",
    t: [
      "tiranossauro/t-rex/tiranossauro rex/tyrannosaurus|velociraptor/raptor|tricerátops|braquiossauro",
      "pterodáctilo|estegossauro",
      "diplodoco|anquilossauro|espinossauro|brontossauro|parassaurolofo|pteranodonte|apatossauro|alossauro|iguanodonte|paquicefalossauro|dilofossauro|giganotossauro|carnotauro",
      "argentinossauro|estauricossauro|compsognato|galimimo|terizinossauro|oviraptor|protocerátops|deinonico|utahraptor|mosassauro|plesiossauro|barionix/baryonyx|estiracossauro|edmontossauro|maiassaura|troodonte|arqueoptérix|herrerassauro",
      "abelissauro|amargassauro|saltassauro|sinossauropterix|microraptor|celófise/coelophysis|plateossauro|quetzalcoatlus|kentrossauro|nodossauro|ceratossauro|tarbossauro|albertossauro|daspletossauro|mapussauro|irritator|oxalaia|angaturama",
      "pycnonemossauro|uberabatitan|maxakalissauro|santanaraptor|gnatovorax|tapuiassauro|austroposeidon|baurutitan|guaibassauro|sacissauro|unaysaurus|buriolestes|vespersaurus",
    ],
  },
  {
    q: "Diga uma bebida",
    t: [
      "água|refrigerante/refri|suco|cerveja|café|coca-cola/coca",
      "caipirinha|guaraná|chimarrão",
      "leite|chá|vinho|cachaça/pinga|vodka/vodca|uísque/whisky|suco de laranja|água de coco|energético|achocolatado/toddy/nescau|chocolate quente|tereré|mate|limonada|vitamina|milkshake|gin|tequila|rum|espumante/champanhe|cappuccino|fanta|pepsi|kombucha",
      "quentão|vinho quente|caldo de cana/garapa|cajuína|tubaína/itubaína|café com leite|iogurte|soda italiana|chá gelado/ice tea|batida|licor|saquê|conhaque|absinto|martini|mojito|margarita|sangria|sidra/cidra|água tônica|água com gás|kefir|espresso",
      "aluá|tiquira|cauim|jurubeba|catuaba|rabo de galo|meladinha|capeta|leite de onça|bombeirinho|cuba libre|negroni|aperol/aperol spritz|hidromel|kvass|bubble tea/chá de bolhas|chai|matchá|guaraviton",
      "xibé|chicha|pulque|kumis|licor de jenipapo|cachaça de jambu|soju|baijiu|ouzo|grappa",
    ],
  },
  {
    q: "Nomeie um peixe",
    t: [
      "tilápia|salmão|atum|sardinha|tubarão",
      "pirarucu|peixe-palhaço/nemo|baiacu",
      "bacalhau|tambaqui|tucunaré|piranha|dourado|pintado|traíra|lambari|carpa|bagre|robalo|pescada|merluza|corvina|truta|cação|pacu|cascudo|betta/beta|peixinho dourado/kinguio|garoupa|badejo",
      "piraputanga|matrinxã|surubim|jaú|piau|curimba/curimbatá|mandi|tainha|anchova/enchova|cavalinha|arenque|linguado|pargo|olho-de-boi|namorado|xaréu|sororoca|pescadinha|manjuba|bonito|peixe-espada|peixe-voador|moreia|enguia|arraia|neon/tetra neon|acará|guppy/barrigudinho|molinésia|acará-disco|oscar|peixe-lua",
      "piraíba|aruanã|apaiari|candiru|poraquê|piramutaba|dourada|filhote|cachorra|peixe-lanterna|peixe-diabo|celacanto|esturjão|peixe-leão|peixe-pedra|cirurgião/peixe-cirurgião|frade|budião|mero|marlim|peixe-agulha|cavalo-marinho|sargo|caranha|cioba|ariocó|pampo|savelha|parati",
      "peixe-bolha|peixe-víbora|peixe-machado|peixe-remo/regaleco|lampreia|peixe-bruxa/mixina|pirambóia|jundiá|cangati|mussum|bodó|aracu|jaraqui|mapará",
    ],
  },
  {
    q: "Diga um mês que tem 31 dias",
    t: ["janeiro|dezembro", "julho|agosto", "março", "maio", "outubro", ""],
  },
  {
    q: "Nomeie uma parte do corpo humano",
    t: [
      "mão|cabeça|braço|perna|olho|pé|coração",
      "cotovelo|umbigo|baço",
      "boca|nariz|orelha|dedo|joelho|cabelo|pescoço|barriga|costas|ombro|unha|dente|língua|pulmão|fígado|cérebro|estômago|rim|pele|osso|lábio|testa|queixo|bochecha|peito|cintura|quadril|tornozelo|pulso|calcanhar|coxa|bumbum/bunda/nádega|sobrancelha|cílio|intestino|bexiga",
      "clavícula|fêmur|tíbia|úmero|rótula/patela|crânio|costela|coluna|vértebra|esôfago|traqueia|laringe|faringe|pâncreas|vesícula|apêndice|útero|ovário|próstata|tireoide|amígdala|axila/sovaco|virilha|nuca|panturrilha/batata da perna|antebraço|palma|têmpora|mandíbula|pálpebra|íris|pupila|retina|tímpano|glote|diafragma|bíceps|tríceps|abdômen|músculo|veia|artéria|sangue|nervo",
      "hipotálamo|hipófise|cerebelo|úvula/campainha|epiglote|duodeno|íleo|jejuno|cólon|reto|ureter|uretra|esterno|escápula/omoplata|ulna|rádio|fíbula/perônio|sacro|cóccix|falange|metacarpo|tarso|córnea|cristalino|bigorna|martelo|estribo|cóclea|timo|alvéolo|aorta|ventrículo|átrio|menisco|tendão de aquiles|ligamento|cartilagem|lóbulo|septo",
      "glabela|filtro labial|lúnula|hálux|columela|trago|antítrago|ísquio|hioide|pisiforme|escafoide|semilunar|tálus/astrágalo|estapédio|sartório|períneo",
    ],
  },
  {
    q: "Nomeie um personagem da Turma da Mônica",
    t: [
      "Mônica|Cebolinha|Cascão|Magali",
      "Chico Bento|Sansão",
      "Bidu|Franjinha|Anjinho|Penadinho|Horácio|Piteco|Astronauta|Papa-Capim|Jeremias|Marina|Xaveco|Louco/sr. louco|Do Contra|Rosinha|Zé Lelé|Mingau|Floquinho|Capitão Feio|Dorinha|Luca|Titi|Aninha|Milena|Tina|Rolo|Humberto",
      "Nimbus|Dudu|Zé da Roça|Nhô Lau|Denise|Carminha Frufru|Quinzinho|Jotalhão|Raposão|Alminha|Zé Vampir|Lobi|Cranicola|Thuga|Pipa|Hiro|Maria Cascuda",
      "",
      "",
    ],
  },
];
