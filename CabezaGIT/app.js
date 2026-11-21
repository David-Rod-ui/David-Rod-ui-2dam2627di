/* ==========================================================================
   THIS IS LA CABEZA — Contenido íntegro de Cabeza de Framontanos (Salamanca)
   Fuente de datos: https://k-pam66.wixsite.com/cabezadeframontanos
   Estilo e interacción inspirados en: https://thisisbarcelona.com/es
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURACIÓN DE IMÁGENES
   -------------------------------------------------------------------------- */
const IMAGES = {
  panoramicaPueblo: 'img/main.jpg',
  fronton: 'img/Fronton.jpg',
  barToni: 'img/Toñibar.jpg',
  resbalina: 'img/Resbalina.jpg',
  pistaPadel: 'img/pistapadel.jpg',
  comoJugarPadel: 'img/comojugar%20al%20padel.jpg',
  selloAyuntamiento: 'https://static.wixstatic.com/media/d7d904_193c40e016ca438c85f27fc86e8d37f5.png/v1/fill/w_202,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_193c40e016ca438c85f27fc86e8d37f5.png',
  entradaFronton: 'https://static.wixstatic.com/media/d7d904_2e4c6529a662f83242160ff45001969e.jpg/v1/fill/w_980,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_2e4c6529a662f83242160ff45001969e.jpg',
  mapaTerminos: 'https://static.wixstatic.com/media/d7d904_81f4b34372c14ab995c839dffa814655.jpg/v1/fill/w_941,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_81f4b34372c14ab995c839dffa814655.jpg',
  rutaOllaChorros: 'https://static.wixstatic.com/media/d7d904_7b28d55862ef49d298c5488c74e61f7e~mv2.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_7b28d55862ef49d298c5488c74e61f7e~mv2.jpg',
  rutaPozoAiron: 'https://static.wixstatic.com/media/d7d904_905a37bf6b964b7ea1c3cbb310bbe0c8~mv2.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_905a37bf6b964b7ea1c3cbb310bbe0c8~mv2.jpg',
  rutaPiconFelipe: 'https://static.wixstatic.com/media/d7d904_b9b38303d4b2499d945165517d90947d~mv2.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_b9b38303d4b2499d945165517d90947d~mv2.jpg',
  mapaRodaHistorico: 'https://static.wixstatic.com/media/d7d904_6b83eecee8d5178334ffea3935d2fa66.jpg/v1/fill/w_600,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_6b83eecee8d5178334ffea3935d2fa66.jpg',
  mapaAntiguoComarca: 'https://static.wixstatic.com/media/d7d904_90a25ebf8761cee0f1d166e107c4c017.jpg/v1/fill/w_600,h_550,al_c,lg_1,q_80,enc_avif,quality_auto/d7d904_90a25ebf8761cee0f1d166e107c4c017.jpg',
  sello1876: 'https://static.wixstatic.com/media/d7d904_7cdacee071a24e67a7636d52985c7217.jpg/v1/fill/w_400,h_290,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_7cdacee071a24e67a7636d52985c7217.jpg',
  verracosVettones: 'https://static.wixstatic.com/media/d7d904_774fb07203d645c6b9cf48710d17d005~mv2.png/v1/fill/w_500,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Verracos.png',
  mapaVettones: 'https://static.wixstatic.com/media/d7d904_bcdea9e7c3fc464a9d9336993fb53b76~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_bcdea9e7c3fc464a9d9336993fb53b76~mv2.jpg',
  pascualMadoz: 'https://static.wixstatic.com/media/d7d904_4c4a57b1eed84ac485f040d434b993e2~mv2.jpg/v1/fill/w_360,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pascual%20MADOZ%201869.jpg',
  mapaDialectalLeones: 'https://static.wixstatic.com/media/d7d904_3ed20fe6a280e6776c242233878c10b9.jpg/v1/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_3ed20fe6a280e6776c242233878c10b9.jpg',
  hornazoCharro: 'https://static.wixstatic.com/media/d7d904_00f8ae51c2e95d44c2d5501458f70b4c.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_00f8ae51c2e95d44c2d5501458f70b4c.jpg',
  jamonIberico: 'https://static.wixstatic.com/media/d7d904_c935207e09fb184659aa8327ec50327c.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_c935207e09fb184659aa8327ec50327c.jpg',
  quesoArribes: 'https://static.wixstatic.com/media/d7d904_c43fca4f86da82f880372f384923aa2c.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_c43fca4f86da82f880372f384923aa2c.jpg',
  vinoArribes: 'https://static.wixstatic.com/media/d7d904_1755de96f26912a2b3c3846b0b2bdcff.jpg/v1/fill/w_600,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_1755de96f26912a2b3c3846b0b2bdcff.jpg',
  canonArribes: 'https://static.wixstatic.com/media/d7d904_7d0e5b8ab973bbd282c9ac0459cf9468.jpg/v1/fill/w_600,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_7d0e5b8ab973bbd282c9ac0459cf9468.jpg',
  videsPerena: 'https://static.wixstatic.com/media/d7d904_a9adcef2a5a2bb5b7711d9942ee39802.jpg/v1/fill/w_600,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_a9adcef2a5a2bb5b7711d9942ee39802.jpg',
  uvaJuanGarcia: 'https://static.wixstatic.com/media/d7d904_b926b72a4da653b5665acf57d5ef6185.jpg/v1/fill/w_600,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7d904_b926b72a4da653b5665acf57d5ef6185.jpg',
  cartelSanJuan: 'https://static.wixstatic.com/media/d7d904_a0dcaa547cd74d22b74e3b6f3dd97f87~mv2.jpg/v1/fill/w_550,h_760,al_c,q_80,enc_avif,quality_auto/d7d904_a0dcaa547cd74d22b74e3b6f3dd97f87~mv2.jpg',
  cartelVerano: 'https://static.wixstatic.com/media/d7d904_b093f3da7bc542bfb988c98530a6a33c~mv2.jpg/v1/fill/w_550,h_760,al_c,q_80,enc_avif,quality_auto/d7d904_b093f3da7bc542bfb988c98530a6a33c~mv2.jpg',
  cartelInmaculada: 'https://static.wixstatic.com/media/d7d904_6369623541944c96b5510c40550843e1~mv2.jpg/v1/fill/w_550,h_760,al_c,q_80,enc_avif,quality_auto/d7d904_6369623541944c96b5510c40550843e1~mv2.jpg',
  asocPresentacion: 'https://static.wixstatic.com/media/d7d904_64b9fdbae7104038829c90d3f03796cf~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/d7d904_64b9fdbae7104038829c90d3f03796cf~mv2.jpg',
  asocUnirse: 'https://static.wixstatic.com/media/d7d904_7bfb8404a8b5478fb975b44c0b2a79b6~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/d7d904_7bfb8404a8b5478fb975b44c0b2a79b6~mv2.jpg'
};

/* --------------------------------------------------------------------------
   1B. LUGARES DE INTERÉS DEL PUEBLO (NUEVA PESTAÑA)
   -------------------------------------------------------------------------- */
const LUGARES_INTERES = [
  {
    name: 'Frontón del pueblo',
    category: 'Deporte y Tradición',
    location: 'Barrio de El Egido · Acceso por DSA-561',
    image: IMAGES.fronton,
    shortDesc: 'El antiguo frontón de La Cabeza donde se reúnen jóvenes y veteranos al juego de pelota y en los torneos de verano.',
    fullDesc: 'Este es el antiguo frontón de la cabeza un lugar donde se reúnen jovenes y veteranos al juego pelota, todos los veranos se celebran torneos en los que participa todo el pueblo ya sea como jugadores o como animosos espectadores. Habrá numerosos premios para los campeones tanto juveniles como seniors. No debe ser muy difícil ser campeón si te dedicas al frontón todos los participantes locales la noche anterior se beben 8 cubatas en las fiestas.'
  },
  {
    name: 'Bar Toñi',
    category: 'Vida Social',
    location: 'Centro de Cabeza de Framontanos',
    image: IMAGES.barToni,
    shortDesc: 'Único negocio del pueblo y auténtico punto de encuentro para charlar a cualquier hora del día o de la noche.',
    fullDesc: 'Único negocio del pueblo , donde se reúnen todos los habitantes para charlar largas horas durante la noche y durante el día, aquí no se deja de beber nunca.'
  },
  {
    name: 'Resbalina',
    category: 'Rincones del Pueblo',
    location: 'Peña granítica tradicional de La Cabeza',
    image: IMAGES.resbalina,
    shortDesc: 'Tobogán natural de piedra granítica pulida donde antaño se deslizaban los niños del pueblo.',
    fullDesc: 'Una piedra donde antaño se suben los niños a deslizarse por una parte que forma un tobogán natural resbaloso , hoy día no lo usa nadie porque los críos prefieren estar con los móviles, si acaso la usan los chavales para sentarse y fumarse un porro mientras les da el aire.'
  },
  {
    name: 'Pista de Pádel',
    category: 'Deporte y Tradición',
    location: 'Zona deportiva · Reserva por aplicación móvil',
    image: IMAGES.pistaPadel,
    shortDesc: 'Pista de pádel en un pueblo de 90 habitantes para echar la tarde con amigos y torneos de verano.',
    fullDesc: 'Una pista de pádel en un pueblo de 90 habitantes donde las casas todavía están hechas de piedra y el internet no llega por cable, un intento de modernización absurdo pero que al menos te permite echar una tarde con los amigos y realizar torneos geriátricos en verano. Tendrás que reservar por una app que ningún habitante sabe usar por la brecha digital generacional.',
    extraImage: IMAGES.comoJugarPadel,
    extraImageTitle: 'Cómo inscribirse y reservar la pista de pádel'
  }
];

/* --------------------------------------------------------------------------
   2. EXPLORADOR DESTACADO DE PORTADA ("¿Qué descubrir en La Cabeza?")
   Estilo This is Barcelona (Buscador + Filtros con contador + Grid/Lista)
   -------------------------------------------------------------------------- */
