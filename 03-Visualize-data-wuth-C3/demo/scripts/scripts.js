$("#dashboardBtn").click(function () {
    $(this).text(function(i, text){
        $('#timeLine').toggle();
        $('#summaryPie').toggle();
        return text === "Timeline" ? "Summary" : "Timeline";
    })
});