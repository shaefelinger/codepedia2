# Markdown

## Basics

```markdown
# Überschrift h1
## Überschrift h2
### Überschrift h3
usw.

**fett**
*kursiv*

`code`

[link](https://)

![image](url)

- Liste
1. Aufzählung

--- Horizontale Linie

Tabelle:
| Header1 | Header2 |
| ------- | ------- |
| Inhalt | Lorem |
| Impsum | usw.  |

Code-Block: 
    ```javascript
        console.log('Hello world')
    ```
```

- [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)
- [https://commonmark.org/help/](https://commonmark.org/help/)
- [https://v2.vuepress.vuejs.org/guide/markdown.html](https://v2.vuepress.vuejs.org/guide/markdown.html)
- [Pandoc Konvertierungs-Tool: pandoc.org/](https://pandoc.org/)

## Bilder einbinden

- [v2.vuepress.vuejs.org/guide/assets.html](https://v2.vuepress.vuejs.org/guide/assets.html)

`/absoluter-pfad`

`./relativer-pfad`

```md
![Example Image](./assets/image.jpeg)
```

![Example Image](./assets/image.jpeg)

## Vuepress-Markdown-Features

### Custom Containers

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

### Seiten-Inhaltsverzeichnis

```md
[[toc]]
```

## Files (download etc.)

Files zum Download werden im Folder `_public` hinterlegt.

### File download

```md
<a href="/files/Das Aprixon Team.pdf" download>Click to Download PDF</a>
```

<a href="/files/Das Aprixon Team.pdf" download>Click to Download PDF</a>

### PDF in neuem Tab öffnen

```md
<a href="/files/Das Aprixon Team.pdf" target="_blank">PDF in neuem Tab öffnen</a>
```

<a href="/files/Das Aprixon Team.pdf" target="_blank">PDF in neuem Tab öffnen</a>

### PDF einbinden

```md
<iframe src="/files/Das Aprixon Team.pdf" width="100%" height="580"></iframe>
```

<iframe src="/files/Das Aprixon Team.pdf" width="100%" height="580"></iframe>
