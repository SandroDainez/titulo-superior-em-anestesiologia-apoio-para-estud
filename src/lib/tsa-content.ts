// Conteúdo completo e detalhado para preparação TSA
// Baseado no edital oficial e nas 10 áreas principais

export interface ConteudoTeorico {
  id: string
  area: string
  topico: string
  subtopicos: string[]
  teoria: string
  pontosChave: string[]
  casosClinicosExemplo: CasoClinico[]
  questoesPraticas: QuestaoPratica[]
}

export interface CasoClinico {
  id: string
  titulo: string
  cenario: string
  pergunta: string
  opcoes: string[]
  respostaCorreta: number
  explicacao: string
  referencias: string[]
}

export interface QuestaoPratica {
  id: string
  enunciado: string
  opcoes: string[]
  respostaCorreta: number
  explicacao: string
  dificuldade: "Fácil" | "Médio" | "Difícil"
  area: string
}

// ========================================
// 1. FISIOLOGIA APLICADA À ANESTESIA
// ========================================

export const fisiologiaCardiovascular: ConteudoTeorico = {
  id: "fisio-cardio-001",
  area: "Fisiologia Cardiovascular",
  topico: "Débito Cardíaco e Determinantes",
  subtopicos: [
    "Débito cardíaco (DC = FC × VS)",
    "Pré-carga (retorno venoso, volemia)",
    "Pós-carga (RVS, impedância aórtica)",
    "Contratilidade miocárdica",
    "Autorregulação cerebral e renal",
    "Pressão arterial média (PAM = DC × RVS)",
    "Controle autonômico (simpático/parassimpático)"
  ],
  teoria: `
**DÉBITO CARDÍACO E SUAS DETERMINANTES**

O débito cardíaco (DC) é o volume de sangue ejetado pelo coração por minuto:
DC = Frequência Cardíaca (FC) × Volume Sistólico (VS)

**PRÉ-CARGA:**
- Representa o grau de estiramento das fibras miocárdicas ao final da diástole
- Determinada principalmente pelo retorno venoso
- Lei de Frank-Starling: ↑ pré-carga → ↑ VS (até certo limite)
- Fatores que afetam: volemia, tônus venoso, pressão intratorácica

**PÓS-CARGA:**
- Resistência que o ventrículo deve vencer para ejetar sangue
- VE: resistência vascular sistêmica (RVS)
- VD: resistência vascular pulmonar (RVP)
- ↑ pós-carga → ↓ VS

**CONTRATILIDADE:**
- Força de contração miocárdica independente de pré/pós-carga
- Modulada por: catecolaminas, cálcio intracelular, drogas inotrópicas
- Anestésicos inalatórios DEPRIMEM contratilidade

**AUTORREGULAÇÃO:**
- Cérebro: mantém FSC constante entre PAM 50-150 mmHg
- Rim: mantém FG entre PAM 80-180 mmHg
- Mecanismo miogênico + metabólico

**CONTROLE AUTONÔMICO:**
- Simpático: ↑ FC, ↑ contratilidade, vasoconstrição
- Parassimpático (vago): ↓ FC, ↓ condução AV
- Barorreceptores: arco aórtico e seio carotídeo
  `,
  pontosChave: [
    "DC = FC × VS (normal: 4-8 L/min)",
    "PAM = DC × RVS (normal: 70-100 mmHg)",
    "Pré-carga ↑ → VS ↑ (Frank-Starling)",
    "Pós-carga ↑ → VS ↓",
    "Anestésicos inalatórios ↓ contratilidade",
    "Autorregulação cerebral: PAM 50-150 mmHg",
    "Barorreceptores: resposta rápida à hipotensão"
  ],
  casosClinicosExemplo: [
    {
      id: "caso-cardio-001",
      titulo: "Hipotensão Intraoperatória",
      cenario: "Paciente masculino, 65 anos, ASA II, submetido a colecistectomia videolaparoscópica sob anestesia geral. Após indução com propofol e fentanil, PA cai de 130/80 para 80/50 mmHg. FC 55 bpm. Não há sangramento visível.",
      pergunta: "Qual a causa MAIS PROVÁVEL da hipotensão e a conduta INICIAL?",
      opcoes: [
        "Hipovolemia relativa por vasodilatação; administrar cristaloide 500ml",
        "Depressão miocárdica por propofol; iniciar dobutamina",
        "Bradicardia reflexa; administrar atropina 0,5mg",
        "Pneumoperitônio com ↑ RVS; aguardar compensação"
      ],
      respostaCorreta: 0,
      explicacao: `
**RESPOSTA CORRETA: A**

A hipotensão pós-indução é MULTIFATORIAL:
1. Propofol causa vasodilatação (↓ RVS)
2. Fentanil pode causar bradicardia
3. Ventilação com pressão positiva ↓ retorno venoso

**FISIOPATOLOGIA:**
- PAM = DC × RVS
- DC = FC × VS
- ↓ RVS (propofol) + ↓ retorno venoso (IPPV) → ↓ PAM

**CONDUTA INICIAL:**
1. Expansão volêmica (cristaloide 250-500ml)
2. Se persistir: vasopressor (efedrina 5-10mg ou fenilefrina 50-100mcg)
3. Bradicardia significativa: atropina

**POR QUE NÃO AS OUTRAS:**
- B: Dobutamina é inotrópico, não indicado como 1ª linha
- C: FC 55 não é bradicardia grave em idoso
- D: Pneumoperitônio AUMENTA RVS, não explica hipotensão
      `,
      referencias: [
        "Miller's Anesthesia, 9th ed., Cap. 40",
        "Barash Clinical Anesthesia, 8th ed., Cap. 17"
      ]
    }
  ],
  questoesPraticas: [
    {
      id: "quest-cardio-001",
      enunciado: "Paciente com estenose aórtica grave. Qual parâmetro hemodinâmico é MAIS importante manter durante anestesia?",
      opcoes: [
        "Frequência cardíaca elevada (>100 bpm)",
        "Pré-carga adequada e RVS preservada",
        "Pós-carga reduzida para facilitar ejeção",
        "Contratilidade aumentada com dobutamina"
      ],
      respostaCorreta: 1,
      explicacao: `
**RESPOSTA: B - Pré-carga adequada e RVS preservada**

**ESTENOSE AÓRTICA - PRINCÍPIOS:**
- Obstrução à ejeção do VE
- VE hipertrófico, pouco complacente
- Dependente de pré-carga para manter DC
- Taquicardia ↓ tempo de enchimento diastólico

**OBJETIVOS HEMODINÂMICOS:**
✓ FC normal/baixa (60-80 bpm) - tempo de enchimento
✓ Ritmo sinusal - contração atrial importante
✓ Pré-carga ALTA - VE rígido precisa de pressão
✓ RVS normal/alta - manter perfusão coronariana
✗ Evitar: taquicardia, hipovolemia, vasodilatação

**MNEMÔNICO: "SLOW AND FULL"**
- Slow: FC baixa
- Full: pré-carga alta
      `,
      dificuldade: "Médio",
      area: "Fisiologia Cardiovascular"
    }
  ]
}

