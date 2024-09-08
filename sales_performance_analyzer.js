// Create a function to calculate average sales

function calculateAverageSales(salesData){
    if (salesData.length === 0) {
        return 0;
    }
    let totalSales = salesData
    let averageSales = totalSales / salesData.length;
    return averageSales
};


// Create a function to determine performance rating

function determinePerformanceRating(calculateAverageSales){
    if (calculateAverageSales >= 10000) {
        return "Excellent";
    } else if (calculateAverageSales >= 7000) {
        return "Good";
    } else if (calculateAverageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
};