$(document).ready(function() {
    $.getJSON('json/co2_arabic.json', function(jsonData) {
        var data = jsonData.Arab_Data;
        $('#co2').DataTable({
            data: data,
            columns: [
                { data: 'دولة' },
                { data: 'شركة' },
                { data: 'انبعاثات ثاني أكسيد الكربون السنوية (بالطن)' }
            ]
        });
    });
});