const EXPLORER_ITEMS = [
  {
    id: 'exp-fronton',
    category: 'Lugares de Interés',
    breadcrumb: 'Lugares de Interés | Deporte y Tradición',
    meta: 'Barrio de El Egido · Torneos de Verano',
    title: 'Frontón del pueblo',
    desc: 'El antiguo frontón de La Cabeza donde se reúnen jóvenes y veteranos al juego de pelota y en los torneos de verano.',
    image: IMAGES.fronton,
    targetTab: 'lugares'
  },
  {
    id: 'exp-bartoni',
    category: 'Lugares de Interés',
    breadcrumb: 'Lugares de Interés | Vida Social',
    meta: 'Único negocio del pueblo · Punto de encuentro',
    title: 'Bar Toñi',
    desc: 'Único negocio del pueblo donde se reúnen todos los habitantes para charlar largas horas durante el día y la noche.',
    image: IMAGES.barToni,
    targetTab: 'lugares'
  },
  {
    id: 'exp-resbalina',
    category: 'Lugares de Interés',
    breadcrumb: 'Lugares de Interés | Rincones del Pueblo',
    meta: 'Tobogán natural de granito',
    title: 'Resbalina',
    desc: 'Una piedra granítica que forma un tobogán natural resbaloso donde antaño se deslizaban todos los críos del pueblo.',
    image: IMAGES.resbalina,
    targetTab: 'lugares'
  },
  {
    id: 'exp-padel',
    category: 'Lugares de Interés',
    breadcrumb: 'Lugares de Interés | Deporte y Tradición',
    meta: 'Reserva por app · Torneos de verano',
    title: 'Pista de Pádel',
    desc: 'Pista de pádel en un pueblo de 90 habitantes para echar una tarde con los amigos y celebrar torneos en verano.',
    image: IMAGES.pistaPadel,
    targetTab: 'lugares'
  },
  {
    id: 'exp-olla',
    category: 'Rutas y Naturaleza',
    breadcrumb: 'Situación | Senderismo',
    meta: '5,5 km (Ida) · 1h 30min · Dificultad Media',
    title: 'Cascada de la Olla de los Chorros',
    desc: 'Salto de agua estacional en el arroyo Cabeza de Iruelos, frontera natural entre Cabeza de Framontanos y Pereña de la Ribera.',
    image: IMAGES.rutaOllaChorros,
    targetTab: 'situacion',
    targetSub: 'sit-rutas'
  },
  {
    id: 'exp-sanjuan',
    category: 'Fiestas y Tradición',
    breadcrumb: 'Fiestas | 24 de Junio',
    meta: 'Fiestas Patronales · Solsticio de Verano',
    title: 'Fiestas Patronales de San Juan Bautista',
    desc: 'Tradicional Hoguera de San Juan, procesión con los Mayordomos, convite de chochos y aceitunas, paella popular y vino español.',
    image: IMAGES.cartelSanJuan,
    targetTab: 'fiestas'
  },
  {
    id: 'exp-compra1919',
    category: 'Historia y Patrimonio',
    breadcrumb: 'Historia | Catastro y Propiedad',
    meta: 'Hito histórico · Año 1919',
    title: '1919: Cuando los colonos compraron su propio pueblo',
    desc: 'Historia de las tres dehesas y la Junta Administradora ("El Concejo") que gestionó el proindiviso en yugadas, sesmos y céntimos.',
    image: IMAGES.sello1876,
    targetTab: 'historia',
    targetSub: 'his-catastro'
  },
  {
    id: 'exp-vettones',
    category: 'Historia y Patrimonio',
    breadcrumb: 'Historia | Arqueología s. II a.C.',
    meta: 'Cultura prerromana · Castros y Verracos',
    title: 'Territorio Vettón: Las Merchanas, Saldeana y Yecla la Vieja',
    desc: 'Recorrido por los oppida amurallados, campos de piedras hincadas y esculturas zoomorfas de granito del Oeste Salmantino.',
    image: IMAGES.verracosVettones,
    targetTab: 'historia',
    targetSub: 'his-vettones'
  },
  {
    id: 'exp-diccionario',
    category: 'Cultura y Habla',
    breadcrumb: 'Historia | Lengua Ramajera',
    meta: 'Más de 180 vocablos · Herencia Astur-Leonesa',
    title: 'Diccionario Ramajero: El habla viva de La Cabeza',
    desc: 'Desde "arribales", "cortina" y "caozo" hasta los puntos cardinales propios: abajo (oeste), arriba (este), gallego (norte) y serrano (sur).',
    image: IMAGES.mapaDialectalLeones,
    targetTab: 'historia',
    targetSub: 'his-diccionario'
  },
  {
    id: 'exp-hornazo',
    category: 'Gastronomía y Vino',
    breadcrumb: 'Gastronomía | 19 Recetas Charras',
    meta: 'Recetario tradicional paso a paso',
    title: 'Hornazo Charro, Patatas Meneás y Huevos con Farinato',
    desc: 'Las 19 recetas tradicionales de la cocina salmantina explicadas con todos sus ingredientes y elaboración.',
    image: IMAGES.hornazoCharro,
    targetTab: 'gastronomia',
    targetSub: 'gas-recetas'
  },
  {
    id: 'exp-vinos',
    category: 'Gastronomía y Vino',
    breadcrumb: 'Gastronomía | D.O. Arribes',
    meta: 'Variedades autóctonas · 14 Bodegas',
    title: 'Vinos D.O. Arribes: Juan García, Rufete y Bruñal',
    desc: 'Bancales de granito y pizarra en el cañón del Duero con un microclima único y variedades de uva centenarias recuperadas.',
    image: IMAGES.vinoArribes,
    targetTab: 'gastronomia',
    targetSub: 'gas-vinos'
  },
  {
    id: 'exp-cancionero',
    category: 'Cultura y Habla',
    breadcrumb: 'Cancionero | Folklore Charro',
    meta: 'Dámaso Ledesma (1907) · Gaita y Tamboril',
    title: 'Alboradas, Pasacalles y Repertorio del Cancionero Salmantino',
    desc: 'Las 7 secciones del folklore charro, los toques de gaita salamanquina y tamboril y las letras completas de 19 tonadas.',
    image: IMAGES.panoramicaPueblo,
    targetTab: 'cancionero',
    targetSub: 'can-repertorio'
  },
  {
    id: 'exp-pozoairon',
    category: 'Rutas y Naturaleza',
    breadcrumb: 'Situación | Senderismo',
    meta: '6,7 km (Ida/vuelta) · 3h · Dificultad Baja',
    title: 'Cascada del Pozo Airón y Cueva tras la Cortina de Agua',
    desc: 'Ruta entre viejos molinos y vuelo de buitres leonados hasta el doble salto del Arroyo de los Cuernos en Pereña.',
    image: IMAGES.rutaPozoAiron,
    targetTab: 'situacion',
    targetSub: 'sit-rutas'
  },
  {
    id: 'exp-piconfelipe',
    category: 'Rutas y Naturaleza',
    breadcrumb: 'Situación | Senderismo',
    meta: '1,9 km (Ida/vuelta) · 1h · Mirador 500 m',
    title: 'Mirador del Picón de Felipe y del Fraile',
    desc: 'Asómate a paredes verticales de 500 metros de granito sobre los meandros del Duero y la presa de Aldeadávila.',
    image: IMAGES.rutaPiconFelipe,
    targetTab: 'situacion',
    targetSub: 'sit-rutas'
  },
  {
    id: 'exp-inmaculada',
    category: 'Fiestas y Tradición',
    breadcrumb: 'Fiestas | 6 de Diciembre y Agosto',
    meta: 'Inmaculada y Fiestas de Verano',
    title: 'Fiesta Grande de la Inmaculada y Verano en Marcha',
    desc: 'Puente de diciembre organizado por los jóvenes del pueblo y semanas culturales de agosto con torneos y verbenas.',
    image: IMAGES.cartelVerano,
    targetTab: 'fiestas'
  },
  {
    id: 'exp-asoc',
    category: 'Fiestas y Tradición',
    breadcrumb: 'Asoc. F.E.M. | Comunidad',
    meta: 'Asociación Cultural Framontanos en Marcha',
    title: 'Framontanos en Marcha: Cultura, Teatro y Vida de Pueblo',
    desc: 'Descubre las actividades, talleres, teatro en la iglesia, conciertos y cómo formar parte de la asociación cultural.',
    image: IMAGES.asocPresentacion,
    targetTab: 'asociacion'
  }
];

/* --------------------------------------------------------------------------
   3. RUTAS DE SENDERISMO (PESTAÑA 2.4)
   -------------------------------------------------------------------------- */
const HIKING_ROUTES = [
  {
    id: 'ruta-1',
    name: '1. Olla de los Chorros (Cabeza de Framontanos)',
    subtitle: 'Cascada fronteriza en el arroyo Cabeza de Iruelos entre La Cabeza ("Los Chorros") y Pereña ("La Giralda")',
    distance: '5,5 km (Ida)',
    altitude: '665 m (inicio a 792 m)',
    duration: '1h 30min',
    elevation: '130 m desnivel',
    difficulty: 'Media',
    season: 'Invierno (Dic–Feb) máximo caudal; Primavera (Mar–May) época ideal con floración. Evitar verano (se seca).',
    image: IMAGES.rutaOllaChorros,
    waypoints: [
      '1. Cabeza de Framontanos / Los Berrocalitos (km 0 · 792 m): Salida por la carretera DSA-561 dejando atrás Las Llaneras, Los Berrocalitos y la Peña del Pozo.',
      '2. Mata del Moriano (km 2,55 · 792 m): Cruce en coordenadas 41°12\'42,0"N / 6°27\'48,2"W. Se toma el camino hacia el suroeste durante 1,71 km y luego giro al norte 152 m.',
      '3. Olla de los Chorros (km 4,4 · 665 m): Paso de cancelas ganaderas (dejarlas siempre cerradas) y descenso pronunciado de 61 metros sobre lanchas de granito hasta la olla de la cascada.'
    ]
  },
  {
    id: 'ruta-2',
    name: '2. Cascada del Pozo Airón (Pereña de la Ribera)',
    subtitle: 'Salto de agua de dos niveles en el Arroyo de los Cuernos con una cueva natural detrás de la cortina de agua',
    distance: '6,7 km (Ida y vuelta)',
    altitude: '697 m -> 457 m',
    duration: '3 horas',
    elevation: '320 m desnivel',
    difficulty: 'Baja',
    season: 'Otoño, Invierno y Primavera tras lluvias.',
    image: IMAGES.rutaPozoAiron,
    waypoints: [
      '1. Plaza de Pereña de la Ribera (km 0 · 697 m): Salida por el Camino de la Gargantilla.',
      '2. Zona de aparcamiento (km 1,7 · 581 m): Continuación a pie por senda entre antiguos molinos harineros y observación de buitres leonados, halcones y milanos.',
      '3. Desvío al Pozo Airón (km 2,9 · 469 m): Bajada pedregosa hacia la garganta del arroyo.',
      '4. Cueva y Cascada del Pozo Airón (km 3,0 · 457 m): Acceso a la cavidad natural situada justo detrás del salto de agua.'
    ]
  },
  {
    id: 'ruta-3',
    name: '3. Picón de Felipe y del Fraile (Aldeadávila de la Ribera)',
    subtitle: 'Balcón granítico a 400–500 metros de caída vertical sobre los meandros del Duero, la presa de Aldeadávila y Portugal',
    distance: '1,9 km (Ida y vuelta)',
    altitude: '665 m -> 600 m',
    duration: '1 hora',
    elevation: '90 m desnivel',
    difficulty: 'Baja',
    season: 'Todo el año (llevar agua y protección solar en verano).',
    image: IMAGES.rutaPiconFelipe,
    waypoints: [
      '1. Merendero "Llanos de la Bodega" (km 0 · 665 m): Se accede en coche 5,5 km al oeste de Aldeadávila por la C/ Fuente Santa.',
      '2. Puente de piedra y descenso (km 0,3): Camino pedregoso paralelo a las escarpadas paredes del cañón del Duero.',
      '3. Escalones labrados en la roca y Mirador del Picón de Felipe (km 0,7 · 625 m): Promontorio con barandilla metálica sobre paredes de 500 m con vistas a la Presa de Aldeadávila, los viñedos de Bruçó (Portugal) y el vuelo de buitres leonados, águilas reales y cigüeñas negras.'
    ]
  }
];

