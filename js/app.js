$(document).ready(function() {
    $.getJSON('json/co2_english.json', function(jsonData) {
        var data = jsonData.Eng_Data;
        $('#co2').DataTable({
            data: data,
            columns: [
                { data: 'Country' },
                { data: 'Company' },
                { data: 'Annual CO2 emissions (in t)' }
            ]
        });
    });
});
