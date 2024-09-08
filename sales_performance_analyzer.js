// Create a function to calculate average sales

function calculateAverageSales(sales){
    return sales.reduce() / sales.length
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
}