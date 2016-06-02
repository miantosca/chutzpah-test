export class median {

    calculate(dataValues): number {

        let sortedDataValues = dataValues.map((dataPoint) => {
            return parseFloat(dataPoint.calculatedValue);
        }).sort((a, b) => { return a - b; });    

        return (sortedDataValues.length % 2) === 0 ?
            this.evenLengthMedian(sortedDataValues) : this.oddLengthMedian(sortedDataValues);
    }

    private evenLengthMedian(sortedDataValues): number {
        let firstPointIndex = (sortedDataValues.length / 2) - 1 ;
        return (sortedDataValues[firstPointIndex] + sortedDataValues[firstPointIndex + 1]) / 2 ;
    }

    private oddLengthMedian(sortedDataValues): number {
        let middleIndex = (sortedDataValues.length + 1 ) / 2 - 1;
        return sortedDataValues[middleIndex];
    }
}