export const fisiologiaRespiratoria: ConteudoTeorico = {
  id: "fisio-resp-001",
  area: "Fisiologia Respiratória",
  topico: "Ventilação, Perfusão e Relação V/Q",
  subtopicos: [
    "Ventilação alveolar",
    "Perfusão pulmonar",
    "Relação V/Q (normal = 0,8-1,0)",
    "Shunt (V/Q = 0)",
    "Espaço morto (V/Q = ∞)",
    "Curva de dissociação da hemoglobina",
    "Controle neural da respiração"
  ],
  teoria: `
**VENTILAÇÃO E PERFUSÃO PULMONAR**

**VENTILAÇÃO ALVEOLAR (VA):**
- Volume de ar que participa das trocas gasosas
- VA = (VT - VD) × FR
- VT = volume corrente, VD = espaço morto, FR = frequência

**PERFUSÃO PULMONAR (Q):**
- Fluxo sanguíneo através dos capilares alveolares
- Q = débito cardíaco do VD
- Distribuição gravitacional (zonas de West)

**RELAÇÃO V/Q:**
- Normal = 0,8 a 1,0
- Ápice pulmonar: V/Q alto (mais ventilação que perfusão)
- Base pulmonar: V/Q baixo (mais perfusão que ventilação)

**ALTERAÇÕES PATOLÓGICAS:**

1. **SHUNT (V/Q = 0):**
   - Perfusão sem ventilação
   - Causas: atelectasia, pneumonia, edema pulmonar
   - Sangue não oxigenado → hipoxemia
   - NÃO CORRIGE com O2 100%

2. **ESPAÇO MORTO (V/Q = ∞):**
   - Ventilação sem perfusão
   - Causas: embolia pulmonar, hipotensão, PEEP excessivo
   - ↑ PaCO2, ↑ gradiente A-a

**CURVA DE DISSOCIAÇÃO DA HEMOGLOBINA:**
- Forma sigmóide
- P50 = 27 mmHg (PO2 para SatO2 50%)
- Desvio à DIREITA (↓ afinidade, facilita liberação O2):
  * ↑ temperatura, ↑ CO2, ↑ 2,3-DPG, ↓ pH
- Desvio à ESQUERDA (↑ afinidade, dificulta liberação):
  * ↓ temperatura, ↓ CO2, ↓ 2,3-DPG, ↑ pH, HbF, CO
  `,
  pontosChave: [
    "V/Q normal = 0,8-1,0",
    "Shunt: perfusão sem ventilação (V/Q=0)",
    "Espaço morto: ventilação sem perfusão (V/Q=∞)",
    "Shunt NÃO corrige com O2 100%",
    "P50 = 27 mmHg",
    "Desvio direita: ↑T, ↑CO2, ↓pH (facilita liberação O2)",
    "Zonas de West: distribuição gravitacional da perfusão"
  ],
  casosClinicosExemplo: [],
  questoesPraticas: []
}

