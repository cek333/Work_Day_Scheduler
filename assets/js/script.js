let schedule; // array of scheduler entries. Array entries 0 - 8 are ignored.

function saveEntry(event) {
  console.log(`[saveEntry] event triggered`);
  // get handle to <div class="row">
  let divRow = $(event.target).parents('.row');
  let id = divRow.attr('id').split('-')[1];
  console.log(`[saveEntry] id:${id}`, divRow)
  // save entry
  let entry = divRow.find('textarea').val();
  if (entry != "") {
    schedule[id] = entry;
    // update localStorage
    localStorage.setItem('schedule', JSON.stringify(schedule));
    console.log(`[saveEntry] entry stored`);
  }
}

// function colourCodeEntries() {
//   // get current hour
// }

// Initialization
// set the date
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// initialize scheduler data
let tmp = localStorage.getItem('schedule');
if (tmp == null) {
  schedule = [];
} else {
  schedule = JSON.parse(tmp);
}

//colourCodeEntries();

// display stored entries if any
for (let idx=9; idx < schedule.length; idx++) {
  let entry = schedule[idx];
  $(`#hour-${idx} textarea`).val(entry);
}

// add event listeners
$('.fa-save').on('click', saveEntry);


