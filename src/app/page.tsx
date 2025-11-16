"use client"

import { useState } from "react"
import { 
  BookOpen, 
  Brain, 
  Video, 
  Calendar, 
  Users, 
  FileText, 
  Heart, 
  Bell,
  Trophy,
  Clock,
  Target,
  TrendingUp,
  Play,
  CheckCircle2,
  ArrowRight,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")

  // Dados de exemplo expandidos
  const userProgress = {
    simuladosCompletos: 12,
    questoesRespondidas: 450,
    acertos: 78,
    horasEstudo: 45,
    diasRestantes: 45
  }

  const proximosSimulados = [
    { id: 1, titulo: "Farmacologia Anestésica", questoes: 50, tempo: 90, dificuldade: "Médio" },
    { id: 2, titulo: "Anestesia Regional", questoes: 40, tempo: 75, dificuldade: "Difícil" },
    { id: 3, titulo: "Anestesia Pediátrica", questoes: 45, tempo: 80, dificuldade: "Médio" },
    { id: 4, titulo: "Cirurgia Torácica", questoes: 35, tempo: 70, dificuldade: "Difícil" },
    { id: 5, titulo: "Ginecologia e Obstetrícia", questoes: 40, tempo: 75, dificuldade: "Médio" }
  ]

  const videosRecentes = [
    { id: 1, titulo: "Manejo de Via Aérea Difícil", duracao: "15:30", visualizado: false },
    { id: 2, titulo: "Bloqueios Periféricos", duracao: "22:45", visualizado: true },
    { id: 3, titulo: "Anestesia em Obstetrícia", duracao: "18:20", visualizado: false },
    { id: 4, titulo: "Anestesia para Cirurgia Torácica", duracao: "25:15", visualizado: false },
    { id: 5, titulo: "Transplantes: Considerações Anestésicas", duracao: "30:00", visualizado: false }
  ]

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Target },
    { id: "conteudo", label: "Conteúdo TSA", icon: BookOpen },
    { id: "simulados", label: "Simulados", icon: Brain },
    { id: "questoes", label: "Banco de Questões", icon: BookOpen },
    { id: "videos", label: "Vídeos", icon: Video },
    { id: "agenda", label: "Agenda", icon: Calendar },
    { id: "grupos", label: "Grupos de Estudo", icon: Users },
    { id: "artigos", label: "Artigos", icon: FileText },
    { id: "saude", label: "Saúde Mental", icon: Heart }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case "conteudo":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Conteúdo TSA</h2>
              <p className="text-muted-foreground mt-1">Material completo para todas as especialidades</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  Redirecionando para a página de conteúdo...
                </p>
              </CardContent>
            </Card>
          </div>
        )

      case "dashboard":
        return (
          <div className="space-y-6">
            {/* Header com estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-blue-100">Simulados Completos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{userProgress.simuladosCompletos}</div>
                  <p className="text-xs text-blue-100 mt-1">+3 esta semana</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-green-100">Taxa de Acertos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{userProgress.acertos}%</div>
                  <p className="text-xs text-green-100 mt-1">+5% vs mês anterior</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-purple-100">Horas de Estudo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{userProgress.horasEstudo}h</div>
                  <p className="text-xs text-purple-100 mt-1">Este mês</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-orange-100">Dias para Prova</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{userProgress.diasRestantes}</div>
                  <p className="text-xs text-orange-100 mt-1">Mantenha o ritmo!</p>
                </CardContent>
              </Card>
            </div>

            {/* Progresso Geral - EXPANDIDO COM TODAS AS ÁREAS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Seu Progresso por Área
                </CardTitle>
                <CardDescription>Acompanhe sua evolução em todas as especialidades do TSA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Farmacologia Anestésica</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Regional</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Pediátrica</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Cardiovascular</span>
                    <span className="text-sm text-muted-foreground">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Cirurgia Torácica</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Ginecologia e Obstetrícia</span>
                    <span className="text-sm text-muted-foreground">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Transplantes</span>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Neurológica</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Geriátrica</span>
                    <span className="text-sm text-muted-foreground">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia Ambulatorial</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Dor Aguda e Crônica</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anestesia em Urgências</span>
                    <span className="text-sm text-muted-foreground">83%</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Próximos Simulados */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Próximos Simulados
                  </CardTitle>
                  <CardDescription>Continue praticando com simulados especializados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {proximosSimulados.map((simulado) => (
                    <div key={simulado.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{simulado.titulo}</h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {simulado.questoes} questões
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {simulado.tempo} min
                          </span>
                          <Badge variant={simulado.dificuldade === "Difícil" ? "destructive" : "secondary"} className="text-xs">
                            {simulado.dificuldade}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="ml-3">
                        Iniciar
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Vídeos Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-600" />
                    Vídeos Recomendados
                  </CardTitle>
                  <CardDescription>Continue aprendendo com especialistas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {videosRecentes.map((video) => (
                    <div key={video.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                          <Play className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{video.titulo}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">{video.duracao}</span>
                            {video.visualizado && (
                              <CheckCircle2 className="w-3 h-3 text-green-600" />
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Lembretes e Notificações */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  Lembretes de Hoje
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Revisão de Farmacologia</p>
                    <p className="text-xs text-muted-foreground">Agendado para 14:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Users className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Grupo de Estudo - Anestesia Regional</p>
                    <p className="text-xs text-muted-foreground">Reunião às 19:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "simulados":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold">Simulados</h2>
                <p className="text-muted-foreground mt-1">Pratique com provas anteriores do TSA - Todas as especialidades</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Trophy className="w-4 h-4 mr-2" />
                Novo Simulado
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { titulo: "TSA 2023 - Completo", questoes: 100, tempo: 180, status: "Disponível", cor: "blue" },
                { titulo: "TSA 2022 - Completo", questoes: 100, tempo: 180, status: "Concluído", cor: "green" },
                { titulo: "Farmacologia Avançada", questoes: 50, tempo: 90, status: "Disponível", cor: "purple" },
                { titulo: "Anestesia Regional", questoes: 40, tempo: 75, status: "Em Andamento", cor: "orange" },
                { titulo: "Anestesia Pediátrica", questoes: 45, tempo: 80, status: "Disponível", cor: "pink" },
                { titulo: "Cirurgia Torácica", questoes: 35, tempo: 70, status: "Disponível", cor: "indigo" },
                { titulo: "Ginecologia e Obstetrícia", questoes: 40, tempo: 75, status: "Disponível", cor: "rose" },
                { titulo: "Transplantes", questoes: 30, tempo: 60, status: "Disponível", cor: "teal" },
                { titulo: "Anestesia Cardiovascular", questoes: 45, tempo: 85, status: "Disponível", cor: "red" },
                { titulo: "Anestesia Neurológica", questoes: 38, tempo: 70, status: "Disponível", cor: "cyan" },
                { titulo: "Anestesia Geriátrica", questoes: 35, tempo: 65, status: "Disponível", cor: "amber" },
                { titulo: "Anestesia Ambulatorial", questoes: 30, tempo: 55, status: "Disponível", cor: "lime" },
                { titulo: "Dor Aguda e Crônica", questoes: 40, tempo: 75, status: "Disponível", cor: "violet" },
                { titulo: "Anestesia em Urgências", questoes: 42, tempo: 80, status: "Disponível", cor: "fuchsia" },
                { titulo: "Casos Clínicos Complexos", questoes: 30, tempo: 60, status: "Disponível", cor: "emerald" }
              ].map((simulado, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{simulado.titulo}</CardTitle>
                      <Badge variant={simulado.status === "Concluído" ? "default" : simulado.status === "Em Andamento" ? "secondary" : "outline"}>
                        {simulado.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {simulado.questoes} questões
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {simulado.tempo} min
                      </span>
                    </div>
                    {simulado.status === "Concluído" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Seu desempenho</span>
                          <span className="font-bold text-green-600">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                    )}
                    {simulado.status === "Em Andamento" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso</span>
                          <span className="font-bold">15/40</span>
                        </div>
                        <Progress value={37.5} className="h-2" />
                      </div>
                    )}
                    <Button className="w-full" variant={simulado.status === "Concluído" ? "outline" : "default"}>
                      {simulado.status === "Concluído" ? "Ver Gabarito" : simulado.status === "Em Andamento" ? "Continuar" : "Iniciar"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "questoes":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Banco de Questões Completo</h2>
              <p className="text-muted-foreground mt-1">Estude por todas as especialidades do TSA</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tema: "Farmacologia Anestésica", total: 450, respondidas: 320, acertos: 85 },
                { tema: "Anestesia Regional", total: 380, respondidas: 210, acertos: 72 },
                { tema: "Anestesia Pediátrica", total: 320, respondidas: 180, acertos: 78 },
                { tema: "Anestesia Cardiovascular", total: 290, respondidas: 250, acertos: 91 },
                { tema: "Cirurgia Torácica", total: 280, respondidas: 150, acertos: 65 },
                { tema: "Ginecologia e Obstetrícia", total: 340, respondidas: 220, acertos: 78 },
                { tema: "Transplantes", total: 250, respondidas: 110, acertos: 58 },
                { tema: "Anestesia Neurológica", total: 260, respondidas: 140, acertos: 70 },
                { tema: "Anestesia Geriátrica", total: 230, respondidas: 120, acertos: 62 },
                { tema: "Anestesia Ambulatorial", total: 270, respondidas: 190, acertos: 80 },
                { tema: "Dor Aguda e Crônica", total: 340, respondidas: 200, acertos: 75 },
                { tema: "Anestesia em Urgências", total: 310, respondidas: 220, acertos: 83 },
                { tema: "Monitorização Anestésica", total: 200, respondidas: 130, acertos: 77 },
                { tema: "Ventilação Mecânica", total: 220, respondidas: 150, acertos: 81 },
                { tema: "Farmacologia Clínica", total: 380, respondidas: 280, acertos: 88 },
                { tema: "Anestesia em Cirurgia Plástica", total: 180, respondidas: 90, acertos: 68 }
              ].map((tema, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{tema.tema}</span>
                      <Badge>{tema.total} questões</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium">{tema.respondidas}/{tema.total}</span>
                      </div>
                      <Progress value={(tema.respondidas / tema.total) * 100} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm text-muted-foreground">Taxa de acertos</span>
                      <span className="text-lg font-bold text-green-600">{tema.acertos}%</span>
                    </div>
                    <Button className="w-full">
                      Estudar Tema
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "videos":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Vídeos Educativos</h2>
              <p className="text-muted-foreground mt-1">Aprenda com especialistas em todas as áreas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { titulo: "Manejo de Via Aérea Difícil", duracao: "15:30", categoria: "Técnicas", novo: true },
                { titulo: "Bloqueios Periféricos", duracao: "22:45", categoria: "Anestesia Regional", novo: false },
                { titulo: "Anestesia em Obstetrícia", duracao: "18:20", categoria: "Ginecologia e Obstetrícia", novo: true },
                { titulo: "Farmacologia dos Opioides", duracao: "25:15", categoria: "Farmacologia", novo: false },
                { titulo: "Anestesia Pediátrica", duracao: "20:30", categoria: "Pediatria", novo: false },
                { titulo: "Monitorização Avançada", duracao: "17:45", categoria: "Técnicas", novo: true },
                { titulo: "Anestesia para Cirurgia Torácica", duracao: "28:00", categoria: "Cirurgia Torácica", novo: true },
                { titulo: "Transplantes: Considerações Anestésicas", duracao: "32:15", categoria: "Transplantes", novo: true },
                { titulo: "Anestesia Cardiovascular", duracao: "26:40", categoria: "Cardiovascular", novo: false },
                { titulo: "Anestesia Neurológica", duracao: "24:20", categoria: "Neurologia", novo: false },
                { titulo: "Anestesia Geriátrica", duracao: "19:50", categoria: "Geriatria", novo: true },
                { titulo: "Dor Aguda: Manejo Multimodal", duracao: "21:30", categoria: "Dor", novo: false },
                { titulo: "Anestesia em Urgências", duracao: "23:10", categoria: "Urgências", novo: true },
                { titulo: "Ventilação Mecânica Avançada", duracao: "27:45", categoria: "Técnicas", novo: false },
                { titulo: "Anestesia Ambulatorial", duracao: "16:20", categoria: "Ambulatorial", novo: false }
              ].map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                    {video.novo && (
                      <Badge className="absolute top-2 right-2 bg-red-600">Novo</Badge>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duracao}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base">{video.titulo}</CardTitle>
                    <CardDescription>{video.categoria}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Assistir Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "agenda":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Agenda de Estudos</h2>
              <p className="text-muted-foreground mt-1">Organize seu tempo de preparação para todas as áreas</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cronograma Semanal Completo</CardTitle>
                <CardDescription>Planeje suas atividades de estudo cobrindo todas as especialidades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { dia: "Segunda-feira", atividades: ["Farmacologia - 2h", "Simulado Cardiovascular - 1h30", "Revisão Cirurgia Torácica - 1h"] },
                  { dia: "Terça-feira", atividades: ["Anestesia Regional - 2h", "Vídeos Transplantes - 1h", "Questões Ginecologia - 1h30"] },
                  { dia: "Quarta-feira", atividades: ["Revisão de Questões - 2h", "Grupo de Estudo Obstetrícia - 1h", "Dor Aguda - 1h"] },
                  { dia: "Quinta-feira", atividades: ["Anestesia Pediátrica - 2h", "Simulado Neurológica - 1h30", "Urgências - 1h"] },
                  { dia: "Sexta-feira", atividades: ["Casos Clínicos - 2h", "Artigos Geriátrica - 1h", "Ventilação Mecânica - 1h30"] },
                  { dia: "Sábado", atividades: ["Simulado Completo TSA - 3h", "Revisão Ambulatorial - 2h", "Monitorização - 1h"] },
                  { dia: "Domingo", atividades: ["Descanso e Revisão Leve - 1h", "Saúde Mental - 30min"] }
                ].map((dia, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <h4 className="font-semibold mb-2">{dia.dia}</h4>
                    <div className="space-y-1">
                      {dia.atividades.map((atividade, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {atividade}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )

      case "grupos":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold">Grupos de Estudo</h2>
                <p className="text-muted-foreground mt-1">Conecte-se com outros estudantes em todas as especialidades</p>
              </div>
              <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                <Users className="w-4 h-4 mr-2" />
                Criar Grupo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { nome: "Anestesia Regional Avançada", membros: 24, ativo: true, proxima: "Hoje às 19:00" },
                { nome: "Farmacologia TSA", membros: 18, ativo: true, proxima: "Amanhã às 20:00" },
                { nome: "Casos Clínicos Complexos", membros: 15, ativo: false, proxima: "Sábado às 10:00" },
                { nome: "Anestesia Pediátrica", membros: 21, ativo: true, proxima: "Sexta às 18:00" },
                { nome: "Cirurgia Torácica", membros: 12, ativo: true, proxima: "Quarta às 19:30" },
                { nome: "Ginecologia e Obstetrícia", membros: 19, ativo: true, proxima: "Quinta às 20:00" },
                { nome: "Transplantes", membros: 10, ativo: false, proxima: "Domingo às 15:00" },
                { nome: "Anestesia Cardiovascular", membros: 16, ativo: true, proxima: "Terça às 19:00" },
                { nome: "Dor Aguda e Crônica", membros: 14, ativo: false, proxima: "Sábado às 14:00" },
                { nome: "Anestesia em Urgências", membros: 20, ativo: true, proxima: "Segunda às 18:30" }
              ].map((grupo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{grupo.nome}</CardTitle>
                      {grupo.ativo && (
                        <Badge variant="default" className="bg-green-600">Ativo</Badge>
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Users className="w-4 h-4" />
                      {grupo.membros} membros
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-medium">Próxima reunião</p>
                      <p className="text-sm text-muted-foreground">{grupo.proxima}</p>
                    </div>
                    <Button className="w-full" variant="outline">
                      Entrar no Grupo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "artigos":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Artigos e Referências</h2>
              <p className="text-muted-foreground mt-1">Material complementar para todas as especialidades</p>
            </div>

            <div className="space-y-4">
              {[
                { titulo: "Diretrizes de Anestesia Cardiovascular 2024", categoria: "Diretrizes", data: "15/03/2024" },
                { titulo: "Manejo de Via Aérea Difícil - Revisão Sistemática", categoria: "Revisão", data: "10/03/2024" },
                { titulo: "Bloqueios Regionais em Pediatria", categoria: "Técnicas", data: "05/03/2024" },
                { titulo: "Farmacologia dos Novos Anestésicos", categoria: "Farmacologia", data: "28/02/2024" },
                { titulo: "Anestesia em Obstetrícia - Casos Especiais", categoria: "Ginecologia e Obstetrícia", data: "20/02/2024" },
                { titulo: "Anestesia para Cirurgia Torácica: Atualização", categoria: "Cirurgia Torácica", data: "15/02/2024" },
                { titulo: "Transplantes: Manejo Anestésico Perioperatório", categoria: "Transplantes", data: "10/02/2024" },
                { titulo: "Anestesia Neurológica: Novas Evidências", categoria: "Neurologia", data: "05/02/2024" },
                { titulo: "Anestesia Geriátrica: Considerações Especiais", categoria: "Geriatria", data: "01/02/2024" },
                { titulo: "Dor Aguda: Abordagem Multimodal", categoria: "Dor", data: "25/01/2024" },
                { titulo: "Anestesia em Urgências: Protocolos Atualizados", categoria: "Urgências", data: "20/01/2024" },
                { titulo: "Ventilação Mecânica: Estratégias Protetoras", categoria: "Técnicas", data: "15/01/2024" }
              ].map((artigo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base">{artigo.titulo}</CardTitle>
                        <CardDescription className="mt-1">
                          <Badge variant="outline" className="mr-2">{artigo.categoria}</Badge>
                          <span className="text-xs">{artigo.data}</span>
                        </CardDescription>
                      </div>
                      <Button size="sm" variant="ghost">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )

      case "saude":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Saúde Mental</h2>
              <p className="text-muted-foreground mt-1">Cuide do seu bem-estar durante a preparação intensa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-green-600" />
                    Técnicas de Relaxamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Respiração Profunda</h4>
                    <p className="text-xs text-muted-foreground">5 minutos de prática diária</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Meditação Guiada</h4>
                    <p className="text-xs text-muted-foreground">10 minutos antes de dormir</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Exercícios Físicos</h4>
                    <p className="text-xs text-muted-foreground">30 minutos, 3x por semana</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Gerenciamento de Estresse
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Organize seu Tempo</h4>
                    <p className="text-xs text-muted-foreground">Use a agenda para evitar sobrecarga</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Pausas Regulares</h4>
                    <p className="text-xs text-muted-foreground">Descanse a cada 50 minutos de estudo</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Sono Adequado</h4>
                    <p className="text-xs text-muted-foreground">7-8 horas por noite</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200">
              <CardHeader>
                <CardTitle>Dicas Importantes para o TSA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">✓ Mantenha uma rotina de sono regular</p>
                <p className="text-sm">✓ Alimente-se de forma saudável</p>
                <p className="text-sm">✓ Reserve tempo para lazer e família</p>
                <p className="text-sm">✓ Não hesite em buscar ajuda profissional se necessário</p>
                <p className="text-sm">✓ Celebre suas conquistas, mesmo as pequenas</p>
                <p className="text-sm">✓ Lembre-se: você está se preparando para uma prova renomada</p>
                <p className="text-sm">✓ Confie no seu processo de estudo</p>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Apoio TSA
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Preparação Completa para Anestesiologia</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Sidebar - Mobile */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)}>
              <div className="bg-white dark:bg-gray-800 w-64 h-full p-4" onClick={(e) => e.stopPropagation()}>
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id)
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}
