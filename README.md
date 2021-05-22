This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# CommitLint & Git Hooks
1. Instalar Husky
```bash
npm install husky --save-dev
```
2. Habilitar Git Hooks
```bash
npx husky install
```
3. Habilitar de manera automática los Git Hooks después de una instalación
```bash
npm set-script prepare "husky install"
```
4. Instalar CommitLint
```bash
# Instalar commitlint cli y conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# Para Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configurar commitlint para usar conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Añadir el hook a husky
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# test
echo 'feat(prueba): Esto es una prueba' | ./node_modules/.bin/commitlint 
```