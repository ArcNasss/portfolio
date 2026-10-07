const SHEET_NAME = "Messages";
const SPREADSHEET_ID = "1J6HY69lTBD7fvvKWteP0k9tBjH6Lhhh-KrU5NRQQiqU";

function doPost(event) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const data = event.parameter;

  if (sheet.getRange("A1").getValue() !== "Timestamp") {
    sheet.insertRowBefore(1);
    sheet.getRange("A1:C1").setValues([["Timestamp", "Name", "Message"]]);
    sheet.getRange("A1:C1").setFontWeight("bold");
    sheet.setColumnWidth(1, 170);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(3, 600);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.message || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}