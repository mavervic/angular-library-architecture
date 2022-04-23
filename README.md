# Learing The Best Way To Architect Your Angular Libraries
Ref: https://www.youtube.com/watch?v=2vHJ3_Om_gU

Create projects
```
ng g library some-lib
ng g application showcase
```

Create modules in library
```
ng g m library-a
ng g m library-b
ng g m library-c

ng g c library-a/a
ng g c library-b/b
ng g c library-c/c
```

Create lazy modules in application
```
ng g m features/lazy-a --route a --module app.module.ts --project showcase
ng g m features/lazy-b --route b --module app.module.ts --project showcase
ng g m features/lazy-c --route c --module app.module.ts --project showcase
```

auto build whild library are saving
```
ng build --watch
```

Show chunks
```
ng build --named-chunks --output-hashing=none --project showcase
```


# Other Best Practices - Imports
* NEVER import modules which bring services / set up some processing, eg `BrowserModule`, `MyOrgTranslationsModule`.

* Such modules, if needed, will be provided by the consumer SPA (or inline library showcase SPA).

* Modules which provide `.forChild()` usually work just fine.

* Modules which only bring components / directives / pipes are OK.
