module.exports = () => {
  return `
    SELECT DISTINCT ?end ?endValue ?endPrecision WHERE {
        wd:Q5468043 wdt:P576 ?end ;
           p:P576 [ a wikibase:BestRank ; psv:P576 [wikibase:timeValue ?endValue ; wikibase:timePrecision ?endPrecision] ]
        # ${new Date().toISOString()}
    }`
}