// ========================================
// 2. FARMACOLOGIA ANESTÉSICA
// ========================================

export const farmacologiaAnestesicosIV: ConteudoTeorico = {
  id: "farm-iv-001",
  area: "Farmacologia - Anestésicos IV",
  topico: "Propofol, Etomidato, Cetamina, Barbitúricos",
  subtopicos: [
    "Propofol: farmacocinética, efeitos, PRIS",
    "Etomidato: estabilidade hemodinâmica, supressão adrenal",
    "Cetamina: analgesia, dissociação, efeitos psicomiméticos",
    "Tiopental: barbitúrico, neuroproteção"
  ],
  teoria: `
**PROPOFOL**

**Farmacocinética:**
- Início: 30-45 segundos
- Duração: 5-10 minutos (dose única)
- Metabolismo: hepático (conjugação)
- Clearance: 20-30 mL/kg/min (excede fluxo hepático → extra-hepático)

**Farmacodinâmica:**
- Mecanismo: agonista GABA-A
- Dose indução: 1,5-2,5 mg/kg IV
- Dose manutenção: 100-200 mcg/kg/min

**Efeitos Cardiovasculares:**
- ↓ PA (20-30%) - vasodilatação + ↓ contratilidade
- ↓ RVS, ↓ pré-carga
- Sem efeito significativo em FC

**Efeitos Respiratórios:**
- Depressão respiratória dose-dependente
- Apneia comum na indução
- ↓ resposta a hipóxia e hipercapnia

**Efeitos SNC:**
- ↓ PIC, ↓ CMRO2, ↓ FSC
- Anticonvulsivante
- Antiemético

**Efeitos Adversos:**
- Dor à injeção (usar lidocaína)
- Síndrome de infusão do propofol (PRIS):
  * Acidose metabólica, rabdomiólise, arritmias
  * Risco: infusão >4mg/kg/h por >48h

---

**ETOMIDATO**

**Características:**
- Dose: 0,2-0,3 mg/kg IV
- Início: 30-60 segundos
- Duração: 3-5 minutos

**Vantagens:**
- Estabilidade hemodinâmica (ideal para instáveis)
- Mantém autorregulação cerebral
- ↓ PIC, ↓ CMRO2

**Desvantagens:**
- Supressão adrenal (inibe 11β-hidroxilase)
  * Dose única: supressão por 6-8h
  * Evitar em sepse
- Mioclonias (30-60%)
- Dor à injeção
- Náuseas/vômitos

---

**CETAMINA**

**Mecanismo:**
- Antagonista NMDA
- Analgesia em doses subanestésicas (0,1-0,5 mg/kg)

**Dose:**
- Indução: 1-2 mg/kg IV (4-6 mg/kg IM)
- Sedação/analgesia: 0,1-0,5 mg/kg IV

**Efeitos Cardiovasculares:**
- ↑ PA, ↑ FC (estimulação simpática)
- Inotrópico negativo direto (mascarado por simpático)
- Útil em choque/hipovolemia

**Efeitos Respiratórios:**
- Mantém drive respiratório
- Broncodilatação
- ↑ secreções (usar anticolinérgico)

**Efeitos SNC:**
- Analgesia potente
- ↑ PIC, ↑ FSC (controverso)
- Efeitos psicomiméticos (pesadelos, alucinações)
  * Prevenir com benzodiazepínico

**Indicações:**
- Anestesia em instáveis hemodinâmicos
- Analgesia em queimados, trauma
- Broncoespasmo
- Sedação em pediatria
  `,
  pontosChave: [
    "Propofol: ↓ PA, ↓ PIC, antiemético, PRIS (>4mg/kg/h >48h)",
    "Etomidato: estável hemodinamicamente, suprime adrenal",
    "Cetamina: ↑ PA, mantém respiração, analgesia, ↑ PIC(?)",
    "Tiopental: neuroprotetor, ↓ PIC, ↓ PA significativo"
  ],
  casosClinicosExemplo: [],
  questoesPraticas: []
}