/* --------------------------------------------------------------------------
   4. DICCIONARIO RAMAJERO (PESTAÑA 3.10 — VOCABULARIO LOCAL A-Z)
   Fuentes: Mª José Devillard (CIS, 1993), Argimiro Cuadrado (1995),
   José Alonso Pascual (2002) y Ángel Iglesias Ovejero (1990).
   -------------------------------------------------------------------------- */
const DICCIONARIO_RAMAJERO = [
  { letter: 'A', term: 'Abajo', def: 'Punto cardinal local que designa el Oeste (hacia el río Duero y las Arribes).' },
  { letter: 'A', term: 'Arriba', def: 'Punto cardinal local que designa el Este (hacia Vitigudino y Salamanca).' },
  { letter: 'A', term: 'Andá', def: 'Porción o turno de aprovechamiento en las tierras y pastos comunales de la dehesa.' },
  { letter: 'A', term: 'Antrueju', def: 'Carnaval tradicional; tiempo de mascaradas y bromas antes de la Cuaresma.' },
  { letter: 'A', term: 'Arribales / Arribes', def: 'Pendientes escarpadas y cañones graníticos que descienden hacia el Duero y sus afluentes.' },
  { letter: 'A', term: 'Ajechar', def: 'Cribar o limpiar el grano con el ajechadero para separarlo de las impurezas.' },
  { letter: 'B', term: 'Barduño / Bruñal', def: 'Variedad autóctona de uva tinta de Las Arribes; también terreno húmedo o zarzal.' },
  { letter: 'B', term: 'Berrocal / Berrocalitos', def: 'Paraje poblado de grandes bolos y peñascos de granito.' },
  { letter: 'B', term: 'Bálago', def: 'Paja larga de los cereales (especialmente centeno) después de quitarle el grano.' },
  { letter: 'C', term: 'Cabeça / Cabeza', def: 'Cumbre, altozano o núcleo principal ("epicentro") de poblamiento cerca de manantiales.' },
  { letter: 'C', term: 'Cachón', def: 'Salto de agua o cascada rápida entre las peñas de los arroyos arribeños.' },
  { letter: 'C', term: 'Caozo', def: 'Poza profunda o remanso de agua que forma un arroyo al caer entre rocas de granito.' },
  { letter: 'C', term: 'Céntimo', def: 'Unidad mínima de copropiedad en el proindiviso del pueblo (1 sesmo = 100 céntimos; 1 yugada = 8 sesmos).' },
  { letter: 'C', term: 'Chiscar', def: 'Encender la lumbre o hacer saltar chispas con el eslabón y el pedernal.' },
  { letter: 'C', term: 'Cortina', def: 'Parcela o huerto cercado con pared de piedra seca de granito, elemento clave del paisaje de La Ramajería.' },
  { letter: 'C', term: 'Costa', def: 'Ladera o terreno inclinado de pasto o labor dentro del término.' },
  { letter: 'C', term: 'Cuartito', def: 'Medida tradicional de participación en la dehesa equivalente a 4 sesmos (media yugada).' },
  { letter: 'E', term: 'Egido (El Egido)', def: 'Campo común a la salida del pueblo donde no se labra y donde suele situarse el frontón o las eras.' },
  { letter: 'F', term: 'Fagina / Gavela', def: 'Haz o manojo de mies o de leña que se agrupa en la era o en el reparto comunal.' },
  { letter: 'F', term: 'Foramontano / Framontano', def: 'Proveniente de "más allá de los montes" (foras monte), repobladores norteños.' },
  { letter: 'G', term: 'Gallego', def: 'Punto cardinal local que designa el Norte (viento o dirección del norte).' },
  { letter: 'J', term: 'Junta (El Concejo)', def: 'Junta Administradora de 6 propietarios elegidos cada 3 años que rigió el proindiviso entre 1919 y 1964.' },
  { letter: 'L', term: 'Llábana / Lancha', def: 'Losa grande, lisa y plana de piedra de granito a flor de tierra.' },
  { letter: 'L', term: 'Llares', def: 'Cadena de hierro colgada en la chimenea de la cocina tradicional para sostener el caldero sobre la lumbre.' },
  { letter: 'L', term: 'Lote', def: 'Suerte o parcela de tierra/leña adjudicada por sorteo entre los copropietarios de una yugada.' },
  { letter: 'M', term: 'Mejora', def: 'Terreno o pasto reservado de especial calidad dentro del aprovechamiento vecinal.' },
  { letter: 'M', term: 'Meño', def: 'Piedra hincada o bloque granítico vertical frente a las murallas de los castros vettones.' },
  { letter: 'P', term: 'Pindia', def: 'Cuesta o ladera muy empinada y difícil de subir.' },
  { letter: 'R', term: 'Recencio', def: 'Aire frío y húmedo de la mañana o del anochecer; rocío helado.' },
  { letter: 'R', term: 'Regajo', def: 'Arroyuelo o curso pequeño de agua donde crece la maruja (ensalada de regajo).' },
  { letter: 'R', term: 'Retajar', def: 'Marcar o contar las reses y repartir las cargas ganaderas en los pastos del común.' },
  { letter: 'S', term: 'Serrano', def: 'Punto cardinal local que designa el Sur (dirección o viento procedente de la sierra).' },
  { letter: 'S', term: 'Sesmo', def: 'Octava parte de una yugada en la división de la dehesa de Cabeza de Framontanos (equivale a 100 céntimos).' },
  { letter: 'S', term: 'Sinaó', def: 'Desván o sobrado de la casa tradicional donde se guardaba el grano, las patatas y los embutidos.' },
  { letter: 'T', term: 'Tarjá', def: 'Listón de madera donde se marcaban con muescas las cuentas, turnos o repartos del concejo.' },
  { letter: 'T', term: 'Tená / Tenada', def: 'Cobertizo o corral cubierto con ramaje o teja para resguardar el ganado y la leña.' },
  { letter: 'T', term: 'Tolleru', def: 'Barrizal, charco profundo o terreno pantanoso donde se hunden los pies o las caballerías.' },
  { letter: 'T', term: 'Toral (El Toral)', def: 'Calle y espacio principal de acceso al centro del casco urbano de La Cabeza.' },
  { letter: 'V', term: 'Veranil', def: 'Pasto o terreno fresco que conserva hierba para el ganado al llegar el verano.' },
  { letter: 'Y', term: 'Yerbera', def: 'Pajar o lugar destinado a almacenar la hierba seca para el invierno.' },
  { letter: 'Y', term: 'Yugada', def: 'Gran unidad tradicional de división de la dehesa (La Cabeza contaba con 20 yugadas, dividida cada una en 8 sesmos). También designa el grupo de vecinos copropietarios que comparten lote y era.' },
  { letter: 'Z', term: 'Zarrapú', def: 'Andrajo, ropa vieja o desaliñada.' },
  { letter: 'Z', term: 'Zurra', def: 'Paliza o tunda; también bebida refrescante de vino con frutas.' }
];

/* --------------------------------------------------------------------------
   5. REPERTORIO DEL CANCIONERO SALMANTINO (PESTAÑA 4.2 — 19 TONADAS COMPLETAS)
   -------------------------------------------------------------------------- */
