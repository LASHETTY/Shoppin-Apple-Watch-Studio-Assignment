# Sample image URLs
$images = @{
    "1.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-midnight-nc-s9_VW_PF+watch-face-41-aluminum-midnight-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322692"
    "2.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_VW_PF+watch-face-41-aluminum-pink-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322672"
    "3.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-starlight-nc-s9_VW_PF+watch-face-41-aluminum-starlight-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322290"
    "4.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_VW_PF+watch-face-45-stainless-gold-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322722"
    "5.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-stainless-graphite-s9_VW_PF+watch-face-41-stainless-graphite-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322744"
    "6.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-titanium-natural-s9_VW_PF+watch-face-45-titanium-natural-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322728"
    "7.jpg" = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-titanium-black-s9_VW_PF+watch-face-45-titanium-black-s9_VW_PF_WF_CO?wid=1400&hei=1400&fmt=p-jpg&qlt=95&.v=1693339322720"
}

# Create the watches directory if it doesn't exist
$outputDir = "../public/images/watches"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outFile = Join-Path $outputDir $image.Name
    Write-Host "Downloading $($image.Name)..."
    
    try {
        Invoke-WebRequest -Uri $image.Value -OutFile $outFile
        Write-Host "Successfully downloaded $($image.Name)"
    }
    catch {
        Write-Host "Failed to download $($image.Name): $_"
    }
}

Write-Host "Done downloading images!"
