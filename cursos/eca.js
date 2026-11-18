// Engenharia de Controle e Automação — dados revisados manualmente
// PPC 2022 (COMGRAD/CCA, seção 6.6.3): estágio obrigatório habilita após 200 créditos do currículo; TCC sem mínimo de créditos.
// A 5ª etapa citada no PPC é requisito do estágio NÃO obrigatório (liberacaoNaoObrigatorio); quase todos fazem
// o não obrigatório e pedem depois para ele valer como obrigatório.
registrarCurso({
 "id": "eca",
 "sigla": "ECA",
 "nome": "Engenharia de Controle e Automação",
 "nomeCurto": "Eng. de Controle e Automação",
 "prototipo": false,
 "codCurso": 714,
 "saveId": "ECA-UFRGS",
 "storageKey": "eca_simulador_status_v6",
 "fonte": "Dados revisados manualmente pelo autor; créditos mínimos do estágio e TCC conforme o PPC 2022 da COMGRAD/CCA.",
 "metas": {
  "obr": 222,
  "ele": 8,
  "compl": 6,
  "tiposCompl": 2,
  "extensaoHoras": 420
 },
 "etapas": 10,
 "fdcs": [
  {
   "id": "cadcam",
   "nome": "Sistemas Discretos CAD/CAM"
  },
  {
   "id": "mecanica",
   "nome": "Controle Avançado de Sistemas Mecânicos"
  },
  {
   "id": "potencia",
   "nome": "Eletrônica de Potência e Acionamento"
  }
 ],
 "estagio": {
  "id": "ESTAGIO",
  "horas": 200,
  "liberacao": {
   "creditos": 200
  },
  "liberacaoNaoObrigatorio": {
   "etapa": 5
  }
 },
 "extensaoAtividades": {
  "ids": [
   "CCA99008",
   "CCA99009",
   "CCA99010"
  ],
  "horas": 100,
  "rotulo": "Projeto Integrado"
 },
 "conquistas": {
  "campusVale": [
   "MAT01355",
   "INF01202",
   "MAT01353",
   "MAT01354",
   "MAT01169",
   "MAT01167",
   "FIS01182",
   "FIS01181",
   "FIS01183",
   "MAT01168",
   "MAT02219",
   "INF01057",
   "QUI01009"
  ],
  "sobrevivente": [
   "ENG10044",
   "ENG10023",
   "ENG10048"
  ]
 },
 "disciplinas": [
  {"id":"INF01202","nome":"Algoritmos e Programação","creditos":6,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01353","nome":"Cálculo e Geometria Analítica I","creditos":6,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"FIS01181","nome":"Física I-C","creditos":6,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ARQ03317","nome":"Geometria Descritiva II-A","creditos":2,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"CCA99001","nome":"Introdução à Eng. de Controle e Automação","creditos":2,"semIdeal":1,"oferta":"impar","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"QUI01009","nome":"Química Fundamental A","creditos":4,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01355","nome":"Álgebra Linear I-A","creditos":4,"semIdeal":2,"oferta":"ambos","prereqs":["MAT01353"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01354","nome":"Cálculo e Geometria Analítica II-A","creditos":6,"semIdeal":2,"oferta":"ambos","prereqs":["MAT01353"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ARQ03319","nome":"Desenho Técnico II-A","creditos":4,"semIdeal":2,"oferta":"ambos","prereqs":["ARQ03317"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"FIS01182","nome":"Física Geral - Eletromagnetismo","creditos":6,"semIdeal":2,"oferta":"ambos","prereqs":["FIS01181"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03041","nome":"Mecânica Aplicada I","creditos":4,"semIdeal":2,"oferta":"ambos","prereqs":["CCA99001","FIS01181","MAT01353"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"INF01057","nome":"Programação Orientada a Objeto","creditos":4,"semIdeal":2,"oferta":"par","prereqs":["INF01202"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10001","nome":"Circuitos Elétricos I-C","creditos":4,"semIdeal":3,"oferta":"ambos","prereqs":["FIS01182","MAT01354"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01167","nome":"Equações Diferenciais II","creditos":6,"semIdeal":3,"oferta":"ambos","prereqs":["MAT01354","MAT01355"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"FIS01183","nome":"Física III-C","creditos":6,"semIdeal":3,"oferta":"ambos","prereqs":["FIS01182"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03043","nome":"Materiais para Engenharia A","creditos":4,"semIdeal":3,"oferta":"impar","prereqs":["QUI01009"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03042","nome":"Mecânica Aplicada II","creditos":4,"semIdeal":3,"oferta":"ambos","prereqs":["ENG03041"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT02219","nome":"Probabilidade e Estatística","creditos":4,"semIdeal":3,"oferta":"ambos","prereqs":["MAT01353"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10042","nome":"Sistemas Digitais-A","creditos":4,"semIdeal":3,"oferta":"impar","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01169","nome":"Cálculo Numérico","creditos":6,"semIdeal":4,"oferta":"ambos","prereqs":["INF01202","MAT01167"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10002","nome":"Circuitos Elétricos II-C","creditos":4,"semIdeal":4,"oferta":"ambos","prereqs":["ENG10001","MAT01167"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10043","nome":"Laboratório de Sistemas Digitais","creditos":2,"semIdeal":4,"oferta":"par","prereqs":["ENG10042"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"MAT01168","nome":"Matemática Aplicada II","creditos":6,"semIdeal":4,"oferta":"ambos","prereqs":["MAT01167"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03092","nome":"Mecânica dos Sólidos I-A","creditos":4,"semIdeal":4,"oferta":"ambos","prereqs":["ENG03041","ENG03043"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03316","nome":"Mecanismos I","creditos":4,"semIdeal":4,"oferta":"ambos","prereqs":["ENG03042"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03044","nome":"Modelagem de Sistemas Mecânicos","creditos":4,"semIdeal":4,"oferta":"ambos","prereqs":["ENG10001","FIS01183","MAT01167"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10044","nome":"Eletrônica Fundamental I-B","creditos":4,"semIdeal":5,"oferta":"impar","prereqs":["ENG10002"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10003","nome":"Laboratório de Circuitos Elétricos","creditos":2,"semIdeal":5,"oferta":"ambos","prereqs":["ENG10002"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03004","nome":"Mecânica dos Sólidos II","creditos":4,"semIdeal":5,"oferta":"ambos","prereqs":["ENG03092","MAT01169"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10017","nome":"Sistemas e Sinais","creditos":6,"semIdeal":5,"oferta":"ambos","prereqs":["MAT01168"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG07086","nome":"Termodinâmica e Transf. de Calor","creditos":5,"semIdeal":5,"oferta":"impar","prereqs":["FIS01183"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10026","nome":"Robótica / Robótica A","creditos":4,"semIdeal":5,"oferta":"ambos","prereqs":["ENG03316"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10047","nome":"Fundamentos de Máquinas Elétricas","creditos":4,"semIdeal":6,"oferta":"par","prereqs":["ENG10002"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10022","nome":"Instrum. Fundamental p/ Controle e Automação","creditos":4,"semIdeal":6,"oferta":"par","prereqs":["ENG10044","MAT02219"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10045","nome":"Laboratório de Eletrônica","creditos":2,"semIdeal":6,"oferta":"ambos","prereqs":["ENG10003","ENG10044"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG07069","nome":"Princípios da Mecânica de Fluidos","creditos":2,"semIdeal":6,"oferta":"ambos","prereqs":["ENG07086"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10023","nome":"Sistemas de Automação","creditos":4,"semIdeal":6,"oferta":"par","prereqs":["ENG10043","INF01057"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10004","nome":"Sistemas de Controle I-B","creditos":4,"semIdeal":6,"oferta":"par","prereqs":["ENG03044","ENG10017"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10049","nome":"Acionamento de Máq. Elétricas-A","creditos":4,"semIdeal":7,"oferta":"impar","prereqs":["ENG10045","ENG10047"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10005","nome":"Laboratório de Controle","creditos":2,"semIdeal":7,"oferta":"impar","prereqs":["ENG10004"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG04475","nome":"Microprocessadores I","creditos":5,"semIdeal":7,"oferta":"ambos","prereqs":["ENG10043","ENG10044"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03021","nome":"Processos Discretos de Produção","creditos":4,"semIdeal":7,"oferta":"ambos","prereqs":["ENG03043"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10048","nome":"Protocolos de Comunicação-A","creditos":4,"semIdeal":7,"oferta":"impar","prereqs":["ENG10023"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10018","nome":"Sistemas de Controle II","creditos":4,"semIdeal":7,"oferta":"impar","prereqs":["ENG10004"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03027","nome":"Sistemas Hidráulicos e Pneumáticos","creditos":4,"semIdeal":7,"oferta":"ambos","prereqs":["ENG07069"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03045","nome":"Elementos de Máquinas","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG03004","ENG03021"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG07042","nome":"Modelagem e Controle de Proc. Industriais","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG07069","ENG10018"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10019","nome":"Sistemas de Controle Digitais","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG04475","ENG10004"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03387","nome":"Sistemas de Fabricação","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG03021"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10027","nome":"Eletrônica Fundamental II-B","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG10002","ENG10044"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG07087","nome":"Controle Avançado de Processos","creditos":3,"semIdeal":9,"oferta":"impar","prereqs":["ENG07042"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ESTAGIO","nome":"Estágio Supervisionado","creditos":0,"semIdeal":9,"oferta":"ambos","prereqs":["ENG03027","ENG10018"],"reqCreditos":200,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"TCC1","nome":"Trab. de Conclusão CCA - I","creditos":0,"semIdeal":9,"oferta":"ambos","prereqs":["ENG03027","ENG10005","ENG10048","ENG10049"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG10050","nome":"Laboratório de Máquinas e Acionamentos Elétricos","creditos":2,"semIdeal":9,"oferta":"impar","prereqs":["ENG10049"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG10046","nome":"Princípios de Eletrônica de Potência","creditos":2,"semIdeal":9,"oferta":"impar","prereqs":["ENG10044"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG03010","nome":"Ciência, Tecnologia e Ambiente","creditos":3,"semIdeal":10,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"ENG03048","nome":"Gerência e Adm. de Projetos","creditos":4,"semIdeal":10,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"TCC2","nome":"Trab. de Conclusão CCA - II","creditos":0,"semIdeal":10,"oferta":"ambos","prereqs":["ENG03045","ENG07042","ENG10019","TCC1"],"reqCreditos":0,"fdc":{"potencia":"obrigatoria","cadcam":"obrigatoria","mecanica":"obrigatoria"}},
  {"id":"EDU03071","nome":"Libras","creditos":2,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99005","nome":"Tópicos Especiais em ECA I","creditos":2,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99006","nome":"Tópicos Especiais em ECA II","creditos":4,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99007","nome":"Tópicos Especiais em ECA III","creditos":6,"semIdeal":1,"oferta":"ambos","prereqs":[],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"INF01126","nome":"Estruturas de Dados I","creditos":4,"semIdeal":2,"oferta":"ambos","prereqs":["INF01202"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"INF01017","nome":"Aprendizado de Máquina","creditos":4,"semIdeal":3,"oferta":"ambos","prereqs":["INF01057"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"INF01037","nome":"Computação Evolutiva","creditos":4,"semIdeal":3,"oferta":"ambos","prereqs":["INF01057"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ADM01135","nome":"Engenharia Econômica e Avaliações","creditos":2,"semIdeal":4,"oferta":"ambos","prereqs":["MAT02219"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99008","nome":"Projeto Integrado I","creditos":9,"semIdeal":6,"oferta":"ambos","prereqs":["ENG03044","ENG03316","ENG07086","ENG10003","ENG10042"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG10052","nome":"Laboratório de Robótica","creditos":2,"semIdeal":6,"oferta":"par","prereqs":["ENG10026"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG10054","nome":"Robótica Móvel","creditos":4,"semIdeal":6,"oferta":"ambos","prereqs":["ENG10017","INF01057","MAT02219"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99011","nome":"Tópicos em Proc. Digital de Sinais I","creditos":4,"semIdeal":6,"oferta":"ambos","prereqs":["ENG10017"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG10021","nome":"Sistemas a Eventos Discretos","creditos":4,"semIdeal":9,"oferta":"impar","prereqs":["ENG10023"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"obrigatoria","mecanica":"eletiva"}},
  {"id":"ENG10051","nome":"Dinâmica e Controle de Robôs","creditos":4,"semIdeal":7,"oferta":"impar","prereqs":["ENG10004","ENG10026"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99009","nome":"Projeto Integrado II","creditos":9,"semIdeal":8,"oferta":"ambos","prereqs":["CCA99008","ENG03021","ENG04475","ENG07069","ENG10004","ENG10022","ENG10023"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG07043","nome":"Instrumentação de Processos Industriais","creditos":2,"semIdeal":8,"oferta":"ambos","prereqs":["ENG07069","ENG10018"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG09023","nome":"Planejamento Estratégico da Produção","creditos":2,"semIdeal":8,"oferta":"ambos","prereqs":["ENG03021"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG03046","nome":"Controle de Sistemas Fluído-Mecânicos","creditos":4,"semIdeal":8,"oferta":"par","prereqs":["ENG03027","ENG10018"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"obrigatoria"}},
  {"id":"ENG03386","nome":"Fabricação Auxiliada por Computador","creditos":4,"semIdeal":8,"oferta":"ambos","prereqs":["ENG03021"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"obrigatoria","mecanica":"eletiva"}},
  {"id":"ENG10055","nome":"Sistemas de Tempo Real - I","creditos":4,"semIdeal":8,"oferta":"ambos","prereqs":["ENG04475"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"CCA99010","nome":"Projeto Integrado III","creditos":9,"semIdeal":9,"oferta":"ambos","prereqs":["CCA99009"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG07012","nome":"Laboratório de Controle e Operação de Processos","creditos":3,"semIdeal":9,"oferta":"ambos","prereqs":["ENG07042"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG07062","nome":"Otimização Aplicada","creditos":3,"semIdeal":9,"oferta":"ambos","prereqs":["ENG07042"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"eletiva"}},
  {"id":"ENG03047","nome":"Projetos de Sistemas Mecânicos","creditos":4,"semIdeal":9,"oferta":"impar","prereqs":["ENG03044","ENG03045"],"reqCreditos":0,"fdc":{"potencia":"eletiva","cadcam":"eletiva","mecanica":"obrigatoria"}}
 ]
});
