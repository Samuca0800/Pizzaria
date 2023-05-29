const cardapio = [
    {
       "id": 1,
       "nome":"A Moda da Casa",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, ovos, cebola fatiada, cobertura",
       "preco": 32.93
    },
    {
       "id": 2,
       "nome":"Alho e oleo",
       "descricao":"Molho de tomate fresco, alho crocante coberto com parmesao, oregano e azeitonas pretas",
       "preco": 32.77
    },
    {
       "id": 3,
       "nome":"Aliche",
       "descricao":"Molho especial de tomate fresco, files de aliche importado, oregano e azeitonas pretas",
       "preco": 32.61
    },
    {
       "id": 4,
       "nome":"Ao Funghi",
       "descricao":"Molho de tomate fresco, mussarela especial, champignon fatiado, manjericao fresco, oregano e azeitona",
       "preco": 32.45
    },
    {
       "id": 5,
       "nome":"Atum",
       "descricao":"Molho de tomate fresco, atum especial solido, cebola fatiada, oregano e azeitonas pretas",
       "preco": 32.29
    },
    {
       "id": 6,
       "nome":"Baiana",
       "descricao":"Molho de tomate fresco, calabresa moida levemente apimentada, ovos cozidos picados, cebola fatiada,",
       "preco": 32.13
    },
    {
       "id": 7,
       "nome":"Bauru",
       "descricao":"Molho de tomate fresco, presunto cozido picado, mussarela especial, rodelas de tomate, oregano e azeitona",
       "preco": 31.97
    },
    {
       "id": 8,
       "nome":"Caipira",
       "descricao":"Molho de tomate fresco, frango desfiado levemente temperado, cobertura de catupiry, milho verde, oregano",
       "preco": 31.81
    },
    {
       "id": 9,
       "nome":"Calabresa",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, oregano e azeitonas pretas",
       "preco": 31.65
    },
    {
       "id": 10,
       "nome":"Camponesa",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, milho verde, oregano e azeitonas pretas",
       "preco": 31.49
    },
    {
       "id": 11,
       "nome":"Canadense",
       "descricao":"Molho de tomate fresco, lombo canadense fatiado, cobertura de catupiry, rodelas de cebola, oregano e",
       "preco": 31.33
    },
    {
       "id": 12,
       "nome":"Capri",
       "descricao":"Molho de tomate fresco, fatias de lombo canadense, mussarela especial, rodelas de tomate, manjericao",
       "preco": 31.17
    },
    {
       "id": 13,
       "nome":"Catupiry",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, oregano e azeitonas pretas",
       "preco": 31.01
    },
    {
       "id": 14,
       "nome":"Cubana",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com mussarela especial",
       "preco": 30.85
    },
    {
       "id": 15,
       "nome":"Escarola",
       "descricao":"Molho de tomate fresco, escarola refogada alho e oleo, files de aliche importada, coberta com mussar",
       "preco": 35.49
    },
    {
       "id": 16,
       "nome":"Firense",
       "descricao":"Molho de tomate fresco, atum solido especial, milho verde, coberto com catupiry, oregano e azeitonas",
       "preco": 35.33
    },
    {
       "id": 17,
       "nome":"Frango",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com catupiry, oregano",
       "preco": 35.17
    },
    {
       "id": 18,
       "nome":"Gramute",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, champignon fatiado, oregano e az",
       "preco": 35.01
    },
    {
       "id": 19,
       "nome":"Gratinada",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, camada de provolone , salpicada de parmesao, oregano",
       "preco": 34.85
    },
    {
       "id": 20,
       "nome":"Grega",
       "descricao":"Molho de tomate fresco, palmito macio em rodelas, ervilhas, cobertura de mussarela especial, oregano",
       "preco": 34.69
    },
    {
       "id": 21,
       "nome":"Imperial",
       "descricao":"Molho de tomate fresco, mussarela especial, atum solido, champignon fatiado, oregano e azeitonas pre",
       "preco": 34.53
    },
    {
       "id": 22,
       "nome":"Margherita",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, salpicada de parmesao, manjericao fre",
       "preco": 34.37
    },
    {
       "id": 23,
       "nome":"Matriciana",
       "descricao":"Molho de tomate fresco, mussarela especial, champignon fatiado, cobertura de parmesao, oregano e azeitona",
       "preco": 34.21
    },
    {
       "id": 24,
       "nome":"Mexicana",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, milho verde, oregano e azeitonas",
       "preco": 34.05
    },
    {
       "id": 25,
       "nome":"Moda do Clientes",
       "descricao":"Molho de tomate fresco, livre escolha dos ingredientes ( max.4 ), oregano e azeitonas pretas",
       "preco": 33.89
    },
    {
       "id": 26,
       "nome":"Mussarela",
       "descricao":"Molho de tomate fresco, cobertura de mussarela especial, oregano e azeitonas pretas",
       "preco": 33.73
    },
    {
       "id": 27,
       "nome":"Napolitalho",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmesao, alho crocante, oregano",
       "preco": 33.57
    },
    {
       "id": 28,
       "nome":"Napolitana",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmesao, oregano e azeitonas",
       "preco": 33.41
    },
    {
       "id": 29,
       "nome":"Oba Oba",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, mussarela especial, bacon fatia",
       "preco": 33.25
    },
    {
       "id": 30,
       "nome":"Palmito",
       "descricao":"Molho de tomate fresco, palmito macio em rodelas, coberto com catupiry, oregano e azeitonas pretas",
       "preco": 33.09
    },
    {
       "id": 31,
       "nome":"Portuguesa",
       "descricao":"Molho de tomate fresco, presunto cozido, ovos picados, rodelas de cebola, cobertura de mussarela especial",
       "preco": 30.69
    },
    {
       "id": 32,
       "nome":"Provolone",
       "descricao":"Molho de tomate fresco, coberto com queijo provolone, champignon fatiado, rodelas de tomate, oregano",
       "preco": 30.53
    },
    {
       "id": 33,
       "nome":"Quatro Queijos",
       "descricao":"Molho de tomate fresco, mussarela especial, camada de catupiry, provolone, salpicado com gorgonzola,",
       "preco": 30.37
    },
    {
       "id": 34,
       "nome":"Romana",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, files de aliche importado e oregano",
       "preco": 30.21
    },
    {
       "id": 35,
       "nome":"Rustica",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, alho crocante, rodelas de cebola, oregano e azeitona",
       "preco": 30.05
    },
    {
       "id": 36,
       "nome":"Se Liga",
       "descricao":"molho de tomate fresco, fatias de lombo canadense, cobertura de provolone, oregano e azeitonas preta",
       "preco": 29.89
    },
    {
       "id": 37,
       "nome":"Siciliana",
       "descricao":"Molho de tomate fresco, mussarela especial, fatias de bacon, champignon fatiado, oregano e azeitonas",
       "preco": 29.73
    },
    {
       "id": 38,
       "nome":"Torino",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, palmito macio em rodelas, oregano e azeitonas pretas",
       "preco": 29.57
    },
    {
       "id": 39,
       "nome":"Toscana",
       "descricao":"Molho de tomate fresco, calabresa moida especial, cobertura de mussarela, oregano e azeitonas pretas",
       "preco": 29.41
    },
    {
       "id": 40,
       "nome":"Veneza",
       "descricao":"Molho de tomate fresco, presunto cozido picado, azeitona verde fatiada, cobertura de mussarela especial",
       "preco": 29.25
    },
    {
       "id": 41,
       "nome":"Vienense",
       "descricao":"Molho de tomate fresco, mussarela especial, calabresa especial fatiada, rodelas de cebola e oregano",
       "preco": 29.09
    }
];
