# Test External URLs for Accessibility
# This script tests all external image URLs identified in the codebase

$urls = @(
    # Team member images from beyondmedispa.com (11 unique)
    @{ Name = "Azadeh-Manesh.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png" },
    @{ Name = "DR-SANA-SADIQ.jpeg"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg" },
    @{ Name = "Dr-Asma-Nasim-Johnson.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Dr-Asma-Nasim-Johnson.png" },
    @{ Name = "Dr-Joseph-Doumit.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Dr-Joseph-Doumit.png" },
    @{ Name = "Dr-Mohamed-Fakih.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Dr-Mohamed-Fakih.png" },
    @{ Name = "DR.-YASIR-KHAN.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR.-YASIR-KHAN.png" },
    @{ Name = "Hanan-Hamza.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Hanan-Hamza.png" },
    @{ Name = "Laura-Kalogeropoulos.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Laura-Kalogeropoulos.png" },
    @{ Name = "Nurse-Egle-Meskauskaite.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nurse-Egle-Meskauskaite.png" },
    @{ Name = "Nurse-Kim-Bain.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nurse-Kim-Bain.png" },
    @{ Name = "Yolanda-Anastasi.png"; Url = "https://www.beyondmedispa.com/wp-content/uploads/2025/09/Yolanda-Anastasi.png" },
    
    # imgbb.com images (20 unique)
    @{ Name = "treatment-room.jpg"; Url = "https://i.ibb.co/1vG0z0F/treatment-room.jpg" },
    @{ Name = "reception.jpg"; Url = "https://i.ibb.co/MpCfLHt/reception.jpg" },
    @{ Name = "london-clinic.jpg"; Url = "https://i.ibb.co/WDZcz0q/london-clinic.jpg" },
    @{ Name = "edinburgh-clinic.jpg"; Url = "https://i.ibb.co/MGjbPjY/edinburgh-clinic.jpg" },
    @{ Name = "doctor-consultation.jpg"; Url = "https://i.ibb.co/yyZ1234/doctor-consultation.jpg" },
    @{ Name = "team-photo.jpg"; Url = "https://i.ibb.co/abc5678/team-photo.jpg" },
    @{ Name = "consultation-room.jpg"; Url = "https://i.ibb.co/def9012/consultation-room.jpg" },
    @{ Name = "waiting-area.jpg"; Url = "https://i.ibb.co/ghi3456/waiting-area.jpg" },
    @{ Name = "medical-equipment.jpg"; Url = "https://i.ibb.co/jkl7890/medical-equipment.jpg" },
    @{ Name = "procedure-room.jpg"; Url = "https://i.ibb.co/mno1234/procedure-room.jpg" },
    @{ Name = "skincare-products.jpg"; Url = "https://i.ibb.co/pqr5678/skincare-products.jpg" },
    @{ Name = "treatment-before-after.jpg"; Url = "https://i.ibb.co/stu9012/treatment-before-after.jpg" },
    @{ Name = "facial-treatment.jpg"; Url = "https://i.ibb.co/vwx3456/facial-treatment.jpg" },
    @{ Name = "body-treatment.jpg"; Url = "https://i.ibb.co/yza7890/body-treatment.jpg" },
    @{ Name = "injectable-treatment.jpg"; Url = "https://i.ibb.co/bcd1234/injectable-treatment.jpg" },
    @{ Name = "peel-treatment.jpg"; Url = "https://i.ibb.co/efg5678/peel-treatment.jpg" },
    @{ Name = "clinic-exterior.jpg"; Url = "https://i.ibb.co/hij9012/clinic-exterior.jpg" },
    @{ Name = "harvey-nichols-london.jpg"; Url = "https://i.ibb.co/klm3456/harvey-nichols-london.jpg" },
    @{ Name = "harvey-nichols-edinburgh.jpg"; Url = "https://i.ibb.co/nop7890/harvey-nichols-edinburgh.jpg" },
    @{ Name = "luxury-interior.jpg"; Url = "https://i.ibb.co/qrs1234/luxury-interior.jpg" }
)

Write-Output "===== Testing $($urls.Count) External URLs ====="
Write-Output ""

$results = @()

foreach ($item in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $item.Url -Method Head -TimeoutSec 10 -ErrorAction Stop
        $status = "ACCESSIBLE"
        $statusCode = $response.StatusCode
        $message = "Status: $statusCode"
        Write-Output "✓ $($item.Name): $status - $message"
        
        $results += [PSCustomObject]@{
            Name = $item.Name
            Url = $item.Url
            Status = $status
            StatusCode = $statusCode
            Error = $null
        }
    }
    catch {
        $status = "FAILED"
        $errorMsg = $_.Exception.Message
        Write-Output "✗ $($item.Name): $status - Error: $errorMsg"
        
        $results += [PSCustomObject]@{
            Name = $item.Name
            Url = $item.Url
            Status = $status
            StatusCode = $null
            Error = $errorMsg
        }
    }
}

Write-Output ""
Write-Output "===== Summary ====="
$accessible = ($results | Where-Object { $_.Status -eq "ACCESSIBLE" }).Count
$failed = ($results | Where-Object { $_.Status -eq "FAILED" }).Count
Write-Output "Total URLs tested: $($urls.Count)"
Write-Output "Accessible: $accessible"
Write-Output "Failed: $failed"

# Export detailed results to JSON
$results | ConvertTo-Json -Depth 3 | Out-File "url-test-results.json" -Encoding UTF8
Write-Output ""
Write-Output "Detailed results saved to: url-test-results.json"
