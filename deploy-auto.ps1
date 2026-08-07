$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "Remote 'origin' nao foi encontrado. Configure o GitHub primeiro."
    exit 1
}

$changes = git status --porcelain
if (-not $changes) {
    Write-Host "Nao ha alteracoes pendentes para commit."
    exit 0
}

$defaultMessage = "Deploy automatico"
$commitMessage = Read-Host "Mensagem do commit [$defaultMessage]"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = $defaultMessage
}

git add .
git commit -m $commitMessage
git push origin HEAD

Write-Host "Deploy concluido com sucesso."
