// ==UserScript==
// @name VDOT Plows Advanced"
// @namespace http://clayton.oneill.net
// @description Enable advanced features on VDOT's snow plow page
// @match http://vdotplows.org/*
// @version 1.0.0
// @grant none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

function page_run(code) {
    var href = 'javascript:void("' + code + '");';
    console.log("Running: " + href);
    location.href = href;
}

function inject_script(id, script_text) {
    var script = document.createElement("script");
    script.textContent = script_text;
    script.id = id;
    document.documentElement.appendChild(script);
}

$('#rowDebugSplitter').show();
$('#rowDebugSplitter2').show();
$('#rowHighLevelTrucks').show();
$('#rowHighLevelCameras').show();
$('#rowRefreshTimer').show();
$('#rowIdleTrucks').show();
$('#rowTrucksNotPlowing').show();
$('#rowNoEventTruck').show();
$('#rowShowWeather').show();
$('#rowIphoneOnly').show();
$('#rowFindRoute').show();
$('#rowTimer').show();
$('#rowDistrictDebug').show();
$('#rowResidencyDebug').show();
$('#rowAHQDebug').show();
$('#btnMinMaxScreen').show();
$('#lnkTruckHistory').show();
$('#lnkFilter').show();
$('#lnkZoom').show();

inject_script("enable_debug", "\
  isDebug = 1; \
  loadDropdownTimeValues('#drpHistoryStartTime'); \
  loadDropdownTimeValues('#drpHistoryEndTime'); \
  setDropdownTimeValue('Today (All Day)'); \
\
  var currentDate = new Date(); \
  $('#drpHistoryDate').datepicker(); \
  $('#drpHistoryDate').datepicker('setDate', currentDate); \
  console.log('DEBUG ENABLED'); \
");

console.log("Loaded VDOT Plows Advanced");

