// Google Apps Script

function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

// Before Create Data
function checkDataExists(nama, jenisKelamin, kewarganegaraan, agama, statusPerkawinan) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();

    for (var i = 0; i < values.length; i++) {
        var row = values[i];
        if (row[0] === nama && row[1] === jenisKelamin && row[2] === kewarganegaraan && row[3] === agama && row[4] === statusPerkawinan) {
            return true; // Data sudah ada
        }
    }
    return false; // Data belum ada
}

// Create Data
function addData(nama, jenisKelamin, kewarganegaraan, agama, statusPerkawinan) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1, 1, 5).setValues([[nama, jenisKelamin, kewarganegaraan, agama, statusPerkawinan]]);
}

// Read Data
function getData() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues();
    return data;
}

// Update Data
function updateData(row, nama, jenisKelamin, kewarganegaraan, agama, statusPerkawinan) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var range = sheet.getRange(row + 1, 1, 1, 5);
    range.setValues([[nama, jenisKelamin, kewarganegaraan, agama, statusPerkawinan]]);
}

// Delete Data
function deleteData(row) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.deleteRow(row + 1);
}