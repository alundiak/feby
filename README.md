# Feby

Test prj for play with NPM Registry

## Publish

Doesn't work:
```
npm publish feby
```

Works:
```
npm publish
npm publish --access public
```

## Unpublish

```
npm unpublish feby@1.0.7
npm unpublish feby@1.0.8
```

Note: If only one valid version used, that version can b unpublished as above command. 
Need to publish new version, and then unpublish previous, but with such way:

## Remove tags

```
git tag -d 1.0.7 && git push origin :refs/tags/1.0.7
git tag -d 1.0.8 && git push origin :refs/tags/1.0.8
```
