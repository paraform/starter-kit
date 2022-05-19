# Tailwind variants component library

• Tailwind
• Ladle

## Getting STarted

`yarn`

`yarn ladle`

## IntelliSense

For intelliSense in VsCode add the following to `settings.json`

```
  "tailwindCSS.experimental.classRegex": [
    ["/\\*tw\\*/ ([^;]*);", "[\"'`]([^\"'`]*).*?[\"'`]", "'([^']*)'"]
  ]
```

Then add `/*tw*/` before `variants({})`
