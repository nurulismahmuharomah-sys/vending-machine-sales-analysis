/*--------DATA TABLE--------*/

$(document).ready(function () {
    $("#example").DataTable({
      ajax: {
        url: "js/data.json", 
        dataSrc: "",
      }, 
      columns: [
        { data: "location" },
        { data: "machine" },
        { data: "product" },
        { data: "category" },
        { data: "transaction_date" },
        { data: "line_total" },
      ],
    });
  });
  