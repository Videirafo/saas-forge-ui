# Engineering Workflow — SaaS Forge UI

## Perfil
Biblioteca/UI SaaS reutilizável — foco em design system, acessibilidade e estabilidade.

## Fluxo
Necessidade → caso de uso → design → API do componente → implementação → testes → acessibilidade → documentação → review → release.

Cada mudança: **Ler → Compreender → Planejar → Implementar → Testar → Revisar → Corrigir → Commit → Atualizar documentação.**

## Regras
- Reutilização antes de duplicação.
- API de componente previsível e tipada.
- Responsividade e teclado são requisitos.
- Estados loading/error/empty/disabled devem ser definidos.
- Mudanças visuais precisam de validação em tamanhos móveis e desktop.
- Breaking change exige documentação/migração.
- Exemplos devem representar uso real, não apenas aparência.

## Gate
Lint/typecheck/testes/build → acessibilidade/QA visual → preview → review → merge/release.