const CANCIONERO_SONGS = [
  {
    title: 'La Chana (Tejares)',
    type: 'Cancionero Salmantino · Copla Popular',
    excerpt: '«Caminito de Tejares, me diste las avellanas; partí una, partí dos, todas me salieron vanas...»',
    lyrics: `Caminito de Tejares,
me diste las avellanas;
partí una, partí dos,
todas me salieron vanas.

¡Ay Chana, Chana!
Como te gustan
las avellanas
¡Ay Chana, Chana!
pa’ ti las pochas,
pa’ mí las sanas.

A la puerta de La Chana
tocaban el tamboril,
por ver si La Chana, Chana
se salía a divertir.

¡Ay Chana, Chana!...

Una vez que te quisí
tu mare me lo supió,
como tiene el genio así
todo lo descompusió.

¡Ay Chana, Chana!...

Que la Virgen La Salud
te conserve bien la vista
y si un día te echas novio
no te salga estraperlista.

¡Ay Chana, Chana!...`
  },
  {
    title: 'El Burro de Villarino',
    type: 'Cancionero Salmantino · Canción Burlesca de Las Arribes',
    excerpt: '«Ya se murió el burro que acarreaba la vinagre, ya lo llevó Dios, de esta vida miserable...»',
    lyrics: `Ya se murió el burro que acarreaba la vinagre,
ya lo llevó Dios, de esta vida miserable.

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.

Él era valiente, el era mohíno,
el era el alivio de todo Villarino.

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.

No te acuerdas burro, camino de Pereña,
tú tirabas coces y yo te daba leña.

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.

Ya estiró la pata, ya arrugó el hocico,
con el rabo tieso decía adiós Perico.

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.

Todas las vecinas fueron al entierro,
y la tía Joaquina tocaba el cencerro.

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.

Estiró la pata, arrugó el hocico,
con el rabo tieso decía: – ¡Adiós, Perico!

Que tu ru ru ru rú,
que tu ru ru ru rú,
que tu ru ru ru rú,
que bien lo sabes tú.`
  },
  {
    title: 'Ajechao',
    type: 'Cancionero Salmantino · Baile y Canto Charro',
    excerpt: '«Me casa mi madre, me casa mi madre chiquita y bonita. Y ay ay ay...»',
    lyrics: `Me casa mi madre,
me casa mi madre
chiquita y bonita
Y ay ay ay,
Y ay ay ay
chiquita y bonita.

Con un picarón,
con un picarón
que yo no quería.
Ay ay ay,
Ay ay ay,
que yo no quería.

La primera noche,
la primera noche
el picarón se iba.
Y ay ay ay,
Y ay ay ay
el picarón se iba.

Le seguí los pasos,
le seguí los pasos
por ver dónde iba.
Y ay ay ay,
Y ay ay ay
por ver dónde iba.

Ya lo vi que entró,
ya lo vi que entró
pá cá la querida.
Y ay ay ay,
Y ay ay ay
en cá la querida.

Me fui para casa,
Me fui para casa
mala y afligida.
Y ay ay ay,
Y ay ay ay
mala y afligida.`
  },
  {
    title: 'Señor Alcalde Mayor',
    type: 'Cancionero Salmantino · Ronda y Fiestas',
    excerpt: '«La vara en el ayuntamiento la lleva quien la merece. La lleva el señor alcalde y en sus manos resplandece...»',
    lyrics: `La vara en el ayuntamiento
la lleva quien la merece
La lleva el señor alcalde
y en sus manos resplandece.

Señor alcalde, señor alcalde,
que si no hay toro, tampoco hay baile
Tampoco hay baile tampoco hay misa
porque los mozos no la precisan.

Señor alcalde mayor
No prenda usté a los ladrones
Porque tiene usté una hija
Que roba los corazones.

Señor alcalde, señor alcalde,
que si no hay toro, tampoco hay baile
Tampoco hay baile tampoco hay misa
porque los mozos no la precisan.`
  },
  {
    title: 'Barriendo en mi casa',
    type: 'Cancionero Salmantino · Tonada Acumulativa',
    excerpt: '«Barriendo mi casa yo encontré un dinero. Compré una polla, me puso unos huevos...»',
    lyrics: `Barriendo mi casa yo encontré un dinero.
Compré una polla, me puso unos huevos.
Tengo la polla, tengo los huevos.

Y el mi dinerito lo tengo y lo tengo

Con aquella polla y aquellos huevos,
Compré una oveja e parió un cordero.
Tengo la oveja, tengo el cordero,
Tengo la polla tengo los huevos.`
  },
  {
    title: 'El Ramo',
    type: 'Cancionero Salmantino · Canto Ceremonial del Cordón',
    excerpt: '«Para tejer el cordón a dios le pedimos gracias, al auditorio silencio y a la virgen alabanza...»',
    lyrics: `Para tejer el cordón
a dios le pedimos gracias
Al auditorio silencio
y a la virgen alabanza.

Para tejer el cordón
te pedimos rey del cielo
que nos des tu protección
para salir con acierto.
que nos des tu protección
para salir con acierto.

el cordón ya está tejido
y ahora para destejerlo
le pedimos la licencia
al cristo el humilladero.
le pedimos la licencia
al cristo el humilladero.

Hemos tejido el cordón
A porfía y a placer
Y para más agradarlo
lo volvemos a destejer.
Y para más agradarlo
lo volvemos a destejer.`
  },
  {
    title: 'La Basilisa',
    type: 'Cancionero Salmantino · Copla Picaresca',
    excerpt: '«Basilisa es mi vecina ole ole, sólo piensa en san Antonio...»',
    lyrics: `Basilisa es mi vecina ole ole
Sólo piensa en san Antonio.
Y a san Antonio le pide ole ole
Que le conceda un buen novio.

Pero es preciso que tenga
Una pulila especial
Que la joven Basilisa
Esta lisa, lisa está.
Que la joven Basilisa
Es más lisa que un coral.

Basilisa en el balcón ole ole
Y el cura en el campanario
Por debajo la sotana ole ole
Le enseñaba el relicario.

Pero es preciso que tenga
Una pulila especial
Que la joven Basilisa
Esta lisa, lisa está.
Que la joven Basilisa
Es más lisa que un coral.`
  },
  {
    title: 'Los Mocitos de la Maya',
    type: 'Cancionero Salmantino · Copla Taurina',
    excerpt: '«Los Mocitos de la Maya, en los papeles pusieron iban a matar el toro Jose Manuel y el Moreno...»',
    lyrics: `Los Mocitos de la Maya, en los papeles pusieron
iban a matar el toro Jose Manuel y el Moreno.
iban a matar el toro Jose Manuel y el Moreno.

Que tiene que venir la tenemos que ver
una niña muy guapa hija de un coronel.
Hija de un coronel, hija de un coronel
Que tiene que venir, la tenemos que ver.

No lo niegues Avelina, que nosotros lo sabemos,
Que van a matar el toro Jose Manuel y el Moreno.
Que van a matar el toro Jose Manuel y el Moreno.

Que tiene que venir la tenemos que ver
una niña muy guapa hija de un coronel.
Hija de un coronel, hija de un coronel
Que tiene que venir, la tenemos que ver.

Ese que llaman el pinche, se ha metido cuchareta,
Ya no quiere torear, se ha cortado la coleta,
Ya no quiere torear, se ha cortado la coleta.

Que tiene que venir la tenemos que ver
una niña muy guapa hija de un coronel.
Hija de un coronel, hija de un coronel
Que tiene que venir, la tenemos que ver.

Que tiene que venir la tenemos que ver
una niña muy guapa hija de un coronel.
Hija de un coronel, hija de un coronel
Que tiene que venir, la tenemos que ver.

Que tiene que venir la tenemos que ver
una niña muy guapa hija de un coronel.
Hija de un coronel, hija de un coronel
Que tiene que venir, la tenemos que ver.`
  },
  {
    title: 'La Vaca de Carranza',
    type: 'Cancionero Salmantino · Copla de Carnaval (Villavieja)',
    excerpt: '«Licencia pido señores para poder explicar lo ocurrido en Villavieja un martes de carnaval...»',
    lyrics: `Licencia pido señores
para poder explicar
Lo ocurrido en Villavieja
un martes de carnaval.
La vaca era de Carranza
la de la casa rumbona
Que por nombre la pusieron
la vaquita mandilona.

Se marchan al herradero
de la dehesa Santidad
Y allí ajustaron la vaca
con mucha formalidad.
Don Domingo Bazarelli
el cura de Villavieja,
Pa acabarla de ajustar
ha ofrecido dos pesetas.

Ancelmoro se presenta
con algo de miedo y dice
La tengo que torear
aunque caiga de narices.
Y Anastasio Mateos
por ser padre de familia
Va a ser el mejor torero
que ponga las banderillas.

Juan Garci Samuel Merchá
van a despejar la plaza
Que montados a caballo
tienen que hacer mucha gracia.
La vaca era de Carranza
la de la casa rumbona
Que por nombre la pusieron
la vaquita mandilona.
…
Que por nombre la pusieron
la vaquita mandilona.
…
Que por nombre la pusieron
la vaquita mandilona.`
  },
  {
    title: 'Jota Macoterana',
    type: 'Cancionero Salmantino · Jota (Agapito Blázquez / Ángel Carril)',
    excerpt: '«La guitarra pide vino y las cuerdas, aguardiente, y el tocador que la toca una muchacha de a veinte...»',
    lyrics: `La guitarra pide vino y las cuerdas, aguardiente,
y el tocador que la toca una muchacha de a veinte.

Anda y dile a tu madre la legañosa
que en la botica venden agua de rosas.

La pimienta es chica y pica y sazona los guisados y tú,
como pequeñita, hasta el alma me has picado.
Al mancado le han hecho con una cuarta
pantalón y levita chupa y casaca.
¡Ay!, ¡quién pudiera tener un cortijo con parrales,
aceite, carbón y luz y veinte millones de reales!

Anda y dile a tu madre la legañosa
que en la botica venden agua de rosas.

A mi mujer y a mi burra en la cuadra examiné,
y tenía más talento la burra que la mujer.
Y a tu madre la monto en la tartana,
a tu padre, en el coche y a ti, en la cama.
Anda y dile a tu madre la legañosa
que en la botica venden agua de rosas.

(Versión que le cantó el señor Agapito Blázquez a Ángel Carril)`
  },
  {
    title: 'Los Mozos de Monleón (Lorca)',
    type: 'Cancionero Salmantino · Romance Charro',
    excerpt: '«Los mozos de Monleón se fueron ya arar temprano, para ir a la joriza la mandame de tu amor soledad...»',
    lyrics: `Los mozos de Monleón
se fueron ya arar temprano
Para ir a la joriza
la mandame de tu amor soledad.
Y remudar con despacio.

Al hijo de la viuda
el remudo no le han dado
Yo a la joriza e de ir
la mándame de tu amor soledad.
Y aunque lo busque prestado.

permita dios si te vas,
Te traigan encima un carro
Las abarcas y el sombrero
la mándame de tu amor soledad.
De los indiestros colgado.

Subieron cuestas arriba,
bajaron cuestas abajo
Preguntado por el toro
la mándame de tu amor soledad.
Y tora ya está encerrado.

En medio del camino
al vaquero se encontraron
Que tiempo que tiene el toro
la mándame de tu amor soledad
Y el toro tiene ocho años.

Muchachos no entréis a él,
mirad que el toro es muy malo
Que la leche que mamó
la mandame de tu amor soledad
Se la di yo por mi mano.

Si nos mata que nos mate,
ya venimos sentenciados
Se presentan en la plaza
la mándame de tu amor soledad
Ocho mozos muy gallardos.

Manuel Sánchez llamó al toro,
nunca lo hubiera llamado
Por el pico de una barca
la mándame de tu amor soledad
Toda la plaza arrastrado.

Cuando el toro lo dejó,
ya lo ha dejado espirando
Madre mía yo me muero
la mándame de tu amor soledad
Madre mía yo me a callo.

Y al rico de Monleón
le piden un taxi carro
Pa llevar al torerillo
la mándame de tu amor soledad
Que el torito lo ha matado.

A la puerta la viuda
arrecularon el carro
Aquí tenéis vuestro hijo
la mándame de tu amor soledad
Tal como lo habéis mandado.

A eso de los nueve meses
Salió la madre bramando
Preguntando por el toro la mándame soledad
Y el toro ya está enterrado.`
  },
  {
    title: 'El Palillo del Tío Roque',
    type: 'Cancionero Salmantino · Copla Popular',
    excerpt: '«El palillo del tío Roque quieren que lo toque yo. Que lo toquen las mocitas que tienen la obligación...»',
    lyrics: `El palillo del tío Roque
quieren que lo toque yo.
Que lo toquen las mocitas
que tienen la obligación.

Este es el palillo
niña del tío Roque
y aquí te lo traigo
pare que lo toques.

Si el palillo se rompiera
por alguna coyuntura
llamaría a las mocitas
pá que hicieran la cura.

Este es el palillo
niña del tío Roque
y aquí te lo traigo
pare que lo toques`
  },
  {
    title: 'Salamanca La Blanca (Charrada)',
    type: 'Cancionero Salmantino · Charrada',
    excerpt: '«Salamanca, la blanca, ¿quién te mantiene? Cuatro carboneritos que van y vienen...»',
    lyrics: `Salamanca, la blanca,
Salamanca, la blanca,
¿quién te mantiene?

Cuatro carboneritos,
cuatro carboneritos
que van y vienen.

Y el romero
tendido está en el tu manteo.
Y el perejil,
tendido está en el tu mandil.

Si echas el surco derecho,
si echas el surco derecho
a mi ventana,
labrador de mi padre,
labrador de mi padre
serás mañana.`
  },
  {
    title: 'La Clara (Villamayor)',
    type: 'Cancionero Salmantino · Copla Popular',
    excerpt: '«Esa que llaman la Clara la flor de Villarmayor, porque el era’l hijo Castro, al albardero dejó...»',
    lyrics: `Esa que llaman la Clara la flor de Villarmayor
Porque el era’l hijo Castro, al albardero dejó.

Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada
Albardero, albardero, albardero
Que ya no te quiere la hija del herrero

La Clara cuando va a misa
lleva saya colorá
Porque no digan los mozos
que la Clara va preñá.

Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada
Ay guindilla, guindilla, guindilla
que ya no te quiere la de la toquilla

La Clara cuando va’l baile
lleva terrones de azúcar
para dárselo a los mozos
y que no la llamen puta

Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada.
Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada.

De que le sirve a la Clara
ponerse donde tós la vean
Si los mozos de este pueblo
ya saben de que pie cojea.

Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada
Ay guindilla, guindilla, guindilla
que ya no te quiere la de la toquilla

Ay guindilla, guindilla, picante
que ya no te quiere la de los volantes

Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada.
Ay, la Clara, la Clara, la Clara
Que antes era moza y ahora ya casada.`
  },
  {
    title: 'Ven Mujer, Ven',
    type: 'Cancionero Salmantino · Diálogo Festivo',
    excerpt: '«Ven mujer, mujer que te compro unos pendientes, No marido no, déjalo para aguardiente...»',
    lyrics: `Ven mujer, mujer
que te compro unos pendientes,
No marido no,
déjalo para aguardiente.

Ven mujer, mujer
que te compro unos zapatos,
No marido no,
déjalo para tabaco.

Con el agua me pongo muy mala,
Con el vino me curo marido,
me curo marido.

Ven mujer, mujer
que te regalo unas medias,
No marido no,
déjalo para la feria.

Ven mujer, mujer
que te compro unos pendientes,
No marido no,
déjalo para aguardiente.

Con el agua me pongo muy mala,
Con el vino me curo marido,
me curo marido.`
  },
  {
    title: 'La Malcasada del Pastor',
    type: 'Cancionero Salmantino · Tonada Tradicional',
    excerpt: '«El cencerro de la vaca de mi abuela que esté en gloria traigo colgado al pescuezo pá recordar su memoria...»',
    lyrics: `El cencerro de la vaca
de mi abuela que esté en gloria
Traigo colgado al pescuezo
pá recordar su memoria.

Casóme mi mare
con un pícaro pastor.
No quiere que vaya a misa
tampoco a la procesión

Quiere que me esté en casa
remendándole el calzón.
Y después de remendado
no lo puede ya poner,

Porque dice que lo tengo
muy malito de coser.
Abelín, Abelan
que ya no lo tengo que remendar.`
  },
  {
    title: 'La Merenciana',
    type: 'Cancionero Salmantino · Copla Histórica',
    excerpt: '«Ya suenan las esquilitas, ya viene el coche de Llén a buscar a Merenciana pa que la vea el Marqués...»',
    lyrics: `Ya suenan las esquilitas
ya viene el coche de Llén
a buscar a Merenciana
pa que la vea el Marqués.

Merenciana se creía
que el Marqués era soltero
para casarse con ella
y disfrutar del dinero.

Merenciana es una rosa,
Merenciana es un clavel,
Merenciana es un espejo
donde se mira el Marqués.

Merenciana se creía
que el Marqués le iba a dar
el coche y los caballos
para ir a pasear.

Merenciana se creía
que el Marqués le iba a dar
las joyas y la alhajas
para ir a pasear.

Las ligas de Merenciana
que luce durante el día
se las regaló el Marqués
cuando con ella dormía.

Merenciana es una santa
y su madre es el mal
a los mocitos del pueblo
no los dejan ni parar.

Merenciana es una tuna
y su madre una alcahueta
y al pobre marqués de Llén
bien le soplan las pesetas.

El médico de Matilla
le dice al de Carrascal
los males de Merenciana
nadie los puede curar.

Merenciana, Merenciana
ya te lo decía yo
que el andar con el Marqués
sería tu perdición`
  },
  {
    title: 'Baile de la Botella',
    type: 'Cancionero Salmantino · Baile Tradicional',
    excerpt: '«Esa que llaman la Juana la botella va a bailar, y le será cosa fácil que le pegué una patá...»',
    lyrics: `Esa que llaman la Juana
La botella va a bailar
Y le será cosa fácil
Que le pegué una patá.

Al salir el sol te quisiera ver
Al salir el sol ramito de aurel
ramito de aurel, ramito de aurel
Al salir el sol te quisiera ver.

Ese que llaman Manuel
La botella va a bailar
Y le será cosa fácil
Que le pegué una patá.

Al salir el sol te quisiera ver
Al salir el sol ramito de aurel
ramito de aurel, ramito de aurel
Al salir el sol te quisiera ver`
  },
  {
    title: 'Canción de las Panaderas',
    type: 'Cancionero Salmantino · Canto de Oficio',
    excerpt: '«Ya vienen las panaderas y ole por las calles de San Juan, va pregonando mi niña y ole cuatro cuartos vale el pan...»',
    lyrics: `Ya vienen las panaderas y ole
Por las calles de San Juan
Va pregonando mi niña y ole
Cuatro cuartos vale el pan
Va pregonando mi niña y ole
Cuatro cuartos vale el pan.

Dime panaderilla, panaderilla,
panaderilla, panaderilla
Como va el trato
La harina va subiendo
Y el pan bajando.

Préstame tus ojuelos Ana María
Para tirar un tiro de artillería
Para tirar un tiro de artillería
La uvas del huerto, Las peras,
Los melocotones, las brevas,
Turrón de alicante, avellana,
La panaderita lo gana, con su cedacillo
y ay carambita y ay caramba`
  }
];

