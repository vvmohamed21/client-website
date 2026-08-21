Add-Type -AssemblyName System.Drawing

$Root = Split-Path -Parent $PSScriptRoot
$Navy = [System.Drawing.Color]::FromArgb(11, 30, 54)
$Blue = [System.Drawing.Color]::FromArgb(51, 153, 255)

function New-RoundedPath([float]$Size, [float]$Radius) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = 2 * $Radius
  $path.AddArc(0, 0, $d, $d, 180, 90)
  $path.AddArc($Size - $d, 0, $d, $d, 270, 90)
  $path.AddArc($Size - $d, $Size - $d, $d, $d, 0, 90)
  $path.AddArc(0, $Size - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-BrandIcon([int]$Size) {
  $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $p1 = New-Object System.Drawing.PointF -ArgumentList 0, 0
  $p2 = New-Object System.Drawing.PointF -ArgumentList $Size, $Size
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $p1, $p2, $Navy, $Blue

  $radius = $Size * 0.22
  $path = New-RoundedPath $Size $radius
  $g.FillPath($brush, $path)

  $fontSize = $Size * 0.60
  $font = New-Object System.Drawing.Font('Georgia', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $box = New-Object System.Drawing.RectangleF -ArgumentList 0, ($Size * 0.02), $Size, $Size
  $g.DrawString('A', $font, [System.Drawing.Brushes]::White, $box, $format)

  $g.Dispose()
  return $bmp
}

foreach ($s in @(32, 192, 512)) {
  $icon = New-BrandIcon $s
  $icon.Save((Join-Path $Root "favicon-$s.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $icon.Dispose()
}

$apple = New-BrandIcon 180
$apple.Save((Join-Path $Root 'apple-touch-icon.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$apple.Dispose()

$sizes = @(16, 32, 48)
$pngs = @()
foreach ($s in $sizes) {
  $icon = New-BrandIcon $s
  $ms = New-Object System.IO.MemoryStream
  $icon.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $pngs += , $ms.ToArray()
  $ms.Dispose()
  $icon.Dispose()
}

$ico = [System.IO.MemoryStream]::new()
$writer = New-Object System.IO.BinaryWriter($ico)
$writer.Write([uint16]0)
$writer.Write([uint16]1)
$writer.Write([uint16]$sizes.Count)
$offset = 6 + 16 * $sizes.Count
for ($i = 0; $i -lt $sizes.Count; $i++) {
  $s = $sizes[$i]
  $writer.Write([byte]($(if ($s -ge 256) { 0 } else { $s })))
  $writer.Write([byte]($(if ($s -ge 256) { 0 } else { $s })))
  $writer.Write([byte]0)
  $writer.Write([byte]0)
  $writer.Write([uint16]1)
  $writer.Write([uint16]32)
  $writer.Write([uint32]$pngs[$i].Length)
  $writer.Write([uint32]$offset)
  $offset += $pngs[$i].Length
}
foreach ($png in $pngs) {
  $writer.Write($png)
}
$writer.Flush()
[System.IO.File]::WriteAllBytes((Join-Path $Root 'favicon.ico'), $ico.ToArray())
$writer.Dispose()

Write-Output 'Icons generated.'
