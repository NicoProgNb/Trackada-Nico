import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
// import readline from 'readline'

// Parser le contenu json
const contenu = JSON.parse(readFileSync('track.json', 'utf-8'))

// Constante pour le dossier racine
const dossierProjets = join(homedir(), 'documents', 'ada', 'ada-tech', 'bloc1', 'projets')

// Lister erreurs (Prend le chemin du projet en paramètre)
const verifierErreur = (projet, nomProjet) => {
    const erreursArray = [] 

    // Absence du dossier du projet
    if (!existsSync(nomProjet)) {
        erreursArray.push(`${projet.name} n'existe pas dans ce dossier`)
        return erreursArray 
    }

    // Absence du dépôt .git
    if (!existsSync(join(nomProjet, '.git'))) {
        erreursArray.push(`Repository git non initialisé pour ${projet.name}`)
    }

    // Fichiers manquants dans un tableau
    const manquantArray = []
    projet.required.forEach((fichier) => {
        if (!existsSync(join(nomProjet, fichier))) {
            manquantArray.push(fichier)
        }
    })

    // Formater manquantArray en CHAR 
    const formaterListe = (manquantArray) => {
        if (manquantArray.length === 1) {
            return manquantArray[0]
        }
        const debut = manquantArray.slice(0, -1).join(", ")
        const dernier = manquantArray[manquantArray.length-1]
        return `${debut} et ${dernier}`
    }

    // Affichage des fichiers manquants
    if (manquantArray.length > 0) {
        erreursArray.push(`Fichiers manquants : ${formaterListe(manquantArray)}`)
    }
    return erreursArray
}
