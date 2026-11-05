import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
// import readline from 'readline'

// Parser le contenu json
const contenu = JSON.parse(readFileSync('track.json', 'utf-8'))

// Constante pour le dossier racine
const dossierProjets = join(homedir(), 'documents', 'ada', 'ada-tech', 'bloc1', 'projets')
