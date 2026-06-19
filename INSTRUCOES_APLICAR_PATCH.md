# Patch NeuroStack — JAB como projeto entregue com prints reais

Este patch corrige a apresentação do Sistema JAB para ficar como projeto entregue, não como produto ofertado.

## Principais ajustes

- Remove menção a Felipe na apresentação pública.
- Mantém a JAB como projeto real entregue pela NeuroStack.
- Remove botão/ideia de “Ver case JAB”.
- Usa prints reais do sistema enviados pelo Gabriel.
- Os prints foram tratados para ocultar dados sensíveis, valores, perfis e informações operacionais estratégicas.
- Mantém o WhatsApp correto: (83) 99313-6252.
- Mantém valores/preços removidos do site.

## Como aplicar

Pare o servidor local com Ctrl + C e depois rode:

```powershell
$projeto = "C:\Users\gabri\OneDrive\Área de Trabalho\Site Neuro"
$patch = "$env:USERPROFILE\Downloads\neurostack_patch_jab_prints_reais.zip"
$backup = "C:\Users\gabri\OneDrive\Área de Trabalho\Site Neuro - backup jab-prints $(Get-Date -Format 'yyyyMMdd-HHmm')"

Copy-Item -Path $projeto -Destination $backup -Recurse
cd $projeto
Expand-Archive -Path $patch -DestinationPath $projeto -Force
Remove-Item $patch
npm run dev
```

Depois testar:

```powershell
npm run build
```
