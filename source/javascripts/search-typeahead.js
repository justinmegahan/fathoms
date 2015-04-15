var counties = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('county'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/counties.json'
});
 
var zips = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('zip'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/zips.json'
});

var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('city'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/cities.json'
});
 
zips.initialize();
counties.initialize();
cities.initialize();

$('#search .typeahead').typeahead({
  highlight: true,
  minlength: 3
},
{
  name: 'counties',
  displayKey: 'county',
  source: counties.ttAdapter(),
  templates: {
    header: '<h3 class="location">Counties</h3>'
  }
},
{
  name: 'zips',
  displayKey: 'zip',
  source: zips.ttAdapter(),
  templates: {
    header: '<h3 class="location">Zip Codes</h3>'
  }
},
{
  name: 'cities',
  displayKey: 'city',
  source: cities.ttAdapter(),
  templates: {
    header: '<h3 class="location">Cities</h3>'
	}
});

$('#search').on('typeahead:selected', function(obj, datum, name) {      
	window.location.href = "/high/" + (datum["county-url"]) + ".html";
});

$('#search').on('typeahead:autocompleted', function(obj, datum, name) {      
	window.location.href = "/high/" + (datum["county-url"]) + ".html";
});