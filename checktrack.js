import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import readline from 'readline'

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

// Lancer la vérification des fichiers
let correct = 0
const lancerVerification = () => {
    console.log("")

    // Seulement si absence du dossier parent
    if (!existsSync(dossierProjets)) {
        console.log('❌ Dossier projets inexistant')
        console.log("")
        return
    }

    const projects = contenu.projects
    
    projects.forEach((project) => {
        // Afficher le nom du projet
        const nomProjet = join(dossierProjets, project.name)
        const listeErreurs = verifierErreur(project, nomProjet)

        // Affichage si tout est présent
        if (listeErreurs.length === 0) {
            console.log(`✅ ${project.name} est valide`)
            console.log("")
            correct ++
        
        // Affichage des erreurs listées
        } else {
            console.log(`❌ ${project.name} en défaut`)
            listeErreurs.forEach((erreur) => console.log(`- ${erreur}`))
            console.log("")
        }
    })
}

// Pourcentage d'éléments présents
const erreurPourcent = (projetsCorrects) => {
    const total = contenu.projects.length
    const pourcentage = Math.round(projetsCorrects * 100/ total)
    console.log(`${pourcentage}% des projets sont initialisés correctement - (${projetsCorrects}/${total})`)
}

// Demande à l'utilisateur l'analyse
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Vérifier les fichiers ? (o/n ) : ', (reponse) => {
    if (reponse.trim().toLowerCase() === 'o') {
        lancerVerification()
        erreurPourcent(correct)
    } else {
        console.log('Fin de la fonction vérification')
    }
    rl.close()
})