// To preface, no I don't know what I am doing and I've been working on this for three days straight.

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


/// Create a function to identify top and bottom performers

function findTopAndBottomPerformers(salesData) {
    salesData.reduce(sales, name) = sales, 0

    const topPerformer = Math.max(sales)
    const bottomPerformer = Math.min(sales)
};


// Combine functions to generate a performance report

function generatePerformanceReport(salesData) {
    return `name: ${name}
    average sales: ${calculateAverageSales}
    performance rating: ${generatePerformanceRating}
    top/bottom performer: ${findTopAndBottomPerformers}`
};