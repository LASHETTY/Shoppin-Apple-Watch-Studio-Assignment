# Create the watches directory if it doesn't exist
$outputDir = "../public/images/watches"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$images = @{
    "1.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/12d70107-64c8-4e35-b12c-638522c4f6e6/image.png?table=block&id=15793756-4501-805b-a0b0-c99b8ad70005&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=GYn9fXU5AenRjjcazL1x3xYU5BmLgakFI55IFnwhP28&downloadName=image.png"
    "2.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/b9649625-98a4-4cea-ba42-77b8aa097344/image.png?table=block&id=15793756-4501-8036-850a-d991bb7c4ae7&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=FA325h5iqIvRxmXyQAi__bPXhDBuZf145L8NlewviWI&downloadName=image.png"
    "3.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/68f8f7b4-7e59-48ed-8243-03caaec07c16/image.png?table=block&id=15793756-4501-8043-bbd9-e68b8d5aef2d&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=x_ktGgA8HeuNjTPhJzVbf0tK4jpUnT1xka9AJcTeSB0&downloadName=image.png"
    "4.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/311aeed6-4d84-4310-97ca-f1bba5a00569/image.png?table=block&id=15793756-4501-80de-bfda-d2f24aadc32b&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=s08cx5MFKqsE4nprpkUFB688onCZO3QEJ6QGWCLp9IU&downloadName=image.png"
    "5.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/ff463570-f964-4994-81f5-8d2328cbce8e/image.png?table=block&id=15793756-4501-80c3-bc6a-d37b8b7a6b89&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=_ojtBzmh40ytwSR4-NFICWF6iUPERNx9-bEMOMIs8Es&downloadName=image.png"
    "6.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/e12e6104-4430-47c4-9e68-d36240c2348b/image.png?table=block&id=15793756-4501-80ad-8cb7-cdd65398c14d&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=8PzsmfDf6Osp5CCoq0B2D2WD5XobB22DnchMmEqyyRE&downloadName=image.png"
    "7.jpg" = "https://file.notion.so/f/f/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/4510b456-24b9-4113-91b8-86c706ebfeb2/image.png?table=block&id=15793756-4501-80d8-b998-ec8870d75e5d&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&expirationTimestamp=1735322400000&signature=Pm94aOZowsa9pGLVGs8rE3DTRkjiRhnXQdIKuxhEnSw&downloadName=image.png"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outFile = Join-Path $outputDir $image.Name
    Write-Host "Downloading $($image.Name)..."
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0")
        $webClient.DownloadFile($image.Value, $outFile)
        Write-Host "Successfully downloaded $($image.Name)"
    }
    catch {
        Write-Host "Failed to download $($image.Name): $_"
    }
}
