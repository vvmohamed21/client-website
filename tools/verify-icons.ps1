Add-Type -AssemblyName System.Drawing
$Root = Split-Path -Parent $PSScriptRoot
$files = @('favicon.ico', 'favicon-32.png', 'favicon-192.png', 'favicon-512.png', 'apple-touch-icon.png')
foreach ($f in $files) {
  $path = Join-Path $Root $f
  $b = [System.IO.File]::ReadAllBytes($path)
  $magic = ($b[0..3] | ForEach-Object { $_.ToString('X2') }) -join ' '
  $img = [System.Drawing.Image]::FromFile($path)
  Write-Output ('{0} | {1} bytes | magic: {2} | {3}x{4}' -f $f, $b.Length, $magic, $img.Width, $img.Height)
  $img.Dispose()
}