/* --------------------------------------------------------------------------
   6. RECETARIO CHARRO — LAS 19 RECETAS COMPLETAS (PESTAÑA 5.1)
   -------------------------------------------------------------------------- */
const RECIPES = [
  {
    name: 'Hornazo Charro',
    category: 'Entrantes Fríos',
    image: IMAGES.hornazoCharro,
    ingredients: 'Masa: 1 kg de harina, 250 ml de leche o vino blanco, 150 ml de aceite de oliva, 100 g de manteca de cerdo, 25 g de levadura fresca, huevos y sal. Relleno: Lomo adobado en filetes, chorizo ibérico en rodajas, jamón serrano/ibérico y huevos duros.',
    steps: 'Amasar la harina con la leche templada, el aceite, la manteca derretida, la levadura y una pizca de sal hasta lograr una masa elástica. Dejar reposar 1 hora. Dividir en dos mitades: extender la base, colocar capas de chorizo, lomo, jamón y huevos duros. Cubrir con la otra lámina, sellar los bordes, decorar con enrejado de masa, pintar con huevo batido y hornear a 180 °C durante 40–45 minutos.'
  },
  {
    name: 'Ensalada de Regajo (Maruja)',
    category: 'Entrantes Fríos',
    image: 'https://static.wixstatic.com/media/d7d904_04eb806ed6dab1b89059ec85c02afd1d.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Ensalada%2Bde%2Bregajo-plato.jpg',
    ingredients: 'Brotes frescos de maruja (planta silvestre de los regajos y arroyos de La Cabeza), naranja troceada o queso azul/de Arribes, ajo picado, pimentón dulce (ajomojo), aceite de oliva virgen extra, vinagre y sal.',
    steps: 'Lavar muy bien los tallos tiernos de maruja recién cogidos en los regajos de agua limpia. Escurrir, acompañar con gajos de naranja o dados de queso y aliñar con un majado de ajo, pimentón, aceite de oliva, vinagre y sal.'
  },
  {
    name: 'Ensalada de Bacalao',
    category: 'Entrantes Fríos',
    image: 'https://static.wixstatic.com/media/d7d904_4b15274d723b573890028a33b53f026e.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/ensalada%2Bde%2Bbacalao_JPG.jpg',
    ingredients: '400 g de bacalao desalado desmigado, 2 naranjas, 1 cebolleta, aceitunas negras, 2 huevos duros, aceite de oliva virgen extra, pimentón de la Vera y vinagre.',
    steps: 'Desmigar el bacalao en lascas, pelar y cortar las naranjas en rodajas o dados, añadir la cebolleta en juliana fina, las aceitunas y el huevo duro. Aliñar con aceite de oliva, unas gotas de vinagre y una pizca de pimentón.'
  },
  {
    name: 'Huevos con Farinato',
    category: 'Entrantes Calientes',
    image: 'https://static.wixstatic.com/media/d7d904_7727343c943c83e4698c515f43cc5f19.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/huevos%2Bcon%2Bfarinato.jpg',
    ingredients: '1 rosca de farinato salmantino (embutido tradicional de manteca de cerdo, miga de pan, pimentón, cebolla, aguardiente y anís), huevos camperos, patatas y aceite de oliva.',
    steps: 'Cortar el farinato en rodajas de 1 cm y pasarlas vuelta y vuelta por la sartén con muy poco aceite. Freír los huevos con puntilla en aceite de oliva caliente, acompañar de patatas fritas y romper las yemas sobre el farinato.'
  },
  {
    name: 'Ancas de Rana',
    category: 'Entrantes Calientes',
    image: 'https://static.wixstatic.com/media/d7d904_257c75f6ccf5ae4bee79ad302deb1600.jpeg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/ancas%2Bde%2Brana.jpeg',
    ingredients: '2 docenas de ancas de rana limpias, 4 dientes de ajo, perejil fresco, guindilla, harina, vino blanco, pimentón y aceite de oliva.',
    steps: 'Sazonar y enharinar ligeramente las ancas, freírlas en aceite caliente con ajos laminados y guindilla, o guisarlas en salsa verde/colorada con ajo, perejil, pimentón y un chorrito de vino blanco de Las Arribes.'
  },
  {
    name: 'Patatas Meneás o Revolconas',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_58dd5a59afc018b9aecd09b6486b8cbf.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/patatas%2Bmeneadas.jpg',
    ingredients: '1 kg de patatas, 200 g de panceta o torreznos ibéricos, 4 dientes de ajo, 1 hoja de laurel, 1 cucharada de pimentón dulce y una pizca de picante, aceite de oliva y sal.',
    steps: 'Cocer las patatas troceadas con laurel y sal. Freír los torreznos en dados hasta que queden crujientes y reservar. En esa misma grasa, dorar los ajos laminados, apartar del fuego, añadir el pimentón y verter sobre las patatas con un poco de su caldo de cocción, "meneándolas" y machacándolas hasta lograr un puré cremoso coronado con los torreznos.'
  },
  {
    name: 'Lentejas de la Armuña Estofadas',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_5c8e50de9b918211dd3448180f49394f.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/LENTEJAS%2B3.jpg',
    ingredients: '400 g de Lenteja de La Armuña (I.G.P.), 1 chorizo ibérico, 1 punta de jamón, 1 zanahoria, 1 cebolla, 1 puerro, 2 dientes de ajo, laurel, pimentón dulce y aceite de oliva.',
    steps: 'Poner las lentejas en agua fría con la verdura, el laurel, el chorizo y el hueso de jamón. Añadir un sofrito de ajo, cebolla y pimentón, y dejar cocer a fuego lento durante 45–50 minutos hasta que el caldo espese.'
  },
  {
    name: 'Calderillo Bejarano',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_bd96a4930b9741dcb59c0e4dd162073c.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Calderillo%2BBejarano%2B%25285%2529_JPG.jpg',
    ingredients: '800 g de aguja o morcillo de ternera charra, 1 kg de patatas, cebolla, pimiento verde y rojo, tomate, guisantes, ajo, laurel, vino blanco, pimentón y aceite de oliva.',
    steps: 'Dorar la carne en dados y reservar. Hacer un sofrito con cebolla, ajo, pimientos y tomate, reincorporar la carne con vino blanco y agua hasta enternecer. Añadir las patatas chascadas y los guisantes y cocer hasta que el caldo trabe.'
  },
  {
    name: 'Chanfaina Salmantina',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_763c32b93b6b5666f0e662f25b153054.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Plato%2Bde%2Bchanfaina.jpg',
    ingredients: 'Asadurilla y manitas de cordero, sangre cocida, 300 g de arroz, cebolla, ajo, laurel, cominos, clavo, pimentón, guindilla, huevo duro y aceite de oliva.',
    steps: 'Cocer las manitas y asadurilla troceada con laurel. Preparar un sofrito con cebolla, pimentón y majado de ajo, comino y clavo. Incorporar el arroz, la carne, la sangre cocida en dados y el caldo, cociendo 18 minutos. Servir con huevo duro picado.'
  },
  {
    name: 'Sopas de Ajo',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_b3032bf1e8627980452733ddc9af1e45.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Sopas%2Bde%2BAjo_JPG.jpg',
    ingredients: 'Hogaza de pan candeal asentado de varios días, 6 dientes de ajo, 1 cucharada de pimentón de la Vera, tacos de jamón o tocino, caldo o agua, huevos y aceite de oliva.',
    steps: 'Dorar los ajos laminados y el jamón en cazuela de barro con aceite, retirar del fuego y añadir el pimentón y el pan cortado en rebanadas finas. Rehogar, cubrir con agua o caldo hirviendo, cocer 15 minutos a fuego suave y escalfar los huevos encima.'
  },
  {
    name: 'Patatas con Arroz y Bacalao',
    category: 'Primeros Platos',
    image: 'https://static.wixstatic.com/media/d7d904_82b59e37387b47b5bc105b63b9dacfc1.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/DSC07874_JPG.jpg',
    ingredients: '350 g de bacalao desalado, 4 patatas medianas, 2 puñados de arroz, 1 cebolla, 2 dientes de ajo, laurel, pimentón dulce y aceite de oliva.',
    steps: 'Guiso clásico de Vigilia y Semana Santa en La Cabeza: hacer un sofrito de cebolla, ajo y pimentón, chascar las patatas, cubrir de agua con laurel, añadir el arroz a media cocción y terminar los últimos 8 minutos con los trozos de bacalao.'
  },
  {
    name: 'Cabrito Cuchifrito',
    category: 'Carnes',
    image: 'https://static.wixstatic.com/media/d7d904_6afdac558037e9f8a321c58c1024cef0.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/cabrito_JPG.jpg',
    ingredients: '1,5 kg de cabrito lechal de Las Arribes troceado pequeño, 1 cabeza de ajos, laurel, tomillo, pimentón, vinagre o vino blanco, aceite de oliva y sal.',
    steps: 'Freír a fuego vivo los trozos de cabrito sazonados en abundante aceite con los ajos enteros sin pelar y el laurel hasta que queden muy dorados por fuera y jugosos por dentro. Al final, añadir un toque de pimentón y unas gotas de vinagre o vino blanco.'
  },
  {
    name: 'Tostón Asado (Cochinillo)',
    category: 'Carnes',
    image: 'https://static.wixstatic.com/media/d7d904_9ca22c06e6c4aab83b118eb44cbffb38.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/tost%25C3%25B3n.jpg',
    ingredients: '1 cochinillo o tostón de 4–5 kg abierto por el espinazo, manteca de cerdo, 4 dientes de ajo, laurel, agua y sal.',
    steps: 'Colocar el tostón en cazuela de barro sobre unas tablillas de madera con un fondo de agua y laurel, primero con la piel hacia abajo a 180 °C durante 1 hora. Darle la vuelta, untar la piel con manteca y ajo machacado, pinchar para que no forme burbujas y dorar 45–60 min hasta que la corteza quede crujiente.'
  },
  {
    name: 'Cordero Asado (Lechazo)',
    category: 'Carnes',
    image: 'https://static.wixstatic.com/media/d7d904_b06437ac77459b3b91d0d96504f04cbd.jpeg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/lechazo%2Basado.jpeg',
    ingredients: 'Cuartos de cordero lechal de los pastos de La Ramajería, manteca de cerdo, agua, sal y ramita de tomillo o romero.',
    steps: 'Sazonar los cuartos de lechazo, untar ligeramente con manteca y colocar en fuente de barro con un vaso de agua. Hornear a 180 °C regando con su propio jugo cada 25 minutos y dando la vuelta a mitad de asado hasta que quede tierno y dorado.'
  },
  {
    name: 'Liebre con Patatas o Arroz',
    category: 'Carnes',
    image: 'https://static.wixstatic.com/media/d7d904_9874df5420f459d56404bce8adde9f41.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Liebre%2Bcon%2Bpatatas.jpg',
    ingredients: '1 liebre troceada y adobada, patatas (o arroz), cebolla, ajo, pimiento, laurel, tomillo, vino tinto D.O. Arribes, pimentón y aceite de oliva.',
    steps: 'Dorar la liebre con ajo y cebolla, desglasar con vino tinto de Las Arribes y estofar a fuego lento con laurel y tomillo hasta que la carne esté tierna. Incorporar las patatas chascadas y cocer en el jugo.'
  },
  {
    name: 'Bollo Maimón',
    category: 'Postres',
    image: 'https://static.wixstatic.com/media/d7d904_a1e71ee019752d3c2c9f2d5f81a1728a.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/Bollo%2BMaim%25C3%25B3n_JPG.jpg',
    ingredients: '6 huevos, 200 g de azúcar, 200 g de harina o fécula de patata/maíz, ralladura de limón y una copita de aguardiente o anís.',
    steps: 'Bizcocho esponjoso tradicional de las bodas y fiestas charras: batir enérgicamente las claras a punto de nieve, incorporar las yemas, el azúcar, la ralladura de limón y el aguardiente, y por último la harina tamizada con movimientos envolventes. Hornear en molde alto con chimenea central a 170 °C durante 35 minutos.'
  },
  {
    name: 'Perronillas (Perrunillas)',
    category: 'Postres',
    image: 'https://static.wixstatic.com/media/d7d904_43d1ccefe112f9fa2bac7a15558f5a54.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/perronillas.jpg',
    ingredients: '500 g de manteca de cerdo ibérico, 350 g de azúcar, 3 yemas y 1 huevo entero, 1 kg de harina, canela, ralladura de limón, aguardiente, clara batida y azúcar para espolvorear.',
    steps: 'Batir la manteca a temperatura ambiente hasta blanquearla, añadir las yemas, el azúcar, el aguardiente, la canela y la harina. Formar tortitas ovaladas, pintar con clara batida, cubrir de azúcar en grano y hornear a 180 °C unos 18–20 minutos. Imprescindibles en el convite de San Juan.'
  },
  {
    name: 'Mantecadas',
    category: 'Postres',
    image: 'https://static.wixstatic.com/media/d7d904_2a669c473ac612aa66ce7120f6bb023b.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/MANTECADAS.jpg',
    ingredients: '250 g de manteca de vaca o cerdo, 250 g de azúcar, 4 huevos, 250 g de harina floja y 1 sobre de levadura.',
    steps: 'Batir la manteca en pomada con el azúcar, añadir los huevos uno a uno y finalmente la harina con la levadura. Verter en cajetillas de papel cuadradas y hornear a 180 °C durante 15–18 minutos.'
  },
  {
    name: 'Leche Frita',
    category: 'Postres',
    image: 'https://static.wixstatic.com/media/d7d904_7a3b59a331f7784e67745dae0af9a2cc.jpg/v1/fill/w_500,h_340,al_c,q_80,enc_avif,quality_auto/leche%2Bfrita.jpg',
    ingredients: '1 litro de leche entera, 120 g de maicena, 150 g de azúcar, piel de limón, rama de canela, harina y huevo para rebozar, azúcar y canela en polvo.',
    steps: 'Infusionar la leche con canela y limón, disolver la maicena en un vaso de leche fría e incorporar al cazo removiendo hasta que espese. Enfriar en fuente rectangular, cortar en cuadrados, pasar por harina y huevo, freír y rebozar en azúcar y canela.'
  }
];

