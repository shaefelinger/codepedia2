# Codepedia

My little Coding-Reference

## Info

- Diese Seite ist mit [Vuepress 2](https://v2.vuepress.vuejs.org/) erstellt.
- Die Texte werden in (erweitertem) [Markdown](./general/markdown.html) geschrieben

## Benutzung

Alle Ordner und Files im Folder `/docs` erzeugen automatisch einen entsprechenden Pfad:

- zB `/frontend/styleguide.md` -> ergibt die URL `.../frontend/styleguide`
- im File ``navigation.js`` muss dann nur noch der entsprechende Pfad hinterlegt werden:

```js
export const navbar = [ 
  // ...
  {
    text: 'Frontend',
    children:  [
        // ...
      { text: 'Styleguide', link: '/frontend/styleguide'}
    ]
  }   
]
```

## Files

- Im Ordner `_public` können Public-Files und Images zB für Download hinterlegt werden
- Bilder für die einzelnen Seiten bei dem jeweiligen Thema in einem Ordner `/assets` hinterlegen
  [(Beispiel)](./general/markdown.html#bilder-einbinden)
