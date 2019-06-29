function remQuotes(x) { 

var out = 	{
  "country": x.country,
  "city": x.city,
  "loc": {
    "type": "Point",
    "coordinates": [
      x.lat,//latitude
      x.lng //longitude
    ]
  }
}

db.events.save(out);
}

    
	

