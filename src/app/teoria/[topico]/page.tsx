"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, BookOpen, Brain, FileText, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeoriaPage() {
  const params = useParams()
  const topico = params.topico as string

  // Exemplo de conteúdo detalhado
  const conteudoDetalhado = {
    titulo: "Débito Cardíaco e Determinantes Hemodinâmicas",
    area: "Fisiologia Cardiovascular",
    teoria: `
## Débito Cardíaco (DC)

O débito cardíaco é o volume de sangue ejetado pelo coração por minuto e é calculado pela fórmula:

**DC = Frequência Cardíaca (FC) × Volume Sistólico (VS)**

Valores normais: 4-8 L/min (em repouso)

### Determinantes do Débito Cardíaco

#### 1. PRÉ-CARGA
A pré-carga representa o grau de estiramento das fibras miocárdicas ao final da diástole, antes da contração.

**Conceitos-chave:**
- Determinada principalmente pelo retorno venoso
- Relacionada ao volume diastólico final (VDF)
- Lei de Frank-Starling: ↑ pré-carga → ↑ volume sistólico (até certo limite)

**Fatores que afetam a pré-carga:**
- Volemia (principal)
- Tônus venoso
- Pressão intratorácica
- Posição corporal
- Contração atrial

**Relevância anestésica:**
- Anestésicos causam vasodilatação → ↓ retorno venoso → ↓ pré-carga
- Ventilação com pressão positiva → ↓ retorno venoso
- Hipovolemia → ↓ pré-carga → ↓ DC → hipotensão

#### 2. PÓS-CARGA
A pós-carga é a resistência que o ventrículo deve vencer para ejetar o sangue.

**Para o Ventrículo Esquerdo:**
- Resistência Vascular Sistêmica (RVS)
- Impedância aórtica
- Viscosidade sanguínea

**Para o Ventrículo Direito:**
- Resistência Vascular Pulmonar (RVP)

**Relação com Volume Sistólico:**
- ↑ pós-carga → ↓ volume sistólico
- ↓ pós-carga → ↑ volume sistólico

**Relevância anestésica:**
- Anestésicos inalatórios → ↓ RVS → ↓ pós-carga
- Vasopressores → ↑ RVS → ↑ pós-carga
- Importante em cardiopatias (estenose aórtica, insuficiência cardíaca)

#### 3. CONTRATILIDADE
A contratilidade é a força de contração miocárdica, independente de pré e pós-carga.

**Fatores que aumentam contratilidade:**
- Catecolaminas (adrenalina, noradrenalina)
- Drogas inotrópicas positivas (dobutamina, dopamina, milrinona)
- Cálcio intracelular
- Estimulação simpática

**Fatores que diminuem contratilidade:**
- Anestésicos inalatórios (efeito dose-dependente)
- Betabloqueadores
- Bloqueadores de canal de cálcio
- Isquemia miocárdica
- Acidose

**Relevância anestésica:**
- Todos os anestésicos inalatórios deprimem a contratilidade
- Propofol tem efeito inotrópico negativo discreto
- Etomidato preserva contratilidade (ideal para pacientes instáveis)
- Cetamina tem efeito inotrópico positivo indireto (estimulação simpática)

#### 4. FREQUÊNCIA CARDÍACA
A FC é o número de batimentos por minuto.

**Relação com DC:**
- DC = FC × VS
- ↑ FC → ↑ DC (até certo limite)
- FC muito alta → ↓ tempo de enchimento diastólico → ↓ VS → ↓ DC

**Controle da FC:**
- Sistema nervoso autônomo
  - Simpático: ↑ FC (receptores β1)
  - Parassimpático (vago): ↓ FC (receptores muscarínicos)
- Barorreceptores (arco aórtico, seio carotídeo)
- Quimiorreceptores

**Relevância anestésica:**
- Opioides → bradicardia (estimulação vagal)
- Anticolinérgicos (atropina) → taquicardia
- Anestésicos inalatórios → ↓ resposta barorreceptora

### Pressão Arterial Média (PAM)

**PAM = Débito Cardíaco × Resistência Vascular Sistêmica**

PAM = DC × RVS

Valores normais: 70-100 mmHg

**Cálculo aproximado:**
PAM = PAS + (2 × PAD) / 3

Onde:
- PAS = Pressão Arterial Sistólica
- PAD = Pressão Arterial Diastólica

**Importância da PAM:**
- Representa a pressão de perfusão dos órgãos
- Autorregulação cerebral: mantida entre PAM 50-150 mmHg
- Autorregulação renal: mantida entre PAM 80-180 mmHg
- PAM < 60 mmHg → risco de hipoperfusão orgânica

### Autorregulação

**Definição:** Capacidade dos órgãos de manter fluxo sanguíneo constante apesar de variações na pressão de perfusão.

#### Autorregulação Cerebral
- Mantém Fluxo Sanguíneo Cerebral (FSC) constante
- Faixa de PAM: 50-150 mmHg
- Mecanismos:
  - Miogênico (resposta vascular à pressão)
  - Metabólico (CO2, O2, pH)
  - Neurogênico

**Fatores que alteram autorregulação cerebral:**
- Hipertensão crônica → curva desviada à direita
- Anestésicos inalatórios → prejudicam autorregulação (dose-dependente)
- Hipercapnia → vasodilatação cerebral
- Hipocapnia → vasoconstrição cerebral

#### Autorregulação Renal
- Mantém Taxa de Filtração Glomerular (TFG) constante
- Faixa de PAM: 80-180 mmHg
- Mecanismos:
  - Miogênico
  - Feedback tubuloglomerular
  - Sistema renina-angiotensina

**Relevância anestésica:**
- PAM < 60 mmHg → risco de lesão renal aguda
- Manter PAM adequada em cirurgias prolongadas
- Pacientes hipertensos crônicos → necessitam PAM mais alta

### Controle Autonômico Cardiovascular

#### Sistema Nervoso Simpático
**Efeitos:**
- ↑ Frequência cardíaca (cronotropismo +)
- ↑ Contratilidade (inotropismo +)
- ↑ Velocidade de condução (dromotropismo +)
- Vasoconstrição periférica (↑ RVS)

**Receptores:**
- α1: vasoconstrição
- β1: ↑ FC, ↑ contratilidade
- β2: vasodilatação, broncodilatação

#### Sistema Nervoso Parassimpático (Vago)
**Efeitos:**
- ↓ Frequência cardíaca
- ↓ Velocidade de condução AV
- Pouco efeito em contratilidade ventricular

**Receptores:**
- Muscarínicos M2 (coração)

#### Barorreceptores
**Localização:**
- Seio carotídeo
- Arco aórtico

**Função:**
- Detectam variações de pressão arterial
- Resposta rápida (segundos)
- ↑ PA → ↑ atividade barorreceptora → ↓ simpático + ↑ parassimpático → ↓ PA
- ↓ PA → ↓ atividade barorreceptora → ↑ simpático + ↓ parassimpático → ↑ PA

**Relevância anestésica:**
- Anestésicos inalatórios → ↓ sensibilidade barorreceptora
- Laringoscopia → estimulação simpática → hipertensão, taquicardia
- Hipotensão pós-indução → resposta barorreceptora atenuada

### Fisiologia do Choque

**Definição:** Estado de hipoperfusão tecidual inadequada para suprir as demandas metabólicas.

#### Classificação do Choque

**1. Choque Hipovolêmico**
- Causa: perda de volume (hemorragia, desidratação)
- Fisiopatologia: ↓ pré-carga → ↓ DC → ↓ perfusão
- Sinais: taquicardia, hipotensão, ↓ débito urinário, extremidades frias
- Tratamento: reposição volêmica, controle de sangramento

**2. Choque Cardiogênico**
- Causa: falência da bomba cardíaca (IAM, miocardite)
- Fisiopatologia: ↓ contratilidade → ↓ DC → ↓ perfusão
- Sinais: hipotensão, congestão pulmonar, ↑ PVC
- Tratamento: inotrópicos, suporte mecânico

**3. Choque Distributivo**
- Causa: vasodilatação patológica (sepse, anafilaxia)
- Fisiopatologia: ↓ RVS → ↓ PA → má distribuição de fluxo
- Sinais: hipotensão, extremidades quentes (fase inicial), taquicardia
- Tratamento: vasopressores, tratamento da causa

**4. Choque Obstrutivo**
- Causa: obstrução ao fluxo (tamponamento, TEP, pneumotórax hipertensivo)
- Fisiopatologia: obstrução mecânica → ↓ DC → ↓ perfusão
- Sinais: hipotensão, ↑ PVC, sinais específicos da causa
- Tratamento: remover obstrução

#### Resposta Compensatória ao Choque
1. Ativação simpática → taquicardia, vasoconstrição
2. Sistema renina-angiotensina-aldosterona → retenção de Na+ e água
3. Liberação de ADH → retenção de água
4. Redistribuição de fluxo → prioriza coração e cérebro

#### Estágios do Choque
1. **Compensado:** mecanismos compensatórios mantêm PA
2. **Descompensado:** falência dos mecanismos, hipotensão
3. **Irreversível:** lesão celular irreversível, falência multiorgânica
    `,
    pontosChave: [
      "DC = FC × VS (normal: 4-8 L/min)",
      "PAM = DC × RVS (normal: 70-100 mmHg)",
      "Pré-carga ↑ → VS ↑ (Lei de Frank-Starling)",
      "Pós-carga ↑ → VS ↓",
      "Anestésicos inalatórios deprimem contratilidade",
      "Autorregulação cerebral: PAM 50-150 mmHg",
      "Autorregulação renal: PAM 80-180 mmHg",
      "Barorreceptores: resposta rápida à variação de PA",
      "Choque: hipoperfusão tecidual inadequada"
    ],
    casosClinicosExemplo: [
      {
        titulo: "Hipotensão Pós-Indução Anestésica",
        cenario: "Paciente masculino, 65 anos, ASA II, submetido a colecistectomia videolaparoscópica sob anestesia geral. Após indução com propofol 2mg/kg e fentanil 3mcg/kg, PA cai de 130/80 para 80/50 mmHg. FC 55 bpm. SpO2 98%. Não há sangramento visível.",
        pergunta: "Qual a causa MAIS PROVÁVEL da hipotensão e a conduta INICIAL?",
        opcoes: [
          "A) Hipovolemia relativa por vasodilatação; administrar cristaloide 500ml",
          "B) Depressão miocárdica por propofol; iniciar dobutamina",
          "C) Bradicardia reflexa; administrar atropina 0,5mg",
          "D) Pneumoperitônio com ↑ RVS; aguardar compensação"
        ],
        respostaCorreta: "A",
        explicacao: `
**RESPOSTA CORRETA: A**

**Análise da situação:**
A hipotensão pós-indução é MULTIFATORIAL e muito comum:

1. **Propofol:**
   - Causa vasodilatação periférica (↓ RVS)
   - Depressão miocárdica discreta
   - Efeito dose-dependente

2. **Fentanil:**
   - Pode causar bradicardia (estimulação vagal)
   - Contribui para hipotensão

3. **Ventilação com pressão positiva:**
   - ↓ retorno venoso
   - ↓ pré-carga

**Fisiopatologia:**
- PAM = DC × RVS
- DC = FC × VS
- ↓ RVS (propofol) + ↓ retorno venoso (IPPV) + bradicardia (fentanil) → ↓ PAM

**Conduta INICIAL (passo a passo):**

1. **Expansão volêmica (PRIMEIRA LINHA):**
   - Cristaloide 250-500ml em bolus
   - Corrige hipovolemia relativa
   - Aumenta pré-carga → aumenta VS → aumenta DC

2. **Se persistir hipotensão:**
   - Vasopressor:
     * Efedrina 5-10mg IV (↑ FC + ↑ RVS)
     * Fenilefrina 50-100mcg IV (↑ RVS puro)

3. **Se bradicardia significativa (<50 bpm):**
   - Atropina 0,5mg IV

4. **Otimizar ventilação:**
   - Reduzir PEEP se possível
   - Evitar pressões excessivas

**Por que NÃO as outras opções:**

**B) Dobutamina:**
- É inotrópico, não primeira linha para hipotensão pós-indução
- Pode piorar hipotensão (vasodilatação β2)
- Indicada em choque cardiogênico

**C) Atropina:**
- FC 55 bpm não é bradicardia grave em idoso
- Não resolve o problema principal (↓ RVS)
- Pode ser usada SE bradicardia <50 bpm

**D) Aguardar:**
- Pneumoperitônio AUMENTA RVS (compressão aorta)
- Não explica hipotensão
- PAM 50 mmHg é crítica, não deve aguardar

**Pontos-chave para a prova:**
- Hipotensão pós-indução: VOLUME primeiro
- Propofol: vasodilatação > depressão miocárdica
- Vasopressor se volume não resolver
- PAM < 60 mmHg: risco de hipoperfusão orgânica
        `
      }
    ],
    questoesPraticas: [
      {
        enunciado: "Paciente com estenose aórtica grave (área valvar 0,7 cm²). Qual parâmetro hemodinâmico é MAIS importante manter durante anestesia?",
        opcoes: [
          "A) Frequência cardíaca elevada (>100 bpm) para aumentar débito cardíaco",
          "B) Pré-carga adequada e RVS preservada",
          "C) Pós-carga reduzida para facilitar ejeção ventricular",
          "D) Contratilidade aumentada com dobutamina profilática"
        ],
        respostaCorreta: "B",
        explicacao: `
**RESPOSTA: B - Pré-carga adequada e RVS preservada**

**Fisiopatologia da Estenose Aórtica:**
- Obstrução à ejeção do VE
- VE hipertrófico e pouco complacente
- Dependente de pré-carga para manter DC
- Perfusão coronariana ocorre na diástole

**Objetivos Hemodinâmicos (MNEMÔNICO: "SLOW AND FULL"):**

✓ **SLOW (FC baixa/normal):**
- FC ideal: 60-80 bpm
- Taquicardia → ↓ tempo de enchimento diastólico → ↓ VS
- Taquicardia → ↓ perfusão coronariana (diástole curta)

✓ **FULL (pré-carga alta):**
- VE rígido precisa de pressão de enchimento alta
- Hipovolemia → ↓ VS → ↓ DC → hipotensão grave

✓ **RVS normal/alta:**
- Manter pressão de perfusão coronariana
- Vasodilatação → hipotensão catastrófica

✓ **Ritmo sinusal:**
- Contração atrial contribui 20-30% do enchimento
- Fibrilação atrial mal tolerada

✓ **Contratilidade preservada:**
- VE já trabalha contra alta pós-carga
- Evitar depressão miocárdica

**EVITAR (regra dos "3 T's"):**
- **Taquicardia:** ↓ enchimento, ↓ perfusão coronariana
- **hipoTensão:** ↓ perfusão coronariana → isquemia
- **hipovolemia (esvaziar o Tanque):** ↓ pré-carga → colapso

**Análise das opções:**

**A) FC elevada - ERRADO:**
- Taquicardia é DELETÉRIA
- ↓ tempo de enchimento
- ↓ perfusão coronariana
- Pode precipitar isquemia e colapso

**B) Pré-carga adequada e RVS preservada - CORRETO:**
- Mantém enchimento ventricular
- Mantém perfusão coronariana
- Previne hipotensão catastrófica

**C) Pós-carga reduzida - ERRADO:**
- Vasodilatação → hipotensão
- ↓ perfusão coronariana
- Pode causar colapso cardiovascular

**D) Dobutamina profilática - ERRADO:**
- Não é necessária profilaticamente
- Pode causar taquicardia (efeito β1)
- VE já hipertrofiado, contratilidade geralmente preservada

**Manejo Anestésico Prático:**

**Pré-operatório:**
- Avaliar gravidade (eco, cateterismo)
- Otimizar volemia
- Manter medicações (betabloqueador)

**Indução:**
- Etomidato (estabilidade hemodinâmica)
- Evitar propofol (vasodilatação)
- Fentanil (evitar taquicardia na laringoscopia)

**Manutenção:**
- Anestésico inalatório em baixa concentração
- Evitar hiperventilação (↓ RVS)
- Monitorização invasiva (PAM, PVC)

**Tratamento de Hipotensão:**
1. Volume (se hipovolemia)
2. Vasopressor (fenilefrina - ↑ RVS puro)
3. Evitar taquicardia

**Tratamento de Taquicardia:**
1. Aprofundar anestesia
2. Betabloqueador (esmolol)
3. Tratar causa (dor, hipovolemia, anestesia superficial)
        `
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/conteudo">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Conteúdo
            </Button>
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-2">{conteudoDetalhado.area}</Badge>
              <h1 className="text-4xl font-bold mb-2">{conteudoDetalhado.titulo}</h1>
            </div>
          </div>
        </div>

        {/* Tabs de Conteúdo */}
        <Tabs defaultValue="teoria" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="teoria">
              <BookOpen className="w-4 h-4 mr-2" />
              Teoria
            </TabsTrigger>
            <TabsTrigger value="casos">
              <Brain className="w-4 h-4 mr-2" />
              Casos Clínicos
            </TabsTrigger>
            <TabsTrigger value="questoes">
              <FileText className="w-4 h-4 mr-2" />
              Questões
            </TabsTrigger>
          </TabsList>

          {/* Teoria */}
          <TabsContent value="teoria">
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo Teórico Completo</CardTitle>
                <CardDescription>
                  Estudo detalhado com todos os conceitos essenciais para o TSA
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: conteudoDetalhado.teoria.replace(/\n/g, '<br/>') }} />
              </CardContent>
            </Card>

            {/* Pontos-Chave */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Pontos-Chave para Memorizar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {conteudoDetalhado.pontosChave.map((ponto, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{ponto}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Casos Clínicos */}
          <TabsContent value="casos">
            <div className="space-y-6">
              {conteudoDetalhado.casosClinicosExemplo.map((caso, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{caso.titulo}</CardTitle>
                    <CardDescription>Caso clínico para aplicação prática do conhecimento</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        Cenário Clínico
                      </h4>
                      <p className="text-sm">{caso.cenario}</p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Pergunta</h4>
                      <p className="text-sm">{caso.pergunta}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Opções:</h4>
                      {caso.opcoes.map((opcao, opIdx) => (
                        <div 
                          key={opIdx} 
                          className={`p-3 rounded-lg border-2 ${
                            opcao.startsWith(caso.respostaCorreta)
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <p className="text-sm">{opcao}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Explicação Detalhada
                      </h4>
                      <div className="text-sm prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: caso.explicacao.replace(/\n/g, '<br/>') }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Questões Práticas */}
          <TabsContent value="questoes">
            <div className="space-y-6">
              {conteudoDetalhado.questoesPraticas.map((questao, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>Questão {idx + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-medium">{questao.enunciado}</p>
                    </div>

                    <div className="space-y-2">
                      {questao.opcoes.map((opcao, opIdx) => (
                        <div 
                          key={opIdx} 
                          className={`p-3 rounded-lg border-2 ${
                            opcao.startsWith(questao.respostaCorreta)
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <p className="text-sm">{opcao}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Gabarito Comentado
                      </h4>
                      <div className="text-sm prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: questao.explicacao.replace(/\n/g, '<br/>') }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
