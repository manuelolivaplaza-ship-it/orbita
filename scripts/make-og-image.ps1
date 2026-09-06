Add-Type -AssemblyName System.Drawing

$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.Clear([System.Drawing.Color]::FromArgb(247, 248, 252))

$ink = [System.Drawing.Color]::FromArgb(11, 11, 18)
$muted = [System.Drawing.Color]::FromArgb(82, 82, 91)
$brushInk = New-Object System.Drawing.SolidBrush $ink
$brushMuted = New-Object System.Drawing.SolidBrush $muted

$fontBrand = New-Object System.Drawing.Font("Segoe UI", 28.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontTitle = New-Object System.Drawing.Font("Segoe UI", 64.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontSub = New-Object System.Drawing.Font("Segoe UI", 28.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontUrl = New-Object System.Drawing.Font("Segoe UI", 22.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$g.DrawString('reclu', $fontBrand, $brushInk, 80, 70)
$g.DrawString('Sitios web en 7-14 dias', $fontTitle, $brushInk, 80, 210)
$g.DrawString('+ WhatsApp para que te escriban', $fontSub, $brushMuted, 80, 310)
$g.DrawString('reclu.cl', $fontUrl, $brushMuted, 80, 500)

$out = Join-Path $PSScriptRoot '..\public\og-image.jpg'
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$enc = [System.Drawing.Imaging.Encoder]::Quality
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter $enc, 90L
$bmp.Save($out, $codec, $ep)

$g.Dispose()
$bmp.Dispose()
Write-Output "wrote $out $($w)x$h"