export const farmacologiaOpioides: ConteudoTeorico = {
  id: "farm-opioides-001",
  area: "Farmacologia - Opioides",
  topico: "Fentanil, Remifentanil, Sufentanil",
  subtopicos: [
    "Mecanismo: agonistas receptores μ, κ, δ",
    "Fentanil: potência, duração, contexto",
    "Remifentanil: metabolismo por esterases, contexto curto",
    "Sufentanil: alta potência, uso neuroeixo",
    "Tolerância e hiperalgesia induzida por opioides",
    "Antagonistas: naloxona"
  ],
  teoria: `
**OPIOIDES - CONCEITOS FUNDAMENTAIS**

**Mecanismo de Ação:**
- Agonistas de receptores opioides (μ, κ, δ)
- Receptor μ (mi): analgesia, depressão respiratória, euforia
- Receptor κ (kappa): analgesia espinhal, sedação, disforia
- Receptor δ (delta): analgesia

**FENTANIL**

**Farmacocinética:**
- Potência: 100x morfina
- Início: 3-5 minutos
- Duração: 30-60 minutos (dose única)
- Contexto-sensitivo: aumenta com infusões prolongadas
- Metabolismo: hepático (CYP3A4)
- Lipossolúvel: redistribuição rápida

**Doses:**
- Analgesia: 1-2 mcg/kg
- Indução: 2-5 mcg/kg
- Infusão: 0,5-2 mcg/kg/h

**Efeitos:**
- Analgesia potente
- Depressão respiratória dose-dependente
- Bradicardia (estimulação vagal)
- Rigidez torácica (doses altas, rápidas)
- Náuseas/vômitos
- Prurido

---

**REMIFENTANIL**

**Características Únicas:**
- Metabolismo por esterases plasmáticas e teciduais
- Meia-vida contexto-sensitiva: 3-4 min (independente da duração)
- Não acumula em infusões prolongadas
- Clearance: 40 mL/kg/min

**Doses:**
- Indução: 0,5-1 mcg/kg
- Manutenção: 0,05-2 mcg/kg/min
- Analgesia pós-op: NÃO (offset rápido)

**Vantagens:**
- Titulação precisa
- Recuperação rápida e previsível
- Ideal para: neuroanestesia, obesidade, insuficiência renal/hepática

**Desvantagens:**
- Hiperalgesia pós-operatória (doses altas)
- Bradicardia/hipotensão
- Rigidez torácica
- Necessita analgesia multimodal no pós-op

---

**SUFENTANIL**

**Características:**
- Potência: 500-1000x morfina (5-10x fentanil)
- Início: 2-3 minutos
- Duração: 30-45 minutos
- Mais lipossolúvel que fentanil

**Doses:**
- Analgesia: 0,1-0,5 mcg/kg
- Indução: 0,5-1,5 mcg/kg
- Neuroeixo: 2,5-10 mcg (intratecal)

**Uso Neuroeixo:**
- Potencializa anestésicos locais
- Prolonga duração do bloqueio
- Analgesia pós-operatória
- Efeitos adversos: prurido, náuseas, retenção urinária

---

**TOLERÂNCIA E HIPERALGESIA**

**Tolerância:**
- Necessidade de doses crescentes para mesmo efeito
- Mecanismo: downregulation de receptores, dessensibilização

**Hiperalgesia Induzida por Opioides (HIO):**
- Aumento paradoxal da sensibilidade à dor
- Mecanismo: ativação NMDA, sensibilização central
- Fatores de risco:
  * Doses altas de opioides
  * Remifentanil em infusão
  * Uso prolongado
- Prevenção:
  * Analgesia multimodal
  * Cetamina (antagonista NMDA)
  * Evitar doses excessivas

---

**NALOXONA (Antagonista)**

**Características:**
- Antagonista competitivo puro (μ, κ, δ)
- Início: 1-2 minutos IV
- Duração: 30-60 minutos (< opioides de longa ação)
- Dose: 0,04-0,4 mg IV (titular)

**Indicações:**
- Depressão respiratória por opioides
- Reversão de sedação excessiva

**Cuidados:**
- Reversão abrupta → dor intensa, hipertensão, taquicardia, edema pulmonar
- Re-narcotização possível (duração < fentanil)
- Titular lentamente
  `,
  pontosChave: [
    "Fentanil: 100x morfina, duração 30-60min, contexto-sensitivo",
    "Remifentanil: metabolismo por esterases, contexto 3-4min sempre",
    "Sufentanil: 500-1000x morfina, uso neuroeixo",
    "HIO: hiperalgesia por doses altas, prevenir com multimodal",
    "Naloxona: antagonista, duração 30-60min, titular devagar"
  ],
  casosClinicosExemplo: [],
  questoesPraticas: []
}