/* --------------------------------------------------------------------------
   7. GLOSARIO DE 14 HIERBAS Y ESPECIAS (PESTAÑA 5.2)
   -------------------------------------------------------------------------- */
const HERBS_LIST = [
  { name: '1. Árnica', latin: 'Arnica montana', type: 'Antiinflamatoria (Uso externo)', desc: 'Capítulos florales empleados tradicionalmente en maceración o pomada para golpes, contusiones, hematomas y dolores musculares. No ingerir.' },
  { name: '2. Celedonia', latin: 'Chelidonium majus', type: 'Uso tópico tradicional', desc: 'Hierba de las golondrinas: su látex anaranjado de los tallos frescos se aplicaba popularmente de forma externa sobre verrugas y callosidades.' },
  { name: '3. Hinojo', latin: 'Foeniculum vulgare', type: 'Digestiva y Carminativa', desc: 'Frutos, hojas y bulbos aromáticos anisados muy apreciados para aliviar gases, digestiones pesadas y aromatizar aceitunas y guisos.' },
  { name: '4. Hipérico', latin: 'Hypericum perforatum', type: 'Cicatrizante y Relajante', desc: 'Hierba de San Juan: florece por el solsticio de junio. Macerada en aceite de oliva sirve para quemaduras y heridas; en infusión, como equilibrante nervioso.' },
  { name: '5. Laurel', latin: 'Laurus nobilis', type: 'Culinaria y Digestiva', desc: 'Hojas coriáceas indispensables en los estofados, escabeches, lentejas y asados charros, además de estimular la digestión.' },
  { name: '6. Malva', latin: 'Malva sylvestris', type: 'Emoliente y Expectorante', desc: 'Flores y hojas ricas en mucílagos empleadas en infusión para suavizar la garganta, calmar la tos y aliviar irritaciones cutáneas.' },
  { name: '7. Marrubio', latin: 'Marrubium vulgare', type: 'Expectorante y Tónica', desc: 'Planta silvestre de bordes de caminos y cortinas, usada en tisanas para afecciones respiratorias y para estimular el apetito.' },
  { name: '8. Olivo', latin: 'Olea europaea', type: 'Hipotensora y Alimentaria', desc: 'Cultivado en los bancales cálidos de Las Arribes: sus hojas en infusión ayudan a regular la tensión arterial y su fruto da aceite virgen de gran carácter.' },
  { name: '9. Orégano', latin: 'Origanum vulgare', type: 'Culinaria, Digestiva y Antiséptica', desc: 'Aroma esencial de los adobos, chichas, probaduras y hornazos salmantinos; en infusión alivia catarros y espasmos digestivos.' },
  { name: '10. Ortiga', latin: 'Urtica dioica', type: 'Depurativa y Remineralizante', desc: 'Rica en hierro y minerales; escaldada o en decocción se utiliza como diurética, depurativa y reconstituyente.' },
  { name: '11. Poleo', latin: 'Mentha pulegium / piperita', type: 'Digestiva y Tonificante', desc: 'Crece junto a fuentes y regajos húmedos; su infusión aromática después de las comidas asienta el estómago.' },
  { name: '12. Romero', latin: 'Rosmarinus officinalis', type: 'Tonificante y Culinaria', desc: 'Aromatiza carnes de cordero, cabrito y caza; en alcohol de romero se emplea para friegas contra dolores reumáticos y fatiga.' },
  { name: '13. Ruda', latin: 'Ruta chalepensis', type: 'Tradicional (Precaución)', desc: 'Planta de intenso olor usada en la medicina popular antigua y protección de corrales; requiere extrema precaución por su toxicidad interna.' },
  { name: '14. Tomillo', latin: 'Thymus serpyllum / zygis', type: 'Antiséptica, Expectorante y Culinaria', desc: 'Tapiza los berrocales y dehesas: excelente condimento de asados y potente antiséptico respiratorio en infusión con miel.' }
];

