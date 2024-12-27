# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "../public/images/cases"
New-Item -ItemType Directory -Force -Path "../public/images/bands"

# Sample image URLs (replace these with actual Apple Watch images)
$cases = @{
    "aluminum-silver" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-nc-s9_VW_PF+watch-face-45-aluminum-midnight-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322726"
    "aluminum-rose-gold" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_VW_PF+watch-face-41-aluminum-pink-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322672"
    "aluminum-black" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-midnight-nc-s9_VW_PF+watch-face-41-aluminum-midnight-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322692"
}

$bands = @{
    "sport-loop-yellow" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3F3ref?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1693594197616"
    "sport-loop-blue" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3D3ref?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1693594197288"
    "sport-loop-green" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3E3ref?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1693594197288"
}

# Download case images
foreach ($case in $cases.GetEnumerator()) {
    $outFile = "../public/images/cases/$($case.Name).png"
    Write-Host "Downloading $($case.Name) to $outFile"
    Invoke-WebRequest -Uri $case.Value -OutFile $outFile
}

# Download band images
foreach ($band in $bands.GetEnumerator()) {
    $outFile = "../public/images/bands/$($band.Name).png"
    Write-Host "Downloading $($band.Name) to $outFile"
    Invoke-WebRequest -Uri $band.Value -OutFile $outFile
}

Write-Host "Done downloading images!"
