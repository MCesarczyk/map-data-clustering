# Airports

This is a simple app that shows a list of airports. It is a POC intended to check performance of the clustering libs made for Leaflet.

Some interesting issues are described in this article:
https://dev.to/agakadela/rendering-leaflet-clusters-fast-and-dynamically-let-s-compare-3-methods-291p

but observations doesn't correspond with the results of this POC. Using redraw method on "moveend" action wasn't good in any configuration. Probably better optimizations was made in the libs since the article was written.

Rendering times in production are similiar when using static and dynamic data (~300ms and ~400ms respectively for ~8000 markers). In development mode, dynamic data is rendered a little longer (~800ms compared to ~400ms).

Try optimized for React use approach from this article:
https://www.leighhalliday.com/leaflet-clustering
