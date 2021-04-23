# télécharger les données
curl "https://www.openstreetmap.org/export#map=17/46.79011/6.80793" > heig.osm

# convertir en json
osmtogeojson heig.osm > heig.json

# extraires les arbres
node arbres > ../src/arbres.json

# extraires les bâtiments
node batiments > ../src/batiments.json

# extraires les routes
node routes > ../src/routes.json