/* --------------------------------------------------------------------------
   8. LÓGICA DE NAVEGACIÓN, FILTROS Y RENDERIZADO DINÁMICO
   -------------------------------------------------------------------------- */
let currentExplorerCategory = 'Todas';
let currentExplorerView = 'grid';
let currentExplorerSearch = '';
let currentDictLetter = 'TODAS';
let currentDictSearch = '';
let currentRecipeCategory = 'Todas';
let currentLugarCategory = 'Todos';

function switchTab(tabId, subTabId) {
  // Activate main tab button
  document.querySelectorAll('.tib-tab-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.tab === tabId);
  });

  // Activate main tab panel
  document.querySelectorAll('.tib-tab-panel').forEach(panel => {
    panel.classList.toggle('is-active', panel.id === `tab-${tabId}`);
  });

  // Close drawer if open
  const drawer = document.getElementById('tibDrawer');
  if (drawer) drawer.classList.remove('is-open');

  // If subTabId is requested, switch to it
  if (subTabId) {
    switchSubTab(tabId, subTabId);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchSubTab(parentTabId, subPanelId) {
  const parentPanel = document.getElementById(`tab-${parentTabId}`);
  if (!parentPanel) return;

  parentPanel.querySelectorAll('.tib-subnav-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.sub === subPanelId);
  });

  parentPanel.querySelectorAll('.tib-subpanel').forEach(sub => {
    sub.classList.toggle('is-active', sub.id === subPanelId);
  });
}

