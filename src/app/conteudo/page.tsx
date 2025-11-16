"use client"

import { useState } from "react"
import { Book, ChevronDown, ChevronRight, FileText, Brain, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConteudoPage() {
  const [areaAtiva, setAreaAtiva] = useState<string | null>(null)

  const areasConteudo = [
    {
      id: "fisiologia",
      titulo: "1. Fisiologia Aplicada à Anestesia",
      corClasses: "bg-gradient-to-r from-blue-500 to-blue-600",
      topicos: [
        {
          subtitulo: "Cardiovascular",
          itens: [
            "Débito cardíaco e suas determinantes",
            "Autorregulação, pré e pós-carga",
            "Pressão arterial e controle autonômico",
            "Fisiologia do choque"
          ]
        },
        {
          subtitulo: "Respiratória",
          itens: [
            "Ventilação, perfusão e relação V/Q",
            "Curva de dissociação da hemoglobina",
            "Controle neural da respiração",
            "Mecânica ventilatória"
          ]
        },
        {
          subtitulo: "Renal",
          itens: [
            "Função renal e equilíbrio ácido-base",
            "Tabela Henderson-Hasselbalch",
            "Reposição volêmica e função renal perioperatória"
          ]
        },
        {
          subtitulo: "Sistema Nervoso",
          itens: [
            "Neurotransmissores e fisiologia da dor",
            "Termorregulação"
          ]
        }
      ]
    },
    {
      id: "farmacologia",
      titulo: "2. Farmacologia Anestésica",
      corClasses: "bg-gradient-to-r from-purple-500 to-purple-600",
      topicos: [
        {
          subtitulo: "Anestésicos Gerais IV",
          itens: [
            "Propofol, etomidato, cetamina, barbitúricos",
            "Farmacocinética/dinâmica, efeitos colaterais"
          ]
        },
        {
          subtitulo: "Anestésicos Inalatórios",
          itens: [
            "CAM, coeficiente sangue/gás",
            "Halogenados: sevoflurano, isoflurano, desflurano",
            "Efeitos em hemodinâmica e ventilação"
          ]
        },
        {
          subtitulo: "Opioides",
          itens: [
            "Fentanil, remifentanil, sufentanil",
            "Tolerância, hiperalgesia, antagonistas (naloxona)"
          ]
        },
        {
          subtitulo: "Bloqueadores Neuromusculares",
          itens: [
            "Não despolarizantes e despolarizantes",
            "Sugamadex e neostigmina",
            "Monitorização da placa motora"
          ]
        },
        {
          subtitulo: "Antagonistas e Adjuvantes",
          itens: [
            "Benzodiazepínicos, dexmedetomidina, clonidina",
            "Antieméticos"
          ]
        }
      ]
    },
    {
      id: "especialidades",
      titulo: "3. Conduta Anestésica por Especialidade",
      corClasses: "bg-gradient-to-r from-green-500 to-green-600",
      topicos: [
        {
          subtitulo: "Anestesia em Cirurgia Geral",
          itens: [
            "Indução rápida, via aérea difícil",
            "Hemodinâmica básica"
          ]
        },
        {
          subtitulo: "Anestesia Obstétrica",
          itens: [
            "Analgesia de parto",
            "Anestesia para cesárea",
            "Toxicidade por anestésicos locais",
            "Pré-eclâmpsia, HELLP, hemorragia obstétrica"
          ]
        },
        {
          subtitulo: "Anestesia Pediátrica",
          itens: [
            "Particularidades fisiológicas",
            "Doses e farmacocinética",
            "Vias aéreas pediátricas e riscos"
          ]
        },
        {
          subtitulo: "Anestesia Cardíaca",
          itens: [
            "CEC, anticoagulação, reperfusão",
            "Manejo hemodinâmico avançado"
          ]
        },
        {
          subtitulo: "Anestesia para Trauma",
          itens: [
            "ATLS e prioridades",
            "Hemodinâmica, transfusão maciça",
            "Indução em sequência rápida"
          ]
        },
        {
          subtitulo: "Neuroanestesia",
          itens: [
            "PIC, PPC, manejo de TCE",
            "Ventilação, osmoterapia"
          ]
        },
        {
          subtitulo: "Anestesia para Cirurgia Torácica",
          itens: [
            "Ventilação monopulmonar",
            "Intubação seletiva",
            "Manejo hemodinâmico"
          ]
        },
        {
          subtitulo: "Anestesia em Ginecologia",
          itens: [
            "Laparoscopia ginecológica",
            "Cirurgias oncológicas",
            "Particularidades"
          ]
        },
        {
          subtitulo: "Anestesia para Transplantes",
          itens: [
            "Transplante hepático",
            "Transplante renal",
            "Transplante cardíaco",
            "Manejo perioperatório"
          ]
        },
        {
          subtitulo: "Anestesia Bariátrica",
          itens: [
            "Obesidade mórbida",
            "Via aérea difícil",
            "Complicações"
          ]
        }
      ]
    },
    {
      id: "monitorizacao",
      titulo: "4. Monitorização e Tecnologia",
      corClasses: "bg-gradient-to-r from-orange-500 to-orange-600",
      topicos: [
        {
          subtitulo: "Monitorização Básica e Avançada",
          itens: [
            "ECG, pressão invasiva",
            "Acesso venoso e arterial",
            "Capnografia, gasometria arterial",
            "BIS/EEG",
            "Ecocardiografia focada (POCUS básico)"
          ]
        },
        {
          subtitulo: "Ventilação Mecânica",
          itens: [
            "Modos ventilatórios",
            "Ajustes e parâmetros",
            "Leitura de curvas"
          ]
        }
      ]
    },
    {
      id: "regional",
      titulo: "5. Anestesia Regional",
      corClasses: "bg-gradient-to-r from-teal-500 to-teal-600",
      topicos: [
        {
          subtitulo: "Técnicas do Neuroeixo",
          itens: [
            "Raquianestesia e peridural",
            "Farmacologia dos anestésicos locais",
            "Complicações (hematoma, abscesso, toxicidade)"
          ]
        },
        {
          subtitulo: "Bloqueios Periféricos",
          itens: [
            "Membros superiores",
            "Membros inferiores",
            "Bloqueios de tronco",
            "Uso de ultrassom (anatomia, volumes, complicações)"
          ]
        }
      ]
    },
    {
      id: "emergencias",
      titulo: "6. Emergências Anestésicas",
      corClasses: "bg-gradient-to-r from-red-500 to-red-600",
      topicos: [
        {
          subtitulo: "Emergências Críticas",
          itens: [
            "Hipertermia maligna",
            "Anafilaxia",
            "LRA perianestésica",
            "Embolia gasosa",
            "Intubação impossível / ventilação impossível",
            "PCR intraoperatória e fluxo de atendimento",
            "Crises hipertensivas e arritmias"
          ]
        }
      ]
    },
    {
      id: "seguranca",
      titulo: "7. Segurança, Diretrizes e Protocolos",
      corClasses: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      topicos: [
        {
          subtitulo: "Protocolos de Segurança",
          itens: [
            "Checklist de cirurgia segura",
            "Jejum pré-operatório",
            "Profilaxia antibiótica",
            "Manuseio de anticoagulantes",
            "Reposição volêmica, tipos de fluidos, transfusão"
          ]
        }
      ]
    },
    {
      id: "pacientes-especiais",
      titulo: "8. Pacientes Especiais",
      corClasses: "bg-gradient-to-r from-pink-500 to-pink-600",
      topicos: [
        {
          subtitulo: "Comorbidades e Condições Especiais",
          itens: [
            "ASA III-IV",
            "Cirrose, insuficiência renal, cardiopatia",
            "Doenças neuromusculares",
            "Paciente séptico",
            "Idoso e frágil"
          ]
        }
      ]
    },
    {
      id: "dor-pos-op",
      titulo: "9. Ética, Controle de Dor e Cuidados Pós-operatórios",
      corClasses: "bg-gradient-to-r from-violet-500 to-violet-600",
      topicos: [
        {
          subtitulo: "Manejo da Dor",
          itens: [
            "Manejo multimodal da dor",
            "Opioides no pós-operatório",
            "Analgesia em populações especiais",
            "Sedação em UTI"
          ]
        }
      ]
    },
    {
      id: "pratica-prova",
      titulo: "10. Questões Práticas da Prova",
      corClasses: "bg-gradient-to-r from-amber-500 to-amber-600",
      topicos: [
        {
          subtitulo: "Preparação para Prova Escrita",
          itens: [
            "Casos clínicos",
            "Integração fisiologia + farmacologia + conduta",
            "Raciocínio aplicado"
          ]
        },
        {
          subtitulo: "Preparação para Prova Oral/Prática",
          itens: [
            "Apresentação de caso",
            "Manejo de complicações",
            "Conduta em situações críticas"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Conteúdo Completo TSA</h1>
          <p className="text-muted-foreground">
            Todo o conteúdo programático do Título Superior em Anestesiologia organizado e detalhado
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {areasConteudo.map((area) => (
            <Card key={area.id} className="overflow-hidden">
              <CardHeader className={`${area.corClasses} text-white`}>
                <CardTitle className="flex items-center gap-3">
                  <Book className="w-6 h-6" />
                  {area.titulo}
                </CardTitle>
                <CardDescription className="text-white/90">
                  Clique para expandir e ver todos os tópicos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {area.topicos.map((topico, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg font-semibold">
                        {topico.subtitulo}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4">
                          {topico.itens.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2 py-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            Ver Teoria Completa
                          </Button>
                          <Button size="sm" variant="outline">
                            <Brain className="w-4 h-4 mr-2" />
                            Praticar Questões
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Card de Estatísticas */}
        <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200">
          <CardHeader>
            <CardTitle>Seu Progresso no Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">10</div>
                <div className="text-sm text-muted-foreground">Áreas Principais</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-green-600">45+</div>
                <div className="text-sm text-muted-foreground">Subtópicos</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-muted-foreground">Itens de Conteúdo</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
