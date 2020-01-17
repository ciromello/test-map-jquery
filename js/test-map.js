jQuery(document).ready(function () {
    jQuery("button").click(function () {
        jQuery("li").map(function () {
            alert(jQuery(this).text())
        });
    });
});