function renderExplorer() {
  const grid = document.getElementById('explorerGrid');
  const pillsContainer = document.getElementById('explorerPills');
  if (!grid || !pillsContainer) return;

  const categories = ['Todas', 'Lugares de Interés', 'Rutas y Naturaleza', 'Historia y Patrimonio', 'Cultura y Habla', 'Gastronomía y Vino', 'Fiestas y Tradición'];
  pillsContainer.innerHTML = categories.map(cat => {
    const count = cat === 'Todas'
      ? EXPLORER_ITEMS.length
      : EXPLORER_ITEMS.filter(i => i.category === cat).length;
    const activeClass = currentExplorerCategory === cat ? 'is-active' : '';
    return `<button class="tib-pill ${activeClass}" onclick="setExplorerCategory('${cat}')">
      <span>${cat}</span>
      <span class="tib-pill__count">${count}</span>
    </button>`;
  }).join('');

  const filtered = EXPLORER_ITEMS.filter(item => {
    const matchesCat = currentExplorerCategory === 'Todas' || item.category === currentExplorerCategory;
    const q = currentExplorerSearch.trim().toLowerCase();
    const matchesSearch = !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.breadcrumb.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  grid.className = `tib-cards-grid ${currentExplorerView === 'list' ? 'is-list-view' : ''}`;
  grid.innerHTML = filtered.map(item => `
    <article class="tib-card" onclick="switchTab('${item.targetTab}', '${item.targetSub || ''}')">
      <div class="tib-card__media">
        <span class="tib-card__badge">${item.category}</span>
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="tib-card__body">
        <div class="tib-card__breadcrumb">${item.breadcrumb}</div>
        <div class="tib-card__meta">${item.meta}</div>
        <h3 class="tib-card__title">${item.title}</h3>
        <p class="tib-card__desc">${item.desc}</p>
      </div>
    </article>
  `).join('');
}

function setExplorerCategory(cat) {
  currentExplorerCategory = cat;
  renderExplorer();
}

function setExplorerView(view) {
  currentExplorerView = view;
  document.getElementById('btnViewGrid')?.classList.toggle('is-active', view === 'grid');
  document.getElementById('btnViewList')?.classList.toggle('is-active', view === 'list');
  renderExplorer();
}

function renderLugares() {
  const pillsEl = document.getElementById('lugaresPills');
  const gridEl = document.getElementById('lugaresGrid');
  if (!pillsEl || !gridEl) return;

  const cats = ['Todos', 'Deporte y Tradición', 'Vida Social', 'Rincones del Pueblo'];
  pillsEl.innerHTML = cats.map(c => {
    const count = c === 'Todos' ? LUGARES_INTERES.length : LUGARES_INTERES.filter(l => l.category === c).length;
    return `<button class="tib-pill ${currentLugarCategory === c ? 'is-active' : ''}" onclick="setLugarCategory('${c}')">
      <span>${c}</span>
      <span class="tib-pill__count">${count}</span>
    </button>`;
  }).join('');

  const filtered = currentLugarCategory === 'Todos'
    ? LUGARES_INTERES
    : LUGARES_INTERES.filter(l => l.category === currentLugarCategory);

  gridEl.innerHTML = filtered.map((l) => {
    const originalIndex = LUGARES_INTERES.indexOf(l);
    return `
      <article class="tib-card" onclick="openLugarModal(${originalIndex})">
        <div class="tib-card__media">
          <span class="tib-card__badge">${l.category}</span>
          <img src="${l.image}" alt="${l.name}" loading="lazy">
        </div>
        <div class="tib-card__breadcrumb">Lugares de Interés · ${l.location}</div>
        <h3 class="tib-card__title">${l.name}</h3>
        <p class="tib-card__desc">${l.shortDesc}</p>
      </article>
    `;
  }).join('');
}

function setLugarCategory(cat) {
  currentLugarCategory = cat;
  renderLugares();
}

function openLugarModal(idx) {
  const l = LUGARES_INTERES[idx];
  if (!l) return;

  const extraSection = l.extraImage ? `
    <div style="margin-top: 1.5rem; background: var(--color-warm-white); padding: 1.25rem; border-left: 4px solid var(--brand-blue);">
      <h4 style="margin-bottom: 0.75rem;">${l.extraImageTitle || 'Información adicional'}</h4>
      <img src="${l.extraImage}" alt="${l.extraImageTitle || l.name}" style="width: 100%; border: 1px solid var(--grey-200);">
    </div>
  ` : '';

  openModal(`
    <div class="tib-card__breadcrumb">Lugares de Interés | ${l.category}</div>
    <h2 style="font-size: 2.1rem; margin: 0.35rem 0 0.35rem;">${l.name}</h2>
    <p style="font-size: 0.9rem; color: var(--grey-500); margin-bottom: 1.25rem;"><i class="ph ph-map-pin"></i> ${l.location}</p>
    <img src="${l.image}" alt="${l.name}" style="width: 100%; max-height: 380px; object-fit: cover; margin-bottom: 1.5rem;">
    <div style="background: var(--color-warm-white); padding: 1.35rem; border-left: 4px solid var(--color-black);">
      <h4 style="margin-bottom: 0.5rem;">Sobre este lugar</h4>
      <p style="line-height: 1.65; font-size: 1.03rem;">${l.fullDesc}</p>
    </div>
    ${extraSection}
  `);
}

function renderRoutes() {
  const container = document.getElementById('routesContainer');
  if (!container) return;

  container.innerHTML = HIKING_ROUTES.map(route => `
    <div style="background: var(--color-white); border: 1px solid var(--grey-200); margin-bottom: 2.25rem; overflow: hidden;">
      <div class="tib-editorial-split" style="padding: clamp(1.5rem, 3vw, 2.5rem);">
        <div>
          <span class="tib-hero__kicker" style="background: var(--brand-green);">Senderismo · Dificultad ${route.difficulty}</span>
          <h3 style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 600; margin-bottom: 0.45rem;">${route.name}</h3>
          <p style="color: var(--grey-600); margin-bottom: 1.25rem;">${route.subtitle}</p>
          <div class="tib-stats-bar">
            <div class="tib-stat-box"><div class="tib-stat-box__label">Distancia</div><div class="tib-stat-box__value">${route.distance}</div></div>
            <div class="tib-stat-box"><div class="tib-stat-box__label">Tiempo</div><div class="tib-stat-box__value">${route.duration}</div></div>
            <div class="tib-stat-box"><div class="tib-stat-box__label">Altitud</div><div class="tib-stat-box__value">${route.altitude}</div></div>
            <div class="tib-stat-box"><div class="tib-stat-box__label">Desnivel</div><div class="tib-stat-box__value">${route.elevation}</div></div>
          </div>
          <h4 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.65rem;">Itinerario paso a paso:</h4>
          <ul style="padding-left: 1.2rem; line-height: 1.55; color: var(--grey-800); margin-bottom: 1rem;">
            ${route.waypoints.map(w => `<li style="margin-bottom: 0.45rem;">${w}</li>`).join('')}
          </ul>
          <p style="font-size: 0.9rem; background: var(--color-warm-white); padding: 0.75rem 1rem; border-left: 3px solid var(--brand-yellow);">
            <strong>Mejor época:</strong> ${route.season}
          </p>
        </div>
        <div>
          <img src="${route.image}" alt="${route.name}" style="width: 100%; border: 1px solid var(--grey-200);">
          <p style="font-size: 0.78rem; color: var(--grey-500); margin-top: 0.5rem;">Mapa SIGPAC / Detalle del recorrido.</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderDictionary() {
  const alphaContainer = document.getElementById('dictAlphaBar');
  const gridContainer = document.getElementById('dictGrid');
  if (!alphaContainer || !gridContainer) return;

  const letters = ['TODAS', ...Array.from(new Set(DICCIONARIO_RAMAJERO.map(d => d.letter)))];
  alphaContainer.innerHTML = letters.map(l => `
    <button class="tib-alpha-btn ${currentDictLetter === l ? 'is-active' : ''}" onclick="setDictLetter('${l}')">${l}</button>
  `).join('');

  const q = currentDictSearch.trim().toLowerCase();
  const filtered = DICCIONARIO_RAMAJERO.filter(d => {
    const matchLetter = currentDictLetter === 'TODAS' || d.letter === currentDictLetter;
    const matchQuery = !q || d.term.toLowerCase().includes(q) || d.def.toLowerCase().includes(q);
    return matchLetter && matchQuery;
  });

  gridContainer.innerHTML = filtered.map(d => `
    <div class="tib-dict-item">
      <div class="tib-dict-item__term">${d.term}</div>
      <div class="tib-dict-item__def">${d.def}</div>
    </div>
  `).join('');
}

function setDictLetter(letter) {
  currentDictLetter = letter;
  renderDictionary();
}

function renderSongs() {
  const container = document.getElementById('songsGrid');
  if (!container) return;

  container.innerHTML = CANCIONERO_SONGS.map((song, idx) => `
    <article class="tib-card" style="background: var(--color-warm-white); padding: 1.5rem; border: 1px solid var(--grey-200);" onclick="openSongModal(${idx})">
      <div class="tib-card__breadcrumb">${song.type}</div>
      <h3 class="tib-card__title" style="margin-top: 0.35rem;">${song.title}</h3>
      <p class="tib-card__desc" style="margin-bottom: 1rem;">${song.excerpt}</p>
      <span class="tib-btn tib-btn--dark" style="align-self: flex-start; padding: 0.5rem 0.95rem; font-size: 0.8rem;">
        Ver letra completa <i class="ph ph-music-notes"></i>
      </span>
    </article>
  `).join('');
}

function openSongModal(idx) {
  const song = CANCIONERO_SONGS[idx];
  if (!song) return;
  openModal(`
    <div class="tib-card__breadcrumb">${song.type}</div>
    <h2 style="font-size: 2rem; margin: 0.4rem 0 1rem;">${song.title}</h2>
    <pre style="white-space: pre-wrap; font-family: inherit; font-size: 1.05rem; line-height: 1.7; background: var(--color-warm-white); padding: 1.5rem; border-left: 4px solid var(--color-black);">${song.lyrics}</pre>
  `);
}

function renderRecipes() {
  const pillsEl = document.getElementById('recipePills');
  const gridEl = document.getElementById('recipesGrid');
  if (!pillsEl || !gridEl) return;

  const cats = ['Todas', 'Entrantes Fríos', 'Entrantes Calientes', 'Primeros Platos', 'Carnes', 'Postres'];
  pillsEl.innerHTML = cats.map(c => {
    const count = c === 'Todas' ? RECIPES.length : RECIPES.filter(r => r.category === c).length;
    return `<button class="tib-pill ${currentRecipeCategory === c ? 'is-active' : ''}" onclick="setRecipeCategory('${c}')">
      <span>${c}</span>
      <span class="tib-pill__count">${count}</span>
    </button>`;
  }).join('');

  const filtered = currentRecipeCategory === 'Todas'
    ? RECIPES
    : RECIPES.filter(r => r.category === currentRecipeCategory);

  gridEl.innerHTML = filtered.map((r) => {
    const originalIndex = RECIPES.indexOf(r);
    return `
      <article class="tib-card" onclick="openRecipeModal(${originalIndex})">
        <div class="tib-card__media">
          <span class="tib-card__badge">${r.category}</span>
          <img src="${r.image}" alt="${r.name}" loading="lazy">
        </div>
        <div class="tib-card__breadcrumb">Recetario Charro · Cabeza de Framontanos</div>
        <h3 class="tib-card__title">${r.name}</h3>
        <p class="tib-card__desc">${r.ingredients.slice(0, 115)}...</p>
      </article>
    `;
  }).join('');
}

function setRecipeCategory(cat) {
  currentRecipeCategory = cat;
  renderRecipes();
}

function openRecipeModal(idx) {
  const r = RECIPES[idx];
  if (!r) return;
  openModal(`
    <div class="tib-card__breadcrumb">Gastronomía Salmantina | ${r.category}</div>
    <h2 style="font-size: 2.1rem; margin: 0.35rem 0 1.25rem;">${r.name}</h2>
    <img src="${r.image}" alt="${r.name}" style="width: 100%; max-height: 340px; object-fit: cover; margin-bottom: 1.5rem;">
    <div style="background: var(--color-warm-white); padding: 1.25rem; margin-bottom: 1.25rem; border-left: 4px solid var(--brand-orange);">
      <h4 style="margin-bottom: 0.45rem;">Ingredientes</h4>
      <p style="line-height: 1.55;">${r.ingredients}</p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.45rem;">Elaboración paso a paso</h4>
      <p style="line-height: 1.65;">${r.steps}</p>
    </div>
  `);
}

function renderHerbs() {
  const grid = document.getElementById('herbsGrid');
  if (!grid) return;

  grid.innerHTML = HERBS_LIST.map(h => `
    <div class="tib-dict-item" style="border-left-color: var(--brand-green);">
      <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--brand-green); font-weight: 700;">${h.type}</div>
      <div class="tib-dict-item__term" style="margin-top: 0.2rem;">${h.name} <span style="font-weight: 400; font-style: italic; font-size: 0.9rem; color: var(--grey-500);">(${h.latin})</span></div>
      <div class="tib-dict-item__def">${h.desc}</div>
    </div>
  `).join('');
}

function openModal(htmlContent) {
  const modal = document.getElementById('tibModal');
  const body = document.getElementById('tibModalBody');
  if (!modal || !body) return;
  body.innerHTML = htmlContent;
  modal.classList.add('is-open');
}

function closeModal() {
  document.getElementById('tibModal')?.classList.remove('is-open');
}

/* Inicialización al cargar la página */
document.addEventListener('DOMContentLoaded', () => {
  renderExplorer();
  renderLugares();
  renderRoutes();
  renderDictionary();
  renderSongs();
  renderRecipes();
  renderHerbs();

  // Animación sutil del Hero estilo This is Barcelona
  const hero = document.getElementById('tibHero');
  if (hero) {
    setTimeout(() => hero.classList.add('is-animated'), 150);
  }

  // Buscador de portada
  const explorerSearch = document.getElementById('explorerSearchInput');
  if (explorerSearch) {
    explorerSearch.addEventListener('input', (e) => {
      currentExplorerSearch = e.target.value;
      renderExplorer();
    });
  }

  // Buscador del Diccionario Ramajero
  const dictSearch = document.getElementById('dictSearchInput');
  if (dictSearch) {
    dictSearch.addEventListener('input', (e) => {
      currentDictSearch = e.target.value;
      renderDictionary();
    });
  }

  // Botón de pausa/animación del hero
  const heroToggleBtn = document.getElementById('heroMotionToggle');
  if (heroToggleBtn && hero) {
    heroToggleBtn.addEventListener('click', () => {
      const paused = hero.classList.toggle('is-paused');
      hero.classList.toggle('is-animated', !paused);
      heroToggleBtn.innerHTML = paused ? '<i class="ph ph-play"></i>' : '<i class="ph ph-pause"></i>';
    });
  }

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.getElementById('tibDrawer')?.classList.remove('is-open');
    }
  });
});
