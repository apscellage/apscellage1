const database = [
                                                            //Prophétie
    // --- Vrai ou Faux (Prophétie)  36 questions
    // --- VRAI (22 questions) ---
    { cat: "Prophétie", type: "vrai-faux", q: "Apocalypse est un livre prophétique avec 22 chapitres et 404 versets.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Jean était sur l'île de Patmos.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Processus de délivrance de l’Apocalypse : Dieu -> Jésus -> Ange -> Jean -> Serviteurs.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Devant le trône de Deus il y a sept esprits.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, C’est grâce à Jésus Christ que nous pouvons devenir sacrificateurs de Dieu.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Jésus vient sur les nuées.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Dieu est l’Alpha et l’oméga.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Selon Apo 1:8, Dieu vient.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1:13-16 montre l’apparence sainte et spirituelle de Jésus.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Selon Ap 1:20, les sept étoiles sont les anges des sept Églises et les sept chandeliers sont les sept églises.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 2, L'église d'Éphèse a abandonné son premier amour.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 2, La femme Jézabel se dit prophétesse à Thyatire.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 2, L'Église de Sardes passe pour être vivante mais est morte.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Il y a 24 vieillards autour du trône.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Devant le trône de Dieu il y a une mer de verre.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 5, Le premier être vivant ressemble à un lion.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Le livre scellé de sept sceaux est écrit en dedans et en dehors.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 6, Le cheval noir porte une balance.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 6, Le quatrième cavalier se nomme la Mort.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 6, Les âmes sous l'autel (martyrs) demandent justice par leur sang.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 6, Le soleil devient noir comme un sac de crin à l’ouverture du 6e sceau.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 7, 144 000 personnes sont marquées du sceau de Dieu.", r: "Vrai", points: 4, malus: 8 },
    // --- FAUX (14 questions) ---
    { cat: "Prophétie", type: "vrai-faux", q: "Processus de délivrance de l’Apocalypse : Dieu -> Jean -> Ange -> Jésus -> Serviteurs.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Jean atteste la Parole de Jésus et le témoignage de Dieu.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Jésus vient sur une navette spatial.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 1, Seulement les croyants pourront voir Jésus.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Selon Ap 1:10-11, Jean a entendu une voix forte comme le bruit de grandes eaux.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Il y a 10 chandeliers d'or.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Selon Ap 2:10, Smyrne recevra la manne cachée si elle reste fidèle jusqu’à la mort.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 2-3, Le trône de Satan est à Philadelphie.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 3, Laodicée est bouillante.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 5, Les quatre êtres vivants ont 24 ailes chacun.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Apo 5, L'Agneau qui a été immolé a 10 cornes.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Selon Apo 6, le premier cavalier monte un cheval rouge.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Le 7e sceau provoque un silence d'une heure.", r: "Faux", points: 4, malus: 8 },
    { cat: "Prophétie", type: "vrai-faux", q: "Dans Ap 6, Jésus ouvre tous les sceaux.", r: "Faux", points: 4, malus: 8 },


    // --- Quiz (Prophétie) ---24 Questions
    // --- CHAPITRE 1 ---
    { cat: "Prophétie", type: "quiz", q: "Apo 1, Qui a écrit l’Apocalypse ?", options: ["Pierre", "Paul", "Jean", "Jésus"], r: "Jean", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 1, Où Jean a-t-il reçu la vision ?", options: ["Patmos", "Angola", "Jerusalém", "Éphèse"], r: "Patmos", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 1, Combien d’églises il y a-t-il ?", options: ["1", "7", "10", "12"], r: "7", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 1, Jésus nous a délivrés de nos péchés par son :", options: ["Sang", "Amour", "Charisme", "Sa prière"], r: "Sang", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Qui sont ceux qui sont heureux d’après Apo 1:3 ?", options: ["Celui qui lit", "Celui qui lit et ceux qui entendent", "Celui qui lit et ceux qui entendent et gardent les choses qui y sont écrites", "Personne"], r: "Celui qui lit et ceux qui entendent et gardent les choses qui y sont écrites", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Heureux celui qui lit et ceux qui entendent les paroles de la prophétie... Car le temps est proche.", options: ["Apo 1:3", "Apo 1:4", "Apo 2:3", "Am 1:3"], r: "Apo 1:3", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Quel verset définit le mystère des sept étoiles et des sept chandeliers d'or ?", options: ["Apo 1:21", "Apo 11:20", "Apo 2:20", "Apo 1:20"], r: "Apo 1:20", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 1:13-16 décrit l'apparence de Jésus. Que symbolisent les sept étoiles dans sa main ?", options: ["Les 7 églises", "Les anges des 7 églises", "Les 7 sceaux", "Les 7 trompettes"], r: "Les anges des 7 églises", points: 6, malus: 6 },
    // --- CHAPITRES 2 & 3 (Les 7 Églises) ---
    { cat: "Prophétie", type: "quiz", q: "Apo 2, Quel verset exhorte une des Église à se repentir sous peine d'ôter son chandelier ?", options: ["Apo 3:5", "Apo 2:5", "Apo 2:4-5", "Nulle Part"], r: "Apo 2:5", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 2-3, Quelle Église est 'tiède' ?", options: ["Sardes", "Laodicée", "Philadelphie", "Smyrne"], r: "Laodicée", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Dans Apo 3, à combien d’églises Jean écrit-il dans ce chapitre précis ?", options: ["5", "2", "3", "4"], r: "3", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 2-3, quel verset dit : 'Sois vigilant, et affermis le reste qui est près de mourir' ?", options: ["Apo 3:9", "Apo 2:2", "Am 3:2", "Apo 3:2"], r: "Apo 3:2", points: 6, malus: 6 },

    // --- CHAPITRES 4 & 5 (Le Trône et l'Agneau) ---
    { cat: "Prophétie", type: "quiz", q: "Apo 5, Nombre de vieillards autour du trône ?", options: ["7", "12", "24", "144"], r: "24", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Quel verset mentionne le livre scellé de sept sceaux dans la main droite de Dieu ?", options: ["Apo 6:1", "Apo 7:1", "Apo 4:1", "Apo 5:1"], r: "Apo 5:1", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "L'Agneau a vaincu et peut ouvrir le livre et ses sept sceaux ?", options: ["Apo 6:1", "Apo 5:5", "Apo 5:5-6", "Apo 5:6"], r: "Apo 5:5", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 6, Qui est le seul digne d'ouvrir les sceaux ?", options: ["Michel", "Jean", "L'Agneau", "Gabriel"], r: "L'Agneau", points: 6, malus: 6 },

    // --- CHAPITRE 6 (Les Sceaux et Cavaliers) ---
    { cat: "Prophétie", type: "quiz", q: "Combien de sceaux sont ouverts spécifiquement dans le chapitre Apo 6 ?", options: ["12", "6", "7", "100"], r: "6", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 6:2, Que tient le cavalier du cheval blanc ?", options: ["Épée", "Balance", "Arc", "Faucille"], r: "Arc", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Quel verset décrit le cavalier blanc partant en vainqueur et pour vaincre ?", options: ["Apo 6:2", "Apo 6:4", "Apo 6:20", "Apo 6:1"], r: "Apo 6:2", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 6, Quelle est la couleur du cheval représentant la famine ?", options: ["Blanc", "Rouge", "Noir", "Pâle"], r: "Noir", points: 6, malus: 6 },

    // --- CHAPITRE 7 (Les 144 000 et le 7e Sceau) ---
    { cat: "Prophétie", type: "quiz", q: "Nombre de tribus d'Israël scellées dans l'Apocalypse ?", options: ["7", "10", "12", "24"], r: "12", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Quel verset cite le nombre des 144 000 marqués du sceau ?", options: ["Apo 7:2", "Apo 6:4", "Apo 7:4", "Apo 7:5"], r: "Apo 7:4", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Apo 7-8, Durée du silence dans le ciel à l’ouverture du 7e sceau ?", options: ["1h", "3 jours", "1/2 h", "7 min"], r: "1/2 h", points: 6, malus: 6 },
    { cat: "Prophétie", type: "quiz", q: "Quel verset interdit d'ajouter ou de retrancher quoi que ce soit à ce livre ?", options: ["Apo 22:18-19", "Apo 1:20", "Apo 3:12", "Apo 1:3"], r: "Apo 22:18-19", points: 6, malus: 6 },


    // --- Réponse Complète (Prophétie) ---18 questions
    { cat: "Prophétie", type: "complet", q: "Où Jean a-t-il reçu la vision ?", r: "Patmos", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 1:1-8 ?", r: "Révélation de Jésus Christ, que Dieu lui a donnée pour montrer à ses serviteurs les choses qui doivent arriver bientôt, et qu'il a fait connaître, par l'envoi de son ange, à son serviteur Jean, lequel a attesté la parole de Dieu et le témoignage de Jésus Christ, tout ce qu'il a vu. Heureux celui qui lit et ceux qui entendent les paroles de la prophétie, et qui gardent les choses qui y sont écrites! Car le temps est proche. Jean aux sept Églises qui sont en Asie: que la grâce et la paix vous soient données de la part de celui qui est, qui était, et qui vient, et de la part des sept esprits qui sont devant son trône, et de la part de Jésus Christ, le témoin fidèle, le premier-né des morts, et le prince des rois de la terre! A celui qui nous aime, qui nous a délivrés de nos péchés par son sang, et qui a fait de nous un royaume, des sacrificateurs pour Dieu son Père, à lui soient la gloire et la puissance, aux siècles des siècles! Amen! Voici, il vient avec les nuées. Et tout oeil le verra, même ceux qui l'ont percé; et toutes les tribus de la terre se lamenteront à cause de lui. Oui. Amen! Je suis l'alpha et l'oméga, dit le Seigneur Dieu, celui qui est, qui était, et qui vient, le Tout Puissant.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 1:17-19 ?", r: "Quand je le vis, je tombai à ses pieds comme mort. Il posa sur moi sa main droite en disant: Ne crains point! Je suis le premier et le dernier, et le vivant. J'étais mort; et voici, je suis vivant aux siècles des siècles. Je tiens les clefs de la mort et du séjour des morts. Écris donc les choses que tu as vues, et celles qui sont, et celles qui doivent arriver après elles,", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 1:20 ?", r: "le mystère des sept étoiles que tu as vues dans ma main droite, et des sept chandeliers d'or. Les sept étoiles sont les anges des sept Églises, et les sept chandeliers sont les sept Églises.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 2:7 ?", r: "Que celui qui a des oreilles entende ce que l'Esprit dit aux Églises: A celui qui vaincra je donnerai à manger de l'arbre de vie, qui est dans le paradis de Dieu.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 2:10-11 ?", r: "Ne crains pas ce que tu vas souffrir. Voici, le diable jettera quelques-uns de vous en prison, afin que vous soyez éprouvés, et vous aurez une tribulation de dix jours. Sois fidèle jusqu'à la mort, et je te donnerai la couronne de vie. Que celui qui a des oreilles entende ce que l'Esprit dit aux Églises: Celui qui vaincra n'aura pas à souffrir la seconde mort.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 2:17 ?", r: "Que celui qui a des oreilles entende ce que l'Esprit dit aux Églises: A celui qui vaincra je donnerai de la manne cachée, et je lui donnerai un caillou blanc; et sur ce caillou est écrit un nom nouveau, que personne ne connaît, si ce n'est celui qui le reçoit.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 2:26-28 ?", r: "A celui qui vaincra, et qui gardera jusqu'à la fin mes oeuvres, je donnerai autorité sur les nations. Il les paîtra avec une verge de fer, comme on brise les vases d'argile, ainsi que j'en ai reçu le pouvoir de mon Père. Et je lui donnerai l'étoile du matin.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apo 2-3, Quelle Église est tiède ?", r: "Laodicée", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 3:5 ?", r: "Celui qui vaincra sera revêtu ainsi de vêtements blancs; je n'effacerai point son nom du livre de vie, et je confesserai son nom devant mon Père et devant ses anges.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 3:12 ?", r: "Celui qui vaincra, je ferai de lui une colonne dans le temple de mon Dieu, et il n'en sortira plus; j'écrirai sur lui le nom de mon Dieu, et le nom de la ville de mon Dieu, de la nouvelle Jérusalem qui descend du ciel d'auprès de mon Dieu, et mon nom nouveau.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 3:21 ?", r: "Celui qui vaincra, je le ferai asseoir avec moi sur mon trône, comme moi j'ai vaincu et me suis assis avec mon Père sur son trône.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Couleur du cheval qui porte une épée ?", r: "Roux", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 6:12-14 ?", r: "Je regardai, quand il ouvrit le sixième sceau; et il y eut un grand tremblement de terre, le soleil devint noir comme un sac de crin, la lune entière devint comme du sang, et les étoiles du ciel tombèrent sur la terre, comme lorsqu'un figuier secoué par un vent violent laisse tomber ses figues vertes. Le ciel se retira comme un livre qu'on roule; et toutes les montagnes et toutes les îles furent remuées de leurs places.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 7:4 ?", r: "Et j'entendis le nombre de ceux qui avaient été marqués du sceau, cent quarante-quatre mille, de toutes les tribus des fils d'Israël:", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 18:4 ?", r: "Et j'entendis du ciel une autre voix qui disait: Sortez du milieu d'elle, mon peuple, afin que vous ne participiez pas à ses péchés, et que vous n'ayez pas de part à ses fléaux.", points: 8, malus: 4 },
    { cat: "Prophétie", type: "complet", q: "Apocalypse 22:18-19 ?", r: "Je le déclare à quiconque entend les paroles de la prophétie de ce livre: Si quelqu'un y ajoute quelque chose, Dieu le frappera des fléaux décrits dans ce livre; et si quelqu'un retranche quelque chose des paroles du livre de cette prophétie, Dieu retranchera sa part de l'arbre de vie et de la ville sainte, décrits dans ce livre.", points: 8, malus: 4 },
    
    
    /*//Accomplissement 
    // --- Vrai ou Faux (Accomplissement) ---
    { cat: "Accomplissement", type: "vrai-faux", q: "Le Nouveau Jean est celui qui voit et entend l'accomplissement.", r: "Vrai", points: 4, malus: 8 },
    { cat: "Accomplissement", type: "vrai-faux", q: "Les 144 000 sont scellés après le jugement des sept sceaux.", r: "Vrai", points: 4, malus: 8 },

    // --- Quiz (Accomplissement) ---
    { cat: "Accomplissement", type: "quiz", q: "Où les 144 000 sont-ils rassemblés ?", options: ["Mont Sion", "Mer de verre", "Désert"], r: "Mont Sion", points: 6, malus: 6 },
    { cat: "Accomplissement", type: "quiz", q: "Qui est l'époux lors des noces de l'Agneau ?", options: ["L'Agneau", "Le Pasteur", "Les Anges"], r: "L'Agneau", points: 6, malus: 6 },

    // --- Réponse Complète (Accomplissement) ---
    { cat: "Accomplissement", type: "complet", q: "Comment appelle-t-on la ville qui descend du ciel ?", r: "Nouvelle Jérusalem", points: 8, malus: 4 },
    { cat: "Accomplissement", type: "complet", q: "Quel est le dernier ennemi détruit dans l'étang de feu ?", r: "La mort", points: 8, malus: 4 } */
];