// ========================================
// 3. ANESTESIA POR ESPECIALIDADE
// ========================================

export const anestesiaObstetrica: ConteudoTeorico = {
  id: "anest-obst-001",
  area: "Anestesia Obstétrica",
  topico: "Analgesia de Parto e Anestesia para Cesárea",
  subtopicos: [
    "Alterações fisiológicas da gestação",
    "Analgesia de parto: peridural, raqui-peridural combinada",
    "Anestesia para cesárea: raqui vs peridural",
    "Pré-eclâmpsia e síndrome HELLP",
    "Hemorragia obstétrica",
    "Toxicidade por anestésicos locais"
  ],
  teoria: `
**ALTERAÇÕES FISIOLÓGICAS DA GESTAÇÃO**

**Cardiovasculares:**
- ↑ DC (30-50%) - pico 28-32 semanas
- ↑ volemia (40-50%)
- ↓ RVS (30%)
- Compressão aortocava (>20 semanas)
  * Síndrome de hipotensão supina
  * Deslocamento uterino para esquerda

**Respiratórias:**
- ↑ ventilação minuto (50%)
- ↓ CRF (20%)
- Alcalose respiratória compensada (PaCO2 30 mmHg)
- Via aérea: edema, Mallampati ↑, intubação difícil

**Hematológicas:**
- Anemia dilucional (Hb 10-11 g/dL)
- Estado pró-coagulante
- ↓ plaquetas (gestacional benigna >70.000)

**Gastrointestinais:**
- ↓ tônus EEI, ↑ pressão intragástrica
- Risco de aspiração (Mendelson)
- Jejum: líquidos claros 2h, sólidos 6-8h

**Farmacológicas:**
- ↓ CAM (30-40%) - progesterona
- ↓ dose anestésicos locais neuroeixo (ingurgitamento venoso)
- Sensibilidade aumentada a drogas

---

**ANALGESIA DE PARTO**

**Peridural Contínua:**
- Técnica mais comum
- Cateter permite titulação e duração prolongada
- Anestésicos locais: bupivacaína 0,0625-0,125% + fentanil 2 mcg/mL
- Dose teste: lidocaína 3% com epi 1:200.000 (3-5 mL)
- Latência: 10-20 minutos
- Bloqueio T10-L1 (1ª fase) → T10-S4 (2ª fase)

**Raqui-Peridural Combinada (RPC):**
- Raqui: analgesia rápida (bupivacaína 2,5mg + fentanil 15-25mcg)
- Peridural: cateter para manutenção
- Vantagens: início rápido, dose baixa, flexibilidade
- Desvantagens: punção dural intencional

**Contraindicações Neuroeixo:**
- Absolutas: recusa, infecção local, coagulopatia, hipovolemia grave
- Relativas: sepse, doença neurológica, deformidade coluna

**Complicações:**
- Hipotensão (mais comum)
  * Profilaxia: pré-carga, vasopressor (fenilefrina)
- Bloqueio alto/total
- PDPH (cefaleia pós-punção dural)
- Hematoma epidural (raro)
- Toxicidade sistêmica por anestésicos locais

---

**ANESTESIA PARA CESÁREA**

**Raquianestesia:**
- Técnica de escolha (cesárea eletiva)
- Bupivacaína hiperbárica 0,5%: 10-12,5 mg
- Adjuvantes: morfina 100-200 mcg (analgesia pós-op) + fentanil 15-25 mcg
- Bloqueio: T4-T6
- Início: 3-5 minutos
- Duração: 90-120 minutos

**Anestesia Peridural:**
- Indicações: trabalho de parto com cateter, contraindicação à raqui
- Dose: lidocaína 2% com epi ou bupivacaína 0,5%: 15-25 mL
- Latência: 15-20 minutos
- Titulação possível

**Anestesia Geral:**
- Indicações: contraindicação neuroeixo, urgência extrema, recusa
- Sequência rápida: propofol + succinilcolina
- Manutenção: sevoflurano + remifentanil (após clampeamento)
- Riscos: aspiração, intubação difícil, depressão neonatal

---

**PRÉ-ECLÂMPSIA E HELLP**

**Pré-eclâmpsia:**
- Definição: PA ≥140/90 após 20 semanas + proteinúria
- Grave: PA ≥160/110, plaquetas <100.000, Cr >1,1, edema pulmonar

**Manejo Anestésico:**
- Controle pressórico: hidralazina, labetalol, nifedipina
- Sulfato de magnésio: profilaxia convulsão (4-6g ataque, 1-2g/h manutenção)
- Neuroeixo: SEGURO se plaquetas >70.000
- Cuidado: hipotensão pós-bloqueio (vasodilatação súbita)

**Síndrome HELLP:**
- Hemólise, Elevated Liver enzymes, Low Platelets
- Plaquetas <100.000: avaliar neuroeixo (risco/benefício)
- Plaquetas <50.000: contraindicação relativa
- Anestesia geral se coagulopatia

---

**HEMORRAGIA OBSTÉTRICA**

**Causas (4 T's):**
- Tônus: atonia uterina (mais comum)
- Trauma: laceração, rotura uterina
- Tecido: retenção placentária
- Trombina: coagulopatia

**Manejo:**
1. Chamar ajuda, ativar protocolo
2. Acesso venoso calibroso (2x 14-16G)
3. Reposição volêmica agressiva
4. Transfusão: protocolo 1:1:1 (CH:PFC:plaquetas)
5. Uterotônicos:
   - Ocitocina: 10-40 UI em infusão
   - Metilergonovina: 0,2 mg IM (CI: hipertensão)
   - Carboprost: 250 mcg IM (CI: asma)
   - Misoprostol: 800-1000 mcg retal
6. Ácido tranexâmico: 1g IV
7. Cirurgia: sutura B-Lynch, histerectomia

---

**TOXICIDADE POR ANESTÉSICOS LOCAIS**

**Sinais e Sintomas:**
- SNC (precoce): zumbido, gosto metálico, parestesia perioral, agitação
- SNC (tardio): convulsão, coma
- Cardiovascular: hipotensão, bradicardia, arritmias, PCR

**Tratamento:**
1. Parar injeção, chamar ajuda
2. Suporte ventilatório (O2 100%)
3. Controle de convulsões: benzodiazepínico
4. Emulsão lipídica 20%:
   - Bolus: 1,5 mL/kg (100 mL para 70kg)
   - Infusão: 0,25 mL/kg/min
   - Repetir bolus se necessário (máx 3x)
   - Dose máxima: 10 mL/kg
5. RCP se PCR (prolongada, pode durar >1h)

**Prevenção:**
- Dose teste
- Fracionamento
- Aspiração frequente
- Doses máximas respeitadas
  `,
  pontosChave: [
    "Gestante: ↑DC 50%, ↓CRF 20%, ↓CAM 30%, risco aspiração",
    "Analgesia parto: peridural contínua ou RPC",
    "Cesárea: raqui (1ª escolha), peridural, AG (última opção)",
    "Pré-eclâmpsia: MgSO4, neuroeixo OK se plaquetas >70.000",
    "HELLP: plaquetas <50.000 = contraindicação relativa neuroeixo",
    "Hemorragia: protocolo 1:1:1, uterotônicos, ácido tranexâmico",
    "Toxicidade AL: emulsão lipídica 20% (1,5 mL/kg bolus)"
  ],
  casosClinicosExemplo: [],
  questoesPraticas: []
}

// Exportar todos os conteúdos
export const conteudoTSA = {
  fisiologia: {
    cardiovascular: fisiologiaCardiovascular,
    respiratoria: fisiologiaRespiratoria
  },
  farmacologia: {
    anestesicosIV: farmacologiaAnestesicosIV,
    opioides: farmacologiaOpioides
  },
  especialidades: {
    obstetrica: anestesiaObstetrica
  }
}

// Função para buscar conteúdo por área
export function getConteudoPorArea(area: string): ConteudoTeorico | null {
  // Implementar busca no objeto conteudoTSA
  return null
}

// Função para gerar questões aleatórias
export function gerarQuestoesAleatorias(quantidade: number, area?: string): QuestaoPratica[] {
  // Implementar geração de questões
  return []
}
